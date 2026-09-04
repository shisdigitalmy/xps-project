# Contact Form 7 — Booking Form (v3)

## Create the form

1. **Contact → Add New**, title `Booking Form`.
2. Paste `contact-form-7/booking-form-template.txt` into Form tab.
3. Mail tab: To = shop inbox, From = `[your-name] <wordpress@gentlemensblade.fvor8.com>`,
   Subject/Message body per `contact-form-7/mail-template.txt`, Additional headers
   `Reply-To: [your-contact]`. Save and note the numeric form ID.

## Embed in Elementor

Shortcode widget in the booking container:

`[contact-form-7 id="REPLACE_WITH_CF7_ID" title="Booking Form"]`

Replace `REPLACE_WITH_CF7_ID` with the real ID, then Update.

## Service preselect (card → dropdown)

Card buttons link to `/#booking?service=<slug>` with slugs
`master-cut | beard-sculpt | royal-ritual | scalp-relax | full-combo`.
An HTML widget right after the shortcode contains a script that maps the slug
to the matching `service` option and selects it (retries until CF7 renders,
gives up after 5s). No core/plugin files are modified.

## Styling

CF7 CSS is part of Blocksy Additional CSS in `docs/instructions.md`
(copper `#B07851` focus, red errors, dark-green success-like notice via
`.wpcf7-response-output`).
