import type { Translations } from './types';

export const en: Translations = {
  meta: {
    title: 'Pi Shift Router — Stop picking models, start coding',
    description:
      'A pi-coding-agent extension: a CTO for the work that matters, an engineer for the workload. Routine turns stay on a fast, cheap model; important work escalates to a frontier one automatically. Saves tokens, survives provider outages, zero risk to try.',
    keywords:
      'pi shift router, pi coding agent, llm router, model routing, ai coding, save tokens, reduce ai cost, fast smart tier, provider fallback, deepseek, openrouter, pi extension',
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
    badge: 'Open-source extension for pi-coding-agent',
    slogan: "It's a CTO for the work that matters, an engineer for the workload.",
    title1: 'Every turn,',
    title2: 'the right model.',
    subtitle:
      'Everyday coding runs on a cheap, fast model. Hard problems get the smart one. And when a provider stumbles, the router switches — automatically, mid-turn, so your work never stops.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Read the Docs',
    terminal: {
      title: 'pi-shift-router — in pi',
      subtitle: 'status bar · toasts · auto',
      statusLabel: 'router',
      statusModel: 'MiniMax-M3',
      statusTier: 'tier',
      statusTierValue: 'fast',
      statusMode: 'auto',
      judgeLabel: 'judge',
      judgeValue: '🧭 judging…',
      windowLabel: 'window',
      windowValue: '4/5 fast',
      logLines: [
        { time: '🦾', text: '[MiniMax-M3] → fix the failing test' },
        { time: '🧭', text: 'judging…' },
        { time: '🧠', text: '[kimi-k3] ← upgraded for the architecture question' },
        { time: '⚠️', text: 'MiniMax-M3 429 → switching to deepseek-v4-flash — retry in 1m' },
        { time: '🦾', text: '[deepseek-v4-flash] ← same-tier failover (v0.6.0)' },
      ],
    },
    trustStrip: [
      { label: 'Multi-provider', desc: 'auto-switch keeps your task running' },
      { label: 'No extra servers', desc: 'runs inside your Pi process' },
      { label: 'Open source MIT', desc: 'zero runtime deps' },
    ],
  },
  quickStart: {
    label: 'Quick Start',
    title: 'Up and running in three steps',
    subtitle: 'Install it and nothing changes — routing only starts once you pick your models. Fully reversible, no lock-in.',
    steps: [
      {
        title: 'Install',
        desc: 'One command. pi registers the extension in your settings and loads it on the next launch — no rebuild, no config files to touch.',
        hintTitle: 'Why it\'s safe to install',
        hintItems: [
          'Zero runtime dependencies — pure TypeScript, nothing new in node_modules',
          'Zero telemetry — no analytics, no tracking, no phone-home',
          'Zero backend — everything runs locally inside your pi session',
          'Ultra-lightweight — one small extension, loads in milliseconds',
          'Open source & auditable — read the whole codebase in an evening',
          'No lock-in — uninstall anytime; pi falls back to your default model',
        ],
      },
      {
        title: 'Pick your models',
        desc: 'Run /router config and pick a Fast model and a Smart model — the pair you already use. Save to user or project scope.',
        hintTitle: 'How to pick',
        hintItems: [
          'Fast — the best value-to-quality model in your stack, not the cheapest (the Judge runs on it, so its judgment matters too)',
          'Smart — a frontier model for the work that matters',
          'Add 2–3 models per tier and they form a fallback chain for 429/5xx',
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
          'Spend — how much each tier cost, and the baseline: what it would have cost without the router',
          'Turns / upgrades / downgrades — how often the router escalated or settled',
          'Cooldowns — models resting after a 429/5xx; they resume after backoff',
          'Window — the last 5 classifications driving the downgrade gate',
        ],
      },
    ],
  },
  models: {
    label: 'How it works',
    title: 'One simple idea',
    subtitle: 'Every task has a difficulty. Every model has a price. pi-shift-router matches the two — automatically.',
    intro:
      'Think of it like a team: the engineer handles the day-to-day fast and cheap; the CTO takes over the whole turn when the work matters. Same task, two minds — the router decides which one you need before you finish typing.',
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
      label: 'LLM Judge',
      title: 'A tiny call decides',
      desc: 'One small classification — by the fast-tier model itself — reads your request and picks fast or smart. No heavy reasoning, no delay you\'ll notice.',
      code: 'judgeTimeout: 5000',
    },
    window: {
      label: 'Downgrade gate',
      title: 'No flip-flopping',
      desc: 'Upgrades are instant when you need depth. Downgrades wait for a clear trend — fast votes in 5 of the last 5 classified turns — so the router never flickers between models mid-flow.',
      code: 'window: { size: 5, threshold: 0.6 }',
    },
    fallback: {
      label: 'Runtime failover',
      title: 'Failures, handled',
      desc: 'When a provider rate-limits or errors, that model cools down with exponential backoff (5xx from 1m; 429/quota from 16m, capped at 6h) and the next healthy one in the same tier takes over — you keep working through the outage.',
      code: 'cooldown: 1m → 4m → 16m → 1h → 4h → 6h',
    },
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
    intro: 'Two rules of thumb: Fast tier — pick the best value in your stack: strong quality per dollar, because this tier also powers the Judge (deepseek-v4-flash is the default pick — 0731 quality near Opus 5/GLM-5.2 territory at the low end of the price table). Smart tier — keep it on a frontier cloud model; local Smart is impractical under ~80 GB of VRAM, and even at 96 GB a flat-fee token plan usually wins.',
    patterns: [
      {
        title: 'Coding subscription plans',
        summary: 'One subscription, many models. Use a token gateway (one key proxying every major provider) or reuse a coding-tool subscription you already pay for — most expose an OpenAI-compatible endpoint.',
        fast: {
          models: [
            'deepseek-v4-flash',
            'gpt-5.6-luna  (OpenCode Zen / Go)',
            'qwen3.6-flash',
          ],
        },
        smart: {
          models: [
            'gpt-5.6-sol  (OpenCode Zen / Go)',
            'qwen3.8-max',
            'kimi-k3',
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
        summary: 'One provider, two tiers — simplest setup. Use this when you already pay for one vendor and don\'t want to juggle keys.',
        groupRows: [
          { group: 'Anthropic', fast: 'sonnet-5', smart: 'opus-5 / fable-5' },
          { group: 'OpenAI', fast: 'gpt-5.6-luna', smart: 'gpt-5.6-sol' },
          { group: 'Google', fast: 'gemini-3.5-flash-lite', smart: 'gemini-3.6-flash' },
          { group: 'Qwen (AliBaba)', fast: 'qwen3.7-plus', smart: 'qwen3.8-max' },
          { group: 'DeepSeek', fast: 'deepseek-v4-flash', smart: 'deepseek-v4-pro' },
          { group: 'Z.AI (GLM)', fast: 'glm-5 / glm-5-turbo', smart: 'glm-5.2' },
          { group: 'xAI (Grok)', fast: 'grok-4.5-fast', smart: 'grok-4.5' },
        ],
        bestFor: 'Simplest path from zero to routing — just two model IDs.',
      },
      {
        title: 'Cross-provider pairing',
        summary: 'Best-of-breed regardless of vendor. Default: deepseek-v4-flash for Fast, claude-opus-5 for Smart. Add fallbacks for resilience.',
        groupRows: [
          { group: 'Lowest cost', fast: 'deepseek-v4-flash', smart: 'claude-opus-5' },
          { group: 'Multi-provider fallback', fast: 'deepseek-v4-flash + glm-5.2', smart: 'claude-opus-5 + gpt-5.6-sol + kimi-k3' },
          { group: 'Flat-fee', fast: 'opencode-go/deepseek-v4-flash', smart: 'opencode-go/glm-5.2' },
          { group: '1 M context, long repo', fast: 'deepseek-v4-flash', smart: 'gemini-3.6-pro / kimi-k3' },
          { group: 'Multimodal', fast: 'deepseek-v4-flash', smart: 'claude-opus-5 (vision) / gemini-3.6-pro' },
          { group: 'Multilingual / Chinese-first', fast: 'deepseek-v4-flash', smart: 'qwen3.8-max' },
          { group: 'GDPR / Europe', fast: 'deepseek-v4-flash (via OpenRouter)', smart: 'mistral-medium-2604' },
        ],
        bestFor: 'Strongest model in each tier, regardless of who sells it.',
      },
    ],
    note: 'Pricing and model availability change monthly — refresh with `curl -s https://models.dev/api.json | jq` to see the latest. Full per-provider catalog lives at models.dev.',
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
        a: 'Completely. The router does nothing until you configure it, it is pure TypeScript with zero runtime dependencies, and /router off disables it instantly. No lock-in.',
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
        q: 'Can I force a specific model for one turn?',
        a: 'Yes. /route-force <tier> pins Smart or Fast for the next turn; /route-force <provider>/<model> pins an exact model. /route-force auto clears the override.',
      },
      {
        q: 'Does it work with models from different providers?',
        a: 'Yes — mix freely. Each tier is an ordered list of {provider, model, priority} pairs, so your fast tier can be DeepSeek and your smart tier Kimi, all from one config.',
      },
      {
        q: 'Can I monitor how it\'s performing?',
        a: 'Yes — run /router stats to see per-tier spend and savings, window size and confidence distribution (high / mid / low / none), cumulative upgrade and downgrade counts, and tokens-per-second. It reports cost telemetry: how much each tier spent and a baseline — what the session would have cost if every turn ran on your Smart model (i.e. no router). Spend: fast $0.045 (9 calls) · smart $0.42 (3 calls) · total $0.465, baseline $3.21, saved $2.74. The status bar also shows live throughput: [🧠 kimi-k3 • 23 tok/s].',
      },
      {
        q: 'How do I tune the downgrade behavior?',
        a: 'Two thresholds: `threshold` (default 0.6) controls how many of the last 5 classified turns must weigh toward fast before a downgrade happens; `minConfidence` (default 0.5) sets the floor below which votes are ignored entirely. Raise `threshold` to 0.8 to stay on Smart longer. Upgrades are always instant — only downgrades wait.',
      },
      {
        q: 'How is it different from pi-model-router and CC-Switch?',
        a: 'pi-model-router solves the same problem — per-turn routing in pi — with a different design. We think routing should need no rules: our Judge is pure LLM with JSON-mode enforcement, one readable prompt you can edit, and zero rule lists to maintain as new scenarios appear. It also fails over mid-turn on 429/5xx with exponential-backoff cooldown, where pi-model-router chains fallbacks at the profile level. Their extras — a hard USD budget cap, cross-session state, keyword pinning — are useful if you need those levers; ours stays a two-tier codebase you can read in an evening. CC-Switch is a different category entirely: a desktop app for managing provider configs across Claude Code, Codex, Gemini CLI, OpenCode and others. It switches configurations manually between sessions; pi-shift-router routes automatically within each turn — they can coexist.',
      },
    ],
  },
  footer: {
    brand: 'Pi Shift Router',
    tagline: 'Auto-routing Pi coding agent turns between a fast engineer and a smart CTO role.',
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
          { label: 'GitHub', href: 'https://github.com/green-dalii/pi-shift-router' },
          { label: 'npm', href: 'https://www.npmjs.com/package/pi-shift-router' },
          { label: 'Issues', href: 'https://github.com/green-dalii/pi-shift-router/issues' },
          { label: 'Discussions', href: 'https://github.com/green-dalii/pi-shift-router/discussions' },
        ],
      },
      more: {
        title: 'More projects',
        links: [
          { label: 'Karpathy LLM Wiki', href: 'https://llmwiki.greenerai.top' },
        ],
      },
    },
    languageLabel: 'Language',
  },
};