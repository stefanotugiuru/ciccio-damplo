import { notFound } from "@/content/notFound";
import { BASE_PATH } from "@/lib/basePath";

const locales = ["it", "en"] as const;

export default function RootNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 px-6 py-24 text-center">
      {locales.map((locale) => {
        const content = notFound[locale];
        return (
          <div key={locale}>
            <h1 className="font-display text-2xl italic text-gold-bright">{content.title}</h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-cream/80">{content.message}</p>
            <a
              href={`${BASE_PATH}/${locale}/`}
              className="mt-6 inline-block rounded-full bg-gold/10 px-6 py-3 text-sm text-gold-bright"
            >
              {content.cta}
            </a>
          </div>
        );
      })}
    </div>
  );
}
