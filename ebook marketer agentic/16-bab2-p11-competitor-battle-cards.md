# Point 11: Competitor Battle Cards

## Story Opening: Azlan Dan Soalan Yang Dia Tak Boleh Jawab

Azlan jual suplemen tulang sendi — target pasaran warga emas 50+, orang yang sakit lutut tapi masih nak aktif. Margin dia bagus, produk quality, cert lengkap. Tapi ada satu saat yang mengubah cara dia menjual selama-lamanya.

Satu petang, dia follow up dengan prospect yang dah negotiate hampir 2 minggu. Prospect tu dah sampai tahap "okay, saya berminat" — tinggal nak confirm order. Lepas tu, mesej yang datang:

"Bang, sebenarnya saya dah jumpa produk lain. Brand G. Harga dia RM89 je, produk awak RM165. Hampir 2 kali ganda... kenapa saya patut bayar lebih?"

Azlan pandang skrin. Dia tahu produk dia lebih bagus — ingredient dose lebih tinggi, ada ujian makmal, ada cert GMP yang brand G tu tak ada. TAPI — dan inilah masalahnya — dia tak pernah susun semua tu dalam bentuk yang boleh diberi dalam 30 saat. Panik sikit, dia taip:

"Bang, produk kami memang lebih berkualiti. Brand G tu murah sebab ingredient dia murah la."

Jawapan balik prospect: "Murah tak semestinya tak bagus bang. Saya tengok review dia pun banyak yang bagus."

Dan di situ Azlan buat kesilapan klasik: dia mula defend. Taip panjang-panjang pasal kenapa produk dia bagus, banding ingredient, sebut pasal harga murah = bahaya. Ayat yang semua BENAR, tapi tone dia dah naik, bunyi macam desperate, dan prospect rasa dia sedang dijawab oleh seorang penjual yang tengah lost deal.

Esoknya, prospect reply: "Terima kasih bang, saya proceed dengan yang murah dulu la. Kalau tak berkesan, saya contact awak balik."

"Kalau tak berkesan." Azlan tahu maksud ayat tu. Orang yang mula dengan produk murah yang tak berkesan akan jadi orang yang tak percaya SEMUA suplemen — termasuk produk Azlan yang sebenarnya boleh tolong dia.

Deal mati. RM165 sebulan recurring, mati. Sebab satu soalan yang tak ada jawapan sedia.

Malam tu Azlan tulis dalam nota dia: "Aku kalah bukan sebab produk kalah. Aku kalah sebab aku tak ada jawapan yang sedia."

## Huraian Use Case

Battle card adalah dokumen satu halaman yang mengandungi semua yang anda perlu tahu — dan semua yang pelanggan perlu dengar — bila brand anda dibandingkan dengan kompetitor. Ia adalah jawapan yang sedia, sebelum soalan itu datang.

Struktur battle card yang berkesan:

**1. Perbandingan fakta (bukan opinion).** Jadual bandingkan 6-8 dimensi yang penting untuk pelanggan: harga per hidangan (bukan harga botol — ini tip yang kuat: RM165/60 kapsul vs RM89/30 kapsul, siapa yang sebenarnya murah per hari?), standard ingredient, cert (HALAL, GMP, ujian makmal), garansi, review count, dan tempoh produk dah ada di pasaran.

**2. Talking points untuk setiap dimensi.** Bukan sekadar nombor — ayat yang boleh salesperson (atau anda dalam DM) guna terus: "Harga kita nampak tinggi, tapi per serving cuma RM2.75 berbanding RM2.97 — dan dengan dose yang dua kali lebih tinggi, satu botol kita tahan dua bulan."

**3. Jangan pernah kutuk kompetitor.** Peraturan emas ni perlu tulis besar: kata-kata tentang brand lain hanya boleh positif-factual ("Brand G juga pilihan yang okay untuk budget tertentu") — kekuatan anda yang bercakap, bukan kelemahan mereka. Orang boleh bau defensiveness, dan orang tak beli dari orang yang bunyi macam takut.

**4. Script per situasi.** Bila prospect sebut harga, bila prospect sebut review kompetitor, bila prospect sebut "takpe la, yang murah je dulu" — setiap situasi ada 2-3 ayat sedia. Battle card yang baik meliputi 80% situasi yang berulang.

Dengan Opencode, pembinaan battle card ni dari kerja research + writing yang ambil berhari-hari, jadi satu sesi 1-2 jam: anda bagi data yang anda tahu, ia struktur, cadangkan angle, dan tulis talking points.

## Teknikal

**Data dulu, baru card.** Battle card yang bagus mula dengan fakta yang BETUL. Sebelum prompt, kumpul: harga dan kandungan botol kompetitor (dari website diorang), cert yang mereka claim, review yang visible. Kalau anda tak pasti sesuatu fakta, biarkan sebagai "unverified" dalam card — jangan buat-buat. Satu fakta salah dalam battle card yang customer kesan akan musnahkan kredibiliti seluruh card.

**Harga per serving — senjata rahsia.** Ini teknik yang selalu menang untuk produk premium: bingkai semula perbandingan dari "harga botol" ke "harga per hari/per serving". RM165 untuk 60 kapsul yang 2 sehari = RM1.38 sehari. RM89 yang 1 sehari dose rendah = RM2.97 sehari... yang sebenarnya "mahal" ialah yang murah tu. Opencode boleh kalkulasi dan framing semua ni — anda cuma perlu beri nombor yang betul.

**Format yang boleh guna masa pressure.** Battle card yang terbaik bukan dokumen 10 muka surat. Ia SATU halaman yang boleh dibaca dalam 30 saat sebelum reply satu DM. Minta output: jadual perbandingan ringkas + 3 talking points per objection scenario. Yang panjang-panjang, simpan sebagai appendix.

**Version control.** Harga kompetitor berubah. Promo diorang berubah. Set battle date pada card, dan review setiap 2-3 bulan. Battle card yang out-of-date adalah lebih bahaya dari takde card — sebab anda akan cite harga lama dan nampak macam bodoh depan prospect.

## Contoh Prompt

> "Bina competitor battle card untuk produk suplemen tulang sendi kami: 'FlexiJoint Pro' — RM165, 60 kapsul, dose glukosamin 1500mg + kondroitin, ada HALAL cert, GMP certified, ujian makmal pihak ketiga, garansi 30 hari, 1,200 review rating 4.8.
>
> Banding dengan 2 kompetitor:
> - Brand A (market leader, premium): RM220, 60 kapsul, dose serupa, HALAL, GMP, takde garansi, 3,400 review rating 4.6
> - Brand G (budget option): RM89, 30 kapsul, dose rendah (500mg), HALAL je, tiada GMP cert yang dipaparkan, tiada garansi, 380 review rating 4.3
>
> Output:
> 1. Jadual perbandingan 7 dimensi (harga, harga per serving, dose bahan aktif, cert, garansi, review, tempoh di pasaran)
> 2. 3 talking points untuk handle 'kenapa mahal sangat' — fokus pada harga per serving dan dose
> 3. 2 talking points bila prospect kata 'Brand A lagi terkenal'
> 4. 2 talking points bila prospect nak 'try yang murah dulu'
> 5. 1 ayat standard bila orang sebut kompetitor — yang NEVER kutuk, selalu class
>
> Tone: yakin, berdasarkan fakta, mesra. Bahasa Melayu santai. Takde hyperbole, takde 'terbaik di dunia'."

## Manfaat Diperolehi

**Conversion rate naik pada saat-saat kritikal.** Perbezaan antara deal yang mati dan deal yang tutup selalunya SATU reply yang betul pada satu masa yang kritikal. Battle card memastikan reply tu sentiasa sedia — dalam 30 saat, bukan 30 minit gelisah.

**Team yang bercakap satu suara.** Dengan card, setiap orang yang cakap pasal produk anda — anda, part-timer, agen dropship — bawa argumen yang sama dan yang BETUL. Tanpa card, setiap orang improvise, dan setiap improvisation adalah risiko.

**Asset visual sekali gus.** Jadual perbandingan dalam battle card terus boleh jadi brief untuk designer buat comparison graphic — atau minta Opencode convert terus ke HTML table yang boleh screenshot. Satu binaan, dua guna: senjata sales + kandungan iklan.

**Confidence yang orang boleh rasa.** Ini subtle tapi nyata: orang yang tahu jawapan setiap soalan bercakap dengan tenang, dan ketenangan itu menular. Prospect tak beli dari orang yang panik. Mereka membeli daripada orang yang yakin — dan yakin datang dari persediaan.

## Story Closing: Soalan Yang Sama, Akhir Yang Berbeza

Tiga minggu lepas malam yang deal mati tu, prospect yang lain tanya Azlan soalan yang sama, perkataan yang hampir sama:

"Bang, ada brand lain lagi murah dari awak. Kenapa awak?"

Kali ni Azlan tak panik. Dia buka battle card (yang dia simpan dalam pinned chat WhatsApp), dan baca semula talking point yang dia dah bina. Lepas tu dia balas dengan tenang:

"Good question! Soalan tu yang paling selalu saya dapat. Jom saya tunjuk cara paling jujur untuk banding — bukan harga botol, tapi harga per hari dan dose sebenar yang anda dapat..."

Dia banding: RM1.38/hari dengan dose penuh vs RM2.97/hari dengan dose separuh. Dia sebut garansi 30 hari yang kompetitor tak bagi. Dia tak sebut satu ayat pun yang memburukkan brand G.

Hari tu juga, prospect reply: "Eh, tak terfikir pulak macam tu. Okay bang, saya ambil yang 2 bulan supply."

Azlan tutup laptop, dan senyum pada satu kebenaran yang baru dia faham betul-betul:

Deal tak hilang sebab harga. Deal hilang sebab takde siapa tunjukkan nilai. Dan skang, nilai tu dah tertulis, sedia, dalam satu card yang menunggu.

*(Teruskan ke Point 12: Content Pillar Mapping)*
