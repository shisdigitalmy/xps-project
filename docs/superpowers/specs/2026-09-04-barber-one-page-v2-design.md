# Design Spec — Barber One Page v2 (The Gentleman's Blade)

- Date: 2026-09-04
- Status: Approved to plan (user said "ok proceed", telegram ignored)
- Source refs: `C:\Users\XPS\Downloads\barber website\one page site\v2\stitch_one_page_site_assets\the_gentleman_s_blade_one_page_luxury_barbershop_website\code.html`, `design.md_the_gentleman_s_blade_design_system.md`
- Existing repo file (DO NOT overwrite): `website/gentlemans-blade/index.html`
- New file: `website/gentlemans-blade/index-v2.html`

## 1. Goal

Bina one page site baru yang setia pada Stitch reference, guna stack HTML + Tailwind CDN + vanilla JS, single-file, tiada build step. Fail lama kekal utuh sebagai rollback (rule versioning AGENTS.md).

Non-goals: tiada backend, tiada booking DB, tiada payment, tiada WordPress/Elementor dalam scope ini, tiada Telegram push (user suruh abaikan).

## 2. Architecture

- Single HTML file, Tailwind via CDN (`https://cdn.tailwindcss.com`), config inline `tailwind.config` extend colors/fonts ikut design tokens.
- Fonts: Cinzel (display) + Montserrat (body) via Google Fonts. Material Symbols optional — elak jika boleh, ganti dengan inline SVG supaya kurang dependency (Stitch pakai Material Symbols; kita ganti dengan SVG ringkas untuk icons).
- Semua CSS custom minima dalam `<style>`: copper-glow, reveal animation, nav underline, scrollbar, reduced-motion, print.
- Semua JS vanilla di hujung `<body>`: drawer, scrollspy, reveal, booking, slots, lightbox.
- Images: local sahaja, reuse `website/gentlemans-blade/assets/images/` (hero.jpg, service-cuts.jpg, service-beards.jpg, service-shaves.jpg, service-treatments.jpg, experience-1/2/3.jpg, gallery-1/2/3.jpg, interior.jpg). Tiada `lh3.googleusercontent` dalam v2.

## 3. Layout / Sections (ikut code.html)

1. Sticky header: logo SVG razor + wordmark, nav anchors (Home, Services, Experience, Gallery, Booking, Visit), CTA Book Appointment, mobile hamburger + fly-out drawer.
2. Hero (#home): min-h 90vh, bg hero.jpg + gradient overlay, overline badge EST. 2018, H1 THE GENTLEMAN'S BLADE, subcopy, 2 CTA (Book / Explore), 3 trust badges.
3. Services (#services): header + 4 cards (Master Cut $15+, Beard Sculpt $15+, Royal Ritual $25+, Scalp & Relax $28+). Setiap card: image 1:1, badge, title, desc 2 baris, price gold, button Select & Book → panggil `selectService()` + anchor ke #booking.
4. Experience (#experience): 2-col — kiri editorial (philosophy, 3 highlights), kanan bento (1 large + 2 small/stat 100% craft).
5. Gallery (#gallery): 4-col grid aspect-square, hover overlay (barber name + style name), click → lightbox dengan prev/next, ESC close, focus trap ringkas.
6. Booking (#booking): card form — nama, phone/email, service select, barber select, date + 6 time slots, nota, submit CONFIRM APPOINTMENT → inline success notice (simulasi, tiada POST).
7. Visit (#visit): kiri info (address, hours, phone, email, socials), kanan map card stylized + Get Directions link ke Google Maps.
8. Footer: logo, statement, links (Privacy, Terms, Sanitation, Press), copyright 2018–2026.

## 4. Design tokens (dari design.md)

- bg-base #14191F, surface-dark #1F2937, surface-elevated #253242, copper #B07851, copper-hover #C68A60, gold #E5A962, green #0A6221, border #2C3E50, text-primary #F3EFE0, text-secondary #94A3B8, text-muted #64748B.
- Radius: button/input 6px, card 8px, badge 4px. Border default 1px #2C3E50, hover/accent #B07851.
- Type: Cinzel 700 untuk H1/H2 uppercase, Montserrat untuk body/label. H1 56px desktop / 36px mobile, H2 40/28, body 16/15, button 14 uppercase tracking 0.12em, eyebrow 12 tracking 0.2em.
- Max width 1280px, padding 16px mobile / 32px desktop. Services 4/2/1 col, gallery 4/2/1 col.

## 5. JS behaviour

- `selectSlot(btn)`: toggle active class antara 6 slot buttons.
- `selectService(value)`: set `serviceSelect` ikut value dari card.
- `handleBooking(e)`: preventDefault, required check (nama non-empty, contact non-empty tanpa format ketat sebab terima phone ATAU email, service dipilih, date diisi, satu slot aktif), tunjuk `#confirmationNotice`, scrollIntoView.
- Drawer: toggle hidden, aria-expanded swap, tutup bila link diklik.
- Scrollspy: IntersectionObserver untuk active nav link.
- Reveal: IntersectionObserver tambah `.in`, fallback terus show jika tiada IO.
- Date: set `min` + default = today (YYYY-MM-DD).
- Lightbox: array dari `[data-lightbox] img`, show(i), prev/next, ESC/arrows, lock body scroll, return focus ke thumbnail.
- Footer year auto.

## 6. Responsive & a11y

- Breakpoints: <640 mobile (drawer, 1 col, sticky bottom Book bar optional — skip untuk v2 bagi kekal simple), 640–1024 tablet (2 col), ≥1024 desktop (4 col, booking + visit side-by-side ikut Stitch).
- Semua img ada `alt` deskriptif ikut mapping servis/galeri.
- Label `for` untuk semua input, error text kontras tinggi, focus ring `outline: 2px solid #B07851`.
- Skip link, semantic header/main/section/footer, aria-labels untuk nav/lightbox/menu.
- `prefers-reduced-motion: reduce` matikan kenburns/reveal/transition. `@media print` sorok header/form CTA.

## 7. Asset mapping (Stitch → local)

- Hero bg IMAGE_2/IMAGE_13 → `assets/images/hero.jpg`
- Cuts IMAGE_6 → `service-cuts.jpg`, Beards IMAGE_4 → `service-beards.jpg`, Shaves IMAGE_3 → `service-shaves.jpg`, Treatments IMAGE_5 → `service-treatments.jpg`
- Experience IMAGE_12 → `experience-1.jpg`, tools IMAGE_11 → reuse `gallery-3.jpg` (tools), extra experience → `experience-2.jpg`, `experience-3.jpg`
- Gallery Pompadour IMAGE_10 → `gallery-2.jpg`, Slick Undercut IMAGE_9 → `gallery-1.jpg`, Skin Taper IMAGE_8 → `service-cuts.jpg` (reuse), Beard Detail IMAGE_7 → `service-beards.jpg` (reuse), interior → `interior.jpg`
- Logo IMAGE_14 → inline SVG razor (tiada file logo raster; elak pecah).

## 8. Verification

- Buka `index-v2.html` dalam browser (double-click atau `npx serve`), tiada console error.
- Check: nav anchor smooth scroll, drawer mobile, Select & Book isi dropdown betul, slot toggle satu aktif, submit kosong → error, submit penuh → success notice, lightbox open/prev/next/ESC, responsive 375px/768px/1280px, images semua load local (Network tab tiada googleusercontent).
- Tiada test framework (projek tiada test/linter ikut AGENTS.md).

## 9. Risks / notes

- Tailwind CDN warning dalam console adalah expected (CDN play, bukan production build) — acceptable untuk single-file brief ini.
- Material Symbols diganti SVG — rupa ikon sedikit berbeza dari Stitch tapi lebih ringan dan offline-friendly.
- Booking hanya simulasi front-end; kalau nak WhatsApp deep-link atau Telegram bot nanti, itu follow-up berasingan.
