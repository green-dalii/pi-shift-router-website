import type { Translations } from './types';

export const zh: Translations = {
  meta: {
    title: 'Pi Shift Router — 给 Pi 编码 Agent 装一个聪明的路由器',
    description:
      '一个自动路由的 Pi 编码 Agent 扩展：每一轮在 Fast 程序员与 Smart CTO 两个角色间切换 —— LLM Judge 选角色，被选中的模型驱动整轮，多模型 fallback 链保障运行，零运行时依赖。',
    keywords:
      'pi shift router, pi 编码代理, 模型路由, llm router, ai 编程, 快慢分层, 代码审查, provider 故障转移, deepseek, openrouter, pi 扩展',
  },
  nav: {
    quickStart: '快速上手',
    models: '模型选择',
    faq: '常见问题',
    github: 'GitHub',
    languageLabel: '语言',
    enLabel: 'English',
    zhLabel: '中文',
  },
  hero: {
    badge: '开源 · 零依赖 · Node 24+',
    title1: '每一轮对话，',
    title2: '都走对的角色。',
    subtitle:
      'pi-shift-router 把 Pi 的每一轮路由到 Fast 程序员或 Smart CTO 角色。一个小 LLM Judge 选角色；被选中的模型随后驱动整轮 —— 所有思考、所有工具调用。',
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
    trustStrip: ['零运行时依赖', 'MIT 开源', '202 个单元测试', 'Node 24+'],
  },
  quickStart: {
    label: '快速上手',
    title: '三步就能跑起来',
    subtitle: 'Node.js ≥ 24、pi-agent ≥ 0.80。一个 Provider 密钥，每层一个模型。',
    steps: [
      {
        title: '安装',
        desc: '用 pi 包管理器从 npm 安装。会写入 ~/.pi/agent/settings.json，下次启动 pi 自动加载。',
        codeLabel: '安装命令',
        code: 'pi install npm:pi-shift-router',
      },
      {
        title: '配置',
        desc: '在 pi 里运行 /router config，为 Fast 和 Smart 各选一个模型，保存到用户或项目作用域。两层默认都为空 —— 配置前路由器不起作用。',
        codeLabel: '配置',
        code: '/router config',
      },
      {
        title: '验证',
        desc: '/router status 显示层级和模型；下一轮触发首次 Judge 调用。之后可用 /router quiet、/router verbose 和 /route-force 调整。',
        codeLabel: '验证',
        code: '/router status',
      },
    ],
  },
  models: {
    label: '模型选择',
    title: '两个档位，一个 Judge。',
    subtitle: '每一轮按心智模式（执行 vs 判断）分类，路由到合适的档位。',
    fast: {
      label: 'Fast',
      title: '程序员',
      desc: '执行整轮任务：写代码、跑测试、修 bug、套用既定模式。适合例行、路径明确、低风险的工作。',
      badge: '🦾 程序员',
      bullets: [
        '写代码、修 bug',
        '跑测试、套用模式',
        '例行、路径明确的工作',
      ],
    },
    smart: {
      label: 'Smart',
      title: 'CTO',
      desc: '任务复杂时驱动整轮 —— 架构、设计 review、安全审计、多步规划、不可逆操作。它不是 judge，它自己动手干所有活。',
      badge: '🧠 CTO',
      bullets: [
        '架构与设计 review',
        '安全审计、多步规划',
        '高风险、路径不明、要深度',
      ],
    },
    judge: {
      label: 'LLM Judge',
      title: '一次小调用，角色随后驱动',
      desc: '一个小 LLM —— 就是 Fast 层模型本身 —— 以 JSON mode 把每一轮分类为 fast 或 smart。它是一次性分类；被选中的档位随后驱动整个 agent run。',
      code: 'judgeTimeout: 5000',
    },
    window: {
      label: '降级门',
      title: '升级立即，降级要看趋势',
      desc: '升级（Fast → Smart）立即生效 —— 质量优先。降级需要持续趋势：最近 5 轮中 fast 投票占比 ≥ 60%。',
      code: 'window: { size: 5, threshold: 0.6 }',
    },
    fallback: {
      label: '运行时故障转移',
      title: '冷却后切同层下一个',
      desc: '遇 429/5xx，失败模型进入指数退避冷却（1m → 2m → 4m … 封顶 30m），同层下一个健康模型接管 —— 同轮完成，不跨层。2xx 响应立即清除冷却。',
      code: 'cooldown: 1m → 2m → 4m → 30m',
    },
  },
  faq: {
    label: '常见问题',
    title: '几个常见问题',
    subtitle: '内容直接取自 README。',
    items: [
      {
        q: 'Smart 层到底是什么？只是审查者吗？',
        a: 'Smart 层是 CTO 角色 —— 任务复杂时它驱动整轮：架构、设计 review、安全审计、多步规划、不可逆操作。它不是 judge、也不是审查者：它自己写代码、调工具、跑循环，以那个智力层级完成整轮工作。',
      },
      {
        q: 'Judge 会增加明显延迟吗？',
        a: '一次 Judge 调用是几千 token、按 Fast 层价格计费。端到端分类往返通常 200ms–2s，调用期间状态栏显示 ⚖ judging…。',
      },
      {
        q: 'Primary 模型 429 或超时怎么办？',
        a: '指数退避冷却：primary 标记冷却（1m → 2m → 4m … 封顶 30m），同层下一个健康模型接管。2xx 响应立即清除冷却。手动覆盖始终绕过冷却。',
      },
      {
        q: '能强制指定某一轮的档位或模型吗？',
        a: '可以。/route-force <tier> 为下一轮锁定 Smart 或 Fast；/route-force <provider>/<model> 锁定指定模型。/route-force auto 清除覆盖。',
      },
      {
        q: '能跨 Provider 混用吗？',
        a: '可以。每层是一个有序的 {provider, model, priority} 列表，任意组合。Judge 会走完整个 fast 链才放弃，与路由共享同一冷却表。',
      },
      {
        q: '和 pi-model-router、pi-smart-router 有什么区别？',
        a: '它们解决不同问题，可以叠加使用：pi-shift-router 是 LLM 分类器 + 零依赖 + 运行时故障转移；pi-model-router 增加三层路由、USD 预算与关键词规则；pi-smart-router 做本地 ONNX ML 推理。',
      },
    ],
  },
  footer: {
    brand: 'Pi Shift Router',
    tagline: '为 Pi 编码 Agent 在 Fast 程序员与 Smart CTO 两个角色间自动路由。',
    copyright: 'MIT 开源。由 green-dalii 维护。',
    sections: {
      product: {
        title: '产品',
        links: [
          { label: '快速上手', href: '#quick-start' },
          { label: '模型选择', href: '#models' },
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
    },
    languageLabel: '语言',
  },
};