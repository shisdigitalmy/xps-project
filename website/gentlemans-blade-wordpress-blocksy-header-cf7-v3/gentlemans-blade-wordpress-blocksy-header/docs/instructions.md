# Instructions — The Gentleman's Blade v3 on WordPress (base: index-v2.html)

Stack: **Blocksy + Blocksy Companion + Elementor Free + UAE + Contact Form 7**.
Minimum: WordPress 6.x, PHP 7.4+, Elementor Free **3.16+** (Flexbox Container Active).

Files: `elementor-json/01-home.json` (page), `elementor-json/02-footer-container.json`
(container for UAE), `blocksy/gentlemans-blade-blocksy-options.dat`,
`contact-form-7/booking-form-template.txt`, `contact-form-7/mail-template.txt`,
`assets/images/` (12 JPG). Source of truth: `reference/original-index-v2.html`.

## 1. Install theme & plugins

1. **Plugins → Add New** → install + activate **Elementor**, **Ultimate Addons for
   Elementor**, **Contact Form 7**.
2. **Appearance → Themes** → install + activate **Blocksy** (+ Companion).
3. **Elementor → Settings → Features** → `Flexbox Container` = Active.

## 2. Import Blocksy settings

**Appearance → Customize → Import/Export** → import
`blocksy/gentlemans-blade-blocksy-options.dat`. Confirm max width 1280,
Montserrat baseline, gold/bronze/ink palette (see `docs/blocksy-configuration.md`).

## 3. Menu + header

Per `docs/blocksy-header.md`: create `Primary` menu with 6 Custom Links —
`HOME /`, `SERVICES /#services`, `EXPERIENCE /#experience`, `GALLERY /#gallery`,
`BOOKING /#booking`, `VISIT /#visit` — assign to header location; build the
native header row (Logo | Menu | Book Appointment button → `/#booking`), Sticky
Always. No Elementor header anywhere.

## 4. Upload images

FTP/file manager: copy all 12 JPGs from `assets/images/` to
`/wp-content/gb-assets/` (create the folder). See `docs/image-mapping.md`.
Without FTP: **Media → Add New**, upload all 12, then re-point each image
widget/background manually after import.

## 5. Import homepage

1. **Templates → Saved Templates → Import Templates** → `elementor-json/01-home.json`.
2. **Pages → Add New** `Home` → **Edit with Elementor** → folder icon →
   **My Templates** → insert `The Gentleman's Blade — Home`.
3. Page template = **Elementor Full Width** (never Canvas).
4. **Settings → Reading** → static front page = **Home**.

## 6. CF7 form

Per `docs/contact-form-7.md`: create `Booking Form` from
`contact-form-7/booking-form-template.txt`, configure Mail tab from
`contact-form-7/mail-template.txt` (set the real shop inbox), note the form ID,
then in Elementor replace `REPLACE_WITH_CF7_ID` in the booking shortcode widget.

## 7. UAE footer

1. UAE dashboard → enable **Header Footer & Blocks**.
2. **Appearance → Header Footer & Blocks → Add New**: `GB Footer`, Type Footer,
   Display **Entire Website** → **Edit with Elementor** → insert
   `The Gentleman's Blade — Footer` (import `elementor-json/02-footer-container.json`
   first if missing). Publish.
3. If Blocksy's default footer still shows: **Customize → Footer** → empty all rows.

## 8. Additional CSS

**Appearance → Customize → Additional CSS** → paste:

```css
html{scroll-behavior:smooth}
[id]{scroll-margin-top:96px}
.gb-card{transition:border-color .3s ease}
.gb-card:hover{border-color:#B07851}
.gb-map-dark iframe{filter:grayscale(1) invert(.9) contrast(.85)}
.wpcf7-form input,.wpcf7-form select,.wpcf7-form textarea{width:100%;background:#14191F;border:1px solid #2C3E50;color:#F3EFE0;padding:12px 16px;font-size:14px;font-family:Montserrat,sans-serif;border-radius:6px}
.wpcf7-form input:focus,.wpcf7-form select:focus,.wpcf7-form textarea:focus{outline:none;border-color:#B07851}
.wpcf7-form ::placeholder{color:#64748B}
.wpcf7-not-valid{border-color:#f87171 !important}
.wpcf7-not-valid-tip{color:#f87171;font-size:12px}
.wpcf7-response-output{border:1px solid #0A6221 !important;background:rgba(10,98,33,.2);color:#F3EFE0;padding:12px 16px;text-align:center}
.wpcf7-submit{display:block;width:100%;background:#B07851;color:#14191F;border:none;padding:16px;font-family:Montserrat,sans-serif;font-weight:700;font-size:14px;letter-spacing:.2em;cursor:pointer;border-radius:6px}
.wpcf7-submit:hover{background:#C68A60}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
```

## 9. Replace URL + regenerate (only if your domain differs)

**Elementor → Tools → Replace URL**: Old `https://gentlemensblade.fvor8.com` →
New `https://your-domain.com`. Then **Regenerate Files & Data**. Clear
WordPress/cache/CDN/browser cache.

## QA checklist (desktop 1440×900 first, then ±768, ±390)

- [ ] Hero (bg + overlay), SERVICES 4 cards, EXPERIENCE 2-col, GALLERY 4 tiles,
      BOOKING form, VISIT 2-col, footer 3-col
- [ ] Anchors smooth-scroll (`/#services`, `/#experience`, `/#gallery`, `/#booking`, `/#visit`); header sticky
- [ ] Card `SELECT SERVICE` preselects the CF7 dropdown (with `?service=` slug)
- [ ] CF7: empty submit → red errors; valid submit → success output
- [ ] Gallery tile → Elementor lightbox + arrows
- [ ] Map dark-filtered; mobile stacks 1-col, gallery 1-col, hamburger menu
- [ ] Footer on all pages; no Blocksy footer duplication

## Troubleshooting

| Problem | Fix |
|---|---|
| Import fails / empty template | Elementor ≥ 3.16, Flexbox Container Active; use these JSON files unedited |
| Broken images | Files in `/wp-content/gb-assets/`? Replace URL run? (Method B: remap manually) |
| WP page title above hero | Blocksy page metabox → disable Page Title; Template = Elementor Full Width |
| Menu anchors dead | URLs must start with `/` (`/#booking`); check `[id]{scroll-margin-top:96px}` |
| No booking emails | Set real inbox in CF7 Mail tab + working SMTP on server |
| Old Blocksy footer shows | Customizer → Footer → empty all rows |
| Fonts wrong | Headings Cinzel, body Montserrat — open any heading + Update to enqueue; else OMGF plugin |
| `.dat` sanity | Re-download this package; on the live server run `php -r 'var_dump(array_keys(unserialize(file_get_contents("gentlemans-blade-blocksy-options.dat"))));'` — expect template/site_url/mods/options/custom_palettes/wp_css |
