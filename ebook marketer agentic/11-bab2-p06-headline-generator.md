# Point 6: A/B Headline Generator

## Story Opening: Nurul Dan Lapan Patah Perkataan

Nurul ada satu tab browser yang dia tak tutup selama dua minggu. Iklan kompetitor dia.

Iklan tu simple gila. Takde video. Takde design mahal. Cuma satu gambar produk dan satu headline:

**"Kenapa Energy Selalu Turun Waktu 3 Petang?"**

Lapan patah perkataan. Itu je.

Tapi bila Nurul check ads library (yang memang boleh tengok iklan orang lain), angka engagement tu buat dia duduk diam: ribuan reactions, ribuan comments, dan yang paling menyakitkan — iklan tu nampak macam dah berjalan lama. Ia bukan viral spike. Ia konsisten. Iklan tu BISA sebab headline tu buat sesiapa yang pernah rasa lesu pukul 3 petang — iaitu semua orang — berhenti scroll.

Nurul bandingkan dengan iklan dia sendiri. Headline dia, yang dia edit selama tiga malam, yang dia baca kuat-kuat untuk test rima, yang dia tanya pendapat empat orang:

**"VitaBoost: Suplemen Tenaga Premium Dengan Formulasi Berpaten Yang Membantu Menyokong Tahap Energi Optimum Sepanjang Hari Untuk Gaya Hidup Anda Yang Aktif"**

Dua puluh dua patah perkataan. Penuh. Bertatahkan kata-kata marketing. Dan result? CTR 1.2%. Budget masuk, orang scroll lalu.

Di situ Nurul rasa satu benda yang tak sedap tapi penting: headline dia tak kalah sebab produk lemah. Ia kalah sebab ia ditulis untuk MENUNJUKKAN diri dia yang bijak, bukan untuk menghentikan orang yang tengah scroll. Orang dalam feed tak baca. Orang dalam feed scan. Dan headline 22 perkataan tak boleh discan dalam 0.5 saat.

Soalan yang tergantung dalam kepala dia: kalau headline 8 perkataan boleh buat orang berhenti — macam mana nak JANA banyak headline macam tu? Sebab nak fikir satu yang bagus pun dah makan tiga malam.

## Huraian Use Case

Ini jawapan dia: A/B Headline Generator — guna Opencode untuk hasilkan 20 headline dalam satu batch, setiap satu dengan sudut psikologi yang berbeza, semua dalam masa kurang dari 5 minit.

Konsep asasnya: headline yang bagus bukan hasil kebetulan. Ia hasil dari SUDUT PSIKOLOGI yang betul. Ada enam sudut utama yang proven dalam direct response marketing:

**1. Curiosity Gap.** Buka lubang rasa ingin tahu yang otak tak boleh biarkan: "Perkara ni yang buat tenaga turun — dan ia bukan kurang tidur." Otak manusia tak tahan dengan soalan yang tergantung. Klik adalah cara menutup lubang tu.

**2. Question-Based.** Soalan yang buat orang jawab dalam kepala sendiri: "Kenapa kau ok pagi tapi hancur petang?" Bila orang dalam-feed mental menjawab "haa betul pun", kau dah menang setengah perlawanan.

**3. Direct Benefit.** Nyatakan hasilnya terus, tanpa hiasan: "Tenaga sampai petang. Tanpa kopi ke-3." Untuk audiens yang praktikal dan tengah cari solution, ini paling jujur dan paling berkesan.

**4. Negation Hook.** Statement yang menentang sangkaan biasa: "Kurang tidur bukan sebab kau penat." Otak akan berhenti sebab ia bercanggah dengan apa yang orang percaya. Sangkaan yang dicabar = perhatian yang ditangkap.

**5. Social Proof.** Nombor dan orang: "12,000 rakyat Malaysia dah tukar rutin pagi diorang." Kita adalah haiwan kawan (herd) — angka besar yang spesifik memberi kepercayaan.

**6. Urgency/Scarcity.** Gunakan dengan berhati-hati — untuk promo dan retargeting, bukan cold traffic: "Stok batch ni tinggal 300 unit." Cold traffic belum kenal kau, jadi urgency tak bermakna lagi. Retargeting audience yang dah kenal — urgency berkesan.

Kenapa test SEMUA sudut? Sebab anda tak tahu audience anda respond pada sudut mana — sampai anda test. Dan setiap kali anda jumpa sudut yang menang untuk satu audiens, anda bukan sekadar dapat satu iklan yang bagus. Anda dapat INSIGHT pasal audiens tu: apa yang buat mereka click, apa yang mereka takut kehilangan, apa yang mereka nak tahu.

## Teknikal

**Peraturan panjang: 8-12 perkataan.** Ini bukan pilihan estetik — ia batasan teknikal. Headline Facebook dipotong pada saiz skrin tertentu, terutamanya mobile. Headline yang lebih panjang dari itu hilang hujungnya — dan hujung biasanya tempat punchline. Sebut dengan jelas dalam prompt: max 10 perkataan, contohnya.

**Pisahkan headline dan primary text.** Headline adalah hook. Primary text adalah payung (back up). Jangan gabungkan tugas. Dalam prompt, minta output berstruktur: headline + satu ayat sub-text untuk sokong.

**Elak kata-kata yang mengurangkan keyakinan.** Ads Manager akan menolak atau menandai headline dengan: "GRATIS!!!" (huruf besar berlebihan), "Jaminan 100%", tanda seru bertubi-tubi, dan klaim perubatan. Dalam prompt, letak sekatan negatif (negative constraint) — lebih berkesan dari menyuruh AI "buat yang bagus".

**Iterate pemenang.** Lepas data masuk dan satu headline menang — jangan berhenti. Guna Opencode untuk iterate: "Headline ni yang menang. Hasilkan 10 variasi baru yang kekal struktur yang sama tapi tukar kata-kata kunci." Pemenang hari ini adalah benih (seed) untuk pemenang minggu depan.

## Contoh Prompt

> "Hasilkan 20 headline iklan Facebook untuk suplemen tenaga harian yang menyasarkan pekerja pejabat 25-40 tahun yang bergantung pada kopi untuk kekal terjaga.
>
> Agih ikut 4 kategori, 5 headline setiap satu:
> 1. Curiosity gap — buat mereka nak tahu jawapannya
> 2. Soalan — soalan yang mereka boleh jawab 'ya' dalam kepala
> 3. Manfaat langsung — hasil yang jelas, tanpa hiasan
> 4. Canggahan — statement yang bertentangan dengan kepercayaan mereka
>
> Keperluan:
> - Max 10 patah perkataan setiap headline
> - Bahasa Melayu santai, macam orang sembang
> - Tanpa huruf besar semua, tanpa tanda seru bertubi-tubi
> - Tanpa klaim perubatan, tanpa '100%', tanpa 'dijamin'
> - Setiap headline sertakan 1 ayat sub-text untuk sokong (max 15 perkataan)
> - Elak kata-kata yang biasa: 'premium', 'berpaten', 'optimum', 'gaya hidup sihat'"

Perhatikan baris terakhir: elak kata-kata klise. AI default kepada perkataan marketing generik — kunci (block) mereka terus dalam prompt.

## Manfaat Diperolehi

**CTR yang naik — dengan angka.** Nurul: dari 1.2% ke 4.7% dalam dua minggu. Itu bukan peningkatan kecil — pada budget yang sama, itu lebih 3x trafik untuk kos yang sama. Semua perbezaan dari satu elemen je: headline.

**Anda berhenti berdebat dengan diri sendiri.** Sebelum ni, memilih headline adalah peperangan dalaman: "Yang ni bagus ke? Yang ni lagi bagus ke?" Sekarang, anda menghasilkan 20, letak duit kecil di belakang setiap satunya, dan biarkan DATA yang memilih. Keputusan yang berdasarkan data kurang menguras tenaga (stress) daripada keputusan yang berdasarkan rasa.

**Perpustakaan yang bertambah setiap bulan.** Setiap batch 20 headline, separuh akan gagal — itu bagus, gagal murah. Yang menang masuk perpustakaan. Dalam 3 bulan, anda akan mempunyai dokumen yang mengandungi 30-50 headline yang terbukti berkesan untuk audiens anda. Kempen baharu tidak akan bermula dari kosong lagi. Selamanya.

**Ad fatigue — diselesaikan.** Iklan yang sama dilihat oleh orang yang sama berkali-kali akan hilang kesannya (frekuensi naik, CTR turun). Dengan perpustakaan headline, anda tukar headline setiap 2-3 minggu dan iklan anda sentiasa berasa segar — tanpa kerja baharu yang berat.

## Story Closing: Lembaran Angka (Spreadsheet) Kecil Yang Besar Kesannya

Nurul menjalankan ujian pertama dengan 10 headline, budget kecil RM15 sehari, 5 hari. Keluaran (Output) Opencode memberi 20, dia pilih 10 yang paling dia suka.

Dalam 5 hari, satu headline muncul sebagai pemenang dengan perbezaan yang jelas:

**"Kenapa 10 Pagi Anda Ok, Tapi 3 Petang Rasa Macam Kena Tarik?"**

CTR 4.7%. Hampir 4 kali ganda berbanding headline lama yang dia edit 3 malam. Dan di dalam bahagian komen, orang menulis "betul ni!!", "hari-hari ni nasib saya", "tag kawan ofis korang" — iklan tu menjadi tempat orang berkongsi masalah. Itulah tanda headline yang betul: ia bukan lagi iklan, ia satu perbualan.

Hari ini Nurul ada satu spreadsheet — tiada apa yang mewah, hanya Google Sheets — dengan tiga lajur: headline, sudut, CTR. Setiap minggu ia bertambah panjang. Setiap kali dia bina kempen baharu, dia tidak mula dari kertas kosong. Dia mula dari spreadsheet.

Dan dia ketawa bila teringat dirinya dulu yang edit satu headline 3 malam.

*(Teruskan ke Point 7: Pembina Kuiz/Penilaian)*
