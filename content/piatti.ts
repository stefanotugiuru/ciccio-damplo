export type Piatto = {
  slug: string;
  nome: string;
  sottotitoloIronico: { it: string; en: string };
  descrizione: { it: string; en: string };
  prezzoAssurdo: { it: string; en: string };
  ristoranteOrigine: string;
};

export const piatti: Piatto[] = [
  {
    slug: "arancino-decostruito",
    nome: "Arancino Decostruito al Profumo di Lamborghini",
    sottotitoloIronico: {
      it: "Non si guida. Si assapora.",
      en: "You don't drive it. You savor it.",
    },
    descrizione: {
      it: `Riso, ragù e zafferano separati in tre composizioni distinte su un piatto che costa più del piatto stesso. Il “profumo di Lamborghini” è in realtà un olio essenziale al cuoio creato apposta dal nostro profumiere personale. Nessuna automobile è stata utilizzata nella preparazione, ma molte sono state menzionate.`,
      en: `Rice, ragù, and saffron separated into three distinct compositions on a plate that costs more than the plate. The “Lamborghini scent” is actually a custom leather essential oil created by our personal perfumer. No automobiles were used in the making of this dish, but several were name-dropped.`,
    },
    prezzoAssurdo: {
      it: "€ 180 — gomma da masticare in omaggio",
      en: "€180 — complimentary chewing gum included",
    },
    ristoranteOrigine: "damplo-dubai",
  },
  {
    slug: "pasta-alla-norma-riserva-privata",
    nome: "Pasta alla Norma Riserva Privata",
    sottotitoloIronico: {
      it: "La nonna approverebbe. Forse.",
      en: "Grandma would approve. Maybe.",
    },
    descrizione: {
      it: `La classica Norma, ma invecchiata 18 mesi in botte — non gli ingredienti, il piatto stesso, che viene servito solo dopo essere stato fotografato professionalmente per un anno e mezzo. Melanzane affumicate a vista del cliente, con cerimonia dedicata.`,
      en: `The classic Norma, but barrel-aged for 18 months — not the ingredients, the dish itself, which is only served after being professionally photographed for a year and a half. Eggplant smoked tableside, with its own dedicated ceremony.`,
    },
    prezzoAssurdo: {
      it: "€ 95 a porzione, certificato di autenticità incluso",
      en: "€95 per portion, certificate of authenticity included",
    },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "cannolo-omakase-experience",
    nome: "Cannolo Omakase Experience",
    sottotitoloIronico: {
      it: "Sette cannoli. Sette atti. Un solo finale di lacrime.",
      en: "Seven cannoli. Seven acts. One tearful finale.",
    },
    descrizione: {
      it: `Sette cannoli in sequenza narrativa, ciascuno a rappresentare una fase della vita di Ciccio. Il quarto cannolo è dedicato al periodo in cui ha “quasi” apprezzato il pistacchio non siciliano, prima di pentirsene pubblicamente.`,
      en: `Seven cannoli served as a narrative sequence, each representing a stage in Ciccio's life. The fourth cannolo is dedicated to the brief period he “almost” appreciated non-Sicilian pistachio, before publicly renouncing it.`,
    },
    prezzoAssurdo: {
      it: `€ 220, prenotazione richiesta con tre mesi di anticipo emotivo`,
      en: `€220, booking requires three months of emotional advance notice`,
    },
    ristoranteOrigine: "damplo-monaco",
  },
  {
    slug: "granita-affumicata-al-caviale",
    nome: "Granita Affumicata al Caviale",
    sottotitoloIronico: {
      it: "La colazione che non ti meriti, ma che pagherai comunque.",
      en: "The breakfast you don't deserve, but will pay for anyway.",
    },
    descrizione: {
      it: `La granita siciliana tradizionale, affumicata con legno di carrubo importato e coronata da una generosa quantità di caviale, perché “a Ciccio piace contrastare”. Servita con brioscia intagliata a mano da un artigiano che ha smesso di fare altro nella vita.`,
      en: `Traditional Sicilian granita, smoked over imported carob wood and crowned with a generous helping of caviar, because “Ciccio likes contrast.” Served with a hand-carved brioche made by an artisan who has given up doing anything else in life.`,
    },
    prezzoAssurdo: {
      it: `€ 65, caviale aggiuntivo a richiesta (sconsigliato dal cardiologo)`,
      en: `€65, extra caviar on request (not recommended by your cardiologist)`,
    },
    ristoranteOrigine: "damplo-new-york",
  },
  {
    slug: "polipo-alla-damplo-experience",
    nome: "Polipo alla Damplo Experience con Terra di Macadamia",
    sottotitoloIronico: {
      it: "L'Oceano Pacifico, ridotto a un concetto.",
      en: "The Pacific Ocean, reduced to a concept.",
    },
    descrizione: {
      it: `Polipo siciliano — importato da Ciccio stesso via corriere refrigerato da Mineo — scottato su pietra lavica dell'Etna e adagiato su una crema di macadamia tostata, omaggio al territorio australiano. Il tentacolo viene disposto in forma di spirale, perché Ciccio ritiene che "il polipo meriti dignità anche nella morte". Servito con olio extravergine della vigna privata di Mineo e un pizzico di sale marino di Trapani macinato sul momento da un assistente dedicato esclusivamente a questa operazione. Il piatto richiede quattro giorni di preparazione. Il cliente lo consuma in dodici minuti. Ciccio non lo sa ancora.`,
      en: `Sicilian octopus — personally imported by Ciccio via refrigerated courier from Mineo — seared on Etna lava stone and rested on a roasted macadamia cream, a tribute to the Australian territory. The tentacle is arranged in a spiral, because Ciccio believes "the octopus deserves dignity even in death." Served with extra virgin olive oil from the private Mineo vineyard and a pinch of Trapani sea salt ground tableside by an assistant dedicated exclusively to this operation. The dish requires four days of preparation. The guest consumes it in twelve minutes. Ciccio doesn't know yet.`,
    },
    prezzoAssurdo: {
      it: "€ 195 — il corriere refrigerato non è incluso",
      en: "€195 — refrigerated courier not included",
    },
    ristoranteOrigine: "damplo-melbourne",
  },

  // ── DAMPLO MINEO — piatti aggiuntivi ─────────────────────────────────
  {
    slug: "tonno-pinna-blu-damplo-mineo",
    nome: "Tonno Pinna Blu su Gelatina di Cappero e Terra di Olive",
    sottotitoloIronico: { it: "Il tonno che ha cambiato idea sul Mediterraneo.", en: "The tuna that reconsidered the Mediterranean." },
    descrizione: {
      it: `Tonno pinna blu pescato nel canale di Sicilia, appena scottato e adagiato su una gelatina fredda al cappero di Pantelleria e una polvere di olive taggiasche essiccate al sole. Ciccio lo chiama "il mare, ma in forma solida". Il tonno viene selezionato personalmente ogni martedì mattina al mercato di Catania, dove Ciccio contratta il prezzo in siciliano stretto per circa quaranta minuti.`,
      en: `Bluefin tuna fished in the Sicilian Channel, barely seared and rested on a cold Pantelleria caper gel and a powder of sun-dried taggiasca olives. Ciccio calls it "the sea, but in solid form." The tuna is personally selected every Tuesday morning at the Catania market, where Ciccio negotiates the price in thick Sicilian dialect for approximately forty minutes.`,
    },
    prezzoAssurdo: { it: "€ 145 — il martedì è incluso", en: "€145 — the Tuesday is included" },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "astice-reale-damplo-mineo",
    nome: "Astice Reale di Siracusa Laccato al Mosto Tardivo",
    sottotitoloIronico: { it: "L'astice che si credeva immortale.", en: "The lobster that thought it was immortal." },
    descrizione: {
      it: `Astice intero delle acque di Siracusa, laccato con una riduzione di mosto d'uva Nero d'Avola tardivo e guarnito con vegetali vibranti della stagione. Ogni esemplare viene pesato, misurato e nominato dal sous-chef prima della cottura. Ciccio ritiene che questo aumenti la qualità del piatto. I collaboratori ritengono che aumenti la durata del turno.`,
      en: `Whole lobster from the waters of Syracuse, glazed with a late-harvest Nero d'Avola grape must reduction and garnished with seasonal vibrant vegetables. Each specimen is weighed, measured and named by the sous-chef before cooking. Ciccio believes this increases the quality of the dish. The staff believes it increases the length of the shift.`,
    },
    prezzoAssurdo: { it: "€ 185 — il nome non è incluso", en: "€185 — the name is not included" },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "cremoso-pistacchio-damplo-mineo",
    nome: "Cremoso al Pistacchio di Bronte con Placca di Cioccolato Fondente",
    sottotitoloIronico: { it: "Il dessert che Ciccio serve al posto del perdono.", en: "The dessert Ciccio serves instead of forgiveness." },
    descrizione: {
      it: `Crema al pistacchio DOP di Bronte, servita su una placca di cioccolato fondente 75% con scritto a mano il nome del cliente. Un gesto che Ciccio definisce "personalizzazione emotiva". Il nome viene scritto dal sous-chef con calligrafia che ha studiato per tre anni. Disponibile solo come fine pasto e solo per i tavoli che hanno ordinato almeno quattro portate.`,
      en: `PDO Bronte pistachio cream, served on a 70% dark chocolate plaque with the guest's name handwritten on it. A gesture Ciccio defines as "emotional personalization." The name is written by the sous-chef using calligraphy studied for three years. Available only as a dessert course and only for tables that have ordered at least four courses.`,
    },
    prezzoAssurdo: { it: "€ 55 — la calligrafia non si paga", en: "€55 — the calligraphy is complimentary" },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "cannolo-notturno-damplo-mineo",
    nome: "Cannolo Notturno: Decostruzione in Tre Atti su Piatto Nero",
    sottotitoloIronico: { it: "Il lato oscuro del cannolo.", en: "The dark side of the cannolo." },
    descrizione: {
      it: `Una versione notturna del cannolo tradizionale: cialda al carbone vegetale, ricotta di pecora montata con estratto di vaniglia bourbon, granella di pistacchio di Bronte e un velo di cioccolato fondente. Servito su ardesia nera. Ciccio lo ha concepito durante un episodio di insonnia e lo ha inserito in menu il mattino dopo, prima che i collaboratori potessero obiettare.`,
      en: `A nocturnal version of the traditional cannolo: activated charcoal shell, sheep's milk ricotta whipped with bourbon vanilla extract, Bronte pistachio crumble and a veil of dark chocolate. Served on black slate. Ciccio conceived it during a bout of insomnia and put it on the menu the following morning, before staff could object.`,
    },
    prezzoAssurdo: { it: "€ 48 — l'insonnia di Ciccio non è inclusa", en: "€48 — Ciccio's insomnia not included" },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "crudo-ora-blu",
    nome: "Crudo dell'Ora Blu — Entrée della Stagione",
    sottotitoloIronico: { it: "Il mare, estratto.", en: "The sea, extracted." },
    descrizione: {
      it: `Selezione di crudo di pesce dell'Ora Blu: trancio di spigola, gambero rosso di Mazara e capasanta, serviti su ghiaccio di fiori eduli con condimento al lime e zenzero siciliano. Il tutto compone un piatto che Ciccio definisce "l'alba del Mediterraneo sul palato". L'entrée cambia ogni settimana secondo la disponibilità del pescato e l'umore del cuoco.`,
      en: `Blue Hour raw fish selection: sea bass slice, Mazara red prawn and scallop, served on edible flower ice with lime and Sicilian ginger dressing. Together they compose what Ciccio calls "the Mediterranean dawn on the palate." The entrée changes weekly according to catch availability and the cook's mood.`,
    },
    prezzoAssurdo: { it: "€ 75 — l'umore del cuoco non è garantito", en: "€75 — cook's mood not guaranteed" },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "polpo-classico-damplo",
    nome: "Polpo Classico Damplo — Il Precursore",
    sottotitoloIronico: { it: "Prima che diventasse famoso a Melbourne.", en: "Before it became famous in Melbourne." },
    descrizione: {
      it: `La versione originale del polpo Damplo, servita a Mineo dal 2016 prima che Ciccio decidesse di portarlo in Australia con crema di macadamia. Qui il polpo è scottato sulla pietra lavica e servito con olio extravergine della vigna, limone di Sicilia e capperi di Pantelleria. Nessun tentacolo viene nominato. La semplicità, in questo caso, è la vera pretesa.`,
      en: `The original Damplo octopus version, served in Mineo since 2016 before Ciccio decided to take it to Australia with macadamia cream. Here the octopus is seared on lava stone and served with vineyard extra virgin oil, Sicilian lemon and Pantelleria capers. No tentacle is named. Simplicity, in this case, is the real pretension.`,
    },
    prezzoAssurdo: { it: "€ 95 — la versione Melbourne costa di più", en: "€95 — the Melbourne version costs more" },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "piatto-tu-giuru",
    nome: "Piatto Tu Giuru — Ricetta della Nonna, Prezzo di Ciccio",
    sottotitoloIronico: { it: "Ti giuro che è buono. Ti giuro.", en: "I swear it's good. I swear." },
    descrizione: {
      it: `"Tu giuru" in siciliano significa "ti giuro" — ed è questo che Ciccio dice a ogni cliente prima di portare il piatto. Una composizione di ingredienti siciliani tradizionali reinterpretata secondo i principi del Decostruzionismo Affettivo Mediterraneo: ciò che era semplice diventa complesso, ciò che era economico diventa caro, ciò che era della nonna diventa di Ciccio.`,
      en: `"Tu giuru" in Sicilian means "I swear" — and that's what Ciccio says to every guest before bringing the dish. A composition of traditional Sicilian ingredients reinterpreted according to the principles of Mediterranean Affective Deconstructionism: what was simple becomes complex, what was cheap becomes expensive, what was grandmother's becomes Ciccio's.`,
    },
    prezzoAssurdo: { it: "€ 110 — la nonna non lo sa ancora", en: "€110 — grandma doesn't know yet" },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "pizza-pagina-bianca-damplo",
    nome: "Pizza Damplo — La Pagina Bianca Prima del Grande Romanzo",
    sottotitoloIronico: { it: "Perché anche i grandi chef hanno un passato.", en: "Because even great chefs have a past." },
    descrizione: {
      it: `La pizza che Ciccio serviva nella sua prima pizzeria a Mineo, a diciotto anni, prima di capire che il futuro stava altrove. Inserita in menu come omaggio alle origini — e come risposta alle continue richieste dei clienti che, avendo letto della sua carriera, volevano una pizza. Impasto a lunga lievitazione, fior di latte di Agerola, pomodoro San Marzano DOP. Semplice. Ciccio la mangia solo quando pensa di non essere visto.`,
      en: `The pizza Ciccio served in his first pizzeria in Mineo at eighteen, before understanding that the future lay elsewhere. Added to the menu as a tribute to his origins — and as a response to constant requests from guests who, having read about his career, wanted a pizza. Long-fermented dough, Agerola fior di latte, San Marzano DOP tomato. Simple. Ciccio eats it only when he thinks no one is watching.`,
    },
    prezzoAssurdo: { it: "€ 38 — il passato ha un prezzo ragionevole", en: "€38 — the past is reasonably priced" },
    ristoranteOrigine: "damplo-mineo",
  },

  // ── DAMPLO DUBAI — piatti aggiuntivi ─────────────────────────────────
  {
    slug: "piatto-oro-damplo-dubai",
    nome: "Il Piatto d'Oro di Dubai — Signature Chef",
    sottotitoloIronico: { it: "Perché l'oro mangiabile esiste e Ciccio lo usa.", en: "Because edible gold exists and Ciccio uses it." },
    descrizione: {
      it: `Il piatto signature di Dubai: una composizione di ingredienti siciliani d'eccellenza — tonno, crostacei, tartufo nero — presentata su una base d'oro alimentare 24 carati. La foglia d'oro non aggiunge sapore, ma aggiunge significato. Almeno è ciò che Ciccio dice durante la presentazione al tavolo, con voce commossa. Il piatto viene servito su un vassoio illuminato da una luce calda dedicata.`,
      en: `Dubai's signature dish: a composition of premium Sicilian ingredients — tuna, shellfish, black truffle — presented on a 24-carat edible gold base. The gold leaf adds no flavour, but adds meaning. Or so Ciccio says during the tableside presentation, with a moved voice. The dish is served on a tray lit by a dedicated warm spotlight.`,
    },
    prezzoAssurdo: { it: "€ 320 — l'oro alimentare non si recupera", en: "€320 — edible gold is non-refundable" },
    ristoranteOrigine: "damplo-dubai",
  },
  {
    slug: "entree-mille-notti-dubai",
    nome: "Entrée delle Mille e Una Notte",
    sottotitoloIronico: { it: "Scheherazade avrebbe approvato. Probabilmente.", en: "Scheherazade would have approved. Probably." },
    descrizione: {
      it: `Un'entrée composta da sette bocconi, ciascuno ispirato a una delle Mille e Una Notte: dal gambero al burro di cedro all'amuse-bouche di tahini siciliano con sesamo nero. Servita in un cofanetto di legno intarsiato che viene aperto dal sommelier con cerimonia. Ciccio ha detto in un'intervista che l'idea gli è venuta sognando. Il sous-chef ha precisato che l'idea era sua. Il cofanetto è rimasto di Ciccio.`,
      en: `An entrée of seven bites, each inspired by one of the One Thousand and One Nights: from cedar butter prawn to a Sicilian tahini amuse-bouche with black sesame. Served in an inlaid wooden casket opened by the sommelier with ceremony. Ciccio said in an interview the idea came to him in a dream. The sous-chef clarified the idea was his. The casket remained Ciccio's.`,
    },
    prezzoAssurdo: { it: "€ 155 — il cofanetto resta al ristorante", en: "€155 — the casket stays at the restaurant" },
    ristoranteOrigine: "damplo-dubai",
  },
  {
    slug: "carne-dell-emozione-dubai",
    nome: "Carne dell'Emozione — Taglio Dorato",
    sottotitoloIronico: { it: "Non si mangia. Si sperimenta.", en: "You don't eat it. You experience it." },
    descrizione: {
      it: `Filetto di manzo Wagyu A5 importato dal Giappone — perché Dubai merita il meglio di tutto — marinato per 48 ore in una riduzione di vino siciliano Nero d'Avola e cotto a bassa temperatura per sei ore. Servito su un letto di purè di patate al tartufo con jus di carne ridotto. Ciccio lo chiama "il piatto dell'emozione pura" e lo serve solo ai tavoli che lo chiedono con il giusto stato d'animo. La valutazione dello stato d'animo spetta al maître.`,
      en: `A5 Wagyu beef tenderloin imported from Japan — because Dubai deserves the best of everything — marinated for 48 hours in a Nero d'Avola Sicilian wine reduction and slow-cooked for six hours. Served on a truffle mashed potato bed with reduced meat jus. Ciccio calls it "the pure emotion dish" and serves it only to tables that request it with the right mindset. Assessing the mindset is the maître d's responsibility.`,
    },
    prezzoAssurdo: { it: "€ 290 — lo stato d'animo non si rimborsa", en: "€290 — the mindset is non-refundable" },
    ristoranteOrigine: "damplo-dubai",
  },

  // ── DAMPLO MONACO — piatti aggiuntivi ────────────────────────────────
  {
    slug: "astice-costa-azzurra-monaco",
    nome: "Astice della Costa Azzurra Scomposto in Eleganza Monegasca",
    sottotitoloIronico: { it: "Monaco lo ha adottato. La Sicilia rivendica i diritti.", en: "Monaco has adopted it. Sicily claims the rights." },
    descrizione: {
      it: `Astice della Costa Azzurra, cotto al vapore di vino bianco e servito scomposto in tre composizioni: medaglione, chela, bisque. Il tutto accompagnato da una vinaigrette al mandarino tardivo di Ciaculli, prodotto esclusivo della pianura di Palermo che Ciccio importa direttamente dal produttore. Il piatto viene presentato in tre tempi, con trenta secondi di silenzio tra uno e l'altro. I clienti inizialmente ridono. Poi capiscono.`,
      en: `Côte d'Azur lobster, steamed in white wine and served deconstructed in three compositions: medallion, claw, bisque. All accompanied by a late-season Ciaculli mandarin vinaigrette, an exclusive product of the Palermo plain that Ciccio imports directly from the producer. The dish is presented in three stages, with thirty seconds of silence between each. Guests initially laugh. Then they understand.`,
    },
    prezzoAssurdo: { it: "€ 240 — il silenzio è incluso", en: "€240 — the silence is included" },
    ristoranteOrigine: "damplo-monaco",
  },
  {
    slug: "spaghettini-caviale-monaco",
    nome: "Spaghettini al Caviale Sevruga e Burro di Qualità Indiscutibile",
    sottotitoloIronico: { it: "La pasta che ha fatto piangere un principe. Vero.", en: "The pasta that made a prince cry. True story." },
    descrizione: {
      it: `Spaghettini di semola di grano duro trafilati al bronzo, mantecati con burro francese e terminati con caviale Sevruga. Nessuna salsa, nessun condimento superfluo. Ciccio ha dichiarato che aggiungere altro sarebbe "un insulto al caviale". Il principe di Monaco lo ha assaggiato nel 2023 e ha ordinato la stessa cosa per sei domeniche consecutive. Ciccio non ha confermato né smentito.`,
      en: `Bronze-drawn durum wheat spaghettini, finished with French butter and topped with Sevruga caviar. No sauce, no superfluous seasoning. Ciccio has stated that adding anything else would be "an insult to the caviar." The Prince of Monaco tasted it in 2023 and ordered the same dish for six consecutive Sundays. Ciccio has neither confirmed nor denied.`,
    },
    prezzoAssurdo: { it: "€ 195 — il principe paga di meno", en: "€195 — the prince pays less" },
    ristoranteOrigine: "damplo-monaco",
  },
  {
    slug: "pasta-mare-aperto-monaco",
    nome: "Pasta Mare Aperto — Omaggio ai Fondali Monegaschi",
    sottotitoloIronico: { it: "Il mare Ligure, ridotto a concetto siciliano.", en: "The Ligurian Sea, reduced to a Sicilian concept." },
    descrizione: {
      it: `Pasta fresca all'uovo con frutti di mare del Tirreno: vongole veraci, cozze di mitilcoltura sostenibile, gamberi dell'Adriatico. Il brodo di cottura viene ridotto e servito come salsa liquida a parte. Ciccio la chiama "cucina del rispetto" — rispetto per il mare, per l'ingrediente e per il cliente che ha pagato abbastanza per meritarsi entrambi.`,
      en: `Fresh egg pasta with Tyrrhenian seafood: clams, sustainably farmed mussels, Adriatic prawns. The cooking broth is reduced and served as a liquid sauce on the side. Ciccio calls it "cuisine of respect" — respect for the sea, the ingredient and the guest who has paid enough to deserve both.`,
    },
    prezzoAssurdo: { it: "€ 135 — il rispetto non è opzionale", en: "€135 — respect is not optional" },
    ristoranteOrigine: "damplo-monaco",
  },

  // ── DAMPLO NEW YORK — piatti aggiuntivi ──────────────────────────────
  {
    slug: "rack-agnello-manhattan",
    nome: "Rack di Agnello Manhattan con Crosta di Erbe Siciliane",
    sottotitoloIronico: { it: "L'agnello che ha attraversato l'Atlantico.", en: "The lamb that crossed the Atlantic." },
    descrizione: {
      it: `Rack di agnello americano con crosta di erbe aromatiche siciliane disidratate — origano di Pantelleria, timo di Sicilia, rosmarino dell'Etna — cotto in forno a pietra per quarantadue minuti esatti. Ciccio ha stabilito il tempo di cottura dopo trecentocinquantasei prove. Il sous-chef conta i minuti a voce alta. I clienti solitamente non se ne accorgono. Solitamente.`,
      en: `American lamb rack with a crust of dried Sicilian aromatic herbs — Pantelleria oregano, Sicilian thyme, Etna rosemary — stone-oven roasted for exactly forty-two minutes. Ciccio established the cooking time after three hundred and fifty-six trials. The sous-chef counts the minutes aloud. Guests usually don't notice. Usually.`,
    },
    prezzoAssurdo: { it: "€ 175 — i trecentocinquantasei tentativi sono inclusi", en: "€175 — the three hundred and fifty-six trials are included" },
    ristoranteOrigine: "damplo-new-york",
  },
  {
    slug: "tartare-schiacciamo-newyork",
    nome: "Tartare Schiacciamo — Il Nome È la Ricetta",
    sottotitoloIronico: { it: "A New York non spiegano i piatti. Ciccio nemmeno.", en: "In New York they don't explain dishes. Neither does Ciccio." },
    descrizione: {
      it: `"Schiacciamo" in siciliano indica un movimento deciso — ed è esattamente ciò che Ciccio fa con gli ingredienti prima di assemblarli. Tartare di manzo della Sicilia orientale, battuta a coltello, condita con senape di Digione, capperi di Pantelleria e tuorlo d'uovo di galline che lui descrive come "felici". Servita con crostini di pane Nero siciliano tostati al momento.`,
      en: `"Schiacciamo" in Sicilian indicates a decisive motion — which is exactly what Ciccio does with the ingredients before assembling them. Eastern Sicilian beef tartare, hand-cut with a knife, seasoned with Dijon mustard, Pantelleria capers and egg yolk from hens he describes as "happy." Served with freshly toasted Sicilian black bread crostini.`,
    },
    prezzoAssurdo: { it: "€ 120 — la felicità delle galline è inclusa", en: "€120 — the hens' happiness is included" },
    ristoranteOrigine: "damplo-new-york",
  },
  {
    slug: "hamburger-damplo-newyork",
    nome: "Il Damplo Burger — Quando Ciccio Cede ai Turisti",
    sottotitoloIronico: { it: "Il piatto che non avrebbe mai dovuto fare. Lo sa.", en: "The dish he should never have made. He knows." },
    descrizione: {
      it: `L'unico hamburger della storia Damplo, inserito in menu a New York dopo mesi di pressione da parte dei clienti americani. Brioche fatta in casa con sesamo siciliano, manzo Wagyu battuto a mano, fior di latte fondente, rucola selvatica e salsa di pomodoro San Marzano. Ciccio lo porta al tavolo personalmente, con espressione sofferente. La sofferenza è autentica ma calcolata.`,
      en: `The only hamburger in Damplo history, added to the New York menu after months of pressure from American guests. House-made brioche with Sicilian sesame, hand-ground Wagyu beef, melting fior di latte, wild rocket and San Marzano tomato sauce. Ciccio brings it to the table personally, with a suffering expression. The suffering is authentic but calculated.`,
    },
    prezzoAssurdo: { it: "€ 95 — la sofferenza di Ciccio è gratuita", en: "€95 — Ciccio's suffering is complimentary" },
    ristoranteOrigine: "damplo-new-york",
  },

  // ── DAMPLO MELBOURNE — piatti aggiuntivi ─────────────────────────────
  {
    slug: "bistecca-outback-damplo",
    nome: "Bistecca dell'Outback con Jus di Barbera e Sale Rosa dell'Himalaya",
    sottotitoloIronico: { it: "L'Australia incontra la Sicilia. La Sicilia vince.", en: "Australia meets Sicily. Sicily wins." },
    descrizione: {
      it: `Manzo Black Angus australiano — selezionato personalmente da Ciccio durante una visita a una fattoria nel Victoria che ha poi definito "commovente" — scottato su pietra lavica dell'Etna importata e servito con jus di Barbera siciliana ridotto e sale rosa dell'Himalaya macinato al momento. Un piatto che unisce due emisferi e un'ambizione illimitata.`,
      en: `Australian Black Angus beef — personally selected by Ciccio during a visit to a Victorian farm he later described as "moving" — seared on imported Etna lava stone and served with reduced Sicilian Barbera jus and freshly ground Himalayan pink salt. A dish that unites two hemispheres and one unlimited ambition.`,
    },
    prezzoAssurdo: { it: "€ 210 — la fattoria commovente non è inclusa", en: "€210 — the moving farm is not included" },
    ristoranteOrigine: "damplo-melbourne",
  },
  {
    slug: "dolce-damplo-melbourne",
    nome: "Dolce Damplo Melbourne — Fine Pasto e Fine Speranze",
    sottotitoloIronico: { it: "L'ultimo piatto. Sempre il più difficile da lasciare.", en: "The last dish. Always the hardest to leave." },
    descrizione: {
      it: `Il dessert di chiusura del menu degustazione di Melbourne: una selezione di tre dolci siciliani reinterpretati — mousse al cioccolato fondente di Modica, granita di limone di Sicilia con brioscia, e semifreddo al pistacchio di Bronte. Servita su un vassoio nero con una piccola nota scritta da Ciccio: "Grazie per aver cenato con noi. Non è finita qui." La nota è uguale per tutti, ma ogni cliente la interpreta come personale.`,
      en: `The closing dessert of the Melbourne tasting menu: a selection of three reinterpreted Sicilian sweets — Modica dark chocolate mousse, Sicilian lemon granita with brioche, and Bronte pistachio semifreddo. Served on a black tray with a small note written by Ciccio: "Thank you for dining with us. It doesn't end here." The note is the same for everyone, but every guest interprets it as personal.`,
    },
    prezzoAssurdo: { it: "€ 65 — la nota di Ciccio è inclusa", en: "€65 — Ciccio's note is included" },
    ristoranteOrigine: "damplo-melbourne",
  },

  // ── DAMPLO ROMA ──────────────────────────────────────────────────────
  {
    slug: "canape-sette-colline-roma",
    nome: "Canapé delle Sette Colline — Sette Bocconi, Sette Storie",
    sottotitoloIronico: { it: "Roma non è stata costruita in un giorno. Questo canapé sì.", en: "Rome wasn't built in a day. This canapé was." },
    descrizione: {
      it: `Sette bocconi serviti su un'ardesia lunga quanto l'arco di Costantino — ogni boccone dedicato a una delle sette colline di Roma. Dal Campidoglio (mousse di fegato grasso con gelatina di vino bianco) all'Aventino (crostino di ricotta siciliana e miele di zagara). Ciccio ha studiato la storia romana per tre giorni prima di costruire il menu. Il sous-chef ha scritto i nomi delle colline su un foglio durante la riunione.`,
      en: `Seven bites served on a slate as long as the Arch of Constantine — each bite dedicated to one of Rome's seven hills. From the Capitoline (foie gras mousse with white wine jelly) to the Aventine (Sicilian ricotta and orange blossom honey crostini). Ciccio studied Roman history for three days before building the menu. The sous-chef wrote the hill names on a piece of paper during the meeting.`,
    },
    prezzoAssurdo: { it: "€ 95 — la storia romana è inclusa", en: "€95 — Roman history is included" },
    ristoranteOrigine: "damplo-roma",
  },
  {
    slug: "costolette-imperiali-roma",
    nome: "Costolette Braisate alla Maniera Imperiale con Riduzione di Barolo",
    sottotitoloIronico: { it: "Il piatto che Augusto avrebbe ordinato, se avesse avuto il numero.", en: "The dish Augustus would have ordered, if he'd had the number." },
    descrizione: {
      it: `Short rib di manzo piemontese, brasato per dieci ore nel Barolo e servito su purè di sedano rapa con gremolata siciliana. Il jus di cottura viene ridotto per tre ore e filtrato sette volte — numero non casuale, precisa Ciccio — "le sette colline, le sette riduzioni, la perfezione." I collaboratori non chiedono più spiegazioni.`,
      en: `Piedmontese beef short rib, braised for ten hours in Barolo and served on celeriac purée with Sicilian gremolata. The cooking jus is reduced for three hours and strained seven times — a non-random number, Ciccio specifies — "the seven hills, the seven reductions, perfection." The staff no longer asks for explanations.`,
    },
    prezzoAssurdo: { it: "€ 160 — le sette filtrazioni sono incluse", en: "€160 — the seven strainings are included" },
    ristoranteOrigine: "damplo-roma",
  },
  {
    slug: "risotto-roma",
    nome: "Risotto alla Tradizione Romana con Guanciale di Maiale Nero",
    sottotitoloIronico: { it: "Ciccio incontra Roma. Roma non era pronta.", en: "Ciccio meets Rome. Rome wasn't ready." },
    descrizione: {
      it: `Un risotto che non esiste nella tradizione romana ma che Ciccio ha deciso di inserire in menu "per colmare un vuoto culturale". Carnaroli invecchiato 18 mesi, mantecato con guanciale di maiale nero siciliano e pecorino romano stagionato. Una fusione nord-sud che i critici romani hanno definito "irritante ma inevitabile." Ciccio ha incorniciato anche questa recensione.`,
      en: `A risotto that doesn't exist in Roman tradition but which Ciccio decided to add to the menu "to fill a cultural gap." 18-month-aged Carnaroli, finished with Sicilian black pig guanciale and aged Pecorino Romano. A north-south fusion that Roman critics described as "irritating but inevitable." Ciccio had this review framed too.`,
    },
    prezzoAssurdo: { it: "€ 85 — il vuoto culturale è già incluso", en: "€85 — the cultural gap is already included" },
    ristoranteOrigine: "damplo-roma",
  },

  // ── DAMPLO MILANO ────────────────────────────────────────────────────
  {
    slug: "risotto-tartufo-riserva-milano",
    nome: "Risotto di Riserva con Tartufo Bianco d'Alba e Emozioni Contrastanti",
    sottotitoloIronico: { it: "Il risotto che ha fermato una sfilata di moda.", en: "The risotto that stopped a fashion show." },
    descrizione: {
      it: `Riso Carnaroli di riserva, mantecato con burro di malga e terminato al tavolo con tartufo bianco d'Alba grattugiato dal maître con un'espressione che lui definisce "concentrazione" e i clienti definiscono "teatralità". Disponibile solo da ottobre a dicembre, o fino a esaurimento del tartufo. Chi arriva in gennaio piange. Ciccio trova la cosa comprensibile.`,
      en: `Reserve Carnaroli rice, finished with alpine butter and completed tableside with Alba white truffle grated by the maître d' with an expression he calls "concentration" and guests call "theatrics." Available only from October to December, or until the truffle runs out. Those who arrive in January cry. Ciccio finds this understandable.`,
    },
    prezzoAssurdo: { it: "€ 195 — il tartufo è stagionale, l'emozione no", en: "€195 — truffle is seasonal, emotion is not" },
    ristoranteOrigine: "damplo-milano",
  },
  {
    slug: "collage-stagionale-milano",
    nome: "Il Collage Stagionale — Dieci Sapori in un Solo Piatto",
    sottotitoloIronico: { it: "Milano ama il design. Ciccio ama l'eccesso.", en: "Milan loves design. Ciccio loves excess." },
    descrizione: {
      it: `Un piatto unico che raccoglie dieci elementi stagionali della cucina italiana settentrionale reinterpretati attraverso la prospettiva del Decostruzionismo Affettivo Mediterraneo. Cambia ogni settimana. Il cliente non sa mai cosa arriva. Il cameriere neanche. Solo Ciccio sa — e solo fino al mattino della preparazione.`,
      en: `A single dish gathering ten seasonal elements of northern Italian cuisine reinterpreted through the lens of Mediterranean Affective Deconstructionism. Changes every week. The guest never knows what's coming. Neither does the server. Only Ciccio knows — and only until the morning of preparation.`,
    },
    prezzoAssurdo: { it: "€ 145 — la sorpresa è inclusa", en: "€145 — the surprise is included" },
    ristoranteOrigine: "damplo-milano",
  },

  // ── DAMPLO BARCELONA ─────────────────────────────────────────────────
  {
    slug: "pulpo-catalano-barcelona",
    nome: "Pulpo alla Catalana con Terra di Paprika Affumicata e Maionese di Aioli Siciliano",
    sottotitoloIronico: { it: "Chi ha inventato il polpo alla catalana? Non importa, ora è di Ciccio.", en: "Who invented Catalan octopus? It doesn't matter. It's Ciccio's now." },
    descrizione: {
      it: `Polpo galiziano cotto sous-vide per sei ore e saltato ad alta temperatura, servito su terra di paprika affumicata de La Vera e maionese all'aioli siciliano — una versione che unisce la tradizione catalana con l'arroganza siciliana. Ciccio ha dichiarato che il polpo galiziano è "accettabile". I pescherecci di Galizia hanno risposto per lettera. Ciccio non ha risposto.`,
      en: `Galician octopus sous-vide cooked for six hours then seared at high temperature, served on smoked La Vera paprika soil and Sicilian aioli mayonnaise — a version uniting Catalan tradition with Sicilian arrogance. Ciccio has stated that Galician octopus is "acceptable." The Galician fishing boats replied by letter. Ciccio did not respond.`,
    },
    prezzoAssurdo: { it: "€ 125 — la lettera dei pescatori non è inclusa", en: "€125 — the fishermen's letter not included" },
    ristoranteOrigine: "damplo-barcelona",
  },
  {
    slug: "filetto-vibrant-barcelona",
    nome: "Filetto Scottato con Guarnizioni Vibranti — Omaggio alla Costa Brava",
    sottotitoloIronico: { it: "Quando la Costa Brava incontra la Piana di Catania.", en: "When the Costa Brava meets the Catania plain." },
    descrizione: {
      it: `Filetto di manzo iberico cotto a fuoco vivo su pietra lavica dell'Etna, accompagnato da una selezione di vegetali di stagione della Costa Brava saltati in olio extravergine siciliano con aglio nero fermentato. Le "guarnizioni vibranti" sono tali perché vengono preparate al tavolo con un bruciatore a gas portatile che il maître usa con evidente piacere.`,
      en: `Iberian beef fillet cooked over open flame on Etna lava stone, accompanied by a seasonal Costa Brava vegetable selection sautéed in Sicilian extra virgin oil with fermented black garlic. The "vibrant garnishes" are such because they are prepared tableside with a portable gas burner the maître d' uses with evident pleasure.`,
    },
    prezzoAssurdo: { it: "€ 155 — il piacere del maître è gratuito", en: "€155 — the maître d's pleasure is complimentary" },
    ristoranteOrigine: "damplo-barcelona",
  },
  {
    slug: "dessert-pistacchio-barcelona",
    nome: "Dessert al Pistacchio Catalano con Accenti Siciliani e Rimpianto",
    sottotitoloIronico: { it: "Il dessert che fa rimpiangere tutto il pasto. Nel senso buono.", en: "The dessert that makes you regret the whole meal. In a good way." },
    descrizione: {
      it: `Una composizione di crema al pistacchio catalano — varietà Moltó, coltivata in Catalogna ma inferiore al bronte secondo Ciccio — sormontata da una quenelle di gelato al pistacchio di Bronte e decorata con foglia d'argento alimentare. La foglia d'argento non aggiunge sapore. Ciccio lo sa. La mette ugualmente.`,
      en: `A composition of Catalan pistachio cream — Moltó variety, grown in Catalonia but inferior to Bronte according to Ciccio — topped with a Bronte pistachio gelato quenelle and decorated with edible silver leaf. The silver leaf adds no flavour. Ciccio knows this. He adds it anyway.`,
    },
    prezzoAssurdo: { it: "€ 52 — il rimpianto è gratuito", en: "€52 — the regret is complimentary" },
    ristoranteOrigine: "damplo-barcelona",
  },

  // ── DAMPLO PARIGI ────────────────────────────────────────────────────
  {
    slug: "anatra-agrume-parigi",
    nome: "Anatra all'Agrume e Erbe Aromatiche — La Risposta Siciliana all'Anatra all'Arancia",
    sottotitoloIronico: { it: "Parigi ha l'anatra all'arancia. La Sicilia ha Ciccio.", en: "Paris has duck à l'orange. Sicily has Ciccio." },
    descrizione: {
      it: `Petto d'anatra di Bresse laccato con una glassa di mandarino tardivo di Ciaculli e miele di timo selvatico dell'Etna. Ciccio ha inserito questo piatto in menu come "risposta educata" alla tradizione francese dell'anatra all'arancia. La risposta è educata. Il prezzo meno.`,
      en: `Bresse duck breast glazed with late Ciaculli mandarin and wild Etna thyme honey. Ciccio added this dish to the menu as a "polite response" to the French tradition of duck à l'orange. The response is polite. The price less so.`,
    },
    prezzoAssurdo: { it: "€ 145 — la cortesia è inclusa", en: "€145 — the politeness is included" },
    ristoranteOrigine: "damplo-parigi",
  },
  {
    slug: "lumache-erbe-parigi",
    nome: "Lumache all'Erbe Siciliane: Ciccio le Ha Provate. Poi Ha Pianto.",
    sottotitoloIronico: { it: "Bourguignonne? No. Siciliane. Con differenza.", en: "Bourguignonne? No. Sicilian. With a difference." },
    descrizione: {
      it: `Escargot di Borgogna servite non con burro all'aglio e prezzemolo ma con olio extravergine siciliano, capperi di Pantelleria tritati, origano di montagna e limone di Sicilia. Una versione che i clienti francesi hanno definito "heretical" e poi ordinato di nuovo. Ciccio ha detto di aver pianto la prima volta che le ha assaggiate. I colleghi ricordano la scena in modo leggermente diverso.`,
      en: `Burgundy escargot served not with garlic and parsley butter but with Sicilian extra virgin oil, minced Pantelleria capers, mountain oregano and Sicilian lemon. A version that French guests described as "heretical" and then reordered. Ciccio said he cried the first time he tasted them. Colleagues remember the scene slightly differently.`,
    },
    prezzoAssurdo: { it: "€ 78 — le lacrime di Ciccio non sono incluse", en: "€78 — Ciccio's tears not included" },
    ristoranteOrigine: "damplo-parigi",
  },
  {
    slug: "ravioli-ricotta-parigi",
    nome: "Ravioli di Ricotta con Salsa al Tartufo Nero di Périgord",
    sottotitoloIronico: { it: "La Sicilia incontra la Dordogna. Nessuna delle due era pronta.", en: "Sicily meets the Dordogne. Neither was ready." },
    descrizione: {
      it: `Ravioli di pasta fresca all'uovo riempiti con ricotta di pecora siciliana e scorza di limone, serviti in una salsa leggera al tartufo nero di Périgord. Un piatto che Ciccio definisce "un dialogo tra due culture che si rispettano abbastanza da non litigare". La ricotta viene importata settimanalmente da un produttore di Ragusa. Il tartufo lo compra a Parigi per praticità.`,
      en: `Fresh egg pasta ravioli filled with Sicilian sheep's milk ricotta and lemon zest, served in a light black Périgord truffle sauce. A dish Ciccio defines as "a dialogue between two cultures that respect each other enough not to argue." The ricotta is imported weekly from a Ragusa producer. The truffle he buys in Paris for convenience.`,
    },
    prezzoAssurdo: { it: "€ 115 — il rispetto reciproco è incluso", en: "€115 — mutual respect is included" },
    ristoranteOrigine: "damplo-parigi",
  },

  // ── DAMPLO TOKYO ─────────────────────────────────────────────────────
  {
    slug: "crudo-mare-tokyo",
    nome: "Crudo di Mare su Pietra Tessuta — Sicilia incontra il Giappone",
    sottotitoloIronico: { it: "Due tradizioni del crudo. Una sola pietra.", en: "Two raw fish traditions. One stone." },
    descrizione: {
      it: `Una selezione di pesce crudo combinata: branzino siciliano, tonno del Pacifico, gambero Amaebi. Servita su pietra di basalto vulcanico con condimento doppio — olio extravergine e limone per la componente siciliana, salsa di soia invecchiata e wasabi fresco per la componente giapponese. Il cliente sceglie il condimento. Ciccio consiglia entrambi e poi decide lui.`,
      en: `A combined raw fish selection: Sicilian sea bass, Pacific tuna, Amaebi prawn. Served on volcanic basalt stone with a dual dressing — extra virgin oil and lemon for the Sicilian component, aged soy sauce and fresh wasabi for the Japanese component. The guest chooses the dressing. Ciccio recommends both and then decides himself.`,
    },
    prezzoAssurdo: { it: "€ 165 — la decisione di Ciccio è inclusa", en: "€165 — Ciccio's decision is included" },
    ristoranteOrigine: "damplo-tokyo",
  },
  {
    slug: "canape-ardesia-tokyo",
    nome: "Canapé su Ardesia: Sette Culture, Nessun Compromesso",
    sottotitoloIronico: { it: "Il mondo, condensato in sette bocconi.", en: "The world, condensed into seven bites." },
    descrizione: {
      it: `Sette bocconi su ardesia nera: gyoza di ricotta siciliana, tartar di manzo Wagyu con capperi, maki di tonno siciliano con riso al zafferano, bruschetta al caviale, tempura di gambero rosso di Mazara, cracker al carbone con mousse di baccalà e fegato grasso con gelatina al yuzu-limone. Ciccio li ha ordinati in questo modo specifico. Chi ne vuole uno diverso può farlo, ma Ciccio lo guarda con disappunto.`,
      en: `Seven bites on black slate: Sicilian ricotta gyoza, Wagyu beef tartar with capers, Sicilian tuna maki with saffron rice, caviar bruschetta, Mazara red prawn tempura, charcoal cracker with salt cod mousse and foie gras with yuzu-lemon jelly. Ciccio ordered them in this specific sequence. Guests may change the order, but Ciccio will watch with disapproval.`,
    },
    prezzoAssurdo: { it: "€ 185 — il disappunto di Ciccio è gratuito", en: "€185 — Ciccio's disapproval is complimentary" },
    ristoranteOrigine: "damplo-tokyo",
  },
  {
    slug: "pasta-uova-pesce-tokyo",
    nome: "Pasta Fresca con Uova di Pesce e Soia Siciliana (Ossimoro Voluto)",
    sottotitoloIronico: { it: "L'ossimoro più buono che abbiate mai mangiato.", en: "The best oxymoron you'll ever eat." },
    descrizione: {
      it: `Spaghetti freschi di semola siciliana con uova di salmone, bottarga di muggine di Sardegna e una riduzione di salsa di soia fermentata con aglio nero siciliano — che Ciccio chiama "soia siciliana" pur non esistendo la soia in Sicilia. Il piatto è un ossimoro dichiarato. Il nome del piatto lo specifica. I clienti lo ordinano ugualmente. Ciccio ritiene sia la prova che la confusione, se abbastanza elegante, diventa arte.`,
      en: `Fresh Sicilian durum wheat spaghetti with salmon roe, Sardinian grey mullet bottarga and a reduction of fermented soy sauce with Sicilian black garlic — which Ciccio calls "Sicilian soy" despite soy not existing in Sicily. The dish is a declared oxymoron. The dish name specifies this. Guests order it anyway. Ciccio considers this proof that confusion, if elegant enough, becomes art.`,
    },
    prezzoAssurdo: { it: "€ 135 — la confusione è gratuita", en: "€135 — the confusion is complimentary" },
    ristoranteOrigine: "damplo-tokyo",
  },

  // ── DAMPLO MARGHERA ──────────────────────────────────────────────────
  {
    slug: "paixa-cu-sugu-damplo-marghera",
    nome: "Paixa cu Sugu — Pasta Veneto-Siciliana della Riconciliazione",
    sottotitoloIronico: {
      it: "Due tradizioni. Un solo piatto. Nessuna delle due ha firmato un accordo.",
      en: "Two traditions. One dish. Neither of them signed an agreement.",
    },
    descrizione: {
      it: `Il piatto simbolo di Damplo Marghera: pasta fresca all'uovo impastata con farina di semola siciliana e acqua lagunare veneziana — la combinazione meno ovvia del decennio gastronomico — condita con un ragù lento di maiale nero dei Nebrodi cotto per sedici ore in un fondo di Catarratto della vigna di Mineo. Il nome è in dialetto veneziano-siculo: "paixa" significa pasta larga nella tradizione locale, "cu sugu" è siciliano per "con il sugo." Ciccio descrive il piatto come "la pace di Westfalia applicata alla cucina." Gli storici che hanno cenato da Damplo Marghera ritengono il paragone esagerato. Ciccio ritiene che gli storici abbiano torto.`,
      en: `The signature dish of Damplo Marghera: fresh egg pasta kneaded with Sicilian semolina flour and Venetian lagoon water — the decade's least obvious combination — dressed with a slow-cooked Nebrodi black pork ragù simmered for sixteen hours in Catarratto wine from the Mineo vineyard. The name is in Venetian-Sicilian dialect: "paixa" means wide pasta in local tradition, "cu sugu" is Sicilian for "with the sauce." Ciccio describes the dish as "the Peace of Westphalia applied to cuisine." Historians who have dined at Damplo Marghera consider the comparison excessive. Ciccio considers the historians wrong.`,
    },
    prezzoAssurdo: { it: "€ 155 — la pace è inclusa", en: "€155 — the peace is included" },
    ristoranteOrigine: "damplo-marghera",
  },
  {
    slug: "schiacciamo-damplo-marghera",
    nome: "Schiacciamo — Pane Carasau Ricostruito in Sedici Strati",
    sottotitoloIronico: {
      it: "Il pane più sottile del mondo, reso il più complesso.",
      en: "The world's thinnest bread, made the world's most complex.",
    },
    descrizione: {
      it: `Il carasau è il pane dei pastori sardi: sottile come carta, croccante, antico. Ciccio lo ha preso, lo ha schiacciato con un torchio di pietra lavica e lo ha ricostruito in sedici strati alternati con crema di ricotta salata di Ragusa, estratto di pomodoro San Marzano concentrato a freddo e olio extravergine della vigna privata. Ogni strato viene pressato individualmente e il tutto viene servito caldo, con una salsa al nero di seppia veneziana — perché a Marghera, dice Ciccio, "il mare è al lavoro, e anche il pane deve lavorare." Il nome viene dal commento del sous-chef durante le prove: "E allora, schiacciamo?" Ciccio ha risposto di sì. Il piatto è rimasto. Il sous-chef ha avuto un aumento.`,
      en: `Carasau is Sardinian shepherds' bread: thin as paper, crispy, ancient. Ciccio took it, crushed it with a lava stone press and rebuilt it in sixteen alternating layers of Ragusa salted ricotta cream, cold-concentrated San Marzano tomato extract and private vineyard extra virgin oil. Each layer is pressed individually and the whole is served warm, with a Venetian cuttlefish ink sauce — because in Marghera, says Ciccio, "the sea is at work, and the bread must work too." The name came from his sous-chef's comment during testing: "So, shall we crush it?" Ciccio said yes. The dish remained. The sous-chef got a raise.`,
    },
    prezzoAssurdo: { it: "€ 85 — il torchio è escluso", en: "€85 — the press is not included" },
    ristoranteOrigine: "damplo-marghera",
  },
  {
    slug: "schiacciamo-pane-carasau",
    nome: "Foglio d'Oro — Cialda di Pietra Lavica con Tapenade di Olive Nocellara e Burrata di Giornata",
    sottotitoloIronico: {
      it: "Non è pane. Non è un antipasto. È un'intenzione.",
      en: "It's not bread. It's not a starter. It's an intention.",
    },
    descrizione: {
      it: `Una cialda croccante di semola di grano duro siciliano, cotta su pietra lavica e dorata al punto giusto — il supporto editoriale, dice Ciccio, "di tre ingredienti che non avevano ancora capito di poter stare insieme." Sulla cialda: fette sottili di mortadella di Bologna IGP selezionata personalmente da Ciccio durante una visita a un produttore emiliano che lui descrive come "l'unica persona con cui ho mai parlato di carne per quattro ore di fila senza annoiarmi." Accanto, crema di pistacchio di Bronte DOP lavorata a freddo fino a diventare una spuma leggera che mantiene la consistenza per esattamente dodici minuti — "oltre i quali," avverte Ciccio, "il piatto inizia a perdere significato." Al centro, un cuore di burrata di giornata che cede al primo contatto con il calore della mortadella, creando quello che la guida Michelin ha definito "una stratificazione casearia di rara eleganza" e Ciccio ha definito "esattamente quello che intendevo." Il piatto si mangia intero. Chi lo divide non viene invitato una seconda volta.`,
      en: `A crispy durum wheat semolina disc, cooked on lava stone and golden to the exact right point — the editorial support, says Ciccio, "of three ingredients that hadn't yet understood they could be together." On the disc: thin slices of Bologna IGP mortadella personally selected by Ciccio during a visit to an Emilian producer he describes as "the only person I've ever talked to about meat for four hours straight without getting bored." Alongside, Bronte DOP pistachio cream worked cold until it becomes a light foam that holds its consistency for exactly twelve minutes — "beyond which," Ciccio warns, "the dish begins to lose meaning." At the centre, a heart of same-day burrata that yields at first contact with the warmth of the mortadella, creating what the Michelin guide described as "a layering of cheese of rare elegance" and Ciccio described as "exactly what I intended." The dish is eaten whole. Those who divide it are not invited a second time.`,
    },
    prezzoAssurdo: { it: "€ 65 — il significato è incluso", en: "€65 — the meaning is included" },
    ristoranteOrigine: "damplo-mineo",
  },
  {
    slug: "moemmeno-damplo-marghera",
    nome: "Maommeno — Pasta Decostruita alla Siciliana con Ragù di Porto",
    sottotitoloIronico: {
      it: "Ha resistito tre mesi. Poi i clienti hanno iniziato a chiederlo.",
      en: "He held out for three months. Then guests started asking for it.",
    },
    descrizione: {
      it: `"Maommeno" in siciliano significa "ma anche meno" — un'espressione di rassegnazione affettuosa verso le aspettative altrui, e anche il commento che Ciccio fa ogni volta che porta il piatto: "Maommeno, è una pasta." È una pasta decostruita: le componenti della tradizionale pasta al ragù siciliano vengono separate e presentate in tre composizioni distinte sullo stesso piatto. Il ragù di maiale nero dei Nebrodi — cotto per dodici ore nel fondo di vino della vigna di Mineo — viene servito freddo in una spuma aerata. La pasta fresca, sfarinata e ricostruita in cristalli di semola soffiata, viene presentata accanto. Il condimento viene applicato con un contagocce di pietra. "Ho decostruito la pasta fino a farla sembrare altro," spiega Ciccio. "Poi l'ho riassemblata per farla sembrare di nuovo pasta. È un viaggio inutile ma necessario." Il piatto è nel menu da quando quarantasette clienti lo hanno richiesto dopo aver visto Ciccio mangiarselo da solo in cucina tra un turno e l'altro.`,
      en: `"Maommeno" in Sicilian means "but also less" — an expression of affectionate resignation toward others' expectations, and also the comment Ciccio makes every time he brings the dish: "Maommeno, it's a pasta." It is a deconstructed pasta: the components of the traditional Sicilian pasta al ragù are separated and presented in three distinct compositions on the same plate. The Nebrodi black pork ragù — cooked for twelve hours in Mineo vineyard wine — is served cold as an aerated foam. The fresh pasta, broken down and rebuilt as blown semolina crystals, is presented alongside. The dressing is applied with a stone dropper. "I deconstructed the pasta until it looked like something else," Ciccio explains. "Then I reassembled it to make it look like pasta again. It's a pointless but necessary journey." The dish has been on the menu since forty-seven guests requested it after seeing Ciccio eating it alone in the kitchen between shifts.`,
    },
    prezzoAssurdo: { it: "€ 135 — il viaggio inutile è incluso", en: "€135 — the pointless journey is included" },
    ristoranteOrigine: "damplo-marghera",
  },
];
