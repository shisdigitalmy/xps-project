# Point 2: Build Landing Page Per Funnel

## Story Opening: Razif Dan Dua Minggu Yang Hilang

Razif ada satu produk suplemen tenaga yang nak dia launch menjelang Raya. Strategi dia power — dia dah prepare budget RM5,000 untuk FB ads, dah plan audiens, dah booking videographer untuk buat video iklan. Semua siap, tinggal satu je: landing page.

Dia call developer yang biasa dia guna. "Okay bang, saya slot in kamu minggu depan. Ini kan, saya ada 3 project lain dulu."

Minggu depan jadi minggu kedua. Minggu kedua jadi "bang, saya tag ni kena revise design dulu". Razif mesej setiap dua hari, rasa macam bengong — dia yang bayar, tapi dia yang kejar.

Hari ke-14, page siap. Tapi masa tu...

Raya dah lepas. Empat hari lepas.

Kempen Raya yang dia plan sejak Januari — dengan budget, dengan video, dengan audiens yang dah siap — tak jalan langsung sebab satu page yang sepatutnya siap dalam 2 hari. Budget RM5,000 tu duduk diam dalam bank. Peluang puncak permintaan (peak demand) hilang macam tu je. Dia belajar satu leksyen yang paling mahal dalam kerjaya dia: **bisnes funnel yang tertunggu developer bukan bisnes, ia sandiwara.**

Bulan depannya, dia ada kempen lain. Kali ni dia decide cuba sendiri. Dia dengar pasal Opencode dari kawan, buka laptop pukul 10 pagi, taip apa yang dia nak.

Pukul 10:45 pagi — 45 minit kemudian — landing page dia siap. Live. Boleh terima traffic.

Razif pandang jam. Pandang skrin. Pandang jam balik.

"Lepas ni aku takkan tunggu sesiapa pun lagi untuk launch sesuatu."

## Huraian Use Case

Landing page adalah nadi setiap funnel FB ads suplemen. Kalau ad copy kau power tapi landing page kau takde, atau lambat, atau buruk — semua duit ads hangus kat situ. Itu sebab setiap marketer yang serius perlu ada keupayaan untuk bina landing page sendiri, bila-bila masa, tanpa bergantung pada sesiapa.

Dengan Opencode, kau boleh build satu **single-page sales site** yang lengkap tanpa tulis satu baris kod pun. Apa yang termasuk dalam satu landing page suplemen yang converting:

- **Hero section** — headline utama yang menarik perhatian, subheadline yang jelaskan value, dan CTA button yang jelas
- **Benefit bullets** — 4-6 manfaat produk, ditulis dengan format yang senang scan (orang mobile tak baca, diorang scan)
- **Social proof section** — testimoni pelanggan, rating, berapa unit dah terjual
- **FAQ accordion** — 5-8 soalan yang tackle objection secara automatik (dah sertakan halal? Bagaimana dengan kesan sampingan? Berapa lama penghantaran?)
- **CTA akhir** — tutup dengan call-to-action yang jelas, plus urgency element
- **Compliance disclaimer** — nota kecil di footer untuk lindungi diri dari masalah regulatory

Apa yang buat Opencode berbeza dari website builder macam Wix atau Carrd? Tiga benda: **kelajuan** (Describe dan siap, tak perlu drag-drop), **kos** (free, berbanding subscription bulanan), dan **penguasaan penuh** (kod tu milik kau — boleh host di mana-mana, edit bila-bila, takkan ada platform yang tutup kedai dan bawa bisnes kau sekali).

Dan yang paling praktikal untuk marketer suplemen: kau boleh bina **satu page berbeza untuk setiap funnel**. Page untuk cold traffic, page untuk retargeting, page untuk promo Raya, page untuk brand awareness — semua boleh exist serentak, semua boleh test secara terpisah. Developer hanya mampu bina satu page pada satu masa, namun kau boleh mencipta sepuluh.

## Teknikal

Untuk mendapatkan hasil yang baik, fahami asas-asas ni (jangan risau, ini bukan kod — ini konsep):

**Satu fail, satu page.** Landing page yang Opencode hasilkan datang sebagai satu fail `index.html` — HTML, CSS, dan JavaScript semua dalam satu. Untuk host, kau cuma perlu upload ke mana-mana static hosting (Netlify, Vercel, Cloudflare Pages — semua ada tier percuma). Tiada pangkalan data (database), tiada pelayan (server), tiada penjagaan.

**Responsive design adalah mandatori.** Lebih 90% traffic FB ads datang dari mobile. Pastikan kau sebut dalam prompt: "mobile responsive". Opencode akan handle ni secara default kalau kau minta, tapi jangan ambil risiko — selalu test dengan buka page tu kat telefon sendiri sebelum luluskan.

**CSS custom properties untuk theming.** Ini trick yang akan jadi penting dalam Point 9 (Seasonal Promo Pages): minta Opencode letak warna-warna utama dalam CSS variables kat bahagian `:root`. Contoh `--primary-color: #2D5BDB`. Lepas tu untuk tukar tema, kau cuma edit 3-4 baris je, bukan cari setiap code warna dalam 500 baris CSS.

**Sertakan pixel.** Minta Opencode letak tempat kosong (placeholder) untuk Facebook Pixel code dalam `<head>`. Lepas siap page, kau paste pixel code kau kat situ — terus boleh track PageView, dan sedia untuk custom conversion events.

**Kelajuan page = duit.** Sebab static HTML ni takde backend yang berat, page load dalam bawah 1 saat. Ini bukan bonus kosmetik — Google dan Facebook dua-dua consider page speed dalam ad quality, dan setiap saat delay boleh jatuhkan conversion rate secara drastik.

## Contoh Prompt

Prompt yang Razif guna (ubah ikut produk kau):

> "Build a single-page HTML landing page untuk produk multivitamin targeting pekerja pejabat berumur 25-40 tahun yang selalu rasa penat dan lesu.
>
> Sections yang perlu ada:
> 1. Hero: headline 'Lepaskan Rasa Lesu Pukul 3 Petang' + subheadline 2 baris + CTA button 'Dapatkan Bekalan 30 Hari'
> 2. Problem section: 3 short paragraphs pasal rutin pekerja pejabat yang kekurangan nutrisi
> 3. Benefits: 5 bullet points dengan icon placeholder
> 4. Testimoni: 3 customer quotes dengan nama, umur, lokasi
> 5. FAQ accordion: 6 soalan (halal cert, cara makan, kesan sampingan, penghantaran, refund policy, bila nampak hasil)
> 6. Final CTA dengan urgency line
> 7. Footer dengan disclaimer compliance: 'Produk ini bukan untuk mendiagnosis atau merawat sebarang penyakit'
>
> Design requirements:
> - Warna utama: royal blue (#2D5BDB), background putih bersih, accent gold
> - Font modern sans-serif yang bersih
> - MOBILE RESPONSIVE (priority paling tinggi)
> - Letak placeholder untuk Facebook Pixel dalam head section
> - Letak semua warna dalam CSS variables dalam :root supaya senang tukar tema nanti
> - Single index.html file, no external frameworks"

Hasilnya siap dalam masa satu coffee break.

## Manfaat Diperolehi

**Jimat duit yang boleh dikira.** Developer freelance untuk landing page simple: RM500-RM2,000. Agency: RM3,000+. Dengan Opencode: RM0. Kalau kau buat 20 pages setahun (macam Razif sekarang), itu jimat RM10,000-RM40,000 setahun.

**Kelajuan pelancaran sebagai senjata persaingan.** Cuma dapat idea untuk kempen hari ini? Page siap hari ini juga, esok boleh mula terima trafik. Kompetitor yang masih menunggu giliran developer akan tertinggal dua minggu — dalam dunia iklan, dua minggu adalah satu musim.

**Tiada lagi halangan untuk pengujian.** Sebab bina page dah jadi perkara yang mudah, kau boleh test hypothesis yang dulu tak berani nak test: headline berbeza, structure berbeza, offer berbeza. Setiap test adalah peluang untuk tahu lebih banyak pasal customer kau.

**Kebebasan yang sebenar.** Ini yang Razif value paling skang: dia boleh balik tadika pukul 3 petang. Sebab kerja yang dulu "tunggu orang lain" kini dia buat sendiri dalam masa singkat pagi tadi. Kemerdekaan tu tak boleh beli dengan duit developer yang dijimatkan.

## Story Closing: Dua Puluh Pages Kemudian

Enam bulan lepas hari tu, Razif tengah duduk kat cafe, buka laptop dia, dan scroll through senarai landing pages yang dia dah bina. Dua puluh dua pages. Satu untuk setiap kempen utama, satu untuk setiap musim, beberapa untuk test yang gagal (yang pun berharga — kau tahu apa yang tak jalan).

Page Raya yang dulu lepas musim? Tahun ni dia build tiga hari sebelum kempen mula, siap dengan countdown timer dan tema warna emas. Page tu jadi kempen paling profitable dalam sejarah bisnes dia — ROAS 5.1.

Developer yang dulu? Dia still ada kawan baik dengan Razif. Tapi sekarang dia cuma kena call untuk benda yang betul-betul kompleks — payment gateway integration, custom web app. Kerja-kerja yang betul-betul memerlukan engineer. Bukan landing page.

Pada suatu petang, seorang marketer junior tanya Razif: "Bang, korang guna developer mana untuk buat page cantik macam ni?"

Razif senyum, jawapan yang sama macam yang dia dengar enam bulan lepas, tapi kali ni dari mulut dia sendiri:

"Developer aku sekarang tak tidur, tak minta deposit, dan siap dalam 45 minit."

*(Teruskan ke Point 3: Lead Magnet Calculator)*
