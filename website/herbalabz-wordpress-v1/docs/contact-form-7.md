# Contact Form 7 — Herbalabz Inquiry

## Form Markup (paste into CF7 editor)

<form class="gb-form" id="gbInquiry" novalidate>
<div class="gb-grid">
<div><label class="sr" for="gbName">Nama</label><input id="gbName" name="name" type="text" placeholder="Nama" autocomplete="name" required><p class="err" data-e="name">Sila masukkan nama anda.</p></div>
<div><label class="sr" for="gbEmail">Email</label><input id="gbEmail" name="email" type="email" placeholder="Email" autocomplete="email" required><p class="err" data-e="email">Sila masukkan email yang sah.</p></div>
</div>
<div class="gb-grid" style="margin-top:16px">
<div><label class="sr" for="gbService">Pilihan Produk</label><select id="gbService" name="service" required><option value="" selected disabled>Pilih produk yang berminat...</option><option>Kemuning Glow Soap</option><option>Minyak Sendicare Plus</option><option>Minyak Raja Perkasa</option><option>Maajun Tok Urat</option><option>Uncang Herba Raja Perkasa</option><option>Teh Herba Osmanthus</option></select><p class="err" data-e="service">Sila pilih satu produk.</p></div>
<div><label class="sr" for="gbPhone">Telefon WhatsApp</label><input id="gbPhone" name="phone" type="tel" placeholder="01x-xxxxxxx" autocomplete="tel" required><p class="err" data-e="phone">Sila masukkan nombor WhatsApp.</p></div>
</div>
<div style="margin-top:16px"><label class="sr" for="gbMsg">Pesanan / Kebutuhan</label><textarea id="gbMsg" name="message" rows="4" placeholder="Cerita keperluan atau masalah anda..."></textarea></div>
<div class="gb-success" id="gbSuccess" role="status" aria-live="polite">Terima kasih! Kami akan menyemak mesej anda dan mengesyorkan produk yang paling sesuai dalam masa terdekat.</div>
<button type="submit" class="gb-submit">HUBUNGI KAMI</button></form>

## Field Names (for Mail tab)

- [your-name] → name
- [your-email] → email
- [your-phone] → phone
- [your-service] → service
- [your-message] → message

## Mail Tab Configuration

Subject: [Herbalabz] Pertanyaan Produk Baru
From: [your-name] <[your-email]>
Reply-To: [your-email]

Body:
Subject: [Herbalabz] Pertanyaan Produk Baru
From: [your-name] <[your-email]>
Reply-To: [your-email]

--- Maklumat Pengirim ---
Nama: [your-name]
Email: [your-email]
Telefon WhatsApp: [your-phone]
Produk berminat: [your-service]

--- Mesej ---
[your-message]

---
Dimakan melalui formulir Herbalabz. Nota: sebahagian besar pelanggan memilih WhatsApp (011-56980854) sebagai kaedah komunikasi utama.

## Styling Notes
- CF7 input/select/textarea styled via .gb-form CSS (injected in page)
- Primary color: #0C382E, accent: #C6A24B
- Button: pill, #25D366 hover #128C7E

## Note
Herbalabz is primarily a WhatsApp-driven business. The CF7 inquiry form is provided per SOP requirement. Most conversions still happen via the sticky WhatsApp CTA.
