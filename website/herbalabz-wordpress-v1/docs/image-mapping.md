# Image Mapping — Herbalabz WordPress v1

All images are **WebP** format (converted via sharp from PNG originals in `website/herbalabz/assets-v2/`). The PNG originals in `assets-v1/` are retained for fallback if WebP is unsupported by the browser.

| Source file (assets-v2) | Target WP image | Section | Widget/Location | Desktop | Mobile | Alt text |
|---|---|---|---|---|---|---|
| hero-1200.webp | hero.webp | Hero | Container background-image | full-bleed, 1376×768 | cover | Banner herba Herbalabz — lesung kayu, halia, kayu manis |
| produk-sabun-800.webp | produk-sabun.webp | Produk 4.1 | widget image | 800×800 | 400×400 | Kemuning Glow Soap — sabun herba pouch kraft hitam |
| produk-sendicare-800.webp | produk-sendicare.webp | Produk 4.2 | widget image | 800×800 | 400×400 | Minyak Sendicare Plus — botol pam kaca ambar |
| produk-raja-perkasa-minyak-800.webp | produk-raja-perkasa-minyak.webp | Produk 4.3 | widget image | 800×800 | 400×400 | Minyak Raja Perkasa — botol kaca jernih tutup merah |
| produk-maajun-800.webp | produk-maajun.webp | Produk 4.4 | widget image | 800×800 | 400×400 | Maajun Tok Urat — pek stand-up pouch hitam |
| produk-uncang-800.webp | produk-uncang.webp | Produk 4.5 | widget image | 800×800 | 400×400 | Uncang Herba Raja Perkasa — kotak hijau gelam |
| produk-teh-800.webp | produk-teh.webp | Produk 4.6 | widget image | 800×800 | 400×400 | Teh Herba Osmanthus — kotak kuning estetik |
| testimoni-diri-320.webp | testimoni-diri.webp | Testimoni | figure img (rounded-full) | 320×320 | 160×160 | Potret pelanggan wanita muda |
| testimoni-mak-320.webp | testimoni-mak.webp | Testimoni | figure img (rounded-full) | 320×320 | 160×160 | Potret pelanggan warga emas wanita |
| testimoni-suami-320.webp | testimoni-suami.webp | Testimoni | figure img (rounded-full) | 320×320 | 160×160 | Potret pelanggan lelaki dewasa cergas |
| testimoni-ayah-320.webp | testimoni-ayah.webp | Testimoni | figure img (rounded-full) | 320×320 | 160×160 | Potret pelanggan warga emas lelaki aktif |

**Total image size:** 635,814 bytes (23 WebP files) vs original 15,582,280 bytes PNG — **96% size reduction**.

**Upload to WordPress:** Upload all images to Media Library via the WordPress admin (Media → Add New), then update the `image` URLs in Elementor JSON (`elementor/01-home.json`) to match the uploaded file names. Alternatively, place images in `wp-content/uploads/herbalabz-wordpress-v1/` and the JSON URLs will resolve automatically.
