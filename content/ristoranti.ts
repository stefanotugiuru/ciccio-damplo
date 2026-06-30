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
  {
    slug: "damplo-roma",
    nome: "Damplo Roma",
    citta: { it: "Roma, Italia", en: "Rome, Italy" },
    tagline: {
      it: "L'Impero Romano è finito. Damplo Roma è appena iniziato.",
      en: "The Roman Empire ended. Damplo Roma has just begun.",
    },
    descrizione: {
      it: `Aperto nel 2018 nel cuore del rione Parioli, Damplo Roma porta la cucina siciliana nella capitale con la stessa discrezione con cui Giulio Cesare entrava al Senato. La sala è ricavata in un palazzo ottocentesco con soffitti affrescati che Ciccio ha fatto restaurare da un artista palermitano convinto di stare lavorando per un museo. Il menu degustazione — otto portate, nessuna scelta consentita tranne il ritmo della masticazione — include le Canapé delle Sette Colline e le Costolette Braisate alla Maniera Imperiale. La lista d'attesa è di quattro mesi, ma è possibile scalarla presentando un riferimento di qualità. Il garzone del bar all'angolo non vale.`,
      en: `Opened in 2018 in the heart of the Parioli district, Damplo Roma brings Sicilian cuisine to the capital with less discretion than Julius Caesar and more style than anyone since. The dining room is carved from a 19th-century palazzo with frescoed ceilings, restored by a Palermo artist who believed he was working for a museum — the bill has not been disclosed. The tasting menu — eight courses, no choice permitted except the pace of chewing — includes the Seven Hills Canapé and the Imperial-style Braised Short Ribs. The waiting list is four months, but it can be shortened by presenting a quality reference. The barman at the corner does not qualify.`,
    },
    stelleMichelinFinte: 2,
  },
  {
    slug: "damplo-milano",
    nome: "Damplo Milano",
    citta: { it: "Milano, Italia", en: "Milan, Italy" },
    tagline: {
      it: "La moda cambia ogni stagione. Il risotto di Ciccio mai.",
      en: "Fashion changes every season. Ciccio's risotto never does.",
    },
    descrizione: {
      it: `Aperto nel 2019 in via della Spiga, Damplo Milano è il ristorante dove il jet set della moda si ferma tra una sfilata e l'altra a piangere davanti a un risotto. L'arredamento è stato affidato a un designer che ha firmato la collezione con un cognome impronunciabile — il conto è stato saldato in tre porzioni di Pasta alla Norma Riserva Privata, che lui descrive come "il pagamento più soddisfacente della mia carriera". Il risotto è disponibile in due interpretazioni: con tartufo bianco d'Alba e con tartufo nero del Périgord. Ciccio chiama la seconda "la versione per chi non sa ancora cosa vuole". È il piatto più ordinato. Ciccio è stato invitato alla Fashion Week. Ha rifiutato: "la moda passa, il risotto resta."`,
      en: `Opened in 2019 on Via della Spiga, Damplo Milano is the restaurant where the fashion jet set stops between shows to cry over a risotto. The interior was designed by a designer who signed the project with an unpronounceable surname — the bill was settled in three portions of Pasta alla Norma Riserva Privata, which he describes as "the most satisfying payment of my career." The risotto comes in two interpretations: with Alba white truffle, and with Périgord black truffle — the latter Ciccio calls "the version for people who don't yet know what they want." It is the most ordered dish. Ciccio was invited to Fashion Week. He declined: "fashion fades, risotto endures."`,
    },
    stelleMichelinFinte: 2,
  },
  {
    slug: "damplo-barcelona",
    nome: "Damplo Barcelona",
    citta: { it: "Barcellona, Spagna", en: "Barcelona, Spain" },
    tagline: {
      it: "La Sicilia sbarca in Catalogna. Il dibattito è aperto.",
      en: "Sicily lands in Catalonia. The debate is open.",
    },
    descrizione: {
      it: `Aperto nel 2022 nel Barrio Gótico, Damplo Barcelona occupa un edificio modernista che Ciccio descrive come "Gaudí, ma con più arancino". La carta unisce la tradizione siciliana con ingredienti locali in modo che lui chiama "fusione rispettosa" e i catalani chiamano "coraggio". Il pulpo alla catalana con terra di paprika affumicata è diventato il simbolo del ristorante — e l'oggetto di un acceso dibattito tra i pescatori siciliani e quelli galiziani sul quale paese abbia il polpo migliore. Ciccio ha dichiarato di non prendere posizione e di servire entrambi, a seconda della stagione emotiva.`,
      en: `Opened in 2022 in the Barrio Gótico, Damplo Barcelona occupies a Modernista building that Ciccio describes as "Gaudí, but with more arancino." The menu combines Sicilian tradition with local ingredients in what he calls "respectful fusion" and the Catalans call "courage." The Catalan-style pulpo with smoked paprika soil has become the restaurant's symbol — and the subject of a heated debate between Sicilian and Galician fishermen over whose octopus is superior. Ciccio has declared he takes no position and serves both, depending on the emotional season.`,
    },
    stelleMichelinFinte: 2,
  },
  {
    slug: "damplo-parigi",
    nome: "Damplo Parigi",
    citta: { it: "Parigi, Francia", en: "Paris, France" },
    tagline: {
      it: "La risposta educata della Sicilia alla cucina francese.",
      en: "Sicily's polite response to French cuisine.",
    },
    descrizione: {
      it: `Aperto nel 2022 nel 8ème arrondissement, Damplo Parigi è il ristorante che i critici francesi hanno definito "insolente", "provocatorio" e "stranamente buono". La sala occupa un hôtel particulier del XVII secolo — Ciccio ha tenuto tutto l'originale, aggiungendo solo le luci di pietra lavica e una playlist di cantautori siciliani che i parigini non riconoscono ma apprezzano. L'anatra all'agrume viene servita con erbe siciliane importate settimanalmente. Le lumache all'erbe sono disponibili su richiesta, accompagnate da una nota del cuoco che spiega perché la ricetta siciliana sia superiore a quella provenzale. La nota è di tre pagine.`,
      en: `Opened in 2022 in the 8th arrondissement, Damplo Parigi is the restaurant that French critics described as "insolent," "provocative," and "strangely good." The dining room occupies a 17th-century hôtel particulier — Ciccio kept everything original, adding only lava stone lighting and a playlist of Sicilian singer-songwriters that Parisians don't recognize but appreciate. The citrus duck is served with Sicilian herbs imported weekly. The herb escargot is available on request, accompanied by a note from the chef explaining why the Sicilian recipe is superior to the Provençal one. The note is three pages long.`,
    },
    stelleMichelinFinte: 3,
  },
  {
    slug: "damplo-tokyo",
    nome: "Damplo Tokyo",
    citta: { it: "Tokyo, Giappone", en: "Tokyo, Japan" },
    tagline: {
      it: "Dove il cannolo incontra il wagashi. Nessuno dei due ha chiesto permesso.",
      en: "Where the cannolo meets wagashi. Neither asked permission.",
    },
    descrizione: {
      it: `Aperto nel 2024 nel distretto di Ginza, Damplo Tokyo è l'incontro meno probabile della storia gastronomica moderna: la Sicilia e il Giappone, riunite da Ciccio in uno spazio di novanta coperti dove il silenzio è parte del menu. Il sushi non è in carta. La pasta fresca con uova di pesce e salsa di soia siciliana — per quanto possa sembrare un ossimoro — è diventata il piatto più discusso dell'anno. La Guida Michelin Giappone ha assegnato due stelle, annunciate con un comunicato che citava "incomprensibile eppure perfetto". Ciccio ha fatto incorniciare la recensione. È appesa tra la stella di Mineo e quella di Roma. Nessuna delle tre è stata chiesta.`,
      en: `Opened in 2024 in the Ginza district, Damplo Tokyo is the most improbable meeting in modern gastronomic history: Sicily and Japan, united by Ciccio in a ninety-cover space where silence is part of the menu. Sushi is not on the menu. The fresh pasta with fish roe and Sicilian soy sauce — as oxymoronic as it sounds — has become the most discussed dish of the year. The Michelin Guide Japan awarded two stars, announced with a press release citing "incomprehensible yet perfect." Ciccio had the review framed. It hangs between the Mineo star and the Rome one. None of the three were requested.`,
    },
    stelleMichelinFinte: 2,
  },
];
