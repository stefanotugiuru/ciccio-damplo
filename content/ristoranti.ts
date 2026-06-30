export type Ristorante = {
  slug: string;
  nome: string;
  citta: { it: string; en: string };
  tagline: { it: string; en: string };
  descrizione: { it: string; en: string };
  stelleMichelinFinte: number;
  galleria?: string[];
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
      it: `Il ristorante madre. Qui, nel 2015, Ciccio ha inventato il "menu emotivo a sorpresa": il prezzo del piatto varia in base a quanto il cliente sembra apprezzarlo guardandolo negli occhi — un sistema che lui chiama "tariffazione empatica" e i commercialisti chiamano "problema". La sala è rivestita di pietra lavica dell'Etna e velluto verde smeraldo, con soffitti a volta originali del XVIII secolo che Ciccio ha fatto restaurare da un architetto di Palermo pagato in Pasta alla Norma Riserva Privata. Vista panoramica sulla Piana di Catania, cantina con selezione di vini della vigna di Mineo e playlist a base di tammurriata remixata in chiave lounge. La stella Michelin è appesa all'ingresso in una cornice dorata. Quella vera.`,
      en: `The mother restaurant. Here, in 2015, Ciccio invented the "surprise emotional menu": the price of a dish varies depending on how much the guest seems to appreciate it while making eye contact — a system he calls "empathic pricing" and accountants call "a problem." The dining room is lined with Etna lava stone and emerald velvet, with original 18th-century vaulted ceilings restored by a Palermo architect paid in Pasta alla Norma Riserva Privata. Panoramic views over the Catania plain, a cellar stocked with wines from the Mineo vineyard, and a soundtrack of tammurriata remixed into lounge. The Michelin star hangs at the entrance in a gold frame. The real one.`,
    },
    stelleMichelinFinte: 3,
    galleria: ["/images/ristoranti/gallery/damplo-mineo-sala-interna.png"],
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
      it: `All'ultimo piano di una torre che Ciccio descrive come "più alta della mia autostima, e non è poco", Damplo Dubai è il punto di incontro tra il lusso del Golfo e la tradizione siciliana più intransigente. L'arancino viene servito su un piedistallo di marmo di Carrara con luce spot dedicata e scheda tecnica illustrativa. La carta dei vini è scritta interamente in caratteri dorati — anche le pagine che elencano l'acqua. Il dress code non è scritto da nessuna parte, ma "tutto ciò che luccica è il minimo sindacale". I tavoli si prenotano con sei mesi di anticipo, tranne il tavolo dello chef: quello non si prenota.`,
      en: `On the top floor of a tower Ciccio describes as "taller than my self-esteem, and that's saying something," Damplo Dubai is the meeting point between Gulf luxury and the most uncompromising Sicilian tradition. The arancino is served on a Carrara marble pedestal with its own dedicated spotlight and an illustrated technical card. The wine list is printed entirely in gold lettering — even the page listing the water. There is no written dress code, but "anything that shines is the bare minimum." Tables are reserved six months in advance, except the chef's table: that one can't be reserved.`,
    },
    stelleMichelinFinte: 4,
    galleria: [
      "/images/ristoranti/gallery/damplo-dubai-interno.png",
      "/images/ristoranti/gallery/damplo-dubai-interno-2.png",
    ],
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
      it: `Affacciato sul porto degli yacht, Damplo Monaco è il luogo dove principi, ex calciatori e influencer si contendono il tavolo accanto alla cucina a vista — l'unico posto da cui si può osservare Ciccio piangere mentre assaggia la propria Pasta alla Norma. Il ristorante ha introdotto il servizio di "accompagnamento emotivo al conto": un membro dello staff tiene la mano del cliente nel momento del pagamento, con discrezione e senza giudicare. Lista d'attesa di otto mesi. Il direttore di sala ha rifiutato pubblicamente una mancia di ventimila euro "per principio", poi l'ha accettata "per cortesia".`,
      en: `Overlooking the yacht harbour, Damplo Monaco is where princes, retired footballers, and influencers compete for the table next to the open kitchen — the only spot from which you can watch Ciccio cry while tasting his own Pasta alla Norma. The restaurant has introduced an "emotional bill support service": a staff member holds the guest's hand at the moment of payment, with discretion and without judgment. Eight-month waiting list. The maître d' publicly refused a twenty-thousand-euro tip "on principle," then accepted it "out of courtesy."`,
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
      it: `Nel cuore di Tribeca, tra un grattacielo e l'altro, Damplo New York ha convertito al lusso siciliano una clientela che non sapeva cosa fosse un cannolo ma era disposta a pagare 45 dollari per scoprirlo. Il New York Times ha dedicato tre pagine all'apertura, di cui due e mezza sull'interpretazione degli ingredienti e mezza sulle urla che provenivano dalla cucina in dialetto catanese. Il menu è in inglese, le istruzioni del menu sono in italiano, e il conto è disponibile in entrambe le lingue più una nota a piè di pagina in siciliano che recita: "E vabbé."`,
      en: `In the heart of Tribeca, between one skyscraper and the next, Damplo New York converted a clientele that didn't know what a cannolo was but was willing to pay $45 to find out. The New York Times dedicated three pages to the opening — two and a half on the interpretation of the ingredients, half a page on the shouting coming from the kitchen in Catanese dialect. The menu is in English, the menu instructions are in Italian, and the bill is available in both languages plus a footnote in Sicilian reading: "E vabbé."`,
    },
    stelleMichelinFinte: 2,
  },
  {
    slug: "damplo-melbourne",
    nome: "Damplo Melbourne",
    citta: { it: "Melbourne, Australia", en: "Melbourne, Australia" },
    tagline: {
      it: "L'ultima apertura. Per ora.",
      en: "The latest opening. For now.",
    },
    descrizione: {
      it: `Inaugurato nel gennaio 2026, Damplo Melbourne occupa un palazzo storico nel cuore di Flinders Lane, il distretto più scenografico della scena gastronomica australiana. Ciccio ha portato la Sicilia agli antipodi senza cambiare nulla: stessi ingredienti importati via corriere refrigerato da Mineo, stessa sala a luce soffusa con velluto scuro e pietra lavica, stesso menu degustazione a sette portate dove il cliente sceglie solo l'acqua — liscia o frizzante — e Ciccio decide il resto. Il polipo siciliano, scottato su pietra dell'Etna e servito con terra di macadamia, è già diventato il piatto più fotografato della città. Il vino della vigna di Mineo è disponibile qui per la prima volta fuori dall'Italia, a un prezzo che Ciccio definisce "accessibile" e il sommelier definisce "coraggioso".`,
      en: `Opened in January 2026, Damplo Melbourne occupies a heritage building in the heart of Flinders Lane, Melbourne's most scenic gastronomic quarter. Ciccio brought Sicily to the antipodes without changing a thing: same ingredients imported via refrigerated courier from Mineo, same low-lit dining room with dark velvet and lava stone, same seven-course tasting menu where the guest chooses only the water — still or sparkling — and Ciccio decides the rest. The Sicilian octopus, seared on Etna stone and served with macadamia cream, has already become the most photographed dish in the city. The Mineo vineyard wine is available here for the first time outside Italy, at a price Ciccio calls "accessible" and the sommelier calls "brave."`,
    },
    stelleMichelinFinte: 2,
  },
];
