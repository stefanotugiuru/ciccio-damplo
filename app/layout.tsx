import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cicciodamplo.com"),
  openGraph: {
    images: [{ url: "/images/ciccio/ciccio-cucina-hd.webp", width: 1200, height: 630, alt: "Ciccio Damplo — Francesco D'Amplo" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/ciccio/ciccio-cucina-hd.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://cicciodamplo.com/#person",
      "name": "Francesco D'Amplo",
      "alternateName": "Ciccio Damplo",
      "jobTitle": "Chef",
      "description": "Chef siciliano di fama internazionale, fondatore del Damplo Group. Undici ristoranti su cinque continenti, trenta stelle Michelin.",
      "birthDate": "1995-09-14",
      "birthPlace": { "@type": "Place", "name": "Mineo, Sicilia, Italia" },
      "nationality": "Italian",
      "url": "https://cicciodamplo.com",
      "image": "https://cicciodamplo.com/images/ciccio/ciccio-cucina-hd.webp",
    },
    {
      "@type": "Organization",
      "@id": "https://cicciodamplo.com/#organization",
      "name": "Damplo Group",
      "url": "https://cicciodamplo.com",
      "logo": "https://cicciodamplo.com/images/damplo-logo.webp",
      "founder": { "@id": "https://cicciodamplo.com/#person" },
      "numberOfLocations": 11,
      "areaServed": ["Italia", "UAE", "Monaco", "USA", "Australia", "Spagna", "Francia", "Giappone"],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-ink font-sans text-cream">{children}</body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JK1M4HC862" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JK1M4HC862');
      `}</Script>
    </html>
  );
}
