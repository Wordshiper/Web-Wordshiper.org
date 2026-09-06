/**
 * Site locales with Spec v4.0 typography AND full renewal copy.
 * Language picker only exposes these — no silent English-only UI.
 *
 * Hebrew (`he`) is Modern Israeli Hebrew (ISO 639-1 / BCP-47 `he`, `he-IL`).
 * UI copy is niqqud-less Ivrit. Biblical Hebrew belongs on verse text later,
 * not as a site locale. Legacy ISO code `iw` maps here.
 */
import { TYPOGRAPHY_BY_LOCALE, normalizeTypoLocale } from "@/data/typography";
import { expandedLanguages, type Language } from "@/data/expanded-languages";

/**
 * Picker order:
 * 1. English — site default
 * 2. Spanish — largest Catholic-language community after English
 * 3–25. Remaining locales by estimated Christian + Catholic speaker
 *     population (Pew Research / World Christian Database-style totals).
 */
export const SITE_LOCALE_CODES = [
  "en",
  "es",
  "pt",
  "fr",
  "tl",
  "ru",
  "zh",
  "de",
  "it",
  "pl",
  "id",
  "uk",
  "am",
  "ko",
  "yo",
  "sw",
  "ar",
  "vi",
  "nl",
  "zh-TW",
  "ta",
  "hi",
  "ja",
  "th",
  "he",
] as const;

export type SiteLocaleCode = (typeof SITE_LOCALE_CODES)[number];

/**
 * Language identification follows W3C i18n + Unicode CLDR + ISO 639-1 / BCP-47:
 * the language is the code + endonym, not a flag. Flags are territorial hints
 * only. Pluricentric languages (en, es, fr, pt, ar, sw, ta) show no single
 * country flag. Traditional Chinese uses CLDR zh-Hant territories HK + TW.
 */
export interface SiteLocaleDisplay {
  /** Territorial emoji cluster; empty when a single flag would mislead. */
  flag: string;
  /** Script / variety mark (简, 繁). */
  scriptLabel?: string;
}

export const SITE_LOCALE_DISPLAY: Record<SiteLocaleCode, SiteLocaleDisplay> = {
  en: { flag: "" },
  es: { flag: "" },
  pt: { flag: "" },
  fr: { flag: "" },
  tl: { flag: "🇵🇭" },
  ru: { flag: "🇷🇺" },
  zh: { flag: "", scriptLabel: "简" },
  de: { flag: "🇩🇪" },
  it: { flag: "🇮🇹" },
  pl: { flag: "🇵🇱" },
  id: { flag: "🇮🇩" },
  uk: { flag: "🇺🇦" },
  am: { flag: "🇪🇹" },
  ko: { flag: "🇰🇷" },
  yo: { flag: "🇳🇬" },
  sw: { flag: "" },
  ar: { flag: "" },
  vi: { flag: "🇻🇳" },
  nl: { flag: "🇳🇱" },
  "zh-TW": { flag: "🇭🇰🇹🇼", scriptLabel: "繁" },
  ta: { flag: "" },
  hi: { flag: "🇮🇳" },
  ja: { flag: "🇯🇵" },
  th: { flag: "🇹🇭" },
  he: { flag: "🇮🇱" },
};

const SITE_SET = new Set<string>(SITE_LOCALE_CODES);

/** Normalize picker / storage codes → site locale id. */
export function normalizeSiteLocale(code: string): SiteLocaleCode {
  const raw = (code || "en").trim();
  if (raw === "zh-CN" || raw === "zh-Hans") return "zh";
  if (raw === "zh-HK" || raw === "zh-Hant" || raw === "zh-MO") return "zh-TW";
  if (raw === "fil") return "tl";
  if (raw === "iw") return "he";
  if (SITE_SET.has(raw)) return raw as SiteLocaleCode;
  const typo = normalizeTypoLocale(raw);
  if (typo === "zh-Hans") return "zh";
  if (typo === "zh-Hant") return "zh-TW";
  if (typo === "he" || typo === "iw") return "he";
  if (SITE_SET.has(typo)) return typo as SiteLocaleCode;
  return "en";
}

export function isSiteLocale(code: string): boolean {
  const raw = (code || "").trim();
  if (!raw) return false;
  if (SITE_SET.has(raw)) return true;
  return (
    raw === "zh-CN" ||
    raw === "zh-Hans" ||
    raw === "zh-HK" ||
    raw === "zh-Hant" ||
    raw === "zh-MO" ||
    raw === "fil" ||
    raw === "iw"
  );
}

/**
 * Map a BCP-47 tag (browser/OS) onto a supported site locale.
 * Tries the full tag, then Chinese script/region heuristics, then the primary subtag.
 */
export function matchSiteLocale(tag: string): SiteLocaleCode | null {
  const raw = (tag || "").trim();
  if (!raw) return null;
  if (isSiteLocale(raw)) return normalizeSiteLocale(raw);

  const lower = raw.replace(/_/g, "-").toLowerCase();
  const primary = lower.split("-")[0] || "";

  if (primary === "zh") {
    if (
      lower.includes("tw") ||
      lower.includes("hk") ||
      lower.includes("mo") ||
      lower.includes("hant")
    ) {
      return "zh-TW";
    }
    return "zh";
  }

  if (primary === "fil" || primary === "tl") return "tl";
  if (primary === "iw" || primary === "he") return "he";
  if (SITE_SET.has(primary)) return primary as SiteLocaleCode;
  return null;
}

/**
 * Prefer the visitor's browser/OS language list (navigator.languages),
 * then navigator.language. Falls back to English when unsupported.
 */
export function detectBrowserLocale(): SiteLocaleCode {
  if (typeof navigator === "undefined") return "en";
  const candidates = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean);
  for (const tag of candidates) {
    const matched = matchSiteLocale(tag);
    if (matched) return matched;
  }
  return "en";
}

export function getSiteLocaleDisplay(code: string): SiteLocaleDisplay {
  const locale = normalizeSiteLocale(code);
  return SITE_LOCALE_DISPLAY[locale];
}

/** Languages shown in the site picker, in SITE_LOCALE_CODES order. */
export function getSiteLanguages(): Language[] {
  const byCode = new Map(expandedLanguages.map((l) => [l.code, l]));
  return SITE_LOCALE_CODES.map((code) => {
    const found = byCode.get(code);
    const display = SITE_LOCALE_DISPLAY[code];
    const flag = display.flag || display.scriptLabel || "";
    if (found) {
      return { ...found, flag };
    }
    return {
      code,
      name: code,
      nativeName: code,
      flag,
      region: "Other",
    } satisfies Language;
  });
}

/** Typography table id for a site locale. */
export function typographyIdForSiteLocale(code: string): string {
  const site = normalizeSiteLocale(code);
  if (site === "zh") return "zh-Hans";
  if (site === "zh-TW") return "zh-Hant";
  return site;
}

export function siteLocaleHasTypography(code: string): boolean {
  return typographyIdForSiteLocale(code) in TYPOGRAPHY_BY_LOCALE;
}
