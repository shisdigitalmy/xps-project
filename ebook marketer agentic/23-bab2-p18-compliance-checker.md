# Point 18: Compliance Checker Output

## Story Opening: Rosli Dan Satu Ayat Yang Kos RM30,000

Rosli jual suplemen detoks. Bisnes dia dah 2 tahun, stable, ada customer base yang setia. Semua berjalan elok — sampai satu pagi Selasa.

Dia buka laptop macam biasa, nak check ads. Dan yang menampar dia ialah satu notification merah di atas Ads Manager:

**"Your ad account has been disabled for violating our Advertising Policies."**

Disabled. Akaun utama. Akaun yang ada pixel data 2 tahun, audience yang dah dipanaskan (warmed up), custom audiences berpuluh ribu — semua itu, dikunci di sebalik satu larangan.

Dia buka emel untuk mencari sebabnya. Jawapan Meta: pelanggaran polisi iklan berkaitan kesihatan (health-related advertising policy violation). Dia scroll iklan mana satu yang melanggar... dan jumpa dia.

Satu iklan. Satu ayat. Iklan yang dia tulis sendiri lewat malam, masa dia mengantuk, masa dia rasa "agak-agak boleh lah":

**"Produk ini menyembuhkan masalah pencernaan dalam 7 hari!"**

Kata "menyembuhkan". Klaim perubatan. Pelanggaran penuh. Dan Meta tidak mengeluarkan amaran untuk ini — mereka terus menutup akaun.

Kesan domino yang menyusul:

- **Minggu 1:** semua kempen berjalan berhenti. Jualan jatuh ke sifar. Ada 3 kempen Raya yang dah dijadualkan — tertunda tanpa tarikh.
- **Minggu 1 juga:** dia buat rayuan (appeal). Balasan automatik: "Kami sedang meninjau rayuan anda." Tiada garis masa. Tiada nombor untuk menghubungi sesiapa.
- **Minggu 2:** customer mula tanya "kenapa laman web tak ada iklan?" Dia menjawab dengan malu: "ada masalah teknikal."
- **Minggu 3:** dia cuba buat akaun baharu dengan nama perniagaan lain — dan Meta mengesan pautan (BM dari peranti dan identiti yang sama). Akaun baharu pula tergantung. Ini menguncinya lebih ketat.
- **Minggu 4 (akhirnya):** akaun kembali. TAPI: semua data pixel yang dimulakan semula, semua algoritma belajar semula (re-learning), dan CPM adalah 40% lebih tinggi berbanding sebelum sebab kualiti akaun yang dianggap "baharu".

Jumlah kerugian: 4 minggu jualan sifar (sekitar RM25,000-30,000 potensi jualan), + CPM yang lebih tinggi selama sebulan, + stress yang tidak dapat dihitung dengan wang.

Dan penyebabnya? Satu ayat, ditulis pada pukul 11 malam oleh orang yang letih dan yang sedikit mengabaikan peraturan.

## Huraian Use Case

Compliance Checker bukan alat untuk membuat jualan lebih banyak secara langsung — tetapi ia adalah alat yang MEMELIHARA keupayaan anda untuk terus menjual. Akaun iklan adalah kenderaan seluruh perniagaan anda, dan kepatuhan (compliance) adalah tali pinggang keledar.

Dengan Opencode, anda bina TIGA dokumen sekali dan guna selama-lamanya:

**Dokumen 1: Senarai hitam (Blacklist) — Ayat yang dilarang.** Senarai frasa yang memerangkap akaun suplemen, dengan penjelasan mengapa setiap satunya berbahaya: "menyembuhkan", "merawat", "terbukti secara klinikal" (tanpa sumber), "100% berkesan", "tanpa kesan sampingan", "alternatif ubat doktor", angka jaminan hasil ("turun 5kg dalam 7 hari"). Setiap satu dengan sebab: yang mana melanggar dasar Meta (Meta policy), yang mana melanggar garis panduan NPRA/KKM, yang mana kedua-duanya.

**Dokumen 2: Matriks penggantian (Substitution Matrix) — Yang salah → Yang betul.** Ini kerja harian yang paling berguna: jadual yang menukar ayat yang menarik tetapi berbahaya kepada ayat yang selamat tetapi masih menjual:

- "Menyembuhkan insomnia" → "Menyokong tidur yang lebih lena"
- "Turun 5kg dalam seminggu" → "Menemani perjalanan pengurusan berat badan anda"
- "Tiada kesan sampingan" → "Dirumuskan untuk toleransi harian — semak label untuk senarai bahan"
- "Terbukti berkesan" → "Dirumuskan dengan bahan yang dipercayai sejak bertahun-tahun"

Perbezaan ini nampak kecil, tetapi ia adalah perbezaan antara akaun yang hidup dan akaun yang mati.

**Dokumen 3: Senarai semak 10-poin pra-terbit.** Prosedur 2 minit sebelum SETIAP iklan diserahkan: adakah ada kata kerja dakwaan? Adakah ada janji hasil yang spesifik? Adakah ada testimoni yang menyebut penyakit? Adakah ada teks pada imej yang berlebihan? dsb. Semak, sahkan, serahkan.

Satu nota penting yang ramai tidak sedari: kepatuhan bukan sekadar tentang melindungi akaun — ia juga tentang JUJUR. Ayat yang selamat secara kebetulan adalah ayat yang jujur. "Menyokong tidur lebih lena" adalah janji yang anda boleh tepati. "Menyembuhkan insomnia dalam 7 hari" adalah janji yang, walaupun akaun anda selamat, akan menimbulkan masalah apabila 500 pelanggan membeli dan tidak sembuh — pulangan (refund), aduan, reputasi tercemar. Kepatuhan melindungi dua hala: akaun anda DAN reputasi anda.

## Teknikal

**Bina senarai semak sebagai sistem yang digunakan oleh semua orang.** Dokumen ni bukan untuk anda baca sekali — ia untuk DIPAKAI. Format yang disyorkan: satu halaman PDF yang dicetak dan dilekat pada dinding, atau senarai semak digital dalam Notion/Trello yang jadi bahagian workflow sebelum publish. Bagi orang yang baharu masuk: dokumen ini adalah latihan hari pertama mereka.

**Pengaudit kandungan retroaktif (Retroactive).** Selain daripada dokumen untuk iklan baharu, gunakan Opencode untuk AUDIT semua iklan yang sedang berjalan dan semua kandungan lama: "Semak 15 iklan ini terhadap senarai semak, tandakan yang bermasalah, cadangkan pembetulan." Anda mungkin terkejut berapa banyak iklan lama yang menggantung dalam keadaan berbahaya tanpa anda sedari — hanya kerana Meta belum menandainya lagi.

**Rujukan khusus Malaysia.** Meta policy adalah satu lapisan. NPRA dan garis panduan KKM untuk promosi produk kesihatan adalah lapisan kedua — dan kadang-kadang lebih ketat daripada Meta. Contoh: untuk produk berdaftar NPRA, ada peraturan tentang penggunaan logo, ayat yang dibenarkan, dan larangan dakwaan terapeutik. Minta Opencode sertakan kedua-duanya lapisan dalam dokumen, dengan label yang jelas.

**Kemas kini berkala.** Policy Meta berubah. Garis panduan KKM berubah. Jadualkan ulasan 3 bulan sekali: berikan senarai semak semasa kepada Opencode, minta ia kemas kini berdasarkan amalan semasa, semak perbezaan (diff) perubahan. Dokumen yang tidak dikemas kini secara perlahan menjadi dokumen yang berbahaya.

## Contoh Prompt

> "Bina 3 dokumen kepatuhan untuk iklan FB produk suplemen kesihatan di Malaysia:
>
> DOKUMEN 1 — Senarai hitam ayat berbahaya:
> - 12 frasa/dakwaan yang melanggar Meta ads policy untuk suplemen (dengan penjelasan setiap satu: mengapa berbahaya, bahagian polisi mana yang dilanggar)
> - Berasingan: yang juga melanggar garis panduan NPRA/KKM Malaysia
>
> DOKUMEN 2 — Matriks penggantian:
> - 15 baris: ayat berbahaya → penggantian selamat → kenapa penggantian masih menjual
> - Contoh format: 'Menyembuhkan X' → 'Menyokong [fungsi badan] yang sihat' → jujur dan masih memberikan manfaat
>
> DOKUMEN 3 — Senarai semak pra-terbit 10 poin:
> - Soalan ya/tidak, dalam susunan yang logik
> - Termasuk semakan pada teks iklan, teks pada imej, halaman pendaratan, dan testimoni
> - Format yang mudah dicetak (boleh muat dalam satu halaman A4)
>
> Bahasa Melayu, jelas, tiada jargon undang-undang yang rumit. Tujuan: untuk digunakan oleh pemasar biasa sebelum setiap iklan dikeluarkan."

## Manfaat Diperolehi

**Akaun yang terus hidup.** Ini nilai yang paling sukar diukur sampai anda kehilangan akaun: keterusan perniagaan. Rosli kehilangan RM30,000 dan 4 minggu. Kos untuk membina dokumen-dokumen ini: satu petang. Ia adalah polisi insurans dengan premium paling murah dalam seluruh buku ini.

**Kelulusan iklan lebih pantas.** Iklan yang mematuhi peraturan diluluskan pada percubaan pertama. Tiada penolakan → rayuan → tunggu 24-48 jam. Setiap kitaran penolakan adalah 2 hari kempen yang tidak berjalan — dan dalam dunia iklan, 2 hari adalah peluang.

**Pasukan yang tidak membuat kesilapan.** Senarai semak bukan untuk anda sahaja — untuk setiap orang yang menulis ayat atas nama jenama: pekerja sambilan (part-timer), pereka (designer) yang letak teks pada imej, kandungan (content creator) UGC. Satu dokumen = kesilapan yang dilindungi untuk semua orang.

**Jujur = kepercayaan = jangka panjang (long-term).** Ini bahagian yang diabaikan oleh semua orang: jenama yang tidak membuat janji yang berlebihan (overpromise) mempunyai kadar pulangan yang lebih rendah, ulasan yang lebih baik, dan pelanggan yang lebih jangka panjang. Kepatuhan membangunkan jenama yang bertahan, bukan hanya akaun yang selamat.

## Story Closing: Papan Senarai Semak Di Dinding

Hari ini, di pejabat Rosli (yang kini adalah sebuah bilik kecil dengan 3 pekerja), ada satu benda yang dilekat pada dinding setiap workstation: senarai semak 10-poin, bingkai kecil, dicetak besar.

Sebelum SETIAP iklan diserahkan — tanpa mengira siapa yang menulisnya — ia melalui senarai itu. "Adakah ada kata kerja dakwaan? Tanda. Adakah ada janji hasil yang spesifik? Tanda." 2 minit. Kemudian serahkan.

Empat bulan selepas peristiwa yang mengejutkan itu: sifar penolakan iklan. Sifar amaran. Akaun yang sihat, CPM yang stabil, dan satu pemeriksaan kandungan yang mendapati 6 iklan lama yang berisiko (semuanya dibetulkan sebelum Meta menyentuhnya).

Dan pada seorang kawan yang baru mengalami apa yang Rosli alami — akaun dibekukan (banned), 3 minggu memperjuangkan rayuan — Rosli hanya mengatakan satu perkara:

"Kau tak perlukan nasib. Kau perlukan senarai semak."

Kemudian dia menghantar satu dokumen yang dibina satu petang — dokumen yang hari ini bernilai lebih daripada semua alat iklan yang dia miliki, kerana ia adalah satu-satunya yang memastikan semua alat itu kekal boleh digunakan.

*(Teruskan ke Point 19: Laporan Prestasi Mingguan)*
