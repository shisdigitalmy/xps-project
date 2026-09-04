# Herbalabz WordPress Installation Instructions

## Prerequisites
- WordPress 6.5+ with PHP 8.1+
- Composer-free; uses Node.js (for JSON generation, already done)

## Installation Order

1. Install **Blocksy** theme + **Blocksy Companion** plugin
2. Import **blocksy/blocksy-options.dat** (Blocksy → Settings → Import/Export)
3. Create WordPress native menu (Appearance → Menus):
   - Menu name: `herbalabz-main`
   - Items: Home (`/`), Produk (`/#produk`), Panduan (`/#panduan`), Testimoni (`/#testimoni`), FAQ (`/#faq`), Hubungi (`/#hubungi`)
   - Assign to `primary` location
4. Configure **Blocksy Native Header Builder** (not Elementor):
   - Logo: upload SVG/PNG, link to `/`
   - Main menu: `herbalabz-main`
   - CTA button: WhatsApp link (011-56980854)
   - Mobile: off-canvas hamburger
5. Install **Elementor Free**, **Ultimate Addons for Elementor (UAE)**, **Contact Form 7**
6. Create page `Home`, set template = **Elementor Full Width**
7. Edit with Elementor → import **elementor/01-home.json**
8. Set `Home` as static front page (Settings → Reading)
9. Upload **images/** to Media Library and remap IDs in the JSON (or use Replace URL plugin)
10. Create CF7 form (contact-form-7 → Add New) using **cf7/booking-form-template.txt** markup; update field names to match; insert shortcode `[contact-form-7 id="XXX" title="Herbalabz Inquiry"]` in the Inquiry section container (replace widget html form if desired)
11. Configure UAE Footer: Insert **elementor/footer-container.json** as a UAE Footer Template, Display On = Entire Website
12. Regenerate Elementor CSS & Data (Elementor → Tools → Regenerate)
13. Clear WordPress cache, CDN, browser cache

## QA Checklist

**Desktop (1440px)**: no narrow column, 3-col product grid, hero full-bleed, header logo|menu|CTA
**Tablet (768px)**: 2-col product grid, testimonial 2-col, steps 2-col
**Mobile (390px)**: 1-col everything, tabs stack, sticky WhatsApp bar visible, accordion works
**Motion**: hero entrance stagger, scroll reveal, hover zoom (fine pointer), press scale 0.97
**A11y**: tab/arrow works, reduced-motion no breakage, WhatsApp links correct

## Notes
- Motion CSS + JS injected via Elementor HTML widgets at page bottom (preserved from v3)
- All Elementor JSON is 100% `container` — zero `section`/`column`/inner-section
- Header uses Blocksy native (not Elementor) per SOP
- All images in `images/` are **WebP** format (see `docs/image-mapping.md`). Upload to WordPress Media Library and the JSON URLs will resolve automatically.
