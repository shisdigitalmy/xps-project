# Point 4: FAQ Expansion Engine

## Story Opening: Amira Dan Seratus Soalan Yang Sama

Amira handle brand suplemen kulit — satu produk beauty supplement yang tumbuh laju. Tahun pertama, semuanya manageable. Tapi bila ads mula scale dan orders mula naik, satu benda mula makan hidup dia perlahan-lahan: **inbox**.

Setiap pagi dia buka telefon, dan macam biasa: 47 unread WhatsApp, 60+ comments baru kat post FB, 20 DM Instagram. Dan bila dia scroll through, dia perasan satu pattern yang buat dia nak berguling-guling:

Soalan yang sama. Berulang-ulang. Setiap hari.

"Berapa harga?"
"Adakah ia mendapat pengesahan halal?"
"Ada kesan sampingan tak?"
"Berapa lama penghantaran?"
"Bila akan nampak hasil?"
"Boleh makan bersama ubat lain?"
"Sesuai untuk ibu mengandung?"
"Boleh COD tak?"

Kesemua soalan ini, dijawab oleh Amira, satu demi satu, secara manual, dengan jari yang sama yang menaip balasan kepada klien dan mengemas kini kempen iklan. Setiap satu mengambil masa dua hingga lima minit untuk dijawab. Seratus keping dalam sehari — itu empat jam kerja yang sama seperti mesin penghasut.

Dan bahagian yang paling menyakitkan: walaupun setelah empat jam itu, dia TETAP melepasikan sebahagian daripadanya. Ada komen yang tertinggal selama dua hari. Ada PM yang tidak dibalas sehingga pelanggan itu pergi kepada pesaing. Amira merasakan seolah-olah dia sedang mengisi sebuah botol yang bocor — apa yang diisinya pada pagi itu akan menyesakkan kembali pada petangnya.

Malam tersebut, dia duduk dan membina sebuah dokumen. Dia menulis setiap soalan yang pernah diterimanya, mengumpulkannya mengikut kategori. Bila siap, dokumen itu mengandungi 34 soalan yang berbeza. Dia memandangnya dan berfikir: "Kalau semua ni ada jawapan yang sedia ada di satu tempat yang orang boleh jumpa sendiri... berapa banyak masa aku dapat semula?"

Masalahnya: menulis 34 jawapan yang lengkap, mesra pengguna, dan mesra jenama (brand-friendly) adalah kerja yang mengambil masa beberapa hari — sekurang-kurangnya, itulah yang dia sangkakan.

## Huraian Use Case

Inilah FAQ Expansion Engine — gunakan Opencode untuk memperluaskan senarai soalan pelanggan kepada perpustakaan jawapan lengkap (50+), tersusun rapi, sedia untuk digunakan di semua platform.

Konsepnya mudah: anda sudah mempunyai jawapannya — mereka tersembunyi dalam inbox anda, dalam komen anda, dalam memori anda. Anda hanya tidak mempunyai MASA untuk menyusunnya dengan rapi. Opencode melakukan kerja penyusunan itu untuk anda.

Apa yang anda dapat:

**1. Perpustakaan FAQ yang lengkap.** Bukan 10 soalan yang sembarangan — ia 50 soalan yang benar-benar difikirkan, dikelaskan mengikut kategori: Maklumat Umum, Keselamatan & Kesan Sampingan, Penggunaan, Penghantaran, Harga & Promosi, Penyimpanan. Opencode akan percikan soalan-soalan yang anda sendiri tertinggal: "Produk ini sesuai untuk vegetarian?" "Apa yang berlaku jika saya terlupa satu dos?" "Adakah ia perlu disimpan di dalam peti sejuk?"

**2. Jawapan yang mengikut nada jenama (brand voice) anda.** Anda tentukan ton — mesra, profesional, sedikit bermain-main — dan semua jawapan akan konsisten. Ini penting sebab jawapan yang ditulis secara ad-hoc pada pukul 11 malam adalah berbeza daripada yang ditulis pada pukul 10 pagi. Sistem yang konsisten membina kepercayaan.

**3. Satu aset, pelbagai saluran (channel).** Ini di sinilah nilai sebenar perpustakaan FAQ: ia bukan hanya untuk halaman FAQ. Jawapan yang sama menjadi:
- Bahagian FAQ pada halaman pendaratan (landing page) anda (dalam bentuk akordeon)
- Respond templat untuk komen FB dan DM
- Balasan pantas (quick replies) untuk WhatsApp Business
- Idea kandungan untuk Instagram carousel ("5 Soalan Paling Kerap Tentang [produk]")
- Nota jualan untuk pasukan jualan (sales team)
- Nota pengenalan (brief) untuk pembuat kandungan (content creator) supaya mereka tahu cara menjawab

Satu sesi penjanaan, lima saluran output. Itulah tuas kuasa (leverage) yang sebenar.

## Teknikal

Tiga perkara teknikal yang perlu anda ketahui:

**Struktur kategori.** Minta Opencode susun dalam kategori yang tetap. Struktur yang disyorkan untuk suplemen: Maklumat Produk | Keselamatan & Kesan Sampingan | Dos & Penggunaan | Penghantaran & Pengembalian | Harga & Promosi | Penyimpanan & Jangka Hayat. Kategori tetap memudahkan anda mencari jawapan semula dan mengenal pasti celah ("Kenapa tiada siapa bertanya tentang X? Mungkin kita perlu memaklumkannya secara proaktif").

**Format output yang serasi dengan halaman web.** Jika anda mahu meletakkan FAQ di laman web (yang anda bina dalam Poin 2), minta format `<details><summary>` — elemen HTML yang terbina dalam (native) untuk akordeon. Pengguna klik soalan, jawapan terbuka. Tiada JavaScript diperlukan, ringan, dan berfungsi di mana-mana. Bahagian tambahan: minta Opencode tambahkan data terstruktur (schema markup) FAQPage — kod tersembunyi yang membantu Google memaparkan FAQ anda sebagai coretan kaya (rich snippets) dalam hasil carian. Perhatian percuma daripada Google.

**Kaedah jawapan yang pendek dan padat.** Aturan yang baik: jawapan maksimum 3 ayat pendek. Orang yang membaca FAQ sedang melayari (scan), bukan membaca esei. Kalau satu jawapan memerlukan 6 ayat, ia bermakna ia sepatutnya menjadi kandungan blog, bukan FAQ. Nyatakan peraturan ini dalam arahan (prompt) anda.

**Dua penjaga keselamatan untuk niche suplemen:**
1. Semua jawapan berkenaan kesan sampingan perlu jujur tetapi berhati-hati — jangan pernah berkata "tiada kesan sampingan"; katakan "dirumuskan untuk toleransi harian; sila semak label untuk senarai bahan (ingredients)". 
2. Semua jawapan berkenaan kesan perlu menggunakan bahasa "menyokong/membantu", bukan klaim perubatan.

## Contoh Prompt

> "Bina 50 Soalan Lazim (FAQ) dengan jawapan ringkas untuk produk multivitamin harian 'VitaForce Plus'.
>
> Kategori dan agihan:
> - Maklumat Umum (8 soalan)
> - Keselamatan & Kesan Sampingan (8 soalan)
> - Dos & Penggunaan (8 soalan)
> - Penghantaran & Pemulangan (7 soalan)
> - Harga & Promosi (7 soalan)
> - Penyimpanan & Jangka Hayat (6 soalan)
> - Lain-lain (6 soalan — termasuk soalan yang pelanggan TIDAK PERNAH bertanya tetapi SEPATUTNYA bertanya)
>
> Keperluan jawapan:
> - Setiap jawapan maksimum 3 ayat pendek
> - Nada: mesra, yakin, telus — seperti seorang rakan yang tahu perkara ini
> - Bahasa Melayu santai, bukan formal
> - JANGAN buat klaim perubatan — gunakan 'menyokong', 'membantu', 'dirumuskan untuk'
> - Untuk soalan kesan sampingan: jujur, sebut untuk semak label, dan galakkan berjumpa doktor jika ada masalah kesihatan
> - Untuk soalan berkaitan harga: jangan beri nombor khusus — arahkan kepada laman web dengan nada positif
>
> Format output: senarai kategori, kemudian setiap soalan dengan jawapan di bawahnya. Selepas itu, berikan juga versi HTML menggunakan elemen <details><summary>."

## Manfaat Diperolehi

**Masa yang kembali kepada anda — yang boleh diukur.** Amira: dari 4 jam sehari untuk jawab inbox, kepada 45 minit. Itu 3 jam 15 minit sehari, lebih 16 jam seminggu, hampir 70 sebulan — dibebaskan untuk kerja yang benar-benar bergerak ke hadapan.

**Respon pantas = lebih banyak jualan.** Dalam Commerce, kelajuan memenangi perlawanan. Pelanggan yang mendapat jawapan dalam masa 2 minit akan membeli; yang menunggu 2 jam akan melihat iklan pesaing. Dengan perpustakaan jawapan yang sedia ada, setiap anggota pasukan anda (atau diri anda sendiri, pada bila-bila masa) membalas dengan kelajuan yang sama.

**Keyakinan pelanggan sebelum mereka bertanya.** Halaman FAQ yang menyeluruh menghilangkan keraguan secara senyap. Ramai pelanggan tidak akan berminat untuk bertanya — mereka hanya mengalihkan pandangan (scroll away) apabila keraguan itu tidak terjawab. FAQ yang baik menutup pintu keluar itu.

**Kawalan terhadap mesej anda.** Jawapan yang ditulis secara ad-hoc oleh orang yang keletihan pada pukul 11 malam boleh menimbulkan risiko: janji berlebihan, maklumat yang salah, perkataan yang boleh membawa masalah dari segi pematuhan (compliance). Perpustakaan yang telah disemak bermakna setiap jawapan yang keluar dari jenama anda adalah jawapan yang anda LULUSKAN.

## Story Closing: Dari 4 Jam Ke 45 Minit

Minggu selepas Amira membina perpustakaan FAQ-nya, dia melakukan tiga perkara:

Satu: dia meletakkan 20 FAQ teratas di halaman webnya dalam bentuk akordeon. Klik-klik, terbuka, terjawab.

Dua: dia memuatkan 15 balasan pantas ke dalam WhatsApp Business — sekarang, 70% daripada PM hanya memerlukan dua klik.

Tiga: dia menyimpan dokumen lengkap itu dalam Google Drive dan memberikannya kepada pekerja baharu (part-timer) yang menguruskan inbox pada hujung minggu. Pekerja baharu itu membalas seperti seorang profesional pada hari pertama mereka.

Kesannya? Masa inboxnya turun kepada 45 minit sehari. Peratusan balasan naik — kini tiada siapa yang menunggu lebih dari sejam. Dan yang paling mengejutkan: minggu itu dia perasan ada kandungan yang boleh dibuat daripada soalan-soalan tersebut. Dia membuat satu siri "FAQ Friday" di Instagram — satu soalan, satu tayangan (reel), setiap Jumaat. Engagement naik, dan dia mendapat dua minggu kandungan daripada aset yang sama.

Suatu malam, suaminya bertanya: "Awak tak kerja malam ke hari ni?"

Amira, yang sedang menonton drama bersama anak-anaknya, menjawab tanpa mengalihkan mata daripada skrin:

"Kerja habis pukul 6. Sejak dah lama."

*(Teruskan ke Point 5: Penulisan Skrip Testimoni Gaya Hidup)*
