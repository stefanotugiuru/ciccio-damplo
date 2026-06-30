import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { piatti } from "@/content/piatti";
import { getRistoranteBySlug } from "@/lib/ristorante-lookup";
import RevealOnScroll from "@/components/RevealOnScroll";
import PillButton from "@/components/PillButton";
import { buildMetadata } from "@/lib/metadata";

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
  const altriPiatti = piatti.filter((p) => p.slug !== piatto.slug);

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative flex min-h-[60dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-16 md:px-16"
        style={{
          backgroundImage: `url('/images/piatti/${piatto.slug}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
              {locale === "it" ? "Piatto iconico" : "Iconic dish"}
            </p>
            <h1 className="font-display text-4xl uppercase tracking-wide text-gold-bright md:text-6xl">
              {piatto.nome}
            </h1>
            <p className="mt-4 max-w-lg font-display text-xl italic text-cream/80">
              {piatto.sottotitoloIronico[locale]}
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── Contenuto ── */}
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">

          {/* Descrizione */}
          <RevealOnScroll>
            <div className="md:col-span-7">
              <p className="text-xl leading-relaxed text-cream/90">
                {piatto.descrizione[locale]}
              </p>

              {ristorante && (
                <p className="mt-8 text-cream/70">
                  {locale === "it" ? "Disponibile esclusivamente presso " : "Available exclusively at "}
                  <a
                    href={`/${locale}/ristoranti/${ristorante.slug}/`}
                    className="text-gold underline underline-offset-4 hover:text-gold-bright"
                  >
                    {ristorante.nome}
                  </a>
                  {locale === "it" ? `, ${ristorante.citta.it}` : `, ${ristorante.citta.en}`}.
                </p>
              )}

              <div className="mt-10">
                <PillButton href="/piatti">
                  {locale === "it" ? "Tutti i piatti" : "All dishes"}
                </PillButton>
              </div>
            </div>
          </RevealOnScroll>

          {/* Info card */}
          <RevealOnScroll delay={0.15}>
            <aside className="space-y-6 rounded-bezel border border-gold/20 bg-white/5 p-8 md:col-span-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                  {locale === "it" ? "Prezzo" : "Price"}
                </p>
                <p className="mt-2 font-display text-2xl text-gold-bright">
                  {piatto.prezzoAssurdo[locale]}
                </p>
              </div>
              <hr className="border-white/10" />
              {ristorante && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                    {locale === "it" ? "Disponibile a" : "Available at"}
                  </p>
                  <p className="mt-1 text-cream">{ristorante.nome}</p>
                  <p className="text-sm text-cream/50">{ristorante.citta[locale]}</p>
                </div>
              )}
              <hr className="border-white/10" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                  {locale === "it" ? "Avvertenza legale" : "Legal notice"}
                </p>
                <p className="mt-1 text-sm text-cream/60">
                  {locale === "it"
                    ? "Ciccio declina ogni responsabilità per reazioni emotive, pianti inaspettati, crisi esistenziali o rivalutazione improvvisa del proprio rapporto con il cibo."
                    : "Ciccio accepts no liability for emotional reactions, unexpected crying, existential crises, or sudden reassessment of one's relationship with food."}
                </p>
              </div>
            </aside>
          </RevealOnScroll>
        </div>

        {/* ── Altri piatti ── */}
        <RevealOnScroll>
          <section className="mt-20 border-t border-white/10 pt-16">
            <h2 className="mb-8 font-display text-2xl uppercase tracking-wide text-cream">
              {locale === "it" ? "Altri Piatti Iconici" : "More Iconic Dishes"}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {altriPiatti.map((p, index) => (
                <RevealOnScroll key={p.slug} delay={index * 0.07}>
                  <a
                    href={`/${locale}/piatti/${p.slug}/`}
                    className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 transition-colors hover:border-gold/30"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`/images/piatti/${p.slug}.jpg`}
                        alt={p.nome}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-display text-sm text-gold-bright">{p.nome}</p>
                      <p className="mt-0.5 text-xs text-cream/50">{p.prezzoAssurdo[locale]}</p>
                    </div>
                  </a>
                </RevealOnScroll>
              ))}
            </div>
          </section>
        </RevealOnScroll>
      </div>
    </div>
  );
}
