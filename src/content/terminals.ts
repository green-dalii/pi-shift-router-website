/**
 * Mocked terminal output for the Quick Start steps.
 *
 * These are intentionally locale-agnostic: the actual commands and their
 * output come from the upstream sources (pi-shift-router commands.ts/stats.ts
 * and dsh-shift-router README) and are always English, regardless of which
 * locale the website is in.
 *
 * Each runtime (pi / dsh) has one StepTerminal per step, and the index
 * matches the corresponding step in the `quickStart.runtimes[*].steps`
 * translation array.
 */
export interface StepTerminal {
  /** macOS window title bar text */
  title: string;
  /** Single-char prompt prefix shown before the command ($ for shell, / for agent command) */
  prompt: string;
  /** The command exactly as the user would type it */
  command: string;
  /** Lines of output shown beneath the command — realistic, not invented */
  output: string[];
}

export const quickStartTerminals: Record<'pi' | 'dsh', StepTerminal[]> = {
  pi: [
    {
      title: 'pi — zsh',
      prompt: '$',
      command: 'pi install npm:pi-shift-router',
      output: [
        'Resolving pi-shift-router@1.0.0...',
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
        '  › 🦾 Fast — 0 model(s)  (engineer: execution, daily coding)',
        '    🧠 Smart — 0 model(s)  (CTO: architecture, review, planning)',
        '    🪄 Orchestration — auto  (complex → Smart CTO delegates to Fast subagents)',
        '    🎨 UX settings',
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
        '  Orchestration: 🪄 auto (idle)',
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
  ],
  dsh: [
    {
      title: 'zsh — dsh-shift-router',
      prompt: '$',
      command: 'dsh plugin --profile web add /path/to/dsh-shift-router',
      output: [
        '✔ Cloned and built dist/ via prepare script',
        '✔ shift-router added to profile web',
        'ℹ cordis.patch.yml inserts the plugin — loads with safe defaults',
        'ℹ Tier models come from Settings → shift-router or the patch row.',
      ],
    },
    {
      title: 'dsh-shift-router — Configuration',
      prompt: '/',
      command: 'router config',
      output: [
        '  dsh-shift-router — Configuration',
        '',
        '  › 🦾 Fast — 0 model(s)  (engineer: execution, daily coding)',
        '    🧠 Smart — 0 model(s)  (CTO: architecture, review, planning)',
        '    🪄 Orchestration — auto  (complex → Smart CTO delegates to Fast subagents)',
        '    🎨 UX settings',
        '    💾 Save & exit',
        '    🚫 Discard & exit',
        '',
        '  ↑↓ navigate · enter to select   (also editable in the GUI panel)',
      ],
    },
    {
      title: 'dsh — /router status',
      prompt: '/',
      command: 'router status',
      output: [
        'Tiers:',
        '  🦾 Fast · deepseek-v4-flash  (engineer mode)',
        '  🧠 Smart · deepseek-v4-pro  (CTO mode)',
        '',
        'Session:',
        '  Mode: AUTO  Enabled: ✅',
        '  Orchestration: 🪄 auto (idle)',
        '  Turns: 12  (↑upgrade 1 · ↓downgrade 0)',
        '  Cooldowns: none',
        '',
        'Stats:',
        '  Spend: fast $0.045 (9 calls) · smart $0.42 (3 calls) · total $0.465',
        '  baseline: all-turns-on-smart → $3.21 · saved $2.74',
        '  speed current=28 avg=24 tok/s',
        '',
        'Config: shift-router settings namespace (Settings panel → shift-router)',
      ],
    },
  ],
};
