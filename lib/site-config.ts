/**
 * Site Konfigürasyonu
 * Bu dosyayı düzenleyerek site içeriğini güncelleyebilirsiniz.
 */

// Başlangıç intro animasyonu
// Öncelik: 1) INTRO_VIDEO  2) INTRO_IMAGE  3) Yazı
// Video: public/videos/Game_Studio_Logo_Intro_Generation.mp4
export const INTRO_VIDEO = ""; // video varsa yol verin

// Logo görseli: public/intro-logo.png - Video yoksa bu kullanılır
export const INTRO_IMAGE = "/intro-logo.png";

export const INTRO_CONFIG = {
  enabled: true,
  mode: "once", // "once" | "always" - once: sadece ilk ziyarette
  duration: 2500, // görsel/yazı modunda gösterim süresi (ms)
};

// Hero bölümünde oynatılacak başlangıç videosu (arka plan)
// Videoyu: public/videos/hero.mp4 konumuna koyun
export const HERO_VIDEO = "/videos/hero.mp4";

// Navbar sol üst logo - public/logo.png veya /logo.svg ekleyin
// Boş bırakırsanız "LAST LIGHT" yazısı gösterilir
export const NAVBAR_LOGO = "/png.png"; // public/png.png

// Hero'da "LAST LIGHT" yazısı yerine logo videosu
// Videoyu ekleyin: public/videos/logo.mp4
// Boş bırakırsanız yazı gösterilir
export const HERO_LOGO_VIDEO = "/videos/Game_Studio_Logo_Intro_Generation.mp4";

// Oyunlar - her oyun için 5 ekran görüntüsü
// public/games/[oyun-adi]/ klasörüne 1.jpg, 2.jpg ... 5.jpg ekleyin
export const GAMES = [
  {
    id: "werewolf-hunter",
    title: "WEREWOLF HUNTER",
    description:
      "A cooperative horror experience where players enter cursed territory to hunt monsters and survive the night. Band together, use your wits, and uncover the darkness before it consumes you.",
    descriptionTr:
      "Oyuncuların lanetli topraklara girerek canavarları avladığı ve geceyi atlatmaya çalıştığı işbirlikçi bir korku deneyimi. Birlikte hareket edin, zekanızı kullanın ve karanlık sizi yutmadan onu keşfedin.",
    screenshots: [
      "/games/werewolf-hunter/1.jpg", // public/games/werewolf-hunter/ klasörüne ekleyin
      "/games/werewolf-hunter/2.jpg",
      "/games/werewolf-hunter/3.jpg",
      "/games/werewolf-hunter/4.jpg",
      "/games/werewolf-hunter/5.jpg",
    ],
    steamUrl: "https://store.steampowered.com/",
    releaseInfo: "Coming 2025",
    releaseInfoTr: "2025'te Geliyor",
  },
];

// Werewolf Hunter YouTube trailer
// YouTube video URL'inden sadece ID kısmını alın (örn: dQw4w9WgXcQ)
// Örnek: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> dQw4w9WgXcQ
export const WEREWOLF_HUNTER_TRAILER_YOUTUBE_ID = "YOUTUBE_VIDEO_ID";

// Werewolf Hunter ekibi - fotoğraf, isim, rol ve LinkedIn
export const WEREWOLF_HUNTER_TEAM = [
  {
    name: "Sudenaz Çakıroğlu",
    role: "Cinematic Director & Co-Founder",
    photo: "/team/member3.jpg",
    linkedIn: "https://linkedin.com/in/username",
  },
  {
    name: "Yavuzhan Yavuz",
    role: "CTO & Co-Founder",
    photo: "/team/member1.jpg",
    linkedIn: "https://linkedin.com/in/username",
  },
  {
    name: "Enescan Uzunoğlu",
    role: "Creative Director & Co-Founder",
    photo: "/team/member2.jpg",
    linkedIn: "https://linkedin.com/in/username",
  },
];

// İletişim formu - Formspree kullanır (https://formspree.io)
// Boş bırakırsanız form mailto ile çalışır
export const CONTACT_FORM_ENDPOINT = ""; // örn: "https://formspree.io/f/xxxxxx"

// İletişim e-posta (en altta gösterilir)
export const CONTACT_EMAIL = "hello@lastlight.studio";

// Community sosyal medya linkleri (Twitter yok, LinkedIn var)
export const SOCIAL_LINKS = {
  discord: "https://discord.com/",
  steam: "https://store.steampowered.com/",
  linkedIn: "https://linkedin.com/company/lastlight",
  youtube: "https://youtube.com/",
};
