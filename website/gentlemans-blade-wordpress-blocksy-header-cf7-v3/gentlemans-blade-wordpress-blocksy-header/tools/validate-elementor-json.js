const fs = require('fs');
const file = process.argv[2];
if (!file) { console.error('usage: validate-elementor-json.js <file>'); process.exit(2); }
const s = fs.readFileSync(file, 'utf8');
let json;
try { json = JSON.parse(s); } catch (e) { console.error('INVALID JSON: ' + e.message); process.exit(1); }
const checks = [
  ['valid-json', true],
  ['no-section', !s.includes('"elType": "section"') && !s.includes('"elType":"section"')],
  ['no-column', !s.includes('"elType": "column"') && !s.includes('"elType":"column"')],
  ['no-inner-section', !s.includes('inner-section')],
  ['has-containers', s.includes('"elType": "container"') || s.includes('"elType":"container"')],
];
let fail = 0;
checks.forEach(c => { console.log(c[0] + '=' + (c[1] ? 'PASS' : 'FAIL')); if (!c[1]) fail = 1; });
process.exit(fail);
