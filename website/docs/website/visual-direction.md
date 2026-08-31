# Visual Direction — SANTAP Malay Fine Dining (T20 Luxury)

**Mood:** Istana moden — gelap, tenang, mahal. Bukan kampung, bukan minimal Jepun. Rasa macam masuk private lounge di KLCC dengan songket sebagai art, bukan hiasan murah.

---

## 1. Apa Dipinjam & Apa Dielak (Principle-level)

| Pinjam (borrow) | Dari mana (prinsip) | Elak |
|----------------|---------------------|------|
| Dark luxury + gold foil (DC Restaurant, Atomix) | Kontras tinggi, negative space besar | Jangan guna cream ceria `restoran.html:23` — terlalu casual |
| Editorial typography (Cormorant Garamond display) | Serif besar untuk headline, tracking ketat | Jangan guna emoji 🍛 sebagai icon — guna line icon halal |
| Songket sebagai texture halus (bukan border tebal) | Motif geometri songket 10% opacity sebagai overlay | Jangan ulang `songket-border:12px` tebal di `restoran.html:89` — nampak murah |
| Grid ketat, padding besar (Aesop, Aman) | Luxury = whitespace | Jangan dense macam `kopi-maulana.html` — T20 nak bernafas |

---

## 2. Mood & Density

- **Mood:** Tenang, confident, warm — malam, lampu kuning, kayu gelap, kain songket
- **Density:** Low — banyak whitespace, section 120px padding desktop, 64px mobile. 1 hero, 6 section max — jangan sumbat 8 menu card macam `restoran.html:582`
- **Motion:** Halus sahaja — fade + 8px translate, 280ms, `prefers-reduced-motion` respect. Tiada float/bounce.

---

## 3. Design Tokens (Tailwind + CSS vars)

**Preserve dari `index.html:11` tapi upgrade untuk luxury:**

```js
// tailwind.config.mjs — theme.extend
colors: {
  royal: { DEFAULT: '#0F1F3C', light: '#1B3A5C' }, // dari --royal-blue #1a3a6b → lebih gelap untuk luxury
  gold: { DEFAULT: '#C8A951', light: '#E8D9A0', muted: '#9A7B2E' }, // dari --gold
  dark: { DEFAULT: '#0A0A0F', brown: '#1A120B' }, // dari --dark #1a1a2e → almost black
  cream: { DEFAULT: '#F5F0E6', light: '#FAF8F3' }, // dari --cream, untuk section terang sahaja
  burgundy: '#6B2D3E', // keep dari restoran.html
}
fontFamily: {
  serif: ['Cormorant Garamond', 'Georgia', 'serif'],
  sans: ['Source Sans 3', 'Inter', 'sans-serif'],
}
```

**Typography:**
- H1: Cormorant 700, 56-72px desktop, tracking -0.02em, line-height 1.1
- H2: Cormorant 600, 36-44px, gold color untuk hero, royal untuk section terang
- Body: Source Sans 3, 16px, 1.7 line-height, muted #6b7280 untuk secondary
- Overline: 11px, uppercase, tracking 0.15em, gold

**Spacing:** 8px grid, section `py-28` desktop, `py-16` mobile. Card `p-8` dengan border 1px `rgba(200,169,81,0.15)`

**Radius:** 4px sahaja (luxury = sharp, bukan 12px ceria `index.html:124`), button `rounded-sm`

**Shadow:** `0 12px 40px rgba(0,0,0,0.25)` untuk card terapung, bukan `0 4px 24px` ringan

---

## 4. Komponen Utama

- **Header:** Sticky, dark (#0A0A0F), gold logo, nav uppercase 12px tracking 0.08em, CTA gold solid
- **Hero:** Full-bleed image (Unsplash dark interior) + gradient `rgba(15,31,60,0.85)` + radial gold 15%, h2 gold, tagline serif italic
- **Songket:** Halus — 1px line gold 10% opacity sebagai divider (`songket-divider`), bukan border 12px tebal. Optional: SVG motif di footer background 5% opacity
- **Menu cards:** 3 column desktop, cream-light bg, border gold 15%, hover `translateY(-4px)` + shadow, price di header kanan dengan bg dark
- **Form:** Input bg #FAFAFA, border 1px #E5E7EB, focus ring gold `0 0 0 3px rgba(200,169,81,0.15)`, label 11px uppercase
- **Sticky bar (mobile):** Putih, shadow top, price + button gold — hide bila sampai footer

---

## 5. Imagery & Iconography

- **Foto:** Dark, warm, shallow depth — plating close-up, interior kayu gelap, bukan terang ceria `restoran.html:190`. Unsplash sementara: `photo-1555396273` (dark interior), `photo-16662393080` (hero dark)
- **Icon:** Line icon tipis (Lucide / Heroicons) — bukan emoji. Untuk valet, halal, clock
- **Songket:** SVG pattern custom, bukan repeating-linear-gradient sahaja

---

## 6. Anti-pattern & A11y Constraints

- **Anti-pattern:** Emoji sebagai icon, border songket tebal pelangi, card ceria 12px radius, dense grid 8 item, CTA hijau (`kopi-maulana` green) — tidak sesuai T20
- **Kontras:** Gold #C8A951 di dark #0A0A0F = 7.2:1 ✓, Gold di cream = 2.1:1 ✗ — jangan guna gold text di cream, guna royal
- **Focus:** 2px gold outline, offset 3px — mesti nampak di header gelap
- **Reduced motion:** Semua transition `!important` none

**Gate Stage 4:** Cukup spesifik untuk bezakan SANTAP dari template generic — dark luxury, songket halus, bukan casual cream.

