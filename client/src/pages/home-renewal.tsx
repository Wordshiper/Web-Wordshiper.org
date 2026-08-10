import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useCopy } from "@/data/renewal-copy";
import { useLanguage } from "@/hooks/use-language";
import { brandDisplayForLanguage } from "@/data/brand";
import ExpandedLanguageSwitcher from "@/components/expanded-language-switcher";
import SEO from "@/components/seo";
import Footer from "@/components/renewal-footer";
import { useToast } from "@/hooks/use-toast";
import {
  BookOpen, Sun, UtensilsCrossed, Moon, Globe2, Users,
  HeartHandshake, Menu, X, ArrowRight, Bird, Share2, Languages, CircleDot,
} from "lucide-react";
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
  const { currentLanguage } = useLanguage();
  const brandAlt = brandDisplayForLanguage(currentLanguage);
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#why", label: c.nav.why },
    { href: "#identity", label: c.nav.identity },
    { href: "#routine", label: c.nav.routine },
    { href: "#product", label: c.nav.product },
    { href: "#movement", label: c.nav.movement },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E6F7FC]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center p-1 -m-1" data-testid="link-logo-home">
          <img src={logoPrimary} alt={brandAlt} className="h-8 w-auto" width={180} height={40} />
        </a>
        <nav className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-[#0090B8] transition-colors">
              {l.label}
            </a>
          ))}
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-[#0090B8] transition-colors">
            {c.nav.about}
          </Link>
          <Link href="/donate" className="text-sm font-medium text-gray-600 hover:text-[#0090B8] transition-colors" data-testid="link-donate">
            {c.nav.donate}
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
          <Link href="/donate" className="block text-gray-700 font-medium py-1">{c.nav.donate}</Link>
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
  const { currentLanguage } = useLanguage();
  const brandAlt = brandDisplayForLanguage(currentLanguage);
  const slides = c.hero.slides;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setIndex(0);
    setAnimKey((k) => k + 1);
  }, [currentLanguage]);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setAnimKey((k) => k + 1);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused, slides.length, index]);

  // Restart timer when user manually picks a slide (index already in deps above)
  // — interval resets each index change so progress bar stays in sync.

  const go = (i: number) => {
    setIndex(i);
    setAnimKey((k) => k + 1);
  };

  const slide = slides[index] ?? slides[0];
  const primaryVisual = slide.visual === "jog" ? screenJog : screenHome;
  const secondaryVisual = slide.visual === "jog" ? screenHome : screenJog;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pb-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={c.chrome.heroSlidesAria}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(165deg, #F8FCFE 0%, #E6F7FC 42%, #F3FBFE 78%, #FFFFFF 100%)",
        }}
      />
      <div
        className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-35 -z-10"
        style={{ background: CYAN }}
      />
      <div
        className="absolute bottom-0 left-[-10%] w-[420px] h-[420px] rounded-full blur-3xl opacity-20 -z-10"
        style={{ background: "#99E0F5" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-6 text-center lg:text-left">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-[#0090B8]">
            {brandAlt}
          </p>

          <div key={animKey} className="ws-hero-slide mt-5">
            <p className="font-scripture-italic text-lg sm:text-xl text-[#003D4F] ws-text-pretty">
              {c.hero.declaration}
            </p>
            <p className="mt-1 text-sm font-semibold tracking-[0.12em] uppercase text-[#0090B8]">
              {slide.label}
            </p>
            <h1 className="font-scripture font-bold mt-3 text-4xl sm:text-5xl lg:text-[3.05rem] leading-[1.12] text-[#201E1F] ws-text-balance">
              {slide.title1}
              <br />
              <span style={{ color: CYAN }}>{slide.title2}</span>
            </h1>
            <p className="font-scripture-italic text-xl sm:text-2xl mt-5 text-[#003D4F] ws-text-pretty">
              {c.hero.slogan}
            </p>
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 ws-text-pretty">
              {slide.body}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#preregister"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              style={{ background: CYAN }}
              data-testid="button-hero-preregister"
            >
              {c.hero.cta1} <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#why"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border-2 border-[#00B3E4] text-[#0090B8] hover:bg-[#E6F7FC] transition-colors"
              data-testid="button-hero-why"
            >
              {c.hero.cta2}
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500 ws-text-pretty">{c.hero.lineageNote}</p>

          <div
            className="mt-8 flex items-center justify-center lg:justify-start gap-2"
            role="tablist"
            aria-label={c.chrome.slideSelectorAria}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={slides[i].label}
                onClick={() => go(i)}
                className="relative h-2 rounded-full overflow-hidden transition-all duration-300"
                style={{
                  width: i === index ? 40 : 10,
                  background: i === index ? "rgba(0,179,228,0.25)" : "#D7EEF7",
                }}
              >
                {i === index && (
                  <span
                    key={`bar-${animKey}`}
                    className="absolute inset-y-0 left-0 rounded-full ws-hero-progress"
                    style={{ background: CYAN }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center lg:justify-end min-h-[340px] sm:min-h-[420px]">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[70%] rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, #00B3E4 0%, transparent 70%)" }}
          />
          <div key={`viz-${animKey}`} className="relative w-full max-w-md ws-hero-device">
            <PhoneFrame
              src={primaryVisual}
              alt={`${brandAlt} — ${slide.label}`}
              className="relative w-[min(58vw,260px)] sm:w-72 mx-auto lg:ml-auto lg:mr-4 z-10 ws-float"
            />
            <PhoneFrame
              src={secondaryVisual}
              alt=""
              className="absolute w-[min(42vw,190px)] sm:w-52 bottom-[-4%] left-[4%] lg:left-0 rotate-[-7deg] z-0 opacity-95 hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const c = useCopy();
  return (
    <section id="why" className="py-24 sm:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F8FCFE 45%, #FFFFFF 100%)",
        }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <SectionLabel>{c.why.label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F] whitespace-pre-line ws-text-balance">
            {c.why.title}
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed ws-text-pretty">
            {c.why.lead}
          </p>
        </div>
        <div className="mt-12 space-y-8">
          {c.why.points.map((point, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-[#0090B8]"
                style={{ background: "#E6F7FC" }}
              >
                {[
                  <Globe2 key="g" className="w-5 h-5" />,
                  <HeartHandshake key="h" className="w-5 h-5" />,
                  <BookOpen key="b" className="w-5 h-5" />,
                ][i]}
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#201E1F]">{point.t}</h3>
                <p className="mt-1.5 text-gray-600 leading-relaxed ws-text-pretty">{point.d}</p>
              </div>
            </div>
          ))}
        </div>
        <blockquote className="mt-16 pt-12 border-t border-[#E6F7FC] text-center">
          <p className="font-scripture text-2xl sm:text-[1.75rem] leading-relaxed text-[#003D4F] ws-text-pretty">
            “{c.why.answer}”
          </p>
          <cite className="block mt-4 text-sm text-gray-500 not-italic">{c.why.answerRef}</cite>
        </blockquote>
      </div>
    </section>
  );
}

function Identity() {
  const c = useCopy();
  return (
    <section id="identity" className="py-24 sm:py-28" style={{ background: "linear-gradient(180deg,#E6F7FC 0%,#FFFFFF 100%)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <SectionLabel>{c.identity.label}</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F] ws-text-balance">{c.identity.title}</h2>
        <p className="mt-6 text-lg sm:text-xl text-[#003D4F] font-medium leading-relaxed ws-text-pretty max-w-3xl mx-auto">
          {c.identity.definition}
        </p>
        <p className="mt-4 text-base text-gray-600 leading-relaxed ws-text-pretty max-w-2xl mx-auto">{c.identity.sub}</p>

        <div className="mt-12 grid sm:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-4 items-center">
          <div className="p-8 rounded-3xl bg-white border border-[#E6F7FC] text-left sm:text-center">
            <p className="font-scripture text-3xl font-bold" style={{ color: CYAN }}>{c.identity.word}</p>
            <p className="mt-3 text-gray-600 leading-relaxed ws-text-pretty">{c.identity.wordD}</p>
          </div>
          <p className="font-scripture text-3xl font-bold text-[#201E1F]">+</p>
          <div className="p-8 rounded-3xl bg-white border border-[#E6F7FC] text-left sm:text-center">
            <p className="font-scripture text-3xl font-bold" style={{ color: CYAN }}>{c.identity.worshiper}</p>
            <p className="mt-3 text-gray-600 leading-relaxed ws-text-pretty">{c.identity.worshiperD}</p>
          </div>
        </div>

        <p className="font-scripture-italic mt-10 text-xl sm:text-2xl text-[#003D4F] ws-text-pretty">
          {c.identity.result}
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-5 text-left">
          {c.identity.layers.map((layer, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-[#E6F7FC]">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0090B8]">0{i + 1}</p>
              <h3 className="mt-2 font-bold text-[#201E1F] leading-snug">{layer.t}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed ws-text-pretty">{layer.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-600 leading-relaxed ws-text-pretty max-w-2xl mx-auto">{c.identity.notOnly}</p>
        <p className="mt-4 text-[#201E1F] font-medium leading-relaxed ws-text-pretty max-w-2xl mx-auto">{c.identity.forWhom}</p>
      </div>
    </section>
  );
}

function MissionVision() {
  const c = useCopy();
  return (
    <section id="mission" className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>{c.mission.label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F] whitespace-pre-line ws-text-balance">
            {c.mission.title}
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed ws-text-pretty">{c.mission.body}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {c.mission.habits.map((h, i) => (
            <div key={i} className="p-8 rounded-3xl border border-[#E6F7FC] bg-[#F8FCFE] text-center">
              <p className="font-scripture text-xl font-bold text-[#201E1F]">{h.t}</p>
              <p className="mt-2 text-gray-600 text-sm">{h.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl mx-auto text-center text-gray-700 leading-relaxed ws-text-pretty">
          {c.mission.close}
        </p>

        <div className="mt-20 pt-16 border-t border-[#E6F7FC] max-w-3xl mx-auto text-center">
          <SectionLabel>{c.vision.label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F] whitespace-pre-line ws-text-balance">
            {c.vision.title}
          </h2>
          <p className="mt-5 text-lg font-medium text-[#003D4F] leading-relaxed ws-text-pretty">{c.vision.body}</p>
          <p className="mt-4 text-gray-600 leading-relaxed ws-text-pretty">{c.vision.detail}</p>
        </div>
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
        <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F] whitespace-pre-line ws-text-balance">{c.routine.title}</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto ws-text-pretty leading-relaxed">{c.routine.sub}</p>
        <p className="mt-3 text-sm font-medium text-[#0090B8]">{c.routine.principle}</p>
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
          <h2 className="font-scripture text-3xl sm:text-4xl font-bold text-[#201E1F] ws-text-balance">{c.product.title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto ws-text-pretty">{c.product.sub}</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {c.product.thesis.map((t, i) => (
            <div key={i} className="p-7 rounded-3xl border border-[#E6F7FC] bg-[#F8FCFE] text-left">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0090B8]">0{i + 1}</p>
              <h3 className="mt-2 font-bold text-lg text-[#201E1F] leading-snug">{t.t}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed ws-text-pretty">{t.d}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-14 mt-16 items-center">
          <div className="flex justify-center gap-6">
            <PhoneFrame src={screenJog} alt="Jog wheel" className="w-56 sm:w-64 mt-10" />
            <PhoneFrame src={screenHome} alt="Home dashboard" className="w-56 sm:w-64 hidden sm:block" />
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
                    <p className="text-gray-600 text-sm mt-0.5 leading-relaxed ws-text-pretty">{tab.d}</p>
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
              <div key={i} className="p-7 rounded-2xl border border-[#E6F7FC] bg-[#F8FCFE]">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: CYAN }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#201E1F]">{f.t}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed text-sm ws-text-pretty">{f.d}</p>
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
        <p className="font-scripture-italic text-xl text-[#ECEAE0]/80 whitespace-pre-line ws-text-balance">{c.movement.subtitle}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white ws-text-balance">{c.movement.title}</h2>

        <div className="mt-14 max-w-3xl mx-auto p-10 rounded-3xl border border-[#2CC5F2]/25" style={{ background: "rgba(30,47,55,0.6)", backdropFilter: "blur(8px)" }}>
          <p className="font-scripture text-2xl sm:text-3xl leading-snug text-[#ECEAE0] ws-text-pretty">
            {c.movement.lineageLead}{" "}
            <span ref={ref} className="font-bold text-4xl sm:text-5xl inline-block" style={{ color: "#2CC5F2" }} data-testid="text-lineage-counter">
              {value.toLocaleString()}
            </span>
            {c.movement.lineageTail}
          </p>
          <p className="mt-5 text-[#ECEAE0]/60 leading-relaxed ws-text-pretty">{c.movement.lineageSub}</p>
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
        <h2 className="text-3xl sm:text-4xl font-bold text-[#201E1F] whitespace-pre-line ws-text-balance">
          {c.global.title}
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed ws-text-pretty">
          {c.global.body}
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {c.global.stats.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#F8FCFE] border border-[#E6F7FC]">
              <div className="font-scripture font-bold text-5xl" style={{ color: CYAN }}>{s.n}</div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed ws-text-pretty">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto flex items-start gap-4 p-6 rounded-2xl border border-[#99E0F5]/60 bg-[#E6F7FC]/50 text-left">
          <Users className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: CYAN }} />
          <p className="text-gray-700 leading-relaxed ws-text-pretty">{c.global.whitelabel}</p>
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
  const { currentLanguage } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [lineageNumber, setLineageNumber] = useState<number | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, language: currentLanguage }),
      });
      if (!res.ok) throw new Error();
      const data = (await res.json()) as { lineageNumber?: number };
      const n = data.lineageNumber ?? null;
      setLineageNumber(n);
      toast({
        title:
          n != null && typeof c.cta.successWithNumber === "function"
            ? c.cta.successWithNumber(n)
            : c.cta.success,
      });
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
          <img src={iconMark} alt="" className="w-full h-full" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-snug whitespace-pre-line ws-text-balance">{c.cta.title}</h2>
        <p className="mt-4 text-white/85 text-lg ws-text-pretty">{c.cta.sub}</p>

        {lineageNumber != null ? (
          <div className="mt-10 rounded-3xl bg-white/15 border border-white/25 backdrop-blur-sm px-8 py-10 ws-lineage-reveal">
            <p className="text-white/80 text-sm tracking-widest uppercase font-semibold">
              {c.chrome.lineageNumber}
            </p>
            <p className="font-scripture mt-3 text-6xl sm:text-7xl text-white font-bold tracking-tight">
              #{lineageNumber}
            </p>
            <p className="font-scripture-italic mt-6 text-xl text-white">
              {c.cta.declaration}
            </p>
            <p className="mt-3 text-white/75 text-sm">{c.chrome.lineageEmailNote}</p>
          </div>
        ) : (
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
        )}

        {lineageNumber == null && (
          <p className="font-scripture-italic mt-10 text-2xl text-white">{c.cta.declaration}</p>
        )}
      </div>
    </section>
  );
}

export default function HomeRenewal() {
  const { currentLanguage } = useLanguage();
  const c = useCopy();
  return (
    <div className="min-h-screen bg-white font-ui" lang={currentLanguage}>
      <SEO
        title={`Wordshiper — ${c.hero.slogan}`}
        description={c.hero.slides[0]?.body ?? c.hero.slogan}
      />
      <Header />
      <main>
        <Hero />
        <Why />
        <Identity />
        <MissionVision />
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
