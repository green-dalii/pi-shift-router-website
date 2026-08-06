# Pi Shift Router — Website

Product website for the [Pi Shift Router](https://github.com/green-dalii/pi-shift-router) extension.

A static Astro site built with Tailwind CSS, following the
[Wise-inspired design system](./DESIGN.md).

## Stack

- **Astro 6** — static site, content-only
- **Tailwind CSS 4** — `@theme` tokens map DESIGN.md directly
- **astro-icon** — Lucide icons inline
- **i18n** — English (`/`) + Simplified Chinese (`/zh/`)

## Develop

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # → ./dist
pnpm preview   # serve ./dist
```

Managed with **pnpm** (`packageManager: pnpm@10.14.0`).

## Structure

```
src/
├── components/astro/   # Section components (Header, Hero, ...)
├── content/locales/    # en.ts, zh.ts, types.ts, index.ts (registry + helpers)
├── layouts/            # BaseLayout.astro (HTML shell, SEO, schema.org)
├── pages/              # index.astro (EN), zh/index.astro (ZH)
└── index.css           # @import fonts + @theme tokens
```

## Adding a section

1. Build the section as `src/components/astro/<Name>.astro`.
2. Add copy under `en.<section>` and `zh.<section>` in the locale files.
3. Extend the `Translations` interface in `src/content/locales/types.ts`.
4. Drop the component into both `src/pages/index.astro` and `src/pages/zh/index.astro`.

## Design tokens

See [DESIGN.md](./DESIGN.md). All tokens live in `@theme {}` inside
`src/index.css` — Tailwind class names like `bg-canvas-soft`, `text-ink`,
`rounded-pill` map directly to the design system.

## Fonts

Manrope (display) + Inter (body) + JetBrains Mono (code) are pulled from
**jsdelivr CDN** as [`@fontsource/*`](https://fontsource.org/) packages — no
Google Fonts dependency. To make the site fully offline-capable, install the
packages locally and replace the `@import` lines in `src/index.css` with the
package paths:

```bash
pnpm i @fontsource/manrope @fontsource/inter @fontsource/jetbrains-mono
# then in index.css:
# @import "@fontsource/manrope/800.css";
# @import "@fontsource/inter/400.css";
# @import "@fontsource/jetbrains-mono/400.css";
```