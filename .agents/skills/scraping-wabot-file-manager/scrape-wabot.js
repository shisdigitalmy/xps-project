// Scrape Wabot File Manager (app.wabot.my)
// Usage:
//   node scrape-wabot.js                -> login (if needed) + list folders with IDs
//   node scrape-wabot.js <folder_id>    -> list all files (name + URL) in that folder
// Requires: npm install playwright && npx playwright install chromium
const { chromium } = require('playwright');
const path = require('path');

const PROFILE_DIR = path.join(__dirname, '.profile');
const BASE = 'https://app.wabot.my';

(async () => {
  const folderId = process.argv[2];

  const ctx = await chromium.launchPersistentContext(PROFILE_DIR, {
    headless: false,
    viewport: { width: 1400, height: 900 },
  });
  const page = ctx.pages()[0] || (await ctx.newPage());
  await page.goto(`${BASE}/file_manager`, { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(() => {});

  // Login check: wait for user to complete manual login if redirected
  await page.waitForTimeout(3000);
  if (!page.url().includes('file_manager')) {
    console.log('BELUM LOGIN — sila login dalam browser yang terbuka...');
    await page.waitForURL('**/file_manager*', { timeout: 5 * 60 * 1000 });
  }
  await page.waitForTimeout(2000);

  const withCsrf = async (fn) =>
    page.evaluate(fn, { BASE, folderId });

  if (!folderId) {
    // List folders
    const folders = await page.evaluate(() =>
      [...document.querySelectorAll('.fm-folder-item')]
        .map((el) => ({
          id: el.getAttribute('data-folder-id'),
          name: ((el.querySelector('.text-truncate') || {}).textContent || '')
            .replace(/\s*Folder\s*$/, '')
            .trim(),
        }))
        .filter((f) => f.id !== '0')
    );
    console.log('FOLDERS (id | name):');
    folders.forEach((f) => console.log(`${f.id} | ${f.name}`));
  } else {
    // Get files via internal API
    const result = await withCsrf(async ({ BASE, folderId }) => {
      const csrf =
        window.csrf ||
        (document.documentElement.innerHTML.match(/var\s+csrf\s*=\s*"([^"]+)"/) || [])[1];
      if (!csrf) throw new Error('CSRF token not found');
      const body = new URLSearchParams({ folder_id: folderId, csrf });
      const res = await fetch(`${BASE}/file_manager/get_folder_files`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: body.toString(),
      });
      // NOTE: Content-Type is text/html but body is JSON
      return { status: res.status, text: await res.text() };
    });

    if (result.status !== 200) {
      console.error(`HTTP ${result.status}`);
      process.exitCode = 1;
    } else {
      const json = JSON.parse(result.text);
      if (json.status !== 'success') {
        console.error('API error:', result.text.slice(0, 300));
        process.exitCode = 1;
      } else {
        console.log(`FILES (${json.files.length}) in folder ${folderId}:`);
        json.files.forEach((f, i) => console.log(`${i + 1} | ${f.name} | ${f.url}`));
      }
    }
  }

  await page.waitForTimeout(1500);
  await ctx.close();
})().catch((e) => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
