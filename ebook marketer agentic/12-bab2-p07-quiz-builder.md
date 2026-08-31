# Point 7: Quiz / Assessment Builder

## Story Opening: Dr. Ahmad Dan Soalan Yang Berulang Setiap Hari

Dr. Ahmad ada klinik di Bangi. Pesakit datang, dia check, dia nasihatkan. Simple. Tapi dalam dua tahun kebelakangan ni, satu benda berubah yang dia tak sangka: pesakit mula datang "separuh digital".

Mereka jumpa dia dulu di Facebook. Di Instagram. Mereka hantar DM klinik: "Doktor, saya selalu penat walaupun tidur cukup, vitamin apa sesuai?" "Doktor, anak saya kerap demam, apa supplement bagus?" "Doktor, saya nak tanya, Omega-3 dengan multivitamin boleh ambil serentak tak?"

Mula-mula dia jawab satu-satu. Lepas tu jumlahnya naik — 20 sehari, 30 sehari. Dan dia perasan dua benda yang tak sedap:

**Satu:** kebanyakan soalan ni boleh dijawab dengan satu proses yang sama. Tanya gaya hidup → tanya simptom → tanya diet → cadangkan kategori vitamin. Prosedur yang sama, ulang 30 kali sehari. Ia bukan kerja yang memerlukan seorang doktor — ia kerja yang memerlukan SEBUAH SISTEM.

**Dua:** separuh daripada orang yang tanya tu tak jadi datang klinik, tak jadi beli apa-apa. Mereka tanya, dapat jawapan ringkas, lepas tu... hilang. Sebab conversation tu tak ada next step. Tak ada pintu untuk teruskan perjalanan.

Dr. Ahmad fikir: kalau ada satu benda yang boleh tanya soalan-soalan tu secara automatik, bagi result yang personal, DAN tangkap contact detail untuk follow-up — itu akan jadi seperti seorang nurse digital yang bekerja 24 jam, yang tanya soalan screening dengan sopan, dan tak pernah penat.

Masalahnya: dia doktor, bukan programmer. Dia tanya developer: sistem kuiz macam ni, dengan logik penilaian dan personalized result — RM4,000 ke atas, timeline sebulan.

Sampai dia jumpa Opencode. Satu petang Sabtu, dia duduk dengan laptop, dan mulai bina kuiz yang dia bayangkan. Pukul petang tu jugak, kuiz tu siap dan boleh diakses melalui pautan.

## Huraian Use Case

Quiz builder ni adalah versi yang lebih power daripada kalkulator (Point 3). Kalkulator kira nombor — kuiz nilaikan profil. Dan profil adalah benda yang lebih personal, lebih engaging, dan lebih bermakna untuk decision pembelian.

Kenapa kuiz berkesan untuk niche suplemen:

**Ia mengubah "penjual" menjadi "penolong".** Iklan yang berkata "beli vitamin kami" adalah jualan. Kuiz yang bertanya "jom kami tahu vitamin apa yang anda perlukan" adalah perkhidmatan. Orang benci dijual, tapi orang SUKA dibantu untuk faham diri sendiri. Kuiz memberikan pengalaman kedua dengan niat pertama yang tersembunyi dalam bawah.

**Self-diagnosis adalah perangkap engagement.** Orang memang suka tahu pasal diri mereka. Itu sebab personality quiz viral, itu sebab horoscope wujud ribuan tahun. Kuiz vitamin meminjam psikologi yang sama, tapi dengan nilai yang sebenar: hasilnya berguna.

**Segmentasi berlaku secara automatik.** Ini yang paling berharga untuk marketer: hasil kuiz TAHU siapa mereka. Orang yang dapat "Vitamin B Complex" adalah leads yang berbeza daripada yang dapat "Magnesium". Bila email follow-up dihantar, ia bukan satu kempen untuk semua — ia campain yang personalized ikut hasil. Relevan = conversion.

**Kumpul data pasaran yang tidak ternilai.** Lepas 500 orang jawab kuiz, anda akan ada data: 40% pengguna kurang tidur berkualiti, 60% kerja duduk lebih 8 jam, 30% ada simptom X. Itu bukan sekadar leads — itu riset pasaran yang orang lain bayar firma riset untuk dapat.

Struktur kuiz yang proven untuk suplemen:
1. **4-7 soalan** (bukan 20 — orang akan berhenti)
2. Soalan pasal **gaya hidup** (aktiviti, tidur, pekerjaan)
3. Soalan pasal **simptom/priority** (apa yang paling mengganggu)
4. Soalan pasal **tabiat semasa** (dah cuba apa, makan apa)
5. **Halaman hasil** dengan kategori vitamin yang disyorkan + alasan ringkas
6. **Email capture** untuk "panduan lengkap percuma"
7. **CTA** ke produk yang bersesuaian

## Teknikal

**Satu fail HTML, vanilla JavaScript.** Sama konsep macam kalkulator — semua logic dalam satu fail. Opencode akan tulis: struktur soalan sebagai array, setiap jawaban beri markah kepada kategori vitamin tertentu, dan pengiraan di akhir menentukan hasil. Anda tak perlu sentuh kod — anda cuma perlu tahu soalan apa dan markah macam mana.

**Sistem pemarkahan.** Ini bahagian yang perlu anda fikirkan (sebagai pakar produk, anda lebih layak daripada sesiapa): setiap jawapan memberi markah kepada 1-2 kategori. Contoh: jawaban "Saya rasa penat walaupun selepas tidur 8 jam" beri +2 kepada Vitamin B Complex, +1 kepada Magnesium. Di akhir, kategori dengan markah tertinggi menang. Nyatakan logik ni dalam prompt — atau minta Opencode cadangkan, lepas anda semak dan betulkan.

**Simpan progress dengan localStorage.** Detail kecil yang penting: kalau orang terclose browser di soalan 5 daripada 7, dan semua hilang — mereka takkan buat semula. localStorage menyimpan jawapan sementara dalam browser, jadi bila diorang balik, terus sambung. Minta feature ni dalam prompt.

**Hasil yang rasa personal.** Jangan hanya tunjuk "Hasil anda: Vitamin B Complex". Tunjuk: markah kategori, apa yang perlu difokus, 2-3 tip gaya hidup yang sepadan, dan kemudian bridging produk. Semakin banyak nilai sebelum jualan, semakin tinggi kepercayaan.

**Email capture dengan nilai pertukaran yang jelas.** Jangan cuma minta email. Bingkai: "Masukkan email untuk kami hantar Panduan Vitamin Anda (PDF) + tips mingguan". Pertukaran yang jelas = kadar pengumpulan (opt-in rate) yang lebih tinggi.

## Contoh Prompt

> "Bina kuiz interaktif 7 soalan berjudul 'Vitamin Apa Yang Anda Perlukan?' — single HTML file, HTML/CSS/vanilla JavaScript sahaja, tiada framework.
>
> Kategori vitamin: Vitamin B Complex, Vitamin C, Omega-3, Multivitamin, Magnesium.
>
> Soalan merangkumi:
> 1. Tahap aktiviti harian
> 2. Kualiti tidur
> 3. Tabiat makan
> 4. Tahap stress
> 5. Simptom yang paling kerap dialami
> 6. Keadaan kerja (duduk lama / fizikal / syif)
> 7. Apa yang dah dicuba sebelum ni
>
> Logik: setiap jawapan beri markah kepada 1-2 kategori vitamin. Cadangkan pemarkahan yang masuk akal — saya akan semak.
>
> Hasil:
> - Tunjuk kategori dengan markah tertinggi + 2 kategori kedua
> - 3 tips gaya hidup yang sepadan dengan hasil
> - CTA lembut ke produk yang sepadan
> - Form nama + email sebelum tunjuk hasil penuh, dengan jelas: 'untuk hantar Panduan Percuma anda'
>
> Reka bentuk:
> - Tema royal blue (#2D5BDB), bersih, moden
> - Mobile responsive, satu soalan satu skrin, progress bar
> - Simpan progress dengan localStorage
> - Boleh berfungsi tanpa backend, form guna placeholder untuk integrasi
> - Semua teks dalam Bahasa Melayu"

## Manfaat Diperolehi

**Kadar engagement yang iklan tak boleh capai.** Kadar klik iklan baik adalah 2-5%. Kadar penyiapan kuiz yang baik adalah 60-80% daripada yang mula. Dan mereka yang mula adalah mereka yang dah klik — jadi funnel: iklan → kuiz → hasil → email, setiap langkah menapis dan menguatkan niat.

**Leads yang self-segment.** 500 leads sebulan, setiap satu dengan label: "Vitamin B", "Magnesium", "Omega-3". Email follow-up anda boleh personal ikut kategori. Kadar buka (open rate) dan konversi (conversion) naik — sebab mesej betul, sampai kepada orang yang betul.

**Data pasaran percuma.** Selepas 3 bulan, anda akan tahu: siapa audiens anda sebenarnya, apa masalah utama mereka, apa yang mereka dah cuba. Data ini memberi maklumat kepada copy, content, dan perkembangan produk (product development). Dua asset daripada satu binaan.

**Masa doktor... eh, maksudnya masa ANDA — kembali.** Untuk Dr. Ahmad: DM screening turun dari 30 sehari ke 5-6 (yang benar-benar perlukan doktor). Yang lain, kuiz yang menangani. Dia kembali kepada kerja yang hanya dia boleh lakukan: merawat.

## Story Closing: Nurse Digital Yang Tak Pernah Penat

Minggu pertama kuiz hidup: 90 orang jawab. Minggu kedua: 140. Dr. Ahmad buat satu perkara bijak — dia letak link kuiz dalam auto-reply DM klinik: "Terima kasih untuk mesej anda! Untuk cadangan vitamin yang cepat, cuba kuiz 1 minit ini:" dan dia letak satu post di FB yang mempromosikan kuiz tersebut dengan budget RM10 sehari.

Bulan pertama: 500+ responden. 60% beri email. 25% daripada email leads tu jadi pembeli dalam 30 hari — angka yang sales funnel biasa dia tak pernah capai.

Tapi perubahan yang paling dia hargai bukan angka tu. Ia satu pesanan daripada seorang ibu yang jawab kuiz tu:

"Saya jawab kuiz ni masa tunggu anak saya habis kelas. Dapat tahu saya kekurangan magnesium, dapat tips tidur, dan saya beli. Doktor ni genius — dia buat saya faham badan saya sendiri."

Dr. Ahmad baca tu, senyum, dan fikir: sistem kecil ni jalan masa dia tengah bertugas di klinik, masa dia tidur, masa dia bercuti dengan keluarga.

Ia adalah pekerja terbaik yang dia tak pernah gaji. Dan dia sendiri yang bina — pada satu petang Sabtu, tanpa menulis satu baris kod.

*(Teruskan ke Point 8: Retargeting Sequence)*
