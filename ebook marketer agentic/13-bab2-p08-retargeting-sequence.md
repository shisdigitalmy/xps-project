# Point 8: Retargeting Sequence

## Story Opening: Aminah Dan 70% Yang Hilang

Aminah jual suplemen kesuburan untuk pasangan yang merancang keluarga — niche yang sensitif, yang customer tak beli secara impulsif. Produk mahal sikit, decision lambat sikit, dan trust kena build dulu.

Satu malam, dia duduk depan Ads Manager dan urus data yang buat dia sakit kepala:

- 1,000 orang klik iklan dia bulan lepas
- 340 orang sampai ke landing page (yang lain bounce)
- 96 orang add to cart
- 22 orang checkout

Dia kira balik. Dari 1,000 klik, hanya 22 jadi customer. Itu 2.2%.

Tapi yang buat dia rasa macam nak pengsan adalah angka yang tengah: **96 orang add to cart tapi tak beli.** Diorang sampai ke pagar, buka pintu, tengok barang, letak dalam bakul... dan pergi.

74 orang. Duit ads yang bawa diorang sampai situ — pembaziran yang tak masuk akal. Untuk setiap satu daripada 74 orang itu, Aminah dah bayar klik RM2-RM4. Itu RM150-RM300 ads spend yang terbakar untuk orang yang SUDAH tunjuk minat yang tinggi.

Mula-mula dia try fix dengan cara yang biasa orang buat: dia buat iklan baru yang lebih aggressive. "Diskaun 20%!" "Jangan tunggu lama!" "Promosi terhad!"

Result? Takde apa-apa perubahan besar. Bahkan skang ada beberapa comments yang tak sedap: "Desperate sangat ke?"

Masalahnya bukan offer. Masalahnya Aminah tengah cakap dengan semua orang yang sama ayat, pada masa yang sama, padahal setiap orang tu berada di tahap kesiapan yang berbeza. Ada yang tak beli sebab ragu keberkesanan. Ada yang tak beli sebab tak percaya brand baru. Ada yang tak beli sebab nak discuss dengan suami dulu. Ada yang lupa je — masuk bakul, keluar rumah, hilang dari ingatan.

Satu ayat sales pitch tak boleh jawab semua tu. Yang perlu adalah SATU SEQUENCE — mesej berbeza, ikut tahap, dalam urutan yang betul.

## Huraian Use Case

Retargeting sequence adalah sistem untuk bercakap semula dengan orang yang dah kenal anda — tapi BELUM beli. Dan cara betul bukan "ulang iklan sama sampai diorang pitam", tapi **urutan mesej yang berstruktur yang jawab setiap objection ikut tahap**.

Urutan 5 tahap yang proven (setiap tahap 3-4 hari):

**Tahap 1 (Hari 1-3): Social Proof.** Orang baru tinggal cart anda. Jangan jual lagi. Tunjukkan bukti yang orang lain percaya: rating, bilangan pelanggan, testimoni yang relate. Mesej subliminalnya: "Kau tak silap pilih. Ramai dah jalan jalan ni sebelum kau."

**Tahap 2 (Hari 4-6): Objection Handling.** Sekarang tangani keraguan secara langsung. Untuk suplemen: halal cert, keselamatan bahan, siapa yang tak sesuai, apa yang berlaku kalau tak berkesan. Setiap niche ada objection utama yang berbeza — kenalpasti yang paling kerap dalam inbox anda, dan itu tahap 2 anda.

**Tahap 3 (Hari 7-10): Scarcity yang sebenar.** Baru sekarang bercakap pasal stok/offer — dan ia mesti BENAR. Batch terhad, harga promo yang betul-betul berakhir. Fake urgency dalam niche kesihatan adalah racun trust — satu kali orang perasan anda tipu, habis.

**Tahap 4 (Hari 11-14): Risk Reversal.** Buang risiko dari bahu customer: garansi wang kembali, sokongan WhatsApp, konsultasi percuma. Mesejnya: "Kalau tak berkesan, anda tak rugi apa-apa." Untuk produk yang mahal, ni sering jadi pencetus terakhir yang diperlukan.

**Tahap 5 (Hari 15+): Last Chance.** Tutup pintu dengan sopan. Harga promo hari terakhir, atau — untuk yang masih tak move — beri nilai terakhir dan lepaskan. Bukan semua orang adalah customer anda, dan itu okay. Budget yang dijimatkan dari berhenti mengejar yang salah boleh guna untuk cari yang betul.

Kenapa urutan ni works: sebab ia mengikut psikologi yang sebenar dalam decision pembelian — kenal → percaya → ragu → yakin → bertindak. Anda tak memaksa; anda menemani.

## Teknikal

**Setup audience dalam Ads Manager.** Sequence ni jalan dengan custom audience: orang yang visit product page dalam 30 hari (tanpa purchase). Untuk tahap lebih tajam, pisahkan: AddToCart tanpa Purchase (paling panas) vs PageView je (sejuk sikit). Setiap audience dapat sequence yang sikit berbeza — tapi start dengan satu audience dulu, jangan susahkan diri.

**Cara sequence jalan secara teknikal:** setiap tahap adalah ad set yang berasingan, dengan schedule yang bermula bergilir (Tahap 1 hari 1-3, Tahap 2 hari 4-6...). Atau lebih mudah: guna satu ad set per tahap dengan custom audience yang overlap yang dikawal melalui exclusion — audience Tahap 2 exclude orang yang dah purchase. Minta Opencode jelaskan struktur ni dan sediakan naming convention yang kemas.

**Frequency cap.** Set max 2-3 impressions per orang per minggu untuk setiap tahap. Retargeting yang over-expose berubah dari "mengingatkan" kepada "mengejar" — dan orang menyampah pada yang mengejar.

**Kreatif yang berbeza untuk setiap tahap.** Jangan recycle visual. Tahap 1: gambar testimoni/rating. Tahap 2: carousel FAQ. Tahap 3: product + promo banner. Tahap 4: garansi badge. Tahap 5: countdown. Setiap tahap ada mood sendiri.

**Kecualikan pembeli.** SATU baris setup yang paling penting: exclude Purchase event. Kalau tak, orang yang dah beli akan terus nampak "jangan tunggu lama lagi" — dan mereka rasa tertipu sikit bila tengok promo yang diorang tak dapat.

## Contoh Prompt

> "Design a 5-stage retargeting ad sequence untuk pelanggan yang visit product page suplemen kesuburan tapi tak beli. Audience: wanita 28-38, dah add to cart atau spend masa 2+ minit di page.
>
> Untuk SETIAP tahap, beri:
> - Objective psikologi tahap tu (kenapa mesej ni pada masa ni)
> - Headline (max 10 perkataan)
> - Body copy (3-4 ayat, Bahasa Melayu santai, empatik)
> - Visual direction (jenis gambar/video apa)
> - CTA text
>
> Urutan:
> - Tahap 1 (Hari 1-3): Social proof — tunjukkan orang lain dah percaya
> - Tahap 2 (Hari 4-6): Objection handling — halal cert, keselamatan, sesuai untuk siapa
> - Tahap 3 (Hari 7-10): Scarcity yang sebenar — promo berakhir (jangan fake)
> - Tahap 4 (Hari 11-14): Risk reversal — garansi, support WhatsApp
> - Tahap 5 (Hari 15+): Last chance — tutup dengan sopan
>
> Niche ni SENSITIF — customer tengah struggle emotionally. Tiada pressure tactics, tiada fear-mongering, tiada ayat macam 'kau akan rugi selamanya'. Tone: seorang kawan yang memahami, bukan salesgirl yang desperate."

Baris terakhir tu penting. Niche kesihatan sensitif — prompt yang betul mengeluarkan copy yang betul.

## Manfaat Diperolehi

**Wang yang telah "hilang" kembali.** Aminah memulihkan 23% daripada cart abandonment — itu RM4,000-5,000 sebulan daripada trafik yang dah dibayar. ROAS untuk retargeting selalunya paling tinggi dalam seluruh akaun, sebab anda bercakap dengan orang yang sudah separuh yakin.

**Penjimatan kos iklan.** Dengan sequence, anda berhenti menunjukkan iklan yang sama kepada semua orang. Orang yang dah melihat social proof 3 kali tak perlu melihatnya lagi — mereka perlu langkah seterusnya. Kesetiaan pada urutan (sequence) = tiada pembaziran.

**Pengalaman pelanggan yang lebih baik.** Ini yang diabaikan oleh semua orang: retargeting yang baik sebenarnya BERGUNA. Orang yang dah ragu dan kemudian melihat iklan yang menjawab keraguan mereka akan berfikir, "Bagus juga mereka jelaskan..." Itu bukan mengganggu — itu perkhidmatan.

**Data untuk produk.** Tahap mana yang mempunyai konversi paling tinggi akan memberitahu anda di mana masalah sebenar funnel anda berada. Kalau tahap 2 (objection) adalah yang paling lemah, itu bermakna halaman produk anda tidak cukup menjawab keraguan. Urutan ini bukan hanya alat menjual — ia juga alat untuk mendiagnosis.

## Story Closing: 74 Orang Yang Kembali

Bulan pertama selepas sequence hidup, Aminah buka Ads Manager dengan perasaan yang berbeza. Bukan berdebar macam dulu — ingin tahu.

Daripada 74 orang yang hilang bulan sebelumnya, 17 kembali dan beli. 23%. Untuk produk yang harganya RM180, itu lebih RM3,000 revenue daripada trafik yang dah dibayar — dan sequence ni jalan secara automatik setiap bulan.

Tapi mesej yang buat dia paling puas hati datang daripada seorang pembeli dalam DM:

"Kak, sebenarnya saya dah hampir beli minggu lepas tapi saya ragu sebab brand baru. Lepas tu saya nampak iklan tentang jaminan produk, dan saya fikir — kalau mereka berani beri jaminan macam tu, maksudnya mereka yakin. Saya beli. Dan alhamdulillah, saya buat keputusan yang betul."

Aminah baca mesej tu dua kali.

Orang ini melalui seluruh perjalanan: kenal, ragu, yakin, beli. Dan pada setiap langkah, ada mesej yang betul yang menunggu dia. Bukan kebetulan. Sistem.

Skang setiap kali dia lihat angka add-to-cart tanpa checkout, dia tak panik lagi. Dia tahu apa yang perlu dilakukan.

"Okey. Kita jemput diorang balik. Satu persatu."

*(Teruskan ke Point 9: Seasonal Promo Pages)*
