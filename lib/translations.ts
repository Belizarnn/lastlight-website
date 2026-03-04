export type Language = "tr" | "en";

export const translations = {
  tr: {
    hero: {
      subtitle: "Indie oyun stüdyosu, karanlık çok oyunculu deneyimler yaratıyor.",
      wishlist: "STEAM'DE İSTEK LİSTESİ",
      discord: "DISCORD'A KATIL",
      trailer: "FRAGMANI İZLE",
      scroll: "KAYDIR",
    },
    nav: { game: "Oyun", trailer: "Fragman", screenshots: "Ekran Görüntüleri", about: "Hakkında", community: "Topluluk", contact: "İletişim" },
    game: {
      flagship: "Öne Çıkan Oyun",
      wishlist: "STEAM'DE İSTEK LİSTESİ",
      carouselHint: "← Kaydırarak veya oklarla gezinin · Tıklayarak büyütün →",
    },
    trailer: {
      title: "AVI YAŞA",
      subtitle: "Werewolf Hunter - Oynanış Fragmanı",
      configHint: "lib/site-config.ts dosyasında WEREWOLF_HUNTER_TRAILER_YOUTUBE_ID değerini güncelleyin",
    },
    screenshots: {
      title: "EKRAN GÖRÜNTÜLERİ",
      subtitle: "Lanetli topraklardan kareler",
      zoom: "BÜYÜT",
    },
    about: {
      title: "LAST LIGHT EKİBİ",
      subtitle: "Yaratıcılarla tanışın",
      description:
        "Last Light, sürükleyici korku ve çok oyunculu deneyimlere odaklanan bağımsız bir oyun stüdyosudur. Oyuncuların iş birliği yapması, hayatta kalması ve karanlığı keşfetmesi gereken atmosferik dünyalar inşa ediyoruz.",
    },
    community: {
      title: "TOPLULUĞA KATILIN",
      subtitle: "Avcılarla bağlantı kurun ve güncel kalın",
      discord: "DISCORD'A KATIL",
    },
    contact: {
      title: "İLETİŞİMDE KALALIM",
      subtitle: "Mesaj bırakın, en kısa sürede size dönelim.",
      nameLabel: "AD SOYAD",
      namePlaceholder: "Adınız ve soyadınız",
      emailLabel: "E-POSTA",
      emailPlaceholder: "email@örnek.com",
      messageLabel: "MESAJ",
      messagePlaceholder: "Mesajınızı yazın...",
      submit: "GÖNDER",
      discordHint: "Discord'da iletişime geçin:",
      discordLink: "Topluluğa katılın",
    },
    footer: {
      rights: "TÜM HAKLARI SAKLIDIR.",
      privacy: "Gizlilik Politikası",
      press: "Basın Kiti",
      contact: "İletişim",
    },
    lightbox: { close: "Kapat", prev: "Önceki", next: "Sonraki", imageOf: "görüntü" },
  },
  en: {
    hero: {
      subtitle: "Independent Game Studio Creating Dark Multiplayer Experiences",
      wishlist: "WISHLIST ON STEAM",
      discord: "JOIN DISCORD",
      trailer: "WATCH TRAILER",
      scroll: "SCROLL",
    },
    nav: { game: "Game", trailer: "Trailer", screenshots: "Screenshots", about: "About", community: "Community", contact: "Contact" },
    game: {
      flagship: "Flagship Title",
      wishlist: "WISHLIST ON STEAM",
      carouselHint: "← Swipe or use arrows to navigate · Click to zoom →",
    },
    trailer: {
      title: "EXPERIENCE THE HUNT",
      subtitle: "Werewolf Hunter - Gameplay Trailer",
      configHint: "Update WEREWOLF_HUNTER_TRAILER_YOUTUBE_ID in lib/site-config.ts",
    },
    screenshots: {
      title: "SCREENSHOTS",
      subtitle: "Glimpses from the cursed territories",
      zoom: "ZOOM",
    },
    about: {
      title: "LAST LIGHT TEAM",
      subtitle: "Meet the creators",
      description:
        "Last Light is an independent game studio focused on immersive horror and multiplayer experiences. We build atmospheric worlds where players must cooperate, survive, and uncover the darkness.",
    },
    community: {
      title: "JOIN THE COMMUNITY",
      subtitle: "Connect with fellow hunters and stay updated",
      discord: "JOIN DISCORD",
    },
    contact: {
      title: "LET'S TALK",
      subtitle: "Leave a message, we'll get back to you soon.",
      nameLabel: "FULL NAME",
      namePlaceholder: "Your name",
      emailLabel: "EMAIL",
      emailPlaceholder: "email@example.com",
      messageLabel: "MESSAGE",
      messagePlaceholder: "Write your message...",
      submit: "SEND",
      discordHint: "Prefer Discord?",
      discordLink: "Join our community",
    },
    footer: {
      rights: "ALL RIGHTS RESERVED.",
      privacy: "Privacy Policy",
      press: "Press Kit",
      contact: "Contact",
    },
    lightbox: { close: "Close", prev: "Previous", next: "Next", imageOf: "image" },
  },
} as const;
