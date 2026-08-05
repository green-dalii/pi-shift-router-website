// Translation registry — EN is the source of truth, ZH must match the shape.
// Both locales satisfy the full Translations interface (no optional fallback).

import { en } from './en';
import { zh } from './zh';
import type { Translations } from './types';

export const translations: Record<'en' | 'zh', Translations> = {
  en,
  zh,
};

export type Locale = keyof typeof translations;
export type { Translations };

/** Get the translations object for a locale, defaulting to EN. */
export function getTranslations(locale: string): Translations {
  return (translations as Record<string, Translations>)[locale] ?? translations.en;
}

/**
 * Resolve a URL prefix for a locale.
 * EN → '' (root), ZH → '/zh'.
 */
export function localePrefix(locale: string): string {
  return locale === 'en' ? '' : `/${locale}`;
}

/**
 * Swap the locale prefix on an absolute path.
 * Used by the language switcher to keep the user on the same page
 * when switching languages.
 */
export function swapLocalePrefix(pathname: string, targetLocale: string): string {
  const trimmed = pathname.replace(/^\/(en|zh)(?=\/|$)/, '');
  const prefix = localePrefix(targetLocale);
  // Ensure trailing slash for root homepages so the URL matches the route
  if (trimmed === '' || trimmed === '/') {
    return prefix === '' ? '/' : `${prefix}/`;
  }
  return `${prefix}${trimmed}`;
}