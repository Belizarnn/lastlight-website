"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { NAVBAR_LOGO } from "@/lib/site-config";

const linkIds = ["game", "trailer", "screenshots", "about", "community", "contact"] as const;

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  const goToHome = (e: React.MouseEvent) => {
    setMobileOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const links = [
    { id: "game" as const, href: "#game", name: t.nav.game },
    { id: "trailer" as const, href: "#trailer", name: t.nav.trailer },
    { id: "screenshots" as const, href: "#screenshots", name: t.nav.screenshots },
    { id: "about" as const, href: "#about", name: t.nav.about },
    { id: "community" as const, href: "#community", name: t.nav.community },
    { id: "contact" as const, href: "#contact", name: t.nav.contact },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (mobileOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, isMobile]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    linkIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/5" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          onClick={goToHome}
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="Last Light - Ana Sayfa"
        >
          {NAVBAR_LOGO && !logoError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={NAVBAR_LOGO}
              alt="Last Light"
              className="h-12 w-auto md:h-16 object-contain object-left"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="font-heading text-xl font-bold tracking-widest hover:text-[#00E5FF] transition-colors">
              LAST LIGHT
            </span>
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className={`text-sm transition-colors tracking-wider ${
                activeSection === link.id ? "text-[#00E5FF]" : "text-gray-400 hover:text-[#00E5FF]"
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="flex gap-2 ml-4 border-l border-white/20 pl-4">
            <button
              type="button"
              onClick={() => setLanguage("tr")}
              className={`text-xs font-heading tracking-wider px-2 py-1 ${
                language === "tr" ? "text-[#00E5FF]" : "text-gray-500 hover:text-gray-400"
              }`}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`text-xs font-heading tracking-wider px-2 py-1 ${
                language === "en" ? "text-[#00E5FF]" : "text-gray-500 hover:text-gray-400"
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setLanguage("tr")}
              className={`text-xs px-2 py-1 ${language === "tr" ? "text-[#00E5FF]" : "text-gray-500"}`}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`text-xs px-2 py-1 ${language === "en" ? "text-[#00E5FF]" : "text-gray-500"}`}
            >
              EN
            </button>
          </div>
          <button
            className="p-2 text-gray-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Kapat"
              className="absolute inset-0 bg-black/98 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 pt-20 pb-24 px-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-4 p-2 touch-target text-gray-400 hover:text-white"
                aria-label="Menüyü kapat"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {links.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className={`touch-target w-full max-w-xs py-4 px-6 text-center font-heading text-lg tracking-wider transition-colors rounded-lg border border-transparent ${
                    activeSection === link.id
                      ? "text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30"
                      : "text-gray-300 hover:text-[#00E5FF] hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setLanguage("tr")}
                  className={`touch-target px-6 py-3 rounded-lg border transition-colors ${
                    language === "tr" ? "text-[#00E5FF] border-[#00E5FF]/50" : "text-gray-500 border-white/10 hover:text-gray-400"
                  }`}
                >
                  TR
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`touch-target px-6 py-3 rounded-lg border transition-colors ${
                    language === "en" ? "text-[#00E5FF] border-[#00E5FF]/50" : "text-gray-500 border-white/10 hover:text-gray-400"
                  }`}
                >
                  EN
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
