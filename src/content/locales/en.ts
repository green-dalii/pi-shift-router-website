import type { Translations } from './types';

export const en: Translations = {
  meta: {
    title: 'Shift Router — Stop picking models, start coding',
    description:
      'A model router family for pi-coding-agent and DeepSeek Harness: stop paying flagship prices for routine turns, and stop handing your hardest turns to a cheap model. An LLM judge (or an opt-in decision model) picks the tier by expected cost; multi-model fallback chains keep you running; complex tasks are orchestrated by a Smart CTO that delegates to Fast subagents. Saves tokens, survives provider outages, zero risk to try.',
    keywords:
      'shift router, pi shift router, dsh shift router, model routing, llm router, ai coding, save tokens, reduce ai cost, fast smart tier, expected cost routing, gear presets, decision model judge, task orchestration, provider fallback, deepseek, openrouter, pi extension, deepseek harness',
  },
  nav: {
    quickStart: 'Quick Start',
    howItWorks: 'How it works',
    useCases: 'Use cases',
    models: 'Models',
    faq: 'FAQ',
    github: 'GitHub',
    languageLabel: 'Language',
    enLabel: 'English',
    zhLabel: '中文',
  },
  hero: {
    badge: 'One router for pi and DeepSeek Harness',
    slogan: 'Stop paying flagship prices for routine turns — and stop handing your hardest turns to a cheap model.',
    title1: 'Every task,',
    title2: 'the right model.',
    subtitle:
      'Everyday coding runs on a cheap, fast model. Hard problems get the smart one. The judge weighs the odds and switches by expected cost — automatically, mid-turn, never guessing when it is unsure. When a provider stumbles, the router steps down a ladder instead of stalling. And when a task is genuinely complex, the Smart tier plans and delegates it to Fast subagents — on pi and DeepSeek Harness alike. Your work never stops.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'pi-shift-router docs',
    ctaTertiary: 'dsh-shift-router docs',
    terminal: {
      title: 'pi-shift-router — in pi',
      subtitle: 'status bar · toasts · auto',
      statusLabel: 'router',
      statusModel: 'MiniMax-M3',
      statusTier: 'tier',
      statusTierValue: 'fast',
      statusMode: 'default',
      judgeLabel: 'judge',
      judgeValue: '🧭 judging…',
      windowLabel: 'gear',
      windowValue: 'default',
      logLines: [
        { time: '🦾', text: '[MiniMax-M3] → fix the failing test' },
        { time: '🧭', text: 'judging…' },
        { time: '🧠', text: '[kimi-k3] ← upgraded for the architecture question' },
        { time: '⚠️', text: 'MiniMax-M3 429 → switching to deepseek-v4-flash — retry in 1m' },
        { time: '🦾', text: '[deepseek-v4-flash] ← same-tier failover' },
      ],
    },
    trustStrip: [
      { label: 'Multi-provider', desc: 'auto-switch keeps your task running' },
      { label: 'No extra servers', desc: 'runs inside your Pi process' },
      { label: 'Open source MIT', desc: 'one host dependency' },
    ],
  },
  family: {
    label: 'The family',
    title: 'One routing idea, two editions',
    subtitle: 'Same LLM-judge routing, same fallback chains, same task-level orchestration — adapted to the agent you actually run.',
    products: [
      {
        name: 'pi-shift-router',
        version: 'v1.7.0',
        edition: 'for pi-coding-agent',
        desc: 'The original. Installs into pi in one command, routes every turn between Fast and Smart by expected cost, and orchestrates complex tasks by delegating them to Fast subagents.',
        highlights: ['One host dependency · ~409 kB', 'Judge modes: LLM chain or decision model', '577 unit tests'],
        links: [
          { label: 'GitHub', href: 'https://github.com/green-dalii/pi-shift-router' },
          { label: 'npm', href: 'https://www.npmjs.com/package/pi-shift-router' },
        ],
      },
      {
        name: 'dsh-shift-router',
        version: 'v0.6.0',
        edition: 'for DeepSeek Harness',
        desc: 'The DSH edition. Plugs into the harness via cordis.patch.yml, routes through the harness\'s own agent pipeline, and configures live from the GUI "Shift-Router" card or /router config.',
        highlights: ['Zero runtime deps', 'GUI config card + live commands', '424 tests · credential-free e2e'],
        links: [{ label: 'GitHub', href: 'https://github.com/green-dalii/dsh-shift-router' }],
      },
    ],
    note: 'One codebase to read in an evening, two editions. Pick the one that matches your agent.',
  },
  quickStart: {
    label: 'Quick Start',
    title: 'Up and running in three steps',
    subtitle: 'Install it and nothing changes — routing only starts once you pick your models. Fully reversible, no lock-in.',
    runtimes: [
      {
        id: 'pi',
        name: 'pi-shift-router',
        steps: [
          {
            title: 'Install',
            desc: 'One command. pi registers the extension in your settings and loads it on the next launch — no rebuild, no config files to touch.',
            hintTitle: 'Why it\'s safe to install',
            hintItems: [
              { label: 'Zero dependencies', desc: 'pure TypeScript — nothing new in node_modules, loads in milliseconds' },
              { label: 'Zero telemetry, zero backend', desc: 'no data leaves your machine; everything runs inside your pi session' },
              { label: 'Open source, no lock-in', desc: 'entire codebase readable in an evening; uninstall anytime and pi falls back to your default model' },
            ],
          },
          {
            title: 'Pick your models',
            desc: 'Run /router config and pick a Fast model and a Smart model — the pair you already use. Save to user or project scope.',
            hintTitle: 'How to pick',
            hintItems: [
              { label: 'Fast', desc: 'the best value-to-quality model in your stack, not the cheapest (the Judge runs on it, so its judgment matters too)' },
              { label: 'Smart', desc: 'a frontier model for the work that matters' },
              { label: 'Fallback chain', desc: 'add 2–3 models per tier and they form a fallback chain for 429/5xx' },
            ],
            link: {
              label: 'See recommended pairings',
              href: '/models',
            },
          },
          {
            title: 'Watch it work',
            desc: '/router status shows your setup; the next turn runs the first classification. From there it\'s automatic — tune later with /router quiet and /route-force when you want control.',
            hintTitle: 'What the output means',
            hintItems: [
              { label: 'Spend', desc: 'how much each tier cost, and the baseline: what it would have cost without the router' },
              { label: 'Turns / upgrades / downgrades', desc: 'how often the router escalated or settled' },
              { label: 'Cooldowns', desc: 'models resting after a 429/5xx; they resume after backoff' },
              { label: 'Window', desc: 'the last 5 classifications driving the downgrade gate' },
            ],
          },
        ],
      },
      {
        id: 'dsh',
        name: 'dsh-shift-router',
        steps: [
          {
            title: 'Install',
            desc: 'Clone, build, and register the plugin in your harness profile — all from a shell. No credentials needed; all defaults are safe.',
            hintTitle: 'The bundle',
            hintItems: [
              { label: 'Prepare', desc: 'git clone …/dsh-shift-router && npm install && npm run build' },
              { label: 'Register', desc: 'dsh plugin --profile web add /path/to/dsh-shift-router' },
              { label: 'Live config', desc: 'Settings → shift-router or /router config — persisted, no restart' },
            ],
          },
          {
            title: 'Pick your models',
            desc: 'Set the Fast and Smart tier chains — in the GUI (Settings → Plugins → Plugin configuration → the "Shift-Router" card) or with /router config commands. Both share the same store.',
            hintTitle: 'How to pick',
            hintItems: [
              { label: 'Fast', desc: 'the best value-to-quality model in your stack — the Judge runs on it too' },
              { label: 'Smart', desc: 'a frontier model for the work that matters' },
              { label: 'Fallback chain', desc: 'add 2–3 models per tier and they form a fallback chain for 429/5xx' },
            ],
          },
          {
            title: 'Watch it work',
            desc: '/router status shows your tiers and orchestration mode; the next top-level turn runs the first classification. Subagents keep their pinned model.',
            hintTitle: 'What the output means',
            hintItems: [
              { label: 'Tiers', desc: 'Fast chain (also the Judge) and Smart chain' },
              { label: 'Orchestration', desc: '🪄 auto (idle) — complex tasks get delegated to Fast subagents' },
              { label: 'Cost telemetry', desc: 'per-tier spend and the all-turns-on-Smart baseline' },
            ],
          },
        ],
      },
    ],
  },
  models: {
    label: 'How it works',
    title: 'One simple, elegant idea',
    subtitle: 'Every task has a difficulty. Every model has a price. Shift Router matches the two — automatically.',
    intro:
      'Think of it like a team: the engineer handles the day-to-day fast and cheap; the CTO takes over the whole turn when the work matters. Same task, two minds — the router decides which one you need before you finish typing. And when the CTO\'s job is big enough, it doesn\'t just do it alone: it delegates to Fast subagents and reviews their work.',
    valueProps: [
      {
        title: 'Routine work stays cheap',
        desc: 'The judge only upgrades when a task actually needs depth — everyday coding keeps running on your budget model, and expensive flagships are reserved for what matters.',
      },
      {
        title: 'The deciding is nearly free',
        desc: 'One tiny classification call — a few thousand tokens at your fast-tier price, 200ms–2s. The savings from skipping unnecessary smart turns dwarf it.',
      },
      {
        title: 'Keeps working when a provider hiccups',
        desc: 'If a model 429s or times out, it cools down and the next healthy model in the same tier takes over — mid-turn, no action needed from you.',
      },
    ],
    fast: {
      tier: 'Fast',
      role: 'Engineer',
      emoji: '🦾',
      desc: 'Your everyday engineer. Fast on routine work — writing code, running tests, fixing bugs — so you don\'t waste a flagship model on a rename or a refactor.',
      bullets: [
        'Day-to-day coding and fixes',
        'Tests and mechanical changes',
        'Routine, low-stakes work',
      ],
    },
    smart: {
      tier: 'Smart',
      role: 'CTO',
      emoji: '🧠',
      desc: 'The CTO — sets direction, corrects course, reviews results, and takes on the hard problems itself: architecture, design review, security, multi-step plans, irreversible changes. High-stakes turns don\'t get dropped.',
      bullets: [
        'Architecture and design decisions',
        'Reviews that need real judgment',
        'Risky, ambiguous, or deep tasks',
      ],
    },
    judge: {
      label: 'The judge',
      title: 'A tiny call decides',
      desc: 'One small classification — by the fast-tier model itself — reads your request and returns a tier plus a confidence. That confidence is read as the probability this turn needs the strong model, so the router weighs cost instead of counting votes.',
      code: 'judge: { mode: fast-chain | custom | decision }',
    },
    window: {
      label: 'Expected-cost gate',
      title: 'Spend where it changes the outcome',
      desc: 'The bar is not 50/50. Upgrading a routine turn wastes the price gap once; keeping a hard turn cheap costs a redo, the smart model anyway, and your time. So the router runs Smart whenever the odds clear θ = 1 / reworkPenalty (default θ ≈ 0.33) — a price-independent rule, because the price gap cancels out and all that matters is how badly a wrong call hurts. Below minConfidence (0.5) it holds position rather than guess.',
      code: 'economics: { reworkPenalty: 3, downgradeMemory: 2 }',
    },
    fallback: {
      label: 'Runtime failover',
      title: 'Failures, handled',
      desc: 'When a provider rate-limits or errors, that model cools down with exponential backoff (5xx from 1m; 429/quota/402 balance from 16m, capped at 6h) and the next healthy one in the same tier takes over — you keep working through the outage. If the judge itself is unavailable, the router steps down a ladder instead of stalling: next judge source, then no routing at all — it never guesses.',
      code: 'cooldown: 1m → 4m → 16m → 1h → 4h → 6h',
    },
    orchestration: {
      label: 'Task-level orchestration',
      title: 'The CTO doesn\'t work alone',
      desc: 'When the Judge says the task is complex and orchestration is in auto mode (default), the Smart tier runs as a CTO: it plans the work, delegates implementation to Fast engineer subagents, reviews each result, and iterates until the work is clean. Simple tasks never orchestrate — they stay on the plain router.',
      bullets: [
        'Plan → delegate → review → iterate → accept',
        'Post-turn acceptance audit — grounding · goal alignment · delivered quality',
        'Per-worker cost ledger — delegation spend never hides in the main agent',
        'Fresh-context workers: small, fast, cheap (~$0.004 vs ~$0.06 per fork)',
        'Hard caps: maxRounds 3 · escalationThreshold 2 · Last audit in /router status',
        'Requires pi-subagents; degrades gracefully without it',
      ],
    },
  },
  judgeModes: {
    label: 'Judge modes',
    title: 'Three judges, one verdict',
    subtitle: 'The verdict can come from the Fast chain, a dedicated Judge chain, or a decision model that answers with a probability instead of prose.',
    modes: [
      {
        id: 'fast-chain',
        name: 'Fast chain',
        badge: 'default',
        desc: 'Reuses your Fast tier chain — no extra configuration, and the default path is unchanged.',
      },
      {
        id: 'custom',
        name: 'Dedicated Judge',
        badge: '',
        desc: 'A separate Judge chain you edit like a tier, when you want the verdict made by a different model than the one doing the work.',
      },
      {
        id: 'decision',
        name: 'Decision model',
        badge: 'Beta',
        desc: 'A decision model (TypeSafe Jev / System One class) returns a typed choice with a probability — no JSON parsing, so there is no malformed-reply failure class. About $0.0001 per turn.',
      },
    ],
    honest: 'Jev is opt-in and labelled Beta on purpose: it is fast to integrate but currently slow per verdict (1.4–6.6 s while provider capacity ramps), and a September 2026 independent evaluation found decision models behind the best LLM on 14 of 15 annotation tasks. It is a good fit for batch and background routing; for interactive turns the LLM judge is still the better default. The router steps down to your LLM judge if the decision model stops answering, and to no routing at all if that fails too.',
  },
  gearPresets: {
    label: 'Gear presets',
    title: 'Three gears, one dial',
    subtitle: 'Routing leans toward spending by default. The presets move the bar in one command when your workload does not.',
    gears: [
      { id: 'eco', name: 'eco', threshold: 'θ 0.5', desc: 'Conservative — only clearly-needed turns run Smart. Cheapest.' },
      { id: 'default', name: 'default', threshold: 'θ 0.33', desc: 'Balanced — borderline verdicts lean Smart. The default.' },
      { id: 'sport', name: 'sport', threshold: 'θ 0.2', desc: 'Eager — any real chance of needing Smart escalates. Safest for architecture-heavy work.' },
    ],
  },
  useCases: {
    label: 'Use cases',
    title: 'Three setups that cover most teams',
    subtitle: 'Pick the one closest to your situation — everything is reversible.',
    scenarios: [
      {
        title: 'Multi-provider resilience',
        desc: 'Run 2–3 providers per tier. When one rate-limits or stalls, the next healthy model in the same tier takes over mid-turn.',
      },
      {
        title: 'Single-provider tier ladder',
        desc: 'One provider, two tiers. One bill, one rate-limit pool. Simplest setup — pick a budget model for routine work and the same vendor\'s flagship for hard turns.',
      },
      {
        title: 'Local + cloud hybrid',
        desc: 'Fast tier on a quantized local model. Smart tier in the cloud. Privacy on the routine turns; frontier quality when it matters.',
      },
    ],
    cta: {
      label: 'See recommended model pairings',
      href: '/models',
    },
  },
  modelsPage: {
    label: 'Models',
    title: 'Pick your model pair',
    intro: 'Two rules of thumb that hold on both pi and DeepSeek Harness. Fast tier — pick the best value in your stack: strong quality per dollar, because this tier also powers the judge by default, so its judgment matters too. Smart tier — keep it on a frontier cloud model; local Smart is impractical under ~80 GB of VRAM, and even at 96 GB a flat-fee token plan usually wins. We list tier names (Flash, Luna, Haiku, K3…) rather than dated model IDs on purpose: the exact IDs change with every release, the tier names do not. After you install, run /model to see which one is current in your setup.',
    patterns: [
      {
        title: 'Coding subscription plans',
        summary: 'One subscription, many models. Use a token gateway (one key proxying every major provider) or reuse a coding-tool subscription you already pay for — most expose an OpenAI-compatible endpoint.',
        fast: {
          models: [
            'any Flash class  (DeepSeek V4 / Qwen Flash / MiMo Flash)',
            'Luna  (OpenAI · OpenCode Zen / Go)',
            'Haiku  (Anthropic)',
          ],
        },
        smart: {
          models: [
            'Sol / Terra  (OpenAI · OpenCode Zen / Go)',
            'Qwen Max',
            'Kimi K3',
          ],
        },
        note: 'Reusable subscriptions: OpenCode Zen (OpenAI-compatible endpoint), GitHub Copilot (BYOK — OpenAI + Anthropic), Cursor (Pro / Pro+ / Ultra pools), OpenAI Codex (bundled with ChatGPT Plus / Pro / Business).',
        bestFor: 'Zero extra setup — one bill, no new account.',
      },
      {
        title: 'Local models by memory',
        summary: 'Fast tier on quantized local (q4-k-m / NVFP4 / MXFP4 / AWQ-int4 / 1–2 bit ternary). Once you have 64+ GB of VRAM or unified memory, Smart can run locally too. VRAM ≈ params × 0.6 at Q4_K_M.',
        groupRows: [
          { group: '≤ 32 GB', fast: 'LFM2.5-8B-A1B (8.5B), granite-4.1-8b (8.8B), Qwen3.6-27B (dense, q4 ≈ 14 GB), gemma-4-26b-a4b-it (q4 ≈ 13 GB), Qwen3.6-35B-A3B (MoE 36B/3B, q4 ≈ 18 GB), Laguna-XS-2.1 (MoE 33B/3B, q4 ≈ 17 GB), Ternary-Bonsai-27B (1.58-bit ≈ 7 GB, laptop/phone)', smart: 'Cloud frontier model' },
          { group: '32–128 GB', fast: 'Fable-Fusion-711-NEO-MAX-MTP GGUF (27B, 2026-07, best post-trained), gemma-4-31B-it (q4 ≈ 16 GB), Laguna-S-2.1 (117.6B, q4 ≈ 59 GB — needs 64 GB+)', smart: 'Fable-Fusion-711 base weights, or cloud frontier' },
          { group: '≥ 128 GB', fast: 'Fable-Fusion-711-NEO-MAX-MTP GGUF (same pick — post-training beats raw size)', smart: 'DeepSeek-V4-Flash (284 B MoE / 13 B active, UD-Q4_K_XL ≈ 155 GB — needs 192 GB+ unified memory; on 128 GB-class use 1–2 bit ternary)' },
        ],
        note: 'Sizes are quant (production, not fp16). The AxxB suffix on a MoE model means active parameters per token — it affects compute speed, not disk size; a GGUF/q4 stores every expert weight. Qwen3.6-27B scores 77.2% on SWE-bench Verified — the strongest open-weight model that runs on a 24 GB card. Below ~256 GB of unified memory, local Smart rarely beats a flat-fee token plan on quality-per-dollar; run local Smart only for privacy or air-gapped work.',
        bestFor: 'Cost-sensitive or air-gapped work; cloud only sees the hard turns.',
      },
      {
        title: 'Same-provider tier ladder',
        summary: 'One provider, two tiers — simplest setup. Use this when you already pay for one vendor and don\'t want to juggle keys. The right-hand column lists the ladder in ascending order, which doubles as your fallback chain.',
        groupRows: [
          { group: 'Anthropic', fast: 'Haiku', smart: 'Sonnet → Opus → Fable' },
          { group: 'OpenAI', fast: 'Luna', smart: 'Terra → Sol → Astra' },
          { group: 'Google', fast: 'Flash-Lite', smart: 'Flash → Pro' },
          { group: 'Alibaba (Qwen)', fast: 'Plus / Flash', smart: 'Max' },
          { group: 'DeepSeek', fast: 'Flash', smart: 'Pro' },
          { group: 'Z.AI (GLM)', fast: 'Flash / Highspeed', smart: 'mainline' },
          { group: 'Moonshot (Kimi)', fast: 'K2.x / K2.7-Code', smart: 'K3' },
          { group: 'Xiaomi (MiMo)', fast: 'Flash', smart: 'Pro / UltraSpeed' },
          { group: 'xAI (Grok)', fast: 'Fast', smart: 'mainline' },
        ],
        bestFor: 'Simplest path from zero to routing — one vendor, one bill, one rate-limit pool.',
      },
      {
        title: 'Cross-provider pairing',
        summary: 'Best-of-breed regardless of vendor. This is where routing earns its keep: the cost asymmetry does the saving, and the family asymmetry does the resilience — a chain drawn from two families survives any single outage.',
        groupRows: [
          { group: 'Coding, lowest cost', fast: 'any DeepSeek V4 Flash', smart: 'any Anthropic Opus class' },
          { group: 'Coding, multi-provider fallback', fast: 'DeepSeek V4 Flash + GLM-5.x-Flash', smart: 'Anthropic Opus + GPT-5.x Sol + Kimi K3' },
          { group: 'Coding, flat-fee (best $/quality)', fast: 'OpenCode Go Flash class', smart: 'OpenCode Go strongest (Grok / GPT Luna / Kimi K3)' },
          { group: '1 M context, long repo or PDF research', fast: 'any Flash class with 1 M ctx', smart: 'Kimi K3 or Gemini Pro' },
          { group: 'Multimodal (image / video)', fast: 'any Flash class', smart: 'Anthropic Opus (vision) or Gemini Pro' },
          { group: 'Multilingual, Chinese-first', fast: 'any Flash class', smart: 'Qwen Max' },
          { group: 'Europe / GDPR preference', fast: 'DeepSeek Flash (via OpenRouter)', smart: 'Mistral medium' },
        ],
        bestFor: 'Strongest model in each tier, regardless of who sells it.',
      },
    ],
    note: 'One more thing the judge needs: a JSON-mode endpoint. Any modern Flash-class model supports it (Qwen 3.5+, Gemma 4, MiMo V2.x); a local judge adds roughly 0.5–2 s per turn. A solid starting point is a local Fast tier with a cloud Smart tier, and the judge running on whichever Smart model you trust for that kind of work. Model IDs and prices change monthly — the upstream docs track this with `curl -s https://models.dev/api.json | jq`, and the full per-provider catalog lives at models.dev.',
  },
  faq: {
    label: 'FAQ',
    title: 'Questions, answered',
    subtitle: 'Straight from the README.',
    items: [
      {
        q: 'What if I don\'t configure any models?',
        a: 'Nothing changes. Both tiers start empty — the router does nothing and pi keeps using your default model. Routing only begins once you run /router config and pick your models.',
      },
      {
        q: 'Does this actually save money?',
        a: 'Yes. Routine turns stay on your fast, value-priced model instead of burning a flagship on every request. The judge itself costs a few thousand tokens at your fast-tier price — the savings dwarf it.',
      },
      {
        q: 'Is it safe to try?',
        a: 'Completely. The router does nothing until you configure it, it is pure TypeScript with a single host-provided dependency, and /router off disables it instantly. No lock-in.',
      },
      {
        q: 'What exactly does the smart tier do?',
        a: 'It\'s the CTO role — it sets direction, corrects course, reviews results, and takes on the hard problems itself: architecture, design review, security, multi-step plans, irreversible changes. High-stakes turns don\'t get dropped. It doesn\'t just advise or review; it writes the code and does the work.',
      },
      {
        q: 'Does the Judge add noticeable latency?',
        a: 'No. The classification call is a few thousand tokens and takes about 200ms–2s. You\'ll see 🧭 judging… in the status bar during the call — most users never notice it.',
      },
      {
        q: 'What if my primary model 429s or times out?',
        a: 'You keep working. The failed model enters an exponential-backoff cooldown — 5xx starts at 1m (1m → 4m → 16m → 1h → 4h… capped at 6h), while a failover-worthy 4xx (429 rate limit / quota) skips the first tiers and starts at 16m, because client-side limits usually outlive server blips. The next healthy model in the same tier takes over automatically — even mid-turn. A successful response clears the cooldown.',
      },
      {
        q: 'What is task-level orchestration?',
        a: 'When the Judge says a task is complex, the Smart tier runs as a CTO: it plans the work, delegates implementation to Fast engineer subagents (fresh context, model pinned from your Fast tier), reviews each result, iterates with concrete feedback, and does a final acceptance pass. Simple tasks never orchestrate — they stay on the plain router. Orchestration is on by default (auto mode); /router orchestrate off disables it. It needs the pi-subagents extension — without it, complex tasks run directly on the Smart tier, exactly as before.',
      },
      {
        q: 'Does orchestration cost more?',
        a: 'No — that\'s the point. The Smart tier plans and reviews; Fast subagents implement, each in a fresh context that\'s small and cheap: ~$0.004 for a narrow task vs ~$0.06 for an inherited 176k-token fork. Hard caps keep it bounded: maxRounds 3 and escalationThreshold 2. If a task turns out simple, the machinery never engages.',
      },
      {
        q: 'What keeps an orchestrated turn honest?',
        a: 'Two safety nets. The convergence protocol requires every re-delegation to carry a structured failure report — what failed, where, the exact acceptance test to re-run — and re-sending identical feedback is forbidden (the CTO takes the phase over). On top of that, a post-turn acceptance audit (v1.3.0) runs after every orchestrated turn: deterministic checks always run (every worker reported back, the final message carries a CTO summary, whether a hard cap was hit), plus an optional small fast-tier LLM audit that checks grounding, goal alignment, and delivered quality against your original request. Findings never block the finished turn — they surface as console.warn + toast and in /router status as "Last audit". Toggle with orchestration.audit.enabled (default on).',
      },
      {
        q: 'How does it compare to OpenRouter Auto Router?',
        a: 'OpenRouter Auto Router is zero-config and market-driven — a good fit for a raw API call, and it optimizes for quality rather than your bill (their docs are explicit that routing to an expensive model is working as designed). You do not define the tiers, you do not see the verdict, and you do not control the failure mode. Shift Router routes on the shape of the task, inside your agent, between two chains you define, and every verdict is visible in /router status. Cloudflare AI Gateway Dynamic Routing is a third option: versioned flows with quotas and fallbacks, but you author the graph per gateway and it sees requests rather than tasks — it has no notion of "this turn is architecture work". Doing it by hand is free until the first time you forget to switch back.',
      },
      {
        q: 'How is it different from other pi routers?',
        a: 'pi-bifrost decides with 7-step rules plus history heuristics across 4 tiers — more cases, but harder to reason about, and it saves subscription quota rather than dollars. pi-smart-router runs a 12-step local pipeline with no LLM, estimates cost with a formula, and needs a local DB and ML model. Shift Router keeps the decision to one readable prompt (or a decision model), two tiers with one mental model, orchestration where the Smart CTO delegates to Fast subagents, dollars-saved telemetry, and a judge ladder that degrades to no routing rather than stalling. CC-Switch is a different category: a desktop app for manually switching provider configs between sessions — it coexists fine.',
      },
      {
        q: 'Can I force a specific model for one turn?',
        a: 'Yes. /route-force <tier> pins Smart or Fast for the next turn; /route-force <provider>/<model> pins an exact model. /route-force auto clears the override. Note that while routing is on, the router owns model selection: using pi\'s own /model switcher applies to the current turn, and the next routing point re-asserts the tier chain. For full manual control run /router off.',
      },
      {
        q: 'Does it work with models from different providers?',
        a: 'Yes — mix freely. Each tier is an ordered list of {provider, model, priority} pairs, so your fast tier can be DeepSeek and your smart tier Kimi, all from one config.',
      },
      {
        q: 'Can I monitor how it\'s performing?',
        a: 'Yes — `/router status` opens a TUI dashboard: the live model, the last decision and why, the tier chains with inline cooldowns, per-model context-window and cache-hit gauges, and a Money section with per-tier spend, the savings baseline, and — when delegation happened — an orchestration line (orchestration $0.0689, 5 workers). The baseline asks what the session would have cost with every turn on your Smart model; if pricing is missing it shows unavailable rather than a made-up number.',
      },
      {
        q: 'How do I tune the downgrade behavior?',
        a: 'One dial: `reworkPenalty` (R, default 3) — the bar is θ = 1/R, the expected cost at which running Smart pays for itself. Lower R (2) is conservative and cheaper; higher R (5) is eager and safer for architecture-heavy work. You do not have to touch the math: `/router eco`, `/router default`, and `/router sport` set it for you and are tab-completable. Separately, `minConfidence` (default 0.5) sets the floor below which a verdict is discarded and the router holds position. Upgrades are always immediate — only downgrades wait, and then for `downgradeMemory` (default 2) consecutive decisive fast turns.',
      },
      {
        q: 'What happens when the judge itself is unavailable?',
        a: 'It holds, then steps down — it never guesses. A failed judge call no longer fabricates a fast verdict (which used to be able to silently downgrade a Smart session after two outages). Instead the router walks an availability ladder: the configured judge chain, then the LLM judge, then no routing at all. The last rung behaves as if the plugin were not installed — no model switch, orchestration cleared, your session model restored — and it tells you once per session. A 429 on one judge source falls through to the next immediately rather than holding.',
      },
      {
        q: 'What is a decision model, and should I use one as the judge?',
        a: 'Instead of asking a language model for JSON and parsing it, a decision model (the TypeSafe Jev / System One class) is handed a typed question and returns a typed answer with a probability. The router compares that probability against θ directly, so there is no parse step and no malformed-reply failure class, and a verdict costs input tokens only — about $0.0001 per turn. LiteLLM measured a jev classifier 5.43× faster and 96% cheaper than a Haiku-class one in their own Auto Router. The honest catch: it is currently slow per verdict (1.4–6.6 s while provider capacity ramps) and a September 2026 independent evaluation found decision models behind the best LLM on 14 of 15 annotation tasks — so it is opt-in, labelled Beta, and third in the menu. Good for batch and background routing; the LLM judge is still the better default for interactive turns. If it stops answering, the router steps down to your LLM judge.',
      },
      {
        q: 'My provider ran out of credit — does the router notice?',
        a: 'Yes. HTTP 402 (including "Insufficient Balance" and 余额不足) and Codex usage-limit exhaustion ("The usage limit has been reached") are both recognized as rate-limit-class failures, so the exhausted model takes a 16m cooldown and the next healthy model in the same tier takes over — mid-turn, without you switching anything.',
      },
      {
        q: 'Is there a version for DeepSeek Harness?',
        a: 'Yes — dsh-shift-router (v0.6.0), a DSH adaptation of the same router, realigned with upstream through v1.6.0. It plugs into the harness via cordis.patch.yml, routes through the harness\'s own agent/request pipeline, and has zero runtime dependencies of its own. Config lives two ways: a full GUI card (Settings → Plugins → Plugin configuration — the "Shift-Router" card, both tier chains editable) and an interactive /router config editor (get/set/unset/diff). Same capabilities as pi, including the acceptance audit and the three judge modes, plus /router allow-workers on|off, which writes your Fast chain into the harness\'s own subagent allowlist so delegated workers actually run on Fast. 424 unit tests plus a credential-free headless e2e. Install: git clone https://github.com/green-dalii/dsh-shift-router && npm install && npm run build, then dsh plugin --profile web add <path>.',
      },
      {
        q: 'On DeepSeek Harness, are subagents routed too?',
        a: 'No. Subagents spawned by the subagent tool carry origin === \'subagent\' and keep their model — the router only drives top-level agents. The worker model is pinned by deployment configuration (tool-subagent agentOptions), which by default means a worker inherits its parent\'s model. Since v0.6.0 you can fix that with /router allow-workers on: it writes your Fast-tier chain into the harness\'s subagent-model-selection allowlist so the orchestrator can pin workers to Fast. /router status shows the live counters (round x/max, esc y/threshold).',
      },
    ],
  },
  footer: {
    brand: 'Shift Router',
    tagline: 'Auto-route agent turns between a fast engineer and a smart CTO — on pi-coding-agent and DeepSeek Harness alike.',
    copyrightParts: {
      prefix: 'Open source under MIT · Built by ',
      author: { name: 'green-dalii', url: 'https://github.com/green-dalii' },
      suffix: '',
    },
    sections: {
      product: {
        title: 'Product',
        links: [
          { label: 'Quick Start', href: '#quick-start' },
          { label: 'How it works', href: '#how-it-works' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      resources: {
        title: 'Resources',
        links: [
          { label: 'pi-shift-router (GitHub)', href: 'https://github.com/green-dalii/pi-shift-router' },
          { label: 'pi-shift-router (npm)', href: 'https://www.npmjs.com/package/pi-shift-router' },
          { label: 'dsh-shift-router (GitHub)', href: 'https://github.com/green-dalii/dsh-shift-router' },
          { label: 'Issues', href: 'https://github.com/green-dalii/pi-shift-router/issues' },
          { label: 'Discussions', href: 'https://github.com/green-dalii/pi-shift-router/discussions' },
        ],
      },
      more: {
        title: 'More projects',
        links: [
          { label: 'greenerai.top', href: 'https://greenerai.top' },
          { label: 'Karpathy LLM Wiki', href: 'https://llmwiki.greenerai.top' },
        ],
      },
    },
    languageLabel: 'Language',
  },
};