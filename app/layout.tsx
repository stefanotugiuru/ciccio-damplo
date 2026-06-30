import type { ReactNode } from "react";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="bg-ink font-sans text-cream">{children}</body>
    </html>
  );
}
