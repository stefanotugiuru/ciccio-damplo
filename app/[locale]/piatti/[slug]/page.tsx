import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/routing";
import { piatti } from "@/content/piatti";
import { getRistoranteBySlug } from "@/lib/ristorante-lookup";
import { Link } from "@/i18n/navigation";
import RevealOnScroll from "@/components/RevealOnScroll";

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

  return (
    <div>
      <section
        className="relative flex min-h-[50dvh] items-end overflow-hidden rounded-b-bezel px-6 pb-12"
        style={{
          backgroundImage: `url('/images/piatti/${piatto.slug}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <RevealOnScroll>
          <div className="relative z-10">
            <h1 className="font-display text-3xl uppercase tracking-wide text-gold-bright md:text-4xl">
              {piatto.nome}
            </h1>
            <p className="mt-2 font-display italic text-cream/90">{piatto.sottotitoloIronico[locale]}</p>
          </div>
        </RevealOnScroll>
      </section>
      <RevealOnScroll>
        <section className="mx-auto max-w-3xl px-6 py-16">
          <p className="text-lg text-cream/90">{piatto.descrizione[locale]}</p>
          <p className="mt-6 font-display text-xl text-gold-bright">{piatto.prezzoAssurdo[locale]}</p>
          {ristorante && (
            <p className="mt-6 text-cream/80">
              {locale === "it" ? "Disponibile presso " : "Available at "}
              <Link href={`/ristoranti/${ristorante.slug}`} className="text-gold underline">
                {ristorante.nome}
              </Link>
            </p>
          )}
        </section>
      </RevealOnScroll>
    </div>
  );
}
