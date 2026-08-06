import type { Translations } from './types';

export const en: Translations = {
  meta: {
    title: 'Pi Shift Router — Smart routing for Pi\'s coding agent',
    description:
      'An auto-routing Pi coding agent extension that switches every turn between fast execution and smart reasoning models — an LLM judge picks the right tier, multi-model fallback chains keep you running, zero runtime dependencies.',
    keywords:
      'pi shift router, pi coding agent, llm router, model routing, ai coding, fast smart tier, code review, provider fallback, deepseek, openrouter, pi extension',
  },
  nav: {
    quickStart: 'Quick Start',
    models: 'Models',
    faq: 'FAQ',
    github: 'GitHub',
    languageLabel: 'Language',
    enLabel: 'English',
    zhLabel: '中文',
  },
  hero: {
    badge: 'Open source · Zero dependencies · Node 24+',
    title1: 'Every turn,',
    title2: 'the right model.',
    subtitle:
      'pi-shift-router routes every Pi turn to a fast execution model or a smart judgment model. A small LLM Judge picks the tier; fallback chains keep you running when a provider rate-limits.',
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
      judgeValue: '⚖ judging…',
      windowLabel: 'window',
      windowValue: '4/5 fast',
      logLines: [
        { time: '🦾', text: '[MiniMax-M3] → fix the failing test' },
        { time: '⚖', text: 'judging…' },
        { time: '🧠', text: '[kimi-k3] ← upgraded for the architecture question' },
        { time: '⚠️', text: 'MiniMax-M3 429 → switching to deepseek-v4-flash — retry in 1m' },
        { time: '🦾', text: '[deepseek-v4-flash] ← same-tier failover (v0.6.0)' },
      ],
    },
    trustStrip: ['Zero runtime deps', 'Open source MIT', '202 unit tests', 'Node 24+'],
  },
  quickStart: {
    label: 'Quick Start',
    title: 'Up and running in three steps',
    subtitle: 'Node.js ≥ 24 and pi-agent ≥ 0.80. One provider key, one model per tier.',
    steps: [
      {
        title: 'Install',
        desc: 'Install from npm with the pi package manager. It registers in ~/.pi/agent/settings.json and auto-loads on the next pi launch.',
        codeLabel: 'Install command',
        code: 'pi install npm:pi-shift-router',
      },
      {
        title: 'Configure',
        desc: 'Inside pi, run /router config and pick one Fast + one Smart model. Save to user or project scope. Both tiers start empty — nothing routes until you assign models.',
        codeLabel: 'Configure',
        code: '/router config',
      },
      {
        title: 'Verify',
        desc: '/router status shows your tiers and models; the next turn triggers the first Judge call. Tune later with /router quiet, /router verbose, and /route-force.',
        codeLabel: 'Verify',
        code: '/router status',
      },
    ],
  },
  models: {
    label: 'Models',
    title: 'Two tiers. One judge.',
    subtitle: 'Every turn is classified by mental mode — execution or judgment — and routed to the tier that fits.',
    fast: {
      label: 'Fast',
      title: 'Execution mode',
      desc: 'Coding, debugging, tests, docs, following patterns. The programmer — works a lot, thinks in patterns.',
      badge: '🦾 Programmer',
      bullets: [
        'Coding and debugging',
        'Tests and docs',
        'Following patterns',
      ],
    },
    smart: {
      label: 'Smart',
      title: 'Judgment mode',
      desc: 'Architecture, review, planning, security audit. The CTO — few turns, high impact, quality gate.',
      badge: '🧠 CTO',
      bullets: [
        'Architecture and review',
        'Planning and design',
        'Security audit',
      ],
    },
    judge: {
      label: 'LLM Judge',
      title: 'The fast-tier model judges',
      desc: 'A small LLM — the fast-tier model itself — classifies each turn as fast or smart in JSON mode. OpenAI-compatible APIs enforce response_format; Anthropic uses an assistant prefill.',
      code: 'judgeTimeout: 5000',
    },
    window: {
      label: 'Downgrade gate',
      title: 'Upgrades are instant, downgrades wait',
      desc: 'Upgrades (Fast → Smart) are immediate — quality first. Downgrades need a sustained trend: fast votes ≥ 60% of the last 5 classified turns.',
      code: 'window: { size: 5, threshold: 0.6 }',
    },
    fallback: {
      label: 'Runtime failover',
      title: 'Cooldown, then next in tier',
      desc: 'On 429/5xx the failing model enters exponential-backoff cooldown (1m → 2m → 4m … capped 30m) and the next healthy model in the same tier takes over — same turn, no cross-tier.',
      code: 'cooldown: 1m → 2m → 4m → 30m',
    },
  },
  faq: {
    label: 'FAQ',
    title: 'Questions, answered',
    subtitle: 'Straight from the README.',
    items: [
      {
        q: 'What if I don\'t configure any models?',
        a: 'Both tiers start empty. The router is a no-op — pi uses its default model. Run /router config to assign one Fast and one Smart model.',
      },
      {
        q: 'Does the Judge add noticeable latency?',
        a: 'A Judge call costs a few thousand tokens at your Fast-tier pricing. End-to-end classification is typically 200ms–2s, and the status bar shows ⚖ judging… during the call.',
      },
      {
        q: 'What if my primary model 429s or times out?',
        a: 'Exponential-backoff cooldown: the primary enters cooldown (1m → 2m → 4m … capped 30m) and the next healthy model in the same tier takes over. A 2xx response clears the cooldown immediately.',
      },
      {
        q: 'Can I force a tier or model for one turn?',
        a: 'Yes. /route-force <tier> pins Smart or Fast for the next turn; /route-force <provider>/<model> pins a specific model. /route-force auto clears the override. Manual override always bypasses cooldowns.',
      },
      {
        q: 'Does this work across different providers?',
        a: 'Yes. Each tier stores an ordered list of {provider, model, priority} pairs — mix freely. The Judge walks the full fast-tier chain before giving up, sharing the same cooldown map as routing.',
      },
      {
        q: 'How is it different from pi-model-router and pi-smart-router?',
        a: 'They solve different problems and can be used together: pi-shift-router is an LLM-as-classifier with zero runtime deps and runtime failover; pi-model-router adds 3 tiers, USD budget and keyword rules; pi-smart-router does local ONNX ML inference.',
      },
    ],
  },
  footer: {
    brand: 'Pi Shift Router',
    tagline: 'Auto-routing Pi coding agent turns between fast execution and smart reasoning models.',
    copyright: 'Open source under MIT. By green-dalii.',
    sections: {
      product: {
        title: 'Product',
        links: [
          { label: 'Quick Start', href: '#quick-start' },
          { label: 'Models', href: '#models' },
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
    },
    languageLabel: 'Language',
  },
};