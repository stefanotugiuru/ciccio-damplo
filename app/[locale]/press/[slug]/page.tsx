import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { press } from "@/content/press";
import RevealOnScroll from "@/components/RevealOnScroll";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const articolo = press.find((item) => item.slug === slug);
  return buildMetadata({
    locale,
    path: `/press/${slug}`,
    title: articolo ? `${articolo.titolo[locale]} — Ciccio Damplo` : "Ciccio Damplo",
  });
}

export function generateStaticParams() {
  return press.map((articolo) => ({ slug: articolo.slug }));
}

function formatDate(isoDate: string, locale: "it" | "en") {
  return new Intl.DateTimeFormat(locale === "it" ? "it-IT" : "en-US", { dateStyle: "long" }).format(
    new Date(isoDate)
  );
}

export default async function PressDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const articolo = press.find((item) => item.slug === slug);
  if (!articolo) {
    notFound();
  }

  const altriArticoli = press.filter((a) => a.slug !== articolo.slug);

  return (
    <div>
      {/* ── Hero cover ── */}
      <section
        className="relative flex min-h-[50dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-16 md:px-16"
        style={{
          backgroundImage: `url('/images/press/${articolo.slug}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">
              {articolo.testata} — {formatDate(articolo.data, locale)}
            </p>
            <h1 className="font-display text-3xl uppercase tracking-wide text-gold-bright md:text-5xl">
              {articolo.titolo[locale]}
            </h1>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── Corpo articolo ── */}
      <article className="mx-auto max-w-3xl px-6 py-20 md:px-8">
        {/* Estratto in evidenza */}
        <RevealOnScroll>
          <p className="font-display text-xl italic leading-relaxed text-gold-bright">
            {articolo.estratto[locale]}
          </p>
        </RevealOnScroll>

        <hr className="my-10 border-white/10" />

        {articolo.corpo[locale].map((paragraph, index) => (
          <RevealOnScroll key={index} delay={Math.min(index * 0.1, 0.3)}>
            <p className="mt-8 text-lg leading-relaxed text-cream/90 first:mt-0">
              {paragraph}
            </p>
          </RevealOnScroll>
        ))}
      </article>

      {/* ── Altri articoli ── */}
      <section className="border-t border-white/10 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 font-display text-2xl uppercase tracking-wide text-cream">
            {locale === "it" ? "Leggi Anche" : "Read Also"}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {altriArticoli.map((a, index) => (
              <RevealOnScroll key={a.slug} delay={index * 0.07}>
                <a
                  href={`/${locale}/press/${a.slug}/`}
                  className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 transition-colors hover:border-gold/30"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`/images/press/${a.slug}.jpg`}
                      alt={a.testata}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-xs text-cream/70 backdrop-blur-sm">
                      {a.testata}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="font-display text-sm text-gold-bright">{a.titolo[locale]}</p>
                    <p className="mt-1 text-xs text-cream/40">{a.data}</p>
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
