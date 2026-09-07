import type { SiteLocaleCode } from "@/data/site-locales";

/**
 * ISO 3166-1 alpha-2 country codes shown beside each site language.
 * Pluricentric languages get 2–8 flags so the row is scannable
 * (same idea as Traditional Chinese → Hong Kong + Taiwan).
 */
export const LANGUAGE_FLAG_SETS: Record<SiteLocaleCode, string[]> = {
  en: ["us", "gb", "au", "ca", "nz", "ie"],
  es: ["es", "mx", "ar", "co", "cl", "pe"],
  pt: ["br", "pt", "ao", "mz"],
  fr: ["fr", "ca", "be", "ch", "sn"],
  tl: ["ph"],
  ru: ["ru"],
  zh: ["cn", "sg"],
  de: ["de", "at", "ch"],
  it: ["it", "ch"],
  pl: ["pl"],
  id: ["id"],
  uk: ["ua"],
  am: ["et"],
  ko: ["kr"],
  yo: ["ng", "bj"],
  sw: ["tz", "ke", "ug", "rw"],
  ar: ["sa", "eg", "ae", "ma", "jo", "iq"],
  vi: ["vn"],
  nl: ["nl", "be"],
  "zh-TW": ["hk", "tw"],
  ta: ["in", "lk", "sg", "my"],
  hi: ["in"],
  ja: ["jp"],
  th: ["th"],
  he: ["il"],
};

/** Script / variety mark shown before Chinese flag sets. */
export const LANGUAGE_SCRIPT_MARK: Partial<Record<SiteLocaleCode, string>> = {
  zh: "简",
  "zh-TW": "繁",
};

export function getLanguageFlagCodes(locale: string): string[] {
  const codes = LANGUAGE_FLAG_SETS[locale as SiteLocaleCode];
  return codes?.length ? codes : [];
}

export function getLanguageScriptMark(locale: string): string | undefined {
  return LANGUAGE_SCRIPT_MARK[locale as SiteLocaleCode];
}
