# AGENTS.md

## Project

Single-file static HTML website (`index.html`). No build step, no framework, no package manager, no tests, no linter. Content is in Malay (Bahasa Melayu).

## Preview

Open `index.html` in a browser, or run a local server (e.g., `npx serve .`).

## Structure

All markup, styles, and content live in `index.html`. External dependencies:
- **Fonts**: Google Fonts (Cormorant Garamond, Source Sans 3)
- **Images**: Unsplash URLs (external, no local assets)

## Communication

- Cakap dengan user dalam Bahasa Melayu Malaysia, English, atau Manglish sahaja.
- Jangan sesekali guna Bahasa Indonesia.

## Conventions

- CSS custom properties in `:root` for colors (e.g., `--royal-blue`, `--gold`)
- Semantic HTML with ARIA attributes (skip link, `role`, `aria-label`, `aria-labelledby`)
- `prefers-reduced-motion` and `@media print` styles included
- Decorative `.songket-border` and `.songket-divider` patterns are pure CSS art
