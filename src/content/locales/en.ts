import type { Translations } from './types';

export const en: Translations = {
  meta: {
    title: 'Pi Shift Router — Stop picking models, start coding',
    description:
      'A pi-coding-agent extension that automatically sends routine coding to a fast, cheap model — and escalates complex work to a frontier one. Saves tokens, survives provider outages, zero risk to try.',
    keywords:
      'pi shift router, pi coding agent, llm router, model routing, ai coding, save tokens, reduce ai cost, fast smart tier, provider fallback, deepseek, openrouter, pi extension',
  },
  nav: {
    quickStart: 'Quick Start',
    howItWorks: 'How it works',
    faq: 'FAQ',
    github: 'GitHub',
    languageLabel: 'Language',
    enLabel: 'English',
    zhLabel: '中文',
  },
  hero: {
    badge: 'Open-source extension for pi-coding-agent',
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
        desc: 'One command. pi registers it in your settings and loads it on the next launch — no rebuild, no config files to touch.',
        codeLabel: 'Install command',
        code: 'pi install npm:pi-shift-router',
      },
      {
        title: 'Pick your models',
        desc: 'Run /router config and choose one fast model and one smart model — the pair you already use. Save to user or project scope.',
        codeLabel: 'Configure',
        code: '/router config',
      },
      {
        title: 'Watch it work',
        desc: '/router status shows your setup; the next turn runs the first classification. From there it\'s automatic — tune later with /router quiet and /route-force when you want control.',
        codeLabel: 'Verify',
        code: '/router status',
      },
    ],
  },
  models: {
    label: 'How it works',
    title: 'One simple idea',
    subtitle: 'Every task has a difficulty. Every model has a price. pi-shift-router matches the two — automatically.',
    intro:
      'Think of it like a team: the Programmer writes code fast and cheap; the CTO steps in when the stakes are high. Same task, two minds — the router decides which one you need before you even finish typing.',
    valueProps: [
      {
        title: 'Routine work stays cheap',
        desc: 'The judge only upgrades when a task actually needs depth — everyday coding keeps running on your budget model, and expensive flagships are reserved for what matters.',
      },
      {
        title: 'The deciding is nearly free',
        desc: 'One tiny classification call — a few thousand tokens at your cheapest price, 200ms–2s. The savings from skipping unnecessary smart turns dwarf it.',
      },
      {
        title: 'Keeps working when a provider hiccups',
        desc: 'If a model 429s or times out, it cools down and the next healthy model in the same tier takes over — mid-turn, no action needed from you.',
      },
    ],
    fast: {
      label: 'Fast',
      title: 'Programmer',
      desc: 'Your everyday coder. Fast on routine work — writing code, running tests, fixing bugs — so you don\'t waste a flagship model on a rename or a refactor.',
      badge: '🦾 Your daily worker',
      bullets: [
        'Day-to-day coding and fixes',
        'Tests and mechanical changes',
        'Routine, low-stakes work',
      ],
    },
    smart: {
      label: 'Smart',
      title: 'CTO',
      desc: 'Your architect for the hard stuff — architecture, design review, security, multi-step plans, irreversible changes. It doesn\'t just review; it does the work.',
      badge: '🧠 For the hard stuff',
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
      desc: 'When a provider rate-limits or errors, that model cools down (1m → 30m) and the next healthy one in the same tier takes over — you keep working through the outage.',
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
        a: 'Nothing changes. Both tiers start empty — the router does nothing and pi keeps using your default model. Routing only begins once you run /router config and pick your models.',
      },
      {
        q: 'Does this actually save money?',
        a: 'Yes. Routine turns stay on your cheapest model instead of burning a flagship on every request. The judge itself costs a few thousand tokens at your fast-tier price — the savings dwarf it.',
      },
      {
        q: 'Is it safe to try?',
        a: 'Completely. The router does nothing until you configure it, it is pure TypeScript with zero runtime dependencies, and /router off disables it instantly. No lock-in.',
      },
      {
        q: 'What exactly does the smart tier do?',
        a: 'It\'s the architect role — for complex work it drives the whole turn: architecture, design review, security, multi-step plans, irreversible changes. It doesn\'t just advise or review; it writes the code and does the work itself.',
      },
      {
        q: 'Does the Judge add noticeable latency?',
        a: 'No. The classification call is a few thousand tokens and takes about 200ms–2s. You\'ll see ⚖ judging… in the status bar during the call — most users never notice it.',
      },
      {
        q: 'What if my primary model 429s or times out?',
        a: 'You keep working. The failed model enters a short cooldown (1m → 2m → 4m … capped 30m) and the next healthy model in the same tier takes over automatically — even mid-turn. A successful response clears the cooldown.',
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
        q: 'How is it different from pi-model-router and pi-smart-router?',
        a: 'They solve different problems and can be used together: pi-shift-router is an LLM-as-classifier with zero runtime deps and runtime failover; pi-model-router adds 3 tiers, USD budget and keyword rules; pi-smart-router does local ONNX ML inference.',
      },
    ],
  },
  footer: {
    brand: 'Pi Shift Router',
    tagline: 'Auto-routing Pi coding agent turns between a fast Programmer and a smart CTO role.',
    copyright: 'Open source under MIT. By green-dalii.',
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
      friends: {
        title: 'Friends',
        links: [
          { label: 'Karpathy LLM Wiki', href: 'https://llmwiki.greenerai.top' },
        ],
      },
    },
    languageLabel: 'Language',
  },
};