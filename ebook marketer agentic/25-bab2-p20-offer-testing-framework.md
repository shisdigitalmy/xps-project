# Point 20: Offer Testing Framework

## Story Opening: Khir Dan Enam Peluang Setahun

Khir ada produk suplemen yang bagus — dan satu keputusan yang dia buat ikut perasaan: offer.

Setiap kali dia nak buat promo, dia fikir satu offer, rasa "ni yang best", dan jalan. "Beli 1 RM150." Jalan 2 minggu, tengok data, result okay je. Kemudian fikir offer baru: "Beli 2 RM250!" Jalan 2 minggu lagi. Kemudian "Free shipping + free gift!" Dua minggu lagi.

Sikap yang berhati-hati, kata dia. Tapi mari kita buat matematik yang dia tak buat masa tu:

Dua minggu per test = 6 offers setahun. 6 offers setahun untuk bisnes yang hidupnya bergantung pada offer yang betul.

Dan kompetitor dia? Satu hari Khir terjumpa satu thread dalam kumpulan marketer: competitor yang sama tu cerita pasal sistem testing diorang — diorang test offer secara PARALLEL, bukan satu-satu. 5 offer variations dalam satu masa, budget kecil untuk setiap satu, data masuk dalam 7-10 hari, pemenang naik budget, yang kalah ditutup. Diorang test 30+ offers setahun — dan setiap test memberi data untuk test seterusnya.

6 vs 30+. Khir bukan kalah sebab produk. Dia kalah sebab KELAJUAN BELAJAR.

Dan bahagian yang paling menyakitkan: offer yang paling berkesan untuk produk Khir kemungkinan besar telah wujud dalam kalangan 6 yang telah diuji — tetapi data daripada ujian ke-3 tidak cukup untuk membuktikannya, kerana setiap ujian dijalankan dalam keadaan pasaran yang berbeza (musim, persaingan, mood pasaran). Anda tidak boleh membandingkan hasil ujian bulan Mac dengan ujian bulan Ogos — terlalu banyak pemboleh ubah (variables). Ujian selari (parallel) menyelesaikan masalah ini: semua pilihan diuji pada MASA YANG SAMA, kepada AUDIENS YANG SAMA, dengan SYARAT YANG SAMA. Hanya ada satu pemboleh ubah: offer itu sendiri.

Itulah sains. Dan Khir sedang menjalankan bisnes dengan teka-teki yang dihiasi sebagai strategi.

## Huraian Use Case

Offer Testing Framework adalah sistem untuk menguji pelbagai offer secara selari — dengan struktur yang menjadikan hasilnya boleh dibandingkan, bukan sekadar "tengok mana yang laku".

Pertama, definisi yang jelas: **offer ≠ produk.** Produk anda adalah suplemen anda. Offer adalah PERJANJIAN lengkap yang anda berikan: harga, kuantiti, bonus, jaminan, urgensi. Produk yang sama boleh mempunyai 20 offers yang berbeza — dan perbezaan dalam konversi antara offers boleh menjadi 3-5x, lebih besar daripada perbezaan antara copy atau kreatif yang baik dan yang buruk.

Dimensi-dimensi offer yang perlu diuji:

**1. Struktur harga.** Unit tunggal vs bundle vs langganan (subscription). RM149 tunggal vs RM250 untuk 2 vs RM350 untuk 3 bulan. Kadang-kadang bundle tengah yang menang (bukan termahal, bukan termurah — "goldilocks effect").

**2. Bonus inclusion.** Penghantaran percuma (free shipping), e-book panduan, konsultasi percuma, shaker bottle. Bonus yang berkos rendah tetapi nilai dipersepsi tinggi (perceived value tinggi) sering mengalahkan potongan harga terus (straight discount) — sebab diskaun menurunkan nilai produk dalam fikiran, bonus menaikkannya.

**3. Kekuatan jaminan.** Tiada jaminan vs 30 hari vs 60 hari vs "wang dikembalikan tanpa soalan". Untuk suplemen (produk yang memerlukan kepercayaan), jaminan yang kuat selalunya adalah penentu (deciding factor) — kos sebenar jaminan (yang berbalik sedikit) jauh lebih kecil daripada keuntungan konversi yang ditambah.

**4. Urgensi yang sebenar.** Tarikh akhir yang sebenar, stok batch yang sebenar, harga promosi yang benar-benar tamat. Urgensi yang palsu ialah racun jangka panjang (lihat Point 8) — tetapi urgensi yang JUJUR adalah pencetus tindakan (action trigger) yang sah.

**Struktur test matrix yang betul:**

| Test ID | Offer | Harga | Metrics Target | Duration | Keputusan |
|---------|-------|-------|----------------|----------|-----------|
| T1 | Unit tunggal | RM149 | ROAS ≥ 2.0 | 7 hari / 50 konversi | ? |
| T2 | Bundle 2 | RM250 | ROAS ≥ 2.0 | 7 hari / 50 konversi | ? |
| T3 | Bundle 3 (3 bulan) | RM350 | ROAS ≥ 2.0 | 7 hari / 50 konversi | ? |
| T4 | Bundle + e-book | RM250 | ROAS ≥ 2.0 | 7 hari / 50 konversi | ? |
| T5 | Langganan | RM119/bln | CAC ≤ RM60 | 14 hari | ? |

Peraturan-peraturan yang menjadikan ujian ini VALID:
- **Semua test pada masa yang sama** (bukan minggu berbeza)
- **Budget sama untuk setiap satu** (untuk mengukur kecekapan, bukan skala)
- **Audiens yang sama** (kuota harian yang sama yang dibahagikan)
- **Tempoh minimum: 7 hari ATAU 50 konversi** (mana yang lewat — data yang terlalu awal adalah penipu)
- **Kriteria pemenang yang DITULIS SEBELUM test** (bukan selepas — kalau anda tetapkan selepas nampak data, anda akan mengalami "bias yang menyesuaikan")

Dengan Opencode, anda bina kerangka (framework) ini sekali — matriks, struktur landing page untuk setiap variasi (dari Point 2!), tracking setup (dari Point 15) — dan guna ulang-ulang untuk setiap kempen.

## Teknikal

**Dokumen matriks yang boleh dihantar kepada sesiapa.** Format: table macam atas, plus definisi setiap offer dengan detail lengkap (apa yang masuk, apa yang dinyatakan dalam iklan, harga, margin). Dokumen ini adalah pusat arahan (command center): sesiapa yang melihatnya tahu ujian apa yang sedang dijalankan dan kenapa.

**Tracking yang membezahkan variasi.** Setiap offer perlu dapat dijejak secara berasingan: pautan UTM berbeza untuk setiap satu (utm_content=t1-single, t2-bundle, dll), atau lebih ringkas: 5 landing pages yang berasingan (5 minit setiap satu dengan template dari Point 2), setiap satu dengan Purchase event yang sama tetapi content_name berbeza. Data masuk Ads Manager dengan nama yang berbeza — perbandingan adalah automatik.

**Kalkulasi signifikansi yang mudah.** Anda tak perlu statistik PhD: peraturan praktikal ialah jika perbezaan konversi antara dua offer adalah <20% dengan <50 konversi setiap satu, ia masih dalam "noise" — jangan buat keputusan, sambung ujian atau naikkan budget untuk data lebih banyak. Opencode boleh bina pengira mudah (calculator) untuk ni (sambung dari Point 3!).

**Keputusan selepas test — juga perlu distrukturkan.** Pemenang: naikkan 80% budget. Yang kalah: tutup, TAPI simpan pembelajarannya (learning) ("bundle 3 tak laku untuk audiens ini" adalah data). Dan jadualkan test susulan: pemenang kali ini adalah calon untuk diuji semula dengan variasi baharu (pemenang + jaminan? pemenang + bonus yang berbeza?). Testing yang baik adalah gelung (loop) yang tak berhenti.

## Contoh Prompt

> "Bina framework offer testing untuk produk suplemen kami (harga asas RM149/unit):
>
> 5 variasi untuk uji parallel:
> 1. Unit tunggal RM149
> 2. Bundle 2 unit RM250 (jimat RM48)
> 3. Bundle 3 bulan RM350 (jimat RM97)
> 4. Bundle 2 + bonus e-book 'Panduan 7 Hari Wellness'
> 5. Langganan bulanan RM119/bln (auto-ship)
>
> Output:
> 1. Test matrix table: Test ID, offer, harga, budget allocation per variasi, duration, success metrics (target ROAS, CPA limit), kriteria pemenang
> 2. UTM structure untuk setiap variasi (untuk tracking)
> 3. Ad copy angle yang sesuai untuk SETIAP offer (offer yang berbeza perlu dinyatakan dengan cara yang berbeza)
> 4. Senarai peraturan test yang menjadikan hasilnya valid (5-7 peraturan)
> 5. Template dokumen keputusan: macam mana declare pemenang, apa yang buat dengan yang kalah, apa test susulan yang dicadangkan
>
> Bahasa Melayu. Format: dokumen yang boleh diguna terus untuk kempen bulan depan."

## Manfaat Diperolehi

**Jumpa pemenang dalam minggu, bukan tahun.** Khir: 5 offers parallel dalam satu bulan, pemenang jumpa minggu ke-2 — offer bundle 3 bulan yang ROAS 6.2 berbanding purata 2.8 yang lain. Dia alihkan 80% budget ke pemenang, dan revenue double dalam 6 minggu. Offer tu selalu wujud — yang tak wujud ialah sistem untuk jumpa dia dengan pantas.

**Keputusan yang bukan berdasarkan perasaan.** Ini perubahan psikologi yang paling besar: dengan framework, perdebatan dalaman "rasanya offer ni okay ke?" ditukar kepada data. Tidak lagi menjual dengan harga yang salah selama 2 bulan kerana "rasa". Keputusan bisnes terbesar anda (harga dan offer) kini berdasarkan bukti.

**Belajar yang bertindan (compounding).** Setiap test memberikan pembelajaran untuk test berikutnya. Selepas 6 bulan dengan sistem ini, Khir tahu: bundle 3 menang untuk cold traffic, langganan menang untuk retargeting, e-book bonus tak bermakna langsung (kos tetap, tiada kesan). Itu bukan sekadar 30 offer yang diuji — ia adalah 30 pelajaran yang terpasang di atas satu sama lain. Kompetitor yang menguji satu demi satu tidak akan pernah mempunyai kedalaman (depth) ini.

**Lindungi diri daripada penawaran yang salah.** Offer yang salah tidak sekadar menyebabkan anda kehilangan jualan — ia melatih algoritma untuk mencari pembeli yang salah, membakar audiens anda dengan iklan yang tidak relevan, dan mengajar anda kesimpulan yang salah ("produk ini tidak laku" apabila sebenarnya TAWARAN itu tidak laku). Pengujian yang sistematik adalah insurans terhadap kesilapan yang paling mahal dalam pemasaran.

## Story Closing: Dokumen Yang Menjaga Keputusan Besar

Hari ini, di atas dinding pejabat Khir, ada satu dokumen berbingkai: test matrix kempen terkini — 5 offer, angka-angka minggu pertama, dan satu kolum yang bertulis "KEPUTUSAN: ???" yang akan diisi pada hari ke-7.

Kakitangan dia tahu ritual itu: hari ke-7 setiap kitaran ujian, semua orang duduk, data dipaparkan, dan pemenang diumumkan — bukan oleh perasaan siapa-siapa, tapi oleh nombor yang ditulis mengikut peraturan yang telah dipersetujui SEBELUM data wujud.

Suatu petang, seorang rakan marketer datang berbincang, stres: "Aku dah tukar offer tiga kali bulan ni. Semua tak berapa nak jalan. Aku rasa produk aku ada masalah."

Khir bertanya satu soalan: "Kau test diorang secara serentak, dengan budget yang sama, kepada audiens yang sama?"

Rakan dia diam. "...Tak. Satu-satu. Ikut mood."

"Produk kau kemungkinan besar tak ada masalah," kata Khir sambil mengeluarkan satu dokumen dari drawer — test matrix kosong yang dicetak. "Tawaran yang kau berikan kepada pasar itu yang belum diuji dengan betul. Duduk. Aku tunjukkan sistem yang mengubah cara aku buat keputusan — dan yang menjadikan purata ROAS naik dua kali ganda dalam setahun."

Kerana pada akhirnya, perbezaan antara marketer yang berjaya dan yang berputar-putar bukanlah intuisi, bukanlah kemahiran, bukanlah nasib.

Ia adalah sistem untuk mengetahui — dengan pantas dan murah — bahawa mereka berada di jalan yang betul.

*(TAMAT Bab 2 — teruskan ke Kesimpulan)*
