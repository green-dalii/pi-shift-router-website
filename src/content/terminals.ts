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
        'Resolving pi-shift-router@1.8.0...',
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
        '    🧠 Smart — 0 model(s)  (CTO: direction, review, hard problems)',
        '    🧭 Judge — 🦾 reuse the Fast tier chain',
        '    🎨 UX settings',
        '    🔒 Cache-aware routing',
        '    🔄 Model catalog — refresh now (53 available)',
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
        '  Shift Router · status dashboard',
        '',
        '  Last decision',
        '    🧠 smart · claude-opus-5   θ 0.33 · confidence 0.91',
        '    why  "design the auth flow" clears the expected-cost bar',
        '',
        '  Tiers',
        '    🦾 Fast   deepseek-v4-flash  →  glm-5.2  (fallback ready)',
        '    🧠 Smart  claude-opus-5      →  gpt-5.6-sol',
        '    ⚙ gear: default (R=3)   judge: fast-chain',
        '',
        '  Chains',
        '    🦾 deepseek-v4-flash   ctx 38%   cache 82%   ✅',
        '    🧠 claude-opus-5       ctx 61%   cache 74%   ✅',
        '',
        '  Money · this session',
        '    saved   $2.742 of $3.210  (85%)  vs all-smart: deepseek-v4-flash',
        '    spent   $0.465   fast ▓░░░░░░░░░ 10% · smart ▓▓▓▓▓▓▓▓░░ 90%',
        '    orchestration  $0.0689  (5 workers)',
        '',
        '  Last audit: ✓ clean',
        '  Config: user (~/.pi/agent/pi-shift-router.json)',
        '',
        '  q / esc closes',
      ],
    },
  ],
  dsh: [
    {
      title: 'dsh — plugins',
      prompt: '>',
      command: 'dsh-shift-router',
      output: [
        '✔ resolved dsh-shift-router@0.7.5 — prebuilt, no build script ran',
        '✔ shift-router added to profile web',
        'ℹ cordis.patch.yml inserts the plugin — loads with safe defaults',
        'ℹ The same field takes a repo URL or a local path',
      ],
    },
    {
      title: 'dsh-shift-router — Configuration',
      prompt: '/',
      command: 'router config',
      output: [
        '  dsh-shift-router — configuration',
        '',
        '  1  enabled                  true',
        '  2  tiers.fast.models        (none)',
        '  3  tiers.smart.models       (none)',
        '  4  routing.judge.mode       fast-chain',
        '  5  routing.economics        R=3  θ≈0.33',
        '  6  orchestration.mode       auto',
        '',
        '  set 2 \'[{"provider":"deepseek","model":"deepseek-v4.1-flash"}]\'',
      ],
    },
    {
      title: 'dsh — /router status',
      prompt: '/',
      command: 'router status',
      output: [
        '  shift-router · status',
        '',
        '  Last decision',
        '    🧠 smart · deepseek-v4-pro   θ 0.33 · confidence 0.88',
        '    decisionTier: smart   round 1/3   esc 0/2',
        '',
        '  Tiers',
        '    🦾 Fast   deepseek-v4-flash  →  glm-5.2  (fallback ready)',
        '    🧠 Smart  deepseek-v4-pro',
        '    ⚙ gear: default (R=3)   judge: fast-chain',
        '    workers: allowlist on (Fast chain)',
        '',
        '  Money · this session',
        '    saved   $2.742 of $3.210  (85%)  vs all-smart: deepseek-v4-flash',
        '    spent   $0.465   fast ▓░░░░░░░░░ 10% · smart ▓▓▓▓▓▓▓▓░░ 90%',
        '    orchestration  $0.0689  (5 workers)',
        '',
        '  Last audit: ✓ clean',
        '  Config: shift-router namespace (Settings → shift-router)',
      ],
    },
  ],
};
