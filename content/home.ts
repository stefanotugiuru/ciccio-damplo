export const home = {
  it: {
    // Hero
    heading: "Francesco D'Amplo",
    subheading: "Chef. Visionario. Maommeno.",
    stats: "10 ristoranti · 5 continenti · 12 stelle Michelin",
    // Bio teaser
    bioLabel: "Chi è Ciccio",
    bioTeaser:
      "Nato a Mineo nel 1995, Francesco D'Amplo ha trasformato la cucina siciliana in un impero gastronomico che attraversa cinque continenti. Piange ogni volta che assaggia la propria Pasta alla Norma. Lo chiama «controllo qualità».",
    bioCta: "Leggi la biografia",
    // Sections
    ristorantiLabel: "I Ristoranti",
    ristorantiCta: "Scopri i ristoranti",
    piattiLabel: "I Piatti Iconici",
    piattiCta: "Vedi il menu completo",
    pressLabel: "Dicono di Lui",
    galleriaLabel: "Ciccio nel Mondo",
    galleriaCta: "Vedi la galleria",
    premiLabel: "Riconoscimenti",
    premiCta: "Tutti i premi",
    // Intro / quote
    intro:
      "Quattro ristoranti. Tre continenti. Dodici stelle Michelin, autoassegnate con piena convinzione. Ciccio non ha bisogno della vostra approvazione. Ma è contento di averla.",
    quote:
      `"La cucina siciliana non si cucina. Si dirige, come un film." — Francesco D'Amplo`,
  },
  en: {
    // Hero
    heading: "Francesco D'Amplo",
    subheading: "Chef. Visionary. Maommeno.",
    stats: "10 restaurants · 5 continents · 12 Michelin stars",
    // Bio teaser
    bioLabel: "Who Is Ciccio",
    bioTeaser:
      "Born in Mineo in 1995, Francesco D'Amplo turned Sicilian cuisine into a gastronomic empire spanning five continents. He cries every time he tastes his own Pasta alla Norma. He calls it «quality control».",
    bioCta: "Read the biography",
    // Sections
    ristorantiLabel: "The Restaurants",
    ristorantiCta: "Explore the restaurants",
    piattiLabel: "Iconic Dishes",
    piattiCta: "See the full menu",
    pressLabel: "What They Say",
    galleriaLabel: "Ciccio Around the World",
    galleriaCta: "See the gallery",
    premiLabel: "Awards & Recognition",
    premiCta: "All awards",
    // Intro / quote
    intro:
      "Four restaurants. Three continents. Twelve Michelin stars, self-awarded with full conviction. Ciccio doesn't need your approval. But he's glad to have it.",
    quote:
      `"Sicilian cuisine isn't cooked. It's directed, like a film." — Francesco D'Amplo`,
  },
} as const;

export const homePressQuotes = [
  {
    it: `"Il lusso non è il prezzo. È la sofferenza che metti nel piatto. E anche un po' il prezzo."`,
    en: `"Luxury isn't the price. It's the suffering you put into the dish. And also, a bit, the price."`,
    testata: "Sicilian Luxury Digest",
  },
  {
    it: `"L'arancino non ha prezzo. Ma se proprio insistete, trecento euro."`,
    en: `"The arancino has no price. But if you really insist, three hundred euros."`,
    testata: "Arancino Business Review",
  },
  {
    it: `"Non sono mai andato via da Mineo. Mineo è venuta con me."`,
    en: `"I never really left Mineo. Mineo came with me."`,
    testata: "The Mineo Times",
  },
] as const;

export const homeGalleriaTeaser = [
  { file: "/images/galleria/ciccio-col-papa.png", alt: { it: "Ciccio con il Papa", en: "Ciccio with the Pope" } },
  { file: "/images/galleria/ciccio-con-messi-e-cr7.png", alt: { it: "Ciccio con Messi e CR7", en: "Ciccio with Messi and CR7" } },
  { file: "/images/galleria/ciccio-con-gordon-ramsey.png", alt: { it: "Ciccio con Gordon Ramsay", en: "Ciccio with Gordon Ramsay" } },
  { file: "/images/galleria/trump-e-ciccio.png", alt: { it: "Ciccio con Trump", en: "Ciccio with Trump" } },
  { file: "/images/galleria/ciccio-con-megan-fox.png", alt: { it: "Ciccio con Megan Fox", en: "Ciccio with Megan Fox" } },
  { file: "/images/galleria/ciccio-e-dalailama.png", alt: { it: "Ciccio con il Dalai Lama", en: "Ciccio with the Dalai Lama" } },
] as const;
