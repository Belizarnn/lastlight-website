import type { Metadata, Viewport } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import GalaxyBackground from "@/components/GalaxyBackground";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lastlight.studio";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lastlight.studio"),
  title: {
    default: "Last Light | Independent Game Studio",
    template: "%s | Last Light",
  },
  description:
    "Last Light is an independent game studio focused on immersive horror and multiplayer experiences. Creating dark cooperative experiences like Werewolf Hunter.",
  keywords: ["indie game", "horror game", "multiplayer", "Werewolf Hunter", "Last Light", "game studio"],
  authors: [{ name: "Last Light" }],
  creator: "Last Light",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
    url: siteUrl,
    siteName: "Last Light",
    title: "Last Light | Independent Game Studio",
    description: "Independent game studio creating dark cooperative experiences like Werewolf Hunter.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Last Light" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Last Light | Independent Game Studio",
    description: "Independent game studio creating dark cooperative experiences like Werewolf Hunter.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${inter.variable} font-sans antialiased text-white min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only font-heading text-sm"
        >
          Skip to content
        </a>
        <GalaxyBackground />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
