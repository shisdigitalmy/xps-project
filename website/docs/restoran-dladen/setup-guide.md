# Setup Guide — Pasang Website D'LaDen di WordPress

Ikut susunan ni dari atas ke bawah. Anggaran masa: 60–90 minit.

---

## Bahagian A — Hosting & WordPress (15 min)

1. Beli hosting + domain (cth: `restorandladen.com` / `.my`). Mana-mana hosting Malaysia ok (Exabytes, Shinjiru, dsb).
2. Dalam cPanel/hosting dashboard → **Install WordPress** (Softaculous/one-click).
3. Login wp-admin: `yourdomain.com/wp-admin`.

## Bahagian B — Install Plugins (5 min)

WP Admin → **Plugins → Add New**, cari dan install + activate:

| Plugin | Kegunaan |
|--------|----------|
| **Elementor** (free) | Page builder — flexbox containers |
| **Elementor Header & Footer Builder** (HFE, by Brainstorm Force) | Header & footer site-wide |
| **Contact Form 7** (CF7) | Borang pesanan |
| (Optional) **Rank Math** atau **Yoast SEO** | Title tag + meta description |

## Bahagian C — Setting Elementor (5 min)

1. **Elementor → Settings → Features**:
   - **Flexbox Container** = Active (kalau versi Elementor ≥ 3.16, memang default)
   - Nested Elements = Active
2. **Elementor → Settings → General**: Disable Default Colors & Default Fonts = **OFF** (biar kita control).

## Bahagian D — Import Home Page (15 min)

1. **Templates → Saved Templates → Import Templates** → upload `elementor-home.json`.
   - Kalau import gagal, cuba: Templates → Add New → Page → kemudian dalam Elementor editor klik ikon folder → My Templates → Import.
2. **Pages → Add New** → nama `Home` → klik **Edit with Elementor**.
3. Dalam Elementor editor → klik **ikon folder** (Add Template) → **My Templates** → insert **"D'LaDen — Home"** → Yes.
4. Page Settings (ikon gear bawah kiri) → **Page Layout: Elementor Canvas** (atau Elementor Full Width).
5. Update.
6. **Settings → Reading** → Your homepage displays = **A static page** → Homepage = `Home`.

## Bahagian E — Import Header & Footer (HFE) (15 min)

1. **Templates → Saved Templates → Import Templates** → upload `elementor-header.json`.
2. **Appearance → Header Footer & Blocks** (atau **Elementor H&F → Add New**):
   - Title: `D'LaDen Header` → Type: **Header** → klik **Design with Elementor**
   - Dalam editor → ikon folder → My Templates → insert **"D'LaDen — Header (HFE)"**
   - Publish → Display rules: **Entire Website** → Publish
3. Ulang langkah sama untuk `elementor-footer.json` → Type: **Footer** → Display: Entire Website.
4. Settings HFE (Header Footer & Blocks → Settings): pastikan **Elementor Canvas** dan **Elementor Full Width** template support = ON.

## Bahagian F — Contact Form 7 (10 min)

Ikut penuh `cf7-form.md`, ringkasnya:

1. **Contact → Add New** → title `Pesanan D'LaDen`.
2. Paste Form code dari `cf7-form.md`.
3. **Mail tab**: To = email owner. Subject & body ikut template.
4. Save → **salin shortcode** (cth `[contact-form-7 id="123" title="Pesanan D'LaDen"]`).
5. Edit Home dengan Elementor → cari widget **Shortcode** dalam section "Pesan Sekarang" (kanan, dalam kad putih) → replace placeholder `[contact-form-7 id="GANTI-DENGAN-ID-FORM"]` dengan shortcode sebenar → Update.

## Bahagian G — Font & Warna Global (10 min)

1. Edit Home dengan Elementor → ikon hamburger (Site Settings):
   - **Global Colors**: Primary `#C1502E` (terracotta), Secondary `#2E5339` (hijau), Accent `#D9A441` (gold), Text `#2B2118`
   - **Global Fonts**: Primary/Headings = `Fraunces`, Body = `Source Sans 3` (dua-dua ada dalam senarai Google Fonts Elementor)
2. JSON dah set font family per-widget (`Fraunces`) — cuma pastikan font tu available bila edit.

## Bahagian H — Ganti Gambar & Map (15 min)

Gambar dalam template sekarang guna **Unsplash placeholder**. Ganti dengan foto sebenar / AI-generated (dari Stitch/ChatGPT):

| Lokasi | Widget |
|--------|--------|
| Hero | Image besar kanan |
| Menu grid | 6 image dalam 6 kad |
| Map | Google Maps widget → Edit address: `Jalan Seri Putra 3/13, Bandar Seri Putra, 43000 Bangi, Selangor` |

Cara: klik image widget → Choose Image → upload dari Media Library.

## Bahagian I — SEO & Final (10 min)

1. Rank Math/Yoast di Home:
   - **Title:** `Restoran D'LaDen — Masakan Kampung, Catering & Rendang Pukal | Bandar Seri Putra Bangi`
   - **Meta description:** `Restoran melayu di Bandar Seri Putra, Bangi. Nasi lemak & sarapan kampung setiap pagi, rendang tok pukal untuk kenduri, dan catering majlis. Pesan di 012-246 6678.`
2. Setting → Permalinks → pilih **Post name**.
3. Claim **Google Business Profile** untuk alamat restoran (penting untuk carian "restoran bandar seri putra").

## Bahagian J — QA Checklist (10 min)

- [ ] Home buka, semua section ikut susunan hero → menu → catering → testimoni → form → lokasi
- [ ] Nav anchor semua scroll betul (Utama/Menu/Pesanan Pukal/Lokasi)
- [ ] Butang "Pesan Sekarang" header → scroll ke form
- [ ] Form CF7 test hantar → email sampai ke owner
- [ ] Butang WhatsApp → buka `wa.me/60122466678`
- [ ] Map tunjuk lokasi betul
- [ ] Mobile view: menu & grid jadi 1 kolum, tak pecah
- [ ] Header & footer muncul di seluruh site
- [ ] Tiada "GANTI-DENGAN-ID-FORM" tertinggal
- [ ] Copy BM semuanya, tiada Bahasa Indonesia

---

## Kalau Ada Masalah

| Masalah | Penyelesaian |
|---------|--------------|
| Import JSON gagal / format error | Bagitahu aku — aku regenerate ikut format versi Elementor kau |
| Container tak muncul | Elementor → Settings → Features → aktifkan Flexbox Container |
| Font Fraunces tak ada | Edit mana-mana heading → Typography → ketik "Fraunces" dalam carian Google Fonts |
| HFE header tak muncul | Semak Display rule = Entire Website & template support untuk Canvas |
| Form tak sampai email | Semak Mail tab recipient, atau install plugin WP Mail SMTP |

**Fail rujukan:** semua dalam `docs/restoran-dladen/` — `copy.md`, `prd.md`, `design.html`, `elementor-home.json`, `elementor-header.json`, `elementor-footer.json`, `cf7-form.md`.
