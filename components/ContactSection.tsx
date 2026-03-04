"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_FORM_ENDPOINT, CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const { language, t } = useLanguage();
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!CONTACT_FORM_ENDPOINT) {
      e.preventDefault();
      setFormState("idle");
      const form = e.currentTarget;
      const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
      const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
      const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(language === "tr" ? "İletişim" : "Contact")} - ${encodeURIComponent(name)}&body=${encodeURIComponent(`Ad Soyad / Name: ${name}\nE-posta / Email: ${email}\n\nMesaj / Message:\n${message}`)}`;
      return;
    }

    e.preventDefault();
    setFormState("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-black/85 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider mb-4 md:mb-6">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          action={CONTACT_FORM_ENDPOINT || undefined}
          method="POST"
          className="space-y-6 mb-12 md:mb-16 p-6 md:p-8 border border-white/10 bg-black/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-heading text-xs tracking-widest text-[#00E5FF] mb-2">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-[#00E5FF]/50 focus:outline-none transition-colors"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-heading text-xs tracking-widest text-[#00E5FF] mb-2">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-[#00E5FF]/50 focus:outline-none transition-colors"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block font-heading text-xs tracking-widest text-[#00E5FF] mb-2">
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-black border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-[#00E5FF]/50 focus:outline-none transition-colors resize-none"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>
          {formState === "success" && (
            <p className="text-[#00E5FF] text-sm font-heading tracking-wider">
              {language === "tr" ? "Mesajınız iletildi. En kısa sürede dönüş yapacağız." : "Message sent. We'll get back to you soon."}
            </p>
          )}
          {formState === "error" && (
            <p className="text-[#FF003C] text-sm font-heading tracking-wider">
              {language === "tr" ? "Bir hata oluştu. Lütfen tekrar deneyin veya e-posta ile iletişime geçin." : "Something went wrong. Please try again or contact us via email."}
            </p>
          )}
          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full md:w-auto px-12 py-4 bg-[#FF003C] hover:bg-[#FF0044] disabled:opacity-70 disabled:cursor-not-allowed text-white font-heading font-semibold tracking-widest transition-colors touch-target"
          >
            {formState === "loading" ? (language === "tr" ? "Gönderiliyor..." : "Sending...") : t.contact.submit}
          </button>
        </motion.form>

        <motion.p
          className="text-center text-gray-500 text-sm mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          {t.contact.discordHint}{" "}
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E5FF] hover:underline"
          >
            {t.contact.discordLink}
          </a>
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT_EMAIL}`}
          className="block text-center text-gray-400 hover:text-[#00E5FF] transition-colors"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          {CONTACT_EMAIL}
        </motion.a>
      </div>
    </section>
  );
}
