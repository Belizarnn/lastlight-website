"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WEREWOLF_HUNTER_TEAM } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";

const scrollReveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof WEREWOLF_HUNTER_TEAM)[0];
  index: number;
}) {
  const [imageError, setImageError] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      {...scrollReveal}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    >
      <a
        href={member.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center py-12 md:py-24 border-b border-white/5 last:border-0 group ${
          isEven ? "" : "md:flex-row-reverse"
        }`}
      >
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 flex-shrink-0 rounded-full bg-black border border-white/10 overflow-hidden flex items-center justify-center">
          {!imageError ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-6xl text-gray-600 font-heading">
              {member.name.charAt(0)}
            </span>
          )}
        </div>
        <div className={`text-center flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
          <h3 className="font-heading text-2xl md:text-3xl tracking-wider mb-2 group-hover:text-[#00E5FF] transition-colors">
            {member.name}
          </h3>
          <p className="text-[#00E5FF] text-base md:text-lg mb-4">{member.role}</p>
        </div>
      </a>
    </motion.div>
  );
}

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 bg-black/80 scroll-mt-20 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-20"
          {...scrollReveal}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-4">
            {t.about.title}
          </h2>
          <p className="text-gray-500 text-lg">{t.about.subtitle}</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
          {...scrollReveal}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        <div className="space-y-0">
          {WEREWOLF_HUNTER_TEAM.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
