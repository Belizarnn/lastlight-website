import { GAMES, CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site-config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lastlight.studio";

export default function JsonLd() {
  const game = GAMES[0];
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Last Light",
    url: siteUrl,
    logo: `${siteUrl}/og-image.png`,
    email: CONTACT_EMAIL,
    sameAs: [SOCIAL_LINKS.discord, SOCIAL_LINKS.steam, SOCIAL_LINKS.linkedIn, SOCIAL_LINKS.youtube],
  };
  const videoGame = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description,
    publisher: { "@type": "Organization", name: "Last Light" },
    gamePlatform: "PC",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGame) }}
      />
    </>
  );
}
