export type Ristorante = {
  slug: string;
  nome: string;
  citta: { it: string; en: string };
  tagline: { it: string; en: string };
  descrizione: { it: string; en: string };
  stelleMichelinFinte: number;
};

export const ristoranti: Ristorante[] = [
  {
    slug: "damplo-mineo",
    nome: "Damplo Mineo",
    citta: { it: "Mineo, Sicilia", en: "Mineo, Sicily" },
    tagline: {
      it: "Dove tutto è iniziato, tra un ulivo e un certificato di laurea mai ritirato.",
      en: "Where it all began, between an olive tree and a diploma he never picked up.",
    },
    descrizione: {
      it: "Il ristorante madre. Qui Ciccio ha inventato il concetto di “menu emotivo a sorpresa”, dove il prezzo del piatto varia in base a quanto il cliente sembra apprezzarlo guardandolo negli occhi. Vista panoramica sulla Piana di Catania, arredamento in pietra lavica e velluto verde smeraldo, playlist a base di tammurriata remixata in chiave lounge.",
      en: "The mother restaurant. Here Ciccio invented the concept of the “surprise emotional menu,” where the price of a dish varies depending on how much the guest seems to appreciate it while making eye contact. Panoramic views of the Catania plain, lava-stone and emerald velvet interiors, a soundtrack of tammurriata remixed into lounge music.",
    },
    stelleMichelinFinte: 3,
  },
  {
    slug: "damplo-dubai",
    nome: "Damplo Dubai",
    citta: { it: "Dubai, Emirati Arabi Uniti", en: "Dubai, UAE" },
    tagline: {
      it: "La Sicilia, ma con l'oro vero.",
      en: "Sicily, but with real gold.",
    },
    descrizione: {
      it: "All'ultimo piano di una torre che Ciccio descrive come “più alta della mia autostima, e non è poco”. Qui l'arancino viene servito su un piedistallo di marmo con tanto di luce spot dedicata. La carta dei vini è scritta interamente in caratteri dorati, anche le pagine che elencano l'acqua.",
      en: "On the top floor of a tower Ciccio describes as “taller than my self-esteem, and that's saying something.” Here the arancino is served on a marble pedestal under its own dedicated spotlight. The wine list is printed entirely in gold lettering — even the page listing the water.",
    },
    stelleMichelinFinte: 4,
  },
  {
    slug: "damplo-monaco",
    nome: "Damplo Monaco",
    citta: { it: "Monte-Carlo, Monaco", en: "Monte-Carlo, Monaco" },
    tagline: {
      it: "Per chi ha già tutto, tranne un buon arancino.",
      en: "For those who have everything, except a good arancino.",
    },
    descrizione: {
      it: "Affacciato sul porto degli yacht, Damplo Monaco è il luogo dove principi, ex calciatori e influencer si contendono il tavolo accanto alla cucina a vista, l'unico posto dove si può guardare Ciccio piangere mentre assaggia la propria Pasta alla Norma.",
      en: "Overlooking the yacht harbor, Damplo Monaco is where princes, retired footballers, and influencers fight over the table next to the open kitchen — the only seat from which you can watch Ciccio cry while tasting his own Pasta alla Norma.",
    },
    stelleMichelinFinte: 3,
  },
  {
    slug: "damplo-new-york",
    nome: "Damplo New York",
    citta: { it: "New York, Stati Uniti", en: "New York, USA" },
    tagline: {
      it: "L'arancino conquista Manhattan. Manhattan si arrende.",
      en: "The arancino conquers Manhattan. Manhattan surrenders.",
    },
    descrizione: {
      it: "Nel cuore di Manhattan, tra un grattacielo e un altro, Damplo New York porta il lusso siciliano a chi non sa ancora cosa sia un cannolo ma è disposto a pagare 45 dollari per scoprirlo. Menu in inglese, urla in siciliano, conto in entrambe le lingue.",
      en: "In the heart of Manhattan, between one skyscraper and the next, Damplo New York brings Sicilian luxury to those who don't yet know what a cannolo is but are willing to pay $45 to find out. Menu in English, shouting in Sicilian, the bill in both languages.",
    },
    stelleMichelinFinte: 2,
  },
];
