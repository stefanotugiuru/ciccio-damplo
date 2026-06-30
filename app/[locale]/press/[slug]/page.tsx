import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { press } from "@/content/press";
import RevealOnScroll from "@/components/RevealOnScroll";

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

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <RevealOnScroll>
        <p className="font-display text-sm italic text-gold">
          {articolo.testata} — {formatDate(articolo.data, locale)}
        </p>
        <h1 className="mt-2 font-display text-3xl uppercase tracking-wide text-gold-bright md:text-4xl">
          {articolo.titolo[locale]}
        </h1>
      </RevealOnScroll>
      <div className="mt-8 rounded-bezel border border-white/10 bg-white/5 p-1.5">
        <img
          src={`/images/press/${articolo.slug}.jpg`}
          alt={
            locale === "it"
              ? `Copertina di ${articolo.testata}`
              : `Cover image of ${articolo.testata}`
          }
          className="aspect-[3/2] w-full rounded-[calc(2rem-0.375rem)] object-cover"
        />
      </div>
      {articolo.corpo[locale].map((paragraph, index) => (
        <RevealOnScroll key={index} delay={Math.min(index * 0.1, 0.3)}>
          <p className="mt-6 text-lg text-cream/90">{paragraph}</p>
        </RevealOnScroll>
      ))}
    </article>
  );
}
