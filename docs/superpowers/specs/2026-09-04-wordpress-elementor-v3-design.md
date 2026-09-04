# Design Spec — WordPress Elementor Package v3 (base index-v2.html)

- Date: 2026-09-04
- Status: Design approved by user ("ok proceed"); PLAN ONLY, no build yet
- SOP (wajib ikut): `website/wordpress-conversion-sop-v1.md`
- Source HTML: `website/gentlemans-blade/index-v2.html` (single-file Tailwind + vanilla JS)
- Target domain: `https://gentlemensblade.fvor8.com`
- New package folder: v3 baru di bawah `website/` (nama cadangan: `website/gentlemans-blade-wordpress-blocksy-header-cf7-v3/`); folder `cf7-v2` dan `wordpress/` (v1) kekal untouched ikut rule versioning
- Stack: Blocksy + Blocksy Companion + Elementor Free + UAE + Contact Form 7. Tiada Elementor Pro, tiada fake HTML form

## 1. Keputusan yang sudah lock (user-approved)

1. Base = v2 (`index-v2.html`), bukan v1. Pakej `cf7-v2` sedia ada disahkan berisi content v1 (reference v1, servis CF7 v1, Oswald, anchor `/#book`) — tidak diguna semula, hanya jadi rujukan format.
2. Folder pakej v3 baru; tiada overwrite fail sedia ada.
3. Booking = CF7 (SOP §10), bukan demo form, bukan Fluent Forms.
4. CSS masuk 100% (tokens, CF7 styling, focus, reduced-motion, print). JS hanya yang tiada native equivalent: snippet preselect servis; selebihnya guna native Blocksy/Elementor/CF7.

## 2. Architecture (SOP §2–§3, §9)

- **Blocksy**: native header (`Logo | Nav | CTA` desktop; `Logo | Hamburger` + off-canvas mobile), WP native menu, global palette + typography baseline, Additional CSS.
- **Elementor Free**: semua body — hero, services, experience, gallery, booking (CF7 shortcode), visit. Containers sahaja; Template = Elementor Full Width (bukan Canvas).
- **UAE**: footer sahaja (container template diimport ke UAE Footer, Display Entire Website).
- **CF7**: satu booking form + Mail tab + CSS padanan design, diembed via Shortcode widget.

## 3. Elementor homepage structure (SOP §4–§7, §16)

- Outer containers `width:100%`, inner content `max-width:1280px`. Desktop-first, validate 1440px dulu, kemudian tablet/mobile. Jangan harap CSS class semata — set native container width/flex dalam JSON.
- Sections + CSS IDs: `home` (hero, bg hero.jpg + overlay, Cinzel H1, 2 CTA), `services` (4 cards: Master Cut $15+, Beard Sculpt $15+, Royal Ritual $25+, Scalp & Relax $28+; grid 4/2/1), `experience` (editorial + bento; 2-col/1-col), `gallery` (4 imej, Basic Gallery + lightbox native; 4-col desktop ikut reference, 2-col tablet, 1-col mobile), `booking` (1-col centered max ~768px, CF7 shortcode), `visit` + `contact` (info + directions; 2-col/1-col), footer 3-column dalam UAE.
- Menu WP (SOP §3 format): `HOME /`, `SERVICES /#services`, `EXPERIENCE /#experience`, `GALLERY /#gallery`, `BOOKING /#booking`, `VISIT /#visit`.
- Reveal-on-scroll v2 diganti Elementor native entrance animations. Scrollspy active-link digugurkan (tiada native; elak custom JS yang rapuh) — hover/active styling menu ikut Blocksy.

## 4. CF7 spec (SOP §10–§11)

- Fields: `[text* your-name]`, contact sebagai `[text* your-contact]` (terima phone ATAU email — `[email*]` akan reject phone), `[select* service]` 5 pilihan v2 (Master Cut $15.00+, Beard Sculpt $15.00+, Royal Ritual Shave $25.00+, Scalp & Relax $28.00+, Full Combo $55.00+), `[select barber]` optional (Any Available, Marcus "The Blade", James Vance, Leo Rossi), `[date* booking-date min:today]`, `[select* booking-time]` 6 slot v2 (10:00 AM, 11:30 AM, 02:00 PM, 03:30 PM, 05:00 PM, 06:30 PM), `[textarea your-notes]`, submit `CONFIRM APPOINTMENT`.
- Mail tab: subject + body guna semua fields di atas; alamat penerima sebagai placeholder yang instructions suruh ganti.
- CSS: input/select/textarea/button/label/placeholder/error/success/focus match v2 (copper focus `#B07851`, error merah, success hijau gelap) — rujuk `index-v2.html` booking section sebagai source of truth visual.
- Snippet preselect servis: butang card link ke `/booking-anchor` + JS kecil baca pilihan (contoh: card CTA bawa query/hash yang snippet dalam HTML widget tukar kepada `service` select). Detail implementasi dalam plan; tiada ubah suai core plugin.

## 5. Blocksy `.dat` (SOP §12)

- Base format = `.dat` sedia ada dalam folder cf7-v2 (PHP serialized, sah). Deltas: `site_url` → target domain; `rootTypography` family Inter→Montserrat; semak palette (nota: `.dat` color3 `#E8DFCE` vs v2 text-primary `#F3EFE0` — plan putuskan nilai akhir); maxSiteWidth 1280, content spacing/edge 0, button rust `#C05621`/hover `#9A4519`.
- Larangan: tiada hardcoded menu/logo/page/media IDs. Validate dengan PHP unserialize sebelum deliver.

## 6. Images (SOP §13)

- 12 JPG dari `website/gentlemans-blade/assets/images/` disalin ke pakej `assets/images/`; base URL `https://gentlemensblade.fvor8.com/wp-content/gb-assets/`; `image-mapping.md` (fail → widget/lokasi → alt text v2) + Replace URL flow dalam instructions. Logo kekal inline SVG (footer) + Blocksy text/image logo (header).

## 7. Docs & install order (SOP §14–§15)

- `docs/`: `instructions.md` (20 langkah SOP termasuk CF7 ID swap, Regenerate CSS, clear cache), `image-mapping.md`, `blocksy-configuration.md`, `contact-form-7.md` (+ `blocksy-header.md` nota menu/header, ikut konvensyen folder cf7-v2).
- Final deliverable ikut struktur §18 (elementor/01-home.json + footer-container.json, blocksy/.dat, cf7/2 txt, images/, docs/, source/original `index-v2.html`, validator script) + ZIP.

## 8. QA & success (SOP §17, §20)

- QA visual 1440×900, ±768, ±390 desktop-first; grids betul, hero proportion, anchor nav, CF7 display + submit, footer semua page, header responsive. Import success ≠ visual success.
- JSON validation: `section=0 column=0 inner-section=0`, JSON parse valid, tiada absolute URL source-site.

## 9. Non-goals (fasa plan ini)

- Tiada build/tiada kod — output fasa ini hanya design doc ini + implementation plan. Tiada deploy ke `gentlemensblade.fvor8.com`, tiada import ke WP live, tiada pembelian/lesen apa-apa.
