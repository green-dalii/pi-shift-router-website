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
    models: string;
    faq: string;
    github: string;
    languageLabel: string;
    enLabel: string;
    zhLabel: string;
  };
  hero: {
    badge: string;
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
    trustStrip: string[];
  };
  quickStart: {
    label: string;
    title: string;
    subtitle: string;
    steps: {
      title: string;
      desc: string;
      code?: string;
      codeLabel?: string;
    }[];
  };
  models: {
    label: string;
    title: string;
    subtitle: string;
    valueProps: {
      title: string;
      desc: string;
    }[];
    fast: {
      label: string;
      title: string;
      desc: string;
      badge: string;
      bullets: string[];
    };
    smart: {
      label: string;
      title: string;
      desc: string;
      badge: string;
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
  faq: {
    label: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  footer: {
    brand: string;
    tagline: string;
    copyright: string;
    sections: {
      product: { title: string; links: { label: string; href: string }[] };
      resources: { title: string; links: { label: string; href: string }[] };
    };
    languageLabel: string;
  };
}