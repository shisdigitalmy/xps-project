# Sitemap — SANTAP Malay Fine Dining

**Scope:** Single-page luxury site (Astro static) — semua section di `/`, menu PDF sebagai asset. Tiada blog untuk launch.

---

## URL Hierarchy

```
/ (Home — single page dengan anchor)
/#tentang
/#menu
/#private
/#pengalaman
/#lokasi
/#tempah
/menu.pdf (asset, bukan page)
/privasi (Dasar Privasi)
/terma (Syarat Penggunaan)
/404
```

> V2 (future): `/journal` untuk SEO warisan, `/karier`

---

## Navigation

**Header (sticky, desktop):** Tentang | Menu | Private | Lokasi | [Tempah Meja] (primary CTA, gold)
**Mobile:** Hamburger → drawer, CTA sticky bottom "Tempah — WhatsApp"
**Footer:** Menu PDF | Private Dining | Kerjaya [PLACEHOLDER] | Privasi | Terma | Instagram

**Cross-links:**
- Hero → #menu, #tempah
- Menu cards → menu.pdf / #tempah
- Private → #tempah (prefill subjek Private)
- Lokasi → Google Maps, tel:, WhatsApp

---

## Page / Section Purpose

| Section (anchor) | Tujuan | Audience | Primary CTA | Cross-link |
|------------------|--------|----------|-------------|------------|
| **Hero** (`/`) | Hook T20 dalam 3 saat — luxury + warisan + KLCC | T20, expat | Tempah Meja | #menu, #tempah |
| **Tentang** (`#tentang`) | Story & kredibiliti chef | T20 yang research | Lihat Menu | #menu |
| **Menu** (`#menu`) | Tunjuk 3 cara dine — degustation / à la carte / business lunch | Semua | Tempah / PDF | menu.pdf, #tempah |
| **Private Dining** (`#private`) | Jana lead high-value (8-20 pax) | EA/PA, business | Tanya Private | #tempah (prefill) |
| **Pengalaman** (`#pengalaman`) | Bezakan dari casual Melayu | T20 yang compare | Tempah | #tempah |
| **Lokasi** (`#lokasi`) | Alamat, valet, map, waktu | Yang nak datang | WhatsApp / Call | tel:, maps |
| **Tempah** (`#tempah`) | Form + WhatsApp — conversion | Ready-to-book | Hantar | WhatsApp deep link |
| **Privasi** (`/privasi`) | Legal | Semua | — | — |
| **Terma** (`/terma`) | Legal | Semua | — | — |
| **404** | Catch-all | — | Kembali ke Home | / |

---

## System Pages

- **/privasi:** Dasar Privasi BM — data form, WhatsApp, analytics
- **/terma:** Terma penggunaan, polisi tempahan (cancel 24j)
- **/thanks** (optional): Post-form "Terima kasih" — track conversion
- **404:** "Halaman tidak ditemui — Kembali ke SANTAP" + CTA Tempah

---

## SEO & Indexability

- `/` index, follow
- `/privasi`, `/terma` index tapi no CTA push
- `menu.pdf` noindex (asset)
- Canonical: `https://santap.my/` [PLACEHOLDER domain]
- Sitemap.xml: `/`, `/privasi`, `/terma`
- Robots.txt: Allow semua, disallow `/thanks` jika ada tracking

---

## Analytics Events (untuk PRD)

- `click_reserve_hero`, `click_whatsapp`, `form_submit`, `pdf_download`, `private_inquiry`

**Gate Stage 3:** Setiap page/section ada tujuan dan menyokong journey T20 → Tempahan. Tiada page filler.

