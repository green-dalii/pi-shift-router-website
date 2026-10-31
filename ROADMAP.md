# ROADMAP — Aesthetic rebuild (T0–T4)

Target: an Awwwards / FWA / CSSDA / Webby-grade site, without changing the
information architecture and without abandoning the Wise palette.

Concept driving every stage: **Two states, one surface.** Every element exists in
a *cheap* state and a *strong* state; switching between them is the site's only
motion language. The reader should feel the router, not read about it.

Design decisions live in [DESIGN.md](./DESIGN.md) §"Shift Router adaptations".
Copy decisions live in [README.md](./README.md) §"Copy style rules".

## Baseline (measured before T0)

| Metric | Before |
|---|---|
| Lowest body contrast | **3.03:1** (`--color-mute` on sage) — fails WCAG AA |
| Section heading width | 672px of a 1152px container in **7/7** sections → 39% dead right column |
| Distinct surface tones | 3 (`#e8ebe6` / `#fff` / `#0e0f0c`) |
| Gradients in `src/` | 1 |
| Scroll-driven animation | **0** (`IntersectionObserver` count) |
| `prefers-reduced-motion` | 0 |
| Text at 11–15px | 213 nodes |
| Text at 20–40px | ~11 nodes |
| Hero height @1440 | 1371px (1.52 viewports), 112px orphan dead space |
| Hero height @390 | 1717px (2.03 viewports) before CTA |
| Page height @1440 | 11242px, mean section 1210px |
| Emoji used as design elements | 19 |

---

## T0 — Defects (blocking) — ✅ done

Anything here would fail a technical/accessibility review regardless of taste.

- [x] **T0.1 Contrast floor.** Add `--color-mute-aa` (`#676963`, 4.62:1 on sage)
      and use it for every caption, footnote and trust-strip description.
      Keep `--color-mute` only for non-text ornament.
- [x] **T0.2 No clipped content.** Terminal panes and inline code must never be
      cut at a card edge: horizontal scroll + right-edge fade mask.
- [x] **T0.3 Mobile hero.** `text-wrap: balance` on the headline, tighter clamp
      at ≤640px, and no orphan word on its own line.
- [x] **T0.4 Emoji → dual-state icons.** Replace every emoji used as a design
      element with an inline SVG pair (cheap = thin line, strong = solid).
      Emoji survive only *inside* terminal output, where they are real product
      output.

**Acceptance:** axe-equivalent contrast pass; zero `scrollWidth > clientWidth`
overflow on any card; mobile hero ≤ 1.3 viewports to CTA; zero design emoji.

## T1 — System (grid, scale, tone)

- [x] **T1.1 Twelve-column grid + counterweight rule.** No section heading may
      occupy a lone left column. Each heading pairs with a right-hand
      counterweight (decision spine, stat, or diagram).
- [x] **T1.2 Type scale middle register.** Fill the 20 / 28 / 40px gap so the
      page has a "speaking" voice between the 80px shout and the 13px whisper.
- [x] **T1.3 Six-step tonal scale.** `sage` → `tone-1` → `tone-2` → `tone-3` →
      `deep-deep` → `ink`, so consecutive sections never hard-cut.
- [x] **T1.4 Vertical rhythm.** Section padding 128px → 96px desktop (72px
      tablet, 56px mobile); mean section height target ≤ 900px.

**Acceptance:** measured heading width ≥ 8 columns or paired with a
counterweight in 7/7 sections; ≥ 40 nodes in the 20–40px band; no two adjacent
sections sharing an identical flat background without a seam; page height
≤ 9000px.

## T2 — Motion

- [x] **T2.1 Reveal system.** One `IntersectionObserver` drives staged reveals
      (60ms stagger, `cubic-bezier(.16,1,.3,1)`), so the page animates as it is
      read rather than finishing before the reader arrives.
- [x] **T2.2 Live two-state hero demo.** The hero demonstrates the switch
      instead of describing it: the same task, rendered in the cheap register
      and the strong register, cycling with the terminal log.
- [x] **T2.3 Decision spine.** A 1px vertical line that forks at each decision
      point, labelled with `θ` / `p`. Makes the invisible decision structural.
- [x] **T2.4 Reduced-motion parity.** `prefers-reduced-motion: reduce` disables
      every transform and loop while keeping all content visible and static.

**Acceptance:** motion is observer-driven and seek-safe; reduced-motion leaves
nothing hidden; no animation runs off-screen or after the reader has passed.

## T3 — Concept

- [x] **T3.1 Draggable two-state comparator.** Replaces the static Fast/Smart
      card pair with a divider you drag: the same task description, written in
      the engineer's register and the CTO's.
- [x] **T3.2 Dual-state icon set.** One SVG family, two weights, used
      consistently for cheap/strong everywhere.
- [x] **T3.3 Custom OG image + 404.** No framework defaults.
- [x] **T3.4 Restrained micro-interaction.** Magnetic primary CTA only. Nothing
      else moves on hover except color.

**Acceptance:** the comparator is keyboard-operable and works with reduced
motion; the OG image renders legibly at 1200×630 and at thumbnail size.

## T4 — Delivery

- [x] **T4.1** Lighthouse: Performance / Accessibility / Best-practices / SEO
      all 100 on `/` and `/zh/`.
- [x] **T4.2** CJK weight check: no synthetic bolding, no fallback-face flash in
      ZH at any heading size.
- [x] **T4.3** OG / JSON-LD / `llms.txt` / footer version facts agree.
- [x] **T4.4** Full 4-route build + preview, both locales, desktop + mobile.

**Acceptance:** all four routes 200, all four Lighthouse categories 100,
`git status` clean apart from new commits, preview server running for review.

---

## Out of scope

- Information architecture changes. Sections stay where they are.
- Palette replacement. Wise lime + sage is kept; it is *used better*, not
  swapped. The unused `#163300` deep green finally becomes the strong-state
  colour it always should have been.
- Framework change. Astro + Tailwind 4, no React, no MDX, no GSAP.
- Copy rewrites. The 9-entry FAQ and the current voice are locked (see README
  style rules); only markup may change.
