import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { biografia } from "@/content/biografia";
import RevealOnScroll from "@/components/RevealOnScroll";
import PillButton from "@/components/PillButton";
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
    path: "/biografia",
    title: locale === "it" ? "Biografia — Ciccio Damplo" : "Biography — Ciccio Damplo",
  });
}

// Foto di Ciccio distribuite lungo la biografia (in ordine narrativo)
const bioPhotos = [
  { src: "/images/galleria/ciccio-che-cucina.png",          altIt: "Ciccio in cucina", altEn: "Ciccio in the kitchen" },
  { src: "/images/ciccio/ciccio-cucina.jpg",                altIt: "Ciccio al lavoro", altEn: "Ciccio at work" },
  { src: "/images/galleria/ciccio-masterchef.png",          altIt: "Ciccio a MasterChef", altEn: "Ciccio at MasterChef" },
  { src: "/images/galleria/ciccio-nel-suo-ufficio.png",     altIt: "Ciccio nel suo ufficio", altEn: "Ciccio in his office" },
  { src: "/images/galleria/ciccio-in-yatch.png",            altIt: "Ciccio sul suo yacht", altEn: "Ciccio on his yacht" },
  { src: "/images/galleria/ciccio-tiro-al-piattello.png",   altIt: "Ciccio a tiro al piattello", altEn: "Ciccio clay shooting" },
  { src: "/images/galleria/ciccio-nel-vigneto.png",         altIt: "Ciccio nel vigneto", altEn: "Ciccio in the vineyard" },
  { src: "/images/galleria/ciccio-nella-cantina-damplo.png",altIt: "Ciccio nella cantina", altEn: "Ciccio in the cellar" },
];

export default async function BiografiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const content = biografia[locale];

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative flex min-h-[65dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-16 md:px-16"
        style={{
          backgroundImage: `url('${BASE_PATH}/images/galleria/ciccio-che-prepara-piatti.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
              {locale === "it" ? "Il visionario di Mineo" : "The visionary from Mineo"}
            </p>
            <h1 className="font-display text-4xl uppercase tracking-wide text-gold-bright md:text-6xl">
              {locale === "it" ? "La Leggenda" : "The Legend"}
            </h1>
            <p className="mt-4 max-w-lg text-lg text-cream/80">{content.title}</p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── Corpo ── */}
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">

        {/* Intro photo full-width */}
        <RevealOnScroll>
          <div className="mb-16 overflow-hidden rounded-bezel border border-white/10">
            <img
              src={`${BASE_PATH}/images/galleria/ciccio-nella-sua-villa.png`}
              alt={locale === "it" ? "Ciccio nella sua villa con amici" : "Ciccio at his villa with friends"}
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        </RevealOnScroll>

        {/* Sezioni alternate testo / foto */}
        {content.sections.map((section, sIndex) => (
          <div key={sIndex} className="mb-16">
            {/* Testo sezione */}
            <RevealOnScroll>
              <h2 className="mb-4 font-display text-sm uppercase tracking-[0.2em] text-gold">
                {section.titolo}
              </h2>
            </RevealOnScroll>
            {section.paragrafi.map((paragrafo, pIndex) => (
              <RevealOnScroll key={pIndex} delay={Math.min(pIndex, 1) * 0.08}>
                <p className="mt-4 text-lg leading-relaxed text-cream/90">
                  {paragrafo}
                </p>
              </RevealOnScroll>
            ))}

            {/* Foto dopo ogni 2 sezioni (indici pari) */}
            {sIndex % 2 === 1 && bioPhotos[Math.floor(sIndex / 2)] && (
              <RevealOnScroll delay={0.1}>
                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="overflow-hidden rounded-bezel border border-white/10">
                    <img
                      src={`${BASE_PATH}${bioPhotos[Math.floor(sIndex / 2)].src}`}
                      alt={locale === "it"
                        ? bioPhotos[Math.floor(sIndex / 2)].altIt
                        : bioPhotos[Math.floor(sIndex / 2)].altEn}
                      className="h-64 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {bioPhotos[Math.floor(sIndex / 2) + 1] && (
                    <div className="overflow-hidden rounded-bezel border border-white/10">
                      <img
                        src={`${BASE_PATH}${bioPhotos[Math.floor(sIndex / 2) + 1].src}`}
                        alt={locale === "it"
                          ? bioPhotos[Math.floor(sIndex / 2) + 1].altIt
                          : bioPhotos[Math.floor(sIndex / 2) + 1].altEn}
                        className="h-64 w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            )}
          </div>
        ))}

        {/* Pull quote */}
        <RevealOnScroll delay={0.1}>
          <blockquote className="my-12 border-l-2 border-gold/40 pl-6">
            <p className="font-display text-2xl italic text-gold-bright">
              {locale === "it"
                ? `"La cucina siciliana non si cucina. Si dirige, come un film."`
                : `"Sicilian cuisine isn't cooked. It's directed, like a film."`}
            </p>
            <footer className="mt-3 text-sm text-cream/50">— Francesco D'Amplo</footer>
          </blockquote>
        </RevealOnScroll>

        {/* Foto finale */}
        <RevealOnScroll>
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[bioPhotos[5], bioPhotos[6], bioPhotos[7]].filter(Boolean).map((foto, i) => (
              <div key={i} className="overflow-hidden rounded-bezel border border-white/10">
                <img
                  src={`${BASE_PATH}${foto.src}`}
                  alt={locale === "it" ? foto.altIt : foto.altEn}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <div className="mt-4 flex gap-4">
          <PillButton href="/ristoranti">
            {locale === "it" ? "I Ristoranti" : "The Restaurants"}
          </PillButton>
        </div>

        {/* Credenziali */}
        <RevealOnScroll>
          <div className="mt-20 grid grid-cols-2 gap-4 border-t border-white/10 pt-16 md:grid-cols-4">
            {[
              { n: "10", label: locale === "it" ? "Ristoranti" : "Restaurants" },
              { n: "5", label: locale === "it" ? "Continenti" : "Continents" },
              { n: "★★★", label: locale === "it" ? "Stelle Michelin" : "Michelin Stars" },
              { n: "9+", label: locale === "it" ? "Premi" : "Awards" },
            ].map((stat) => (
              <div key={stat.n} className="text-center">
                <p className="font-display text-5xl text-gold-bright">{stat.n}</p>
                <p className="mt-1 text-sm text-cream/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
