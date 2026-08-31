# Contact Form 7 — Pesanan D'LaDen

Selepas import Elementor template, buat CF7 form ni dan tukar shortcode ID dalam `elementor-home.json` (node `dln511`).

---

## 1. Setup

1. WordPress → **Contact → Add New**
2. Title: `Pesanan D'LaDen`
3. Paste **Form** tab (kod di bawah)
4. Save → salin shortcode cth `[contact-form-7 id="123" title="Pesanan D'LaDen"]`
5. Ganti dalam `elementor-home.json` → node id `dln511`, key `shortcode`
6. Import semula / edit widget shortcode dalam Elementor

## 2. Form

```
<div class="dladen-form">
<label> Nama Penuh (wajib)
    [text* nama autocomplete:name] </label>

<label> No. Telefon / WhatsApp (wajib)
    [tel* telefon autocomplete:tel] </label>

<label> Jenis Pesanan (wajib)
    [select* jenis include_blank "Pesanan Pukal (Rendang/Lauk)" "Catering Kenduri/Majlis" "Sarapan/Bufet Pagi" "Lain-lain"] </label>

<label> Tarikh Diperlukan
    [date tarikh] </label>

<label> Kuantiti / Pax
    [text kuantiti placeholder "cth: Rendang Tok 2kg, 50 pax"] </label>

<label> Butiran Pesanan
    [textarea butiran placeholder "Nyatakan lauk, lokasi majlis, masa penghantaran, dsb."] </label>

[submit "Hantar Pesanan"]
</div>
```

## 3. Mail (ke pemilik restoran)

**To:** [EMAIL-OWNER — isi email sebenar]
**Subject:** Pesanan Baru D'LaDen — [nama] ([jenis])

**Body:**

```
Pesanan baru dari website D'LaDen

Nama: [nama]
Telefon/WhatsApp: [telefon]
Jenis Pesanan: [jenis]
Tarikh Diperlukan: [tarikh]
Kuantiti/Pax: [kuantiti]

Butiran:
[butiran]

---
Balas terus ke WhatsApp: https://wa.me/[telefon-digits]
```

> Nota: CF7 tak proses `[telefon-digits]` secara automatik — buang baris itu ATAU minta user tulis no telefon dalam butiran. Alternatif: guna plugin "CF7 to WhatsApp" untuk deep-link auto.

**Mail (2)** — auto-reply ke pelanggan (optional tapi recommended):
**To:** `[telefon]` → guna field email tambahan ATAU skip kalau tiada email field.
Sebab pelanggan hanya bagi telefon (bukan email), auto-reply email tak practical — jadi flow pengesahan ialah **owner reply via WhatsApp**.

## 4. Messages tab (BM)

- **Sender's message was sent successfully:** `Terima kasih! Pesanan anda diterima. Kami akan WhatsApp anda untuk pengesahan.`
- **Sender's message failed to send:** `Maaf, penghantaran gagal. Sila WhatsApp kami terus di 012-246 6678.`
- Validation errors: biar default, atau BM-kan ikut kesesuaian

## 5. Additional Settings (optional)

```
subscribers_only: false
```

## 6. Styling (tambah dalam Customizer → Additional CSS, ATAU biarkan ikut Elementor)

```css
.dladen-form label{display:flex;flex-direction:column;gap:.4rem;font-weight:700;font-size:.88rem;color:#22402C;margin-bottom:1rem}
.dladen-form input,.dladen-form select,.dladen-form textarea{font-family:inherit;font-size:.95rem;padding:.75rem .9rem;border:1.5px solid rgba(43,33,24,.18);border-radius:10px;background:#FBF6EC;color:#2B2118}
.dladen-form input:focus,.dladen-form select:focus,.dladen-form textarea:focus{outline:2px solid #C1502E;outline-offset:1px;border-color:#C1502E}
.dladen-form textarea{min-height:110px}
.dladen-form input[type=submit]{background:#C1502E;color:#fff;font-weight:700;border:none;border-radius:999px;padding:.8rem 1.6rem;cursor:pointer}
.dladen-form input[type=submit]:hover{background:#9E3E22}
```

## 7. Checklist handover

- [ ] Email owner diisi dalam Mail tab
- [ ] Shortcode ID ditukar dalam elementor-home.json / widget shortcode
- [ ] Test hantar form → email sampai
- [ ] Test klik butang WhatsApp → buka chat ke 60122466678
