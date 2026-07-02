import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { piatti } from "@/content/piatti";
import { getRistoranteBySlug } from "@/lib/ristorante-lookup";
import RevealOnScroll from "@/components/RevealOnScroll";
import PillButton from "@/components/PillButton";
import { buildMetadata } from "@/lib/metadata";
import { BASE_PATH } from "@/lib/basePath";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const piatto = piatti.find((item) => item.slug === slug);
  return buildMetadata({
    locale,
    path: `/piatti/${slug}`,
    title: piatto ? `${piatto.nome} — Ciccio Damplo` : "Ciccio Damplo",
  });
}

export function generateStaticParams() {
  return piatti.map((piatto) => ({ slug: piatto.slug }));
}

export default async function PiattoDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const piatto = piatti.find((item) => item.slug === slug);
  if (!piatto) {
    notFound();
  }

  const ristorante = getRistoranteBySlug(piatto.ristoranteOrigine);
  // Mostra solo 4 piatti correlati (non tutti)
  const altriPiatti = piatti.filter((p) => p.slug !== piatto.slug).slice(0, 4);

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative flex min-h-[65dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-16 md:px-16"
        style={{
          backgroundImage: `url('${BASE_PATH}/images/piatti/${piatto.slug}.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10 max-w-3xl">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
              {locale === "it" ? "Piatto iconico" : "Iconic dish"}
              {ristorante && (
                <> · <a href={`${BASE_PATH}/${locale}/ristoranti/${ristorante.slug}/`} className="hover:text-gold-bright">{ristorante.nome}</a></>
              )}
            </p>
            <h1 className="font-display text-4xl uppercase tracking-wide text-gold-bright md:text-6xl">
              {piatto.nome}
            </h1>
            <p className="mt-4 max-w-xl font-display text-xl italic text-cream/80">
              {piatto.sottotitoloIronico[locale]}
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── Contenuto ── */}
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-8">

        {/* Descrizione principale */}
        <RevealOnScroll>
          <p className="text-xl leading-relaxed text-cream/90 md:text-2xl">
            {piatto.descrizione[locale]}
          </p>
        </RevealOnScroll>

        {/* Nota dello chef */}
        <RevealOnScroll delay={0.1}>
          <blockquote className="mt-12 border-l-2 border-gold/40 pl-6">
            <p className="font-display text-lg italic text-gold-bright">
              {locale === "it"
                ? `"Ogni volta che lo preparo, piango un po'. È una forma di controllo qualità."`
                : `"Every time I prepare it, I cry a little. It's a form of quality control."`}
            </p>
            <footer className="mt-2 text-sm text-cream/50">— Francesco D'Amplo</footer>
          </blockquote>
        </RevealOnScroll>

        {/* Info bar */}
        <RevealOnScroll delay={0.15}>
          <div className="mt-12 flex flex-col gap-6 rounded-bezel border border-white/10 bg-white/5 p-8 md:flex-row md:gap-12">
            {ristorante && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                  {locale === "it" ? "Disponibile a" : "Available at"}
                </p>
                <a
                  href={`${BASE_PATH}/${locale}/ristoranti/${ristorante.slug}/`}
                  className="mt-1 block text-cream hover:text-gold-bright"
                >
                  {ristorante.nome}
                </a>
                <p className="text-sm text-cream/50">{ristorante.citta[locale]}</p>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                {locale === "it" ? "Prenotazione" : "Booking"}
              </p>
              <p className="mt-1 text-sm text-cream/70">
                {locale === "it"
                  ? "Solo su richiesta, con almeno una settimana di anticipo emotivo."
                  : "By request only, with at least one week of emotional advance notice."}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                {locale === "it" ? "Avvertenza" : "Notice"}
              </p>
              <p className="mt-1 text-sm text-cream/70">
                {locale === "it"
                  ? "Ciccio non è responsabile per crisi esistenziali o rivalutazione del proprio rapporto col cibo."
                  : "Ciccio accepts no liability for existential crises or reassessment of one's relationship with food."}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-10">
          <PillButton href="/piatti">
            {locale === "it" ? "Tutti i piatti" : "All dishes"}
          </PillButton>
        </div>
      </div>

      {/* ── Altri piatti ── */}
      <section className="border-t border-white/10 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <RevealOnScroll>
            <h2 className="mb-8 font-display text-2xl uppercase tracking-wide text-cream">
              {locale === "it" ? "Altri Piatti Iconici" : "More Iconic Dishes"}
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {altriPiatti.map((p, index) => (
              <RevealOnScroll key={p.slug} delay={index * 0.07}>
                <a
                  href={`${BASE_PATH}/${locale}/piatti/${p.slug}/`}
                  className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 transition-colors hover:border-gold/30"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={`${BASE_PATH}/images/piatti/${p.slug}.webp`}
                      alt={p.nome}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-display text-xs text-gold-bright leading-tight">{p.nome}</p>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
