import { Link } from "wouter";
import { useEffect, useState } from "react";
import { useCopy } from "@/data/renewal-copy";
import { useLanguage } from "@/hooks/use-language";
import { brandDisplayForLanguage } from "@/data/brand";
import ExpandedLanguageSwitcher from "@/components/expanded-language-switcher";
import SEO from "@/components/seo";
import Footer from "@/components/renewal-footer";
import { Heart, ShieldCheck, ArrowLeft, CheckCircle2 } from "lucide-react";
import logoPrimary from "@assets/wordshiper_logo_lockup_primary_E_1786117649532.svg";

const CYAN = "#00B3E4";
const PRESETS = [25, 50, 100, 250];

export default function DonatePage() {
  const copy = useCopy();
  const d = copy.donate;
  const { currentLanguage } = useLanguage();
  const brandAlt = brandDisplayForLanguage(currentLanguage);
  const [amount, setAmount] = useState(50);
  const [type, setType] = useState<"oneTime" | "monthly">("oneTime");
  const [custom, setCustom] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("success") === "1") setSuccess(true);
  }, []);

  const resolvedAmount = custom ? Math.max(1, Number(custom) || 0) : amount;

  const startCheckout = async () => {
    setBusy(true);
    setError(null);
    try {
      // Client-configured Payment Link takes priority (no server needed)
      const envLink = import.meta.env.VITE_DONATION_URL as string | undefined;
      if (envLink) {
        window.location.href = envLink;
        return;
      }

      const res = await fetch("/api/donations/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: resolvedAmount, type }),
      });
      const data = (await res.json()) as {
        url?: string;
        mailto?: string;
        error?: string;
        fallbackUrl?: string | null;
      };
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      if (data.fallbackUrl) {
        window.location.href = data.fallbackUrl;
        return;
      }
      if (data.mailto) {
        window.location.href = data.mailto;
        return;
      }
      setError(data.error || d.error);
    } catch {
      setError(d.error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-ui">
      <SEO title={`${brandAlt} — ${d.title}`} description={d.sub} />

      <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#E6F7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center p-1 -m-1">
            <img src={logoPrimary} alt={brandAlt} className="h-8 w-auto" width={180} height={40} />
          </Link>
          <div className="flex items-center gap-4">
            <ExpandedLanguageSwitcher compact />
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-[#0090B8]"
            >
              <ArrowLeft className="w-4 h-4" /> {d.backHome}
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-24">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, #E6F7FC 0%, #FFFFFF 55%, #F8FCFE 100%)",
            }}
          />
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <p className="font-scripture-italic text-xl sm:text-2xl text-[#003D4F] ws-text-pretty">
              {d.eyebrow}
            </p>
            <h1 className="font-scripture mt-4 text-3xl sm:text-5xl font-bold text-[#201E1F] tracking-tight ws-text-balance">
              {d.title}
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed ws-text-pretty">
              {d.sub}
            </p>
          </div>
        </section>

        <section className="mt-12 max-w-lg mx-auto px-4 sm:px-6">
          {success ? (
            <div className="rounded-3xl border border-[#99E0F5] bg-[#F8FCFE] p-10 text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: CYAN }} />
              <h2 className="text-2xl font-bold text-[#201E1F]">{d.successTitle}</h2>
              <p className="mt-3 text-gray-600">{d.successSub}</p>
              <Link
                href="/"
                className="mt-8 inline-flex px-6 py-3 rounded-full text-white font-semibold"
                style={{ background: CYAN }}
              >
                {d.backHome}
              </Link>
            </div>
          ) : (
            <div className="rounded-3xl border border-[#E6F7FC] bg-white p-8 sm:p-10 shadow-[0_20px_60px_-40px_rgba(0,179,228,0.45)]">
              <div className="flex gap-2 p-1 rounded-full bg-[#F8FCFE] mb-8">
                {(["oneTime", "monthly"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    className={`flex-1 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                      type === t
                        ? "bg-white text-[#0090B8] shadow-sm"
                        : "text-gray-500"
                    }`}
                  >
                    {t === "oneTime" ? d.oneTime : d.monthly}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {PRESETS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => {
                      setAmount(p);
                      setCustom("");
                    }}
                    className={`py-4 rounded-2xl text-lg font-bold border transition-all ${
                      !custom && amount === p
                        ? "border-[#00B3E4] bg-[#E6F7FC] text-[#003D4F]"
                        : "border-[#E6F7FC] text-[#201E1F] hover:border-[#99E0F5]"
                    }`}
                  >
                    ${p}
                  </button>
                ))}
              </div>

              <label className="block mt-5">
                <span className="text-sm font-medium text-gray-500">{d.custom}</span>
                <div className="mt-1.5 relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">
                    $
                  </span>
                  <input
                    type="number"
                    min={1}
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    placeholder={d.customPlaceholder}
                    className="w-full pl-8 pr-4 py-3.5 rounded-2xl border border-[#E6F7FC] focus:outline-none focus:ring-2 focus:ring-[#00B3E4]/40"
                  />
                </div>
              </label>

              {error && (
                <p className="mt-4 text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <button
                type="button"
                disabled={busy || resolvedAmount < 1}
                onClick={startCheckout}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:opacity-95 disabled:opacity-60 transition-opacity"
                style={{ background: CYAN }}
                data-testid="button-donate-submit"
              >
                <Heart className="w-5 h-5" />
                {busy ? d.processing : `${d.give} $${resolvedAmount}`}
              </button>

              <div className="mt-6 flex items-start gap-3 text-left text-sm text-gray-500">
                <ShieldCheck className="w-5 h-5 shrink-0 text-[#00B3E4] mt-0.5" />
                <p className="ws-text-pretty">{d.taxNote}</p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
