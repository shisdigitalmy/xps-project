---
name: scraping-wabot-file-manager
description: Use when the user asks to scrape, list, or extract file names and image/file URLs from Wabot File Manager (app.wabot.my/file_manager), on any Wabot account, especially when login is required or when working with a specific folder
---

# Scraping Wabot File Manager

## Overview

Extract all file names + URLs from any folder in Wabot's File Manager using **Playwright (headed, persistent profile) for login + internal AJAX API for data**. Never scrape the visible DOM for the final data — the API is authoritative.

## Workflow

Script lives in this skill folder: `scrape-wabot.js` (Playwright, Node).

1. **Setup (one-time):** work dir `%TEMP%\opencode\wabot-scrape`; `npm init -y && npm install playwright && npx playwright install chromium`. Copy/link `scrape-wabot.js` there. Skip if already installed from a previous run.
2. **Login (any account):** run `node scrape-wabot.js` with no args. A headed browser opens at `https://app.wabot.my/file_manager`. The user logs in manually in that window. The persistent `.profile` keeps the session for next time.
3. **List folders:** after login the script prints all folders with IDs (from `.fm-folder-item[data-folder-id]`).
4. **Get folder files:** `node scrape-wabot.js <folder_id>`. Calls the internal API and prints name + URL for every file.
5. **Output:** present results as a markdown table; save raw JSON to a `.md`/`.json` file only if the user asks.

## Key Facts (discovered on wabot.my)

- Files endpoint: `POST https://app.wabot.my/file_manager/get_folder_files`
  - Body: `folder_id=<id>&csrf=<token>` (URLSearchParams, `application/x-www-form-urlencoded`)
  - Header: `X-Requested-With: XMLHttpRequest`
  - Response: `{"status":"success","files":[{"name":"...","url":"https://app.wabot.my/writable/uploads/..."}]}` — **Content-Type is `text/html` but the body is JSON**; parse `res.text()`, not `res.json()`.
- CSRF token is dynamic per session. Read it inside the page: `window.csrf` or regex `var\s+csrf\s*=\s*"([^"]+)"` on `document.documentElement.innerHTML`. It is NOT in a `<meta>` tag.
- Folder list (DOM): `.fm-folder-item` elements → `data-folder-id` attribute; name is in child text (contains `\n...Folder` — trim it).
- File URLs live under `https://app.wabot.my/writable/uploads/`. Folders may contain non-images too (`.mp4`, `.txt`) — include them in output, noting the type.

## Gotchas (do NOT skip)

| Trap | Why / Fix |
|------|-----------|
| Scraping visible DOM for files | The page server-renders the *last-viewed* folder's files at any URL; text-matching a folder name matches the sidebar/root list too (false positive). **Always use the API for data.** |
| Assuming folder IDs carry over | IDs are per-account. Always list folders fresh for the logged-in account. |
| Login silently expired | If `page.url()` doesn't contain `file_manager` after load, wait for the user: `page.waitForURL('**/file_manager*', { timeout: 5*60*1000 })`. |
| New folder not in list | If the user names a folder that isn't listed, have them click into it in the open browser and re-run the folder listing; or ask for the folder's exact name. |

## Common Mistakes

- Using `res.json()` on the API call → throws (HTML content-type). Use `res.text()` then `JSON.parse`.
- Headless login → some flows break and the user can't see what's happening. Always launch `headless: false`.
- Reusing a `.profile` from a different account without asking → wrong account's data. Confirm which account is logged in if the user mentioned switching accounts.
