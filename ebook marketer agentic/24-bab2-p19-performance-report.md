# Point 19: Weekly Performance Report

## Story Opening: Jamil Dan Klien Yang Tanya Soalan Maut

Jamil buat agency kecil — dia sorang, handle 4 klien iklan suplemen. Hasil kerja dia sebenarnya bagus: klien-klien dia dapat sales, ada yang naik 40-60% dalam setahun. Masalahnya bukan hasil.

Masalahnya: **laporan mingguan dia.**

Setiap Isnin, dia hantar Excel spreadsheet kepada klien-klien — penuh dengan nombor: kos, klik, CTR, konversi, CPC, ROAS. Berpuluh lajur. Semua data yang betul, semuanya tepat.

Dan setiap minggu, dia terima reaksi yang sama:

Klien A: "Terima kasih bang. 👍" (yang dia tahu maksudnya: saya tak faham apa-apa tapi malas nak tanya)

Klien B, pula, tanya soalan yang paling maut dalam dunia perkhidmatan:

"Jamil, saya boleh tengok semua nombor ni sendiri dalam Ads Manager. Saya bayar kau RM5K sebulan untuk... apa sebenarnya?"

Soalan tu buat Jamil terdiam. Bukan sebab dia takde jawapan — dia ada: strategi, keputusan harian, ujian kreatif, optimasi, masalah yang diselesaikan sebelum klien perasan. Tapi jawapan tu tak nampak dalam spreadsheet. Spreadsheet menunjukkan NOMBOR. Dan nombor, tanpa cerita dan tanpa konteks, adalah benda yang mana-mana orang boleh lihat.

Kemudian satu hari dia dengar sesuatu yang mengubah perspektifnya. Dalam satu podcast agensi, orang yang menjalankan agensi besar berkata satu ayat:

"Klien tidak membayar untuk data. Klien membayar untuk PEMAHAMAN dan KEPASTIAN. Laporan yang baik bukan menunjukkan apa yang berlaku — ia menerangkan KENAPA ia berlaku dan APA YANG SETERUSNYA."

Jamil pandang spreadsheet dia yang penuh lajur. Dan dia perasan: dalam 52 minggu setahun, dia tak pernah sekali pun menulis "kenapa" dan "apa seterusnya" secara struktur untuk klien. Semua pemahaman tu ada dalam kepala dia — tapi tak pernah sampai ke klien dengan cara yang klien rasa nilainya.

## Huraian Use Case

Weekly Performance Report yang betul adalah dokumen yang menjawab 3 soalan klien dalam susunan yang betul:

1. **Berapa?** (nombor — bahagian yang paling kecil)
2. **Kenapa?** (cerita di sebalik nombor)
3. **Apa seterusnya?** (tindakan — bahagian yang paling bernilai)

Struktur laporan yang membuat klien rasa "saya ada ahli strategi, bukan sekadar orang yang hentam butang ads":

**Bahagian 1: Ringkasan Eksekutif (3-4 ayat).** Laporan dimulakan dengan PARAGRAF, bukan nombor: "Minggu ini kita saksikan peningkatan ROAS daripada 2.1 ke 2.8, terutamanya kerana kreatif baru (video testimoni) mengalahkan iklan gambar yang lama. Saya akan meningkatkan skala video ini minggu depan dan menggantikan 2 iklan gambar yang lemah. Satu perkara perlu diberi perhatian: CPM naik 12% (musim, bukan masalah akaun) — dijangka pulih selepas hujung minggu."

Satu paragraf ini bernilai lebih daripada 20 lajur nombor, sebab ia menunjukkan: anda MEMAHAMI data, anda ada RANCANGAN, dan anda sedang MEMANTAU perkara yang mereka belum risaukan.

**Bahagian 2: KPI cards.** 6-8 metrik utama dalam format kad visual: Spend, Reach, Clicks, CTR, Conversions, CPA, ROAS. Setiap kad dengan penunjuk arah perubahan mingguan (↑ 12% hijau / ↓ 8% merah). Mata manusia memproses visual lebih cepat daripada jadual — kad-kad ini memberikan klien gambaran keseluruhan dalam 5 saat.

**Bahagian 3: Pecahan prestasi.** Kempen mana yang berjalan, mana yang lemah — dengan SATU ayat sebab untuk setiap satu. Bukan hanya "Ad A: ROAS 3.2" tapi "Ad A: ROAS 3.2 — hook testimonial terbukti mengalahkan hook curiosity untuk segmen ini".

**Bahagian 4: Top 3 & Bottom 3.** Yang paling berjaya (untuk diketahui dan digandakan) dan yang paling lemah (dengan keputusan: diperbaiki atau dihentikan). Ini menunjukkan anda menguruskan portfolio, bukan hanya menjalankan iklan.

**Bahagian 5: Pelan tindakan minggu depan.** 3-5 item konkrit dengan pemilik dan tarikh. Ini bahagian yang paling bernilai — klien yang melihat pelan tindakan merasa masa depan diuruskan, bukan hanya masa lalu dilaporkan.

Dengan Opencode, template laporan ini dibina SEKALI sebagai fail HTML yang cantik — dan setiap minggu anda hanya perlu mengisi data baharu.

## Teknikal

**HTML report dengan CSS cards.** Struktur: satu halaman HTML, layout berdasarkan kad, stylesheet terbina dalam (inline). Klien buka dalam pelayar (browser), nampak laporan yang nampak seperti agensi besar yang buat — padahal ia templat yang anda bina sekali. Bonus: reka bentuk ni nampak sama di telefon — klien selalu buka laporan pada telefon sebelum komputer.

**Charts ringkas tanpa library.** Untuk bar chart perbandingan mingguan, tak perlu Chart.js — div dengan lebar peratusan sudah cukup, ringan, dan sentiasa berfungsi. Minta Opencode bina bar chart CSS murni (pure CSS) untuk: trend ROAS 4 minggu, agihan belanjawan (budget) antara kempen.

**Petunjuk warna dengan semantik.** Hijau = naik (bagus), merah = turun (perhatian). TAPI dengan satu peraturan cerdas: beberapa metrik terbalik (CPC turun = bagus). Minta Opencode gunakan arah yang betul untuk setiap metrik — satu kesilapan kecil yang menjadikan laporan kelihatan amatur.

**Zon data yang ditanda dengan jelas.** Dalam HTML, komen yang jelas di setiap tempat untuk mengisi nombor: `<!-- DATA: isi ROAS minggu ini di sini -->`. Setiap Isnin: copy fail minggu lepas, kemas kini nombor (15-20 minit), hantar. Template yang dipakai semula dengan disiplin yang mudah.

**Versi cetak.** `@media print` stylesheet — bila klien print atau save PDF, layout kekal kemas. Klien-klien tertentu (terutamanya yang lebih senior) memang print laporan untuk mesyuarat.

## Contoh Prompt

> "Bina templat laporan prestasi mingguan FB Ads dalam satu fail HTML/CSS untuk agensi yang menguruskan klien suplemen kesihatan.
>
> Struktur:
> 1. Header: nama klien, tempoh laporan, logo placeholder
> 2. Ringkasan Eksekutif: 1 petak teks (4-5 ayat) dengan komen jelas untuk isi
> 3. KPI cards: 7 kad (Spend, Reach, Clicks, CTR, Conversions, CPA, ROAS) — setiap satu dengan perubahan mingguan (arrow ↑↓ dan %), warna hijau/merah yang BETUL secara semantik (CPC turun = hijau)
> 4. Trend chart: bar chart CSS murni untuk ROAS 4 minggu
> 5. Prestasi kempen: table dengan 5 baris + lajur 'Kenapa'
> 6. Top 3 / Bottom 3 creatives: 2 lajur, dengan tindakan yang dicadangkan
> 7. Pelan tindakan minggu depan: senarai semak 4-5 item dengan tarikh
>
> Reka bentuk: korporat yang bersih, warna navy + putih + accent, tipografi moden, jarak (spacing) yang lega
> Responsif + stylesheet cetakan (@media print)
> Komen HTML yang jelas di setiap zon data
> Bahasa Melayu untuk semua label dan tajuk"

## Manfaat Diperolehi

**Persepsi nilai yang naik — secara terukur.** Jamil naikkan harga 20% dalam suku tahun yang sama selepas laporan baharu. Tiada satu pun klien membantah. Satu klien, dalam mesyuarat perbaharui kontrak, kata: "Laporan macam ni buat saya faham apa yang saya bayar." Persepsi = harga.

**Masa laporan: dari 2 jam ke 20 minit.** Setiap Isnin: kemas kini nombor, tulis ringkasan eksekutif (5 minit dengan Opencode bantu rumuskan), hantar. 4 klien × 20 minit = masa Isnin pagi yang terkawal, bukan separuh hari.

**Pengurusan klien (client management) yang proaktif.** Bahagian "kenapa" dan "apa seterusnya" membunuh 80% soalan panik klien sebelum ia dihantar. Klien yang faham = klien yang tenang = klien yang kekal. Kadar pengekalan klien adalah matematik perniagaan agensi yang paling penting.

**Fail arkib yang membina nilai perniagaan.** Setiap minggu, arkib laporan bertambah. Dua tahun kemudian, anda ada sejarah lengkap setiap akaun — yang bernilai ketika menjual perniagaan, ketika membina kes studi (case study), dan ketika klien baharu bertanya "tunjukkan hasil kerja anda".

## Story Closing: Mesyuarat Yang Berubah Arah

Tiga bulan selepas laporan baharu, klien yang bertanya soalan maut itu — Klien B — mengatur mesyuarat. Jamil bersedia untuk bola api.

Sebaliknya, klien B buka laptop dan tunjukkan sesuatu: laporan mingguan Jamil, dicetak, diletak dalam folder — dan dia tunjukkan kepada rakan kongsi bisnes dia.

"Bang, partner saya yang ini tak faham pasal ads. Tapi dia baca laporan kau setiap minggu dan kata, 'orang ni tahu apa yang dia buat.' Kita nak naikkan belanjawan. Dari RM5K ke RM12K sebulan. Kau boleh urus?"

Jamil, dalam hati, teringat spreadsheet lama yang penuh lajur — yang secara teknikalnya mempunyai SEMUA data yang sama.

Perbezaannya bukan pada data. Ia pada cerita.

"Boleh," kata Jamil. Dan dia benar-benar boleh — bukan sebab dia jadi lebih pandai menguruskan iklan sejak 3 bulan lepas, tetapi sebab sekarang ada sistem yang menterjemahkan kerjanya kepada nilai yang klien boleh LIHAT.

Kerja yang tidak dilihat tidak wujud — walaupun ia adalah kerja yang terbaik di dunia.

*(Teruskan ke Point 20: Kerangka Pengujian Tawaran)*
