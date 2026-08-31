# PRD — SANTAP Malay Fine Dining (Astro + Tailwind)

**Versi:** 1.0 — 27 Aug 2026
**Stack:** Astro 4 + Tailwind 3, static output, deploy Vercel/Cloudflare
**Gate:** Scope & AC jelas, sedia untuk design

---

## 1. Scope

**In scope (launch):**
- Single page `/` dengan 7 section: Hero, Tentang, Menu (3 cards), Private Dining, Pengalaman, Lokasi, Tempahan
- Header sticky + mobile drawer + sticky CTA bar (mobile)
- Form tempahan (Netlify Forms) + WhatsApp deep link fallback
- System pages: /privasi, /terma, 404
- SEO: title, desc, OG, schema.org Restaurant, sitemap.xml, robots.txt
- Analytics: GA4 / Plausible events

**Out of scope (V2):**
- Blog/journal, CMS, TableApp integration, multi-currency, online payment

---

## 2. Pages & Sections (dari `sitemap.md:1` & `content.md`)

| Section | Content source | Component | States |
|---------|----------------|-----------|--------|
| Header | `content.md#4A` | `Header.astro` + `MobileDrawer.astro` | default, scrolled (shadow), open drawer |
| Hero | `content.md#4B` | `Hero.astro` | — |
| Tentang | `content.md#4C` | `About.astro` | — |
| Menu | `content.md#4D` | `MenuGrid.astro` 3 cards | hover lift |
| Private | `content.md#4E` | `Private.astro` | — |
| Pengalaman | `content.md#4F` | `Features.astro` 4 grid | — |
| Lokasi | `content.md#4G` | `Location.astro` + Map embed | map loading, error |
| Tempahan | `content.md#4H` | `ReservationForm.astro` | idle, validating, success, error |
| Footer | `content.md#4I` | `Footer.astro` | — |

---

## 3. Components & Interactions

- **Header:** Sticky top-0, z-50, bg dark, backdrop-blur bila scroll > 10px. Mobile: hamburger → drawer dari kanan, trap focus, ESC close.
- **Form:** Fields: nama*, tel*, tarikh*, masa*, pax*, note. Validasi inline: required, tel pattern `+?60\d{9,10}`, tarikh >= esok, pax 1-20. Submit → Netlify Forms → redirect `/thanks` atau show success inline. Error summary di atas form. WhatsApp button prefill: `https://wa.me/60XXXX?text=Hi%20SANTAP,%20nak%20tempah%20...`
- **Sticky bar (mobile only, <768px):** Fixed bottom, show bila scroll > 600px, hide bila footer intersect (IntersectionObserver). Button → #tempah.

---

## 4. Responsive & Layout

- **Breakpoints (Tailwind):** sm 640, md 768, lg 1024, xl 1280
- **Desktop:** 12-col grid, container max-w-6xl (1152px), header horizontal, menu 3 col, tentang 2 col (image + quote), lokasi 2 col
- **Mobile:** Single col, hero 60px padding, header hamburger, menu 1 col, sticky bar visible
- **Overflow:** Semua image `object-cover`, text wrap, table di content tidak ada — card sahaja

---

## 5. Accessibility

- Skip link `href="#main"` (preserve dari `index.html:152`)
- Landmarks: header[role=banner], main, nav[aria-label], footer[contentinfo]
- Heading order: h1 hero → h2 setiap section (tiada loncat)
- Form: label `for`, `aria-describedby` untuk error, `aria-live="polite"` untuk success
- Focus: 2px gold outline, offset 3px — visible di dark header
- Alt text: Semua foto ada alt deskriptif
- `prefers-reduced-motion: reduce` → `* { animation:none; transition:none }` (preserve dari `index.html:146`)
- Kontras: Gold di dark ≥ 4.5:1, jangan gold di cream

---

## 6. SEO & Performance

- **Title:** `SANTAP — Malay Fine Dining KLCC | Warisan Istana, Rasa Masa Kini` (≤60 char)
- **Desc:** BM 155 char dari `content.md#5`
- **OG:** Image 1200x630 Unsplash dark interior, `og:type` website, `og:locale` ms_MY
- **Schema:** `Restaurant` JSON-LD (nama, alamat [PLACEHOLDER], tel, servesCuisine Malay, priceRange RM280, halal)
- **Sitemap:** Astro `sitemap()` integrasi
- **Perf budget:** Lighthouse ≥90 perf, ≥95 a11y/SEO, CLS <0.1, LCP <2.5s, total JS <30kb, image WebP + lazy

---

## 7. Privacy & Security

- Form data via Netlify Forms (GDPR, TLS), tiada simpan di client
- Tiada cookie selain analytics (consent banner jika GA4)
- Link external `rel="noopener"` — tidak perlu, semua internal kecuali WhatsApp/maps

---

## 8. Stack & Deploy

- **Astro:** `output: static`, `integrations: [tailwind(), sitemap()]`
- **Tailwind:** `content: ./src/**/*.{astro,ts,tsx}`, extend colors dari `visual-direction.md:3`
- **Deploy:** Vercel / Cloudflare Pages, `npm run build` → `dist/`, domain [PLACEHOLDER] `santap.my`
- **Fonts:** Google Fonts preconnect (preserve `index.html:7`)

---

## 9. Acceptance Criteria (verifiable)

- [ ] `/` render hero H1 "Warisan Istana, Rasa Masa Kini" + CTA Tempah Meja → scroll ke #tempah
- [ ] Header sticky, nav anchor smooth scroll, mobile drawer buka/tutup dengan keyboard
- [ ] 3 menu cards visible, hover lift 4px, klik PDF → buka `menu.pdf`
- [ ] Form: submit kosong → error inline untuk 5 field required; tel invalid → "Format: 60123456789"; tarikh lepas → error; submit valid → success message "Terima kasih — kami akan sahkan via WhatsApp dalam 15 minit" dan Netlify menerima
- [ ] WhatsApp button href mengandungi `wa.me` dengan prefill text
- [ ] Map embed loading, tidak block render
- [ ] Sticky bar muncul di mobile >600px scroll, hilang di footer
- [ ] Lighthouse di `dist/index.html`: Perf ≥90, A11y ≥95, SEO ≥95 — record actual score di `qa-report.md`
- [ ] `prefers-reduced-motion` disable semua animation
- [ ] Print: header/footer/sticky hidden, hero tanpa background

---

## 10. Design Brief untuk Stitch

> Jika Stitch accessible, guna PRD ini sebagai prompt — design system dulu (colors, serif, spacing, card), kemudian desktop + mobile untuk 7 section + form states.

**Jika Stitch tidak accessible:** Stop di gate Stage 6, minta approval untuk code-native mockup (Tailwind). Jangan silent substitute.

