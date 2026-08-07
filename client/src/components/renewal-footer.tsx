import { Link } from "wouter";
import { useCopy } from "@/data/renewal-copy";
import logoFull from "@assets/wordshiper_logo_lockup_full_E_1786117649532.svg";

export default function RenewalFooter() {
  const c = useCopy();
  return (
    <footer className="bg-white border-t border-[#E6F7FC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="inline-block bg-white rounded-lg">
            <img src={logoFull} alt="Wordshiper — One verse a day. A life of worship." className="h-12 w-auto" />
          </div>
          <p className="font-scripture-italic mt-3 text-[#003D4F]">{c.footer.tagline}</p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#0090B8]">{c.nav.routine}</Link>
          <Link href="/about" className="hover:text-[#0090B8]">{c.nav.about}</Link>
          <Link href="/investors" className="hover:text-[#0090B8]">{c.nav.investors}</Link>
          <a href="/#preregister" className="hover:text-[#0090B8]">{c.nav.preregister}</a>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} {c.footer.legal} · EIN: 33-1561112
      </div>
    </footer>
  );
}
