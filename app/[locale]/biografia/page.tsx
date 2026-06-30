import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { biografia } from "@/content/biografia";
import RevealOnScroll from "@/components/RevealOnScroll";
import PillButton from "@/components/PillButton";
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
    path: "/biografia",
    title: locale === "it" ? "Biografia — Ciccio Damplo" : "Biography — Ciccio Damplo",
  });
}

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
          backgroundImage: "url('/images/galleria/ciccio-che-prepara-piatti.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
              {locale === "it" ? "Il personaggio" : "The man"}
            </p>
            <h1 className="font-display text-4xl uppercase tracking-wide text-gold-bright md:text-6xl">
              {locale === "it" ? "La Biografia" : "Biography"}
            </h1>
            <p className="mt-4 max-w-lg text-lg text-cream/80">{content.title}</p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── Corpo ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">

          {/* Colonna testo */}
          <article className="md:col-span-7">
            {content.paragraphs.map((paragraph, index) => (
              <RevealOnScroll key={index} delay={Math.min(index, 2) * 0.1}>
                <p className="mt-8 text-lg leading-relaxed text-cream/90 first:mt-0">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}

            {/* Pull quote */}
            <RevealOnScroll delay={0.2}>
              <blockquote className="mt-12 border-l-2 border-gold/40 pl-6">
                <p className="font-display text-2xl italic text-gold-bright">
                  {locale === "it"
                    ? `"La cucina siciliana non si cucina. Si dirige, come un film."`
                    : `"Sicilian cuisine isn't cooked. It's directed, like a film."`}
                </p>
                <footer className="mt-3 text-sm text-cream/50">— Francesco D'Amplo</footer>
              </blockquote>
            </RevealOnScroll>

            <div className="mt-12 flex gap-4">
              <PillButton href="/ristoranti">
                {locale === "it" ? "I Ristoranti" : "The Restaurants"}
              </PillButton>
            </div>
          </article>

          {/* Colonna foto laterale */}
          <aside className="hidden md:col-span-5 md:block">
            <RevealOnScroll delay={0.15}>
              <div className="sticky top-36 space-y-4">
                <div className="overflow-hidden rounded-bezel border border-white/10">
                  <img
                    src="/images/galleria/ciccio-masterchef.png"
                    alt={locale === "it" ? "Ciccio a MasterChef" : "Ciccio at MasterChef"}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-bezel border border-white/10">
                  <img
                    src="/images/galleria/ciccio-nella-cantina-damplo.png"
                    alt={locale === "it" ? "Ciccio nella cantina" : "Ciccio in the wine cellar"}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </aside>
        </div>

        {/* Credenziali bottom */}
        <RevealOnScroll>
          <div className="mt-20 grid grid-cols-2 gap-4 border-t border-white/10 pt-16 md:grid-cols-4">
            {[
              { n: "4", label: locale === "it" ? "Ristoranti" : "Restaurants" },
              { n: "3", label: locale === "it" ? "Continenti" : "Continents" },
              { n: "12", label: locale === "it" ? "Stelle (autoass.)" : "Stars (self-awarded)" },
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
