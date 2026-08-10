/**
 * Site locales with Spec v4.0 typography AND full renewal copy.
 * Language picker only exposes these — no silent English-only UI.
 */
import { TYPOGRAPHY_BY_LOCALE, normalizeTypoLocale } from "@/data/typography";
import { expandedLanguages, type Language } from "@/data/expanded-languages";

/** Canonical site language codes (picker + copy registry). */
export const SITE_LOCALE_CODES = [
  "en",
  "ko",
  "zh",
  "zh-TW",
  "ja",
  "es",
  "fr",
  "de",
  "it",
  "pt",
  "ru",
  "uk",
  "ar",
  "hi",
  "th",
  "vi",
  "id",
  "tl",
  "nl",
  "pl",
  "sw",
  "ta",
  "am",
  "yo",
] as const;

export type SiteLocaleCode = (typeof SITE_LOCALE_CODES)[number];

const SITE_SET = new Set<string>(SITE_LOCALE_CODES);

/** Normalize picker / storage codes → site locale id. */
export function normalizeSiteLocale(code: string): SiteLocaleCode {
  const raw = (code || "en").trim();
  if (raw === "zh-CN" || raw === "zh-Hans") return "zh";
  if (raw === "zh-HK" || raw === "zh-Hant") return "zh-TW";
  if (raw === "fil") return "tl";
  if (SITE_SET.has(raw)) return raw as SiteLocaleCode;
  const typo = normalizeTypoLocale(raw);
  if (typo === "zh-Hans") return "zh";
  if (typo === "zh-Hant") return "zh-TW";
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
    raw === "fil"
  );
}

/** Languages shown in the site picker (metadata from expanded list). */
export function getSiteLanguages(): Language[] {
  const byCode = new Map(expandedLanguages.map((l) => [l.code, l]));
  return SITE_LOCALE_CODES.map((code) => {
    const found = byCode.get(code);
    if (found) return found;
    return {
      code,
      name: code,
      nativeName: code,
      flag: "🌐",
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
