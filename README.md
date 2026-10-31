# Shift Router — Website

Product website for the Shift Router family: the
[pi-shift-router](https://github.com/green-dalii/pi-shift-router) pi-coding-agent
extension and the [dsh-shift-router](https://github.com/green-dalii/dsh-shift-router)
DeepSeek Harness plugin.

A static Astro site built with Tailwind CSS, following the
[Wise-inspired design system](./DESIGN.md).

**Version:** `1.8.0-web` — tracks the upstream pair (`pi v1.8.0` / `dsh v0.7.5`).
The site version is `<pi-minor>.<pi-patch>.<site-rev>-web`; bump it whenever the
synced upstream pair changes, not for copy-only edits.

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
├── content/terminals.ts# Mocked terminal output for Quick Start steps
├── layouts/            # BaseLayout.astro (HTML shell, SEO, schema.org)
├── pages/              # index.astro (EN), zh/index.astro (ZH), models pages
└── index.css           # @import fonts + @theme tokens
```

## Adding a section

1. Build the section as `src/components/astro/<Name>.astro`.
2. Add copy under `en.<section>` and `zh.<section>` in the locale files.
3. Extend the `Translations` interface in `src/content/locales/types.ts`.
4. Drop the component into both `src/pages/index.astro` and
   `src/pages/zh/index.astro`.

---

# Copy style rules

These are not preferences. Each one is here because a draft violated it and got
thrown out. Read this before writing a single line of user-facing text — including
`<title>`, `<meta description>`, and JSON-LD.

## 1. Never build the hook on the reader's flaws

Banned: *"You switch models by hand and forget to switch back."*
Banned: *"两个脑子。"* (the two-brains metaphor)

The reader is not the problem, and the copy is not a reprimand. Point at the
situation, not the person.

## 2. A slogan is a claim, not a fact

Banned: *"You pay for two models. You use one per message."* — true, unarguable,
and therefore inert. A reader can nod and leave.

A headline has to be something a reasonable person might disagree with, so reading
it costs them something.

Approved direction:
> **Never let the CTO do the engineer's job.**
> **And vice versa.**
> 别让 CTO 干工程师的活。／ 反之亦然。

Why it works: the vocabulary is SPEC §1's own (`Smart = CTO`, `Fast = Engineer`),
so the headline pre-loads the terms the Fast/Smart cards below reuse. It is
bilateral — the second line forces the reader past the first.

## 3. No forced parallelism

Banned: *"两个都不大，坐下来一会儿就能读完"* — two clauses, one idea, twice.
Banned: *"装了、忘了、删了"* — a tricolon that exists to be a tricolon.

Parallelism is allowed **only when both halves carry real, different meaning**:

- ✅ `Cheap for the easy work. Strong for the hard work.` — two distinct claims.
- ✅ `看 / 调 / 接管` — three genuinely separate capabilities.
- ❌ any list built to reach three.

If you can delete a clause and lose nothing, delete it.

## 4. Never describe internal implementation in user-facing prose

Banned: *"It runs on the fast one itself."* (`它自己就跑在快的那一档`)

The reader does not care where the router executes. Describe what changes for
them, not how it is built. Implementation detail belongs in `/models` and the
docs — and even there, only when the reader is already in technical context.

## 5. Say the honest thing, but say the *reason*

Beta features get their latency, their cost, and their limits stated plainly — no
disclaimer voice, no hedging pile. The pattern is **claim → why → what to do**:

> Decision models are off by default, and that is a decision rather than caution.
> They are slow right now — 1.4 to 6.6 seconds a verdict, which is the provider
> still ramping up capacity. They suit batch work and background tasks.

Do not stack citations to look rigorous. One concrete number beats a benchmark
recital; a stat the reader cannot act on is noise.

## 6. Zero-knowledge first read

No jargon before it is earned. Banned in user-facing copy:
`runtimes / 运行时` (say *editions / 版本*), `Fallback chain` (say *More than
one*), `per tier` (say *each side*), `Fast workers` (say *cheap workers*).

Legitimate product terminology survives — `runtime failover`, `decision model`,
`orchestration` — but only where the surrounding sentence defines it by use.

## 7. Locale files hold strings, not expressions

`en.ts` and `zh.ts` contain literal text only. No `.replace(...)`, no template
arithmetic, no conditional assembly. If the wording differs between contexts,
write it twice.

## 8. Write the Chinese fresh

The ZH copy is not a translation of the EN copy. Same claims, same rhythm,
different sentence. If a ZH line reads like a translated sentence, rewrite it
until it reads like something a person would say.

- `反之亦然` closes better than `也别反过来`.
- `你手里性价比最高的` not `你手里智价比最好的`.

## 9. FAQ is not a spec sheet

One entry per distinct question a first-time visitor actually asks, ordered by
the order they ask it. Merge duplicates ruthlessly. Long answers are a failure
mode: if an answer needs two paragraphs, it belongs in a section, not the FAQ.

Currently **9** entries. Do not grow this without deleting something.

## 10. Meta copy is copy

`<title>`, `<meta description>`, OG tags and JSON-LD get the same treatment as
the hero. `Shift Router — The right model for every message` is held to rule 2.

## 11. Terminal mocks must be tier-correct and durable

`src/content/terminals.ts` and `hero.terminal.logLines` are English and
locale-agnostic — real command output does not translate.

- Model names must be tier-appropriate and not stale IDs:
  fast → `deepseek-flash` (fallback `gpt-luna`); smart → `Claude Opus`
  (fallback `gpt-astra`).
- Emoji must match the tier: 🦾 = fast / engineer, 🧠 = smart / CTO,
  🧭 = judging.
- The narrative must be internally consistent. A 429 after an upgrade must stay
  in the smart tier — a cross-tier failover would contradict the product's own
  "never crosses tiers" guarantee.

## 12. Fast/Smart facts stay distinct

| | pi | dsh |
|---|---|---|
| Runtime dependencies | none (`@earendil-works/pi-tui` is a host peer) | none (3 host peers) |
| Tests | 641 | 443 + credential-free e2e |
| Install size | ~409 kB | — |

Never let one product's claim migrate to the other.

---

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
