import type { Translations } from './types';

export const zh: Translations = {
  meta: {
    title: 'Pi Shift Router — 别再手动挑模型，专心写代码',
    description:
      '一个 pi-coding-agent 扩展：日常编码自动走便宜快速的模型，复杂任务自动升级到前沿模型。省 token、抗故障、零风险可试。',
    keywords:
      'pi shift router, pi 编码代理, 模型路由, llm router, ai 编程, 省钱, 降低 ai 成本, 快慢分层, provider 故障转移, deepseek, openrouter, pi 扩展',
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
    badge: '为 pi-coding-agent 打造的开源扩展',
    title1: '每一轮对话，',
    title2: '都用对的模型。',
    subtitle:
      '日常编码用便宜快速的模型，复杂问题交给聪明模型。某个服务商掉线或限流？自动切换到下一个 —— 任务不中断。',
    ctaPrimary: '快速上手',
    ctaSecondary: '查看文档',
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
  quickStart: {
    label: '快速上手',
    title: '三步就能跑起来',
    subtitle: '装完什么都不变 —— 只有你选好模型后路由才开始工作。随时可卸载，没有任何绑定。',
    steps: [
      {
        title: '安装',
        desc: '一条命令。pi 会写入你的设置，下次启动自动加载 —— 不用重新编译，也不用改任何配置。',
      },
      {
        title: '选好你的模型',
        desc: '运行 /router config，选一个 fast 模型和一个 smart 模型 —— 就用你已经在用的那两个。可以存到用户级或项目级。',
      },
      {
        title: '看它自己工作',
        desc: '/router status 显示你的配置；下一轮就完成第一次分类。之后全自动 —— 想控制时用 /router quiet 和 /route-force 调整。',
      },
    ],
  },
  models: {
    label: '工作原理',
    title: '一个简单的想法',
    subtitle: '每个任务有难度，每个模型有价格。pi-shift-router 自动把两者匹配起来。',
    intro:
      '就像一支团队：程序员又快又便宜地把日常活干了；CTO 在关键时刻亲自接管整轮。同一件事，两种脑力 —— 你还没打完字，路由器就已经决定该用谁。',
    valueProps: [
      {
        title: '日常活保持便宜',
        desc: '只有任务真的需要深度时，judge 才升级 —— 日常编码一直跑在你的平价模型上，昂贵的前沿模型只留给真正重要的事。',
      },
      {
        title: '判断本身几乎免费',
        desc: '一次微型分类调用 —— 按你最低价计费几千 token，耗时 200ms–2s。相比避免误用 Smart 省下的钱，这点开销不值一提。',
      },
      {
        title: 'provider 掉线也不停',
        desc: '如果某个模型 429 或超时，它进入短暂冷却，同层下一个健康模型自动接管 —— 就在同一轮内，你什么都不用做。',
      },
    ],
    fast: {
      tier: 'Fast',
      role: '程序员',
      emoji: '🦾',
      desc: '你的日常码农。日常活又快又稳 —— 写代码、跑测试、修 bug，不会为一次重命名或重构浪费前沿模型。',
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
      desc: '处理难题的架构师 —— 架构、设计 review、安全、多步规划、不可逆的改动。它不只是给意见，它亲自把活干完。',
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
      desc: 'provider 限流或报错时，那个模型进入冷却（1m → 30m），同层下一个健康模型接管 —— 你全程无感，继续干活。',
      code: 'cooldown: 1m → 2m → 4m → 30m',
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
    intro: '两条经验：Fast 档 —— 选能可靠解析 JSON 的最便宜模型（Judge 跑在它上面）；Smart 档 —— 留在云端前沿模型。80 GB 以下本地 Smart 不实用，96 GB 仍通常打不过包月套餐。',
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
        summary: 'Fast 档跑量化本地（q4-k-m / NVFP4 / AWQ-int4）。64+ GB 显存/统一内存后，Smart 也能本地跑。显存 ≈ 参数 × 0.6（Q4_K_M）。',
        groupRows: [
          { group: '< 32 GB', fast: 'Qwen3.6-27B（dense，q4 ≈ 14 GB）、Qwen3.6-35B-A3B（MoE，q4 ≈ 18 GB）、LFM2.5-8B-A1B', smart: '云端 —— 本地 Smart 需 64+ GB' },
          { group: '32–128 GB', fast: 'Qwen3.6-35B-A3B（MoE，q4 ≈ 18 GB）、gemma-4-31B-it（q4 ≈ 16 GB）、Qwen3.6-27B（dense，q4 ≈ 14 GB）', smart: '云端 —— 本地 Smart 需要非常大的机器' },
          { group: '128+ GB', fast: 'Qwen3.6-35B-A3B（MoE，q4 ≈ 18 GB）', smart: 'DeepSeek-V4-Flash（284 B MoE / 13 B active，Q4_K_M ≈ 175 GB —— 需 256 GB 统一内存）、GLM-5.2（2-bit ≈ 239 GB）' },
        ],
        note: '大小为 Q4_K_M 量化（生产环境，不是 fp16）。Qwen3.6-27B 在 SWE-bench Verified 拿 77.2% —— 24 GB 单卡上最强的开源权重模型。约 256 GB 统一内存以下，本地 Smart 在性价比上很少打得过包月套餐；只有隐私或离线场景才值得。',
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
        a: '能。日常任务继续用你最便宜的模型，而不是每个请求都烧旗舰。judge 本身按 fast 层价格计费几千 token —— 省下的钱远超这点开销。',
      },
      {
        q: '试一下安全吗？',
        a: '完全安全。配置前路由器什么都不做；纯 TypeScript、零运行时依赖；/router off 可立即停用。没有任何绑定。',
      },
      {
        q: 'Smart 层到底做什么？',
        a: '它是架构师角色 —— 复杂工作由它驱动整轮：架构、设计 review、安全、多步规划、不可逆的改动。它不只是给建议或审查，它自己动手写代码、把活干完。',
      },
      {
        q: 'Judge 会增加明显延迟吗？',
        a: '不会。分类调用只需几千 token、约 200ms–2s。调用期间状态栏显示 🧭 judging… —— 大多数用户根本感觉不到。',
      },
      {
        q: 'Primary 模型 429 或超时怎么办？',
        a: '你继续干活就行。失败的模型进入短暂冷却（1m → 2m → 4m … 封顶 30m），同层下一个健康模型自动接管 —— 甚至在同一轮内。请求成功就立即清除冷却。',
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
        a: '可以。/router stats 显示窗口大小、置信度分布（高/中/低/无）、累计升级/降级次数、总输出 token、当前与平均 tokens-per-second。状态栏也会在消息流式输出结束后显示实时吞吐：[🧠 kimi-k3 • 23 tok/s]。',
      },
      {
        q: '怎么调节降级行为？',
        a: '两个阈值：`threshold`（默认 0.6）控制最近 5 轮分类中要多大比例倾向 Fast 才触发降级；`minConfidence`（默认 0.5）设了一个门槛，低于它的票直接忽略。把 `threshold` 调到 0.8 能让 Smart 档停留更久。升级始终是即时的 —— 只有降级会等。',
      },
      {
        q: '和 pi-model-router、CC-Switch 有什么区别？',
        a: '它们解决不同问题，可以叠加使用：pi-shift-router 是 LLM 分类器 + 零依赖 + 同轮运行时故障转移 —— pi 里每轮全自动；pi-model-router 增加三层路由、USD 预算上限与关键词规则 —— 更重，但有跨会话成本控制；CC-Switch 是独立桌面应用，管理 Claude Code、Codex、Gemini CLI、OpenCode 等多个工具的 provider 配置 —— 手动切换，不是按轮路由。',
      },
    ],
  },
  footer: {
    brand: 'Pi Shift Router',
    tagline: '为 Pi 编码 Agent 自动选模型：日常活便宜又快，复杂活交给聪明模型。',
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
          { label: 'GitHub', href: 'https://github.com/green-dalii/pi-shift-router' },
          { label: 'npm', href: 'https://www.npmjs.com/package/pi-shift-router' },
          { label: 'Issues', href: 'https://github.com/green-dalii/pi-shift-router/issues' },
          { label: 'Discussions', href: 'https://github.com/green-dalii/pi-shift-router/discussions' },
        ],
      },
      more: {
        title: '更多项目',
        links: [
          { label: 'Karpathy LLM Wiki', href: 'https://llmwiki.greenerai.top' },
        ],
      },
    },
    languageLabel: '语言',
  },
};