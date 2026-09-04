# Herbalabz One-Page Site — Design Spec v1 (2026-09-04)

- Sumber: `website/herbalabz/copywriting-v1.md` (copy Bahasa Melayu, 8 seksyen), `website/herbalabz/stitch assets/.../design.md_herbalabz.md` + `premium_kampung_apothecary/DESIGN.md` (design system), Stitch `screen.png` assets.
- Keputusan user: single-file + Tailwind CDN, aset local Stitch, skop penuh 8 seksyen + Testimoni (9 seksyen total).

## 1. Output

- `website/herbalabz/index-v1.html` (single file, HTML + Tailwind CDN + JS inline)
- `website/herbalabz/assets-v1/` — 11 PNG di-copy dari Stitch assets:
  - `hero.jpg` ← `ultra_high_resolution_commercial_hero_banner_photography_for_malaysian_herbal/screen.png`
  - `produk-sabun.png` ← `exact_isolated_..._kemuning_glow_soap.../screen.png`
  - `produk-sendicare.png` ← `exact_isolated_..._minyak_sendicare_plus.../screen.png`
  - `produk-raja-perkasa-minyak.png` ← `exact_isolated_..._minyak_raja_perkasa.../screen.png`
  - `produk-maajun.png` ← `exact_isolated_..._maajun_tok_crat.../screen.png`
  - `produk-uncang.png` ← `exact_isolated_..._uncang_herba_raja_perkasa.../screen.png`
  - `produk-teh.png` ← `exact_isolated_..._teh_herba_osmanthus.../screen.png`
  - `testimoni-diri.png` ← `candid_..._glowing_young_malay/screen.png`
  - `testimoni-mak.png` ← `candid_..._an_elderly_malay/screen.png`
  - `testimoni-suami.png` ← `candid_..._a_healthy_confident/screen.png`
  - `testimoni-ayah.png` ← `candid_..._an_active_elderly_malay/screen.png`
- Logo: inline SVG dari `herbalabz_brand_logo/code.html` (tiada fail imej).
- Fail asal tidak di-overwrite (peraturan versioning AGENTS.md).

## 2. Stack & tema

- Tailwind via CDN (`https://cdn.tailwindcss.com`) + `tailwind.config` inline: warna `herba: #0C382E`, `gold: #C6A24B`, `cream: #FDF8EE`, `leaf: #3A7D44`, `charcoal: #1F2937`, `sand: #EFE5D0`, `wa: #25D366`.
- Font: Cinzel (display, ganti Playfair — lebih dekat dengan logo SVG) + Plus Jakarta Sans (body) via Google Fonts.
- Mobile-first, wrapper `max-w-[480px]` center dengan shadow di desktop (ikut design.md). Desktop product grid expand ke 3 col dalam container `max-w-5xl`.
- Radius: kad `rounded-[20px]`, butang pill `rounded-full`. Shadow: `0 8px 24px -4px rgba(12,56,46,.08)`.

## 3. Seksyen (copy verbatim dari copywriting-v1.md)

1. Header sticky hijau tua (logo SVG + link anchor + CTA WhatsApp).
2. Hero: eyebrow, H1 "Satu Jenama Herba, Untuk Mak, Ayah, Suami & Diri Sendiri", sub, 2 CTA (WhatsApp utama + "Tengok 6 Produk"), 3 microcopy ✓.
3. Masalah: "Kami Faham, Penat Jaga Semua Orang" + 3 kad (diri / mak ayah / suami) + penutup.
4. Kenapa Herbalabz: 4 bullets.
5. Produk (6 kad, grid 2-col mobile): nama + tagline + 3 manfaat + "Untuk siapa" + CTA WhatsApp prefilled ikut produk. Nota: guna nama "Maajun Tok Urat" ikut copywriting (design.md tulis "Tok Crat" — copywriting menang).
6. Panduan Pilih: 3 tabs (A diri / B suami / C mak ayah) + CTA "WhatsApp Kami Sekarang".
7. Testimoni: 4 kad (Diri–Sabun/Teh, Mak–Teh/Sendicare, Suami–Uncang/Maajun, Ayah–Sendicare/Raja Perkasa) + portrait.
8. Cara Order 3 langkah + CTA besar + microcopy "Tiada paksaan beli".
9. FAQ accordion 6 soalan + Hubungi/Footer (011-56980854, @Herbalabz FB/TikTok, disclaimer bukan-ubat) + sticky WhatsApp bar mobile.

## 4. Interaksi (vanilla JS, ~60 baris)

- Tabs panduan: klik tukar panel, `aria-selected`, active style emas/hijau.
- FAQ accordion single-open dengan chevron rotate, `aria-expanded`, keyboard accessible (button native).
- Smooth scroll CSS + JS offset header; tahun footer auto; sticky bar tidak overlap footer (padding-bottom body).
- No-JS fallback: semua panel/tab content visible via `<noscript>` style; accordion guna `<details>`-like behaviour fallback (content tidak `hidden` tanpa JS — JS tambah `hidden` masa init).

## 5. WhatsApp links (base `https://wa.me/601156980854`)

- Umum: `?text=Assalamualaikum%20Herbalabz%2C%20saya%20nak%20tanya%20tentang%20produk%20herba%20untuk%20keluarga`
- Setiap produk: `...saya%20nak%20tanya%20tentang%20[PRODUK]` (Sabun Kemuning Glow, Sendicare Plus, Minyak Raja Perkasa, Maajun Tok Urat, Uncang Herba Raja Perkasa, Teh Osmanthus).

## 6. A11y / prestasi / patuh

- Semantic HTML + skip link + ARIA (`aria-label`, `aria-labelledby`, `role`), alt Melayu setiap gambar, `width/height` + `loading="lazy"` kecuali hero `eager` + `fetchpriority="high"`, `onerror` fallback.
- `prefers-reduced-motion` + `@media print` (sembunyi sticky bar/nav).
- Bahasa lembut, elak claim sembuh/rawat (guna "membantu / menyegarkan / tradisional"), disclaimer footer wajib.
- Kontras: teks charcoal `#1F2937` atas cream, putih atas `#0C382E` (lulus AAA).

## 7. Verifikasi

- Buka `index-v1.html` direct + `npx serve`; semak 390px & desktop; klik semua 10+ CTA ke nombor betul; tiada console error; semua 11 imej load; tabs + accordion berfungsi dengan keyboard.

## Spec self-review

- Placeholder scan: tiada TBD — semua copy, warna, link, aset mapping lengkap.
- Konsistensi: nama produk ikut copywriting-v1.md; warna/font/spacing ikut design.md; skop 9 seksyen sepadan dengan kelulusan user (8 + testimoni).
- Skop: satu fail + satu folder aset — cukup untuk satu pelan implementasi, tiada decomposition perlu.
- Ambiguiti: "Maajun Tok Crat vs Tok Urat" — diputuskan ikut copywriting ("Tok Urat"). Berat imej PNG 1.5MB — diterima untuk v1, optimize ke WebP ditangguh ke v2.

## Addendum v2 — WebP + srcset (2026-09-04)

- Output baru: `website/herbalabz/index-v2.html` (copy v1 + 11 blok `<picture>`), `index-v1.html` kekal utuh 41892 bytes.
- `website/herbalabz/assets-v2/`: 23 fail WebP via sharp — hero 480/800/1200w (q78), produk 400/800w (q78), testimoni 160/320w (q75). Jumlah 635,814 bytes vs 15,582,280 bytes PNG (jimat 96%).
- Fallback: `<img>` dalam setiap `<picture>` masih tunjuk PNG `assets-v1/` untuk browser tanpa WebP.
- `sizes`: hero `(max-width: 520px) 480px, 960px`; produk `(max-width: 520px) 50vw, 320px`; testimoni `80px`.
- `width/height` dibetulkan ikut dimensi sebenar (hero 1376×768, produk/testimoni 1024×1024) untuk CLS tepat.
- Verify: 11 `<picture>` / 11 `source webp` / 23 rujukan fail wujud / 13 link WhatsApp kekal / 11 fallback PNG.

## Addendum v3 — Motion (2026-09-04, skill `animate`)

- Output baru: `website/herbalabz/index-v3.html` (copy v2 + motion); v1/v2 kekal utuh.
- Gate: landing marketing (occasional) → layak. Tujuan: reveal = explanation, hover/press = feedback, accordion/tab = state indication. Tolak: parallax & mouse-tracking (audiens mobile sentuh).
- Ingredients: CSS transitions + CSS keyframes + IntersectionObserver (sekali, `once`), tiada library. Props `transform`/`opacity` sahaja (kecuali `height` 200ms untuk accordion — dibenarkan). Tokens `--ease-out: cubic-bezier(0.23,1,0.32,1)`, `--ease-in-out` sedia untuk guna masa depan.
- Masuk: hero stagger 20–370ms (rise 550ms + img settle 1100ms), sticky bar slide-up 450ms, reveal 450–500ms + stagger 60ms/anak, tab fade 220ms, accordion 200ms, press 160ms (scale 0.97), hover zoom 250ms (gated `hover:hover + pointer:fine`), header shadow on scroll.
- A11y: `prefers-reduced-motion` (masih nampak semua, tanpa gerak) + `noscript` fallback + reveal disekat di bawah `html.js` supaya tiada kandungan tersembunyi tanpa JS.
- Verify: 3/3 inline script lulus `node --check`, CSS braces 56/56, sifar pola larangan (`transition:all`, `scale(0)`, `ease-in`), 11 picture / 13 WA / 12 FAQ id+aria kekal.
