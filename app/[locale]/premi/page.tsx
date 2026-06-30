import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { premi } from "@/content/premi";
import RevealOnScroll from "@/components/RevealOnScroll";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/premi",
    title: locale === "it" ? "Premi — Ciccio Damplo" : "Awards — Ciccio Damplo",
  });
}

export default async function PremiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className="px-6 py-20 md:px-8">
      {/* Header */}
      <RevealOnScroll>
        <div className="mb-20 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Damplo Group</p>
          <h1 className="font-display text-4xl uppercase tracking-wide text-cream md:text-6xl">
            {locale === "it" ? "Premi e Riconoscimenti" : "Awards & Recognitions"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            {locale === "it"
              ? "Riconoscimenti ottenuti nel corso di una carriera straordinaria. Alcuni più verificabili di altri."
              : "Awards earned over an extraordinary career. Some more verifiable than others."}
          </p>
        </div>
      </RevealOnScroll>

      {/* Grid premi */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {premi.map((premio, index) => (
          <RevealOnScroll key={premio.nome.it} delay={Math.min(index * 0.05, 0.4)}>
            <div className="group relative overflow-hidden rounded-bezel border border-white/10 bg-white/5 p-8 transition-colors duration-500 hover:border-gold/30">
              {/* Anno watermark */}
              <p className="pointer-events-none absolute right-4 top-2 font-display text-7xl font-bold text-white/5 select-none">
                {premio.anno}
              </p>

              <div className="relative">
                <p className="font-display text-3xl text-gold">★</p>
                <h2 className="mt-4 font-display text-lg text-cream">
                  {premio.nome[locale]}
                </h2>
                <p className="mt-2 text-sm text-cream/50">{premio.ente[locale]}</p>
                <p className="mt-4 inline-block rounded-full border border-gold/20 px-3 py-1 text-xs text-gold/70">
                  {premio.anno}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Stats bottom */}
      <RevealOnScroll>
        <div className="mt-20 rounded-bezel border border-white/10 bg-white/5 p-10 text-center">
          <p className="font-display text-5xl text-gold-bright">{premi.length}</p>
          <p className="mt-2 text-cream/60">
            {locale === "it"
              ? "riconoscimenti totali, distribuiti su oltre un decennio di eccellenza culinaria"
              : "total recognitions, distributed over more than a decade of culinary excellence"}
          </p>
        </div>
      </RevealOnScroll>
    </div>
  );
}
