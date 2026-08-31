# Point 9: Seasonal Promo Pages

## Story Opening: Irfan Dan Tiga Musim Yang Terlepas

Irfan jual suplemen kesihatan umum — multivitamin, produk imun, omega-3. Bisnes dia ada satu pattern yang dia kenal dengan jelas: **musim**.

Raya, jualan naik 40%. Tahun Baru Cina, naik 25%. Bulan Januari (resolution season), naik 35%. Deepavali, Merdeka, back-to-school — setiap satu ada gelombang demand yang datang macam ombak. Kalau kau surf ombak tu, revenue naik. Kalau kau tengok dari pantai, orang lain yang surf.

Masalah Irfan: dia selalu tengok dari pantai. Sebab setiap kali musim nak datang, dia kena buat landing page tema baru — dan itu bermakna developer.

Kisah tahun lepas, Raya: developer caj RM1,200 untuk "Raya version" page dia. Design baru, warna baru, banner baru. Tapi sebab developer ada 4 client lain yang nak Raya version jugak, page Irfan siap 5 hari SELEPAS Raya mula. Ombak datang, dia takde papan luncur. Kompetitor dia launch dari hari 1 Raya, duit masuk dari hari 1. Irfan mula hari ke-6 — bila CPM dah naik sebab semua orang pun nak advertise.

Raya habis, kempen settle. Lepas tu Tahun Baru Cina datang. Developer lagi sekali: RM1,200 lagi, "CNY version". Lagi sekali delay. Lagi sekali musim terlepas separuh.

Tiga kali setahun, tiga kali RM1,000+, tiga kali stress, dan satu tahun penuh dengan peluang yang hanya separuh ditangkap.

Yang buat Irfan paling geram: bila dia fikir balik, STRUKTUR page tu sama je setiap kali. Hero section, benefit, testimoni, FAQ, CTA. Yang tukar cuma: warna, banner, headline, dan promo detail. Maksudnya dia bayar RM1,200 setiap kali untuk... recolor dan retext?

## Huraian Use Case

Inilah Seasonal Promo Pages — dan konsepnya yang paling penting: **bina sekali, guna selama-lamanya.**

Strategi ni ada dua bahagian:

**Bahagian 1: Template induk (satu kali).** Bina satu landing page promo yang struktur dia lengkap — hero, offer banner, product showcase, testimoni, countdown, FAQ, CTA. Tapi dengan satu syarat teknikal: semua warna dan elemen visual letak dalam CSS variables. Template ni adalah chassis. Kereta berubah rupa, chassis tetap.

**Bahagian 2: Theme switch (setiap musim, 30 minit).** Bila Raya datang: tukar `--primary-color` ke emas-hijau, tukar headline ke "Promo Raya", tukar banner image, adjust promo copy. Siap. Tahun Baru Cina: merah-emas, headline baru. Merdeka: biru-merah-kuning. Januari: tema "New Year New You". Setiap musim = edit 5-10 baris CSS dan beberapa text.

Hasilnya: masa yang dulu 2 minggu menunggu developer, jadi 30-40 minit kerja sendiri. Kos yang dulu RM1,200 per musim, jadi RM0.

Dan ada satu bonus yang lebih besar dari jimat duit: **konsistensi belajar.** Bila semua musim guna struktur yang sama, data anda comparable. Anda tahu positioning hero section Raya dapat conversion 3.2% — jadi untuk CNY, anda cuma ubah copy, dan mana-mana perubahan dalam conversion adalah SEBAB copy. Dengan developer yang buat design baru setiap musim, anda tak pernah tahu: naik sebab copy ke, sebab design ke, sebab layout ke? Template tetap = eksperimen yang bersih.

## Teknikal

**CSS custom properties — hati sistem ni.** Dalam `:root`, minta Opencode letak semua elemen yang berubah ikut tema:

```css
:root {
  --primary-color: #2D5BDB;
  --accent-color: #FFD700;
  --bg-gradient: linear-gradient(...);
  --banner-image: url('default-banner.jpg');
}
```

Nak tukar tema Raya? Edit 4 baris. Itu je. Tak perlu cari warna dalam 500 baris CSS. Ini adalah sebab kenapa Point 2 (Landing Page) minta letak warna dalam variables sejak awal — semua point ni sambung-sambungan.

**Class-based theme switching (opsyen lebih power).** Untuk yang nak lebih automate: minta Opencode buat beberapa set theme sebagai class — `.theme-raya`, `.theme-cny`, `.theme-newyear` — setiap satu override variables. Untuk tukar musim, tukar satu class dalam `<body>` je. Semua warna, gradient, dan background image bertukar sekali gus.

**Countdown timer.** Promosi musim selalu ada tarikh akhir — dan countdown yang jelas meningkatkan tindakan. Minta Opencode tambah countdown JavaScript simple yang berhenti pada tarikh tertentu. Bonus: minta behavior bila countdown habis — sama ada hide banner promo (jaga kejujuran) atau tunjuk "Promosi tamat".

**Mobile-first, tetap.** Puncak trafik musiman datang dari mobile social feed. Semua template test di telefon dahulu.

**Simpan semua versi.** Struktur folder yang disyorkan: `templates/master/`, `themes/raya.css`, `themes/cny.css`, dll. Musim depan, anda buka folder, copy theme, edit. Ia akan jadi arkib yang semakin bernilai.

## Contoh Prompt

> "Bina satu reusable HTML single-page promo template untuk kempen suplemen kesihatan, dengan sistem theming yang lengkap.
>
> Struktur:
> 1. Banner promo atas (dengan countdown timer JavaScript — boleh set tarikh akhir)
> 2. Hero: headline promo + subheadline + CTA
> 3. Product showcase: 2 produk side-by-side
> 4. Promo pricing section (harga biasa dicoret, harga promo)
> 5. Testimoni (3 quotes)
> 6. FAQ accordion (5 soalan)
> 7. Final CTA + countdown repeat
> 8. Footer + disclaimer compliance
>
> Keperluan theming:
> - SEMUA warna, gradient, dan background image dalam CSS variables dalam :root
> - Buat 3 set theme siap: .theme-raya (emas/hijau), .theme-cny (merah/emas), .theme-newyear (biru/putih)
> - Dokumen komen dalam kod: nyatakan dengan jelas baris mana untuk edit tarikh countdown, harga, headline
>
> Lain-lain:
> - Mobile responsive
> - Single HTML file
> - Placeholder untuk Facebook Pixel
> - Bahasa Melayu, tone promo yang seronok tapi tidak berlebihan"

Template ni adalah binaan terakhir anda yang perlu buat "lengkap". Lepas ni, setiap musim cuma editing ringan.

## Manfaat Diperolehi

**Tangkap puncak demand, setiap kali.** Ini nilai terbesar — bukan jimat RM1,200, tapi revenue dari hari 1 musim. Ombak Raya tu datang setahun sekali; satu hari lambat adalah 1/30 daripada musim itu. Razif (Poin 2) hilang Raya sepenuhnya sekali. Irfan takkan biar itu berulang.

**RM0 untuk setiap musim selepas ini.** RM1,200 × 3-4 musim setahun = RM3,600-RM4,800 setahun yang kembali kepada anda. Setiap tahun.

**Kelajuan menindak trend.** Bukan sekadar musim yang dijadualkan — bila ada trend tiba-tiba (viral moment, berita kesihatan, musim NBA/Copa untuk produk tenaga), anda boleh melancarkan page bertema dalam sehari. Kompetitor yang bergantung pada developer akan menonton anda sahaja menangkapnya.

**Arkib yang membina dirinya sendiri.** Setiap tahun, theme library anda bertambah dan bertambah baik. Raya tahun depan = Raya tahun ni + apa yang anda belajar. Kompetitor mula dari kosong setiap musim. Anda mula dengan semua pengalaman tahun lepas dalam tangan.

## Story Closing: Ombak Yang Kali Ni Disurf

Tahun ni, Raya datang lagi. Tapi kali ni Irfan dah sedia — bukan minggu sebelum Raya, tapi bulan sebelum.

Dia buka folder template dia. Copy fail. Edit 4 baris CSS: emas dan hijau. Tukar headline: "Promo Raya: Bundle Family Set". Update countdown: 14 hari. Upload. Siap.

Masa total: 35 minit, pagi Isnin, seminggu sebelum Raya.

Kempen mula hari 1 Raya, 8 pagi, bersama dengan semua orang. CPM masih rendah, audiens masih segar. Page load laju, promo jelas, countdown berdenyut.

Hasil akhir musim: jualan Raya tahun ni 3x ganda tahun lepas. Dan dalam perbualan dengan rakannya, Irfan cerita pasal template tu, dan rakannya bertanya: "Kau bayar siapa buat?"

Irfan menjawab dengan senyuman yang orang yang pernah menunggu developer 2 minggu je akan faham:

"Siapa lagi. Aku bina sekali, developer aku sekarang cuma kerja masa Raya, CNY, Merdeka, Januari... tukar empat baris warna je pun."

Ombak akan datang lagi tahun depan. Dan tahun depan, dan tahun depan lagi.

Kali ni, dia ada papan luncur yang dia bina sendiri.

*(Teruskan ke Point 10: Templat Balasan Komen)*
