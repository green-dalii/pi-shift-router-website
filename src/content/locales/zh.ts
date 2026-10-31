import type { Translations } from './types';

export const zh: Translations = {
  meta: {
    title: 'Shift Router — 每条消息都用对的模型',
    description:
      '给 pi-coding-agent 和 DeepSeek Harness 用的模型路由。一个小模型读一遍你的消息，决定这轮用便宜快的还是用强的，所以贵的那个只接真正需要的活。某个服务商挂了，下一个接上；碰上大活，强模型先做规划，再拆给几个便宜的去做。',
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
    badge: 'pi-coding-agent 与 DeepSeek Harness 都能用',
    subhead: '小模型来判断。拿不准的时候，它什么都不动。',
    headline1: '别让 CTO 干工程师的活。',
    headline2: '反之亦然。',
    subtitle:
      '你指定两个模型：一个便宜快的，一个强的。每条消息开始前，一个更小的模型先读一遍，决定这轮用哪个。便宜的跑代码、测试和小修。强的跑架构、安全，还有那些你不愿意做两遍的决定。判断本身是几千个 token、一秒左右。',
    ctaPrimary: '快速上手',
    ctaSecondary: 'pi-shift-router 文档',
    ctaTertiary: 'dsh-shift-router 文档',
    terminal: {
      title: 'pi-shift-router — 在 pi 中',
      subtitle: '状态栏 · toast · 自动',
      statusLabel: 'router',
      statusModel: 'deepseek-flash',
      statusTier: '档位',
      statusTierValue: 'fast',
      statusMode: 'auto',
      judgeLabel: 'judge',
      judgeValue: '🧭 judging…',
      windowLabel: '预设',
      windowValue: 'default',
      logLines: [
        { time: '🦾', text: '[deepseek-flash] → 修这个失败的测试' },
        { time: '🧭', text: 'judging…' },
        { time: '🧠', text: '[Claude Opus] ← 架构问题，升到强的那个' },
        { time: '⚠️', text: 'Claude Opus 触发限流 → 换到 gpt-astra，1 分钟后重试' },
        { time: '🧠', text: '[gpt-astra] ← 强的这一档接手' },
      ],
    },
    trustStrip: [
      { label: '任何服务商都能用', desc: '这家挂了，下一个接上' },
      { label: '不用另外搭什么', desc: '就住在你的 agent 里，不用服务，不用数据库' },
      { label: 'MIT，不额外拉东西', desc: '随时能关，删掉也没事' },
    ],
  },
  family: {
    label: '家族产品',
    title: '两个 agent，一个路由器。',
    subtitle: '功能、命令、默认行为都一样。装一个就行。',
    products: [
      {
        name: 'pi-shift-router',
        version: 'v1.8.0',
        edition: 'for pi-coding-agent',
        desc: '最早的那版。在 pi 里一条命令装上，就开始判断。大活可以拆给便宜的 worker 去做。',
        highlights: ['运行时零依赖 · 约 409 kB', '裁判三种来源：LLM 链 / 独立链 / 决策模型', '641 个单元测试'],
        links: [
          { label: 'GitHub', href: 'https://github.com/green-dalii/pi-shift-router' },
          { label: 'npm', href: 'https://www.npmjs.com/package/pi-shift-router' },
        ],
      },
      {
        name: 'dsh-shift-router',
        version: 'v0.7.5',
        edition: 'for DeepSeek Harness',
        desc: '作为插件装上，然后到设置里配，或者跑 /router config。',
        highlights: ['自己不带任何依赖', 'GUI 配置卡片 + 命令行实时改', '443 个测试 · 免凭据 e2e'],
        links: [{ label: 'GitHub', href: 'https://github.com/green-dalii/dsh-shift-router' }],
      },
    ],
    note: '两个仓库各自发版，DeepSeek Harness 这边可能会慢一个版本。',
  },
  quickStart: {
    label: '快速上手',
    title: '装上，指定两个模型，完事。',
    subtitle: '你要设的就这两样。剩下的全自动，/router off 随时关掉。',
    runtimes: [
      {
        id: 'pi',
        name: 'pi-shift-router',
        steps: [
          {
            title: '安装',
            desc: '一条命令。pi 把它写进你的设置，下次启动就生效。',
            hintTitle: '你装进来的是什么',
            hintItems: [
              { label: '不额外拉东西', desc: '它自己不带包，用到的那一个 pi 本来就有' },
              { label: '不做任何采集', desc: '不收集东西，也不后台常驻' },
              { label: '删了也没事', desc: '删掉它，pi 就回去用你原来选的那个模型' },
            ],
          },
          {
            title: '选好你的模型',
            desc: '跑 /router config，选两个：一个便宜快的，一个强的。存给全局，或者只给当前项目。',
            hintTitle: '怎么选',
            hintItems: [
              { label: '便宜那个', desc: '你手里性价比最高的，不是绝对最便宜那个 —— 判断也跑在它上面，它的判断力同样重要' },
              { label: '强的那个', desc: '一个前沿模型，干要紧的活' },
              { label: '可以放多个', desc: '每一边放 2–3 个，某个被限流的时候另一个接上' },
            ],
            link: {
              label: '查看推荐配对',
              href: '/zh/models',
            },
          },
          {
            title: '看它跑起来',
            desc: '/router status 会打开一个面板，告诉你它刚做了什么决定、花了多少。你下一条消息就是它第一次派活。',
            hintTitle: '面板怎么看',
            hintItems: [
              { label: '花费', desc: '两边各花了多少，以及不装它的话这一轮会话要花多少' },
              { label: '升降', desc: '升到强模型多少次，又降回来多少次' },
              { label: '暂停中', desc: '被限流后正在等的模型；时间到了自己回来' },
              { label: '预设', desc: '它有多愿意花钱 —— /router eco、default 还是 sport' },
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
            desc: '克隆、构建、注册到你的 harness profile。不需要任何凭据，默认值都是安全的。',
            hintTitle: 'bundle 方式',
            hintItems: [
              { label: '准备', desc: 'git clone … && npm install && npm run build' },
              { label: '注册', desc: 'dsh plugin --profile web add /path/to/dsh-shift-router' },
              { label: '改配置', desc: '设置里的卡片，或者 /router config —— 存下就生效，不用重启' },
            ],
          },
          {
            title: '选好你的模型',
            desc: '在设置里的卡片配，或者用 /router config。两边写的是同一份配置。',
            hintTitle: '怎么选',
            hintItems: [
              { label: '便宜那个', desc: '你手里性价比最高的 —— 判断默认也跑在它上面' },
              { label: '强的那个', desc: '一个前沿模型，干要紧的活' },
              { label: '可以放多个', desc: '每一边放 2–3 个，某个被限流的时候另一个接上' },
            ],
          },
          {
            title: '看它跑起来',
            desc: '/router status 会告诉你两边的配置和编排开没开。你下一条消息就是它第一次派活。',
            hintTitle: '面板怎么看',
            hintItems: [
              { label: '两边的配置', desc: '便宜那个（判断也跑在它上面）和强的那个' },
              { label: '编排', desc: 'auto 或 idle —— 大活会不会拆给便宜的 worker' },
              { label: '花费', desc: '两边各花了多少，对比全部跑强的会花多少' },
            ],
          },
        ],
      },
    ],
  },
  models: {
    label: '工作原理',
    title: '你大部分的活不需要强模型。',
    subtitle: '便宜和强的之间价差能到 4 倍到 50 倍。所以强的只接真正需要的活。',
    intro:
      '简单活送去强模型，浪费的是一次价差。难的活留在便宜模型上，代价大得多：得重发一遍，最后还是得为强模型付钱，再加上你发现问题搭进去的那个下午。所以它有意识地偏向贵的一侧 —— 大约三条消息里有一条，就够格用强的。再往下，它宁可什么都不改，也不猜。',
    valueProps: [
      {
        title: '你要求的大部分事很小',
        desc: '改个变量名、加个测试、修个错别字。这不需要前沿模型，而便宜模型还更快。',
      },
      {
        title: '判断几乎不要钱',
        desc: '一次很小的调用，一两秒，按你便宜模型的价格算。省下一次强的调用，够付几百次。',
      },
      {
        title: '服务商今天不太顺',
        desc: '限流、超时、或者账户余额见底 —— 你给这个活列的下一个模型会接上，通常就在同一条消息里。它不会自己悄悄换到贵的那一侧。',
      },
    ],
    fast: {
      tier: 'Fast',
      role: '工程师',
      emoji: '🦾',
      desc: '写代码、加测试、修 bug、同一个改动铺到一百个文件上。答案已经定了，剩下的是准确执行。一次重命名不该让你付旗舰模型的钱。',
      bullets: [
        '写代码、跑测试、修 bug',
        '同一个改动铺到很多文件',
        '任何低风险的活',
      ],
    },
    smart: {
      tier: 'Smart',
      role: 'CTO',
      emoji: '🧠',
      desc: '占的量少，但错了都难受。架构、安全、会改变你下一步做什么的那次评审、你不愿意做两遍的决定。它跑的是完整的一轮，所以代码是它自己写的。',
      bullets: [
        '架构和技术选型',
        '会改变后续走向的评审',
        '任何不好回退的事',
      ],
    },
    judge: {
      label: '裁判',
      title: '每条消息一次，很小的调用',
      desc: '一个小模型读一遍你的消息，回答两件事：哪个模型来答，它有多确定。这个数字就是「这轮需要强模型的概率」。这是整个系统里唯一的一次判断，之后选中的模型就按自己的水平把活干完。',
      code: 'judge: { mode: fast-chain | custom | decision }',
    },
    window: {
      label: '门槛',
      title: '就一个旋钮',
      desc: '就 R 这一个数，默认 3，门槛约是三条里有一条。调高更省，调低更放开。也可以直接用预设：/router eco、/router default、/router sport。',
      code: 'economics: { reworkPenalty: 3, downgradeMemory: 2 }',
    },
    fallback: {
      label: '出状况的时候',
      title: '换下一个，而不是重试',
      desc: '限流、服务端报错、或者余额见底 —— 那个模型每次失败就多等一会儿，你给这个活列的下一个接上来，通常就在同一条消息里。判断器本身也够不着的时候，它会退：换一个判断器，再不行就完全不路由。它不会为了继续运转而编一个答案。',
      code: 'cooldown: 1m → 4m → 16m → 1h → 4h → 6h',
    },
    orchestration: {
      label: '一个模型不够用的时候',
      title: '拆开，而不是换一个更大的',
      desc: '有些活不是同一件事的难版本，它本来就是好几件事。碰上这种，强的那个就不再自己一个人干：它先规划，给一个便宜的 worker 写清楚一块活的要求，读回来看看，不对就再发一次。简单的消息不会走这条路。',
      bullets: [
        '规划、写要求、验收，再来一轮',
        '每次跑完都审一遍：回答有没有依据、问题有没有被回答、有没有拿占位当完成',
        '每个 worker 的花费单列一行，不混进主账',
        'worker 起步时没有历史，这正是它便宜的原因 —— 一件窄活大约 $0.004，把 176k token 的对话复制到一个新会话要 $0.06',
        '两个硬停：最多 3 轮，或者同一块活失败 2 次之后强模型自己上',
        '需要 pi-subagents；没装的话，复杂消息照旧直接跑强模型',
      ],
    },
  },
  judgeModes: {
    label: '裁判模式',
    title: '判断可以来自三个地方',
    subtitle: '默认判断来自干活的那个便宜模型。你也可以换。',
    modes: [
      {
        id: 'fast-chain',
        name: '便宜那个模型',
        badge: '默认',
        desc: '用你平时跑活的便宜模型来判断。不用配置。',
      },
      {
        id: 'custom',
        name: '单独一个模型',
        badge: '',
        desc: '让一个指定的模型专门做所有判断，跟干活的模型分开。如果你有某个模型特别信得过它的判断，就用这个。',
      },
      {
        id: 'decision',
        name: '专为判断做的模型',
        badge: 'Beta',
        desc: '就为这一件事做的：给它一个问题，它回一个答案加一个确定程度。它不会返回坏掉的结果，每次大约 $0.0001。从 pi 1.8 起这条路走 pi 自己的分类器层，里面有 53 个：Jev、OpenAI Decisions、Cloudflare Clef、Perplexity Decider。标 Beta 是因为它现在确实慢。',
      },
    ],
    honest: '决策模型默认是关着的。这是判断，不是谨慎：它现在确实慢，一次判断要 1.4 到 6.6 秒，这是服务商那边还在扩容量。它适合批量和后台的活；你坐在那儿等的那一轮，用 LLM 判断器。它不应答了，路由器会退到 LLM 判断器。',
  },
  gearPresets: {
    label: '档位预设',
    title: '一个旋钮，三挡',
    subtitle: '选个挡位就行，预设会替你把旋钮调好。',
    gears: [
      { id: 'eco', name: 'eco', threshold: 'θ 0.5', desc: '更省。只有明确需要的消息才用强的。最便宜。' },
      { id: 'default', name: 'default', threshold: 'θ 0.33', desc: '默认。两个都像的时候，它选强的。' },
      { id: 'sport', name: 'sport', threshold: 'θ 0.2', desc: '更放开。只要有实打实的可能需要，就用强的。适合以架构和规划为主的活。' },
    ],
  },
  useCases: {
    label: '使用场景',
    title: '模型从哪来',
    subtitle: '随便混。每一边就是一串模型，第一个最好。',
    scenarios: [
      {
        title: '好几家服务商',
        desc: '每边放两三个。哪家没额度了，下一个接上。',
      },
      {
        title: '一家服务商，两个层次',
        desc: '一张账单，一套额度。他们便宜的跑日常，最强的跑难活。',
      },
      {
        title: '本地加云端',
        desc: '便宜的跑在你自己机器上，强的跑在云端。日常活不出本机，难的活照样用最好的模型。',
      },
    ],
    cta: {
      label: '看看推荐配对',
      href: '/zh/models',
    },
  },
  modelsPage: {
    label: '模型选择',
    title: '怎么挑这两个模型',
    intro: '两条规则，pi 和 DeepSeek Harness 都适用。Fast 这一档：挑你手头性价比最好的那个，别挑最便宜的 —— 默认情况下裁判也跑在它上面，它的判断力是你买到的东西的一部分。Smart 这一档：留在云端前沿模型；本地在 80 GB 显存左右以下很难受，就算有 96 GB，包月套餐通常还是更划算。这里有个刻意的选择：我们列的是档位名（Flash、Luna、Haiku、K3），不是会过期的具体型号。型号每次发版都变，档位名不变。装好之后跑 /model，看看你现在有的是哪一个。',
    patterns: [
      {
        title: '编码订阅套餐',
        summary: '一份订阅本来就带好几个模型。要么挂个网关（一把 key 通到各家），要么直接复用你已经在付的编码工具订阅 —— 它们大多支持 OpenAI 接口。',
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
        note: '可以复用的订阅：OpenCode Zen（OpenAI 兼容）、GitHub Copilot（BYOK，OpenAI 和 Anthropic）、Cursor（Pro / Pro+ / Ultra 额度池）、OpenAI Codex（随 ChatGPT Plus、Pro 或 Business）。',
        bestFor: '不用新注册什么，一份账单。',
      },
      {
        title: '本地模型按显存挑',
        summary: 'Fast 档跑本地的量化模型（q4-k-m、NVFP4、MXFP4、AWQ-int4，或者 1–2 bit 三元）。显存或统一内存过了 64 GB，Smart 也能本地跑。粗略算：Q4_K_M 下显存 ≈ 参数 × 0.6。',
        groupRows: [
          { group: '≤ 32 GB', fast: 'LFM2.5-8B-A1B（8.5B）、granite-4.1-8b（8.8B）、Qwen3.6-27B（dense，q4 ≈ 14 GB）、gemma-4-26b-a4b-it（q4 ≈ 13 GB）、Qwen3.6-35B-A3B（MoE 36B/3B，q4 ≈ 18 GB）、Laguna-XS-2.1（MoE 33B/3B，q4 ≈ 17 GB）、Ternary-Bonsai-27B（1.58-bit ≈ 7 GB，笔记本或手机就能跑）', smart: '云端前沿模型' },
          { group: '32–128 GB', fast: 'Fable-Fusion-711-NEO-MAX-MTP GGUF（27B，2026-07，后训练做得最好）、gemma-4-31B-it（q4 ≈ 16 GB）、Laguna-S-2.1（117.6B，q4 ≈ 59 GB，需要 64 GB 以上）', smart: 'Fable-Fusion-711 基础权重，或者云端前沿' },
          { group: '≥ 128 GB', fast: 'Fable-Fusion-711-NEO-MAX-MTP GGUF（还是它 —— 后训练比原始大小更管用）', smart: 'DeepSeek-V4-Flash（284 B MoE / 13 B active，UD-Q4_K_XL ≈ 155 GB，需要 192 GB 以上统一内存；128 GB 级别就用 1–2 bit 三元）' },
        ],
        note: '上面的尺寸都是量化后的，也就是你实际要跑的东西，不是 fp16。MoE 型号名里的 AxxB 是每个 token 的激活参数，它影响算得多快，不影响占多大硬盘 —— GGUF 或 q4 文件照样存着全部专家权重。Qwen3.6-27B 在 SWE-bench Verified 上拿到 77.2%，是能塞进 24 GB 显卡的最强开源模型。统一内存不到 256 GB 左右，本地 Smart 在性价比上很少打得过包月套餐 —— 本地跑是为了隐私或者断网环境，不是为了省钱。',
        bestFor: '隐私，或者数据不能出本机的活。只有硬活才去云端。',
      },
      {
        title: '一家服务商，上下两档',
        summary: '一个厂商，两个档位。你已经在给某家付钱、又不想管一堆 key，就用这个。右列从便宜到最强排，它同时就是你的回退顺序。',
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
        bestFor: '从零到用上路由，最短的一条路。一个厂商、一份账单、一个额度池。',
      },
      {
        title: '跨 Provider 混合',
        summary: '两边都用最强的那个，不管谁家的。路由的价值在这儿最明显：价差负责省钱，厂商分散负责抗故障，一家挂了不会把你一起带走。',
        groupRows: [
          { group: '编码 · 最低成本', fast: '任意 DeepSeek V4 Flash', smart: '任意 Anthropic Opus 级' },
          { group: '编码 · 多 provider 备份', fast: 'DeepSeek V4 Flash + GLM-5.x-Flash', smart: 'Anthropic Opus + GPT-5.x Sol + Kimi K3' },
          { group: '编码 · 包月（性价比最高）', fast: 'OpenCode Go 的 Flash 类', smart: 'OpenCode Go 最强（Grok / GPT Luna / Kimi K3）' },
          { group: '1 M 上下文 · 长仓库或 PDF 研究', fast: '任意带 1 M 上下文的 Flash 类', smart: 'Kimi K3 或 Gemini Pro' },
          { group: '多模态（图 / 视频）', fast: '任意 Flash 类', smart: 'Anthropic Opus（视觉）或 Gemini Pro' },
          { group: '多语种 / 中文优先', fast: '任意 Flash 类', smart: 'Qwen Max' },
          { group: '欧洲 / GDPR 优先', fast: 'DeepSeek Flash（经 OpenRouter）', smart: 'Mistral medium' },
        ],
        bestFor: '两边都选最强的，不管谁家卖。',
      },
    ],
    note: '还有一条要求：裁判需要一个支持 JSON 模式的接口。现在的 Flash 类都支持（Qwen 3.5+、Gemma 4、MiMo V2.x）。裁判放本地的话，每轮会多花大约 0.5 到 2 秒。一个不错的起点是：Fast 放本地，Smart 放云端，裁判用那个你最信得过的 Smart 模型。型号和价格每个月都在动 —— 上游文档用 `curl -s https://models.dev/api.json | jq` 跟，完整目录在 models.dev。',
  },
  faq: {
    label: '常见问题',
    title: '几个你可能想问的',
    subtitle: '简短回答。',
    items: [
      {
        q: '试一下安全吗？',
        a: '安全。在你选好两个模型之前它什么都不做，agent 一直用原来那个。/router off 一句话关掉，删掉文件夹就回到原来的状态。',
      },
      {
        q: '真的能省钱吗？',
        a: '能，前提是你的活儿有轻有重。日常的消息不再付旗舰模型的价，而这一次判断本身按便宜模型的价格，只花几千个 token、多 200 毫秒到 2 秒 —— 省下一次强的调用，够付几百次。但如果你发的每一条都确实很难，它省不了你什么。',
      },
      {
        q: '强模型到底做什么？',
        a: '跟便宜模型做的是同一件事，只是背后的模型更强：它思考、调工具、改文件，一直干到任务完成。代码是它自己写的，不是坐在旁边给人留评语。区别在于什么时候用它 —— 架构、安全、评审，以及任何你不愿意做两遍的事。',
      },
      {
        q: '决策模型是什么？',
        a: '大多数路由器是让一个 LLM 回答「这条难不难」，再从回复里把 JSON 解析出来。决策模型是专为这件事做的：把问题按类型递给它，它回一个选项加一个概率 —— fast，0.99。路由器拿 0.99 去和门槛比，就这么完了。不用解析，也就不需要从「模型多打了一个逗号」里恢复；字段缺了就是没结论，不会凑一个出来。一次判断只花输入 token，大约 $0.0001。这条路是 TypeSafe 的 Jev 开出来的，后来 OpenAI、Cloudflare、Perplexity 都跟上了，pi 1.8 全都接了，/router config 会列出你这套环境真的够得着的那些。它默认关着：一次判断 1.4 到 6.6 秒，比 LLM 裁判慢，所以更适合批量和后台的活；它不应答了，路由器会退到你的 LLM 裁判。',
      },
      {
        q: '模型或者裁判出错的时候会怎样？',
        a: '你接着干就行。限流、服务端报错、余额见底、Codex 用量跑满，都算：那个模型会等一阵 —— 服务端报错从 1 分钟起，其余从 16 分钟起，每失败一次就更久，最长 6 小时；你列的下一个接上，有时候就在同一条消息中间。它不会自己换到贵的那一侧，所以走强模型的那一次就一直是强的。裁判也不猜：够不着结论时它先留在当前模型，再换一个判断器，再不行就完全不路由。',
      },
      {
        q: '什么是编排？会更费钱吗？',
        a: '碰到裁判判定复杂的任务，强的那个就不一个人扛了：它先规划，把一块活写成自包含的说明交给便宜的 worker，读回结果，不对就再发一次。不会更费钱 —— 规划在强模型上，真正干活的是从空白起步的 worker（一件窄活大约 $0.004，而把 176k token 的对话复制到新会话要 $0.06），两个硬上限把它框住。每个 worker 都得交一份失败报告；同一份报告原样重发第二次，强模型就自己接管这一块。默认开着，需要 pi-subagents，/router orchestrate off 关掉。',
      },
      {
        q: '我能控制它吗？',
        a: '三个层面。看：/router status 会告诉你当前用的模型、上一次判断和理由、两边各有谁在暂停、两边各花了多少，以及全跑强的会花多少。调：R 决定它有多舍得，默认 3 —— 调高更省（日常活多用 2，架构活多用 5），也可以用 /router eco、default、sport 三个预设。接管：/route-force 锁定档位或具体模型，/route-force auto 清除，/router off 则彻底交还给你。',
      },
      {
        q: '和其他方案比有什么不一样？',
        a: 'OpenRouter Auto Router 优化的是质量不是你的账单 —— 他们自己的文档就说，路由到贵模型是「working as designed」—— 而且你定不了列表、看不到结论、也管不了失败方式。Cloudflare AI Gateway 是带配额的版本化流程，但图得你自己画，而且它看到的是请求不是任务。pi 插件里，pi-bifrost 是 4 档 7 步规则，省的是订阅额度不是钱；pi-smart-router 跑 12 步本地管线、不用 LLM，还要一个本地数据库。这个把判断收在一份你能读的 prompt、两串你能装进脑子的模型列表里，每个结论都能在 /router status 里看到。',
      },
      {
        q: '有 DeepSeek Harness 版吗？',
        a: '有 —— dsh-shift-router（v0.7.5），同一个路由器跑在 harness 上，自己不带任何依赖。作为插件装上，然后在设置里的卡片或者用 /router config 把两边的列表配好。这里说的能力它都有，另外多一个 /router allow-workers on：把你的便宜列表写进 harness 的子代理白名单，这样派出去的 worker 真的跑在便宜模型上。443 个单元测试，加一个免凭据的 e2e。安装：git clone https://github.com/green-dalii/dsh-shift-router && npm install && npm run build，然后 dsh plugin --profile web add <路径>。',
      },
    ],
  },
  footer: {
    brand: 'Shift Router',
    tagline: 'MIT 开源。随便读、随便改、随便用。',
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