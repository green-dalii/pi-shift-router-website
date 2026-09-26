import type { Translations } from './types';

export const zh: Translations = {
  meta: {
    title: 'Shift Router — 别再手动挑模型，专心写代码',
    description:
      '一个模型路由器家族，同时支持 pi-coding-agent 与 DeepSeek Harness：别再为日常琐事付旗舰模型的钱，也别把最难的活交给廉价模型。LLM 裁判（或可选的决策模型）按期望成本选层，配上多模型回退链，复杂任务还会由 Smart CTO 编排并委派给 Fast 子代理。省 token、抗故障、零风险可试。',
    keywords:
      'shift router, pi shift router, dsh shift router, 模型路由, llm router, ai 编程, 省钱, 降低 ai 成本, 快慢分层, 期望成本路由, 档位预设, 决策模型裁判, 任务编排, provider 故障转移, deepseek, openrouter, pi 扩展, deepseek harness',
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
    slogan: '别再为日常琐事付旗舰模型的钱，也别把最难的活交给廉价模型。',
    title1: '每个任务，',
    title2: '都用对的模型。',
    subtitle:
      '日常编码用便宜快速的模型，复杂问题交给聪明模型。裁判会权衡胜算、按期望成本切换 —— 全自动，就在这一轮里；没把握时它从不通猜。服务商掉线时，路由器沿着可用性阶梯逐级下调，而不是卡住。任务真的复杂时，Smart 层还会亲自规划、委派给 Fast 子代理 —— 在 pi 和 DeepSeek Harness 上通用。',
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
      statusMode: 'default',
      judgeLabel: 'judge',
      judgeValue: '🧭 judging…',
      windowLabel: '档位',
      windowValue: 'default',
      logLines: [
        { time: '🦾', text: '[MiniMax-M3] → 修这个失败的测试' },
        { time: '🧭', text: 'judging…' },
        { time: '🧠', text: '[kimi-k3] ← 架构问题自动升级到 Smart' },
        { time: '⚠️', text: 'MiniMax-M3 429 → 切换到 deepseek-v4-flash — 1 分钟后重试' },
        { time: '🦾', text: '[deepseek-v4-flash] ← 同层 failover' },
      ],
    },
    trustStrip: [
      { label: '多 Provider', desc: '自动切换，任务不中断' },
      { label: '无第三方服务器', desc: '跑在你的 Pi 进程里' },
      { label: 'MIT 开源', desc: '仅一个宿主依赖' },
    ],
  },
  family: {
    label: '家族产品',
    title: '一种路由思路，两个版本',
    subtitle: '同样的 LLM 裁判路由、同样的回退链、同样的任务级编排 —— 适配你实际在用的 agent。',
    products: [
      {
        name: 'pi-shift-router',
        version: 'v1.7.0',
        edition: 'for pi-coding-agent',
        desc: '原版。一条命令装进 pi，按期望成本在 Fast 与 Smart 之间路由每一轮，复杂任务还会委派给 Fast 子代理来编排执行。',
        highlights: ['仅一个宿主依赖 · 约 409 kB', '裁判三模式：LLM 链或决策模型', '577 个单元测试'],
        links: [
          { label: 'GitHub', href: 'https://github.com/green-dalii/pi-shift-router' },
          { label: 'npm', href: 'https://www.npmjs.com/package/pi-shift-router' },
        ],
      },
      {
        name: 'dsh-shift-router',
        version: 'v0.6.0',
        edition: 'for DeepSeek Harness',
        desc: 'DSH 版本。通过 cordis.patch.yml 接入 harness，走它自己的 agent 管线，配置可以在 GUI 的 “Shift-Router” 卡片或 /router config 里实时改。',
        highlights: ['零运行时依赖', 'GUI 配置卡片 + 实时命令', '424 个测试 · 免凭据 e2e'],
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
      label: '裁判',
      title: '一个小调用就决定',
      desc: '一次轻量分类 —— 由 fast 层模型自己完成 —— 读你的请求，返回一个档位和置信度。这个置信度被读作「本轮需要强模型的概率」，所以路由器是在权衡成本，而不是数票。',
      code: 'judge: { mode: fast-chain | custom | decision }',
    },
    window: {
      label: '期望成本门',
      title: '把钱花在能改变结果的地方',
      desc: '门槛不是五五开。把日常轮次升级到强模型，只浪费一次价差；把架构轮次留在便宜模型上，代价是返工、之后还得买强模型，以及你的时间。所以只要胜算超过 θ = 1 / reworkPenalty（默认 θ ≈ 0.33）就切 Smart —— 这条规则与价格无关，因为价差会约掉，剩下的只有「判错有多痛」。低于 minConfidence（0.5）时它保持不动，而不是猜。',
      code: 'economics: { reworkPenalty: 3, downgradeMemory: 2 }',
    },
    fallback: {
      label: '运行时故障转移',
      title: '故障，自动处理',
      desc: 'provider 限流或报错时，那个模型进入指数退避冷却（5xx 从 1m 起步；429/配额/402 余额不足 从 16m 起步，封顶 6h），同层下一个健康模型接管 —— 你全程无感，继续干活。如果裁判本身不可用，路由器沿可用性阶梯逐级下调而不是卡住：换一个裁判源，再不行就完全不路由 —— 它从不通猜。',
      code: 'cooldown: 1m → 4m → 16m → 1h → 4h → 6h',
    },
    orchestration: {
      label: '任务级编排',
      title: 'CTO 不单打独斗',
      desc: '当 Judge 判定任务复杂且编排处于 auto 模式（默认）时，Smart 层以 CTO 身份运行：规划工作、把实现委派给 Fast 工程师子代理、逐个审查结果并迭代，直到活干干净。简单任务永不编排 —— 它们留在普通路由器上。',
      bullets: [
        '规划 → 委派 → 审查 → 迭代 → 验收',
        '每轮编排后的验收审计 —— 落地性 · 目标对齐 · 交付质量',
        'per-worker 成本账本 —— 委派花费不再藏在主 agent 里',
        'fresh-context 子代理：小而快又便宜（约 $0.004 对比 fork 的约 $0.06）',
        '硬上限：maxRounds 3 · escalationThreshold 2 · /router status 显示 Last audit',
        '需要 pi-subagents；没有时优雅降级',
      ],
    },
  },
  judgeModes: {
    label: '裁判模式',
    title: '三种裁判，一个结论',
    subtitle: '结论可以来自 Fast 链、专属裁判链，或者一个用概率而不是散文回答的决策模型。',
    modes: [
      {
        id: 'fast-chain',
        name: 'Fast 链',
        badge: '默认',
        desc: '复用你的 Fast 层模型链 —— 无需任何额外配置，默认路径行为不变。',
      },
      {
        id: 'custom',
        name: '专属裁判',
        badge: '',
        desc: '一条像层一样可编辑的独立裁判链 —— 当你想让结论由一个不同于执行层的模型给出。',
      },
      {
        id: 'decision',
        name: '决策模型',
        badge: 'Beta',
        desc: '决策模型（TypeSafe Jev / System One 类）直接返回带概率的结构化答案 —— 无需解析 JSON，也就没有「回复格式不对」这一整类故障。每次判定约 $0.0001。',
      },
    ],
    honest: 'Jev 默认关闭并标为 Beta，这是有意为之：它集成容易，但单次判定目前较慢（1.4–6.6 秒，供给侧产能爬坡中），且 2026 年 9 月一份独立评测发现决策模型在 15 个标注任务中有 14 个落后于最优 LLM。它适合批量、后台和高频路由；交互式轮次里 LLM 裁判仍是更好的默认。决策模型不应答时，路由器会退到你的 LLM 裁判；如果那个也不行，就完全不路由。',
  },
  gearPresets: {
    label: '档位预设',
    title: '三个档位，一个旋钮',
    subtitle: '默认偏保守（愿意花钱）。当你的工作负载不是这样时，一条命令就能移动门槛。',
    gears: [
      { id: 'eco', name: 'eco', threshold: 'θ 0.5', desc: '保守 —— 只有明确需要的轮次才跑 Smart。最便宜。' },
      { id: 'default', name: 'default', threshold: 'θ 0.33', desc: '均衡 —— 模糊的结论偏向 Smart。默认值。' },
      { id: 'sport', name: 'sport', threshold: 'θ 0.2', desc: '积极 —— 只要有一丁点可能需要 Smart 就升级。适合架构密集的活。' },
    ],
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
    intro: '两条经验在 pi 和 DeepSeek Harness 上都适用。Fast 档 —— 选智价比最好的模型：每块钱买到最强的智能，而且默认情况下这一档还兼任裁判，所以它的判断力同样重要。Smart 档 —— 留在云端前沿模型。80 GB 以下本地 Smart 不实用，96 GB 仍通常打不过包月套餐。我们故意列档位名（Flash、Luna、Haiku、K3……）而不是会过期的具体模型 ID：ID 随每次发布变，档位名不会变。装好之后跑 /model 就能看到你环境里当前是哪个。',
    patterns: [
      {
        title: '编码订阅套餐',
        summary: '一份订阅，多家模型。要么用 Token 网关（一把 key 代发各家主流模型），要么复用你已经付费的编码工具订阅 —— 大多数都暴露 OpenAI 兼容端点。',
        fast: {
          models: [
            '任意 Flash 类（DeepSeek V4 / Qwen Flash / MiMo Flash）',
            'Luna（OpenAI · OpenCode Zen / Go）',
            'Haiku（Anthropic）',
          ],
        },
        smart: {
          models: [
            'Sol / Terra（OpenAI · OpenCode Zen / Go）',
            'Qwen Max',
            'Kimi K3',
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
        summary: '一家 provider 两档 —— 最简配置。你已经在某家付费、不想换 key 时用这个。右列按能力升序排列，它同时就是你的回退链。',
        groupRows: [
          { group: 'Anthropic', fast: 'Haiku', smart: 'Sonnet → Opus → Fable' },
          { group: 'OpenAI', fast: 'Luna', smart: 'Terra → Sol → Astra' },
          { group: 'Google', fast: 'Flash-Lite', smart: 'Flash → Pro' },
          { group: '阿里（Qwen）', fast: 'Plus / Flash', smart: 'Max' },
          { group: 'DeepSeek', fast: 'Flash', smart: 'Pro' },
          { group: 'Z.AI（GLM）', fast: 'Flash / Highspeed', smart: '主线' },
          { group: '月之暗面（Kimi）', fast: 'K2.x / K2.7-Code', smart: 'K3' },
          { group: '小米（MiMo）', fast: 'Flash', smart: 'Pro / UltraSpeed' },
          { group: 'xAI（Grok）', fast: 'Fast', smart: '主线' },
        ],
        bestFor: '从零到路由最快 —— 一家、一个账单、一个额度池。',
      },
      {
        title: '跨 Provider 混合',
        summary: '每档取各家最强。路由真正体现价值的地方就在这里：成本的不对称负责省钱，厂商家族的不对称负责抗故障 —— 跨两个家族的链能熬过任何单点故障。',
        groupRows: [
          { group: '编码 · 最低成本', fast: '任意 DeepSeek V4 Flash', smart: '任意 Anthropic Opus 级' },
          { group: '编码 · 多 provider 备份', fast: 'DeepSeek V4 Flash + GLM-5.x-Flash', smart: 'Anthropic Opus + GPT-5.x Sol + Kimi K3' },
          { group: '编码 · 包月（性价比最高）', fast: 'OpenCode Go 的 Flash 类', smart: 'OpenCode Go 最强（Grok / GPT Luna / Kimi K3）' },
          { group: '1 M 上下文 · 长仓库或 PDF 研究', fast: '任意带 1 M 上下文的 Flash 类', smart: 'Kimi K3 或 Gemini Pro' },
          { group: '多模态（图 / 视频）', fast: '任意 Flash 类', smart: 'Anthropic Opus（视觉）或 Gemini Pro' },
          { group: '多语种 / 中文优先', fast: '任意 Flash 类', smart: 'Qwen Max' },
          { group: '欧洲 / GDPR 优先', fast: 'DeepSeek Flash（经 OpenRouter）', smart: 'Mistral medium' },
        ],
        bestFor: '每档选最强，不管谁卖。',
      },
    ],
    note: '裁判还需要一个支持 JSON 模式的端点：任意现代 Flash 类模型都行（Qwen 3.5+、Gemma 4、MiMo V2.x）；本地裁判每轮会多花约 0.5–2 秒。一个稳妥的起点是：Fast 档本地、Smart 档云端，裁判跑在你最信任的那类工作对应的 Smart 模型上。模型 ID 和价格每月变 —— 上游文档用 `curl -s https://models.dev/api.json | jq` 跟踪，完整的 provider 目录在 models.dev。',
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
        a: '完全安全。配置前路由器什么都不做；纯 TypeScript、只依赖一个宿主提供的包；/router off 可立即停用。没有任何绑定。',
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
        a: '可以。/route-force <tier> 为下一轮锁定 Smart 或 Fast；/route-force <provider>/<model> 锁定具体模型；/route-force auto 清除覆盖。注意路由开启时路由器拥有模型选择权：用 pi 自带的 /model 切换只对当轮生效，下一个路由点会重新确立该层的模型链。要完全手动控制就跑 /router off。',
      },
      {
        q: '和 OpenRouter Auto Router 有什么区别？',
        a: 'OpenRouter Auto Router 零配置、市场驱动 —— 很适合裸 API 调用，而且它优化的是质量而不是你的账单（他们文档明说路由到贵模型是「working as designed」）。你不能自己定义分层、看不到结论、也不能控制故障行为。Shift Router 按任务形状路由、在 agent 内部、在你定义的两条链之间切换，而且每个结论都能在 /router status 里看到。Cloudflare AI Gateway Dynamic Routing 是第三种选择：带配额和回退的版本化路由流，但你要为每个 gateway 画图，而且它看到的是请求而不是任务 —— 它没有「这一轮是架构工作」的概念。手动切换则是免费的，直到你第一次忘了切回来。',
      },
      {
        q: '和其他 pi 路由器有什么区别？',
        a: 'pi-bifrost 用 7 步规则加历史启发式、4 个档位决策 —— 覆盖更多场景但更难推演，而且它省的是订阅额度不是钱。pi-smart-router 跑 12 步本地管线、没有 LLM，用公式估算成本，需要本地 DB 和 ML 模型。Shift Router 把决策收敛到一份可读的 prompt（或一个决策模型）、两档一个心智模型、Smart CTO 委派 Fast 子代理的编排、省了多少钱的遥测，以及一条「不卡死」而是逐级退到无路由的裁判链。CC-Switch 是另一个类别：桌面应用，在会话之间手动切换 provider 配置 —— 可以共存。',
      },
      {
        q: '能混用不同 provider 的模型吗？',
        a: '可以 —— 随便混。每层是一个按优先级排序的 {provider, model, priority} 列表，fast 层用 DeepSeek、smart 层用 Kimi，一份配置全搞定。',
      },
      {
        q: '可以监控运行情况吗？',
        a: '可以。`/router status` 会打开一个 TUI 仪表盘：当前模型、上一轮决策及其理由、带内联冷却的两条层链、每个模型的上下文占用与缓存命中率，以及一个 Money 区块（每档花费、节省基线，发生委派时还有一行 orchestration $0.0689 · 5 workers）。基线回答的是「如果每轮都跑你的 Smart 模型（即不装路由器）会花多少」；价格缺失时它显示 unavailable，而不是编一个数字。',
      },
      {
        q: '怎么调节降级行为？',
        a: '就一个旋钮：`reworkPenalty`（R，默认 3）—— 门槛是 θ = 1/R，即「跑 Smart 在期望成本上划算」的临界点。R 调低（2）更保守更便宜；R 调高（5）更积极，对架构密集的活更安全。你不必碰这些数学：`/router eco`、`/router default`、`/router sport` 会帮你设好，而且可以 tab 补全。另外 `minConfidence`（默认 0.5）是置信度地板，低于它的结论直接作废，路由器保持不动。升级始终是即时的 —— 只有降级要等，而且要等 `downgradeMemory`（默认 2）次连续的确定性 fast 判定。',
      },
      {
        q: '裁判本身不可用时会怎样？',
        a: '先保持，再逐级下调 —— 它从不通猜。裁判调用失败不再伪造一个 fast 判定（那过去会在连续两次故障后静默把一个 Smart 会话降级）。现在路由器走一条可用性阶梯：配置的裁判链 → LLM 裁判 → 完全不路由。最后一档的行为等于「插件没装」：不切模型、清编排、恢复你的会话模型 —— 并且每个会话只提醒一次。某个裁判源 429 时会立即落到下一个，而不是硬撑。',
      },
      {
        q: '什么是决策模型，该拿它当裁判吗？',
        a: '常规做法是问语言模型要 JSON 再解析它；决策模型（TypeSafe Jev / System One 类）则是你给它一个结构化问题，它直接返回带概率的结构化答案。路由器拿这个概率直接和 θ 比，所以没有解析步骤，也没有「回复格式不对」这一整类故障；而且只计输入 token，单次判定约 $0.0001。LiteLLM 在他们自己的 Auto Router 里实测：jev 分类器比 Haiku 级快 5.43×、便宜 96%。但要诚实地说：它单次判定目前较慢（1.4–6.6 秒，供给侧产能爬坡中），且 2026 年 9 月一份独立评测发现决策模型在 15 个标注任务中有 14 个落后于最优 LLM —— 所以它默认关闭、标为 Beta、排在菜单第三位。批量和后台路由很适合它；交互式轮次里 LLM 裁判仍是更好的默认。如果它不应答，路由器会退到你的 LLM 裁判。',
      },
      {
        q: '服务商欠费了，路由器会发现吗？',
        a: '会。HTTP 402（包括 "Insufficient Balance" 和「余额不足」）以及 Codex 用量上限耗尽（"The usage limit has been reached"）都被识别为限流类故障，那个欠费模型会进入 16m 冷却，同层下一个健康模型接管 —— 就在这一轮里，你不用手动切。',
      },
      {
        q: '有 DeepSeek Harness 版本吗？',
        a: '有 —— dsh-shift-router（v0.6.0），同一个路由器的 DSH 适配版，已对齐到上游 v1.6.0。通过 cordis.patch.yml 接入 harness，走它自己的 agent/request 管线，自身零运行时依赖。配置有两种方式：完整的 GUI 卡片（Settings → Plugins → Plugin configuration 里的 “Shift-Router” 卡片，两档模型链都能直接编辑）和交互式 /router config 编辑器（get / set / unset / diff）。能力和 pi 版一致，包括验收审计和三种裁判模式，另外还有 /router allow-workers on|off —— 它把你的 Fast 链写进 harness 自己的 subagent 白名单，让委派出去的 worker 真的跑在 Fast 上。424 个单元测试加一个免凭据的 headless e2e。安装：git clone https://github.com/green-dalii/dsh-shift-router && npm install && npm run build，然后 dsh plugin --profile web add <路径>。',
      },
      {
        q: '在 DeepSeek Harness 上，子代理也会被路由吗？',
        a: '不会。subagent 工具派生的子代理带有 origin === \'subagent\' 标记，保持它们自己的模型 —— 路由器只驱动顶层 agent。worker 的模型由部署配置钉住（tool-subagent 的 agentOptions），默认会继承父 agent 的模型。从 v0.6.0 起可以用 /router allow-workers on 修正：它把你的 Fast 层模型链写进 harness 的 subagent-model-selection 白名单，让编排器把 worker 钉在 Fast 上。/router status 会显示实时计数（round x/max, esc y/threshold）。',
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