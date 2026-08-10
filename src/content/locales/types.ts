// Shared translation type. EN and ZH must satisfy this shape in full —
// no optional fallback fields, no silent EN fallback (each language owns
// its own copy).

export interface Translations {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    quickStart: string;
    howItWorks: string;
    useCases: string;
    models: string;
    faq: string;
    github: string;
    languageLabel: string;
    enLabel: string;
    zhLabel: string;
  };
  hero: {
    badge: string;
    slogan: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    /** Mock terminal panel copy — keep it concise. */
    terminal: {
      title: string;
      subtitle: string;
      statusLabel: string;
      statusModel: string;
      statusTier: string;
      statusTierValue: string;
      statusMode: string;
      judgeLabel: string;
      judgeValue: string;
      windowLabel: string;
      windowValue: string;
      logLines: { time: string; text: string }[];
    };
    trustStrip: { label: string; desc: string }[];
  };
  quickStart: {
    label: string;
    title: string;
    subtitle: string;
    steps: {
      title: string;
      desc: string;
      /** Optional hint block shown under desc (principles / status metrics) */
      hintTitle?: string;
      hintItems?: { label: string; desc: string }[];
      /** Optional CTA link shown under desc */
      link?: { label: string; href: string };
    }[];
  };
  models: {
    label: string;
    title: string;
    subtitle: string;
    intro: string;
    valueProps: {
      title: string;
      desc: string;
    }[];
    fast: {
      tier: string;
      role: string;
      emoji: string;
      desc: string;
      bullets: string[];
    };
    smart: {
      tier: string;
      role: string;
      emoji: string;
      desc: string;
      bullets: string[];
    };
    judge: {
      label: string;
      title: string;
      desc: string;
      code: string;
    };
    window: {
      label: string;
      title: string;
      desc: string;
      code: string;
    };
    fallback: {
      label: string;
      title: string;
      desc: string;
      code: string;
    };
  };
  useCases: {
    label: string;
    title: string;
    subtitle: string;
    scenarios: {
      title: string;
      desc: string;
    }[];
    cta: { label: string; href: string };
  };
  modelsPage: {
    label: string;
    title: string;
    intro: string;
    patterns: {
      title: string;
      summary: string;
      /** Two-tier layout: fast + smart columns */
      fast?: { models: string[] };
      smart?: { models: string[] };
      /** Grouped-row layout: each row = a group (memory tier / provider / scenario) mapping fast -> smart */
      groupRows?: { group: string; fast: string; smart: string }[];
      /** Footnote under the group rows */
      note?: string;
      bestFor: string;
    }[];
    note: string;
  };
  faq: {
    label: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  footer: {
    brand: string;
    tagline: string;
    copyrightParts: {
      prefix: string;
      author: { name: string; url: string };
      suffix: string;
    };
    sections: {
      product: { title: string; links: { label: string; href: string }[] };
      resources: { title: string; links: { label: string; href: string }[] };
      more: { title: string; links: { label: string; href: string }[] };
    };
    languageLabel: string;
  };
}