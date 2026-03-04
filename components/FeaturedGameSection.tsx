"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GAMES } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";
import Lightbox from "./Lightbox";

const fallbackImage = "https://picsum.photos/800/450";

function GameScreenshotImage({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}) {
  const [useFallback, setUseFallback] = useState(false);
  const isRemote = src.startsWith("http");

  if (useFallback) {
    return (
      <button type="button" className="w-full h-full block cursor-pointer text-left" onClick={onClick}>
        <img
          src={fallbackImage}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </button>
    );
  }

  if (isRemote) {
    return (
      <button
        type="button"
        className="w-full h-full relative block cursor-pointer overflow-hidden min-h-[200px]"
        onClick={onClick}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 55vw, 512px"
          className="object-cover hover:scale-105 transition-transform duration-500"
          onError={() => setUseFallback(true)}
        />
      </button>
    );
  }

  return (
    <button type="button" className="w-full h-full block cursor-pointer text-left" onClick={onClick}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallbackImage;
        }}
      />
    </button>
  );
}

function GameCard({ game }: { game: (typeof GAMES)[0] }) {
  const { language, t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const description = language === "tr" && "descriptionTr" in game && game.descriptionTr
    ? game.descriptionTr
    : game.description;

  const totalSlides = game.screenshots.length;

  const scrollToSlide = useCallback(
    (index: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const slideWidth = el.scrollWidth / totalSlides;
      el.scrollTo({ left: index * slideWidth, behavior: "smooth" });
      setCurrentSlide(index);
    },
    [totalSlides]
  );

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / totalSlides;
    const index = Math.round(el.scrollLeft / slideWidth);
    setCurrentSlide(Math.min(index, totalSlides - 1));
  }, [totalSlides]);

  return (
    <motion.div
      className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="order-2 lg:order-1">
        <motion.span
          className="text-slate-400 font-heading text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4 block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          {t.game.flagship}
        </motion.span>

        <motion.h2
          className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          {game.title}
        </motion.h2>

        <motion.p
          className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 sm:gap-4 items-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <a
            href={game.steamUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-red-700 hover:bg-red-600 text-white font-heading font-semibold tracking-widest transition-all duration-300 hover:scale-105"
          >
            {t.game.wishlist}
          </a>
          <span className="text-gray-600 text-xs sm:text-sm self-center">
            {language === "tr" && "releaseInfoTr" in game ? game.releaseInfoTr : game.releaseInfo}
          </span>
        </motion.div>
      </div>

      <motion.div
        className="order-1 lg:order-2 relative"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <div
            ref={scrollRef}
            className="game-carousel flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
            onScroll={handleScroll}
          >
            {game.screenshots.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[90%] sm:w-[75%] md:w-[60%] lg:w-full max-w-lg aspect-video overflow-hidden border border-white/10 snap-center"
                style={{ scrollSnapAlign: "center" }}
              >
                <GameScreenshotImage
                  src={src}
                  alt={`${game.title} screenshot ${i + 1}`}
                  onClick={() => {
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-black/60 border border-white/20 text-white hover:bg-black/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all -translate-x-2 touch-target"
            aria-label="Önceki"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollToSlide(Math.min(totalSlides - 1, currentSlide + 1))}
            disabled={currentSlide >= totalSlides - 1}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-black/60 border border-white/20 text-white hover:bg-black/80 disabled:opacity-30 disabled:cursor-not-allowed transition-all translate-x-2 touch-target"
            aria-label="Sonraki"
          >
            →
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {game.screenshots.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentSlide ? "bg-slate-400 w-6" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <p className="text-gray-500 text-xs mt-3 text-center">
          {t.game.carouselHint}
        </p>
      </motion.div>

      {lightboxOpen && (
        <Lightbox
          images={game.screenshots}
          alt={`${game.title} screenshot`}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </motion.div>
  );
}

export default function FeaturedGameSection() {
  return (
    <section id="game" className="py-20 md:py-32 px-4 md:px-6 bg-black/85 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 md:space-y-32">
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
