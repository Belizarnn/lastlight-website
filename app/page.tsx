import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import IntroScreen from "@/components/IntroScreen";
import HeroSection from "@/components/HeroSection";
import FeaturedGameSection from "@/components/FeaturedGameSection";
import TrailerSection from "@/components/TrailerSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import AboutSection from "@/components/AboutSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <JsonLd />
    <main id="main-content" className="overflow-x-hidden">
      <IntroScreen />
      <Navbar />
      <HeroSection />
      <FeaturedGameSection />
      <TrailerSection />
      <ScreenshotsSection />
      <AboutSection />
      <CommunitySection />
      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>
      <Footer />
    </main>
    </>
  );
}
