import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { press } from "@/content/press";
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
  return buildMetadata({ locale, path: "/press", title: "Press — Ciccio Damplo" });
}

export default async function PressPage({
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
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Media</p>
          <h1 className="font-display text-4xl uppercase tracking-wide text-cream md:text-6xl">
            {locale === "it" ? "Rassegna Stampa" : "Press Coverage"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/60">
            {locale === "it"
              ? "Quando la stampa gastronomica mondiale parla di cucina siciliana, parla di Ciccio. Quando parla di Ciccio, non sempre sa bene cosa sta dicendo. Ma lo dice con convinzione."
              : "When the international food press talks about Sicilian cuisine, it talks about Ciccio. When it talks about Ciccio, it isn't always sure what it's saying. But it says it with conviction."}
          </p>
        </div>
      </RevealOnScroll>

      {/* Grid: primo articolo grande */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {press.map((articolo, index) => (
          <RevealOnScroll key={articolo.slug} delay={Math.min(index, 2) * 0.08}>
            <a
              href={`${BASE_PATH}/${locale}/press/${articolo.slug}/`}
              className={`group block overflow-hidden rounded-bezel border border-white/10 bg-white/5 transition-colors duration-500 hover:border-gold/30 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Cover image */}
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[21/9]" : "aspect-[16/9]"
                }`}
              >
                <img
                  src={`${BASE_PATH}/images/press/${articolo.slug}.webp`}
                  alt={articolo.testata}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index === 0 ? undefined : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {/* Testata badge */}
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs text-cream/80 backdrop-blur-sm">
                  {articolo.testata}
                </div>
              </div>

              {/* Testo */}
              <div className="p-6">
                <h2
                  className={`font-display text-gold-bright ${
                    index === 0 ? "text-2xl md:text-3xl" : "text-lg"
                  }`}
                >
                  {articolo.titolo[locale]}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  {articolo.estratto[locale]}
                </p>
                <p className="mt-4 text-xs text-cream/40">{articolo.data}</p>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
