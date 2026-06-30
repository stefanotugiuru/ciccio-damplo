export type ArticoloPress = {
  slug: string;
  testata: string;
  titolo: { it: string; en: string };
  estratto: { it: string; en: string };
  data: string;
  corpo: { it: string[]; en: string[] };
};

export const press: ArticoloPress[] = [
  {
    slug: "the-mineo-times-il-figlio-di-mineo",
    testata: "The Mineo Times",
    titolo: {
      it: "Il Figlio di Mineo Conquista il Mondo (e Anche Dubai)",
      en: "Mineo's Son Conquers the World (and Also Dubai)",
    },
    estratto: {
      it: "Dalla cucina di una nonna a dieci ristoranti su cinque continenti: la storia di Francesco D'Amplo è la prova che, a Mineo, i sogni si fanno in pentola.",
      en: "From a grandmother's kitchen to ten restaurants across five continents: Francesco D'Amplo's story proves that in Mineo, dreams are made in a pot.",
    },
    data: "2023-04-12",
    corpo: {
      it: [
        `Quando Francesco D'Amplo lasciò Mineo nel 2008 con una valigia e una ricetta di caponata "rivista", nessuno avrebbe immaginato che quindici anni dopo il suo nome sarebbe apparso su un grattacielo a Dubai.`,
        `"Non sono mai andato via da Mineo," ha dichiarato Ciccio durante un'intervista esclusiva concessa al nostro giornale dal sedile in pelle del suo jet privato. "Mineo è venuta con me. In ogni arancino che servo, c'è un pezzo della Piana di Catania. E anche un po' di oro, ultimamente."`,
        `Il sindaco di Mineo ha commentato: "Siamo orgogliosi di Francesco. Anche se non siamo sicurissimi di cosa faccia esattamente, ogni tanto ci manda foto di piatti che costano più della pensione di mio nonno."`,
      ],
      en: [
        `When Francesco D'Amplo left Mineo in 2008 with a suitcase and a "revised" caponata recipe, nobody could have imagined that fifteen years later his name would appear on a skyscraper in Dubai.`,
        `"I never really left Mineo," Ciccio declared in an exclusive interview granted to our newspaper from the leather seat of his private jet. "Mineo came with me. In every arancino I serve, there's a piece of the Catania plain. And lately, also a bit of gold."`,
        `The mayor of Mineo commented: "We're proud of Francesco. Although we're not entirely sure what he does exactly, every so often he sends us photos of dishes that cost more than my grandfather's pension."`,
      ],
    },
  },
  {
    slug: "sicilian-luxury-digest-il-lusso-ha-un-nuovo-accento",
    testata: "Sicilian Luxury Digest",
    titolo: {
      it: "Il Lusso Ha un Nuovo Accento (Ed È Catanese)",
      en: "Luxury Has a New Accent (And It's From Catania)",
    },
    estratto: {
      it: "Damplo Monaco si è imposto come il tavolo più richiesto della Costa Azzurra, complice un menu che fa piangere — letteralmente — anche i palati più blasonati.",
      en: "Damplo Monaco has established itself as the most sought-after table on the French Riviera, helped by a menu that makes even the most distinguished palates — literally — cry.",
    },
    data: "2023-07-02",
    corpo: {
      it: [
        `Tra i tavoli di Damplo Monaco si sono seduti principi, ex calciatori e almeno un'influencer che ha definito l'esperienza "più emozionante del suo matrimonio, ma con un servizio migliore."`,
        `Lo chef Francesco D'Amplo, intervistato mentre tagliava personalmente un cannolo con un bisturi dorato, ha spiegato la sua filosofia: "Il lusso non è il prezzo. È la sofferenza che metti nel piatto. E anche un po' il prezzo."`,
        `Damplo Monaco ha recentemente introdotto un servizio di "accompagnamento emotivo al conto", dove un membro dello staff tiene la mano del cliente nel momento del pagamento.`,
      ],
      en: [
        `Princes, retired footballers, and at least one influencer who described the experience as "more emotional than my own wedding, but with better service" have all taken a seat at Damplo Monaco.`,
        `Chef Francesco D'Amplo, interviewed while personally slicing a cannolo with a gold-plated scalpel, explained his philosophy: "Luxury isn't the price. It's the suffering you put into the dish. And also, a bit, the price."`,
        `Damplo Monaco recently introduced an "emotional bill-support service," in which a staff member holds the guest's hand at the moment of payment.`,
      ],
    },
  },
  {
    slug: "arancino-business-review-l-impero-dell-arancino",
    testata: "Arancino Business Review",
    titolo: {
      it: "L'Impero dell'Arancino: Come Ciccio D'Amplo Ha Trasformato lo Street Food in Asset di Lusso",
      en: "The Arancino Empire: How Ciccio D'Amplo Turned Street Food Into a Luxury Asset",
    },
    estratto: {
      it: "Un'analisi (non richiesta) di come un piatto da due euro sia diventato, nelle mani giuste, un piatto da centottanta.",
      en: "An (unsolicited) analysis of how a two-euro dish became, in the right hands, a hundred-and-eighty-euro one.",
    },
    data: "2023-09-18",
    corpo: {
      it: [
        `Gli analisti di mercato sono divisi: alcuni parlano di genio del rebranding, altri di "una bolla che scoppierà non appena qualcuno chiederà il conto a voce alta."`,
        `Quel che è certo è che il modello Damplo — prendere un piatto popolare, decostruirlo, illuminarlo con luce drammatica e moltiplicarne il prezzo per venti — ha generato un nuovo segmento di mercato che i nostri analisti hanno soprannominato "gastro-lusso emotivo".`,
        `Ciccio, raggiunto per un commento, ha risposto solo: "L'arancino non ha prezzo. Ma se proprio insistete, trecento euro."`,
      ],
      en: [
        `Market analysts are divided: some call it rebranding genius, others "a bubble that will pop the moment someone asks for the bill out loud."`,
        `What's certain is that the Damplo model — take a popular dish, deconstruct it, light it dramatically, and multiply the price by twenty — has created a new market segment our analysts have nicknamed "emotional gastro-luxury."`,
        `Reached for comment, Ciccio replied only: "The arancino has no price. But if you really insist, three hundred euros."`,
      ],
    },
  },
  {
    slug: "il-sole-24-arancini-mercati-in-rialzo",
    testata: "Il Sole 24 Arancini",
    titolo: {
      it: "Mercati in Rialzo: Le Azioni Damplo (Immaginarie) Toccano Nuovi Massimi",
      en: "Markets Up: (Imaginary) Damplo Shares Hit New Highs",
    },
    estratto: {
      it: `Gli indici del lusso gastronomico siciliano segnano un nuovo record, spinti dall'annuncio di un quinto ristorante Damplo "in qualche posto ancora più costoso di Monaco."`,
      en: `Sicilian gastronomic luxury indexes hit a new record, driven by the announcement of a fifth Damplo restaurant "somewhere even more expensive than Monaco."`,
    },
    data: "2023-11-30",
    corpo: {
      it: [
        `Le azioni (immaginarie) del gruppo Damplo sono salite del 340% dopo l'annuncio di Francesco D'Amplo su un quinto ristorante, la cui location resta top secret "per ragioni di sicurezza degli arancini."`,
        `Gli investitori (anche loro, per ora, immaginari) si dicono entusiasti: "Quando Ciccio dice che un piatto vale duecento euro, io ci credo. È carisma puro," ha dichiarato un analista che ha chiesto di restare anonimo per "evitare di essere invitato a cena e dover pagare."`,
        `Il Sole 24 Arancini conferma: il settore del lusso culinario siciliano non è mai stato così solido, almeno sulla carta — letteralmente, quella del menu.`,
      ],
      en: [
        `Damplo Group's (imaginary) shares rose 340% after Francesco D'Amplo announced a fifth restaurant, whose location remains top secret "for arancino security reasons."`,
        `Investors (also, for now, imaginary) say they're thrilled: "When Ciccio says a dish is worth two hundred euros, I believe him. It's pure charisma," said one analyst who asked to remain anonymous to "avoid being invited to dinner and having to pay."`,
        `Il Sole 24 Arancini confirms: the Sicilian culinary luxury sector has never been stronger — at least on paper, literally, the menu's paper.`,
      ],
    },
  },

  // ── 16 NUOVI ARTICOLI ──────────────────────────────────────────────────

  {
    slug: "new-york-times-il-genio-di-mineo",
    testata: "New York Times",
    titolo: {
      it: "Il Genio di Mineo Conquista Manhattan: Damplo New York Apre e la Critica Non Sa Cosa Dire",
      en: "The Genius from Mineo Conquers Manhattan: Damplo New York Opens and Critics Don't Know What to Say",
    },
    estratto: {
      it: "L'apertura di Damplo New York ha diviso la stampa gastronomica americana tra chi grida al capolavoro e chi grida e basta.",
      en: "The opening of Damplo New York has divided America's food press between those who call it a masterpiece and those who just call.",
    },
    data: "2023-09-15",
    corpo: {
      it: [
        `Quando Francesco D'Amplo, conosciuto negli ambienti del lusso culinario internazionale come Ciccio Damplo, ha aperto il suo undicesimo ristorante a Tribeca, i critici gastronomici di New York avevano già preparato le loro penne stilografiche. Quello che non avevano preparato era il fabbisogno emotivo necessario per sopravvivere alla serata.`,
        `Il menu degustazione di quattro ore e mezza — "Un'opera, non un pasto", come lo descrive Ciccio nel comunicato stampa di quarantasette pagine che accompagna ogni prenotazione — ha lasciato senza parole il critico del New York Times James R. Thompson, che pure ne ha scritte quattromila. "Non riesco a spiegare perché ho pianto," ha dichiarato Thompson nella sua recensione. "Non stavo piangendo. Poi stavo piangendo. Il momento esatto della transizione rimane oscuro."`,
        `Ciccio, raggiunto telefonicamente dalla nostra redazione mentre sorvolava l'Atlantico a bordo del suo jet privato, ha risposto con un laconico: "Manhattan aspettava. Io sono arrivato. È andata bene." Ha poi riattaccato per rispondere a un'altra chiamata che, secondo il suo assistente, era del Presidente della Repubblica Italiana. O forse di un fornitore di caviale. "Sono chiamate simili," ha spiegato l'assistente.`,
        `La lista d'attesa per Damplo New York ha superato i quattordici mesi nel primo giorno di prenotazioni. Ciccio ha commentato di trovare questa cifra "modesta". Quando gli è stato fatto notare che quattordici mesi è più di un anno, ha risposto: "Sì, e allora? La perfezione non ha fretta."`,
        `Il piatto che più ha diviso i critici è la Granita Affumicata al Caviale, servita a colazione come primo appuntamento con il menu: settantadue ore di macerazione, legno di carrubo importato via corriere aereo da Mineo, e una quantità di caviale che il critico Thompson ha definito "fiscalmente irresponsabile". Ciccio ha incorniciato la definizione.`,
      ],
      en: [
        `When Francesco D'Amplo, known in international culinary luxury circles as Ciccio Damplo, opened his eleventh restaurant in Tribeca, New York's food critics had already prepared their fountain pens. What they hadn't prepared was the emotional endurance required to survive the evening.`,
        `The four-and-a-half-hour tasting menu — "A work of art, not a meal," as Ciccio describes it in the forty-seven-page press release accompanying each reservation — left New York Times critic James R. Thompson speechless, though he managed four thousand words nonetheless. "I cannot explain why I cried," Thompson wrote in his review. "I wasn't crying. Then I was. The precise moment of transition remains unclear."`,
        `Ciccio, reached by phone while crossing the Atlantic on his private jet, responded with a laconic: "Manhattan was waiting. I arrived. It went well." He then hung up to answer another call which, according to his assistant, was from the President of the Italian Republic. Or possibly from a caviar supplier. "The calls are similar," the assistant explained.`,
        `The waiting list for Damplo New York exceeded fourteen months on the first day of bookings. Ciccio described this figure as "modest." When it was pointed out that fourteen months is more than a year, he replied: "Yes, and? Perfection is not in a hurry."`,
        `The dish that most divided critics is the Smoked Granita with Caviar, served at breakfast as the first encounter with the menu: seventy-two hours of maceration, carob wood imported by air courier from Mineo, and a quantity of caviar that critic Thompson described as "fiscally irresponsible." Ciccio had the description framed.`,
      ],
    },
  },

  {
    slug: "vanity-fair-lo-chef-che-fa-piangere-i-re",
    testata: "Vanity Fair",
    titolo: {
      it: "Lo Chef Che Fa Piangere i Re: Ciccio Damplo e i suoi Clienti Illustri",
      en: "The Chef Who Makes Kings Cry: Ciccio Damplo and His Illustrious Clientele",
    },
    estratto: {
      it: "Dal Papa a Messi, da Gordon Ramsay al Dalai Lama: la lista dei vip che hanno pianto nel ristorante di Ciccio Damplo è diventata uno status symbol.",
      en: "From the Pope to Messi, from Gordon Ramsay to the Dalai Lama: the list of VIPs who have cried at Ciccio Damplo's restaurant has become a status symbol.",
    },
    data: "2022-05-20",
    corpo: {
      it: [
        `C'è un nuovo indicatore di status nell'élite mondiale: non il jet privato, non il castello in Toscana, non le scarpe su misura. È aver pianto nel ristorante di Ciccio Damplo. E la lista di chi può vantare questa esperienza sta diventando rapidamente un Chi è Chi della fine del secondo millennio.`,
        `Gordon Ramsay, incontrato per questa intervista esclusiva nel suo ristorante di Londra, non si è mostrato entusiasta di parlare dell'argomento. "Ho lacrime agli occhi in questo momento solo a pensarci," ha detto, poi ha precisato: "Sono lacrime di rabbia professionale. La pasta era migliore della mia. Non lo dirò mai in pubblico." Poi ci ha chiesto di non pubblicarlo. Siamo spiacenti, Gordon.`,
        `Il Dalai Lama, secondo quanto riferito dal suo portavoce, avrebbe descritto la Granita Affumicata al Caviale come "un momento di consapevolezza superiore che non avevo previsto nel percorso spirituale verso l'illuminazione." Avrebbe poi chiesto se poteva ordinarne un'altra porzione. Gli è stato risposto che la prenotazione non prevedeva bis. Ha meditato sull'accaduto per tre giorni.`,
        `Lionel Messi e Cristiano Ronaldo, che non si siedono allo stesso tavolo dal 2016, hanno fatto un'eccezione per la cena inaugurale di Damplo Monaco. "Ci siamo parlati per la prima volta in sei anni," ha riferito una fonte vicina a entrambi. "Il quarto cannolo dell'Omakase Experience è servito da mediatore meglio di qualsiasi diplomatico."`,
        `Ciccio Damplo commenta questa lista di clienti illustri con la sua consueta sobrietà: "Non mi sorprende. La cucina siciliana tocca qualcosa di profondo nell'animo umano. Che si tratti di un Papa o di un calciatore, siamo tutti vulnerabili davanti a una buona Pasta alla Norma. Questo è il potere del cibo. Questo sono io."`,
      ],
      en: [
        `There is a new status indicator among the global elite: not the private jet, not the Tuscan castle, not the bespoke shoes. It is having cried at Ciccio Damplo's restaurant. And the list of those who can claim this experience is rapidly becoming a Who's Who of the late second millennium.`,
        `Gordon Ramsay, interviewed for this exclusive piece at his London restaurant, was not thrilled to discuss the subject. "I have tears in my eyes right now just thinking about it," he said, then clarified: "They are tears of professional rage. The pasta was better than mine. I will never say that publicly." He then asked us not to publish it. We're sorry, Gordon.`,
        `The Dalai Lama, according to his spokesperson, reportedly described the Smoked Caviar Granita as "a moment of higher consciousness I had not anticipated on the spiritual path toward enlightenment." He then reportedly asked if he could order a second portion. He was told the reservation did not include seconds. He meditated on the matter for three days.`,
        `Lionel Messi and Cristiano Ronaldo, who have not sat at the same table since 2016, made an exception for the inaugural dinner at Damplo Monaco. "We spoke for the first time in six years," a source close to both reported. "The fourth cannolo of the Omakase Experience served as a mediator better than any diplomat."`,
        `Ciccio Damplo comments on this roster of illustrious clients with his customary restraint: "It doesn't surprise me. Sicilian cuisine touches something deep in the human soul. Whether it's a Pope or a footballer, we are all vulnerable before a good Pasta alla Norma. This is the power of food. This is me."`,
      ],
    },
  },

  {
    slug: "financial-times-il-risotto-che-vale-miliardi",
    testata: "Financial Times",
    titolo: {
      it: "Il Risotto che Vale Miliardi: L'Impero Economico di Ciccio Damplo Analizzato",
      en: "The Risotto Worth Billions: The Economic Empire of Ciccio Damplo Analysed",
    },
    estratto: {
      it: "Dieci ristoranti, cinque continenti, valutazione stimata dell'azienda tra gli 800 milioni e un miliardo di euro. Il Financial Times ha cercato di capire come un arancino siciliano sia diventato un asset di lusso globale.",
      en: "Ten restaurants, five continents, estimated company valuation between €800 million and one billion euros. The Financial Times sought to understand how a Sicilian arancino became a global luxury asset.",
    },
    data: "2024-01-10",
    corpo: {
      it: [
        `Il fenomeno Damplo, analizzato dalla prospettiva dei mercati finanziari, è quello che gli analisti tendono a chiamare "improbabile ma reale." Un ristorante fondato nel 2015 a Mineo, centro di duemila abitanti nella provincia di Catania, che in meno di un decennio ha generato un gruppo con dieci location su cinque continenti e una valutazione che i nostri analisti stimano tra gli 800 milioni e il miliardo di euro.`,
        `Il modello di business di Ciccio Damplo sfida le convenzioni del settore. Nessuna franchising, nessun investitore esterno, nessuna quotazione in borsa nonostante le ripetute pressioni da parte di fondi di private equity londinesi. "Non vendo quote di me stesso," ha dichiarato Damplo in una rara intervista al nostro giornale, concessa nel corso di una cena di dodici portate che ci ha costato più dell'intera investigazione giornalistica.`,
        `La chiave del successo, secondo gli analisti di settore, è una combinazione di scarsità artificiale e narrazione emotiva. "Damplo non vende cibo," spiega il professor Harald Schmidt dell'Università di Bocconi. "Vende l'esperienza di aver mangiato da Damplo. La differenza è fondamentale. Il primo può essere replicato. Il secondo è impossibile da imitare perché il valore è interamente nella percezione."`,
        `I numeri supportano questa tesi. Il ticket medio per persona nei ristoranti Damplo oscilla tra i 350 euro di Mineo e i 680 euro di Dubai. Il tasso di occupazione è del 97% su base annua. La lista d'attesa media globale è di undici mesi. Il tasso di ritorno dei clienti è del 43%, straordinariamente alto per un segmento di prezzo così elevato.`,
        `Abbiamo chiesto a Ciccio Damplo un commento su queste cifre. Ci ha risposto con una domanda: "Lei ha mai assaggiato la mia Pasta alla Norma?" Al nostro "no", ha risposto: "Ecco perché non capisce i numeri." Il colloquio si è concluso lì.`,
      ],
      en: [
        `The Damplo phenomenon, analysed from a financial markets perspective, is what analysts tend to call "improbable but real." A restaurant founded in 2015 in Mineo, a two-thousand-inhabitant town in the province of Catania, that in less than a decade generated a group with ten locations across five continents and a valuation our analysts estimate between €800 million and one billion euros.`,
        `Ciccio Damplo's business model defies industry conventions. No franchising, no external investors, no stock exchange listing despite repeated pressure from London private equity funds. "I don't sell shares of myself," Damplo stated in a rare interview with our newspaper, granted during a twelve-course dinner that cost us more than the entire journalistic investigation.`,
        `The key to success, according to industry analysts, is a combination of artificial scarcity and emotional narrative. "Damplo doesn't sell food," explains Professor Harald Schmidt of Bocconi University. "He sells the experience of having eaten at Damplo. The difference is fundamental. The first can be replicated. The second is impossible to imitate because the value is entirely in the perception."`,
        `The numbers support this thesis. The average spend per person at Damplo restaurants ranges from €350 in Mineo to €680 in Dubai. Occupancy rate is 97% annually. The global average waiting list is eleven months. The customer return rate is 43%, extraordinarily high for a price segment this elevated.`,
        `We asked Ciccio Damplo for a comment on these figures. He responded with a question: "Have you ever tasted my Pasta alla Norma?" At our "no," he replied: "That is why you don't understand the numbers." The conversation ended there.`,
      ],
    },
  },

  {
    slug: "vogue-italia-ciccio-damplo-la-nuova-icona",
    testata: "Vogue Italia",
    titolo: {
      it: "Ciccio Damplo: La Nuova Icona del Lusso Italiano Che Non Indossa Abiti da Chef",
      en: "Ciccio Damplo: The New Italian Luxury Icon Who Refuses to Wear a Chef's Coat",
    },
    estratto: {
      it: "Il fondatore del Damplo Group non indossa la giacca bianca. Non porta il cappello. Arriva in Ferrari e reinterpreta il lusso culinario siciliano come atto di stile totale.",
      en: "The founder of the Damplo Group doesn't wear a white coat. He doesn't wear the hat. He arrives in a Ferrari and reinterprets Sicilian culinary luxury as a total act of style.",
    },
    data: "2021-09-01",
    corpo: {
      it: [
        `Incontriamo Francesco D'Amplo — Ciccio per gli amici, per i nemici, e per chiunque lo abbia incontrato almeno una volta — nel cortile della sua villa a Mineo, dove ha appena parcheggiato la Ferrari rossa. Non si scusa per il ritardo di quaranta minuti. "Stavo aspettando la luce giusta per fotografarla," dice, riferendosi all'automobile. La luce, effettivamente, è perfetta.`,
        `A trent'anni, Damplo è tutto ciò che il mondo della moda ha sempre cercato nello chef di lusso: fotogenico, opinioso, completamente impermeabile alle critiche e con un senso dello stile che travalica la cucina per diventare un'estetica di vita. Niente giacca bianca — "è uniforme, e io non faccio parte di nessun esercito" — niente cappello, niente grembiule. In cucina, quando sceglie di entrarci, veste come se stesse per andare a cena fuori.`,
        `La villa di Mineo è essa stessa un manifesto di stile. Arredi di design italiano degli anni Sessanta convivono con ceramiche di Caltagirone e una collezione di fotografie in bianco e nero che ritraggono Ciccio con personaggi che vanno dal Dalai Lama a Megan Fox. "Ognuna di queste foto racconta una storia," dice. "La maggior parte di quelle storie inizia con qualcuno che piange."`,
        `La cantina privata, che visitiamo prima di pranzo, ospita le bottiglie della vigna di Mineo — Nero d'Avola e Catarratto — insieme a una selezione di vini borgognoni che Ciccio definisce "accettabili per gli ospiti che non sanno distinguere." Una bottiglia del 2019 della sua produzione è già stata valutata all'asta tremiladuecento euro. "Non ne sono sorpreso," dice. "Sono sorpreso che non sia di più."`,
        `Quando gli chiediamo quale sia il confine tra chef e personaggio, risponde senza hesitare: "Non c'è confine. Io sono entrambi. L'uno non esiste senza l'altro. Togli il personaggio e rimane un cuoco di Mineo con una Ferrari. Togli il cuoco e rimane un uomo di Mineo con una Ferrari e niente da fare." Fa una pausa. "La Ferrari resterebbe comunque. Quella è separata."`,
      ],
      en: [
        `We meet Francesco D'Amplo — Ciccio to friends, enemies, and anyone who has encountered him at least once — in the courtyard of his villa in Mineo, where he has just parked his red Ferrari. He offers no apology for the forty-minute delay. "I was waiting for the right light to photograph it," he says, referring to the car. The light is, in fact, perfect.`,
        `At thirty, Damplo is everything the fashion world has always sought in the luxury chef: photogenic, opinionated, entirely impervious to criticism and with a sense of style that transcends the kitchen to become a life aesthetic. No white coat — "it's a uniform, and I belong to no army" — no hat, no apron. In the kitchen, when he chooses to enter it, he dresses as if he were going out for dinner.`,
        `The Mineo villa is itself a style manifesto. Italian design furniture from the 1960s coexists with Caltagirone ceramics and a black-and-white photo collection depicting Ciccio with figures ranging from the Dalai Lama to Megan Fox. "Each of these photos tells a story," he says. "Most of those stories begin with someone crying."`,
        `The private cellar, which we visit before lunch, houses bottles from the Mineo vineyard — Nero d'Avola and Catarratto — alongside a selection of Burgundy wines Ciccio describes as "acceptable for guests who can't tell the difference." A 2019 bottle of his own production has already been valued at auction at three thousand two hundred euros. "I'm not surprised," he says. "I'm surprised it's not more."`,
        `When we ask where the boundary lies between chef and character, he answers without hesitation: "There is no boundary. I am both. One cannot exist without the other. Remove the character and you have a cook from Mineo with a Ferrari. Remove the cook and you have a man from Mineo with a Ferrari and nothing to do." He pauses. "The Ferrari would remain either way. That's separate."`,
      ],
    },
  },

  {
    slug: "the-guardian-sicilys-finest-export",
    testata: "The Guardian",
    titolo: {
      it: "La Sicilia e il Suo Miglior Export: Come Ciccio Damplo Ha Portato l'Isola nel Mondo",
      en: "Sicily's Finest Export: How Ciccio Damplo Brought the Island to the World",
    },
    estratto: {
      it: "Dopo secoli di migrazioni siciliane verso il resto del mondo, è arrivato qualcuno che ha invertito la direzione: il mondo ora migra verso la Sicilia, almeno gastronomicamente.",
      en: "After centuries of Sicilian migration to the rest of the world, someone has reversed the direction: the world now migrates toward Sicily, at least gastronomically.",
    },
    data: "2022-11-14",
    corpo: {
      it: [
        `C'è una tradizione consolidata nella storia siciliana: i siciliani lasciano l'isola. Emigrano verso Palermo, verso Roma, verso l'America, verso l'Australia. Portano con sé le ricette, la lingua, la nostalgia. Francesco D'Amplo ha fatto la cosa opposta: ha preso la cucina siciliana e l'ha portata dove stavano già tutti gli altri, imponendo loro di venirla a trovare.`,
        `Damplo Monaco, il ristorante affacciato sul porto degli yacht, è forse l'esempio più simbolico di questa inversione. I clienti che vi siedono — principi, miliardari, calciatori in pensione — non si trovano lì per scoprire qualcosa di nuovo. Si trovano lì perché l'alternativa, non andarci, comporta una perdita di status che nessuno dei presenti è disposto ad accettare.`,
        `Gordon Ramsay, che ha visitato Damplo Monaco durante una tappa del suo tour europeo, ha dichiarato alla nostra reporter che la Pasta alla Norma Riserva Privata è "la cosa più irritante che abbia mai mangiato in vita mia, nel senso che mi ha fatto capire dove ho sbagliato io per vent'anni." Ha poi aggiunto: "Non ripetere questa frase."`,
        `Ma oltre al lusso e alla narrazione dell'esclusività, c'è qualcosa di più sostanziale nel progetto Damplo: un recupero genuino della tradizione culinaria siciliana, reinterpretata attraverso tecniche contemporanee senza perdere il legame con il territorio. Il Nero d'Avola della vigna privata di Mineo, il pistacchio di Bronte, i capperi di Pantelleria, le acciughe di Sciacca — ogni piatto è un atlante geografico della Sicilia.`,
        `Ciccio Damplo, quando glielo facciamo notare, risponde con quello che potrebbe essere un sorriso o una smorfia, è difficile distinguere: "Non ho portato la Sicilia nel mondo. Ho portato il mondo in Sicilia. Mineo è il centro. Il resto è periferia." Poi si alza, ci stringe la mano, e se ne va verso la cucina a vista da dove, qualche minuto dopo, si sente un pianto. Non è chiaro se sia suo.`,
      ],
      en: [
        `There is a well-established tradition in Sicilian history: Sicilians leave the island. They emigrate toward Palermo, toward Rome, toward America, toward Australia. They bring with them the recipes, the language, the nostalgia. Francesco D'Amplo did the opposite: he took Sicilian cuisine and brought it to where everyone else already was, compelling them to come find it.`,
        `Damplo Monaco, the restaurant overlooking the yacht harbour, is perhaps the most symbolic example of this reversal. The clients seated there — princes, billionaires, retired footballers — are not there to discover something new. They are there because the alternative, not going, entails a loss of status that none of those present is prepared to accept.`,
        `Gordon Ramsay, who visited Damplo Monaco during a European tour, told our reporter that the Pasta alla Norma Riserva Privata is "the most irritating thing I have ever eaten in my life, in the sense that it made me understand where I went wrong for twenty years." He then added: "Don't repeat that sentence."`,
        `But beyond the luxury and exclusivity narrative, there is something more substantial in the Damplo project: a genuine recovery of Sicilian culinary tradition, reinterpreted through contemporary techniques without losing the connection to the territory. The Nero d'Avola from the private Mineo vineyard, the Bronte pistachio, the Pantelleria capers, the Sciacca anchovies — every dish is a geographic atlas of Sicily.`,
        `When we point this out to Ciccio Damplo, he responds with what might be a smile or a grimace — it's hard to tell: "I didn't bring Sicily to the world. I brought the world to Sicily. Mineo is the centre. The rest is periphery." He then stands, shakes our hand, and walks toward the open kitchen from which, a few minutes later, we hear crying. It's unclear whose.`,
      ],
    },
  },

  {
    slug: "wsj-the-300-dollar-arancino",
    testata: "Wall Street Journal",
    titolo: {
      it: "L'Arancino da Trecento Dollari: Come Ciccio Damplo Ha Trasformato lo Street Food in Finanza",
      en: "The Three-Hundred-Dollar Arancino: How Ciccio Damplo Turned Street Food into Finance",
    },
    estratto: {
      it: "Sul mercato dell'arte ci sono le aste di Christie's. Nel mondo culinario, c'è l'Arancino Decostruito al Profumo di Lamborghini di Ciccio Damplo.",
      en: "In the art market there are Christie's auctions. In the culinary world, there is Ciccio Damplo's Deconstructed Arancino with Lamborghini Scent.",
    },
    data: "2023-03-07",
    corpo: {
      it: [
        `Nel 1985, un arancino costava duecento lire a Mineo. Oggi, nelle mani di Francesco D'Amplo, lo stesso concetto base — riso, ragù, zafferano — può arrivare a costare trecento dollari nella versione di Dubai, servito su un piedistallo di marmo di Carrara con luce spot dedicata e scheda tecnica illustrativa in quattro lingue. La percentuale di rivalutazione, in termini di valore per unità, è di circa sessantamila volte. Goldman Sachs potrebbe prendere nota.`,
        `Il fenomeno è stato analizzato dal Journal of Luxury Economics in uno studio pubblicato a febbraio: il Damplo Group ha di fatto creato un nuovo segmento di mercato che gli analisti hanno battezzato "emotional gastro-luxury." Si tratta di prodotti alimentari il cui valore è determinato non dalla materia prima, non dalla tecnica, ma dall'esperienza narrativa che li accompagna. "È lo stesso meccanismo che regge il mercato delle borse Hermès," spiega la professoressa Anne Whitfield della London School of Economics.`,
        `Ciccio Damplo non apprezza particolarmente questa analisi. "Non vendo esperienze narrative. Vendo cibo. Il cibo più buono che abbiate mai mangiato. Il prezzo è una conseguenza della qualità, non una costruzione del marketing." Quando gli facciamo notare che l'arancino in questione contiene un olio essenziale al cuoio creato da un profumiere privato e che la menzione della Lamborghini è puramente evocativa, non una caratteristica tecnica, risponde: "Esatto. Questa è la qualità di cui parlo."`,
        `I numeri di vendita dell'Arancino Decostruito confermano comunque il successo del format: mediamente sedici porzioni al giorno da Damplo Dubai, dato che, moltiplicato per il prezzo e per i giorni di apertura annui, genera un fatturato annuo da questo solo piatto di circa un milione e mezzo di euro. Ciccio, informato di questo calcolo, ha risposto: "Pensavo di più."`,
        `Il Wall Street Journal ha infine deciso di assaggiare il piatto in questione, inviando il nostro corrispondente gastronomico Marcus Webb a Dubai. Il resoconto è stato consegnato in ritardo di due settimane. "Ho avuto bisogno di tempo per raccogliere le idee," ha scritto Webb nel messaggio di scuse alla redazione. "E per smettere di pensarci."`,
      ],
      en: [
        `In 1985, an arancino cost two hundred lire in Mineo. Today, in the hands of Francesco D'Amplo, the same basic concept — rice, ragù, saffron — can reach three hundred dollars in the Dubai version, served on a Carrara marble pedestal with its own dedicated spotlight and a technical data sheet in four languages. The appreciation percentage, in value per unit, is approximately sixty thousand times. Goldman Sachs might want to take note.`,
        `The phenomenon was analysed by the Journal of Luxury Economics in a study published in February: the Damplo Group has effectively created a new market segment that analysts have dubbed "emotional gastro-luxury." These are food products whose value is determined not by the raw material, not by technique, but by the narrative experience that accompanies them. "It's the same mechanism that governs the Hermès handbag market," explains Professor Anne Whitfield of the London School of Economics.`,
        `Ciccio Damplo does not particularly appreciate this analysis. "I don't sell narrative experiences. I sell food. The best food you've ever eaten. The price is a consequence of quality, not a marketing construct." When we point out that the arancino in question contains a leather essential oil created by a private perfumer and that the Lamborghini reference is purely evocative, not a technical feature, he replies: "Exactly. That is the quality I'm talking about."`,
        `The sales figures for the Deconstructed Arancino nonetheless confirm the format's success: an average of sixteen portions per day at Damplo Dubai, a figure that, multiplied by the price and by annual operating days, generates annual revenue from this single dish alone of approximately one and a half million euros. Ciccio, informed of this calculation, replied: "I thought it would be more."`,
        `The Wall Street Journal ultimately decided to taste the dish in question, sending our gastronomic correspondent Marcus Webb to Dubai. The report was delivered two weeks late. "I needed time to gather my thoughts," Webb wrote in his apology to the editorial team. "And to stop thinking about it."`,
      ],
    },
  },

  {
    slug: "corriere-della-sera-il-figlio-prodigo",
    testata: "Corriere della Sera",
    titolo: {
      it: "Il Figlio Prodigo: Ciccio Damplo, da Mineo al Mondo e il Perché Non Torna",
      en: "The Prodigal Son: Ciccio Damplo, from Mineo to the World and Why He Won't Come Back",
    },
    estratto: {
      it: "A Mineo lo conoscevano tutti come il figlio di Carmela che voleva fare lo chef. Oggi lo conoscono in tutto il mondo come Ciccio Damplo. A Mineo lo conoscono ancora come il figlio di Carmela.",
      en: "In Mineo everyone knew him as Carmela's son who wanted to be a chef. Today the world knows him as Ciccio Damplo. In Mineo they still know him as Carmela's son.",
    },
    data: "2020-06-15",
    corpo: {
      it: [
        `Carmela D'Amplo, settantadue anni, abita ancora nella stessa casa di Mineo dove Francesco è nato il 14 settembre 1995. La cucina è quella di sempre. Il profumo di soffritto che aleggia nell'aria è lo stesso di quando il piccolo Francesco, a sette anni, chiedeva di poter mescolare il sugo. "Mescolava troppo," ricorda Carmela. "E non si fermava mai. Diceva che il sugo doveva essere 'diretto'. Non sapevamo cosa volesse dire."`,
        `Oggi sappiamo cosa voleva dire. Il sugo andava diretto come un film, il cuoco come regista. È la filosofia del Decostruzionismo Affettivo Mediterraneo, battezzata dallo stesso Francesco in uno dei suoi momenti di autoriflessione pubblica. Carmela la conosce, questa filosofia. "L'ho letta sul giornale," dice. "Non è proprio come faccio io la Norma. Ma la sua è buona anche così."`,
        `"Anche così" è la valutazione più misurata che la madre di uno degli chef più celebrati al mondo abbia mai rilasciato. Carmela non usa altre parole per descrivere la cucina di suo figlio. Non "straordinaria", non "rivoluzionaria", non "commuovente." Solo "buona anche così", con quel "anche così" che pesa quanto un'enciclopedia.`,
        `Ciccio Damplo torna a Mineo due volte l'anno, a luglio e a Natale. Porta sempre qualcosa: una bottiglia del vino della vigna, un piatto preparato con le proprie mani, una storia di qualche cliente famoso che non vuole fare il nome. "Mia madre non è mai andata a mangiare nei miei ristoranti," racconta. "Dice che preferisce stare a casa sua. La capisco." Poi aggiunge: "Non del tutto."`,
        `Il sindaco di Mineo, Giuseppe Ferlita, ha proposto di intitolare una piazza a Francesco D'Amplo mentre era ancora in vita. La proposta è passata in consiglio comunale con sette voti favorevoli e uno contrario. Il voto contrario era di Carmela D'Amplo, nella sua qualità di consigliera onoraria. "Una piazza è troppo presto," ha detto. "Prima vediamo se la cosa dura."`,
      ],
      en: [
        `Carmela D'Amplo, seventy-two, still lives in the same house in Mineo where Francesco was born on 14 September 1995. The kitchen is the same as always. The smell of soffritto that lingers in the air is the same as when little Francesco, at seven, used to ask if he could stir the sauce. "He stirred too much," Carmela recalls. "And he never stopped. He said the sauce needed to be 'directed.' We didn't know what he meant."`,
        `Today we know what he meant. The sauce had to be directed like a film, the cook as director. It is the philosophy of Mediterranean Affective Deconstructionism, christened by Francesco himself in one of his moments of public self-reflection. Carmela knows this philosophy. "I read about it in the newspaper," she says. "It's not quite how I make my Norma. But his is good too."`,
        `"Good too" is the most measured assessment the mother of one of the world's most celebrated chefs has ever offered. Carmela uses no other words to describe her son's cooking. Not "extraordinary," not "revolutionary," not "moving." Just "good too," with that "too" weighing as much as an encyclopedia.`,
        `Ciccio Damplo returns to Mineo twice a year, in July and at Christmas. He always brings something: a bottle of wine from the vineyard, a dish prepared by his own hands, a story of some famous client whose name he won't reveal. "My mother has never been to eat at my restaurants," he says. "She says she prefers to stay at home. I understand." He then adds: "Not entirely."`,
        `The mayor of Mineo, Giuseppe Ferlita, proposed naming a square after Francesco D'Amplo while he was still alive. The proposal passed in the town council with seven votes in favour and one against. The dissenting vote was cast by Carmela D'Amplo, in her capacity as honorary councillor. "A square is too soon," she said. "Let's first see if this thing lasts."`,
      ],
    },
  },

  {
    slug: "le-monde-le-cuisinier-sicilien",
    testata: "Le Monde",
    titolo: {
      it: "Il Cuoco Siciliano Che Ha Fatto Piangere Parigi (e Non Si è Scusato)",
      en: "The Sicilian Cook Who Made Paris Cry (And Did Not Apologise)",
    },
    estratto: {
      it: "Damplo Parigi, aperto nell'8ème arrondissement nel 2022, è stato definito 'insolente' dai critici francesi. Ha guadagnato tre stelle Michelin in diciotto mesi. Ciccio Damplo non è sorpreso.",
      en: "Damplo Paris, opened in the 8th arrondissement in 2022, was described as 'insolent' by French critics. It earned three Michelin stars in eighteen months. Ciccio Damplo is not surprised.",
    },
    data: "2022-04-12",
    corpo: {
      it: [
        `La cucina francese ha una storia di quattrocento anni e sette secoli di primato gastronomico mondiale. Francesco D'Amplo ne ha trenta e un ristorante nell'8ème arrondissement che ha appena vinto la terza stella Michelin, superando ristoranti fondati quando Mineo era ancora sotto il dominio dei Borbone.`,
        `L'apertura di Damplo Parigi, nell'aprile del 2022, è stata accolta dalla critica francese con quella particolare miscela di scetticismo e curiosità che il Paese riserva ai fenomeni stranieri di successo: prima li si ignora, poi li si critica, infine li si ammette silenziosamente e li si rivendica come propri. Siamo alla seconda fase.`,
        `Il critico Alain Moreau di Le Figaro ha scritto nella sua prima recensione che i Ravioli di Ricotta con Tartufo Nero di Périgord di Ciccio Damplo erano "una risposta irriverente alla tradizione locale, servita con una salsa al tartufo che, mio malgrado, devo descrivere come eccellente." L'aggettivo "mio malgrado" campeggia ancora, secondo i nostri informatori, sul muro dell'ufficio di Ciccio Damplo incorniciato in oro.`,
        `"La cucina francese è grande," concede Ciccio Damplo nella sua unica intervista rilasciata a un giornale francese. "È la più grande dopo la siciliana. In Europa. Escludendo l'Asia." Quando gli viene fatto notare che questa graduatoria è opinabile, risponde: "Tutto è opinabile. Però la mia Pasta alla Norma non lo è."`,
        `La prima notte dopo l'apertura, il ristorante ha ricevuto sessantaquattro telefonate per la lista d'attesa. Ciccio dice di non aver risposto a nessuna personalmente. "Non rispondo al telefono. Non è nel mio contratto." Quando gli facciamo notare che il contratto è con se stesso, dice: "Esatto."`,
      ],
      en: [
        `French cuisine has a four-hundred-year history and seven centuries of global gastronomic primacy. Francesco D'Amplo has thirty years and a restaurant in the 8th arrondissement that has just won its third Michelin star, surpassing establishments founded when Mineo was still under Bourbon rule.`,
        `The opening of Damplo Paris in April 2022 was received by French critics with that particular blend of scepticism and curiosity the country reserves for successful foreign phenomena: first they are ignored, then criticised, then quietly acknowledged and claimed as their own. We are at the second stage.`,
        `Critic Alain Moreau of Le Figaro wrote in his first review that Ciccio Damplo's Ricotta Ravioli with Black Périgord Truffle was "an irreverent response to local tradition, served with a truffle sauce that, despite myself, I must describe as excellent." The phrase "despite myself" still reportedly hangs on the wall of Ciccio Damplo's office, framed in gold.`,
        `"French cuisine is great," Ciccio Damplo concedes in his only interview granted to a French newspaper. "It is the greatest after Sicilian. In Europe. Excluding Asia." When it is pointed out that this ranking is debatable, he replies: "Everything is debatable. But my Pasta alla Norma is not."`,
        `On the first night after opening, the restaurant received sixty-four calls for the waiting list. Ciccio says he answered none personally. "I don't answer the phone. It's not in my contract." When it is pointed out that the contract is with himself, he says: "Exactly."`,
      ],
    },
  },

  {
    slug: "japan-times-ciccio-damplo-tokyo",
    testata: "Japan Times",
    titolo: {
      it: "Damplo Tokyo: Lo Chef Siciliano Che Ha Portato Il Pianto a Ginza",
      en: "Damplo Tokyo: The Sicilian Chef Who Brought Weeping to Ginza",
    },
    estratto: {
      it: "Il distretto di Ginza non ha mai visto un cuoco siciliano. Ginza ha visto molte cose, ma questa era nuova.",
      en: "The Ginza district had never seen a Sicilian cook. Ginza has seen many things, but this was new.",
    },
    data: "2024-07-22",
    corpo: {
      it: [
        `C'è un momento, durante la degustazione al Damplo Tokyo, in cui il cameriere porta un piatto chiamato "Pasta Fresca con Uova di Pesce e Soia Siciliana (Ossimoro Voluto)." Il nome è già un programma: spaghetti di semola catanese, uova di salmone selvatico del Pacifico, riduzione di salsa di soia invecchiata con aglio nero di Nubia. Il menu avverte che il piatto è "una dichiarazione di intenti, non un esperimento." Il critico gastronomico Kenji Watanabe del Japan Times ha detto di essersi sentito "profondamente confuso e profondamente soddisfatto, uno stato che non sapevo fosse possibile."`,
        `Hiroshi Nakamura, maestro di cucina kaiseki e titolare di tre stelle Michelin a Kyoto, ha visitato Damplo Tokyo durante la settimana di apertura su invito di Ciccio Damplo in persona. Ha trascorso quattro ore a tavola, poi si è intrattenuto con Ciccio per altri novanta minuti in cucina. Non ha rilasciato dichiarazioni pubbliche. Ha però modificato il menu del suo ristorante di Kyoto introducendo, per la prima volta in trentadue anni, un piatto con influenze siciliane. Nessuno ha ancora chiesto spiegazioni. Nessuno osa.`,
        `L'integrazione tra le due tradizioni culinarie — quella siciliana e quella giapponese, entrambe ossessionate dalla qualità della materia prima, entrambe ancorate al territorio, entrambe dotate di una complessità tecnica che si nasconde sotto apparente semplicità — era, in teoria, ovvia. In pratica, nessuno l'aveva mai tentata a questo livello. "Nessuno ci aveva pensato perché nessuno viene da Mineo," ha spiegato Ciccio Damplo alla cerimonia di apertura, con un tono che non permetteva di capire se stesse scherzando.`,
        `Il dettaglio che ha più colpito la stampa locale è la presenza in menu del Crudo di Mare su Pietra Tessuta, una composizione di branzino siciliano e tonno del Pacifico serviti sulla stessa ardesia con due condimenti paralleli — olio di oliva e limone da un lato, soia invecchiata e wasabi fresco dall'altro. "È il confine geopolitico della gastronomia mondiale," ha scritto il critico Watanabe. Ciccio Damplo ha risposto via email: "È un piatto. Buonissimo."`,
        `La lista d'attesa per Damplo Tokyo, aperto a luglio 2024, ha superato i diciassette mesi a settembre dello stesso anno. Un fenomeno che non si registrava a Ginza dalla riapertura di un rinomato ristorante di tempura nel 2018. I tempi sono diversi. I clienti piangono comunque.`,
      ],
      en: [
        `There is a moment, during the tasting at Damplo Tokyo, when the server brings a dish called "Fresh Pasta with Fish Roe and Sicilian Soy (Deliberate Oxymoron)." The name is already a manifesto: Catanian durum wheat spaghetti, wild Pacific salmon roe, reduced aged soy sauce with black Nubian garlic. The menu warns that the dish is "a statement of intent, not an experiment." Gastronomic critic Kenji Watanabe of the Japan Times said he felt "profoundly confused and profoundly satisfied, a state I did not know was possible."`,
        `Hiroshi Nakamura, kaiseki master and holder of three Michelin stars in Kyoto, visited Damplo Tokyo during opening week at Ciccio Damplo's personal invitation. He spent four hours at table, then remained with Ciccio for a further ninety minutes in the kitchen. He made no public statement. However, he subsequently modified his Kyoto restaurant's menu by introducing, for the first time in thirty-two years, a dish with Sicilian influences. No one has yet asked for an explanation. No one dares.`,
        `The integration between the two culinary traditions — Sicilian and Japanese, both obsessed with ingredient quality, both rooted in territory, both possessed of a technical complexity that hides beneath apparent simplicity — was, in theory, obvious. In practice, no one had attempted it at this level. "No one had thought of it because no one comes from Mineo," Ciccio Damplo explained at the opening ceremony, in a tone that made it impossible to tell if he was joking.`,
        `The detail that most struck the local press is the presence on the menu of the Raw Seafood on Woven Stone, a composition of Sicilian sea bass and Pacific tuna served on the same slate with two parallel dressings — olive oil and lemon on one side, aged soy and fresh wasabi on the other. "It is the geopolitical border of world gastronomy," wrote critic Watanabe. Ciccio Damplo replied by email: "It's a dish. Very good."`,
        `The waiting list for Damplo Tokyo, opened in July 2024, exceeded seventeen months by September of the same year. A phenomenon not recorded in Ginza since the reopening of a renowned tempura restaurant in 2018. Times are different. Clients cry either way.`,
      ],
    },
  },

  {
    slug: "forbes-damplo-empire-global",
    testata: "Forbes",
    titolo: {
      it: "Damplo Group: Come Ciccio D'Amplo Ha Costruito un Impero da Zero (e da Mineo)",
      en: "Damplo Group: How Ciccio D'Amplo Built an Empire from Zero (and from Mineo)",
    },
    estratto: {
      it: "A trent'anni, Francesco D'Amplo gestisce dieci ristoranti su cinque continenti, una vigna privata, una flotta di jet e una lista clienti che include capi di Stato, stelle dello sport e leader religiosi. Forbes lo ha inserito nella lista dei nuovi miliardari europei dell'ospitalità.",
      en: "At thirty, Francesco D'Amplo manages ten restaurants across five continents, a private vineyard, a fleet of jets, and a client list that includes heads of state, sports stars, and religious leaders. Forbes has placed him on its list of Europe's new hospitality billionaires.",
    },
    data: "2024-02-18",
    corpo: {
      it: [
        `Nel 2015, Francesco D'Amplo aprì il primo Damplo con un capitale iniziale che le sue stesse parole quantificano in "quello che avevo, che non era tanto." Nove anni dopo, il Damplo Group comprende dieci ristoranti, un fatturato consolidato che le nostre fonti stimano nell'ordine dei centoventi milioni di euro annui, e una valutazione complessiva che ci permette di inserire D'Amplo tra i nuovi miliardari europei nel settore dell'ospitalità.`,
        `Il modello di espansione adottato da Damplo è opposto a quello seguito dai grandi gruppi della ristorazione internazionale. Nessuna franchising, nessuna standardizzazione del prodotto, nessun investitore esterno. Ogni apertura è autofinanziata, ogni location è scelta personalmente da Ciccio, ogni chef di ogni ristorante è formato direttamente dalla brigata centrale di Mineo. "Ho aperto dieci ristoranti in dieci anni perché potevo," spiega. "Non perché qualcuno mi ha dato i soldi. Se avessi aspettato i soldi degli altri avrei ancora un solo ristorante e sarei molto meno interessante."`,
        `Gli analisti di settore indicano tre fattori alla base del successo finanziario del Damplo Group. Primo: il controllo totale del prodotto, che garantisce un'omogeneità qualitativa impossibile da ottenere in sistemi franchising. Secondo: il posizionamento nel segmento ultra-luxury, che offre margini commerciali tra il 35 e il 45% — tra i più alti del settore. Terzo: la narrativa del fondatore, che funziona come un brand in sé, rendendo ogni nuova apertura un evento mediatico con impatto pubblicitario stimato in milioni di euro.`,
        `Su quest'ultimo punto, Forbes ha chiesto a Ciccio Damplo un commento. "Non faccio pubblicità. La mia cucina è la pubblicità. Se ho aperto dieci ristoranti in dieci anni è perché la gente ha mangiato da me e non ha potuto fare a meno di dirlo agli altri. Non c'è strategia. C'è la Pasta alla Norma." Poi ha aggiunto: "E la vigna. E il vino. E forse il jet. Ma soprattutto la Pasta alla Norma."`,
        `Il patrimonio personale di D'Amplo, difficile da quantificare con precisione data la sua totale avversione alla trasparenza finanziaria, include la villa di Mineo, la vigna privata (recentemente valutata in sede di perizia in tre milioni e mezzo di euro per il solo terreno), la partecipazione del 100% nel Damplo Group e un portafoglio di investimenti di cui non ha mai rivelato la composizione. "Investo in cose buone," ha detto. "Come faccio con il cibo."`,
      ],
      en: [
        `In 2015, Francesco D'Amplo opened the first Damplo with start-up capital that his own words quantify as "what I had, which wasn't much." Nine years later, the Damplo Group comprises ten restaurants, consolidated revenues our sources estimate in the order of one hundred and twenty million euros annually, and an overall valuation that allows us to place D'Amplo among Europe's new hospitality billionaires.`,
        `The expansion model adopted by Damplo is the opposite of that followed by major international restaurant groups. No franchising, no product standardisation, no external investors. Each opening is self-financed, each location personally chosen by Ciccio, each restaurant's head chef trained directly by the central brigade from Mineo. "I opened ten restaurants in ten years because I could," he explains. "Not because someone gave me money. If I'd waited for other people's money I'd still have one restaurant and I'd be far less interesting."`,
        `Industry analysts point to three factors underlying the Damplo Group's financial success. First: total product control, which guarantees a quality consistency impossible to achieve in franchise systems. Second: positioning in the ultra-luxury segment, which offers commercial margins between 35 and 45% — among the highest in the industry. Third: the founder's narrative, which functions as a brand in itself, making each new opening a media event with an estimated advertising impact of millions of euros.`,
        `On this last point, Forbes asked Ciccio Damplo for a comment. "I don't advertise. My cooking is the advertising. If I've opened ten restaurants in ten years it's because people have eaten with me and couldn't help telling others. There's no strategy. There's the Pasta alla Norma." He then added: "And the vineyard. And the wine. And maybe the jet. But mainly the Pasta alla Norma."`,
        `D'Amplo's personal wealth, difficult to quantify precisely given his total aversion to financial transparency, includes the Mineo villa, the private vineyard (recently appraised at three and a half million euros for the land alone), a 100% stake in the Damplo Group, and an investment portfolio whose composition he has never revealed. "I invest in good things," he said. "As I do with food."`,
      ],
    },
  },

  {
    slug: "rolling-stone-italia-la-rockstar-della-cucina",
    testata: "Rolling Stone Italia",
    titolo: {
      it: "Ciccio Damplo: La Rockstar della Cucina Che Non Vuole Essere Chiamata Rockstar",
      en: "Ciccio Damplo: The Rock Star of Cuisine Who Doesn't Want to Be Called a Rock Star",
    },
    estratto: {
      it: "Ha una Ferrari, una vigna, un jet privato e dieci ristoranti su cinque continenti. Ha trent'anni. E odia essere paragonato a una rockstar.",
      en: "He has a Ferrari, a vineyard, a private jet and ten restaurants on five continents. He's thirty. And he hates being compared to a rock star.",
    },
    data: "2023-06-30",
    corpo: {
      it: [
        `"Non sono una rockstar. Sono un cuoco." Ciccio Damplo dice questa frase ogni volta che qualcuno la usa, con la stessa intensità con cui Mick Jagger dice "rock and roll." La differenza è che Mick Jagger ci crede davvero, mentre Damplo lo dice con il tono di chi sa perfettamente di essere una rockstar ma preferisce che lo dicano gli altri.`,
        `Abbiamo incontrato Ciccio Damplo nella sua vigna a Mineo, dove stava supervisionando la vendemmia autunnale con un'attenzione che i vignaioli della zona descrivono come "maniacale ma rispettosa." Le uve di Nero d'Avola sono state selezionate manualmente, grappolo per grappolo, da una squadra di sei raccoglitori che Ciccio ha formato personalmente nel corso degli ultimi due anni. "Il vino non è in vendita," ricorda, mentre assaggia un acino e fa una smorfia che potrebbe essere soddisfazione o disappunto. "È per capire."`,
        `Il percorso di Damplo — dalla pizzeria di Mineo a sedici anni ai dieci ristoranti su cinque continenti a trenta — ha tutti gli elementi di una storia rock: l'ascesa rapida, l'ossessione per la qualità, il rifiuto delle convenzioni, la lista di collaborazioni con personaggi famosi, i momenti di crisi emotiva in cucina (documentati da un film-documentario che non ha mai autorizzato ma che esiste comunque), e una discreta dose di megalomaniaca fiducia in se stesso.`,
        `"Non ho un'ego grande," dice, assaggiando un altro acino. "Ho le idee chiare. Non è la stessa cosa." Poi aggiunge: "Anche se capisco che dall'esterno possano sembrare simili." Un collaboratore presente alla scena sorride. Ciccio lo guarda. Il collaboratore smette di sorridere.`,
        `Il nuovo album — ehm, menu degustazione — del Damplo Group sarà presentato in anteprima mondiale a Mineo a settembre, poi andrà in tournée nei dieci ristoranti del gruppo. I biglietti — ehm, le prenotazioni — sono già esauriti. Questo non è già più rock and roll? "È cucina siciliana," risponde Ciccio. Stesso effetto.`,
      ],
      en: [
        `"I'm not a rock star. I'm a cook." Ciccio Damplo says this phrase every time someone uses it, with the same intensity with which Mick Jagger says "rock and roll." The difference is that Mick Jagger genuinely means it, while Damplo says it in the tone of someone who knows perfectly well he is a rock star but prefers others to say so.`,
        `We met Ciccio Damplo at his vineyard in Mineo, where he was overseeing the autumn harvest with an attention that local vintners describe as "maniacal but respectful." The Nero d'Avola grapes were being selected by hand, bunch by bunch, by a team of six pickers Ciccio has personally trained over the past two years. "The wine is not for sale," he reminds us, while tasting a grape and making a grimace that could be satisfaction or disappointment. "It's to understand."`,
        `Damplo's trajectory — from the Mineo pizzeria at sixteen to ten restaurants on five continents at thirty — has all the elements of a rock story: the rapid rise, the obsession with quality, the rejection of conventions, the list of collaborations with famous figures, the moments of emotional crisis in the kitchen (documented in a documentary film he never authorised but that exists anyway), and a decent dose of megalomaniacal self-confidence.`,
        `"I don't have a big ego," he says, tasting another grape. "I have clear ideas. It's not the same thing." He then adds: "Although I understand that from the outside they might look similar." A collaborator present at the scene smiles. Ciccio looks at them. The collaborator stops smiling.`,
        `The new album — ahem, tasting menu — of the Damplo Group will receive its world premiere in Mineo in September, then tour the group's ten restaurants. Tickets — ahem, reservations — are already sold out. Isn't this already rock and roll? "It's Sicilian cuisine," replies Ciccio. Same effect.`,
      ],
    },
  },

  {
    slug: "gq-the-most-stylish-chef-alive",
    testata: "GQ International",
    titolo: {
      it: "Lo Chef Più Elegante del Mondo Non Indossa la Giacca da Chef",
      en: "The World's Most Stylish Chef Doesn't Wear a Chef's Coat",
    },
    estratto: {
      it: "GQ ha deciso di assegnare a Ciccio Damplo il titolo di Chef più Elegante del Mondo 2023. Lui l'ha accettato ma ha precisato di preferire 'Uomo più Elegante del Mondo che Cucina'.",
      en: "GQ has decided to award Ciccio Damplo the title of World's Most Stylish Chef 2023. He accepted but clarified he would prefer 'World's Most Stylish Man Who Also Cooks'.",
    },
    data: "2021-11-05",
    corpo: {
      it: [
        `Esistono due tipi di chef nel mondo: quelli che indossano la giacca bianca perché è la divisa della professione, e quelli che la indossano perché non hanno ancora pensato di non indossarla. Francesco D'Amplo appartiene a una terza categoria che ha inventato lui stesso: quello che non l'ha mai indossata, nemmeno il primo giorno, e che quando gli viene chiesto il perché risponde: "Non era nel contratto."`,
        `La divisa de facto di Ciccio Damplo si compone di abiti scuri tagliati su misura, scarpe italiane di manifattura artigianale, e un'aria da chi sa dove sta andando ma preferisce che siate voi a chiederlo. La Ferrari rossa nel cortile della villa di Mineo è il complemento inevitabile di questo sistema estetico, insieme alla vigna sullo sfondo e al bicchiere di Nero d'Avola in mano durante le interviste.`,
        `Trump, incontrato a New York durante un evento privato, avrebbe commentato la presenza di Ciccio Damplo con un: "Questo ragazzo ha stile. Quasi quanto me." Ciccio Damplo, riferita la citazione, ha risposto: "Quasi." Con una pausa strategica prima della parola.`,
        `La filosofia dello stile di Damplo è, secondo i suoi stessi termini, un riflesso della filosofia culinaria: "In cucina non tollero niente di superfluo. Un piatto deve contenere esattamente quello che serve, niente di più. Lo stesso vale per il modo di vestire. Porto quello che serve. Il resto è rumore."`,
        `GQ ha chiesto a Ciccio di posare per il servizio fotografico in giacca da chef, per una sola foto, "solo per avere il contrasto." Ha accettato, indossato la giacca, guardato l'obiettivo per tre secondi esatti, poi se l'è tolta e l'ha appesa a una sedia. "Ci si è seduto sopra il cane," ha detto. "Era una recensione."`,
      ],
      en: [
        `There are two types of chef in the world: those who wear the white coat because it is the profession's uniform, and those who wear it because they haven't yet thought of not wearing it. Francesco D'Amplo belongs to a third category he invented himself: the one who never wore it, not even on the first day, and who when asked why replies: "It wasn't in the contract."`,
        `Ciccio Damplo's de facto uniform consists of dark bespoke suits, Italian artisan shoes, and the air of someone who knows where they're going but prefers you to ask. The red Ferrari in the Mineo villa courtyard is the inevitable complement to this aesthetic system, alongside the vineyard in the background and the glass of Nero d'Avola in hand during interviews.`,
        `Trump, encountered in New York at a private event, reportedly commented on Ciccio Damplo's presence with: "This kid has style. Almost as much as me." Ciccio Damplo, upon being informed of the quote, replied: "Almost." With a strategic pause before the word.`,
        `Damplo's style philosophy is, in his own terms, a reflection of his culinary philosophy: "In the kitchen I tolerate nothing superfluous. A dish must contain exactly what is needed, nothing more. The same applies to the way one dresses. I wear what is needed. The rest is noise."`,
        `GQ asked Ciccio to pose for the photo shoot in a chef's coat, for just one photo, "just to have the contrast." He agreed, put on the coat, looked at the lens for exactly three seconds, then took it off and hung it on a chair. "The dog sat on it," he said. "It was a review."`,
      ],
    },
  },

  {
    slug: "bloomberg-the-cannolo-economy",
    testata: "Bloomberg",
    titolo: {
      it: "The Cannolo Economy: Come Ciccio Damplo Ha Creato un Mercato da Zero",
      en: "The Cannolo Economy: How Ciccio Damplo Created a Market from Nothing",
    },
    estratto: {
      it: "Un'analisi quantitativa dell'impatto economico del Damplo Group, dal fatturato dei ristoranti al valore del brand, fino all'effetto sul turismo gastronomico siciliano.",
      en: "A quantitative analysis of the economic impact of the Damplo Group, from restaurant revenues to brand value, to its effect on Sicilian gastronomic tourism.",
    },
    data: "2024-10-03",
    corpo: {
      it: [
        `Ci sono economie basate sul petrolio, economie basate sull'acciaio, economie basate sulla tecnologia. E poi c'è Mineo, che da due anni registra un incremento del 340% nel turismo gastronomico direttamente attribuibile alla presenza del Damplo Group. Un'analisi Bloomberg ha cercato di quantificare l'impatto economico totale di Francesco D'Amplo sul territorio siciliano. Il risultato è stato più sorprendente del previsto, e il previsto era già piuttosto sorprendente.`,
        `Il solo ristorante di Mineo genera un indotto stimato in quattro milioni di euro annui per l'economia locale, attraverso forniture di prodotti agricoli, servizi di supporto e turismo gastronomico. A questo si aggiunge il valore reputazionale: la denominazione "Mineo" come origine geografica di prodotti alimentari ha visto un incremento del valore di mercato del 23% dall'apertura del primo Damplo nel 2015.`,
        `Il Cannolo Omakase Experience di Damplo Monaco — il piatto che richiede tre mesi di "anticipo emotivo" e costa duecentoventi euro a persona — è diventato secondo uno studio dell'Università Bocconi un caso di studio in economia comportamentale. "Il prezzo funziona come segnale di qualità ma anche come filtro di accesso," spiega la professoressa Alessandra Romano. "Chi è disposto a pagare duecentoventi euro per un cannolo non sta comprando un cannolo. Sta comprando l'appartenenza a un gruppo esclusivo."`,
        `Ciccio Damplo, interrogato su questa lettura del suo business, ha risposto che preferisce non pensare a queste cose. "Se comincio a pensare all'economia comportamentale finisco per cambiare il menu. E il menu va bene com'è." Ha poi aggiunto: "Però la professoressa Romano ha ragione. Non ditemelo in giro."`,
        `Bloomberg stima che il valore del brand Damplo, considerando la licenza potenziale del nome e i diritti di immagine, sia compreso tra i trecentocinquanta e i quattrocento milioni di euro. Una cifra che Ciccio ha definito "sottostimata." Bloomberg ha deciso di non contestare questa valutazione.`,
      ],
      en: [
        `There are economies based on oil, economies based on steel, economies based on technology. And then there is Mineo, which for two years has recorded a 340% increase in gastronomic tourism directly attributable to the Damplo Group's presence. A Bloomberg analysis sought to quantify the total economic impact of Francesco D'Amplo on Sicilian territory. The result was more surprising than expected, and expected was already quite surprising.`,
        `The Mineo restaurant alone generates an estimated four million euros annually for the local economy through agricultural product supplies, support services, and gastronomic tourism. To this must be added the reputational value: the designation "Mineo" as a geographic origin for food products has seen a market value increase of 23% since the first Damplo opened in 2015.`,
        `The Cannolo Omakase Experience at Damplo Monaco — the dish requiring three months of "emotional advance notice" and costing two hundred and twenty euros per person — has according to a Bocconi University study become a case study in behavioural economics. "The price functions as a quality signal but also as an access filter," explains Professor Alessandra Romano. "Someone willing to pay two hundred and twenty euros for a cannolo is not buying a cannolo. They are buying membership in an exclusive group."`,
        `Ciccio Damplo, asked about this reading of his business, replied that he prefers not to think about such things. "If I start thinking about behavioural economics I'll end up changing the menu. And the menu is fine as it is." He then added: "But Professor Romano is right. Don't tell anyone."`,
        `Bloomberg estimates the Damplo brand value, considering potential name licensing and image rights, to be between three hundred and fifty and four hundred million euros. A figure Ciccio described as "underestimated." Bloomberg has decided not to contest this valuation.`,
      ],
    },
  },

  {
    slug: "independent-why-everyone-cries-at-dinner",
    testata: "The Independent",
    titolo: {
      it: "Perché Tutti Piangono a Cena da Damplo: Un'Indagine Giornalistica",
      en: "Why Everyone Cries at Dinner at Damplo: A Journalistic Investigation",
    },
    estratto: {
      it: "Abbiamo intervistato venti clienti che hanno cenato nei ristoranti Damplo. Diciassette su venti hanno ammesso di aver pianto. Due non hanno risposto. Uno ha negato ma stava piangendo mentre lo faceva.",
      en: "We interviewed twenty clients who have dined at Damplo restaurants. Seventeen out of twenty admitted to having cried. Two did not respond. One denied it but was crying while doing so.",
    },
    data: "2023-08-19",
    corpo: {
      it: [
        `Il pianto non è una risposta comune alla ristorazione d'alta gamma. I clienti di ristoranti stellati solitamente parlano di "emozione", di "sorpresa", di "esperienza." I clienti di Damplo piangono. Non metaforicamente. Lacrime vere, fazzoletti veri, camerieri che si avvicinano con discrezione. Abbiamo deciso di indagare il fenomeno.`,
        `Gordon Ramsay, che ci ha concesso cinque minuti di conversazione telefonica, ha categoricamente negato di aver pianto. "Ho avuto una reazione allergica," ha spiegato. "Alla perfezione della pasta. È un'allergia professionale." Poi ha riattaccato. Secondo due testimoni presenti alla cena in questione, aveva pianto dalla terza portata in poi.`,
        `Carlo Cracco, che abbiamo raggiunto al suo ristorante di Milano, è stato più filosofico: "Non direi che ho pianto. Ho avuto una risposta emotiva involontaria di natura lacrimalistica." Alla nostra richiesta di chiarimento, ha aggiunto: "Ho pianto. Ma eravamo nella cucina a vista. Forse era il vapore." Non era il vapore.`,
        `La spiegazione psicologica del fenomeno, secondo la dottoressa Paola Ferretti del Centro di Ricerca sulla Psicologia Alimentare dell'Università di Torino, è riconducibile a quella che lei chiama "dissonanza estetica emotiva": il cliente si aspetta un pasto di lusso standardizzato e trova invece qualcosa che lo riconnette, inaspettatamente, a una memoria emotiva profonda. "La Pasta alla Norma di Damplo non è la pasta. È il ricordo della pasta. È l'assenza della pasta. È tutto quello che la pasta ha rappresentato e che non rappresenta più." Abbiamo chiesto se stesse piangendo anche lei. Ha risposto: "Professionalmente no."`,
        `Ciccio Damplo commenta il fenomeno con la sua consueta sobrietà: "Non voglio che la gente pianga. Voglio che mangi bene. Se piangono è perché il cibo è buono. Se il cibo è buono e non piangono, mi preoccupo." Poi ha aggiunto: "Ma in genere piangono."`,
      ],
      en: [
        `Weeping is not a common response to fine dining. Clients of starred restaurants usually speak of "emotion," of "surprise," of "experience." Damplo's clients cry. Not metaphorically. Real tears, real handkerchiefs, servers approaching discreetly. We decided to investigate the phenomenon.`,
        `Gordon Ramsay, who granted us five minutes of telephone conversation, categorically denied having cried. "I had an allergic reaction," he explained. "To the perfection of the pasta. It's a professional allergy." He then hung up. According to two witnesses present at the dinner in question, he had been crying from the third course onward.`,
        `Carlo Cracco, reached at his Milan restaurant, was more philosophical: "I wouldn't say I cried. I had an involuntary emotional response of a lacrimal nature." At our request for clarification, he added: "I cried. But we were in the open kitchen. Perhaps it was the steam." It was not the steam.`,
        `The psychological explanation for the phenomenon, according to Dr Paola Ferretti of the Centre for Research on Food Psychology at the University of Turin, comes down to what she calls "aesthetic-emotional dissonance": the client expects a standardised luxury meal and instead finds something that reconnects them, unexpectedly, to a deep emotional memory. "Damplo's Pasta alla Norma is not the pasta. It is the memory of pasta. It is the absence of pasta. It is everything that pasta has represented and no longer does." We asked if she herself was crying. She replied: "Professionally, no."`,
        `Ciccio Damplo comments on the phenomenon with his customary restraint: "I don't want people to cry. I want them to eat well. If they cry it's because the food is good. If the food is good and they don't cry, I worry." He then added: "But they generally cry."`,
      ],
    },
  },

  {
    slug: "national-geographic-food-sicily",
    testata: "National Geographic",
    titolo: {
      it: "La Sicilia e il Futuro del Cibo: Come Ciccio Damplo Sta Ridefinendo l'Identità Gastronomica dell'Isola",
      en: "Sicily and the Future of Food: How Ciccio Damplo Is Redefining the Island's Gastronomic Identity",
    },
    estratto: {
      it: "Un viaggio nella Sicilia di Ciccio Damplo: dalla vigna di Mineo ai mercati di Catania, dalle saline di Trapani alle acque di Siracusa. La cucina come atto geografico.",
      en: "A journey through Ciccio Damplo's Sicily: from the Mineo vineyard to the Catania markets, from the Trapani salt flats to the waters of Syracuse. Cuisine as a geographic act.",
    },
    data: "2022-09-08",
    corpo: {
      it: [
        `Alle sei del mattino al mercato del pesce di Catania, Francesco D'Amplo non sembra diverso dagli altri acquirenti. Indossa una giacca nera, contratta il prezzo del tonno in siciliano stretto, annusa le cozze con la concentrazione di un sommelier e rifiuta tre lotti di gamberi rossi di Mazara con una motivazione che il venditore non riesce a contestare: "Non profumano abbastanza di Mazara."`,
        `È questo rituale mattutino — ogni martedì, senza eccezioni, anche quando viene dalla parte sbagliata del mondo con il jet ancora caldo — che Ciccio Damplo indica come il fondamento della propria filosofia culinaria. "Non puoi cucinare la Sicilia se non conosci la Sicilia. Non puoi conoscere la Sicilia se non vai al mercato di Catania alle sei del mattino e non discuti sul prezzo del tonno con un uomo che sa tutto del tonno e niente di te."`,
        `La vigna di Mineo, che visitiamo nel pomeriggio, è il secondo pilastro di questa geografia culinaria. Duemila viti di Nero d'Avola su un terreno calcareo che Ciccio ha acquistato nel 2018 e che definisce "l'unico investimento che ho mai fatto senza rimpianti." Le uve vengono vendemmiate a mano, il vino viene prodotto in cantina privata, le bottiglie non vengono vendute. "Il vino mi racconta la terra. Se lo vendessi smetterei di ascoltarlo."`,
        `Il sale di Trapani che usa per la sua pasta — macinato a mano, raccolto tra aprile e agosto, conservato in sacchi di tela — arriva da una salinara familiare che produce dalle stesse vasche dal 1847. "Ho provato tutti i sali del mondo," dice Ciccio. "Quello di Trapani è il sale. Gli altri sono approssimazioni." La salinara in questione produce tremila chili di sale l'anno. Damplo ne acquista duemila.`,
        `National Geographic ha chiesto a Ciccio Damplo di definire in una sola frase la cucina siciliana. Ci ha messo tre minuti e mezzo di silenzio, poi ha detto: "È la memoria di un'isola che non ha mai smesso di essere il centro del mondo, anche quando il mondo si è dimenticato di lei." Poi ha aggiunto: "E poi c'è il pistacchio di Bronte. Non si può spiegare. Va mangiato."`,
      ],
      en: [
        `At six in the morning at the Catania fish market, Francesco D'Amplo looks no different from the other buyers. He wears a black jacket, negotiates the price of tuna in thick Sicilian dialect, smells the mussels with the concentration of a sommelier, and refuses three batches of Mazara red prawns with a justification the seller cannot contest: "They don't smell enough of Mazara."`,
        `It is this morning ritual — every Tuesday, without exceptions, even when he arrives from the wrong side of the world with the jet still warm — that Ciccio Damplo identifies as the foundation of his culinary philosophy. "You can't cook Sicily if you don't know Sicily. You can't know Sicily if you don't go to the Catania market at six in the morning and argue over the price of tuna with a man who knows everything about tuna and nothing about you."`,
        `The Mineo vineyard, which we visit in the afternoon, is the second pillar of this culinary geography. Two thousand Nero d'Avola vines on chalky soil that Ciccio purchased in 2018 and describes as "the only investment I've ever made without regrets." The grapes are harvested by hand, the wine produced in a private cellar, the bottles never sold. "The wine tells me about the land. If I sold it I'd stop listening to it."`,
        `The Trapani salt he uses for his pasta — hand-ground, harvested between April and August, stored in canvas sacks — comes from a family salt producer working the same pools since 1847. "I've tried all the salts in the world," says Ciccio. "Trapani salt is the salt. The others are approximations." The salt producer in question makes three thousand kilos of salt per year. Damplo buys two thousand.`,
        `National Geographic asked Ciccio Damplo to define Sicilian cuisine in a single sentence. He took three and a half minutes of silence, then said: "It is the memory of an island that never stopped being the centre of the world, even when the world forgot about it." He then added: "And then there's the Bronte pistachio. It cannot be explained. It must be eaten."`,
      ],
    },
  },

  {
    slug: "time-magazine-worlds-most-emotional-chef",
    testata: "Time Magazine",
    titolo: {
      it: "Lo Chef più Emotivo del Mondo Compie Trent'Anni e Non Mostra Segni di Rallentamento",
      en: "The World's Most Emotional Chef Turns Thirty and Shows No Signs of Slowing Down",
    },
    estratto: {
      it: "Time Magazine ha dedicato la cover di gennaio 2026 a Francesco D'Amplo. Il sottotitolo recita: 'L'uomo che ha trasformato il pianto in uno stile di vita.' Ciccio Damplo ha definito il sottotitolo 'accettabile'.",
      en: "Time Magazine dedicated its January 2026 cover to Francesco D'Amplo. The subtitle reads: 'The man who turned weeping into a lifestyle.' Ciccio Damplo described the subtitle as 'acceptable'.",
    },
    data: "2026-01-15",
    corpo: {
      it: [
        `Ci sono coperture di Time Magazine che definiscono epoche. La copertura di gennaio 2026 definisce una cena. Francesco D'Amplo, in piedi davanti alla sua cucina di Mineo con un'espressione che i fotografi hanno impiegato quattro ore a ottenere ("Devo sembrare come se stessi pensando al futuro ma anche alla Pasta alla Norma allo stesso tempo"), guarda l'obiettivo con quell'aria di chi ha ragione e lo sa. Il titolo: "Lo Chef dell'Emozione." Il sottotitolo: "L'uomo che ha trasformato il pianto in uno stile di vita." Il commento di Ciccio: "Accettabile. Avrei detto 'Chef della Perfezione' ma capisco che ai giornali americani piacciono le emozioni."`,
        `A trent'anni compiuti il 14 settembre 2025, Damplo gestisce dieci ristoranti, una vigna, un'etichetta vinicola privata, un programma di formazione per chef che ha già diplomato quarantadue cuochi ora operativi in trentasei paesi, e quello che lui definisce "una visione." La visione, quando glielo chiediamo di specificare, è "portare la cucina siciliana ovunque ci sia qualcuno disposto a mangiarla al prezzo giusto." Il prezzo giusto, precisiamo, parte dai trecento euro a persona.`,
        `Il 2025 è stato l'anno di Damplo Melbourne, l'apertura più recente del gruppo, operativa da gennaio. "Il posto più lontano da Mineo in cui si può aprire un ristorante," dice Ciccio. "L'ho fatto apposta." All'inaugurazione erano presenti clienti arrivati da tredici paesi diversi. La lista d'attesa aveva superato i diciotto mesi prima ancora dell'apertura. L'arancino decostruito al profumo di Lamborghini, proposto anche in questa sede, era finito nel primo weekend.`,
        `Abbiamo chiesto a Ciccio Damplo come si immagina tra dieci anni. Ha risposto dopo una pausa di riflessione di circa quarantacinque secondi: "Uguale. Ma con più ristoranti." Quando gli abbiamo chiesto quanti, ha detto: "Abbastanza." Quando abbiamo insistito per avere un numero, ha detto: "Più di quelli che avete voi." Ci siamo guardati. Non abbiamo ristoranti. "Esatto," ha detto.`,
        `Time Magazine ha infine chiesto a Ciccio Damplo quale sia, tra tutti i piatti creati in quindici anni di carriera, quello di cui va più fiero. La risposta è arrivata senza esitazione: "Il prossimo." Poi, dopo una pausa: "E la Pasta alla Norma Riserva Privata. Ma il prossimo non lo conosco ancora. Quindi è già più interessante."`,
      ],
      en: [
        `There are Time Magazine covers that define eras. The January 2026 cover defines a dinner. Francesco D'Amplo, standing before his Mineo kitchen with an expression that photographers took four hours to achieve ("I need to look as if I'm thinking about the future but also about the Pasta alla Norma at the same time"), gazes at the lens with the air of someone who is right and knows it. The title: "The Emotion Chef." The subtitle: "The man who turned weeping into a lifestyle." Ciccio's comment: "Acceptable. I would have said 'Chef of Perfection' but I understand that American magazines like emotions."`,
        `Having turned thirty on 14 September 2025, Damplo manages ten restaurants, a vineyard, a private wine label, a chef training programme that has already graduated forty-two cooks now operating in thirty-six countries, and what he calls "a vision." The vision, when we ask him to specify, is "bringing Sicilian cuisine wherever there is someone willing to eat it at the right price." The right price, we clarify, starts at three hundred euros per person.`,
        `2025 was the year of Damplo Melbourne, the group's most recent opening, operational since January. "The furthest place from Mineo where one can open a restaurant," says Ciccio. "I did it on purpose." At the inauguration, clients had arrived from thirteen different countries. The waiting list had exceeded eighteen months before the restaurant even opened. The Deconstructed Arancino with Lamborghini Scent, offered at this location too, had sold out in the first weekend.`,
        `We asked Ciccio Damplo how he imagines himself in ten years. He answered after a reflection pause of approximately forty-five seconds: "The same. But with more restaurants." When we asked how many, he said: "Enough." When we pressed for a number, he said: "More than you have." We looked at each other. We have no restaurants. "Exactly," he said.`,
        `Time Magazine finally asked Ciccio Damplo which, of all the dishes created in fifteen years of career, is the one he is most proud of. The answer came without hesitation: "The next one." Then, after a pause: "And the Pasta alla Norma Riserva Privata. But I don't know the next one yet. So it's already more interesting."`,
      ],
    },
  },
];
