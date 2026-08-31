# Mini PRD — One-Page Site Restoran D'LaDen

**Tarikh:** 30 Ogos 2026
**Status:** Approved (plan + brainstorming session, 30 Ogos 2026)
**Research sumber:** `docs/restoran-dladen/business-info.md`

---

## 1. Ringkasan

One-page website untuk Restoran D'LaDen, restoran masakan Melayu kampung di Bandar Seri Putra, Bangi. Objektif utama: jana **pesanan catering & lauk pukal** melalui borang contact (CF7) dan WhatsApp. Site dibina atas WordPress + Elementor (flexbox containers sahaja), header/footer via **Elementor Header & Footer Builder** (dulu HFE) oleh Brainstorm Force.

## 2. Goal & KPI

| Goal | KPI |
|------|-----|
| Pesanan catering/pukal dari web | 5+ borang hantar / bulan |
| Hubungan terus customer | Klik WhatsApp ≥ 30 / bulan |
| Jumpa di Google lokal | Index untuk "restoran bandar seri putra", "rendang bangi", "catering bangi" |

**Non-goals:** tiada tempahan meja online, tiada e-commerce/bayar online, tiada multi-page content (menu penuh dihantar via WhatsApp atau screenshot).

## 3. Audience

- Penduduk Bandar Seri Putra / Bangi / Kajang — sarapan & makan tengah hari
- Host majlis (kenduri kahwin, akikah, doa selamat) sekitar Bangi — cari catering lauk kampung
- Pejabat/sekolah sekitar Bangi — pesanan mesyuarat
- Keluarga yang nak stok rendang/kuih — repeat customer Foodpanda yang sedia ada

## 4. Struktur One-Page

Anchor: `#utama` → `#menu` → `#pesanan-pukal` → `#testimoni` → `#pesanan` (form) → `#lokasi`

Detail copy penuh: `copy.md`.

## 5. CTA Strategy

- **Primary:** borang CF7 di section `#pesanan` — hero CTA scroll ke form
- **Secondary:** WhatsApp link `https://wa.me/60122466678` (header + hero + lokasi)
- Form request: nama, telefon, jenis pesanan, tarikh, kuantiti, butiran — reply via WhatsApp oleh owner

## 6. Tech & Platform

| Item | Keputusan |
|------|-----------|
| Platform | WordPress + Elementor (free/Pro) |
| Header/Footer | Elementor Header & Footer Builder (UAE/HFE) by Brainstorm Force |
| Layout | Flexbox containers sahaja — **tiada section/column** (Elementor 3.x) |
| Form | Contact Form 7 (CF7) |
| Page | Home sahaja (one-page anchor nav) |
| Map | Google Maps embed |
| Fonts | Google Fonts — Poppins/heading + Source Sans 3/body (atau setara) |
| Aset visual | Di-generate via Stitch/ChatGPT (design + images), tiada foto sebenar lagi |

## 7. Design Direction

**Kampung moden warm** — cream/ivory background, terracotta & hijau daun, aksen emas, motif songket halus sebagai border/divider. Bold & bersih, mobile-first, vibe mesra kampung tapi professional.

## 8. Content Rules

- Copy 100% BM Malaysia (NO Bahasa Indonesia — rule global)
- Testimoni hanya guna quote review Foodpanda sebenar (Iza, Intan, Wati)
- Harga dari research — owner mesti sahkan semasa handover
- Aset/gambar: AI-generated placeholder, ganti foto sebenar bila ada

## 9. Deliverables

1. `copy.md` — site copy
2. `prd.md` — dokumen ini
3. `stitch-prompt.md` — prompt design untuk Stitch/ChatGPT
4. `design.html` — working HTML
5. `elementor-home.json` — home page
6. `elementor-header.json` + `elementor-footer.json` — HFE templates
7. `cf7-form.md` — form + mail template

## 10. Success Criteria / QA Checklist

- [ ] Lighthouse mobile ≥ 85 (performance), ≥ 95 (a11y)
- [ ] Semua anchor nav berfungsi
- [ ] CF7 form berhantar + email sampai + WhatsApp confirm flow jelas
- [ ] Header/footer HFE apply site-wide
- [ ] JSON Elementor import tanpa error, tiada section/column dalam struktur
- [ ] Map & WhatsApp link berfungsi di mobile
- [ ] Copy tiada Bahasa Indonesia

## 11. Keputusan Terbuka (handover)

- [ ] Sahkan harga semasa dengan owner (research: Ogos 2026)
- [ ] Domain & hosting WordPress final
- [ ] Foto sebenar makanan/restoran (sekarang AI placeholder)
- [ ] Email penerima borang CF7
