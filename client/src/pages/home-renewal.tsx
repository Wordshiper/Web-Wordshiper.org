import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useCopy } from "@/data/renewal-copy";
import { useLanguage } from "@/hooks/use-language";
import ExpandedLanguageSwitcher from "@/components/expanded-language-switcher";
import SEO from "@/components/seo";
import Footer from "@/components/renewal-footer";
import { useToast } from "@/hooks/use-toast";
import {
  BookOpen, Sun, UtensilsCrossed, Moon, Sparkles, Globe2, Users,
  HeartHandshake, Menu, X, ArrowRight, Bird, CircleDot, Share2, Languages,
} from "lucide-react";
import logoFull from "@assets/wordshiper_logo_lockup_full_E_1786117649532.svg";
import logoPrimary from "@assets/wordshiper_logo_lockup_primary_E_1786117649532.svg";
import iconMark from "@assets/wordshiper_icon_favicon_1786117649531.svg";
import screenHome from "@assets/ws_home_dashboard.png";
import screenJog from "@assets/wordshiper-jogwheel-open_1786117759624.png";

const CYAN = "#00B3E4";

function useCountUp(target: number, duration = 2200) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min((t - t0) / duration, 1);
            setValue(Math.floor(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { ref, value };
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-4 ${dark ? "text-[#2CC5F2]" : "text-[#0090B8]"}`}>
      <span className="w-8 h-px" style={{ background: dark ? "#2CC5F2" : CYAN }} />
      {children}
    </div>
  );
}

function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-[2.4rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}

function Header() {
  const c = useCopy();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#routine", label: c.nav.routine },
    { href: "#product", label: c.nav.product },
    { href: "#movement", label: c.nav.movement },
    { href: "#roadmap", label: c.nav.roadmap },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#E6F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center" data-testid="link-logo-home">
          <img src={logoPrimary} alt="Wordshiper" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-[#0090B8] transition-colors">
              {l.label}
            </a>
          ))}
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-[#0090B8] transition-colors">
            {c.nav.about}
          </Link>
          <Link href="/investors" className="text-sm font-medium text-gray-600 hover:text-[#0090B8] transition-colors" data-testid="link-investors">
            {c.nav.investors}
          </Link>
          <ExpandedLanguageSwitcher compact />
          <a
            href="#preregister"
            className="px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:opacity-90 transition-opacity"
            style={{ background: CYAN }}
            data-testid="button-nav-preregister"
          >
            {c.nav.preregister}
          </a>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ExpandedLanguageSwitcher compact />
          <button onClick={() => setOpen(!open)} className="p-2 text-gray-700" data-testid="button-mobile-menu" aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-gray-700 font-medium py-1">
              {l.label}
            </a>
          ))}
          <Link href="/about" className="block text-gray-700 font-medium py-1">{c.nav.about}</Link>
          <Link href="/investors" className="block text-gray-700 font-medium py-1">{c.nav.investors}</Link>
          <a href="#preregister" onClick={() => setOpen(false)} className="block text-center px-4 py-2 rounded-full font-semibold text-white" style={{ background: CYAN }}>
            {c.nav.preregister}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const c = useCopy();
  return (
    <section id="top" className="relative pt-28 pb-20 overflow-hidden" style={{ background: "linear-gradient(180deg,#F8FCFE 0%,#E6F7FC 100%)" }}>
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-20 blur-3xl" style={{ background: CYAN }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="ws-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-white border border-[#99E0F5] text-[#0090B8] shadow-sm">
            <Sparkles className="w-4 h-4" /> {c.hero.badge}
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-tight text-[#201E1F]">
            {c.hero.title1}
            <br />
            <span style={{ color: CYAN }}>{c.hero.title2}</span>
          </h1>
          <p className="font-scripture-italic text-2xl mt-5 text-[#003D4F]">{c.hero.slogan}</p>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-xl">{c.hero.sub}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#preregister"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              style={{ background: CYAN }}
              data-testid="button-hero-preregister"
            >
              {c.hero.cta1} <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#movement"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border-2 border-[#00B3E4] text-[#0090B8] hover:bg-[#E6F7FC] transition-colors"
              data-testid="button-hero-movement"
            >
              {c.hero.cta2}
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 flex items-center gap-1.5">
            <CircleDot className="w-3.5 h-3.5" style={{ color: CYAN }} /> {c.hero.lineageNote}
          </p>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <PhoneFrame src={screenHome} alt="Wordshiper app — home dashboard" className="w-64 sm:w-72 ws-float" />
          <PhoneFrame src={screenJog} alt="Wordshiper app — jog wheel quick menu" className="w-48 sm:w-56 absolute -bottom-8 -left-2 lg:left-8 rotate-[-6deg] shadow-xl hidden sm:block" />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const c = useCopy();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <SectionLabel>{c.problem.label}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F] max-w-3xl mx-auto">{c.problem.title}</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {c.problem.cards.map((card, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#F8FCFE] border border-[#E6F7FC] text-left hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "#E6F7FC" }}>
                {[<Globe2 key="g" />, <Sun key="s" />, <HeartHandshake key="h" />][i]}
              </div>
              <h3 className="font-bold text-lg text-[#201E1F] mb-2">{card.t}</h3>
              <p className="text-gray-600 leading-relaxed">{card.d}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-16 max-w-3xl mx-auto">
          <p className="font-scripture text-2xl sm:text-[1.7rem] leading-relaxed text-[#003D4F]">“{c.problem.answer}”</p>
          <cite className="block mt-4 text-sm text-gray-500 not-italic">{c.problem.answerRef}</cite>
        </blockquote>
      </div>
    </section>
  );
}

function Routine() {
  const c = useCopy();
  const icons = [Sun, UtensilsCrossed, Moon];
  return (
    <section id="routine" className="py-24" style={{ background: "linear-gradient(180deg,#E6F7FC 0%,#F8FCFE 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <SectionLabel>{c.routine.label}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F]">{c.routine.title}</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{c.routine.sub}</p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {c.routine.sessions.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="p-8 rounded-2xl bg-white shadow-sm border border-[#E6F7FC] text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white" style={{ background: CYAN }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[#201E1F]">{s.time}</div>
                    <div className="text-xs text-gray-500">{s.when}</div>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {s.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: CYAN }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-10 inline-block px-10 py-6 rounded-2xl text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${CYAN}, #0090B8)` }}>
          <div className="text-2xl font-bold">{c.routine.sum}</div>
          <div className="mt-1 text-white/85">{c.routine.sumSub}</div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
          {c.routine.balance.map((b, i) => (
            <div key={i} className="px-5 py-4 rounded-xl bg-white/70 border border-[#99E0F5]/50">
              <div className="font-semibold text-[#003D4F]">{b.t}</div>
              <div className="text-sm text-gray-600 mt-1">{b.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  const c = useCopy();
  const featIcons = [Bird, CircleDot, Share2, Languages];
  return (
    <section id="product" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel>{c.product.label}</SectionLabel>
          <h2 className="font-scripture text-3xl sm:text-4xl font-bold text-[#201E1F]">{c.product.title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{c.product.sub}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-14 mt-14 items-center">
          <div className="flex justify-center gap-6">
            <PhoneFrame src={screenJog} alt="Jog wheel — Bible in 1.5 seconds" className="w-56 sm:w-64 mt-10" />
            <PhoneFrame src={screenHome} alt="Today tab — home dashboard" className="w-56 sm:w-64 hidden sm:block" />
          </div>
          <div>
            <div className="space-y-3">
              {c.product.tabs.map((tab, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8FCFE] transition-colors border border-transparent hover:border-[#E6F7FC]">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-scripture font-bold text-[#0090B8]" style={{ background: "#E6F7FC" }}>
                    {i + 1}
                  </div>
                  <div>
                    <span className="font-scripture font-bold text-lg text-[#201E1F]">{tab.t}</span>
                    <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{tab.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center lg:text-left">{c.product.demoNote}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          {c.product.features.map((f, i) => {
            const Icon = featIcons[i];
            return (
              <div key={i} className="p-7 rounded-2xl border border-[#E6F7FC] bg-[#F8FCFE] hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: CYAN }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#201E1F]">{f.t}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed text-sm">{f.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GlobeDots() {
  const dots = [
    { top: "22%", left: "18%", d: "0s" }, { top: "35%", left: "48%", d: "0.7s" },
    { top: "28%", left: "72%", d: "1.4s" }, { top: "55%", left: "30%", d: "0.4s" },
    { top: "62%", left: "60%", d: "1.9s" }, { top: "45%", left: "85%", d: "1.1s" },
    { top: "70%", left: "12%", d: "2.3s" }, { top: "15%", left: "58%", d: "1.6s" },
    { top: "50%", left: "8%", d: "0.9s" },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {dots.map((p, i) => (
        <span
          key={i}
          className="ws-globe-dot absolute w-2 h-2 rounded-full"
          style={{ top: p.top, left: p.left, background: i === 4 ? "#F5C543" : "#2CC5F2", animationDelay: p.d, boxShadow: `0 0 12px ${i === 4 ? "#F5C543" : "#2CC5F2"}` }}
        />
      ))}
    </div>
  );
}

function Movement() {
  const c = useCopy();
  const { ref, value } = useCountUp(14207);
  return (
    <section id="movement" className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(180deg,#0C1519 0%,#16242B 100%)" }}>
      <GlobeDots />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <SectionLabel dark>{c.movement.label}</SectionLabel>
        <p className="font-scripture-italic text-xl text-[#ECEAE0]/80">{c.movement.subtitle}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">{c.movement.title}</h2>

        <div className="mt-14 max-w-3xl mx-auto p-10 rounded-3xl border border-[#2CC5F2]/25" style={{ background: "rgba(30,47,55,0.6)", backdropFilter: "blur(8px)" }}>
          <p className="font-scripture text-2xl sm:text-3xl leading-snug text-[#ECEAE0]">
            {c.movement.lineageLead}{" "}
            <span ref={ref} className="font-bold text-4xl sm:text-5xl" style={{ color: "#2CC5F2" }} data-testid="text-lineage-counter">
              {value.toLocaleString()}
            </span>
            {c.movement.lineageTail}
          </p>
          <p className="mt-5 text-[#ECEAE0]/60 leading-relaxed">{c.movement.lineageSub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">
          {c.movement.engines.map((e, i) => (
            <div key={i} className="p-7 rounded-2xl border border-white/10" style={{ background: "#16242B" }}>
              <div className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#2CC5F2" }}>{e.e}</div>
              <h3 className="font-bold text-xl text-white mt-1">{e.t}</h3>
              <p className="text-[#ECEAE0]/60 mt-3 leading-relaxed text-sm">{e.d}</p>
            </div>
          ))}
        </div>
        <p className="font-scripture-italic mt-14 text-xl text-[#ECEAE0]/70">{c.movement.promise}</p>
      </div>
    </section>
  );
}

function GlobalVision() {
  const c = useCopy();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <SectionLabel>{c.global.label}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F]">{c.global.title}</h2>
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {c.global.stats.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#F8FCFE] border border-[#E6F7FC]">
              <div className="font-scripture font-bold text-5xl" style={{ color: CYAN }}>{s.n}</div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto flex items-start gap-4 p-6 rounded-2xl border border-[#99E0F5]/60 bg-[#E6F7FC]/50 text-left">
          <Users className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: CYAN }} />
          <p className="text-gray-700 leading-relaxed">{c.global.whitelabel}</p>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const c = useCopy();
  return (
    <section id="roadmap" className="py-24" style={{ background: "#F8FCFE" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel>{c.roadmap.label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F]">{c.roadmap.title}</h2>
        </div>
        <div className="mt-14 relative">
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-[#99E0F5]" />
          {c.roadmap.phases.map((p, i) => (
            <div key={i} className={`relative flex sm:items-center mb-10 ${i % 2 ? "sm:flex-row-reverse" : ""}`}>
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow" style={{ background: i === 2 ? "#F5C543" : CYAN }} />
              <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 ? "sm:pr-0 sm:pl-10" : "sm:pr-10"}`}>
                <div className="p-6 rounded-2xl bg-white border border-[#E6F7FC] shadow-sm">
                  <h3 className="font-bold text-[#201E1F]">{p.t}</h3>
                  <p className="text-gray-600 text-sm mt-1.5">{p.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Preregister() {
  const c = useCopy();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      toast({ title: c.cta.success });
      setEmail("");
    } catch {
      toast({ title: c.cta.error, variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };
  return (
    <section id="preregister" className="relative py-28 overflow-hidden" style={{ background: `linear-gradient(135deg, ${CYAN} 0%, #0090B8 100%)` }}>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-6 p-2">
          <img src={iconMark} alt="Wordshiper icon" className="w-full h-full" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug">{c.cta.title}</h2>
        <p className="mt-4 text-white/85 text-lg">{c.cta.sub}</p>
        <form onSubmit={submit} className="mt-9 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={c.cta.placeholder}
            className="flex-1 px-6 py-4 rounded-full text-[#201E1F] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/40"
            data-testid="input-preregister-email"
          />
          <button
            type="submit"
            disabled={busy}
            className="px-8 py-4 rounded-full font-bold text-[#0090B8] bg-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-60"
            data-testid="button-preregister-submit"
          >
            {c.cta.button}
          </button>
        </form>
        <p className="font-scripture-italic mt-10 text-2xl text-white">{c.cta.declaration}</p>
      </div>
    </section>
  );
}

export default function HomeRenewal() {
  const { currentLanguage } = useLanguage();
  const c = useCopy();
  return (
    <div className="min-h-screen bg-white" lang={currentLanguage}>
      <SEO
        title="Wordshiper — One verse a day. A life of worship."
        description={c.hero.sub}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Routine />
        <Product />
        <Movement />
        <GlobalVision />
        <Roadmap />
        <Preregister />
      </main>
      <Footer />
    </div>
  );
}
