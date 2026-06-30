import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { piatti } from "@/content/piatti";
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
    path: "/piatti",
    title: locale === "it" ? "Piatti — Ciccio Damplo" : "Dishes — Ciccio Damplo",
  });
}

export default async function PiattiPage({
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
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Menu</p>
          <h1 className="font-display text-4xl uppercase tracking-wide text-cream md:text-6xl">
            {locale === "it" ? "I Piatti Iconici" : "Iconic Dishes"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            {locale === "it"
              ? "Trentacinque piatti. Trentacinque ragioni per rivalutare le proprie priorità nella vita."
              : "Thirty-five dishes. Thirty-five reasons to reconsider your priorities in life."}
          </p>
        </div>
      </RevealOnScroll>

      {/* Grid: primo piatto largo */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {piatti.map((piatto, index) => (
          <RevealOnScroll key={piatto.slug} delay={Math.min(index, 2) * 0.08}>
            <a
              href={`${BASE_PATH}/${locale}/piatti/${piatto.slug}/`}
              className={`group block overflow-hidden rounded-bezel border border-white/10 bg-white/5 transition-colors duration-500 hover:border-gold/30 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[21/9]" : "aspect-video"
                }`}
              >
                <img
                  src={`${BASE_PATH}/images/piatti/${piatto.slug}.jpg`}
                  alt={piatto.nome}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index === 0 ? undefined : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h2
                  className={`font-display text-gold-bright ${
                    index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                  }`}
                >
                  {piatto.nome}
                </h2>
                <p className="mt-2 font-display text-sm italic text-cream/70">
                  {piatto.sottotitoloIronico[locale]}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream/60">
                  {piatto.descrizione[locale].slice(0, 120)}…
                </p>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
