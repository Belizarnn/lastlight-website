"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";
import { useLanguage } from "@/context/LanguageContext";

// Placeholder görseller - kendi ekran görüntüleriniz için site-config GAMES.screenshots kullanın
const screenshots = [
  { src: "https://picsum.photos/id/10/1200/800", alt: "Werewolf Hunter screenshot 1" },
  { src: "https://picsum.photos/id/11/1200/800", alt: "Werewolf Hunter screenshot 2" },
  { src: "https://picsum.photos/id/12/1200/800", alt: "Werewolf Hunter screenshot 3" },
  { src: "https://picsum.photos/id/13/1200/800", alt: "Werewolf Hunter screenshot 4" },
  { src: "https://picsum.photos/id/14/1200/800", alt: "Werewolf Hunter screenshot 5" },
  { src: "https://picsum.photos/id/15/1200/800", alt: "Werewolf Hunter screenshot 6" },
];

export default function ScreenshotsSection() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = screenshots.map((s) => s.src);

  return (
    <>
      <section id="screenshots" className="py-20 md:py-32 px-4 md:px-6 bg-black/85 scroll-mt-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-4">
              {t.screenshots.title}
            </h2>
            <p className="text-gray-500 text-lg">
              {t.screenshots.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {screenshots.map((shot, index) => (
              <motion.button
                key={index}
                type="button"
                className="group relative overflow-hidden aspect-video cursor-pointer w-full text-left min-h-[200px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setLightboxIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-heading tracking-wider">
                    {t.screenshots.zoom}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={images}
          alt="Werewolf Hunter screenshot"
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
