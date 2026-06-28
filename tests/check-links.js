const assert = require("assert");
const ristoranti = require("../src/_data/ristoranti.json");
const piatti = require("../src/_data/piatti.json");
const press = require("../src/_data/press.json");

function assertUniqueSlugs(items, label) {
  const seen = new Set();
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
