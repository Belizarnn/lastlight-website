import Link from "next/link";
import { GAMES, SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/site-config";

export const metadata = {
  title: "Basın Kiti",
  description: "Last Light ve Werewolf Hunter için basın materyalleri ve medya kaynakları.",
};

export default function PressPage() {
  const game = GAMES[0];
  return (
    <main className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block text-[#00E5FF] hover:underline font-heading text-sm tracking-wider mb-12"
        >
          ← Ana Sayfa
        </Link>
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-4">
          Basın Kiti
        </h1>
        <p className="text-gray-500 mb-16">
          Medya ve içerik üreticileri için materyaller
        </p>

        <section className="mb-16">
          <h2 className="font-heading text-2xl text-[#00E5FF] tracking-wider mb-6">Last Light Hakkında</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Last Light, sürükleyici korku ve çok oyunculu deneyimlere odaklanan bağımsız bir oyun stüdyosudur.
            Oyuncuların iş birliği yapması, hayatta kalması ve karanlığı keşfetmesi gereken atmosferik
            dünyalar inşa ediyoruz.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-2xl text-[#00E5FF] tracking-wider mb-6">{game.title}</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {game.description}
          </p>
          <p className="text-gray-500 text-sm">Çıkış: {game.releaseInfo}</p>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-2xl text-[#00E5FF] tracking-wider mb-6">Logolar ve Görseller</h2>
          <p className="text-gray-500 mb-4">
            Yüksek çözünürlüklü logolar ve ekran görüntüleri için lütfen bizimle iletişime geçin.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-2xl text-[#00E5FF] tracking-wider mb-6">İletişim</h2>
          <p className="text-gray-300 mb-2">
            Basın soruları:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#00E5FF] hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00E5FF] transition-colors"
            >
              Discord
            </a>
            <a
              href={SOCIAL_LINKS.steam}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00E5FF] transition-colors"
            >
              Steam
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
