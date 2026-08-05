import type { Translations } from './types';

export const en: Translations = {
  meta: {
    title: 'Pi Shift Router — Smart routing for Pi\'s coding agent',
    description:
      'A Pi extension that watches each turn, picks the right tier (Fast for execution, Smart for judgment), and routes through the providers you already pay for — with priority fallback when one blinks.',
    keywords:
      'pi shift router, pi coding agent, llm router, model routing, ai coding, fast smart tier, code review, provider fallback, deepseek, openrouter',
  },
  nav: {
    quickStart: 'Quick Start',
    models: 'Models',
    faq: 'FAQ',
    github: 'GitHub',
    install: 'Get the Extension',
    languageLabel: 'Language',
    enLabel: 'English',
    zhLabel: '中文',
  },
  hero: {
    badge: 'Open source · Provider-agnostic · Local judge',
    title1: 'Every turn,',
    title2: 'the right model.',
    subtitle:
      'Pi Shift Router watches what you ask, picks the tier that fits, and routes through the providers you already pay for — with priority fallback when one blinks.',
    ctaPrimary: 'Install the Extension',
    ctaSecondary: 'Read the Config',
    terminal: {
      title: 'pi-shift-router — live',
      subtitle: '~/.pi/agent/sessions/current · auto',
      statusLabel: 'router',
      statusModel: 'deepseek-v4-flash',
      statusTier: 'tier',
      statusTierValue: 'fast',
      statusMode: 'auto',
      judgeLabel: 'judge',
      judgeValue: 'fast · 312ms',
      windowLabel: 'window',
      windowValue: '4/5 fast',
      logLines: [
        { time: '14:02:11', text: '[router] judge=fast latency=312ms window=4/5' },
        { time: '14:02:14', text: '[router] tier=fast model=deepseek-v4-flash provider=opencode-go priority=1' },
        { time: '14:02:38', text: '[router] judge=smart latency=487ms window=2/5' },
        { time: '14:02:39', text: '[router] tier=smart model=deepseek-v4-flash provider=opencode-go priority=1' },
      ],
    },
    trustStrip: ['12+ providers', 'Open source MIT', 'Runs in your Pi process'],
  },
  quickStart: {
    label: 'Quick Start',
    title: 'Three minutes to smarter routing',
    subtitle: 'Drop the extension in, edit one JSON, restart Pi.',
    steps: [
      {
        title: 'Install',
        desc: 'Clone the repo and link the extension into your Pi agent directory. Pi picks it up on next start — no rebuild, no registry.',
        codeLabel: 'Install command',
        code: 'git clone https://github.com/green-dalii/pi-shift-router.git\nln -s "$(pwd)/pi-shift-router" ~/.pi/agent/extensions/pi-shift-router',
      },
      {
        title: 'Configure',
        desc: 'Edit ~/.pi/agent/pi-shift-router.json — tiers, model priority chains, judge timeout, smoothing window, UX flags. A starter template ships in the repo.',
        codeLabel: 'Config path',
        code: '~/.pi/agent/pi-shift-router.json',
      },
      {
        title: 'Use Pi',
        desc: 'Restart Pi. The status bar shows the active tier; inline toasts surface every route decision. Switch to verbose mode any time to see the full trace.',
      },
    ],
  },
  models: {
    label: 'Models',
    title: 'Two tiers. One config.',
    subtitle: 'Group models by what they are good at. Let the judge route each turn to the right one.',
    fast: {
      label: 'Fast',
      title: 'Execution mode',
      desc: 'Daily coding, debugging, following patterns. Cheap, quick, sharp on repetitive work — the model you forget you\'re paying for.',
      badge: '~$0.001 / turn',
      bullets: [
        'Typing out a feature from a clear spec',
        'Mechanical refactors across many files',
        'Test scaffolding and bulk find-and-replace',
      ],
    },
    smart: {
      label: 'Smart',
      title: 'Judgment mode',
      desc: 'Architecture, planning, code review, trade-off analysis. Spend tokens where reasoning matters — not on every keystroke.',
      badge: '~$0.05 / turn',
      bullets: [
        'Picking a data model from five candidates',
        'Reviewing a PR that mixes five concerns',
        'Designing an API that has to last ten years',
      ],
    },
    judge: {
      label: 'Auto-judge',
      title: 'What decides?',
      desc: 'A lightweight model reads the last turn and a small context window, then returns a tier label. Configurable timeout — no hard failures on a slow judge.',
      code: 'judgeTimeout: 5000',
    },
    window: {
      label: 'Smoothing',
      title: 'No flicker',
      desc: 'A rolling window of recent turns with a majority threshold prevents thrashing between tiers when intent is ambiguous.',
      code: 'window: { size: 5, threshold: 0.6 }',
    },
    fallback: {
      label: 'Priority fallback',
      title: 'When one blinks',
      desc: 'Each tier is an ordered chain. If the top model errors, times out, or rate-limits, the router immediately tries the next one — your flow never notices.',
      code: 'priority: 1 → 2 → 3',
    },
  },
  faq: {
    label: 'FAQ',
    title: 'Questions, answered',
    subtitle: 'The few things worth knowing before you route.',
    items: [
      {
        q: 'How does the auto-judge decide fast vs smart?',
        a: 'A lightweight LLM (configurable per tier) reads the last user turn plus a small context window, then returns a tier label. The judge runs locally inside your Pi process — no data leaves your machine unless the chosen tier model itself calls a remote provider.',
      },
      {
        q: 'Is my API key or code sent to the router?',
        a: 'No. The router lives inside your Pi process. It only forwards the prompt to whichever provider you configured, exactly the way Pi does today. There is no third-party server, no telemetry, no analytics.',
      },
      {
        q: 'What happens when a provider fails?',
        a: 'Each tier is a priority chain. If the top model errors, times out, or rate-limits, the router immediately tries the next one. You only see a toast if every model in the chain is down.',
      },
      {
        q: 'Can I pin specific turns to a tier instead of auto-judging?',
        a: 'Yes. Set routing.mode to "manual" and use a slash command (/fast or /smart) per turn, or pin via a per-session override. The auto-judge is opt-in — you can run manual mode and trigger judges only when you want to.',
      },
      {
        q: 'Does it work with local models (Ollama, LM Studio)?',
        a: 'Yes — any OpenAI-compatible endpoint works. Point the priority chain at your local server, and the judge can run against the first available local model. Your prompts never leave the machine.',
      },
      {
        q: 'How do I update or roll back?',
        a: 'git pull inside the linked extension folder. Pi hot-reloads extension code; your JSON config stays yours, untouched. To pin a version, check out a tag and Pi will keep using it until you pull again.',
      },
    ],
  },
  footer: {
    brand: 'Pi Shift Router',
    tagline: 'Smart routing for Pi\'s coding agent.',
    copyright: 'Open source under MIT. Built by Greener-Dalii.',
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
          { label: 'Issues', href: 'https://github.com/green-dalii/pi-shift-router/issues' },
          { label: 'Discussions', href: 'https://github.com/green-dalii/pi-shift-router/discussions' },
          { label: 'Releases', href: 'https://github.com/green-dalii/pi-shift-router/releases' },
        ],
      },
    },
    languageLabel: 'Language',
  },
};