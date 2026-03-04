"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { HERO_VIDEO, HERO_LOGO_VIDEO } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const useLogoVideo = HERO_LOGO_VIDEO && HERO_LOGO_VIDEO.trim() !== "";
  return (
    <section className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden bg-black/90">
      {/* Başlangıç videosu - public/videos/hero.mp4 dosyasını ekleyin */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />

      <div className="relative z-20 flex flex-col items-center w-full">
        {useLogoVideo ? (
          <motion.div
            className="w-full mb-6 px-2 sm:px-4 max-w-[90vw] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-auto object-contain"
              aria-label="Last Light logo"
            >
              <source src={HERO_LOGO_VIDEO} type="video/mp4" />
            </video>
          </motion.div>
        ) : (
          <motion.h1
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] md:tracking-[0.3em] text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ textShadow: "0 0 60px rgba(0, 229, 255, 0.3)" }}
          >
            LAST LIGHT
          </motion.h1>
        )}

        <motion.p
          className="font-sans text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 tracking-wider text-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="https://store.steampowered.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 min-h-[48px] flex items-center justify-center bg-[#FF003C] hover:bg-[#FF0044] text-white font-heading font-semibold tracking-widest transition-all duration-300 hover:scale-105 touch-target"
          >
            {t.hero.wishlist}
          </a>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 min-h-[48px] flex items-center justify-center border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF]/10 font-heading font-semibold tracking-widest transition-all duration-300 hover:scale-105 touch-target"
          >
            {t.hero.discord}
          </a>
          <a
            href="#trailer"
            className="w-full sm:w-auto px-8 py-4 min-h-[48px] flex items-center justify-center border border-white/50 text-white/90 hover:bg-white/5 font-heading font-semibold tracking-widest transition-all duration-300 hover:scale-105 touch-target"
          >
            {t.hero.trailer}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-gray-500 text-sm tracking-widest">{t.hero.scroll}</span>
      </motion.div>
    </section>
  );
}
