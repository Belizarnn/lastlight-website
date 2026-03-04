"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type LightboxProps = {
  images: string[];
  alt: string;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({
  images,
  alt,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const { t } = useLanguage();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(Math.max(0, currentIndex - 1));
      if (e.key === "ArrowRight")
        onNavigate(Math.min(images.length - 1, currentIndex + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl z-10"
          onClick={onClose}
          aria-label={t.lightbox.close}
        >
          ×
        </button>

        {currentIndex > 0 && (
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white text-2xl border border-white/30 hover:border-white/60 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex - 1);
            }}
            aria-label={t.lightbox.prev}
          >
            ←
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/80 hover:text-white text-2xl border border-white/30 hover:border-white/60 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(currentIndex + 1);
            }}
            aria-label={t.lightbox.next}
          >
            →
          </button>
        )}

        <motion.img
          src={images[currentIndex]}
          alt={alt}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://picsum.photos/1200/800";
          }}
          className="max-w-[90vw] max-h-[90vh] object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          key={currentIndex}
          onClick={(e) => e.stopPropagation()}
        />

        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
