/**
 * Wordshiper 25-locale dual-font typography (web adaptation of app Spec v4.0).
 *
 * Layers:
 *  - word  → scripture / slogan / lineage (classic serif / calligraphic)
 *  - ui    → chrome, nav, body (modern sans)
 *
 * Web notes vs app:
 *  - No iOS/Android fork — use web-legal stacks (Inter, system-ui, Noto, Pretendard).
 *  - Site language codes: `zh` = zh-Hans, `zh-TW` = zh-Hant.
 *  - Hebrew (`he`) is Modern Israeli Hebrew; Biblical Hebrew is verse text later.
 */

export type TypoScript =
  | "latin"
  | "cyrillic"
  | "cjk"
  | "devanagari"
  | "arabic"
  | "hebrew"
  | "tamil"
  | "thai"
  | "ethiopic";

export interface LocaleTypography {
  /** Canonical locale id used for data-typo */
  id: string;
  word: string;
  ui: string;
  script: TypoScript;
  dir: "ltr" | "rtl";
  /** Google Fonts families to lazy-load (omit self-hosted / already global) */
  google?: string[];
  /** Extra stylesheet URLs (e.g. Pretendard CDN) */
  stylesheets?: string[];
}

/** Aliases from site language picker → typography id */
const ALIASES: Record<string, string> = {
  zh: "zh-Hans",
  "zh-CN": "zh-Hans",
  "zh-TW": "zh-Hant",
  "zh-HK": "zh-Hant",
  "zh-MO": "zh-Hant",
  fil: "tl",
  iw: "he",
};

const LATIN_WORD = "EB Garamond";
const LATIN_UI = "Inter";

function latin(id: string): LocaleTypography {
  return {
    id,
    word: LATIN_WORD,
    ui: LATIN_UI,
    script: "latin",
    dir: "ltr",
    google: [
      "EB+Garamond:ital,wght@0,400;0,500;0,700;1,400;1,500",
      "Inter:wght@400;500;700",
    ],
  };
}

/** Master table — 25 locales */
export const TYPOGRAPHY_BY_LOCALE: Record<string, LocaleTypography> = {
  // Group 1 — Latin (13)
  en: latin("en"),
  es: latin("es"),
  fr: latin("fr"),
  pt: latin("pt"),
  id: latin("id"),
  de: latin("de"),
  sw: latin("sw"),
  tl: latin("tl"),
  vi: latin("vi"),
  it: latin("it"),
  yo: latin("yo"),
  pl: latin("pl"),
  nl: latin("nl"),

  // Group 2 — Cyrillic
  ru: {
    id: "ru",
    word: "Lora",
    ui: "Inter",
    script: "cyrillic",
    dir: "ltr",
    google: ["Lora:ital,wght@0,400;0,500;0,700;1,400;1,500"],
  },
  uk: {
    id: "uk",
    word: "Lora",
    ui: "Inter",
    script: "cyrillic",
    dir: "ltr",
    google: ["Lora:ital,wght@0,400;0,500;0,700;1,400;1,500"],
  },

  // Group 3 — CJK
  "zh-Hans": {
    id: "zh-Hans",
    word: "LXGW WenKai",
    ui: "Noto Sans SC",
    script: "cjk",
    dir: "ltr",
    google: [
      "LXGW+WenKai:wght@400;700",
      "Noto+Sans+SC:wght@400;500;700",
    ],
  },
  ja: {
    id: "ja",
    word: "Shippori Mincho",
    ui: "Noto Sans JP",
    script: "cjk",
    dir: "ltr",
    google: [
      "Shippori+Mincho:wght@400;500;700",
      "Noto+Sans+JP:wght@400;500;700",
    ],
  },
  ko: {
    id: "ko",
    word: "Binggrae Taom",
    ui: "Pretendard",
    script: "cjk",
    dir: "ltr",
    // Word: self-hosted Binggrae; UI: Pretendard CDN
    stylesheets: [
      "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css",
    ],
  },
  "zh-Hant": {
    id: "zh-Hant",
    word: "LXGW WenKai TC",
    ui: "Noto Sans TC",
    script: "cjk",
    dir: "ltr",
    google: [
      "LXGW+WenKai+TC:wght@400;700",
      "Noto+Sans+TC:wght@400;500;700",
    ],
  },

  // Group 4 — Complex scripts
  hi: {
    id: "hi",
    word: "Yatra One",
    ui: "Poppins",
    script: "devanagari",
    dir: "ltr",
    google: ["Yatra+One", "Poppins:wght@400;500;700"],
  },
  ar: {
    id: "ar",
    word: "Amiri",
    ui: "Cairo",
    script: "arabic",
    dir: "rtl",
    google: [
      "Amiri:ital,wght@0,400;0,700;1,400",
      "Cairo:wght@400;500;700",
    ],
  },
  he: {
    id: "he",
    word: "Frank Ruhl Libre",
    ui: "Assistant",
    script: "hebrew",
    dir: "rtl",
    google: [
      "Frank+Ruhl+Libre:wght@400;500;700",
      "Assistant:wght@400;500;700",
    ],
  },
  ta: {
    id: "ta",
    word: "Noto Serif Tamil",
    ui: "Noto Sans Tamil",
    script: "tamil",
    dir: "ltr",
    google: [
      "Noto+Serif+Tamil:wght@400;500;700",
      "Noto+Sans+Tamil:wght@400;500;700",
    ],
  },
  th: {
    id: "th",
    word: "Noto Serif Thai",
    ui: "Prompt",
    script: "thai",
    dir: "ltr",
    google: [
      "Noto+Serif+Thai:wght@400;500;700",
      "Prompt:wght@400;500;700",
    ],
  },
  am: {
    id: "am",
    word: "Noto Serif Ethiopic",
    ui: "Noto Sans Ethiopic",
    script: "ethiopic",
    dir: "ltr",
    google: [
      "Noto+Serif+Ethiopic:wght@400;500;700",
      "Noto+Sans+Ethiopic:wght@400;500;700",
    ],
  },
};

export const TYPOGRAPHY_LOCALE_IDS = Object.keys(TYPOGRAPHY_BY_LOCALE);

export const DEFAULT_TYPOGRAPHY: LocaleTypography = TYPOGRAPHY_BY_LOCALE.en;

export function normalizeTypoLocale(code: string): string {
  const raw = (code || "en").trim();
  return ALIASES[raw] ?? ALIASES[raw.toLowerCase()] ?? raw;
}

export function getTypography(code: string): LocaleTypography {
  const id = normalizeTypoLocale(code);
  return TYPOGRAPHY_BY_LOCALE[id] ?? DEFAULT_TYPOGRAPHY;
}

export function isTypographyLocale(code: string): boolean {
  const id = normalizeTypoLocale(code);
  return id in TYPOGRAPHY_BY_LOCALE;
}

const loadedHref = new Set<string>();

function injectStylesheet(href: string, id: string) {
  if (typeof document === "undefined") return;
  if (loadedHref.has(href) || document.getElementById(id)) {
    loadedHref.add(href);
    return;
  }
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.wsTypo = "1";
  document.head.appendChild(link);
  loadedHref.add(href);
}

/** Lazy-load Google Fonts + CDN sheets for a locale (idempotent). */
export function ensureTypographyAssets(typo: LocaleTypography) {
  if (typo.google?.length) {
    const families = typo.google.map((f) => `family=${f}`).join("&");
    const href = `https://fonts.googleapis.com/css2?${families}&display=swap`;
    injectStylesheet(href, `ws-typo-gfont-${typo.id}`);
  }
  typo.stylesheets?.forEach((href, i) => {
    injectStylesheet(href, `ws-typo-sheet-${typo.id}-${i}`);
  });
}

/** Apply dual-font CSS variables + document lang/dir on <html>. */
export function applyTypographyToDocument(languageCode: string) {
  if (typeof document === "undefined") return;

  // Align with site locale aliases (zh → zh-Hans, zh-TW → zh-Hant, fil → tl)
  let code = (languageCode || "en").trim();
  if (code === "zh" || code === "zh-CN") code = "zh-Hans";
  if (code === "zh-TW" || code === "zh-HK" || code === "zh-MO") code = "zh-Hant";
  if (code === "fil") code = "tl";
  if (code === "iw") code = "he";

  const typo = getTypography(code);
  ensureTypographyAssets(typo);

  const root = document.documentElement;
  // Prefer BCP47-ish lang for a11y / hyphenation
  root.lang =
    typo.id === "zh-Hans" ? "zh-CN" : typo.id === "zh-Hant" ? "zh-TW" : typo.id;
  root.dir = typo.dir;
  root.dataset.typo = typo.id;
  root.dataset.script = typo.script;
  root.dataset.locale = languageCode;

  root.style.setProperty("--font-ui", `'${typo.ui}', var(--font-ui-fallback)`);
  root.style.setProperty(
    "--font-word",
    `'${typo.word}', var(--font-word-fallback)`,
  );

  // Italic word stack: keep self-hosted EB Garamond italic for Latin; else family itself
  if (typo.word === "EB Garamond") {
    root.style.setProperty(
      "--font-word-italic",
      `'EB Garamond Italic Var', 'EB Garamond', var(--font-word-fallback)`,
    );
  } else {
    root.style.setProperty(
      "--font-word-italic",
      `'${typo.word}', var(--font-word-fallback)`,
    );
  }

  // Force UI inheritance so every page/component picks up locale fonts
  root.style.setProperty("font-family", `var(--font-ui)`);
}
