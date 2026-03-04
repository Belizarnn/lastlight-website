"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INTRO_CONFIG, INTRO_VIDEO, INTRO_IMAGE } from "@/lib/site-config";

export default function IntroScreen() {
  const [visible, setVisible] = useState(INTRO_CONFIG.enabled);

  useEffect(() => {
    if (!INTRO_CONFIG.enabled) {
      setVisible(false);
      return;
    }

    const hasSeenIntro = sessionStorage.getItem("lastlight-intro-seen");
    if (INTRO_CONFIG.mode === "once" && hasSeenIntro) {
      setVisible(false);
      return;
    }

    // Video > Görsel > Yazı: Video varsa onEnded ile kapanır, yoksa timer
    const useVideo = typeof INTRO_VIDEO === "string" && INTRO_VIDEO.trim() !== "";
    if (!useVideo) {
      const timer = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("lastlight-intro-seen", "true");
      }, INTRO_CONFIG.duration);
      return () => clearTimeout(timer);
    }
  }, []);

  // Intro görünürken scroll'u kilitle
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [visible]);

  if (!INTRO_CONFIG.enabled || !visible) return null;

  const useIntroVideo = typeof INTRO_VIDEO === "string" && INTRO_VIDEO.trim() !== "";
  const useIntroImage = !useIntroVideo && typeof INTRO_IMAGE === "string" && INTRO_IMAGE.trim() !== "";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black flex items-start justify-center pt-[15vh]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className={`text-center w-full px-2 sm:px-4 flex items-center justify-center ${useIntroVideo ? "" : "max-w-4xl px-6"}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          exit={{ opacity: 0 }}
        >
          {useIntroVideo ? (
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-auto object-contain"
              onEnded={() => {
                setVisible(false);
                sessionStorage.setItem("lastlight-intro-seen", "true");
              }}
              aria-label="Last Light logo"
            >
              <source src={INTRO_VIDEO} type="video/mp4" />
            </video>
          ) : useIntroImage ? (
            <motion.img
              src={INTRO_IMAGE}
              alt="Last Light"
              className="w-full max-w-2xl h-auto object-contain"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              exit={{ opacity: 0, scale: 0.95 }}
            />
          ) : (
            <>
              <motion.span
                className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em] text-white block"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
              >
                LAST LIGHT
              </motion.span>
              <motion.div
                className="mt-6 h-px w-24 mx-auto bg-white/40"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
