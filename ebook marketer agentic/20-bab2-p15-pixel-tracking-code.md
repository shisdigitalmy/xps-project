# Point 15: Pixel Event Tracking Code

## Story Opening: Danial Dan Data Yang Menipu Dia

Danial adalah jenis marketer yang percaya pada data. Dia tak buat keputusan ikut rasa — dia tengok angka. Masalahnya, dia tak pernah terfikir satu benda: **data yang salah adalah lebih bahaya daripada takde data.**

Bulan Januari, dia jual suplemen imuniti. Ads Manager dia tunjuk satu cerita yang cukup jelas: Ad A perform best, ROAS 3.1. Ad B mediocre, ROAS 1.4. Ad C lemah, ROAS 0.8.

Ikut logik: scale Ad A, matikan Ad B dan C. Dan dia buat macam tu.

Tapi ada satu benda yang tak kena — dan dia ambil masa 3 minggu untuk perasan. Jualan keseluruhan bisnes dia (yang dia track dalam sistem order sendiri) tak match dengan apa yang Ads Manager report. Ads Manager kata bulan Januari ada 86 purchases. Sistem order dia kata: ada 61.

40% daripada purchases sebenar... tak direkod oleh Pixel dia.

Maksudnya: di antara Ad B dan Ad C yang dia "bunuh" sebab "tak convert" — mungkin ada yang sebenarnya convert, tapi conversion tu tak sampai ke Ads Manager. Iklan yang sebenarnya hidden gem, dia matikan sebab data yang rosak kata ia lemah. Dan Ad A yang dia scale — mungkin tak sehebat yang dia fikir, sebab sebahagian "conversion" dia mungkin daripada sumber lain.

Danial spend satu petang Sabtu — satu petang PENUH — debug Pixel. Buka documentation. Tengok 5 video YouTube. Tanya dalam 3 group FB. Download plugin Meta Pixel Helper dan check satu-satu page.

Akhirnya dia jumpa: satu event Purchase yang parameter dia tak lengkap — event matching yang tak sampai, jadi sebahagian purchase dari satu payment gateway tak terdetect. Satu masalah yang, bila dah tahu jawapannya, boleh fix dalam 10 minit.

Tapi 3 minggu data yang dah tercemar. RM2,000+ keputusan iklan yang dibuat berdasarkan data yang salah. Dan 3 minggu Ad B dan Ad C yang sepatutnya hidup, mati.

## Huraian Use Case

Facebook Pixel dan Conversions API adalah sistem saraf bisnes iklan anda — ia yang memberitahu Facebook siapa yang beli, siapa yang hampir beli, dan siapa yang perlu dilihat iklan anda lagi. Kalau sistem saraf ni rosak, SEMUA keputusan yang dibuat oleh algo FB adalah keputusan buta.

Dan inilah keadaan yang lebih teruk dari yang anda sangka: majoriti marketer suplemen yang kecil-kecilan ada Pixel yang rosak — dan mereka TAK TAHU. Sebab Pixel yang rosak tak bunyi alarm. Ia cuma tunjuk data yang sikit salah, sikit hilang... dan anda buat keputusan atas data tu dengan penuh keyakinan.

Apa yang Opencode boleh bantu:

**1. Generate code snippet yang betul untuk setiap event.** Event-standard yang satu akaun suplemen perlu track:

- **PageView** — setiap page, asas segalanya
- **ViewContent** — bila orang tengok page produk (perlu! untuk retargeting audience building)
- **AddToCart** — dengan value dan currency
- **InitiateCheckout** — bila orang mula checkout
- **Purchase** — yang PALING penting, dengan value, currency, content_name, dan event ID untuk matching
- **Lead** — bila form kalkulator/quiz/landing page dihantar (sambungan dari Point 3 & 7)

**2. Conversions API (CAPI) setup.** Ini yang majoriti marketer skip — dan itu sebab data diorang cacat. Browser Pixel sahaja dah tak cukup zaman ni: iOS, ad blockers, dan browser privacy restrictions memotong sebahagian besar signals. Conversions API hantar data dari server secara terus ke Meta — bypass semua sekatan tu. Pixel + CAPI bersama = deduplication = data yang boleh dipercayai.

**3. Event matching parameters.** Detail yang buat Danial kehilangan 3 minggu: event ID yang match antara browser dan server side. Tanpa ni, data double-count atau tak count langsung. Opencode boleh generate snippet yang betul dengan parameter lengkap.

**4. Verification checklist.** Lepas install, macam mana nak tahu ia berjalan? Meta Pixel Helper extension, Events Manager test events, dan senarai semak mudah yang anda boleh jalankan dalam 5 minit setiap kali anda tukar apa-apa pada page.

## Teknikal

**Struktur code yang betul.** Pixel base code diletak dalam `<head>` setiap page. Event code diletak pada moment yang betul: AddToCart trigger bila button diklik, Purchase trigger pada page thank-you dengan dynamic value (harga sebenar order). Opencode boleh generate semua ni dengan komen yang jelas — mana nak paste, apa yang perlu ditukar.

**Dynamic parameters.** Purchase event yang bagus bukan cuma "ada orang beli" — ia bawa data: berapa nilai (untuk optimize ke ROAS, bukan ke jumlah konversi), apa produk (untuk reporting), dan event ID. Minta Opencode sediakan versi dynamic yang amik nilai dari URL parameter atau form — kalau site anda simple tanpa backend, ada workaround dengan query string.

**Test dahulu, baru scale.** Workflow yang betul: install → test dengan Meta Pixel Helper → buat test purchase sendiri → check Events Manager → baru kata siap. 15 minit yang menjimatkan minggu data yang rosak.

**Google Tag Manager (opsyen untuk yang advanced).** Kalau anda ada banyak pages dan banyak events, GTM adalah pusat kawalan yang lebih kemas. Tapi untuk start: direct Pixel code dalam HTML pages anda cukup. Jangan buat complex bila simple boleh jalan.

## Contoh Prompt

> "Generate complete Facebook Pixel tracking setup untuk satu landing page suplemen dengan checkout simple:
>
> 1. Base Pixel code untuk diletak dalam <head> (dengan placeholder untuk Pixel ID)
> 2. ViewContent event — fire bila page produk dibuka, dengan content_name dynamic dari page title
> 3. AddToCart event — fire bila button 'Beli Sekarang' diklik, dengan value dan currency MYR
> 4. Purchase event — fire pada page thank-you, dengan value, currency, dan event ID yang generate unique setiap order (untuk deduplication dengan Conversions API)
> 5. Lead event — fire bila form email di-submit (sambung dari form kalkulator yang ada)
>
> Untuk setiap snippet: komen dalam Bahasa Melayu yang terangkan (a) snippet ni letak mana, (b) apa yang perlu saya edit, (c) macam mana test.
>
> Kemudian beri:
> - Checklist verifikasi 5 langkah guna Meta Pixel Helper dan Events Manager
> - Senarai kesilapan biasa yang buat data tak match (untuk saya semak sendiri)"

## Manfaat Diperolehi

**Keputusan iklan yang berdasarkan realiti.** Ini yang paling penting dari semua. Data yang betul = algo FB belajar daripada sinyal yang betul = optimasi ke orang yang memang beli. Data yang rosak = algo mengoptimumkan ke arah yang salah sementara anda bayar untuk kesilapannya.

**Jumpa "hidden gems".** Danial selepas fix: rupa-rupanya Ad C yang dia bunuh sebenarnya dapat 12 konversi yang tak tertrack — ROAS sebenar 2.9, bukan 0.8. Dia naikkan balik, dan iklan tu jadi penyumbang ke-2 terbesar bulan itu. Berapa banyak "gem" macam tu yang anda dah bunuh tanpa tahu?

**Budget yang jimat sendiri.** Kalau algo optimise ke konversi yang betul, CPA turun secara semula jadi. Majoriti akaun yang "stuck" sebenarnya bukan masalah kreatif — masalah pengukuran.

**Keamanan pikiran yang boleh diukur.** Checklist 5 minit selepas setiap perubahan page = tiada lagi bulan-bulan data yang rosak yang baru dikesan selepas terlambat. Untuk seorang yang membuat keputusan berdasarkan data, itulah keselesaan yang paling berharga.

## Story Closing: Minggu Data Yang Bersih

Lepas fix, Danial buat satu rutin baru: setiap kali dia tukar apa-apa pada landing page — walaupun cuma tukar warna button — dia jalankan checklist 5 minit: Pixel Helper hijau, test event muncul, test purchase complete.

Bulan Februari, data dia bersih untuk kali pertama. Dan bersih bermakna jujur — termasuk bahagian yang tak selesa: dua "top performer" dia sebenarnya hanya perform 60% dari yang Ads Manager tunjuk, sebab deduplication issue double-count beberapa pembelian. Dia matikan, alihkan budget, dan dalam dua minggu CPA keseluruhan turun 31%.

Bulan berikutnya, dia setup Conversions API penuh — yang dulu dia rasa "terlalu teknikal untuk saya". Dengan snippet yang Opencode sediakan dan panduan step-by-step, siap dalam satu petang. Sinyal jadi lebih padat, algo jadi lebih bijak, CPA turun lagi.

Suatu hari seorang kawan marketer merungut dalam group: "Ads Manager saya tunjuk jualan yang tak masuk pun dalam sistem order saya. Ada sesiapa pernah face ni?"

Danial reply dengan satu soalan yang 6 bulan lepas dia sendiri tak akan faham:

"Bro, pixel ko ada event ID yang dedup dengan CAPI tak?"

Kawan tu: "...apa tu?"

Danial senyum, dan tulis balik dengan sabar — sebab dia tahu betapa mahalnya ilmu tu bila tak ada:

"Ayo. Duduk dulu. Aku nak cerita pasal 3 minggu data yang rosak yang hampir bawa bisnes aku ke tempat salah."

*(Teruskan ke Point 16: Lookalike Audience Briefs)*
