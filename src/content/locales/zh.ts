import type { Translations } from './types';

export const zh: Translations = {
  meta: {
    title: 'Pi Shift Router — 给 Pi 编码 Agent 装一个聪明的路由器',
    description:
      '一个 Pi 扩展：观察每一轮对话，自动选择档位（执行走 Fast、判断走 Smart），按你已付费的 provider 顺序路由 —— 任一节点掉线就立刻降级，无感切换。',
    keywords:
      'pi shift router, pi 编码代理, 模型路由, llm router, ai 编程, 快慢分层, 代码审查, provider 故障转移, deepseek, openrouter',
  },
  nav: {
    quickStart: '快速上手',
    models: '模型选择',
    faq: '常见问题',
    github: 'GitHub',
    install: '安装扩展',
    languageLabel: '语言',
    enLabel: 'English',
    zhLabel: '中文',
  },
  hero: {
    badge: '开源 · Provider 中立 · 本地 judge',
    title1: '每一轮对话，',
    title2: '都走对的模型。',
    subtitle:
      'Pi Shift Router 看清你的请求，挑出最合适的档位，按你已付费的 provider 顺序路由 —— 任一节点掉线就立刻降级，无感切换。',
    ctaPrimary: '安装扩展',
    ctaSecondary: '查看配置',
    terminal: {
      title: 'pi-shift-router — 实时',
      subtitle: '~/.pi/agent/sessions/current · 自动',
      statusLabel: 'router',
      statusModel: 'deepseek-v4-flash',
      statusTier: '档位',
      statusTierValue: 'fast',
      statusMode: 'auto',
      judgeLabel: 'judge',
      judgeValue: 'fast · 312ms',
      windowLabel: '窗口',
      windowValue: '4/5 fast',
      logLines: [
        { time: '14:02:11', text: '[router] judge=fast latency=312ms window=4/5' },
        { time: '14:02:14', text: '[router] tier=fast model=deepseek-v4-flash provider=opencode-go priority=1' },
        { time: '14:02:38', text: '[router] judge=smart latency=487ms window=2/5' },
        { time: '14:02:39', text: '[router] tier=smart model=deepseek-v4-flash provider=opencode-go priority=1' },
      ],
    },
    trustStrip: ['12+ providers', 'MIT 开源', '运行在你自己的 Pi 进程里'],
  },
  quickStart: {
    label: '快速上手',
    title: '三分钟接好路由',
    subtitle: '克隆扩展、改一份 JSON、重启 Pi。',
    steps: [
      {
        title: '安装',
        desc: '克隆仓库，把扩展软链到 Pi agent 目录。下次启动 Pi 自动加载 —— 无需打包、无需注册中心。',
        codeLabel: '安装命令',
        code: 'git clone https://github.com/green-dalii/pi-shift-router.git\nln -s "$(pwd)/pi-shift-router" ~/.pi/agent/extensions/pi-shift-router',
      },
      {
        title: '配置',
        desc: '编辑 ~/.pi/agent/pi-shift-router.json —— 档位、模型优先级链、judge 超时、平滑窗口、UX 开关。仓库里附带一份起步模板。',
        codeLabel: '配置路径',
        code: '~/.pi/agent/pi-shift-router.json',
      },
      {
        title: '使用',
        desc: '重启 Pi。状态栏会显示当前档位；内联 toast 提示每一次路由决策。需要排查时随时切换到 verbose 模式查看完整轨迹。',
      },
    ],
  },
  models: {
    label: '模型选择',
    title: '两个档位，一份配置。',
    subtitle: '按模型擅长的事分组，让 judge 把每一轮送到合适的那一个。',
    fast: {
      label: 'Fast',
      title: '执行模式',
      desc: '日常编码、调试、按套路写代码。便宜、快、在重复性工作上很锋利 —— 你会忘记自己在为它付钱。',
      badge: '~$0.001 / 轮',
      bullets: [
        '按明确 spec 把一个功能敲出来',
        '跨多文件的机械重构',
        '生成测试脚手架、批量 find-and-replace',
      ],
    },
    smart: {
      label: 'Smart',
      title: '判断模式',
      desc: '架构、规划、code review、取舍分析。把 token 花在真正需要推理的地方 —— 而不是每个键入都花。',
      badge: '~$0.05 / 轮',
      bullets: [
        '从五个候选里挑数据模型',
        '审查一个 PR，里面混着五件不相关的事',
        '设计一个要撑十年的 API',
      ],
    },
    judge: {
      label: '自动 judge',
      title: '谁来决定？',
      desc: '一个轻量模型读上一轮和小段上下文，返回一个档位标签。超时可配 —— judge 慢了也不会让整个流程卡死。',
      code: 'judgeTimeout: 5000',
    },
    window: {
      label: '平滑',
      title: '不抖',
      desc: '一个滚动窗口记录最近几轮 + 多数阈值，避免意图不明时在档位之间来回横跳。',
      code: 'window: { size: 5, threshold: 0.6 }',
    },
    fallback: {
      label: '优先级 fallback',
      title: '一个掉线了',
      desc: '每个档位是一条有序链。第一个模型报错、超时、被限流，路由立即试下一个 —— 你的流程毫无感觉。',
      code: 'priority: 1 → 2 → 3',
    },
  },
  faq: {
    label: '常见问题',
    title: '几个常见问题',
    subtitle: '开始路由前值得知道的少数几件事。',
    items: [
      {
        q: '自动 judge 怎么决定走 fast 还是 smart？',
        a: '一个轻量 LLM（每个档位可独立配置）读上一轮用户输入和一小段上下文，返回一个档位标签。judge 完全跑在你本地的 Pi 进程里 —— 除非所选档位的模型本身去调外部 provider，否则不会有任何数据离开你的机器。',
      },
      {
        q: '我的 API key 或代码会被发给路由器吗？',
        a: '不会。路由器就住在你的 Pi 进程里。它只是把 prompt 转给配置里写的那个 provider，跟今天 Pi 自己转发 prompt 一模一样 —— 没有第三方服务器、没有埋点、没有统计。',
      },
      {
        q: 'Provider 出故障时会怎样？',
        a: '每个档位是一条优先级链。如果排在最上面的模型报错、超时或被限流，路由会立刻试下一个。只有当整条链全挂时你才会看到一个 toast 提示。',
      },
      {
        q: '能给某些轮次手动指定档位，不走自动 judge 吗？',
        a: '可以。把 routing.mode 改成 "manual"，然后用斜杠命令（/fast 或 /smart）逐轮指定，或通过 per-session override 固定。auto-judge 是 opt-in 的 —— 你可以一直用 manual，只在需要时再触发 judge。',
      },
      {
        q: '本地模型（Ollama、LM Studio）支持吗？',
        a: '支持 —— 任何 OpenAI 兼容端点都可以。把优先级链指向你本地的 server，judge 也可以跑在本地第一个可用模型上。prompt 全程不出本机。',
      },
      {
        q: '怎么更新或回滚？',
        a: '在软链进去的那个目录里 git pull。Pi 热加载扩展代码；你的 JSON 配置保持原样。要锁定版本，切到某个 tag，Pi 会一直用它，直到你再次 pull。',
      },
    ],
  },
  footer: {
    brand: 'Pi Shift Router',
    tagline: '给 Pi 编码 Agent 装一个聪明的路由器。',
    copyright: 'MIT 开源。由 Greener-Dalii 维护。',
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
          { label: 'Issues', href: 'https://github.com/green-dalii/pi-shift-router/issues' },
          { label: 'Discussions', href: 'https://github.com/green-dalii/pi-shift-router/discussions' },
          { label: 'Releases', href: 'https://github.com/green-dalii/pi-shift-router/releases' },
        ],
      },
    },
    languageLabel: '语言',
  },
};