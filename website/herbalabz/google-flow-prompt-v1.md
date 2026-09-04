# Herbalabz — Google Flow Prompt v1
**Untuk:** Generate design mockup one-page site (mobile scroll)
**Attach wajib dalam Flow:** `logo.jpg` + `brochure.jpg` + `copywriting-v1.md`
**Aspect ratio wajib:** 9:16 portrait

---

## CARA GUNA (30 saat)
1. Buka Google Flow → New prompt → Attach `logo.jpg` dan `brochure.jpg` sebagai Image Reference / Style + Character
2. Copy SEMUA teks dalam kotak PROMPT SIAP COPY bawah ni → Paste
3. Set Aspect Ratio: **9:16**, Output: Image / Mockup, Quality: High
4. Generate 2-3 variasi, pilih yang teks Melayu paling bersih

---

## PROMPT SIAP COPY (copy dari sini)

```
Mobile one-page website mockup for HERBALABZ Malaysian herbal brand, full-length vertical scroll, aspect ratio 9:16 portrait, ultra-clean, premium kampung-modern aesthetic.

USE ATTACHED IMAGES AS REFERENCE:
- Use logo.jpg for logo, green lab-flask + leaves icon, brand name HERBALABZ
- Use brochure.jpg for brand colors, product photos and packaging: black pouch KEMUNING GLOW SOAP, MAAJUN TOK URAT pouch, small bottle MINYAK SENDICARE PLUS, small bottle MINYAK Raja Perkasa yellow label, green box UNCANG HERBA RAJA PERKASA, beige box TEH HERBA OSMANTHUS. Recreate 6 product cards with matching photos, no distortion.

LANGUAGE: All UI text in Bahasa Melayu Malaysia (keep exact, do not translate to English, no lorem ipsum, no gibberish text, must be sharp legible).

PAGE STRUCTURE TOP TO BOTTOM (must show all in one long scroll):

1. HERO - dark green header, gold songket divider line, eyebrow "HERBALABZ - PILIHAN HERBA UNTUK SEISI KELUARGA", big serif headline "Satu Jenama Herba, Untuk Mak, Ayah, Suami & Diri Sendiri", subtext small, 2 buttons: solid gold "Tanya di WhatsApp - 011-56980854" + outline "Tengok 6 Produk", trust row "✓ Guna harian ✓ Mudah dibawa ✓ Sesuai seisi keluarga", hero background cream with soft green leaves, mortar-and-pestle subtle motif.

2. MASALAH - title "Kami Faham, Penat Jaga Semua Orang", 3 soft white cards with green icon: Untuk Diri Sendiri / Untuk Mak Ayah / Untuk Suami & Keluarga.

3. KENAPA HERBALABZ - title "Herba Tradisi, Pilihan Masa Kini", 4 checkmark bullets in 2x2 grid.

4. PRODUK (6 CARDS, 2-column grid like brochure) - section title "Pilih Ikut Keperluan Keluarga Anda". Each card: product photo top, dark green label bar with product name, 3 bullet points, "Untuk siapa" badge, small WhatsApp CTA:
- KEMUNING GLOW SOAP - Untuk Kulit Segar Harian
- MINYAK SENDICARE PLUS - Untuk Urutan Harian Mak Ayah
- MINYAK RAJA PERKASA - Untuk Keyakinan Lelaki, Kegunaan Luaran
- MAAJUN TOK URAT - Ikhtiar Cergas Tradisional
- UNCANG HERBA RAJA PERKASA - Untuk Dalaman Lelaki
- TEH HERBA OSMANTHUS - Untuk Tenang Bila-Bila Masa

5. PANDUAN PILIH - 3 highlighted boxes: A. Untuk Diri (Sabun+Teh), B. Untuk Suami (Minyak/Uncang/Maajun), C. Untuk Mak Ayah (Sendicare+Teh).

6. CARA ORDER 3 LANGKAH - 1 WhatsApp/DM, 2 Cerita keperluan, 3 Kami cadangkan, big CTA "Chat 011-56980854 Sekarang".

7. FAQ - 6 accordion rows, clean.

8. HUBUNGI + FOOTER - dark green footer, big title "Jom Mula Dengan Satu Produk Dulu", contact: 011-56980854, Facebook & TikTok @Herbalabz, tagline "Herba Tradisi, Pilihan Masa Kini", small disclaimer text.

9. AFTER FOOTER - MANDATORY COLOR PALETTE STRIP: show 5 color swatches in a row with hex codes below footer, labelled "COLOR PALETTE": #0C3B2E Deep Herba Green, #C6A24B Royal Gold, #FDF8EE Warm Cream, #3A7D44 Leaf Green, #1F2937 Charcoal Text. Do not omit this strip.

DESIGN SYSTEM:
- Background: #FDF8EE warm cream, cards white #FFFFFF with soft diffused shadow, footer #0C3B2E
- Accent gold #C6A24B for buttons, dividers, badges
- Headlines: elegant serif, Cormorant Garamond style, dark green #0C3B2E
- Body: clean sans, Plus Jakarta Sans style, #1F2937, highly readable for older audience, large 16px+ size
- Rounded cards 20px radius, generous whitespace, floating WhatsApp button bottom-right
- Style: premium, mesra & dipercayai, for Malay women 25-45 buying for family, no sexy imagery, modest, trustworthy, traditional-meets-modern
- Render: high-fidelity UI mockup, flat front view, crisp text, mobile app-like presentation --ar 9:16
```

---

## PALETTE YANG DIGUNAKAN (wajib keluar dalam mockup selepas footer)

- `#0C3B2E` — Deep Herba Green (header, footer, label produk)
- `#C6A24B` — Royal Gold (CTA, divider songket, badge)
- `#FDF8EE` — Warm Cream (background utama)
- `#FFFFFF` — White Card (kad produk / masalah)
- `#3A7D44` — Leaf Green (ikon, checkmark)
- `#1F2937` — Charcoal Text (body copy)

Kalau Flow bagi warna lari, mention hex ni semula dalam follow-up prompt:
`keep exact palette #0C3B2E, #C6A24B, #FDF8EE, white cards, #3A7D44 icons`

---

## FOLLOW-UP PROMPT (kalau teks pecah / jawi herot)

```
Same 9:16 Herbalabz mockup, fix all Malay text to be sharp and spelled correctly, keep 6 product names exact, keep color palette strip after footer with 5 hex codes, use attached brochure product images 1:1, no distorted faces or hands --ar 9:16
```
