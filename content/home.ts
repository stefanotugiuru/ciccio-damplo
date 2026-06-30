export const home = {
  it: {
    // Hero
    heading: "Francesco D'Amplo",
    subheading: "Chef, visionario, imprenditore del lusso siciliano.",
    stats: "4 ristoranti · 3 continenti · 12 stelle (autoassegnate)",
    // Bio teaser
    bioLabel: "Chi è Ciccio",
    bioTeaser:
      "Nato a Mineo nel 1984, Francesco D'Amplo ha trasformato un arancino in un impero gastronomico che attraversa tre continenti. Piange ogni volta che assaggia la propria Pasta alla Norma. Lo chiama «controllo qualità».",
    bioCta: "Leggi la biografia completa",
    // Sections
    ristorantiLabel: "I Ristoranti",
    ristorantiCta: "Vedi tutti i ristoranti",
    piattiLabel: "I Piatti Iconici",
    piattiCta: "Vedi tutti i piatti",
    pressLabel: "Dicono di Lui",
    galleriaLabel: "Ciccio nel Mondo",
    galleriaCta: "Vedi la galleria completa",
    premiLabel: "Riconoscimenti",
    premiCta: "Vedi tutti i premi",
    // Intro / quote (homepage mini-section)
    intro:
      "Quattro ristoranti, tre continenti, e un numero di stelle Michelin che lui stesso ha perso il conto. Benvenuti nel mondo di Ciccio Damplo.",
    quote:
      "“La cucina siciliana non si cucina. Si dirige, come un film.” — Francesco D’Amplo",
  },
  en: {
    // Hero
    heading: "Francesco D'Amplo",
    subheading: "Chef, visionary, Sicilian luxury entrepreneur.",
    stats: "4 restaurants · 3 continents · 12 stars (self-awarded)",
    // Bio teaser
    bioLabel: "Who Is Ciccio",
    bioTeaser:
      "Born in Mineo in 1984, Francesco D'Amplo turned an arancino into a gastronomic empire spanning three continents. He cries every time he tastes his own Pasta alla Norma. He calls it «quality control».",
    bioCta: "Read the full biography",
    // Sections
    ristorantiLabel: "The Restaurants",
    ristorantiCta: "See all restaurants",
    piattiLabel: "Iconic Dishes",
    piattiCta: "See all dishes",
    pressLabel: "What They Say",
    galleriaLabel: "Ciccio Around the World",
    galleriaCta: "See the full gallery",
    premiLabel: "Awards & Recognition",
    premiCta: "See all awards",
    // Intro / quote
    intro:
      "Four restaurants, three continents, and a number of Michelin stars even he has lost count of. Welcome to the world of Ciccio Damplo.",
    quote:
      "“Sicilian cuisine isn’t cooked. It’s directed, like a film.” — Francesco D’Amplo",
  },
} as const;

export const homePressQuotes = [
  {
    it: `"Non sono mai andato via da Mineo. Mineo è venuta con me. In ogni arancino che servo, c'è un pezzo della Piana di Catania."`,
    en: `"I never really left Mineo. Mineo came with me. In every arancino I serve, there's a piece of the Catania plain."`,
    testata: "The Mineo Times",
  },
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
] as const;

export const homeGalleriaTeaser = [
  { file: "/images/galleria/ciccio-col-papa.png", alt: { it: "Ciccio con il Papa", en: "Ciccio with the Pope" } },
  { file: "/images/galleria/ciccio-con-messi-e-cr7.png", alt: { it: "Ciccio con Messi e CR7", en: "Ciccio with Messi and CR7" } },
  { file: "/images/galleria/ciccio-con-gordon-ramsey.png", alt: { it: "Ciccio con Gordon Ramsay", en: "Ciccio with Gordon Ramsay" } },
  { file: "/images/galleria/trump-e-ciccio.png", alt: { it: "Ciccio con Trump", en: "Ciccio with Trump" } },
  { file: "/images/galleria/ciccio-con-megan-fox.png", alt: { it: "Ciccio con Megan Fox", en: "Ciccio with Megan Fox" } },
  { file: "/images/galleria/ciccio-e-dalailama.png", alt: { it: "Ciccio con il Dalai Lama", en: "Ciccio with the Dalai Lama" } },
] as const;
