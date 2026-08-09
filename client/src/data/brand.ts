/**
 * Localized Wordshiper brand names.
 * Chinese (Hans / Hant): 敬拜者 — characters identical in both scripts.
 */
export const BRAND_EN = "Wordshiper";

/** Simplified Chinese brand (简体) */
export const BRAND_ZH_HANS = "敬拜者";

/** Traditional Chinese brand (繁體) — same glyphs as Hans */
export const BRAND_ZH_HANT = "敬拜者";

/** Display with English lockup, e.g. 敬拜者（Wordshiper） */
export const BRAND_ZH_HANS_FULL = `${BRAND_ZH_HANS}（${BRAND_EN}）`;
export const BRAND_ZH_HANT_FULL = `${BRAND_ZH_HANT}（${BRAND_EN}）`;

export function brandDisplayForLanguage(language: string): string {
  const raw = (language || "en").trim();
  if (raw === "zh-TW" || raw === "zh-Hant" || raw === "zh-HK") return BRAND_ZH_HANT;
  if (raw === "zh" || raw === "zh-Hans" || raw === "zh-CN") return BRAND_ZH_HANS;
  if (raw === "ko") return "워십퍼";
  if (raw === "ja") return "ワーシッパー";
  return BRAND_EN;
}
