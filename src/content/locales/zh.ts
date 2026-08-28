import type { Translations } from './types';

export const zh: Translations = {
  meta: {
    title: 'Shift Router — 别再手动挑模型，专心写代码',
    description:
      '一个模型路由器家族，同时支持 pi-coding-agent 与 DeepSeek Harness：重要的事它是 CTO，跑量的活它是工程师。日常轮次留在便宜快速的模型上，重要工作自动升级到前沿模型 —— 复杂任务还会委派给 Fast 子代理。省 token、抗故障、零风险可试。',
    keywords:
      'shift router, pi shift router, dsh shift router, 模型路由, llm router, ai 编程, 省钱, 降低 ai 成本, 快慢分层, 任务编排, provider 故障转移, deepseek, openrouter, pi 扩展, deepseek harness',
  },
  nav: {
    quickStart: '快速上手',
    howItWorks: '工作原理',
    useCases: '使用场景',
    models: '模型选择',
    faq: '常见问题',
    github: 'GitHub',
    languageLabel: '语言',
    enLabel: 'English',
    zhLabel: '中文',
  },
  hero: {
    badge: '一个路由器，适配 pi 与 DeepSeek Harness',
    slogan: '重要的事它是 CTO，跑量的活它是工程师。',
    title1: '每个任务，',
    title2: '都用对的模型。',
    subtitle:
      '日常编码用便宜快速的模型，复杂问题交给聪明模型。服务商掉线或限流？自动切换 —— 任务不中断。任务真的复杂时，Smart 层还会亲自规划、委派给 Fast 子代理 —— 在 pi 和 DeepSeek Harness 上通用。',
    ctaPrimary: '快速上手',
    ctaSecondary: 'pi-shift-router 文档',
    ctaTertiary: 'dsh-shift-router 文档',
    terminal: {
      title: 'pi-shift-router — 在 pi 中',
      subtitle: '状态栏 · toast · 自动',
      statusLabel: 'router',
      statusModel: 'MiniMax-M3',
      statusTier: '档位',
      statusTierValue: 'fast',
      statusMode: 'auto',
      judgeLabel: 'judge',
      judgeValue: '🧭 judging…',
      windowLabel: '窗口',
      windowValue: '4/5 fast',
      logLines: [
        { time: '🦾', text: '[MiniMax-M3] → 修这个失败的测试' },
        { time: '🧭', text: 'judging…' },
        { time: '🧠', text: '[kimi-k3] ← 架构问题自动升级到 Smart' },
        { time: '⚠️', text: 'MiniMax-M3 429 → 切换到 deepseek-v4-flash — 1 分钟后重试' },
        { time: '🦾', text: '[deepseek-v4-flash] ← 同层 failover（v0.6.0）' },
      ],
    },
    trustStrip: [
      { label: '多 Provider', desc: '自动切换，任务不中断' },
      { label: '无第三方服务器', desc: '跑在你的 Pi 进程里' },
      { label: 'MIT 开源', desc: '零运行时依赖' },
    ],
  },
  family: {
    label: '家族产品',
    title: '一种路由思路，两个版本',
    subtitle: '同样的 LLM 裁判路由、同样的回退链、同样的任务级编排 —— 适配你实际在用的 agent。',
    products: [
      {
        name: 'pi-shift-router',
        version: 'v1.3.0',
        edition: 'for pi-coding-agent',
        desc: '原版。一条命令装进 pi，在 Fast 与 Smart 之间路由每一轮，复杂任务还会委派给 Fast 子代理来编排执行。',
        highlights: ['零运行时依赖 · 约 409 kB', '任务级编排默认开启', '369 个单元测试'],
        links: [
          { label: 'GitHub', href: 'https://github.com/green-dalii/pi-shift-router' },
          { label: 'npm', href: 'https://www.npmjs.com/package/pi-shift-router' },
        ],
      },
      {
        name: 'dsh-shift-router',
        version: 'v0.5.0',
        edition: 'for DeepSeek Harness',
        desc: 'DSH 版本。通过 cordis.patch.yml 接入 harness，走它自己的 agent 管线，配置可以在 GUI 的 “Shift-Router” 卡片或 /router config 里实时改。',
        highlights: ['复用 harness 的 agent/request 管线', 'GUI 配置卡片 + 实时命令', '109 个测试 · 免凭据 e2e'],
        links: [{ label: 'GitHub', href: 'https://github.com/green-dalii/dsh-shift-router' }],
      },
    ],
    note: '一晚上就能读完的代码库，两个版本。挑匹配你那个 agent 的就行。',
  },
  quickStart: {
    label: '快速上手',
    title: '三步就能跑起来',
    subtitle: '装完什么都不变 —— 只有你选好模型后路由才开始工作。随时可卸载，没有任何绑定。',
    runtimes: [
      {
        id: 'pi',
        name: 'pi-shift-router',
        steps: [
          {
            title: '安装',
            desc: '一条命令。pi 会写入你的设置，下次启动自动加载 —— 不用重新编译，也不用改任何配置。',
            hintTitle: '为什么可以放心装',
            hintItems: [
              { label: '零依赖、超轻量、无绑定', desc: '纯 TypeScript，node_modules 不多一个包，毫秒级加载；随时可卸载，pi 自动回到默认模型' },
              { label: '零遥测、零后端', desc: '不采集、不跟踪、不回传；一切都在本地 pi 会话内运行' },
              { label: '开源可审计', desc: '整个代码库一晚上能读完，装前装后都透明' },
            ],
          },
          {
            title: '选好你的模型',
            desc: '运行 /router config，选一个 fast 模型和一个 smart 模型 —— 就用你已经在用的那两个。可以存到用户级或项目级。',
            hintTitle: '怎么选',
            hintItems: [
              { label: 'Fast', desc: '你手里智价比最好的模型，而不是最便宜的（Judge 跑在它上面，它的判断力同样重要）' },
              { label: 'Smart', desc: '处理重要工作的前沿模型' },
              { label: 'Fallback 链', desc: '每档加 2–3 个模型会自动形成 fallback 链，应对 429/5xx' },
            ],
            link: {
              label: '查看推荐配对',
              href: '/zh/models',
            },
          },
          {
            title: '看它自己工作',
            desc: '/router status 显示你的配置；下一轮就完成第一次分类。之后全自动 —— 想控制时用 /router quiet 和 /route-force 调整。',
            hintTitle: '输出怎么看',
            hintItems: [
              { label: 'Spend', desc: '每档花了多少，以及基线：不装路由器会花多少' },
              { label: 'Turns / upgrades / downgrades', desc: '路由器升级或降级的频率' },
              { label: 'Cooldowns', desc: '429/5xx 后休息的模型；退避结束后自动恢复' },
              { label: 'Window', desc: '驱动降级门的最近 5 次分类' },
            ],
          },
        ],
      },
      {
        id: 'dsh',
        name: 'dsh-shift-router',
        steps: [
          {
            title: '安装',
            desc: '克隆、构建、注册到 harness profile —— 全程在 shell 里完成，无需任何凭据，所有默认值都安全。',
            hintTitle: 'bundle 方式',
            hintItems: [
              { label: '准备', desc: 'git clone …/dsh-shift-router && npm install && npm run build' },
              { label: '注册', desc: 'dsh plugin --profile web add /path/to/dsh-shift-router' },
              { label: '实时配置', desc: 'Settings → shift-router 或 /router config —— 持久化，无需重启' },
            ],
          },
          {
            title: '选好你的模型',
            desc: '在 GUI（Settings → Plugins → Plugin configuration → “Shift-Router” 卡片）或用 /router config 命令设置 Fast 与 Smart 层模型链 —— 两者共用同一个存储。',
            hintTitle: '怎么选',
            hintItems: [
              { label: 'Fast', desc: '你手里智价比最好的模型 —— Judge 也跑在它上面' },
              { label: 'Smart', desc: '处理重要工作的前沿模型' },
              { label: 'Fallback 链', desc: '每档加 2–3 个模型会自动形成 fallback 链，应对 429/5xx' },
            ],
          },
          {
            title: '看它自己工作',
            desc: '/router status 显示你的分层与编排模式；下一个顶层轮次就完成第一次分类。子代理保持被钉住的模型。',
            hintTitle: '输出怎么看',
            hintItems: [
              { label: 'Tiers', desc: 'Fast 链（同时是 Judge）与 Smart 链' },
              { label: 'Orchestration', desc: '🪄 auto（空闲）—— 复杂任务会委派给 Fast 子代理' },
              { label: '成本遥测', desc: '每档花费，以及全跑 Smart 的基线对比' },
            ],
          },
        ],
      },
    ],
  },
  models: {
    label: '工作原理',
    title: '一个简洁而优雅的想法',
    subtitle: '每个任务有难度，每个模型有价格。Shift Router 自动把两者匹配起来。',
    intro:
      '就像一支团队：工程师又快又便宜地把日常活干了；CTO 在关键时刻亲自接管整轮。同一件事，两种脑力 —— 你还没打完字，路由器就已经决定该用谁。而 CTO 的任务足够大时，它也不只会单打独斗：它会把实现委派给 Fast 子代理，再逐个审查。',
    valueProps: [
      {
        title: '日常活保持便宜',
        desc: '只有任务真的需要深度时，judge 才升级 —— 日常编码一直跑在你的平价模型上，昂贵的前沿模型只留给真正重要的事。',
      },
      {
        title: '判断本身几乎免费',
        desc: '一次微型分类调用 —— 按 fast 档价格计费几千 token，耗时 200ms–2s。相比避免误用 Smart 省下的钱，这点开销不值一提。',
      },
      {
        title: 'provider 掉线也不停',
        desc: '如果某个模型 429 或超时，它进入短暂冷却，同层下一个健康模型自动接管 —— 就在同一轮内，你什么都不用做。',
      },
    ],
    fast: {
      tier: 'Fast',
      role: '工程师',
      emoji: '🦾',
      desc: '你的日常工程师。日常活又快又稳 —— 写代码、跑测试、修 bug，不会为一次重命名或重构浪费前沿模型。',
      bullets: [
        '日常编码与修 bug',
        '测试与重复性改动',
        '简单、低风险的任务',
      ],
    },
    smart: {
      tier: 'Smart',
      role: 'CTO',
      emoji: '🧠',
      desc: 'CTO —— 定方向、纠偏差、审结果，硬问题自己上手：架构、设计 review、安全、多步规划、不可逆的改动。高风险的轮次不会被敷衍。',
      bullets: [
        '架构与设计决策',
        '需要真判断的 review',
        '高风险、模糊、要深度的任务',
      ],
    },
    judge: {
      label: 'LLM Judge',
      title: '一个小调用就决定',
      desc: '一次轻量分类 —— 由 fast 层模型自己完成 —— 读你的请求，选出 fast 或 smart。没有重推理，也没有你能察觉的延迟。',
      code: 'judgeTimeout: 5000',
    },
    window: {
      label: '降级门',
      title: '不来回抖',
      desc: '需要深度时升级立即生效。降级要等明确趋势 —— 最近 5 轮分类中多数是 fast —— 路由绝不中途在两个模型间来回跳。',
      code: 'window: { size: 5, threshold: 0.6 }',
    },
    fallback: {
      label: '运行时故障转移',
      title: '故障，自动处理',
      desc: 'provider 限流或报错时，那个模型进入指数退避冷却（5xx 从 1m 起步；429/配额 从 16m 起步，封顶 6h），同层下一个健康模型接管 —— 你全程无感，继续干活。',
      code: 'cooldown: 1m → 4m → 16m → 1h → 4h → 6h',
    },
    orchestration: {
      label: '任务级编排',
      title: 'CTO 不单打独斗',
      desc: '当 Judge 判定任务复杂且编排处于 auto 模式（默认）时，Smart 层以 CTO 身份运行：规划工作、把实现委派给 Fast 工程师子代理、逐个审查结果并迭代，直到活干干净。简单任务永不编排 —— 它们留在普通路由器上。',
      bullets: [
        '规划 → 委派 → 审查 → 迭代 → 验收',
        '每轮编排后的验收审计 —— 落地性 · 目标对齐 · 交付质量',
        'fresh-context 子代理：小而快又便宜（约 $0.004 对比 fork 的约 $0.06）',
        '硬上限：maxRounds 3 · escalationThreshold 2 · /router status 显示 Last audit',
        '需要 pi-subagents；没有时优雅降级',
      ],
    },
  },
  useCases: {
    label: '使用场景',
    title: '三种配置覆盖大多数场景',
    subtitle: '选最贴近你的那个 —— 随时可调。',
    scenarios: [
      {
        title: '多 Provider 抗故障',
        desc: '每层混 2–3 个 provider。某个限流或挂掉，同层下一个健康模型就在这一轮接管。',
      },
      {
        title: '单 Provider 分层',
        desc: '一个 provider、两档、一份账单、一个额度池。最简配置 —— 日常用平价模型，硬活交给同一家的旗舰。',
      },
      {
        title: '本地 + 云端混合',
        desc: 'Fast 档跑你机器上的量化模型，Smart 档走云端前沿。日常活隐私在本地；关键时刻云端出手。',
      },
    ],
    cta: {
      label: '查看推荐模型配对',
      href: '/zh/models',
    },
  },
  modelsPage: {
    label: '模型选择',
    title: '选出你的模型配对',
    intro: '两条经验在 pi 和 DeepSeek Harness 上都适用：Fast 档 —— 选智价比最好的模型：每块钱买到最强的智能，因为这一档还兼任 Judge（默认首选 deepseek-v4-flash —— 0731 版质量逼近 Opus 5 / GLM-5.2，价格却在表格低端）。Smart 档 —— 留在云端前沿模型。80 GB 以下本地 Smart 不实用，96 GB 仍通常打不过包月套餐。',
    patterns: [
      {
        title: '编码订阅套餐',
        summary: '一份订阅，多家模型。要么用 Token 网关（一把 key 代发各家主流模型），要么复用你已经付费的编码工具订阅 —— 大多数都暴露 OpenAI 兼容端点。',
        fast: {
          models: [
            'deepseek-v4-flash',
            'gpt-5.6-luna  （OpenCode Zen / Go）',
            'qwen3.6-flash',
          ],
        },
        smart: {
          models: [
            'gpt-5.6-sol  （OpenCode Zen / Go）',
            'qwen3.8-max',
            'kimi-k3',
          ],
        },
        note: '可直接复用的订阅：OpenCode Zen（OpenAI 兼容端点）、GitHub Copilot（BYOK —— OpenAI + Anthropic）、Cursor（Pro / Pro+ / Ultra 套餐池）、OpenAI Codex（随 ChatGPT Plus / Pro / Business）。',
        bestFor: '零额外设置 —— 一个账单，不用新开账号。',
      },
      {
        title: '本地模型按内存选',
        summary: 'Fast 档跑量化本地（q4-k-m / NVFP4 / MXFP4 / AWQ-int4 / 1–2 bit 三元）。64+ GB 显存/统一内存后，Smart 也能本地跑。显存 ≈ 参数 × 0.6（Q4_K_M）。',
        groupRows: [
          { group: '≤ 32 GB', fast: 'LFM2.5-8B-A1B（8.5B）、granite-4.1-8b（8.8B）、Qwen3.6-27B（dense，q4 ≈ 14 GB）、gemma-4-26b-a4b-it（q4 ≈ 13 GB）、Qwen3.6-35B-A3B（MoE 36B/3B，q4 ≈ 18 GB）、Laguna-XS-2.1（MoE 33B/3B，q4 ≈ 17 GB）、Ternary-Bonsai-27B（1.58-bit ≈ 7 GB，笔记本/手机级）', smart: '云端前沿模型' },
          { group: '32–128 GB', fast: 'Fable-Fusion-711-NEO-MAX-MTP GGUF（27B，2026-07，最佳后训练）、gemma-4-31B-it（q4 ≈ 16 GB）、Laguna-S-2.1（117.6B，q4 ≈ 59 GB —— 需 64 GB+）', smart: 'Fable-Fusion-711 基础权重，或云端前沿' },
          { group: '≥ 128 GB', fast: 'Fable-Fusion-711-NEO-MAX-MTP GGUF（同款 —— 后训练质量胜过原始大小）', smart: 'DeepSeek-V4-Flash（284 B MoE / 13 B active，UD-Q4_K_XL ≈ 155 GB —— 需 192 GB+ 统一内存；128 GB 级用 1–2 bit 三元）' },
        ],
        note: '大小为量化值（生产环境，不是 fp16）。MoE 型号名里的 AxxB 是每 token 激活参数 —— 影响计算速度，不影响磁盘大小；GGUF/q4 存的是全部专家权重。Qwen3.6-27B 在 SWE-bench Verified 拿 77.2% —— 24 GB 单卡上最强的开源权重模型。约 256 GB 统一内存以下，本地 Smart 在性价比上很少打得过包月套餐；只有隐私或离线场景才值得。',
        bestFor: '成本敏感或离线场景；云端只能看到硬活那几轮。',
      },
      {
        title: '同 Provider 分层',
        summary: '一家 provider 两档 —— 最简配置。你已经在某家付费、不想换 key 时用这个。',
        groupRows: [
          { group: 'Anthropic', fast: 'sonnet-5', smart: 'opus-5 / fable-5' },
          { group: 'OpenAI', fast: 'gpt-5.6-luna', smart: 'gpt-5.6-sol' },
          { group: 'Google', fast: 'gemini-3.5-flash-lite', smart: 'gemini-3.6-flash' },
          { group: 'Qwen（阿里）', fast: 'qwen3.7-plus', smart: 'qwen3.8-max' },
          { group: 'DeepSeek', fast: 'deepseek-v4-flash', smart: 'deepseek-v4-pro' },
          { group: 'Z.AI（GLM）', fast: 'glm-5 / glm-5-turbo', smart: 'glm-5.2' },
          { group: 'xAI（Grok）', fast: 'grok-4.5-fast', smart: 'grok-4.5' },
        ],
        bestFor: '从零到路由最快 —— 只需两个模型 ID。',
      },
      {
        title: '跨 Provider 混合',
        summary: '每档取各家最强。默认：Fast 走 deepseek-v4-flash，Smart 走 claude-opus-5。要加固再加 fallback。',
        groupRows: [
          { group: 'DeepSeek Harness（DSH）', fast: 'deepseek-v4-flash', smart: 'deepseek-v4-pro' },
          { group: '最低成本', fast: 'deepseek-v4-flash', smart: 'claude-opus-5' },
          { group: '多 provider 备份', fast: 'deepseek-v4-flash + glm-5.2', smart: 'claude-opus-5 + gpt-5.6-sol + kimi-k3' },
          { group: '包月', fast: 'opencode-go/deepseek-v4-flash', smart: 'opencode-go/glm-5.2' },
          { group: '1 M 上下文、长仓库', fast: 'deepseek-v4-flash', smart: 'gemini-3.6-pro / kimi-k3' },
          { group: '多模态', fast: 'deepseek-v4-flash', smart: 'claude-opus-5（视觉） / gemini-3.6-pro' },
          { group: '多语种 / 中文优先', fast: 'deepseek-v4-flash', smart: 'qwen3.8-max' },
          { group: 'GDPR / 欧洲', fast: 'deepseek-v4-flash（经 OpenRouter）', smart: 'mistral-medium-2604' },
        ],
        bestFor: '每档选最强，不管谁卖。',
      },
    ],
    note: '价格与可用模型每月变一次 —— `curl -s https://models.dev/api.json | jq` 可看最新。完整 provider 目录在 models.dev。',
  },
  faq: {
    label: '常见问题',
    title: '几个常见问题',
    subtitle: '内容直接取自 README。',
    items: [
      {
        q: '不配置任何模型会怎样？',
        a: '什么都不变。两层默认都为空 —— 路由器不做任何事，pi 继续用你的默认模型。只有运行 /router config 选好模型后，路由才开始工作。',
      },
      {
        q: '真的能省钱吗？',
        a: '能。日常任务继续用你快速、高性价比的模型，而不是每个请求都烧旗舰。judge 本身按 fast 层价格计费几千 token —— 省下的钱远超这点开销。',
      },
      {
        q: '试一下安全吗？',
        a: '完全安全。配置前路由器什么都不做；纯 TypeScript、零运行时依赖；/router off 可立即停用。没有任何绑定。',
      },
      {
        q: 'Smart 层到底做什么？',
        a: '它是 CTO 角色 —— 定方向、纠偏差、审结果，硬问题自己上手：架构、设计 review、安全、多步规划、不可逆的改动。高风险的轮次不会被敷衍。它不只是给建议或审查，它自己动手写代码、把活干完。',
      },
      {
        q: 'Judge 会增加明显延迟吗？',
        a: '不会。分类调用只需几千 token、约 200ms–2s。调用期间状态栏显示 🧭 judging… —— 大多数用户根本感觉不到。',
      },
      {
        q: 'Primary 模型 429 或超时怎么办？',
        a: '你继续干活就行。失败的模型进入指数退避冷却 —— 5xx 从 1m 起步（1m → 4m → 16m → 1h → 4h… 封顶 6h）；值得故障转移的 4xx（429 限流 / 配额）跳过前几档、从 16m 起步，因为客户端限流通常比服务端闪断活得更久。同层下一个健康模型自动接管 —— 甚至在同一轮内。请求成功就立即清除冷却。',
      },
      {
        q: '什么是任务级编排？',
        a: '当 Judge 判定任务复杂时，Smart 层以 CTO 身份运行：规划工作、把实现委派给 Fast 工程师子代理（fresh context，模型取自你的 Fast 层）、逐个审查结果、用具体反馈迭代，最后做一次终验。简单任务永不编排 —— 它们留在普通路由器上。编排默认开启（auto 模式），/router orchestrate off 可关闭。它需要 pi-subagents 扩展 —— 没有它，复杂任务直接在 Smart 层运行，和以前完全一样。',
      },
      {
        q: '编排会更费钱吗？',
        a: '不会 —— 这正是它的意义。Smart 层负责规划和审查，实现交给 fresh-context 的 Fast 子代理，每个都很小很便宜：窄任务约 $0.004，对比继承 176k-token fork 的约 $0.06。硬上限把花费锁在范围内：maxRounds 3、escalationThreshold 2。如果任务其实很简单，编排机制根本不会启动。',
      },
      {
        q: '怎么保证编排轮次真的被验收了？',
        a: '两道保险。收敛协议要求每次重新委派都必须带上结构化的失败报告 —— 哪里失败、在哪、要重跑的确切验收检查 —— 并且禁止原样重发同样的反馈（此时 CTO 会自己接管该阶段）。之上还有一轮验收审计（v1.3.0）：每次编排轮次结束后，确定性检查必定运行（所有子代理都已回报、最终消息带 CTO 总结、是否撞上硬上限），外加一个可选的小型 fast 档 LLM 审计，对照你最初的目标检查三个维度：落地性（验收声明有实际结果支撑）、目标对齐（交付回答了请求）、交付质量（没有拿占位符当完成）。审计结果绝不回退已完成的轮次 —— 它通过 console.warn + 提示以及 /router status 的 “Last audit” 呈现。可用 orchestration.audit.enabled 开关（默认开）。',
      },
      {
        q: '能强制指定某一轮用某个模型吗？',
        a: '可以。/route-force <tier> 为下一轮锁定 Smart 或 Fast；/route-force <provider>/<model> 锁定具体模型。/route-force auto 清除覆盖。',
      },
      {
        q: '能混用不同 provider 的模型吗？',
        a: '可以 —— 随便混。每层是一个按优先级排序的 {provider, model, priority} 列表，fast 层用 DeepSeek、smart 层用 Kimi，一份配置全搞定。',
      },
      {
        q: '可以监控运行情况吗？',
        a: '可以。/router stats 显示每档花费与节省、窗口大小、置信度分布（高/中/低/无）、累计升级/降级次数、tokens-per-second。它还会报告成本遥测：每档花了多少，以及一个基线 —— 如果每一轮都跑你的 Smart 模型（即不装路由器）会花多少钱。例如 Spend: fast $0.045 (9 calls) · smart $0.42 (3 calls) · total $0.465，基线 $3.21，省下 $2.74。状态栏也会显示实时吞吐：[🧠 kimi-k3 • 23 tok/s]。',
      },
      {
        q: '怎么调节降级行为？',
        a: '两个阈值：`threshold`（默认 0.6）控制最近 5 轮分类中要多大比例倾向 Fast 才触发降级；`minConfidence`（默认 0.5）设了一个门槛，低于它的票直接忽略。把 `threshold` 调到 0.8 能让 Smart 档停留更久。升级始终是即时的 —— 只有降级会等。',
      },
      {
        q: '和 pi-bifrost、pi-smart-router 有什么区别？',
        a: '两者都是同类 pi 路由器。@tenchi4u/pi-bifrost 用 7 步规则 + 历史技巧、4 个档位决策 —— 覆盖更多场景，但更难推演；它省的是订阅额度而不是钱，故障时断路器还可能跨档切换。pi-smart-router 跑一条 12 步本地管线（无 LLM），3 个档位还带本地档，用公式估算成本，需要本地 DB + ML 模型（约 2.5 MB 加下载）和 15+ 个环境变量。Shift Router 把决策收敛到一份可读的 LLM prompt（纯文本可审计、JSON 模式强制）、两档一个心智模型、任务级编排（Smart CTO 委派给 Fast 子代理）、省了多少钱的成本遥测、与 Judge 共用冷却的同档故障转移，以及零依赖约 409 KB。CC-Switch 是另一个类别：桌面应用，在会话之间手动切换 provider 配置 —— 可以和逐轮路由共存。',
      },
      {
        q: '有 DeepSeek Harness 版本吗？',
        a: '有 —— dsh-shift-router（v0.5.0），同一个路由器的 DSH 适配版。通过 cordis.patch.yml 接入 harness，走它自己的 agent/request 管线，配置有两种实时方式：完整的 GUI 卡片（Settings → Plugins → Plugin configuration 里的 “Shift-Router” 卡片，两档模型链都能直接编辑）和交互式 /router config 编辑器（get / set / unset / diff）。能力和 pi 版一致：LLM 裁判、缓存感知路由、运行时故障转移、任务级编排、成本遥测 —— 而且编排硬上限由插件强制，不只是提示。109 个单元测试加一个免凭据的 headless e2e。安装：git clone https://github.com/green-dalii/dsh-shift-router && npm install && npm run build，然后 dsh plugin --profile web add <路径>。',
      },
      {
        q: '在 DeepSeek Harness 上，子代理也会被路由吗？',
        a: '不会。subagent 工具派生的子代理带有 origin === \'subagent\' 标记，保持它们被钉住的模型 —— 路由器只驱动顶层 agent。编排时 CTO 委派给 Fast 子代理，其模型由部署配置钉住（tool-subagent 的 agentOptions），所以子代理永远按 Fast 层的价格运行。',
      },
    ],
  },
  footer: {
    brand: 'Shift Router',
    tagline: '为 agent 自动选模型：重要的事交给 CTO，跑量的活交给工程师 —— pi-coding-agent 与 DeepSeek Harness 通用。',
    copyrightParts: {
      prefix: 'MIT 开源 · 由 ',
      author: { name: 'green-dalii', url: 'https://github.com/green-dalii' },
      suffix: ' 维护。',
    },
    sections: {
      product: {
        title: '产品',
        links: [
          { label: '快速上手', href: '#quick-start' },
          { label: '工作原理', href: '#how-it-works' },
          { label: '常见问题', href: '#faq' },
        ],
      },
      resources: {
        title: '资源',
        links: [
          { label: 'pi-shift-router（GitHub）', href: 'https://github.com/green-dalii/pi-shift-router' },
          { label: 'pi-shift-router（npm）', href: 'https://www.npmjs.com/package/pi-shift-router' },
          { label: 'dsh-shift-router（GitHub）', href: 'https://github.com/green-dalii/dsh-shift-router' },
          { label: 'Issues', href: 'https://github.com/green-dalii/pi-shift-router/issues' },
          { label: 'Discussions', href: 'https://github.com/green-dalii/pi-shift-router/discussions' },
        ],
      },
      more: {
        title: '更多项目',
        links: [
          { label: 'greenerai.top', href: 'https://greenerai.top' },
          { label: 'Karpathy LLM Wiki', href: 'https://llmwiki.greenerai.top' },
        ],
      },
    },
    languageLabel: '语言',
  },
};