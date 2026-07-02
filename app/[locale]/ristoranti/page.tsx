import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { ristoranti } from "@/content/ristoranti";
import RevealOnScroll from "@/components/RevealOnScroll";
import { buildMetadata } from "@/lib/metadata";
import { BASE_PATH } from "@/lib/basePath";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({
    locale,
    path: "/ristoranti",
    title: locale === "it" ? "Ristoranti — Ciccio Damplo" : "Restaurants — Ciccio Damplo",
  });
}

export default async function RistorantiPage({
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
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Damplo Group</p>
          <h1 className="font-display text-4xl uppercase tracking-wide text-cream md:text-6xl">
            {locale === "it" ? "I Ristoranti" : "The Restaurants"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            {locale === "it"
              ? "Mineo, Roma, Milano, Barcellona, Monaco, Parigi, New York, Dubai, Tokyo, Melbourne. La cucina siciliana non conosce confini. Né pudore nei prezzi."
              : "Mineo, Rome, Milan, Barcelona, Monaco, Paris, New York, Dubai, Tokyo, Melbourne. Sicilian cuisine knows no borders. Or pricing restraint."}
          </p>
        </div>
      </RevealOnScroll>

      {/* Grid: first card is large (flagship), rest are half-width */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {ristoranti.map((ristorante, index) => (
          <RevealOnScroll key={ristorante.slug} delay={Math.min(index, 2) * 0.08}>
            <a
              href={`${BASE_PATH}/${locale}/ristoranti/${ristorante.slug}/`}
              className={`group relative block overflow-hidden rounded-bezel ${
                index === 0 ? "md:col-span-2 aspect-[4/3] md:aspect-[16/7]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={`${BASE_PATH}/images/ristoranti/${ristorante.slug}-hero.webp`}
                alt={ristorante.nome}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading={index === 0 ? undefined : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

              {/* Badge stelle */}
              <div className="absolute right-4 top-4 rounded-full border border-gold/50 bg-black/60 px-3 py-1 text-xs text-gold backdrop-blur-sm">
                {"★".repeat(ristorante.stelleMichelinFinte)}
              </div>

              <div className="absolute bottom-0 left-0 p-7">
                <h2
                  className={`font-display uppercase tracking-wide text-gold-bright ${
                    index === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  {ristorante.nome}
                </h2>
                <p className="mt-1.5 text-sm text-cream/70">{ristorante.citta[locale]}</p>
                <p className="mt-3 max-w-md font-display text-sm italic text-cream/80">
                  {ristorante.tagline[locale]}
                </p>
                <p className="mt-4 inline-block text-xs uppercase tracking-[0.15em] text-gold/80">
                  {locale === "it" ? "Scopri →" : "Explore →"}
                </p>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
