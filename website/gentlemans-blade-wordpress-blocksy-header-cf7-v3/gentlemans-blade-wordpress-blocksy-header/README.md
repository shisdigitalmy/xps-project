# The Gentleman's Blade — WordPress Package v3 (base: index-v2.html)

## Final architecture

- **Theme:** Blocksy
- **Theme companion:** Blocksy Companion
- **Header:** **Blocksy Native Header Builder**
- **Navigation:** **WordPress native menu** assigned to Blocksy Header Menu
- **Page content:** Elementor Free — Containers only
- **Footer:** Ultimate Addons for Elementor (UAE / formerly HFE)
- **Booking form:** Contact Form 7

Start with: `docs/instructions.md`

## Main files

- `blocksy/gentlemans-blade-blocksy-options.dat`
- `elementor-json/01-home.json`
- `elementor-json/02-footer-container.json`
- `contact-form-7/booking-form-template.txt`
- `contact-form-7/mail-template.txt`
- `docs/instructions.md`
- `docs/blocksy-header.md`
- `docs/blocksy-configuration.md`
- `docs/contact-form-7.md`
- `docs/image-mapping.md`
- `tools/gen-v3-json.js`
- `tools/validate-elementor-json.js`
- `assets/images/`
- `reference/original-index-v2.html`

## Important change vs cf7-v2 package

There is **no Elementor header JSON** in this package. Header/navigation are intentionally native Blocksy + WordPress Menu. The footer JSON is an Elementor **container template**, not `type: footer`. Service preselect (card → CF7 dropdown) is a small script in an HTML widget next to the booking shortcode — see `docs/contact-form-7.md`.
