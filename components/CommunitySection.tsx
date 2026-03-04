"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  { name: "Discord", href: SOCIAL_LINKS.discord, icon: "D" },
  { name: "Steam", href: SOCIAL_LINKS.steam, icon: "S" },
  { name: "LinkedIn", href: SOCIAL_LINKS.linkedIn, icon: "in" },
  { name: "YouTube", href: SOCIAL_LINKS.youtube, icon: "Y" },
];

export default function CommunitySection() {
  const { t } = useLanguage();
  return (
    <section id="community" className="py-20 md:py-32 px-4 md:px-6 bg-black/85 scroll-mt-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-4">
            {t.community.title}
          </h2>
          <p className="text-gray-500 text-lg">
            {t.community.subtitle}
          </p>
        </motion.div>

        <motion.a
          href={SOCIAL_LINKS.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full max-w-sm mx-auto px-8 py-5 md:px-16 md:py-6 bg-[#5865F2] hover:bg-[#4752C4] text-white font-heading font-semibold text-lg md:text-xl tracking-widest transition-all duration-300 hover:scale-105 mb-12 md:mb-16 touch-target flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.community.discord}
        </motion.a>

        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:border-[#00E5FF] hover:text-[#00E5FF] hover:bg-[#00E5FF]/5 transition-all duration-300 font-heading text-lg touch-target"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
