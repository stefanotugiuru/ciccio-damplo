import { ristoranti } from "@/content/ristoranti";

export function getRistoranteBySlug(slug: string) {
  return ristoranti.find((ristorante) => ristorante.slug === slug);
}
