import type { Translations } from './types';

export const en: Translations = {
  meta: {
    title: 'Shift Router — The right model for every message',
    description:
      'A model router for pi-coding-agent and DeepSeek Harness. A small judge reads each message and sends it to either a cheap fast model or a strong one, so the expensive model handles only what needs it. When a provider fails the next one takes over, and a big job gets planned by the strong model and split across cheap ones.',
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
    badge: 'For pi-coding-agent and DeepSeek Harness',
    subhead: 'A small judge decides. When it cannot, it leaves your model alone.',
    headline1: 'Never let the CTO do the engineer\u2019s job.',
    headline2: 'And vice versa.',
    subtitle:
      'You name two models: a cheap, fast one and a strong one. Before each message runs, a smaller model reads it and picks which one handles it. The cheap one takes code, tests, and small fixes. The strong one takes architecture, security, and the decisions you would rather not make twice. Judging costs a few thousand tokens and about a second.',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'pi-shift-router docs',
    ctaTertiary: 'dsh-shift-router docs',
    terminal: {
      title: 'pi-shift-router — in pi',
      subtitle: 'status bar · toasts · auto',
      statusLabel: 'router',
      statusModel: 'deepseek-flash',
      statusTier: 'tier',
      statusTierValue: 'fast',
      statusMode: 'auto',
      judgeLabel: 'judge',
      judgeValue: '🧭 judging…',
      windowLabel: 'gear',
      windowValue: 'default',
      logLines: [
        { time: '🦾', text: '[deepseek-flash] → fix the failing test' },
        { time: '🧭', text: 'judging…' },
        { time: '🧠', text: '[Claude Opus] ← upgraded for the architecture question' },
        { time: '⚠️', text: 'Claude Opus 429 → switching to gpt-astra — retry in 1m' },
        { time: '🧠', text: '[gpt-astra] ← strong tier takes over' },
      ],
    },
    trustStrip: [
      { label: 'Any provider', desc: 'when one is down, the next one takes over' },
      { label: 'Nothing to run', desc: 'it lives inside your agent — no server, no database' },
      { label: 'MIT, nothing to pull in', desc: 'turn it off any time, or delete it' },
    ],
  },
  family: {
    label: 'The family',
    title: 'Two agents, one router.',
    subtitle: 'Same features, same commands, same defaults. Install one.',
    products: [
      {
        name: 'pi-shift-router',
        version: 'v1.8.0',
        edition: 'for pi-coding-agent',
        desc: 'The original. One command in pi, and it starts deciding. Big jobs can be split across cheap workers.',
        highlights: ['No runtime dependencies · ~409 kB', 'Judge modes: LLM chain or decision model', '641 unit tests'],
        links: [
          { label: 'GitHub', href: 'https://github.com/green-dalii/pi-shift-router' },
          { label: 'npm', href: 'https://www.npmjs.com/package/pi-shift-router' },
        ],
      },
      {
        name: 'dsh-shift-router',
        version: 'v0.7.5',
        edition: 'for DeepSeek Harness',
        desc: 'Install as a plugin, then set it up in Settings or run /router config.',
        highlights: ['No dependencies of its own', 'GUI config card + live commands', '443 tests · credential-free e2e'],
        links: [{ label: 'GitHub', href: 'https://github.com/green-dalii/dsh-shift-router' }],
      },
    ],
    note: 'They release separately, so the DeepSeek Harness version can lag a release.',
  },
  quickStart: {
    label: 'Quick Start',
    title: 'Install it. Name two models. Done.',
    subtitle: 'Those are the only two things you set. Everything after that is automatic, and /router off turns it back off.',
    runtimes: [
      {
        id: 'pi',
        name: 'pi-shift-router',
        steps: [
          {
            title: 'Install',
            desc: 'One command. pi adds it to your settings and loads it the next time you start.',
            hintTitle: 'What you\'re adding',
            hintItems: [
              { label: 'Nothing extra', desc: 'it brings no packages of its own — the one host package it uses is already in pi' },
              { label: 'No telemetry', desc: 'it collects nothing and adds no background process' },
              { label: 'Nothing to undo', desc: 'remove it and pi goes back to whichever model you picked' },
            ],
          },
          {
            title: 'Pick your models',
            desc: 'Run /router config and pick two: one cheap and fast, one strong. Save them for yourself, or just for this project.',
            hintTitle: 'How to pick',
            hintItems: [
              { label: 'The cheap one', desc: 'the best value you have, not the absolute cheapest — the judge runs on it too, so its judgment counts' },
              { label: 'The strong one', desc: 'a frontier model, for the work that matters' },
              { label: 'More than one', desc: 'put 2–3 in each list and they take over for each other when one gets rate-limited' },
            ],
            link: {
              label: 'See recommended pairings',
              href: '/models',
            },
          },
          {
            title: 'Watch it work',
            desc: '/router status opens a dashboard showing what it decided and what it cost. Your next message is the first one it routes.',
            hintTitle: 'What the output means',
            hintItems: [
              { label: 'Cost', desc: 'what each side spent, and what the session would have cost without the router' },
              { label: 'Switches', desc: 'how often it went up to the strong model, and how often it came back down' },
              { label: 'Paused', desc: 'which models are waiting after a rate limit, and when they come back' },
              { label: 'Gear', desc: 'how willing it is to spend — /router eco, default, or sport' },
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
            desc: 'Clone it, build it, register it in your harness profile. No credentials needed, and the defaults are safe.',
            hintTitle: 'The bundle',
            hintItems: [
              { label: 'Prepare', desc: 'git clone …/dsh-shift-router && npm install && npm run build' },
              { label: 'Register', desc: 'dsh plugin --profile web add /path/to/dsh-shift-router' },
              { label: 'Live config', desc: 'Settings → shift-router, or /router config — saved on the spot, no restart' },
            ],
          },
          {
            title: 'Pick your models',
            desc: 'Do it in the Settings card, or with /router config. Both write to the same place.',
            hintTitle: 'How to pick',
            hintItems: [
              { label: 'The cheap one', desc: 'the best value you have — the judge runs on it too' },
              { label: 'The strong one', desc: 'a frontier model, for the work that matters' },
              { label: 'More than one', desc: 'put 2–3 in each list and they take over for each other when one gets rate-limited' },
            ],
          },
          {
            title: 'Watch it work',
            desc: '/router status shows your two lists and whether orchestration is on. The next message you send is the first one it routes.',
            hintTitle: 'What the output means',
            hintItems: [
              { label: 'Your lists', desc: 'the cheap one, which the judge also runs on, and the strong one' },
              { label: 'Orchestration', desc: 'auto or idle — whether big jobs get split across cheap workers' },
              { label: 'Cost', desc: 'what each side spent, against running everything on the strong model' },
            ],
          },
        ],
      },
    ],
  },
  models: {
    label: 'How it works',
    title: 'Most of your work does not need the strong model.',
    subtitle: 'A cheap model and a strong one can differ by 4× to 50×. So the strong one handles only what needs it.',
    intro:
      'Simple work sent to the strong model wastes the price difference. Hard work left on the cheap one costs more: you send it again, you pay for the strong model anyway, and you lose an afternoon finding out. So the router leans expensive — roughly one message in three earns the strong model. Below that, it would rather change nothing than guess.',
    valueProps: [
      {
        title: 'Most of what you ask is small.',
        desc: 'A rename, a new test, a typo. That does not need a frontier model, and the cheap one is faster at it.',
      },
      {
        title: 'The decision is nearly free',
        desc: 'One small call, one or two seconds, billed at your cheap model\'s price. Turn down one strong call and you have covered hundreds of them.',
      },
      {
        title: 'A provider having a bad day',
        desc: 'Rate limit, timeout, an account out of credit — the next model you listed for that job takes over, usually within the same message. It never switches to the expensive side on its own.',
      },
    ],
    fast: {
      tier: 'Fast',
      role: 'Engineer',
      emoji: '🦾',
      desc: 'Code, tests, bug fixes, the same edit across a hundred files. The answer is already decided; someone just has to carry it out accurately. A rename should not cost flagship prices.',
      bullets: [
        'Code, tests, bug fixes',
        'The same edit across many files',
        'Anything low-stakes',
      ],
    },
    smart: {
      tier: 'Smart',
      role: 'CTO',
      emoji: '🧠',
      desc: 'Less of your work, and none of it safe to get wrong. Architecture, security, the review that changes what you build next, the decision you would rather not make twice. It runs the whole message, so the code is its own.',
      bullets: [
        'Architecture and design calls',
        'Reviews that change what happens next',
        'Anything hard to undo',
      ],
    },
    judge: {
      label: 'The judge',
      title: 'One small call per message',
      desc: 'A small model reads your message and answers two things: which model, and how sure it is. That number is the chance this message needs the strong one. It is the only decision in the system — after it, the model you picked works at its own level.',
      code: 'judge: { mode: fast-chain | custom | decision }',
    },
    window: {
      label: 'The bar',
      title: 'One knob',
      desc: 'R, default 3, which puts the bar at about one message in three. Turn it up to be stingier, down to be freer. Or take a preset: /router eco, /router default, /router sport.',
      code: 'economics: { reworkPenalty: 3, downgradeMemory: 2 }',
    },
    fallback: {
      label: 'When things break',
      title: 'The next model, not a retry',
      desc: 'Rate limit, server error, or an empty balance — that model waits longer each time it fails, and the next model you listed for the job takes over, usually within the same message. If the judge cannot be reached either, it falls back: another judge, then no routing at all. It never invents an answer to keep going.',
      code: 'cooldown: 1m → 4m → 16m → 1h → 4h → 6h',
    },
    orchestration: {
      label: 'When one model is not enough',
      title: 'Split it rather than upgrade it',
      desc: 'Some work is not a harder version of the same thing. It is several things. There the strong model stops working alone: it plans the job, writes the instructions for one cheap worker on a piece at a time, reads what comes back, and sends it out again if it is not right. Simple messages never go through this.',
      bullets: [
        'Plan, write the instructions, check, repeat, accept',
        'After every run it checks: was the answer backed by anything, did it answer the question, is any of it a placeholder',
        "Each worker's cost is counted on its own line, not folded into the main bill",
        'Workers start with no history, which is what keeps them small — about $0.004 for one narrow job, against $0.06 for copying a 176k-token conversation into a new session',
        'Two hard stops: three rounds, or two failed workers on the same piece before the strong model takes it over',
        'Needs pi-subagents; without it, complex messages simply run on the strong model, as they always did',
      ],
    },
  },
  judgeModes: {
    label: 'Judge modes',
    title: 'Three ways it can decide',
    subtitle: 'By default the decision comes from the cheap model that also does the work. You can change that.',
    modes: [
      {
        id: 'fast-chain',
        name: 'The cheap model',
        badge: 'default',
        desc: 'Uses the cheap model you already have for regular work. Nothing to set up.',
      },
      {
        id: 'custom',
        name: 'One separate model',
        badge: '',
        desc: 'Let one specific model do all the deciding, separate from the ones doing the work. Useful if you have a model you trust with decisions.',
      },
      {
        id: 'decision',
        name: 'A model built for decisions',
        badge: 'Beta',
        desc: 'Built to do exactly this: give it a question, it returns an answer and how sure it is. It cannot return a broken reply, and it costs about $0.0001 a message. Since pi 1.8 it runs through pi\'s own classifier layer, which carries 53 of them — Jev, OpenAI Decisions, Cloudflare Clef, Perplexity Decider. It is marked Beta because it is still slow.',
      },
    ],
    honest: 'Decision models are off by default, and that is a decision rather than caution. They are slow right now — 1.4 to 6.6 seconds a verdict, which is the provider still ramping up capacity. They suit batch work and background tasks. For a message you are sitting and waiting on, use the LLM judge. If one stops answering, the router falls back to your LLM judge.',
  },
  gearPresets: {
    label: 'Gear presets',
    title: 'One knob, three speeds',
    subtitle: 'Take a speed. The presets set the knob for you.',
    gears: [
      { id: 'eco', name: 'eco', threshold: 'θ 0.5', desc: 'Uses the strong model less. Only messages that clearly need it get it. Cheapest.' },
      { id: 'default', name: 'default', threshold: 'θ 0.33', desc: 'Where it starts. When the two look about equal, it takes the strong one.' },
      { id: 'sport', name: 'sport', threshold: 'θ 0.2', desc: 'Uses the strong model freely. Any real chance a message needs it, it goes. For mostly architecture and planning.' },
    ],
  },
  useCases: {
    label: 'Use cases',
    title: 'Where the models come from',
    subtitle: 'Any mix works. Each side is a list of models, best first.',
    scenarios: [
      {
        title: 'Several providers',
        desc: 'Two or three models on each side. If one runs out of quota, the next one takes over.',
      },
      {
        title: 'One provider, two levels',
        desc: 'One bill, one set of limits. Their cheap model for the day, their best model for the hard messages.',
      },
      {
        title: 'Local plus cloud',
        desc: 'The cheap model runs on your own machine, the strong one in the cloud. Routine work never leaves the computer, and hard messages still get the best model.',
      },
    ],
    cta: {
      label: 'See recommended model pairings',
      href: '/models',
    },
  },
  modelsPage: {
    label: 'Models',
    title: 'Choosing your two models',
    intro: 'Two rules, and they hold on pi and DeepSeek Harness alike. For the cheap side, take the best value you have rather than the absolute cheapest — the judge runs on that model too, so its quality is part of what you are buying. For the strong side, stay on a frontier cloud model; running one locally is painful below about 80 GB of memory, and even at 96 GB a flat-fee plan usually wins. We list tier names — Flash, Luna, Haiku, K3 — instead of model IDs: IDs change with every release, tier names do not. After you install, run /model and see which one you have.',
    patterns: [
      {
        title: 'Coding subscription plans',
        summary: 'One subscription already covers several models. Either point a gateway at it (one key that can reach every major provider) or reuse a coding-tool subscription you are already paying for — most of them speak the OpenAI API.',
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
        note: 'Subscriptions you can reuse: OpenCode Zen (OpenAI-compatible endpoint), GitHub Copilot (BYOK, OpenAI and Anthropic), Cursor (Pro / Pro+ / Ultra pools), OpenAI Codex (comes with ChatGPT Plus, Pro or Business).',
        bestFor: 'Nothing new to sign up for. One bill.',
      },
      {
        title: 'Local models by memory',
        summary: 'Fast tier on a quantized model running locally (q4-k-m, NVFP4, MXFP4, AWQ-int4, or 1–2 bit ternary). Past 64 GB of VRAM or unified memory, Smart can run locally too. Roughly, VRAM = parameters × 0.6 at Q4_K_M.',
        groupRows: [
          { group: '≤ 32 GB', fast: 'LFM2.5-8B-A1B (8.5B), granite-4.1-8b (8.8B), Qwen3.6-27B (dense, q4 ≈ 14 GB), gemma-4-26b-a4b-it (q4 ≈ 13 GB), Qwen3.6-35B-A3B (MoE 36B/3B, q4 ≈ 18 GB), Laguna-XS-2.1 (MoE 33B/3B, q4 ≈ 17 GB), Ternary-Bonsai-27B (1.58-bit ≈ 7 GB, laptop/phone)', smart: 'Cloud frontier model' },
          { group: '32–128 GB', fast: 'Fable-Fusion-711-NEO-MAX-MTP GGUF (27B, 2026-07, best post-trained), gemma-4-31B-it (q4 ≈ 16 GB), Laguna-S-2.1 (117.6B, q4 ≈ 59 GB — needs 64 GB+)', smart: 'Fable-Fusion-711 base weights, or cloud frontier' },
          { group: '≥ 128 GB', fast: 'Fable-Fusion-711-NEO-MAX-MTP GGUF (same pick — post-training beats raw size)', smart: 'DeepSeek-V4-Flash (284 B MoE / 13 B active, UD-Q4_K_XL ≈ 155 GB — needs 192 GB+ unified memory; on 128 GB-class use 1–2 bit ternary)' },
        ],
        note: 'The sizes above are quantized — what you actually run, not fp16. The AxxB suffix on a MoE model is active parameters per token: it changes how fast it computes, not how much disk it takes, because a GGUF or q4 file still stores every expert weight. Qwen3.6-27B hits 77.2% on SWE-bench Verified, the strongest open-weight model that fits a 24 GB card. Under roughly 256 GB of unified memory, local Smart rarely beats a flat-fee token plan on value — run it locally for privacy or air-gapped work, not to save money.',
        bestFor: 'Privacy, or work that cannot leave your machine. Only the hard turns go to the cloud.',
      },
      {
        title: 'Same-provider tier ladder',
        summary: 'One vendor, two tiers. Pick this if you already pay someone and would rather not juggle keys. The right column runs cheapest to strongest, so it doubles as your fallback order.',
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
        bestFor: 'The shortest path from nothing to routing. One vendor, one bill, one rate-limit pool.',
      },
      {
        title: 'Cross-provider pairing',
        summary: 'The strongest model in each tier, whoever sells it. This is where routing pays for itself: the price gap does the saving and the vendor split does the resilience, so one provider going down does not take you with it.',
        groupRows: [
          { group: 'Coding, lowest cost', fast: 'any DeepSeek V4 Flash', smart: 'any Anthropic Opus class' },
          { group: 'Coding, multi-provider fallback', fast: 'DeepSeek V4 Flash + GLM-5.x-Flash', smart: 'Anthropic Opus + GPT-5.x Sol + Kimi K3' },
          { group: 'Coding, flat-fee (best $/quality)', fast: 'OpenCode Go Flash class', smart: 'OpenCode Go strongest (Grok / GPT Luna / Kimi K3)' },
          { group: '1 M context, long repo or PDF research', fast: 'any Flash class with 1 M ctx', smart: 'Kimi K3 or Gemini Pro' },
          { group: 'Multimodal (image / video)', fast: 'any Flash class', smart: 'Anthropic Opus (vision) or Gemini Pro' },
          { group: 'Multilingual, Chinese-first', fast: 'any Flash class', smart: 'Qwen Max' },
          { group: 'Europe / GDPR preference', fast: 'DeepSeek Flash (via OpenRouter)', smart: 'Mistral medium' },
        ],
        bestFor: 'The best model in each tier, whoever makes it.',
      },
    ],
    note: 'One more requirement: the judge needs an endpoint that supports JSON mode. Any current Flash-class model does (Qwen 3.5+, Gemma 4, MiMo V2.x). A local judge adds roughly 0.5–2 s per turn. A good starting point is Fast locally, Smart in the cloud, and the judge on whichever Smart model you trust most for your kind of work. Model IDs and prices move every month — the upstream docs track them with `curl -s https://models.dev/api.json | jq`, and the full catalog lives at models.dev.',
  },
  faq: {
    label: 'FAQ',
    title: 'Questions, answered',
    subtitle: 'The short answers.',
    items: [
      {
        q: 'Is it safe to try?',
        a: 'Yes. Until you pick two models it does nothing at all and your agent keeps the model it already had. /router off turns it off immediately, and deleting the folder leaves you exactly where you were.',
      },
      {
        q: 'Does this actually save money?',
        a: 'Yes, as long as your work is mixed. Routine messages stop paying flagship prices, and the decision itself costs a few thousand tokens and 200 milliseconds to 2 seconds at the cheap model\'s price — turn down one strong call and you have paid for hundreds of them. If every message you send is genuinely hard, it will not save you anything.',
      },
      {
        q: 'What exactly does the strong model do?',
        a: 'The same work, with a stronger model behind it. It thinks, calls tools, edits files, and keeps going until the task is done — it writes the code, rather than leaving notes on someone else\'s. What changes is when it gets used: architecture, security, review, anything you would rather not redo.',
      },
      {
        q: 'What is a decision model?',
        a: 'Most routers ask an LLM whether a message is hard, then parse JSON out of the reply. A decision model is built for only that: hand it typed questions and it returns the option plus a probability — fast, 0.99. The router compares 0.99 to the bar and moves on. Nothing to parse means nobody has to recover from a model that added a comma, and a missing field means no verdict rather than a guess. A verdict costs input tokens only — about $0.0001 a turn. TypeSafe\'s Jev started it; OpenAI, Cloudflare and Perplexity followed, pi 1.8 carries the transport for all of them, and /router config lists what your install can actually reach. It is off by default: 1.4 to 6.6 seconds a verdict is slower than the LLM judge, so it suits batch and background work, and it steps down to your LLM judge if it stops answering.',
      },
      {
        q: 'What happens when a model — or the judge — fails?',
        a: 'You keep working. A rate limit, a server error, an empty balance, or Codex running out of its usage all count: that model waits — 1 minute for a server error, 16 for the rest, longer each time it fails, up to six hours — and the next model in your list takes over, sometimes mid-message. It never crosses to the expensive side, so a strong-model call stays strong. The judge does not guess either: when it cannot reach a verdict it keeps your current model, then falls back to another judge, then to no routing at all.',
      },
      {
        q: 'What is orchestration, and does it cost more?',
        a: 'On a message the judge calls complex, the strong model stops working alone: it plans the job, gives one cheap worker a piece at a time, reads the result, and sends it back if it is not right. It does not cost more — planning runs on the strong model, the implementing on workers that start with no history (~$0.004 for a narrow job, against $0.06 for copying a 176k-token conversation), and two hard stops keep it bounded. Every worker must hand back a failure note; send the same note twice and the strong model does that piece itself. On by default, needs pi-subagents, and /router orchestrate off turns it off.',
      },
      {
        q: 'Can I control it?',
        a: 'Three ways. /router status shows the model in use, the last decision and why, which models are paused, and what each side spent against what the session would have cost on the strong model alone. One number sets how eager it is: R, default 3 — higher is stingier (R=2 for routine work, R=5 for architecture), or take a preset with /router eco, default or sport. To take over for one message, /route-force pins the tier or an exact model and /route-force auto clears it. /router off hands you the wheel for good.',
      },
      {
        q: 'How is it different from the alternatives?',
        a: 'OpenRouter Auto Router optimizes for quality, not your bill — their docs say routing to an expensive model is working as designed — and you do not set the lists, see the decision, or choose the failure mode. Cloudflare AI Gateway is versioned flows with quotas, but you draw the graph and it sees requests, not tasks. Among pi routers, pi-bifrost runs 7-step rules across 4 tiers and saves subscription quota rather than money; pi-smart-router runs a 12-step local pipeline with no LLM and needs a local database. This keeps the decision to one prompt you can read, two lists you can hold in your head, and every verdict visible in /router status.',
      },
      {
        q: 'Is there a version for DeepSeek Harness?',
        a: 'Yes — dsh-shift-router (v0.7.5), the same router on the harness, with no dependencies of its own. Install it as a plugin, then set both lists in the Settings card or with /router config. Everything here carries over, plus /router allow-workers on, which puts your cheap list in the harness\'s subagent allowlist so delegated workers really do run on the cheap model. 443 unit tests and a credential-free e2e. To install: git clone https://github.com/green-dalii/dsh-shift-router && npm install && npm run build, then dsh plugin --profile web add <path>.',
      },
    ],
  },
  footer: {
    brand: 'Shift Router',
    tagline: 'MIT licensed. Read it, fork it, use it.',
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