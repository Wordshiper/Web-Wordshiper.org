import { Link } from "wouter";
import { useCopy } from "@/data/renewal-copy";
import logoPrimary from "@assets/wordshiper_logo_lockup_primary_E_1786117649532.svg";

/**
 * Footer uses Primary lockup (icon + wordmark, no baked-in English slogan)
 * so the localized tagline below stays the single slogan layer.
 * Full lockup already embeds "One verse a day…" — pairing it with copy.tagline
 * duplicated the English line and fought Korean localization.
 */
export default function RenewalFooter() {
  const c = useCopy();
  return (
    <footer className="bg-white border-t border-[#E6F7FC] py-14" data-testid="footer-renewal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
          <Link
            href="/"
            className="inline-flex items-center justify-center md:justify-start p-2 -m-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00B3E4]"
            data-testid="link-footer-logo"
          >
            <img
              src={logoPrimary}
              alt="Wordshiper"
              className="h-10 sm:h-11 w-auto"
              width={220}
              height={49}
            />
          </Link>
          <p className="font-scripture-italic mt-4 text-lg text-[#003D4F] ws-text-pretty">
            {c.footer.tagline}
          </p>
          <a
            href="mailto:info@wordshiper.org"
            className="mt-3 inline-block text-sm text-gray-500 hover:text-[#0090B8] transition-colors"
          >
            info@wordshiper.org
          </a>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-gray-600"
        >
          <a href="/#routine" className="hover:text-[#0090B8] transition-colors">
            {c.nav.routine}
          </a>
          <a href="/#product" className="hover:text-[#0090B8] transition-colors">
            {c.nav.product}
          </a>
          <a href="/#movement" className="hover:text-[#0090B8] transition-colors">
            {c.nav.movement}
          </a>
          <Link href="/about" className="hover:text-[#0090B8] transition-colors">
            {c.nav.about}
          </Link>
          <Link href="/investors" className="hover:text-[#0090B8] transition-colors">
            {c.nav.investors}
          </Link>
          <a href="/#preregister" className="hover:text-[#0090B8] transition-colors font-semibold text-[#0090B8]">
            {c.nav.preregister}
          </a>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-gray-400">
        <p className="ws-text-pretty">{c.footer.legal}</p>
        <p className="text-gray-400/90">{c.footer.address}</p>
      </div>
    </footer>
  );
}
