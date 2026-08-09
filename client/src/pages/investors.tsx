import { Link } from "wouter";
import { useCopy } from "@/data/renewal-copy";
import SEO from "@/components/seo";
import Footer from "@/components/renewal-footer";
import ExpandedLanguageSwitcher from "@/components/expanded-language-switcher";
import { ArrowLeft, Mail, ShieldCheck, Compass, Cpu, Layers } from "lucide-react";
import logoPrimary from "@assets/wordshiper_logo_lockup_primary_E_1786117649532.svg";

const CYAN = "#00B3E4";

export default function InvestorsPage() {
  const c = useCopy().investors;
  const icons = [Compass, ShieldCheck, Cpu, Layers];
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Wordshiper — Investors" description={c.sub} />
      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#E6F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center p-1 -m-1" data-testid="link-logo-home">
            <img src={logoPrimary} alt="Wordshiper" className="h-8 w-auto" width={180} height={40} />
          </Link>
          <div className="flex items-center gap-4">
            <ExpandedLanguageSwitcher compact />
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#0090B8]" data-testid="link-back-home">
              <ArrowLeft className="w-4 h-4" /> {c.backHome}
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-24">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-[#E6F7FC] text-[#0090B8]">{c.navTitle}</span>
          <h1 className="mt-6 text-3xl sm:text-5xl font-bold text-[#201E1F] leading-tight whitespace-pre-line ws-text-balance">{c.title}</h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto ws-text-pretty">{c.sub}</p>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-16 grid sm:grid-cols-2 gap-6">
          {c.points.map((p, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="p-8 rounded-2xl border border-[#E6F7FC] bg-[#F8FCFE]">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: CYAN }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#201E1F]">{p.t}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed text-sm">{p.d}</p>
              </div>
            );
          })}
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-20 text-center">
          <h2 className="text-2xl font-bold text-[#201E1F]">{c.teamTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {c.team.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl border border-[#E6F7FC]">
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ background: CYAN }}>
                  {m.n.charAt(0)}
                </div>
                <div className="mt-3 font-bold text-[#201E1F]">{m.n}</div>
                <div className="text-sm text-gray-500">{m.r}</div>
              </div>
            ))}
          </div>
          <p className="font-scripture-italic mt-12 text-xl text-[#003D4F]">{c.philosophy}</p>
        </section>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-20">
          <div className="rounded-3xl p-10 text-center text-white" style={{ background: "linear-gradient(135deg,#0C1519,#16242B)" }}>
            <h2 className="text-2xl font-bold">{c.contactTitle}</h2>
            <p className="mt-3 text-[#ECEAE0]/70">{c.contactSub}</p>
            <a
              href="mailto:contact@wordshiper.org?subject=Wordshiper%20Investment%20Inquiry"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full font-bold text-white shadow-lg hover:opacity-90 transition-opacity"
              style={{ background: CYAN }}
              data-testid="button-investor-contact"
            >
              <Mail className="w-5 h-5" /> {c.contactBtn}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
