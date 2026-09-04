// Generator for The Gentleman's Blade WordPress v3 package (base: index-v2.html).
// Emits elementor-json/01-home.json — Elementor Free containers only.
// Pattern follows website/gentlemans-blade/wordpress/tools/gen-wp-json.js (helpers + envelope).
// Copy deck is verbatim from reference/original-index-v2.html — no invented copy.
const fs = require('fs');
const path = require('path');

const ASSET_BASE = process.env.GB_ASSET_BASE || 'https://gentlemensblade.fvor8.com/wp-content/gb-assets';

let counter = 0;
function nid() {
  counter += 1;
  return counter.toString(16).padStart(7, '0').slice(-7);
}
const img = (f, alt) => ({ url: ASSET_BASE + '/' + f, id: '', alt: alt || '' });
const px = (size, unit) => ({ unit: unit || 'px', size: size, sizes: [] });
const box = (t, r, b, l) => ({ unit: 'px', top: String(t), right: String(r), bottom: String(b), left: String(l), isLinked: false });
const gap = n => ({ column: String(n), row: String(n), isLinked: true, unit: 'px', size: n, sizes: [] });
const wPct = p => ({ unit: '%', size: p, sizes: [] });
const em = n => ({ unit: 'em', size: n, sizes: [] });

// Dual-key id/classes: v1 lineage used css_id/css_classes, cf7-v2 lineage used
// _element_id/_css_classes. Unknown keys are ignored on import, so emit both.
function ids(id, cls) {
  const o = {};
  if (id) { o.css_id = id; o._element_id = id; }
  if (cls) { o.css_classes = cls; o._css_classes = cls; }
  return o;
}

function container(settings, elements, isInner) {
  return { id: nid(), elType: 'container', settings: settings || {}, elements: elements || [], isInner: !!isInner };
}
function widget(widgetType, settings) {
  return { id: nid(), elType: 'widget', widgetType: widgetType, settings: settings || {}, elements: [] };
}
function heading(title, opts) {
  return widget('heading', Object.assign({ title: title, header_size: 'h2', align: 'center', _animation: 'fadeIn' }, opts || {}));
}
function typo(font, size, extra) {
  return Object.assign({ typography_typography: 'custom', typography_font_family: font, typography_font_size: px(size) }, extra || {});
}
function btn(text, url) {
  return widget('button', {
    text: text,
    link: { url: url, is_external: '', nofollow: '' },
    align: 'center',
    background_color: '#B07851',
    button_text_color: '#14191F',
    typography_typography: 'custom',
    typography_font_family: 'Montserrat',
    typography_font_weight: '600',
    typography_font_size: px(14),
    typography_letter_spacing: px(2),
    border_radius: box(6, 6, 6, 6),
    padding: box(16, 40, 16, 40)
  });
}

const PAGE_CSS = `<style>
:root{--gb-ink:#14191F;--gb-navy:#1F2937;--gb-steel:#2C3E50;--gb-bronze:#B07851;--gb-copper-h:#C68A60;--gb-gold:#E5A962;--gb-cream:#F3EFE0;--gb-mist:#E2E8F0;--gb-mut:#94A3B8}
html{scroll-behavior:smooth}.elementor{background:var(--gb-navy)}
.gb-page-css{display:none!important}
.gb-section{background:var(--gb-navy);padding:80px 24px}
.gb-ink{background:var(--gb-ink)}
.gb-wrap{max-width:1280px;margin:0 auto}
.gb-center{text-align:center}
.gb-heading .elementor-heading-title{font-family:Cinzel,Georgia,serif;color:var(--gb-cream);letter-spacing:.15em;font-weight:700}
.gb-body,.gb-body p{font-family:Montserrat,Arial,sans-serif;color:var(--gb-mut);line-height:1.75}
.gb-gold,.gb-gold .elementor-heading-title{color:var(--gb-gold)}
.gb-hero{min-height:92vh;display:flex;align-items:center;justify-content:center;position:relative;background-size:cover;background-position:center;padding:120px 24px 70px}
.gb-hero:before{content:'';position:absolute;inset:0;background:linear-gradient(rgba(20,25,31,.8),rgba(20,25,31,.9));pointer-events:none}
.gb-hero-inner{max-width:1000px;text-align:center;position:relative;z-index:1}
.gb-hero-kicker .elementor-heading-title{font-family:Montserrat,Arial,sans-serif;color:var(--gb-cream);letter-spacing:.45em;font-size:20px}
.gb-hero-title .elementor-heading-title{font-family:Cinzel,Georgia,serif;color:var(--gb-cream);font-size:clamp(48px,7vw,96px);line-height:1.05;letter-spacing:.04em;text-transform:uppercase}
.gb-hero-meta,.gb-hero-meta p{font-family:Montserrat,Arial,sans-serif;color:var(--gb-mut);letter-spacing:.25em;font-size:14px}
.gb-btn .elementor-button{background:var(--gb-bronze);color:#14191F;border-radius:6px;padding:16px 40px;font-family:Montserrat,Arial,sans-serif;font-weight:600;letter-spacing:.2em}
.gb-btn .elementor-button:hover{background:var(--gb-copper-h)}
.gb-btn-ghost .elementor-button{background:transparent;color:var(--gb-cream);border:1px solid var(--gb-bronze);border-radius:6px;padding:16px 40px;font-family:Montserrat,Arial,sans-serif;font-weight:600;letter-spacing:.2em}
.gb-btn-ghost .elementor-button:hover{background:rgba(176,120,81,.15);color:var(--gb-gold)}
.gb-card{transition:border-color .3s ease}
.gb-card:hover{border-color:#B07851}
.gb-map-dark iframe{filter:grayscale(1) invert(.9) contrast(.85)}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
</style>`;

// Card CTA slugs feed the preselect script in the booking section.
function serviceCard(title, desc, price, imageFile, alt, slug) {
  return container(Object.assign(ids(null, 'gb-card'), {
    width: wPct(23.5),
    width_tablet: wPct(47),
    width_mobile: wPct(100),
    flex_direction: 'column',
    flex_gap: gap(0),
    background_background: 'classic',
    background_color: '#14191F',
    border_border: 'solid',
    border_width: box(1, 1, 1, 1),
    border_color: '#2C3E50'
  }), [
    widget('image', {
      image: img(imageFile, alt),
      image_size: 'full',
      align: 'center',
      hover_animation: 'grow'
    }),
    container({
      padding: box(24, 24, 24, 24),
      flex_direction: 'column',
      flex_gap: gap(10)
    }, [
      heading(title, Object.assign({
        header_size: 'h3',
        align: 'left',
        title_color: '#F3EFE0',
        typography_font_weight: '700',
        typography_letter_spacing: px(3),
        _animation: ''
      }, typo('Cinzel', 20))),
      widget('text-editor', Object.assign({
        editor: '<p>' + desc + '</p>',
        text_color: '#94A3B8',
        typography_line_height: em(1.7)
      }, typo('Montserrat', 14))),
      heading(price, Object.assign({
        header_size: 'p',
        align: 'left',
        title_color: '#E5A962',
        typography_font_weight: '700',
        typography_letter_spacing: px(2),
        _animation: ''
      }, typo('Montserrat', 18))),
      btn('SELECT SERVICE', '/#booking?service=' + slug)
    ], true)
  ], true);
}

const PRESELECT_HTML = `<script>
(function(){var map={"master-cut":"Master Cut ($15.00+)","beard-sculpt":"Beard Sculpt ($15.00+)","royal-ritual":"Royal Ritual Shave ($25.00+)","scalp-relax":"Scalp & Relax ($28.00+)","full-combo":"Gentleman's Full Combo ($55.00+)"};var q=new URLSearchParams(location.search);var s=q.get("service");if(!s||!map[s])return;var val=map[s];var n=0;var t=setInterval(function(){n++;var el=document.querySelector('.wpcf7-form select[name="service"]');if(el){for(var i=0;i<el.options.length;i++){if(el.options[i].text===val||el.options[i].value===val){el.selectedIndex=i;break;}}el.dispatchEvent(new Event("change",{bubbles:true}));clearInterval(t);}if(n>16)clearInterval(t);},300);})();
<\/script>`;

const home = [];

// CSS holder (hidden)
home.push(widget('html', Object.assign({ html: PAGE_CSS }, ids(null, 'gb-page-css'))));

// HERO
home.push(container(Object.assign(ids('home', 'gb-hero'), {
  layout: 'full-width',
  html_tag: 'section',
  flex_direction: 'column',
  flex_align_items: 'center',
  flex_justify_content: 'center',
  min_height: px(92, 'vh'),
  padding: box(120, 24, 70, 24),
  background_background: 'classic',
  background_image: img('hero.jpg', ''),
  background_position: 'center center',
  background_size: 'cover'
}), [
  container(Object.assign({ layout: 'boxed', content_width: px(1000), flex_direction: 'column', flex_align_items: 'center', flex_gap: gap(16) }, ids(null, 'gb-hero-inner')), [
    heading('EST. 2018 | METRO BARBERSHOP', Object.assign({ header_size: 'p', title_color: '#E5A962', typography_font_weight: '700', typography_letter_spacing: px(3), _css_classes: 'gb-hero-badge', css_classes: 'gb-hero-badge', _animation: '' }, typo('Montserrat', 12))),
    heading('THE', Object.assign({ header_size: 'p', title_color: '#F3EFE0', typography_letter_spacing: px(18), _animation: '' }, typo('Montserrat', 20))),
    heading('GENTLEMAN&rsquo;S BLADE', Object.assign({ header_size: 'h1', _animation: '', _css_classes: 'gb-hero-title', css_classes: 'gb-hero-title' }, typo('Cinzel', 72, { title_color: '#F3EFE0', typography_font_weight: '700', typography_line_height: em(1.05) }))),
    heading('MASTER HERITAGE BARBERING &amp; TIMELESS GROOMING', Object.assign({ header_size: 'p', title_color: '#94A3B8', typography_letter_spacing: px(4), _animation: '' }, typo('Montserrat', 14))),
    container({ flex_direction: 'row', flex_wrap: 'wrap', flex_gap: gap(16), flex_justify_content: 'center' }, [
      btn('BOOK APPOINTMENT', '/#booking'),
      widget('button', { text: 'EXPLORE SERVICES', link: { url: '/#services', is_external: '', nofollow: '' }, align: 'center', background_color: 'rgba(0,0,0,0)', button_text_color: '#F3EFE0', typography_typography: 'custom', typography_font_family: 'Montserrat', typography_font_weight: '600', typography_font_size: px(14), typography_letter_spacing: px(2), border_border: 'solid', border_width: box(1, 1, 1, 1), border_color: '#B07851', border_radius: box(6, 6, 6, 6), padding: box(16, 40, 16, 40), _css_classes: 'gb-btn-ghost', css_classes: 'gb-btn-ghost' })
    ], true)
  ], true)
], false));

// SERVICES
home.push(container(Object.assign(ids('services', 'gb-section'), {
  layout: 'full-width',
  html_tag: 'section',
  padding: box(96, 24, 96, 24),
  background_background: 'classic',
  background_color: '#1F2937'
}), [
  container(Object.assign({ layout: 'boxed', content_width: px(1280), flex_direction: 'column', flex_gap: gap(48) }, ids(null, 'gb-wrap')), [
    container({ flex_direction: 'column', flex_align_items: 'center', flex_gap: gap(8) }, [
      heading('OUR REPERTOIRE', Object.assign({ header_size: 'p', title_color: '#E5A962', typography_font_weight: '700', typography_letter_spacing: px(3), _animation: '' }, typo('Montserrat', 12))),
      heading('SIGNATURE SERVICES', Object.assign({ title_color: '#F3EFE0', typography_font_weight: '700', typography_letter_spacing: px(6), _css_classes: 'gb-heading', css_classes: 'gb-heading' }, typo('Cinzel', 34)))
    ], true),
    container({
      flex_direction: 'row',
      flex_wrap: 'wrap',
      flex_gap: gap(28),
      flex_align_items: 'stretch',
      flex_justify_content: 'center'
    }, [
      serviceCard('Master Cut', 'Tailored scissor cuts, precision fades and textured styling.', '$15.00+', 'service-cuts.jpg', 'Barber giving a precision gentleman haircut', 'master-cut'),
      serviceCard('Beard Sculpt', 'Beard trim, hot-towel line refinement and oil hydration.', '$15.00+', 'service-beards.jpg', 'Barber trimming and detailing a client beard', 'beard-sculpt'),
      serviceCard('Royal Ritual', 'Multi-step hot-towel straight-razor shave with sandalwood lather.', '$25.00+', 'service-shaves.jpg', 'Traditional hot towel straight razor shave in progress', 'royal-ritual'),
      serviceCard('Scalp &amp; Relax', 'Scalp massage, botanical steam and clarifying mask.', '$28.00+', 'service-treatments.jpg', 'Client receiving a relaxing head and scalp treatment', 'scalp-relax')
    ], true)
  ], true)
], false));

// EXPERIENCE
const expPoints = [
  '<strong style="color:#F3EFE0">Artisan Blades &amp; Warm Towels</strong> — straight razors + botanical hot-towel ritual.',
  '<strong style="color:#F3EFE0">Bespoke Apothecary</strong> — small-batch balms and oils tailored to your skin.',
  '<strong style="color:#F3EFE0">Private Lounge</strong> — low amber light, vinyl selections, no rush.'
];
home.push(container(Object.assign(ids('experience', 'gb-section gb-ink'), {
  layout: 'full-width',
  html_tag: 'section',
  padding: box(96, 24, 96, 24),
  background_background: 'classic',
  background_color: '#14191F'
}), [
  container(Object.assign({ layout: 'boxed', content_width: px(1280), flex_direction: 'row', flex_wrap: 'wrap', flex_gap: gap(48), flex_align_items: 'center' }, ids(null, 'gb-wrap')), [
    container({ width: wPct(48), width_tablet: wPct(100), width_mobile: wPct(100), flex_direction: 'column', flex_gap: gap(20) }, [
      heading('THE PHILOSOPHY', Object.assign({ header_size: 'p', align: 'left', title_color: '#B07851', typography_font_weight: '700', typography_letter_spacing: px(3), _animation: '' }, typo('Montserrat', 12))),
      heading('MORE THAN A HAIRCUT.<br><span style="color:#E5A962;font-style:italic">IT&rsquo;S A RITUAL.</span>', Object.assign({ align: 'left', _css_classes: 'gb-heading', css_classes: 'gb-heading' }, typo('Cinzel', 36, { title_color: '#F3EFE0', typography_font_weight: '700' }))),
      widget('text-editor', Object.assign({ editor: '<p>Since 2018, The Gentleman&rsquo;s Blade honours artisanal barbering — Japanese steel shears, steamed eucalyptus towels, custom sandalwood pomades.</p>', text_color: '#94A3B8', typography_line_height: em(1.75), _css_classes: 'gb-body', css_classes: 'gb-body' }, typo('Montserrat', 16))),
      widget('text-editor', Object.assign({
        editor: '<ol style="list-style:none;margin:0;padding:0">' + expPoints.map(function (p, i) {
          return '<li style="display:flex;gap:16px;margin-bottom:16px"><span style="color:#E5A962;font-weight:700">0' + (i + 1) + '</span><span>' + p + '</span></li>';
        }).join('') + '</ol>',
        text_color: '#E2E8F0',
        _css_classes: 'gb-body',
        css_classes: 'gb-body'
      }, typo('Montserrat', 14)))
    ], true),
    container({ width: wPct(52), width_tablet: wPct(100), width_mobile: wPct(100), flex_direction: 'column', flex_gap: gap(16) }, [
      widget('image', { image: img('experience-1.jpg', 'Barbers at work inside the upscale boutique barbershop'), image_size: 'full', align: 'center', hover_animation: 'grow' }),
      container({ flex_direction: 'row', flex_gap: gap(16) }, [
        container({ width: wPct(50) }, [widget('image', { image: img('experience-2.jpg', 'Skilled barber styling and grooming a gentleman'), image_size: 'full', align: 'center', hover_animation: 'grow' })], true),
        container({ width: wPct(50) }, [widget('image', { image: img('experience-3.jpg', 'Modern gentleman receiving a low taper skin fade'), image_size: 'full', align: 'center', hover_animation: 'grow' })], true)
      ], true)
    ], true)
  ], true)
], false));

// GALLERY
home.push(container(Object.assign(ids('gallery', 'gb-section'), {
  layout: 'full-width',
  html_tag: 'section',
  padding: box(96, 24, 96, 24),
  background_background: 'classic',
  background_color: '#1F2937'
}), [
  container(Object.assign({ layout: 'boxed', content_width: px(1280), flex_direction: 'column', flex_gap: gap(40) }, ids(null, 'gb-wrap')), [
    container({ flex_direction: 'column', flex_align_items: 'center', flex_gap: gap(8) }, [
      heading('LOOKBOOK', Object.assign({ header_size: 'p', title_color: '#E5A962', typography_font_weight: '700', typography_letter_spacing: px(3), _animation: '' }, typo('Montserrat', 12))),
      heading('MASTER CRAFT GALLERY', Object.assign({ title_color: '#F3EFE0', typography_font_weight: '700', typography_letter_spacing: px(6), _css_classes: 'gb-heading', css_classes: 'gb-heading' }, typo('Cinzel', 34)))
    ], true),
    widget('image-gallery', {
      gallery: [
        img('gallery-2.jpg', 'Front facing portrait of a bearded gentleman'),
        img('gallery-1.jpg', 'Gentleman client in the luxury vintage barbershop'),
        img('gallery-3.jpg', 'Luxury barber tools on a dark rustic wooden counter'),
        img('interior.jpg', 'Moody vintage barbershop interior with Edison bulbs')
      ],
      gallery_columns: 4,
      gallery_columns_tablet: 2,
      gallery_columns_mobile: 1,
      gallery_link: 'file',
      thumbnail_size: 'full',
      gap: px(12),
      _css_classes: 'gb-gallery',
      css_classes: 'gb-gallery'
    })
  ], true)
], false));

// BOOKING
home.push(container(Object.assign(ids('booking', 'gb-section gb-ink'), {
  layout: 'full-width',
  html_tag: 'section',
  padding: box(96, 24, 96, 24),
  background_background: 'classic',
  background_color: '#14191F'
}), [
  container({ layout: 'boxed', content_width: px(768), flex_direction: 'column', flex_gap: gap(32), flex_align_items: 'center' }, [
    container({ flex_direction: 'column', flex_align_items: 'center', flex_gap: gap(8) }, [
      heading('CONCIERGE DESK', Object.assign({ header_size: 'p', title_color: '#E5A962', typography_font_weight: '700', typography_letter_spacing: px(3), _animation: '' }, typo('Montserrat', 12))),
      heading('RESERVE YOUR CHAIR', Object.assign({ title_color: '#F3EFE0', typography_font_weight: '700', typography_letter_spacing: px(4), _css_classes: 'gb-heading', css_classes: 'gb-heading' }, typo('Cinzel', 32)))
    ], true),
    widget('shortcode', { shortcode: '[contact-form-7 id="REPLACE_WITH_CF7_ID" title="Booking Form"]' }),
    widget('html', { html: PRESELECT_HTML })
  ], true)
], false));

// VISIT
home.push(container(Object.assign(ids('visit', 'gb-section'), {
  layout: 'full-width',
  html_tag: 'section',
  padding: box(96, 24, 96, 24),
  background_background: 'classic',
  background_color: '#1F2937'
}), [
  container(Object.assign({ layout: 'boxed', content_width: px(1280), flex_direction: 'row', flex_wrap: 'wrap', flex_gap: gap(32), flex_align_items: 'stretch' }, ids(null, 'gb-wrap')), [
    container({ width: wPct(50), width_tablet: wPct(100), width_mobile: wPct(100), padding: box(32, 32, 32, 32), flex_direction: 'column', flex_gap: gap(16), background_background: 'classic', background_color: 'rgba(20,25,31,.4)', border_border: 'solid', border_width: box(1, 1, 1, 1), border_color: '#2C3E50' }, [
      heading('LOCATION &amp; HOURS', Object.assign({ header_size: 'p', align: 'left', title_color: '#E5A962', typography_font_weight: '700', typography_letter_spacing: px(3), _animation: '' }, typo('Montserrat', 12))),
      heading('VISIT THE ATELIER', Object.assign({ align: 'left', _css_classes: 'gb-heading', css_classes: 'gb-heading' }, typo('Cinzel', 30, { title_color: '#F3EFE0', typography_font_weight: '700' }))),
      widget('text-editor', Object.assign({
        editor: '<p>123 Urban St, Metro City, 50010 — valet &amp; rear entrance available</p><p>MON–FRI: 9AM–8PM / SAT: 10AM–6PM / SUN: CLOSED</p><p><a style="color:#E2E8F0" href="tel:+15062336718">PHONE: 506-233-6718</a></p><p><a style="color:#E2E8F0" href="mailto:contact@gentlemansblade.com">EMAIL: contact@gentlemansblade.com</a></p>',
        text_color: '#E2E8F0',
        typography_line_height: em(2),
        _css_classes: 'gb-body',
        css_classes: 'gb-body'
      }, typo('Montserrat', 14)))
    ], true),
    container(Object.assign({ width: wPct(50), width_tablet: wPct(100), width_mobile: wPct(100), padding: box(32, 32, 32, 32), flex_direction: 'column', flex_align_items: 'center', flex_justify_content: 'center', flex_gap: gap(12), background_background: 'classic', background_color: 'rgba(20,25,31,.4)', border_border: 'solid', border_width: box(1, 1, 1, 1), border_color: '#2C3E50' }, ids('contact', null)), [
      heading('Urban Metro Studio', Object.assign({ _css_classes: 'gb-heading', css_classes: 'gb-heading' }, typo('Cinzel', 20, { title_color: '#F3EFE0', typography_font_weight: '700' }))),
      widget('text-editor', Object.assign({ editor: '<p style="text-align:center">123 Urban St, Metro City, 50010</p>', text_color: '#94A3B8', _css_classes: 'gb-body', css_classes: 'gb-body' }, typo('Montserrat', 14))),
      btn('GET DIRECTIONS', 'https://maps.google.com/?q=Kuala+Lumpur'),
      widget('html', { html: '<div class="gb-map-dark"><iframe title="Map to The Gentleman\'s Blade" src="https://maps.google.com/maps?q=Kuala%20Lumpur&z=13&output=embed" style="width:100%;height:220px;border:0" loading="lazy"></iframe></div>' })
    ], true)
  ], true)
], false));

const homepageDoc = {
  version: '0.4',
  title: 'The Gentleman\u2019s Blade \u2014 Home',
  type: 'page',
  content: home,
  page_settings: { template: 'elementor_header_footer' }
};

const outDir = path.join(__dirname, '..', 'elementor-json');
fs.mkdirSync(outDir, { recursive: true });

function writeDoc(file, doc) {
  const json = JSON.stringify(doc, null, 2);
  JSON.parse(json);
  const bad = (json.match(/"elType"\s*:\s*"(section|column)"/g) || []).length;
  if (bad > 0) throw new Error(file + ' contains legacy section/column elements: ' + bad);
  if (json.includes('inner-section')) throw new Error(file + ' contains inner-section');
  const containersN = (json.match(/"elType"\s*:\s*"container"/g) || []).length;
  const widgetsN = (json.match(/"elType"\s*:\s*"widget"/g) || []).length;
  fs.writeFileSync(path.join(outDir, file), json, 'utf8');
  console.log(file + ' OK -> containers: ' + containersN + ', widgets: ' + widgetsN + ', bytes: ' + json.length);
}

writeDoc('01-home.json', homepageDoc);
console.log('ASSET_BASE = ' + ASSET_BASE);
