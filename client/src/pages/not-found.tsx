import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import logoPrimary from "@assets/wordshiper_logo_lockup_primary_E_1786117649532.svg";

const CYAN = "#00B3E4";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4" style={{ background: "linear-gradient(180deg,#F8FCFE 0%,#FFFFFF 100%)" }}>
      <Link href="/" className="mb-10">
        <img src={logoPrimary} alt="Wordshiper" className="h-10 w-auto" width={200} height={44} />
      </Link>
      <div className="w-full max-w-md text-center">
        <AlertCircle className="h-10 w-10 mx-auto mb-4" style={{ color: CYAN }} />
        <h1 className="text-2xl font-bold text-[#201E1F]">Page not found</h1>
        <p className="mt-3 text-gray-600 leading-relaxed">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex mt-8 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-md hover:opacity-90 transition-opacity"
          style={{ background: CYAN }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
