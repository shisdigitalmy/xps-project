# Business Brief — Restoran Melayu Luxury untuk T20

**Jenis projek:** New build — website baru (single-page + multi-section, luxury positioning)
**Tarikh:** 27 Aug 2026
**Status:** Assumption-led brief (perlu pengesahan user)

---

## 1. Ringkasan Business

**Business:** Restoran Melayu premium / luxury yang mengangkat masakan Melayu istana & warisan sebagai fine dining. Bukan restoran kampung atau casual — ini untuk T20, expat, dan business entertainment.

**Offer:**
- Menu degustation / à la carte Melayu fine dining (rendang tok, gulai kawah, kerabu istana, etc dengan plating moden)
- Private dining & chef's table untuk 8-20 pax
- Business lunch & high tea Melayu
- Catering premium untuk event korporat

**Pasaran:** Lembah Klang (KLCC / Bangsar / TRX / Mont Kiara) — kawasan T20 dan pelancong premium. Persaingan: DC Restaurant, Dewakan (Malay fine dining), Nadayu, plus hotel fine dining (Mandarin, Four Seasons).

**Masalah pelanggan utama:** T20 Melayu dan profesional nak bawa client / keluarga ke restoran Melayu yang *prestigious* — bukan sekadar sedap, tapi interior, service, dan brand yang buat mereka bangga. Pilihan sedia ada: Melayu = casual, Western = luxury. Jurang ini yang kita isi.

---

## 2. Objektif Website & Conversion

**Objektif utama website:** Jana tempahan meja (reservation) — bukan sekadar branding.

| Jenis | Action | KPI |
|-------|--------|-----|
| **Primary conversion** | Tempahan meja (form + WhatsApp + call) | 40+ reservation / bulan dari website |
| **Secondary** | Inquiry private dining / event | 8-10 lead / bulan |
|  | Newsletter / Follow IG | Email list T20 |
|  | Download menu PDF | Nurture |

**Success criteria (3 bulan):**
- 60% traffic dari Google "restoran melayu fine dining KL", "private dining melayu KL"
- Reservation form completion > 15%
- Bounce rate < 55% (luxury audience expect fast, visual)

---

## 3. Audience

**Primary — T20 Melayu 30-55:**
- Eksekutif, Dato'/Datin, business owner, professional
- Pain: Nak impress client/family, tapi restoran Melayu sedia ada tak cukup prestige untuk business dinner
- Tingkah laku: Tempah via WhatsApp/call, lihat Instagram dulu, baca review, pentingkan lokasi & parking valet

**Secondary:**
- Expat & pelancong premium cari "authentic Malay fine dining"
- Pasangan T20 untuk anniversary / celebration
- EA / PA yang book untuk boss

**Bahasa:** BM (utama) + English toggle — T20 dwibahasa. Content utama BM formal premium, bukan BM pasar. *Jangan guna Bahasa Indonesia.*

---

## 4. Brand Positioning & Tone

**Positioning:** *Warisan Istana, Rasa Masa Kini* — Melayu luxury yang menghormati tradisi tapi plating dan service bertaraf antarabangsa.

**Differentiators (vs restoran sedia ada `restoran.html`):**
1.  Fine dining, bukan casual — chef berpengalaman hotel 5-bintang
2.  Bahan premium (wagyu rendang, udang galah, etc) + teknik moden
3.  Interior & songket sebagai luxury motif (bukan sekadar border CSS)
4.  Private dining & service level hotel

**Tone:** Elegan, yakin, warm — bukan hype. Copy pendek, berkelas. Contoh: "Bukan sekadar makan. Satu penghormatan kepada warisan." bukan "Paling sedap di KL!!"

**Geography:** KL/Selangor focus, tapi appeal nasional
**Constraints:** Halal 100% — mesti jelas. No alcohol.

---

## 5. Stack & Platform — UPDATED (User pilih Astro + Tailwind)

**Previous stack (dari `AGENTS.md:5`):** single-file static HTML, no build — *di-replace atas approval user 27 Aug*

**Chosen stack (Option A - Approved): Astro + Tailwind CSS**
- **Framework:** Astro 4.x (static output, 0 JS by default, Islands jika perlu interaktiviti)
- **Styling:** Tailwind CSS 3.x + CSS custom properties untuk luxury tokens (preserve `--royal-blue`, `--gold` sebagai `theme.extend.colors`)
- **Fonts:** Google Fonts (Cormorant Garamond + Source Sans 3) via `astro-font` + tailwind `font-serif`
- **Images:** Astro `<Image />` + Unsplash placeholder (ganti photoshoot sebenar sebelum launch)
- **Forms:** Astro + Netlify Forms / WhatsApp deep link (tiada backend)
- **i18n:** `astro-i18n` untuk BM/EN toggle (BM default)
- **Hosting:** Vercel / Cloudflare Pages / Netlify (static, edge)
- **Build:** `npm run build` → `dist/` static HTML
- **A11y/SEO:** Preserve semantic HTML + ARIA + schema.org dari `index.html:152`

**Rationale:** Luxury T20 perlu Lighthouse 95+ dan SEO untuk keyword "restoran melayu fine dining KL" — Astro bagi static HTML paling ringan.

> Stack locked: Astro + Tailwind. Tidak akan tukar tanpa approval baru.

---

## 6. Bukti & Aset Sedia Ada

**Confirmed (dari repo):**
- `restoran.html` — ada 8 menu item, alamat Kajang, harga RM10-25 ( casual) — *tidak relevan untuk T20, perlu rewrite total*
- `index.html` — template asas dengan songket-border CSS art, skip-link, prefers-reduced-motion ✓
- Tiada logo, brand guide, atau photoshoot sebenar lagi

**Placeholder (perlu isi):**
- [PLACEHOLDER] Nama restoran sebenar (sementara: "SANTAP — Malay Fine Dining")
- [PLACEHOLDER] Logo & brand guide
- [PLACEHOLDER] Lokasi sebenar (KLCC/Bangsar/TRX?)
- [PLACEHOLDER] Harga sebenar fine dining (RM180-350/pax?)
- [PLACEHOLDER] Testimoni sebenar T20 (jangan reka)
- [PLACEHOLDER] Foto interior & plating (kini guna Unsplash)
- [PLACEHOLDER] Nombor WhatsApp & sistem reservation (TableApp / WhatsApp?)

---

## 7. Fakta vs Andaian vs Keputusan Terbuka

### ✅ Fakta Disahkan
- Target: T20, luxury Malay
- Stack: Astro + Tailwind (user pilih Option A, 27 Aug)
- Bahasa: BM + English
- Halal, Melayu luxury

### 🔮 Andaian (boleh edit, aku label jelas)
- Nama sementara: SANTAP
- Lokasi: KL (anggap KLCC — mudah untuk T20)
- Model: Dine-in + private dining + business lunch (tiada delivery murah)
- Harga: Fine dining RM180-350/pax (bukan RM18 nasi lemak)
- Reservation via WhatsApp + form (tanpa sistem TableApp lagi)
- Tone: Elegan premium, bukan casual

### ❓ Keputusan Terbuka — perlu jawapan kau (hanya 4 soalan kritikal):

1. **Nama & lokasi sebenar?** SANTAP ok atau ada nama lain? Lokasi mana (KLCC/Bangsar/lain)?
2. **Harga & menu:** Betul ke nak fine dining RM180+ atau nak premium casual RM60-100? Ini ubah design & copy 100%.
3. **Tempahan:** WhatsApp sahaja atau nak integrate TableApp / SevenRooms / Google Reserve?
4. **Aset:** Ada logo / foto restoran sebenar atau aku guna placeholder Unsplash + monogram sementara?

> Jika kau nak aku terus dengan andaian di atas, cakap "teruskan dengan andaian" — aku akan mark sebagai assumption-led brief dan proceed ke Stage 2.

---

## 8. Gate

**Gate Stage 1:** Brief ini internally consistent dan ditanda sebagai assumption-led. Perlukan salah satu:
- ✅ Kau sahkan / betulkan 4 soalan di atas, atau
- ✅ Kau cakap "teruskan dengan andaian" — aku terus ke Content & Copy

Tidak akan start design/code sebelum gate ini lepas.
