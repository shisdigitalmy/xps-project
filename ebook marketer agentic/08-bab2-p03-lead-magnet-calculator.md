# Point 3: Lead Magnet Calculator

## Story Opening: Sufian Dan Kalkulator Orang Lain

Sufian jual suplemen pengurusan berat badan. Produk dia ada sijil halal, ada GMP cert, ada testimonial yang real. Tapi dia ada satu masalah yang tak dapat diselesaikan dengan quality product: **dia takde cara untuk dapat leads secara berterusan.**

Cara dia selama ni: masak iklan, orang klik, terus landing page jualan, minta diorang beli terus. Masalahnya, kebanyakan orang yang klik tak ready untuk beli pada klik pertama. Mereka baru saja nak tahu. Mereka compare dulu. Mereka "save dulu, beli nanti" — dan nanti tu tak pernah datang. Duit ads yang dibelanjakan untuk trafik macam ni terus hilang. Tiada siapa menangkap mereka, mereka hilang.

Satu hari, masa research kompetitor, Sufian terserempak dengan sesuatu yang buat dia duduk diam lama. Kompetitor dia ada satu tool dalam website: **Kalkulator BMI percuma**. Orang masuk tinggi dan berat, klik kira, terus dapat result BMI diorang — warna hijau kalau normal, merah kalau overweight. Dan bawah result tu, ada satu message: "Nak tahu plan yang sesuai untuk BMI anda? Masukkan email, kami hantar rekomendasi percuma."

Sufian try sendiri. Dia masukkan data dia. Dapat result. Dan dia — seorang yang SEDAR dengan marketing trick — pun masukkan email dia.

Lepas tu dia buka satu lagi tool: [SimilarWeb] untuk tengok traffic competitor tu. Angka yang dia nampak buat dia lemas: tool kalkulator tu bawa **hampir 300 leads sehari**. 300 orang yang bagi email secara sukarela. Setiap. Hari.

Sufian mula kira. Kalau 300 leads sehari tu 30% convert, itu 90 customer sehari dari satu tool yang berjalan sendiri. Bisnes dia sekarang, dengan semua duit ads, tak dapat separuh daripada tu.

Dia nak buat sama. Tapi dia bukan programmer. Dia tanya harga developer: RM2,000-RM3,000 untuk calculator web, timeline 3-4 minggu.

Sampai satu hari dia dengar pasal Opencode. Dia cuba. Dalam satu petang, calculator BMI dia sendiri siap — dengan logic yang dia design sendiri, warna yang sama dengan brand dia, dan email capture yang sambung terus ke workflow dia.

Kos: RM0. Masa: satu petang.

## Huraian Use Case

Kalkulator lead magnet adalah antara tool paling powerful yang marketer suplemen boleh ada, sebab ia selesaikan tiga masalah serentak:

**Masalah 1: Traffic yang datang tapi tak convert.** Orang yang klik iklan kau kebanyakannya dalam mode "research", bukan "beli". Kalkulator bagi mereka satu benda yang boleh di-interact — dan interaction tu build connection yang static page tak boleh bagi.

**Masalah 2: Leads yang tak disaring.** Dengan kalkulator, orang yang beri contact detail mereka adalah orang yang DAH invest masa — diorang dah isi form, dah tengok result, dah rasa ada hubungan dengan brand kau. Ini bukan cold leads. Ini warm leads yang self-qualified. Conversion rate dari leads macam ni konsisten lebih tinggi berbanding leads biasa.

**Masalah 3: Cakap "personalisasi" tanpa kos peribadi.** Hasil kalkulator tu adalah personal untuk setiap orang — BMI DIA, keperluan DIA. Pengalaman yang personalized macam ni biasanya memerlukan konsultasi peribadi (mahal, tak boleh scale). Kalkulator bagi pengalaman yang sama, secara automatik, untuk seribu orang sekaligus.

Contoh kalkulator yang sesuai untuk niche suplemen:

- **Kalkulator BMI / BMR** — untuk produk weight management
- **Kalkulator keperluan air harian** — untuk produk detoks/hidrasi
- **Kuiz tahap keletihan** — untuk produk tenaga (extended version ada dalam Point 7)
- **Kalkulator usia kulit** — untuk produk collagen/beauty
- **Kalkulator keperluan kalori harian** — untuk produk fitness

Formulanya simple: input → kira → result yang ada nilai → minta email untuk "laporan penuh" atau "rekomendasi personal".

## Teknikal

Yang best pasal kalkulator ni: ia boleh jadi **satu fail HTML sahaja** — sama macam landing page, tiada backend, tiada pelayan, tiada kos bulanan.

**Logik pengiraan dengan vanilla JavaScript.** Formula BMI (berat ÷ tinggi²) adalah 3-4 baris kod je. Opencode akan tulis semua logic ni untuk anda — anda cuma perlu tahu formula yang anda nak guna. Untuk BMR guna formula Mifflin-St Jeor, untuk kalori guna activity multiplier. Anda tak perlu hafal — cuma bagitahu Opencode apa yang anda nak kira, dan apa input yang diperlukan.

**Validasi input.** Minta Opencode tambah validation: kalau user masukkan berat negatif atau tinggi 20cm, tunjuk error message yang sopan. Tanpa validation, tool akan nampak tidak professional bila orang main-main dengan input.

**Conditional output.** Ini detail yang penting: result bukan sekadar nombor — ia berbeza ikut kategori. BMI normal dapat message hijau yang positif; overweight dapat message merah yang empathetic (bukan menghukum!) plus natural bridge ke solution kau. Tone ni penting: jangan kutuk user. Kalau tool buat user rasa teruk, user tutup page. Kalau tool buat user rasa "oh, ada harapan", user bagi email.

**Email capture yang tak menggangu.** Best practice: tunjuk result TERUS (bukan sembunyi), kemudian invite user untuk email untuk "laporan lanjut" atau "plan percuma". Kalau anda sembunyikan result sampai user isi email, bounce rate akan naik dan trust jatuh. Beri dahulu, kemudian tanya.

**Sambung ke sistem anda.** Form tu boleh sambung ke EmailJS (percuma untuk volume rendah) atau form endpoint mana-mana email platform. Minta Opencode sedia-kan struktur dengan placeholder — anda ganti dengan API key sendiri.

## Contoh Prompt

> "Create an interactive BMI Calculator as a single HTML file (pure HTML/CSS/JavaScript, no frameworks).
>
> Flow:
> 1. User masukkan tinggi (cm) dan berat (kg)
> 2. Klik button 'Kira BMI Saya'
> 3. Validate input — kalau bukan nombor positif, tunjuk error message yang sopan dalam Bahasa Melayu
> 4. Kira BMI dan tunjuk result dengan:
>    - Nombor BMI (besar, jelas)
>    - Status: Kurang Berat / Normal / Berlebihan / Obes
>    - Color-coded: hijau untuk normal, kuning untuk berlebihan, merah untuk obes
>    - Satu ayat encouragement yang EMPATHETIC, bukan menghukum
> 5. Bawah result: 'Nak tahu plan nutrisi yang sesuai untuk BMI anda?' + form nama + email + button 'Hantar Rancangan Percuma Saya'
>
> Design:
> - Royal blue theme (#2D5BDB), bersih dan modern
> - Mobile responsive
> - Rounded corners, soft shadow
> - Semua text dalam Bahasa Melayu
> - Form endpoint: placeholder untuk EmailJS integration
> - Bawah form ada disclaimer: 'Kami takkan spam. Data anda selamat.'"

## Manfaat Diperolehi

**Lead generation yang berjalan 24/7.** Kalkulator ni tak cuti, tak tidur, tak minta commission. Setiap hari ia tangkap leads walaupun anda sedang berada di luar pejabat (out of office). Ini asset, bukan aktiviti.

**Quality leads yang lebih tinggi.** Orang yang bagi email selepas tengok result BMI mereka adalah orang yang DAH prihatin pasal berat badan mereka. Pre-qualified. Sales team anda (atau email sequence anda) tak membazir masa dengan orang yang tak berminat.

**Satu kos, guna selama-lamanya.** RM2,000-3,000 untuk developer, sekali. Dengan Opencode: percuma, dan bila anda nak tukar formula, tukar copy, atau tambah feature — edit sendiri dalam beberapa minit. Tiada panggilan semula kepada developer setiap kali ada perubahan.

**Asset yang boleh digunakan semula.** Kalkulator BMI untuk weight management hari ini, tukar formula kepada kalkulator kalori minggu depan, kalkulator keperluan protein bulan depan. Struktur yang sama, Logic berbeza. Setiap kali satu lead magnet baharu, tanpa kos tambahan.

## Story Closing: 500 Leads Sebulan Kemudian

Tiga bulan selepas tool tu hidup, Sufian duduk dalam mesyuarat mingguan dengan sales team dia — mesyuarat yang skang jauh lebih pendek sebab ada lebih banyak data.

Kalkulator BMI dia dapat 500+ leads sebulan. Konsisten. Sales team laporan satu benda yang buat dia senyum: leads dari kalkulator convert 25% lebih tinggi berbanding leads dari iklan biasa. Sebab masa sales call tu, orang dah tengok result BMI diorang sendiri — mereka bukan stranger, mereka dah ada conversation dalam kepala.

Sufian pun build satu lagi: Kalkulator Kalori untuk produk fitness line dia. Lepas tu kalkulator air untuk produk detoks. Skang website dia ada tiga lead magnet yang berjalan serentak, tangkap leads dari audiens yang berbeza.

Satu petang, dia open Opencode dan taip satu baris: "Sekarang aku nak tanya — apa lagi calculator yang orang dalam niche ni akan guna?"

Ia bagi dia lima idea lagi. Dia dah tak perlu tunggu sesiapa untuk bina apa-apa.

*(Teruskan ke Point 4: FAQ Expansion Engine)*
