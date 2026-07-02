import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { home, homeGalleriaTeaser } from "@/content/home";
import { ristoranti } from "@/content/ristoranti";
import { piatti } from "@/content/piatti";
import { premi } from "@/content/premi";
import { quotes } from "@/content/quoteCarousel";
import RevealOnScroll from "@/components/RevealOnScroll";
import PillButton from "@/components/PillButton";
import QuoteCarousel from "@/components/QuoteCarousel";
import { buildMetadata } from "@/lib/metadata";
import { BASE_PATH } from "@/lib/basePath";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildMetadata({ locale, path: "", title: "Ciccio Damplo" });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const t = home[locale];

  return (
    <div className="space-y-0">

      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[88dvh] flex-col items-start justify-end overflow-hidden rounded-b-bezel px-6 pb-16 md:px-16"
        style={{
          backgroundImage: `url('${BASE_PATH}/images/ciccio/ciccio-cucina-hd.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center 25%",
        }}
        role="img"
        aria-label={locale === "it" ? "Francesco D'Amplo in cucina" : "Francesco D'Amplo in his kitchen"}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        {/* Radial gold glow */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

        <RevealOnScroll>
          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">
              {t.stats}
            </p>
            <h1 className="font-display text-4xl uppercase tracking-wide text-gold-bright sm:text-5xl md:text-7xl">
              {t.heading}
            </h1>
            <p className="mt-5 max-w-xl text-xl text-cream/90 md:text-2xl">
              {t.subheading}
            </p>
            <div className="mt-10">
              <PillButton href="/ristoranti">
                {t.ristorantiCta}
              </PillButton>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── 2. BIO TEASER ───────────────────────────────────────────── */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-2 md:gap-20 md:px-8">
        <RevealOnScroll>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">
              {t.bioLabel}
            </p>
            <h2 className="font-display text-3xl italic text-cream md:text-4xl">
              {locale === "it"
                ? "Ha portato Mineo sul tetto del mondo. Mineo non gliel'ha ancora perdonato."
                : "He put Mineo on top of the world. Mineo hasn't quite forgiven him for it."}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              {t.bioTeaser}
            </p>
            <div className="mt-8">
              <PillButton href="/biografia">{t.bioCta}</PillButton>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="overflow-hidden rounded-bezel border border-white/10">
            <img
              src={`${BASE_PATH}/images/galleria/ciccio-che-prepara-piatti.png`}
              alt={locale === "it" ? "Ciccio che prepara i piatti" : "Ciccio preparing dishes"}
              className="h-96 w-full object-cover"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>
      </section>

      {/* ── 3. RISTORANTI ───────────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-8">
        <RevealOnScroll>
          <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold">Damplo Group</p>
              <h2 className="font-display text-4xl uppercase tracking-wide text-cream md:text-5xl">
                {t.ristorantiLabel}
              </h2>
            </div>
            <PillButton href="/ristoranti">{t.ristorantiCta}</PillButton>
          </div>
        </RevealOnScroll>

        {(() => {
          const order = ["damplo-mineo", "damplo-melbourne", "damplo-dubai", "damplo-new-york"];
          const ristorantiHome = order
            .map((slug) => ristoranti.find((r) => r.slug === slug))
            .filter(Boolean) as typeof ristoranti;
          return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {ristorantiHome.map((r, index) => (
            <RevealOnScroll key={r.slug} delay={Math.min(index, 2) * 0.08}>
              <a
                href={`${BASE_PATH}/${locale}/ristoranti/${r.slug}/`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-bezel"
              >
                <img
                  src={`${BASE_PATH}/images/ristoranti/${r.slug}-hero.jpg`}
                  alt={r.nome}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                {/* Stelle badge */}
                <div className="absolute right-4 top-4 rounded-full border border-gold/40 bg-black/60 px-3 py-1 text-xs text-gold backdrop-blur-sm">
                  {"★".repeat(r.stelleMichelinFinte)}
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-display text-2xl uppercase tracking-wide text-gold-bright">
                    {r.nome}
                  </h3>
                  <p className="mt-1 text-sm text-cream/70">{r.citta[locale]}</p>
                  <p className="mt-3 text-sm italic text-cream/80">{r.tagline[locale]}</p>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
          );
        })()}
      </section>

      {/* ── 4. PIATTI ───────────────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-8">
        <RevealOnScroll>
          <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold">Menu</p>
              <h2 className="font-display text-4xl uppercase tracking-wide text-cream md:text-5xl">
                {t.piattiLabel}
              </h2>
            </div>
            <PillButton href="/piatti">{t.piattiCta}</PillButton>
          </div>
        </RevealOnScroll>

        {(() => {
          const slugsHome = ["paixa-cu-sugu-damplo-marghera", "schiacciamo-damplo-marghera", "moemmeno-damplo-marghera", "arancino-decostruito"];
          const piattiHome = slugsHome.map(slug => piatti.find(p => p.slug === slug)).filter(Boolean) as typeof piatti;
          return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {piattiHome.map((p, index) => (
            <RevealOnScroll key={p.slug} delay={Math.min(index, 2) * 0.08}>
              <a
                href={`${BASE_PATH}/${locale}/piatti/${p.slug}/`}
                className="group block overflow-hidden rounded-bezel border border-white/10 bg-white/5 transition-colors duration-500 hover:border-gold/30"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={`${BASE_PATH}/images/piatti/${p.slug}.jpg`}
                    alt={p.nome}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index < 2 ? undefined : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-gold-bright">{p.nome}</h3>
                  <p className="mt-1 font-display text-sm italic text-cream/70">
                    {p.sottotitoloIronico[locale]}
                  </p>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
          );
        })()}
      </section>

      {/* ── 5. PRESS QUOTES ─────────────────────────────────────────── */}
      <section className="border-y border-white/10 px-6 py-24 md:px-8">
        <RevealOnScroll>
          <p className="mb-12 text-center text-xs uppercase tracking-[0.2em] text-gold">{t.pressLabel}</p>
        </RevealOnScroll>
        <QuoteCarousel quotes={quotes[locale]} locale={locale} />
      </section>

      {/* ── 6. GALLERIA TEASER ──────────────────────────────────────── */}
      <section className="px-6 py-20 md:px-8">
        <RevealOnScroll>
          <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold">Galleria</p>
              <h2 className="font-display text-4xl uppercase tracking-wide text-cream md:text-5xl">
                {t.galleriaLabel}
              </h2>
            </div>
            <PillButton href="/galleria">{t.galleriaCta}</PillButton>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {homeGalleriaTeaser.map((foto, index) => (
            <RevealOnScroll key={foto.file} delay={Math.min(index, 3) * 0.07}>
              <a
                href={`${BASE_PATH}/${locale}/galleria/`}
                className="group relative block aspect-square overflow-hidden rounded-[1.5rem] border border-white/10 transition-colors duration-500 hover:border-gold/40"
              >
                <img
                  src={`${BASE_PATH}${foto.file}`}
                  alt={foto.alt[locale]}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── 7. PREMI ────────────────────────────────────────────────── */}
      <section className="border-t border-white/10 px-6 py-20 md:px-8">
        <RevealOnScroll>
          <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="font-display text-3xl uppercase tracking-wide text-cream">
              {t.premiLabel}
            </h2>
            <PillButton href="/premi">{t.premiCta}</PillButton>
          </div>
        </RevealOnScroll>

        <div className="flex flex-wrap gap-3">
          {premi.slice(0, 6).map((premio, index) => (
            <RevealOnScroll key={premio.nome.it} delay={Math.min(index, 3) * 0.06}>
              <a
                href={`${BASE_PATH}/${locale}/premi/`}
                className="block rounded-full border border-gold/20 bg-white/5 px-5 py-2.5 text-sm text-cream/70 transition-colors duration-300 hover:border-gold/50 hover:text-cream"
              >
                <span className="text-gold/60">★</span>{" "}
                {premio.nome[locale]}
                <span className="ml-2 text-xs text-cream/40">{premio.anno}</span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </section>

    </div>
  );
}
