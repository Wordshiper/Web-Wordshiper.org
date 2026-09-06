import type { ReactNode } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { brandDisplayForLanguage } from "@/data/brand";
import logoPrimary from "@assets/wordshiper_logo_lockup_primary_E_1786117649532.svg";

/**
 * Brand chrome stays physically LTR (logo left, actions right) in every
 * locale — including Arabic and Hebrew — so the lockup and language control
 * never swap. Page copy still follows `html[dir]`.
 */
export default function SiteHeader({
  children,
  drawer,
  homeHref = "/",
}: {
  children?: ReactNode;
  drawer?: ReactNode;
  homeHref?: string;
}) {
  const { currentLanguage } = useLanguage();
  const brandAlt = brandDisplayForLanguage(currentLanguage);
  const logoClass = "flex items-center p-1 -m-1 shrink-0";
  const logoImg = (
    <img
      src={logoPrimary}
      alt={brandAlt}
      className="h-7 sm:h-8 w-auto"
      width={180}
      height={40}
    />
  );

  return (
    <header
      dir="ltr"
      className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#E6F7FC]/80 pt-[env(safe-area-inset-top)]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 min-h-16 h-16 flex items-center justify-between gap-2">
        {homeHref.startsWith("#") ? (
          <a href={homeHref} className={logoClass} data-testid="link-logo-home">
            {logoImg}
          </a>
        ) : (
          <Link href={homeHref} className={logoClass} data-testid="link-logo-home">
            {logoImg}
          </Link>
        )}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">{children}</div>
      </div>
      {drawer}
    </header>
  );
}
