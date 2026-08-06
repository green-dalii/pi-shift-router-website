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
      judgeValue: '⚖ judging…',
      windowLabel: '窗口',
      windowValue: '4/5 fast',
      logLines: [
        { time: '🦾', text: '[MiniMax-M3] → 修这个失败的测试' },
        { time: '⚖', text: 'judging…' },
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
        codeLabel: '安装命令',
        code: 'pi install npm:pi-shift-router',
      },
      {
        title: '选好你的模型',
        desc: '运行 /router config，选一个 fast 模型和一个 smart 模型 —— 就用你已经在用的那两个。可以存到用户级或项目级。',
        codeLabel: '配置',
        code: '/router config',
      },
      {
        title: '看它自己工作',
        desc: '/router status 显示你的配置；下一轮就完成第一次分类。之后全自动 —— 想控制时用 /router quiet 和 /route-force 调整。',
        codeLabel: '验证',
        code: '/router status',
      },
    ],
  },
  models: {
    label: '工作原理',
    title: '一个简单的想法',
    subtitle: '每个任务有难度，每个模型有价格。pi-shift-router 自动把两者匹配起来。',
    intro:
      '就像一支团队：程序员又快又便宜地把活干了，CTO 在关键时刻把关。同一件事，两种脑力 —— 你还没打完字，路由器就已经决定该用谁。',
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
      label: 'Fast',
      title: '程序员',
      desc: '你的日常码农。日常活又快又稳 —— 写代码、跑测试、修 bug，不会为一次重命名或重构浪费前沿模型。',
      badge: '🦾 你的日常帮手',
      bullets: [
        '日常编码与修 bug',
        '测试与重复性改动',
        '简单、低风险的任务',
      ],
    },
    smart: {
      label: 'Smart',
      title: 'CTO',
      desc: '处理难题的架构师 —— 架构、设计 review、安全、多步规划、不可逆的改动。它不只是给意见，它亲自把活干完。',
      badge: '🧠 专治难题',
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
        a: '不会。分类调用只需几千 token、约 200ms–2s。调用期间状态栏显示 ⚖ judging… —— 大多数用户根本感觉不到。',
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
        q: '和 pi-model-router、pi-smart-router 有什么区别？',
        a: '它们解决不同问题，可以叠加使用：pi-shift-router 是 LLM 分类器 + 零依赖 + 运行时故障转移；pi-model-router 增加三层路由、USD 预算与关键词规则；pi-smart-router 做本地 ONNX ML 推理。',
      },
    ],
  },
  footer: {
    brand: 'Pi Shift Router',
    tagline: '为 Pi 编码 Agent 自动选模型：日常活便宜又快，复杂活交给聪明模型。',
    copyright: 'MIT 开源。由 green-dalii 维护。',
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
      friends: {
        title: '友情链接',
        links: [
          { label: 'Karpathy LLM Wiki', href: 'https://llmwiki.greenerai.top' },
        ],
      },
    },
    languageLabel: '语言',
  },
};