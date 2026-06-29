import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "@/content/notFound";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"], style: ["italic"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const locales = ["it", "en"] as const;

export default function RootNotFound() {
  return (
    <div
      className={`${jakarta.className} flex min-h-screen flex-col items-center justify-center gap-16 bg-ink px-6 py-24 text-center text-cream`}
    >
      {locales.map((locale) => {
        const content = notFound[locale];
        return (
          <div key={locale}>
            <h1 className={`${playfair.className} text-2xl text-gold-bright`}>{content.title}</h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-cream/80">{content.message}</p>
            <a
              href={`/${locale}/`}
              className="mt-6 inline-block rounded-full bg-gold/10 px-6 py-3 text-sm text-gold-bright"
            >
              {content.cta}
            </a>
          </div>
        );
      })}
    </div>
  );
}
