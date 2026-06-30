import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { ristoranti } from "@/content/ristoranti";
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
  const ristorante = getRistoranteBySlug(slug);
  return buildMetadata({
    locale,
    path: `/ristoranti/${slug}`,
    title: ristorante ? `${ristorante.nome} — Ciccio Damplo` : "Ciccio Damplo",
  });
}

export function generateStaticParams() {
  return ristoranti.map((ristorante) => ({ slug: ristorante.slug }));
}

export default async function RistoranteDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const ristorante = getRistoranteBySlug(slug);
  if (!ristorante) {
    notFound();
  }

  const piattiDelRistorante = piatti.filter((p) => p.ristoranteOrigine === ristorante.slug);
  // Mostra max 3 altri ristoranti per non appesantire la pagina
  const altriRistoranti = ristoranti.filter((r) => r.slug !== ristorante.slug).slice(0, 3);

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative flex min-h-[70dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-16 md:px-16"
        style={{
          backgroundImage: `url('${BASE_PATH}/images/ristoranti/${ristorante.slug}-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

        <RevealOnScroll>
          <div className="relative z-10">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
              {ristorante.citta[locale]}
            </p>
            <h1 className="font-display text-3xl uppercase tracking-wide text-gold-bright sm:text-5xl md:text-7xl">
              {ristorante.nome}
            </h1>
            <p className="mt-5 max-w-2xl font-display text-xl italic text-cream/80">
              {ristorante.tagline[locale]}
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── Contenuto principale ── */}
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">

          {/* Testo */}
          <RevealOnScroll>
            <div className="md:col-span-7">
              <p className="text-xl leading-relaxed text-cream/90">
                {ristorante.descrizione[locale]}
              </p>
            </div>
          </RevealOnScroll>

          {/* Stelle & info laterale */}
          <RevealOnScroll delay={0.15}>
            <aside className="space-y-4 rounded-bezel border border-gold/20 bg-white/5 p-6 md:col-span-5 md:space-y-6 md:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                  {locale === "it" ? "Stelle Michelin" : "Michelin Stars"}
                </p>
                <p className="mt-2 font-display text-4xl text-gold-bright">
                  {"★".repeat(ristorante.stelleMichelinFinte)}
                </p>
                <p className="mt-1 text-sm text-cream/50">
                  {locale === "it" ? "Michelin" : "Michelin"}
                </p>
              </div>
              <hr className="border-white/10" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                  {locale === "it" ? "Città" : "City"}
                </p>
                <p className="mt-1 text-cream">{ristorante.citta[locale]}</p>
              </div>
              <hr className="border-white/10" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gold/70">
                  {locale === "it" ? "Prenotazioni" : "Reservations"}
                </p>
                <p className="mt-1 text-sm text-cream/70">
                  {locale === "it"
                    ? "Solo su invito di Ciccio. Il numero del suo agente non è pubblico. Per una ragione."
                    : "By Ciccio's invitation only. His agent's number is not public. For a reason."}
                </p>
              </div>
            </aside>
          </RevealOnScroll>
        </div>

        {/* ── Foto aggiuntive ── */}
        {ristorante.galleria && ristorante.galleria.length > 0 && (
          <RevealOnScroll>
            <section className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
              {ristorante.galleria.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-bezel border border-white/10">
                  <img
                    src={`${BASE_PATH}${img}`}
                    alt={ristorante.nome}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </section>
          </RevealOnScroll>
        )}

        {/* ── Piatti del ristorante ── */}
        {piattiDelRistorante.length > 0 && (
          <RevealOnScroll>
            <section className="mt-20 border-t border-white/10 pt-16">
              <h2 className="font-display text-3xl uppercase tracking-wide text-cream">
                {locale === "it" ? "I Piatti Signature" : "Signature Dishes"}
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {piattiDelRistorante.slice(0, 6).map((p, index) => (
                  <RevealOnScroll key={p.slug} delay={index * 0.1}>
                    <a
                      href={`${BASE_PATH}/${locale}/piatti/${p.slug}/`}
                      className="group block overflow-hidden rounded-bezel border border-white/10 bg-white/5 transition-colors duration-500 hover:border-gold/30"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={`${BASE_PATH}/images/piatti/${p.slug}.jpg`}
                          alt={p.nome}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
              {piattiDelRistorante.length > 6 && (
                <div className="mt-8 text-center">
                  <a
                    href={`${BASE_PATH}/${locale}/piatti/`}
                    className="text-sm uppercase tracking-[0.15em] text-gold/70 hover:text-gold transition-colors"
                  >
                    {locale === "it" ? `Vedi tutti i ${piattiDelRistorante.length} piatti →` : `See all ${piattiDelRistorante.length} dishes →`}
                  </a>
                </div>
              )}
            </section>
          </RevealOnScroll>
        )}

        {/* ── Altri ristoranti ── */}
        <RevealOnScroll>
          <section className="mt-20 border-t border-white/10 pt-16">
            <h2 className="mb-8 font-display text-2xl uppercase tracking-wide text-cream">
              {locale === "it" ? "Altri Ristoranti Damplo" : "Other Damplo Restaurants"}
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {altriRistoranti.map((r, index) => (
                <RevealOnScroll key={r.slug} delay={index * 0.07}>
                  <a
                    href={`${BASE_PATH}/${locale}/ristoranti/${r.slug}/`}
                    className="group relative block aspect-[4/3] overflow-hidden rounded-[1.5rem]"
                  >
                    <img
                      src={`${BASE_PATH}/images/ristoranti/${r.slug}-hero.jpg`}
                      alt={r.nome}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <p className="font-display text-lg text-gold-bright">{r.nome}</p>
                      <p className="text-xs text-cream/60">{r.citta[locale]}</p>
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
