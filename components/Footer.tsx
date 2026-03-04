"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const footerLinks = [
    { name: t.footer.privacy, href: "/privacy" },
    { name: t.footer.press, href: "/press" },
    { name: t.footer.contact, href: "/#contact" },
  ];
  return (
    <footer className="py-8 md:py-12 px-4 md:px-6 pb-safe border-t border-white/10 bg-black/95 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
        <motion.p
          className="font-heading text-sm text-gray-500 tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          © {new Date().getFullYear()} LAST LIGHT. {t.footer.rights}
        </motion.p>

        <motion.nav
          className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-500 hover:text-[#00E5FF] transition-colors tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </motion.nav>
      </div>
    </footer>
  );
}
