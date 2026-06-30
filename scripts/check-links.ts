import assert from "node:assert";
import { ristoranti } from "../content/ristoranti";
import { piatti } from "../content/piatti";
import { press } from "../content/press";

function assertUniqueSlugs(items: { slug: string }[], label: string) {
  const seen = new Set<string>();
  for (const item of items) {
    assert(!seen.has(item.slug), `Duplicate slug "${item.slug}" in ${label}`);
    seen.add(item.slug);
  }
}

assertUniqueSlugs(ristoranti, "ristoranti");
assertUniqueSlugs(piatti, "piatti");
assertUniqueSlugs(press, "press");

const ristorantiSlugs = new Set(ristoranti.map((r) => r.slug));
for (const piatto of piatti) {
  assert(
    ristorantiSlugs.has(piatto.ristoranteOrigine),
    `Piatto "${piatto.slug}" references missing ristorante slug "${piatto.ristoranteOrigine}"`
  );
}

console.log("check-links: OK");
