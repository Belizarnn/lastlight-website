"use client";

import { motion } from "framer-motion";
import { WEREWOLF_HUNTER_TRAILER_YOUTUBE_ID } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";

export default function TrailerSection() {
  const { t } = useLanguage();
  const hasTrailer = WEREWOLF_HUNTER_TRAILER_YOUTUBE_ID && WEREWOLF_HUNTER_TRAILER_YOUTUBE_ID !== "YOUTUBE_VIDEO_ID";

  return (
    <section id="trailer" className="py-20 md:py-32 px-4 md:px-6 bg-black/80 scroll-mt-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mb-3 md:mb-4">
            {t.trailer.title}
          </h2>
          <p className="text-gray-500 text-lg">{t.trailer.subtitle}</p>
        </motion.div>

        <motion.div
          className="relative aspect-video overflow-hidden border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {hasTrailer ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${WEREWOLF_HUNTER_TRAILER_YOUTUBE_ID}?rel=0`}
              title="Werewolf Hunter - Gameplay Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-400 font-heading tracking-widest mb-2">
                  TRAILER
                </p>
                <p className="text-gray-600 text-sm">
                  {t.trailer.configHint}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
