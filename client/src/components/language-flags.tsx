import { useState } from "react";
import {
  getLanguageFlagCodes,
  getLanguageScriptMark,
} from "@/data/language-flag-sets";

type FlagSize = "sm" | "md";

const SIZE: Record<FlagSize, { img: string; mark: string }> = {
  sm: { img: "h-3 w-[1.125rem]", mark: "h-3 min-w-3 px-0.5 text-[8px]" },
  md: { img: "h-3.5 w-5", mark: "h-3.5 min-w-3.5 px-0.5 text-[9px]" },
};

function FlagImg({
  country,
  size,
}: {
  country: string;
  size: FlagSize;
}) {
  const [failed, setFailed] = useState(false);
  const cc = country.toLowerCase();

  if (failed) {
    return (
      <span
        className={`${SIZE[size].img} inline-flex items-center justify-center rounded-[2px] bg-gray-100 text-[8px] font-semibold uppercase text-gray-500 ring-1 ring-black/10`}
        aria-hidden
      >
        {cc}
      </span>
    );
  }

  return (
    <img
      src={`https://flagcdn.com/w40/${cc}.png`}
      srcSet={`https://flagcdn.com/w80/${cc}.png 2x`}
      alt=""
      width={size === "sm" ? 18 : 20}
      height={size === "sm" ? 12 : 14}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={`${SIZE[size].img} rounded-[2px] object-cover ring-1 ring-black/10 bg-gray-100`}
    />
  );
}

interface LanguageFlagsProps {
  locale: string;
  size?: FlagSize;
  /** Header trigger: keep the chip compact. */
  max?: number;
  className?: string;
}

export function LanguageFlags({
  locale,
  size = "md",
  max,
  className = "",
}: LanguageFlagsProps) {
  const codes = getLanguageFlagCodes(locale).slice(0, max ?? 8);
  const mark = getLanguageScriptMark(locale);

  if (!codes.length && !mark) return null;

  return (
    <span
      className={`inline-flex items-center gap-0.5 shrink-0 ${className}`}
      aria-hidden
    >
      {mark && (
        <span
          className={`${SIZE[size].mark} inline-flex items-center justify-center rounded-[2px] bg-gray-100 font-semibold text-gray-700 ring-1 ring-black/10`}
        >
          {mark}
        </span>
      )}
      {codes.map((cc) => (
        <FlagImg key={cc} country={cc} size={size} />
      ))}
    </span>
  );
}
