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

// 6 foto specifiche richieste dall'utente
const bioPhotos = [
  { src: "/images/galleria/best-sicilian-chef.png",          altIt: "Premio Best Sicilian Chef", altEn: "Best Sicilian Chef Award" },
  { src: "/images/galleria/ciccio-che-da-classe-di-cucina.png", altIt: "Ciccio che tiene una cooking class", altEn: "Ciccio teaching a cooking class" },
  { src: "/images/galleria/ciccio-masterchef.png",           altIt: "Ciccio a MasterChef", altEn: "Ciccio at MasterChef" },
  { src: "/images/galleria/ciccio-nella-cantina-damplo.png", altIt: "Ciccio nella cantina Damplo", altEn: "Ciccio in the Damplo cellar" },
  { src: "/images/galleria/ciccio-nel-vigneto.png",          altIt: "Ciccio nel vigneto di Mineo", altEn: "Ciccio in the Mineo vineyard" },
  { src: "/images/galleria/ciccio-con-ferrari-ristorante.png", altIt: "Ciccio con la Ferrari davanti a Damplo Mineo", altEn: "Ciccio with the Ferrari outside Damplo Mineo" },
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
        className="relative flex min-h-[60dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-16 md:px-16"
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

      {/* ── Corpo: testo sinistra, foto destra ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">

          {/* ── COLONNA TESTO (sinistra) ── */}
          <article className="order-2 md:order-1 md:col-span-7">
            {content.sections.map((section, sIndex) => (
              <div key={sIndex} className={sIndex > 0 ? "mt-10" : ""}>
                <RevealOnScroll>
                  <h2 className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-gold">
                    {section.titolo}
                  </h2>
                </RevealOnScroll>
                {section.paragrafi.map((paragrafo, pIndex) => (
                  <RevealOnScroll key={pIndex} delay={Math.min(pIndex, 1) * 0.07}>
                    <p className="mt-4 text-lg leading-relaxed text-cream/90">
                      {paragrafo}
                    </p>
                  </RevealOnScroll>
                ))}
              </div>
            ))}

            {/* Pull quote */}
            <RevealOnScroll delay={0.1}>
              <blockquote className="mt-12 border-l-2 border-gold/40 pl-6">
                <p className="font-display text-2xl italic text-gold-bright">
                  {locale === "it"
                    ? `"La cucina siciliana non si cucina. Si dirige, come un film."`
                    : `"Sicilian cuisine isn't cooked. It's directed, like a film."`}
                </p>
                <footer className="mt-3 text-sm text-cream/50">— Francesco D'Amplo</footer>
              </blockquote>
            </RevealOnScroll>

            <div className="mt-10">
              <PillButton href="/ristoranti">
                {locale === "it" ? "I Ristoranti" : "The Restaurants"}
              </PillButton>
            </div>
          </article>

          {/* ── COLONNA FOTO (destra, solo desktop) ── */}
          <aside className="order-1 hidden md:order-2 md:col-span-5 md:block">
            <div className="space-y-4">
              {bioPhotos.map((foto, i) => (
                <RevealOnScroll key={foto.src} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="overflow-hidden rounded-bezel border border-white/10">
                    <img
                      src={`${BASE_PATH}${foto.src}`}
                      alt={locale === "it" ? foto.altIt : foto.altEn}
                      className="w-full object-cover"
                      loading={i < 2 ? undefined : "lazy"}
                    />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </aside>
        </div>

        {/* Credenziali */}
        <RevealOnScroll>
          <div className="mt-20 grid grid-cols-2 gap-4 border-t border-white/10 pt-16 md:grid-cols-4">
            {[
              { n: "10", label: locale === "it" ? "Ristoranti" : "Restaurants" },
              { n: "5", label: locale === "it" ? "Continenti" : "Continents" },
              { n: "★★★", label: locale === "it" ? "Stelle Michelin" : "Michelin Stars" },
              { n: "18+", label: locale === "it" ? "Premi" : "Awards" },
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
