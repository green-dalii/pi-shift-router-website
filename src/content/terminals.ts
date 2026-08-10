/**
 * Mocked terminal output for the Quick Start steps.
 *
 * These are intentionally locale-agnostic: the actual commands and their
 * output come from the upstream pi-shift-router source (commands.ts, stats.ts)
 * and are always English, regardless of which locale the website is in.
 *
 * Each step's index in `quickStartTerminals` matches the corresponding
 * step in the `quickStart.steps` translation array.
 */
export interface StepTerminal {
  /** macOS window title bar text */
  title: string;
  /** Single-char prompt prefix shown before the command ($ for shell, / for pi command) */
  prompt: string;
  /** The command exactly as the user would type it */
  command: string;
  /** Lines of output shown beneath the command — realistic, not invented */
  output: string[];
}

export const quickStartTerminals: StepTerminal[] = [
  {
    title: 'pi — zsh',
    prompt: '$',
    command: 'pi install npm:pi-shift-router',
    output: [
      'Resolving pi-shift-router@0.8.3...',
      '✔ Downloaded and registered',
      '✔ Added to ~/.pi/agent/settings.json',
      'ℹ Loaded on next pi launch — nothing else to do.',
    ],
  },
  {
    title: 'pi-shift-router — Configuration',
    prompt: '/',
    command: 'router config',
    output: [
      '  pi-shift-router — Configuration',
      '',
      '  › 🦾 Fast — 0 model(s)  (programmer: execution, daily coding)',
      '    🧠 Smart — 0 model(s)  (CTO: architecture, review, planning)',
      '    ──────────────',
      '    🎨 UX settings',
      '    ──────────────',
      '    💾 Save & exit',
      '    🚫 Discard & exit',
      '',
      '  ↑↓ navigate · enter to select',
    ],
  },
  {
    title: 'pi — /router status',
    prompt: '/',
    command: 'router status',
    output: [
      'Tiers:',
      '  🦾 Fast · deepseek-v4-flash  (engineer mode)',
      '  🧠 Smart · claude-opus-5  (CTO mode)',
      '',
      'Session:',
      '  Mode: AUTO  Enabled: ✅  Quiet: 🔊',
      '  Turns: 12  (↑upgrade 1 · ↓downgrade 0)',
      '  Manual: ✗ None',
      '  Cooldowns: none',
      '',
      'Stats:',
      '  Spend: fast $0.045 (9 calls) · smart $0.42 (3 calls) · total $0.465',
      '  baseline: all-turns-on-smart (deepseek-v4-flash) → $3.21 · saved $2.74',
      '  speed current=28 avg=24 tok/s',
      '',
      'Detail:',
      '  Window: 5 entries (confidence: high=3 mid=2 low=0 none=0)',
      '  Judge: 🧭 deepseek-v4-flash',
      '  Tokens: total 12,847',
      '',
      'Config: ~/.pi/agent/pi-shift-router.json',
    ],
  },
];