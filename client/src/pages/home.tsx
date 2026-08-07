import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TTSDemo from "@/components/tts-demo";
import FeaturesSection from "@/components/features-section";
import DonationSection from "@/components/donation-section";
import VolunteerSection from "@/components/volunteer-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TTSDemo />
      <FeaturesSection />
      <DonationSection />
      <VolunteerSection />
      <Footer />
    </div>
  );
}
