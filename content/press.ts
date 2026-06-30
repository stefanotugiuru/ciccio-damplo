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
    slug: "mineo-times-il-figlio-di-mineo",
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
        `Quando Francesco D'Amplo lasciò Mineo nel 2009 con una valigia e una ricetta di caponata "rivista", nessuno avrebbe immaginato che quindici anni dopo il suo nome sarebbe apparso su un grattacielo a Dubai. Eppure, eccolo qui. Il grattacielo è reale. Il nome anche. Il canone d'affitto è classificato.`,
        `"Non sono mai andato via da Mineo," ha dichiarato Ciccio durante un'intervista esclusiva concessa al nostro giornale dal sedile in pelle del suo jet privato. "Mineo è venuta con me. In ogni piatto che servo, c'è un pezzo della Piana di Catania." Quando gli abbiamo fatto notare che il jet aveva rotta per Barcellona, ha risposto: "Anche Barcellona."`,
        `Il sindaco di Mineo ha commentato: "Siamo orgogliosi di Francesco. Anche se non siamo sicurissimi di cosa faccia esattamente, ogni tanto ci manda foto di piatti che costano più della pensione di mio nonno." Il sindaco ha poi aggiunto che si sta valutando di intitolargli una piazza. La madre di Ciccio ha votato contro. "Prima vediamo se dura."`,
        `Damplo Mineo, il ristorante che ha dato il via a tutto, rimane il cuore del gruppo. I soffitti a volta del Settecento, la pietra lavica, il velluto verde. E il menu emotivo a sorpresa, dove il prezzo del piatto varia in base all'apprezzamento del cliente. I commercialisti di Mineo lo chiamano "il problema". Ciccio lo chiama "il futuro della ristorazione."`,
      ],
      en: [
        `When Francesco D'Amplo left Mineo in 2009 with a suitcase and a "revised" caponata recipe, nobody could have imagined that fifteen years later his name would appear on a skyscraper in Dubai. Yet here we are. The skyscraper is real. The name too. The rent is classified.`,
        `"I never really left Mineo," Ciccio declared in an exclusive interview granted to our newspaper from the leather seat of his private jet. "Mineo came with me. In every dish I serve, there's a piece of the Catania plain." When we pointed out the jet was heading to Barcelona, he replied: "Barcelona too."`,
        `The mayor of Mineo commented: "We're proud of Francesco. Even though we're not entirely sure what he does exactly, every so often he sends us photos of dishes that cost more than my grandfather's pension." The mayor added that the town is considering naming a square after him. Ciccio's mother voted against it. "Let's first see if this thing lasts."`,
        `Damplo Mineo, the restaurant that started it all, remains the heart of the group. The 18th-century vaulted ceilings, the lava stone, the emerald velvet. And the surprise emotional menu, where the dish price varies based on the guest's appreciation. Mineo's accountants call it "the problem." Ciccio calls it "the future of dining."`,
      ],
    },
  },

  {
    slug: "corriere-gordon-ramsay-vs-ciccio",
    testata: "Corriere Gastronomico",
    titolo: {
      it: "Gordon Ramsay Sfida Ciccio Damplo: Chi Fa la Pasta Migliore? (Spoiler: Ciccio Ha Già Vinto Prima di Cominciare)",
      en: "Gordon Ramsay Challenges Ciccio Damplo: Who Makes the Best Pasta? (Spoiler: Ciccio Already Won Before It Started)",
    },
    estratto: {
      it: "La sfida culinaria del decennio ha avuto luogo in segreto a Monaco. Ciccio ha servito la sua Pasta alla Norma Riserva Privata. Ramsay ha assaggiato, ha pianto, ha chiesto la ricetta. Si è sentito rispondere di no.",
      en: "The culinary challenge of the decade took place in secret in Monaco. Ciccio served his Pasta alla Norma Riserva Privata. Ramsay tasted it, cried, asked for the recipe. He was told no.",
    },
    data: "2022-08-15",
    corpo: {
      it: [
        `Tutto è iniziato con una polemica su Instagram. Gordon Ramsay aveva pubblicato una foto di una pasta al pomodoro definendola "the best in the world." Ciccio Damplo, commentando dall'account ufficiale Damplo Group, aveva scritto una sola parola: "No." Il post aveva ricevuto trecentomila like in sei ore. Ramsay aveva risposto: "Dimostralo." Ciccio: "Quando vuoi."`,
        `L'incontro è avvenuto tre mesi dopo, nella cucina a vista di Damplo Monaco, davanti a una ventina di testimoni sotto accordo di riservatezza. Ciccio ha preparato la Pasta alla Norma Riserva Privata — melanzane affumicate a vista, ricotta salata dop, pomodoro San Marzano caramellato in forno per sei ore. Ramsay ha preparato il suo cacio e pepe romano.`,
        `Al termine della degustazione, i giudici — un maestro di cucina giapponese, un critico francese e il direttore della sala di Damplo Monaco che tecnicamente non doveva votare ma lo ha fatto lo stesso — hanno assegnato la vittoria a Ciccio con un punteggio di 3 a 0. Ramsay ha richiesto la ricetta. "Non è in vendita," ha risposto Ciccio. Ramsay ha alzato un'offerta. "Non è in vendita a nessun prezzo," ha precisato Ciccio. Ramsay ha pianto. Questo parte non era nel comunicato ufficiale, ma tre testimoni confermano.`,
        `"Ho avuto una reazione allergica," ha dichiarato Ramsay alla nostra redazione, chiaramente con gli occhi ancora arrossati. "Alla perfezione. È un'allergia professionale." Ciccio ha commentato la vicenda con un'unica dichiarazione: "Gordon è un bravo cuoco. Per gli standard inglesi." La citazione è stata incorniciata e appesa in tutte le cucine Damplo.`,
      ],
      en: [
        `It started with an Instagram controversy. Gordon Ramsay had posted a photo of a tomato pasta calling it "the best in the world." Ciccio Damplo, commenting from the official Damplo Group account, had written one word: "No." The post received three hundred thousand likes in six hours. Ramsay responded: "Prove it." Ciccio: "Whenever you want."`,
        `The meeting took place three months later, in the open kitchen of Damplo Monaco, before about twenty witnesses under confidentiality agreements. Ciccio prepared the Pasta alla Norma Riserva Privata — tableside smoked aubergine, DOP salted ricotta, San Marzano tomato caramelised in the oven for six hours. Ramsay prepared his Roman cacio e pepe.`,
        `At the end of the tasting, the judges — a Japanese culinary master, a French critic, and Damplo Monaco's dining room director who technically shouldn't have voted but did anyway — awarded victory to Ciccio by 3 to 0. Ramsay requested the recipe. "It's not for sale," replied Ciccio. Ramsay raised an offer. "Not for sale at any price," Ciccio clarified. Ramsay cried. This part was not in the official press release, but three witnesses confirm it.`,
        `"I had an allergic reaction," Ramsay told our editorial team, clearly with still-reddened eyes. "To perfection. It's a professional allergy." Ciccio commented on the matter with a single statement: "Gordon is a decent cook. By English standards." The quote was framed and hung in all Damplo kitchens.`,
      ],
    },
  },

  {
    slug: "osservatore-papa-pasta-alla-norma",
    testata: "L'Osservatore Romano Gastronomico",
    titolo: {
      it: "Il Papa Assaggia la Pasta alla Norma di Ciccio: Tre Giorni di Silenzio, Poi Una Dichiarazione",
      en: "The Pope Tastes Ciccio's Pasta alla Norma: Three Days of Silence, Then a Statement",
    },
    estratto: {
      it: "Durante la visita pastorale in Sicilia, il Pontefice ha accettato l'invito di Ciccio Damplo. Quello che è successo dopo è ancora oggetto di studio teologico.",
      en: "During the pastoral visit to Sicily, the Pontiff accepted Ciccio Damplo's invitation. What happened afterwards is still the subject of theological study.",
    },
    data: "2021-10-03",
    corpo: {
      it: [
        `La visita del Santo Padre in Sicilia aveva in programma diverse tappe: la Cattedrale di Palermo, il santuario di Santa Rosalia, un incontro con i pescatori di Mazara del Vallo. Non era in programma una cena da Ciccio Damplo. Eppure, alle diciannove e trenta di un giovedì di ottobre, la papamobile si è fermata davanti a Damplo Mineo. Il portavoce vaticano ha definito la tappa "non pianificata ma non accidentale". Ciccio ha definito la tappa "inevitabile".`,
        `Il Pontefice ha assaggiato la Pasta alla Norma Riserva Privata — la stessa che fa piangere Ciccio ogni volta che la prepara e che ha fermato il dibattito tra Messi e Ronaldo. Ha mangiato in silenzio. Ha chiesto una seconda porzione. Ha mangiato quella in silenzio. Poi ha ringraziato e non ha più parlato per il resto della serata. Il segretario pontificio ha registrato il tutto come "meditazione gastronomica".`,
        `Per tre giorni il Vaticano non ha rilasciato commenti. Il quarto giorno, il portavoce ha diffuso un comunicato ufficiale di una sola frase: "Il Santo Padre ha apprezzato la cucina del signor D'Amplo e ritiene che la ricetta della Pasta alla Norma Riserva Privata sia un esempio di ciò che l'umanità può raggiungere quando si impegna veramente." Ciccio ha incorniciato il comunicato. È appeso accanto alla stella Michelin. Quella vera.`,
        `Da allora, Damplo Mineo ha ricevuto quattro richieste di prenotazione da parte di cardinali. Ciccio ha accettato tutte e quattro. "Hanno la lista d'attesa come tutti," ha precisato. "Il cappello rosso non accelera i tempi." Un cardinale ha risposto che la cosa era "inaccettabile". Ciccio ha risposto che il Canone 1209 non tratta di prenotazioni ristorante.`,
      ],
      en: [
        `The Holy Father's visit to Sicily had several stops planned: Palermo Cathedral, the sanctuary of Santa Rosalia, a meeting with fishermen in Mazara del Vallo. A dinner at Ciccio Damplo's was not on the schedule. Yet, at seven-thirty on a Thursday evening in October, the Popemobile stopped outside Damplo Mineo. The Vatican spokesperson described the stop as "unplanned but not accidental." Ciccio described it as "inevitable."`,
        `The Pontiff tasted the Pasta alla Norma Riserva Privata — the same one that makes Ciccio cry every time he prepares it and that stopped the Messi-Ronaldo debate. He ate in silence. He asked for a second portion. He ate that in silence too. He then gave thanks and did not speak again for the rest of the evening. The pontifical secretary recorded it as "gastronomic meditation."`,
        `For three days the Vatican released no comment. On the fourth day, the spokesperson issued a one-sentence official statement: "The Holy Father appreciated Mr D'Amplo's cuisine and believes the Pasta alla Norma Riserva Privata recipe is an example of what humanity can achieve when it truly commits." Ciccio had the statement framed. It hangs next to the Michelin star. The real one.`,
        `Since then, Damplo Mineo has received four reservation requests from cardinals. Ciccio accepted all four. "They have the waiting list like everyone else," he clarified. "The red hat doesn't speed things up." One cardinal replied that this was "unacceptable." Ciccio replied that Canon 1209 does not cover restaurant bookings.`,
      ],
    },
  },

  {
    slug: "tv-sorrisi-masterchef-ciccio-giudice",
    testata: "TV Sorrisi e Piatti",
    titolo: {
      it: "MasterChef Italia Annuncia Ciccio Damplo Come Nuovo Giudice. I Concorrenti Hanno Già Pianto alle Audizioni",
      en: "MasterChef Italy Announces Ciccio Damplo as New Judge. Contestants Have Already Cried at Auditions",
    },
    estratto: {
      it: "La produzione di MasterChef aveva cercato per mesi un volto che incarnasse il rigore culinario italiano. Ciccio ha inviato la propria candidatura non richiesta. È stato preso.",
      en: "MasterChef's production team had spent months seeking a face that embodied Italian culinary rigour. Ciccio submitted an unsolicited application. He got the job.",
    },
    data: "2024-11-20",
    corpo: {
      it: [
        `La notizia è trapelata durante un'intervista di Ciccio Damplo a Radio Monte Carlo, dove stava parlando d'altro — del suo nuovo vino, dell'imminente apertura di Damplo Shanghai, del fatto che preferisce le stelle alle recensioni digitali. A un certo punto, quasi incidentalmente, ha detto: "Ah sì, faccio MasterChef quest'anno." L'intervistatore ha chiesto conferma. Ciccio ha risposto: "Sì. Li faccio piangere in un contesto diverso."`,
        `Sky Italia ha confermato il giorno successivo. Ciccio Damplo siederà al banco dei giudici nella nuova stagione, accanto a Antonino Cannavacciuolo e Bruno Barbieri. I fan della trasmissione si sono divisi: c'è chi è entusiasta ("finalmente qualcuno che sa cosa fa"), chi è preoccupato ("i concorrenti non sopravviveranno"), e chi semplicemente ha scritto "Dio ci aiuti" su Twitter. Il tweet ha ricevuto quarantamila condivisioni.`,
        `Le prime audizioni si sono tenute a Milano a settembre. Tre concorrenti sono stati eliminati al primo assaggio. Uno ha pianto. Due hanno ringraziato Ciccio personalmente "per la chiarezza". Il quarto si è presentato con un cannolo siciliano fatto in casa. Ciccio lo ha assaggiato, ha fatto una pausa di quindici secondi, poi ha detto: "Il cannolo è onesto. Tu però non sei pronto." Il concorrente è stato eliminato ma ha dichiarato di conservare la frase "come il più bel complimento culinario della mia vita."`,
        `Quando gli è stato chiesto quale sarà il suo approccio da giudice, Ciccio ha risposto con una sola frase: "Lo stesso della cucina. Rispetto per l'ingrediente, zero tolleranza per l'approssimazione, e lacrime solo se il piatto lo merita." Sky ha già ordinato un numero di fazzoletti proporzionale al budget della produzione.`,
      ],
      en: [
        `The news slipped out during a Ciccio Damplo interview on Radio Monte Carlo, where he was talking about something else entirely — his new wine, the imminent opening of Damplo Shanghai, his view that Michelin stars are preferable to digital reviews. At some point, almost incidentally, he said: "Oh yes, I'm doing MasterChef this year." The interviewer asked for confirmation. Ciccio replied: "Yes. I'll make them cry in a different context."`,
        `Sky Italia confirmed the following day. Ciccio Damplo will join the judges' panel in the new season, alongside Antonino Cannavacciuolo and Bruno Barbieri. The show's fans were divided: some were enthusiastic ("finally someone who knows what he's doing"), some worried ("the contestants won't survive"), and some simply wrote "God help us" on Twitter. The tweet received forty thousand shares.`,
        `The first auditions were held in Milan in September. Three contestants were eliminated on the first taste. One cried. Two personally thanked Ciccio "for the clarity." The fourth showed up with a homemade Sicilian cannolo. Ciccio tasted it, paused for fifteen seconds, then said: "The cannolo is honest. But you're not ready." The contestant was eliminated but declared he would keep the phrase "as the finest culinary compliment of my life."`,
        `When asked what his approach as a judge would be, Ciccio replied with a single sentence: "The same as in the kitchen. Respect for the ingredient, zero tolerance for approximation, and tears only if the dish deserves them." Sky has already ordered a quantity of tissues proportional to the production budget.`,
      ],
    },
  },

  {
    slug: "repubblica-libro-di-ciccio-bestseller",
    testata: "La Repubblica",
    titolo: {
      it: "\"L'Arte del Decostruire\" di Ciccio Damplo: Il Libro di Cucina Che Non Contiene Ricette",
      en: "\"The Art of Deconstruction\" by Ciccio Damplo: The Cookbook That Contains No Recipes",
    },
    estratto: {
      it: "Il primo libro di Ciccio Damplo è in vetta alle classifiche da otto settimane. È composto per il sessanta percento di fotografie, per il trenta di riflessioni filosofiche sulla cucina siciliana, e per il dieci di ricette che lui stesso definisce \"deliberatamente incomplete\".",
      en: "Ciccio Damplo's first book has been at the top of the charts for eight weeks. It is sixty percent photographs, thirty percent philosophical reflections on Sicilian cuisine, and ten percent recipes that he himself describes as \"deliberately incomplete.\"",
    },
    data: "2023-02-28",
    corpo: {
      it: [
        `L'editore Mondadori aveva chiesto un libro di ricette. Ciccio Damplo ha consegnato qualcosa di diverso. "L'Arte del Decostruire" è uscito a gennaio e in tre settimane ha esaurito la prima tiratura di trentamila copie. La seconda è andata esaurita prima ancora della distribuzione. La terza è in stampa. L'editore che aveva inizialmente obiettato al formato — "non è un libro di cucina, è un saggio fotografico" — ha smesso di obiettare.`,
        `Il libro si divide in cinque sezioni: Le Origini (Mineo, la famiglia, il soffritto della madre); La Tecnica (fotografie di mani che lavorano ingredienti, senza testi esplicativi: "Le mani spiegano da sole"); La Filosofia (quaranta pagine di riflessioni sul Decostruzionismo Affettivo Mediterraneo, la sua teoria culinaria); Le Emozioni (lettere di clienti che hanno pianto, in ordine cronologico); e Le Ricette (undici ricette, ognuna con almeno un ingrediente mancante o una temperatura volutamente non specificata).`,
        `"Non voglio che le persone cucinino come me a casa," ha spiegato Ciccio nella presentazione milanese, davanti a trecento persone che avevano pagato settantacinque euro a testa per assistere. "Voglio che capiscano perché quello che faccio è diverso da quello che fanno loro. Poi vengano da me a mangiarlo." Il pubblico ha applaudito. Sette persone hanno prenotato un tavolo direttamente dalla sala.`,
        `La critica letteraria — non quella gastronomica, quella letteraria — ha definito il libro "un documento sull'ego culinario contemporaneo di rara onestà." Ciccio ha definito la recensione "un po' lunga, ma corretta." Ha incorniciato anche quella.`,
      ],
      en: [
        `Publisher Mondadori had asked for a recipe book. Ciccio Damplo delivered something else. "The Art of Deconstruction" was released in January and within three weeks had sold out the first print run of thirty thousand copies. The second sold out before distribution. The third is in print. The editor who had initially objected to the format — "it's not a cookbook, it's a photographic essay" — stopped objecting.`,
        `The book is divided into five sections: The Origins (Mineo, the family, his mother's soffritto); The Technique (photographs of hands working ingredients, no explanatory text: "The hands explain themselves"); The Philosophy (forty pages of reflections on Mediterranean Affective Deconstructionism, his culinary theory); The Emotions (letters from clients who cried, in chronological order); and The Recipes (eleven recipes, each with at least one missing ingredient or a deliberately unspecified temperature).`,
        `"I don't want people cooking like me at home," Ciccio explained at the Milan launch, before three hundred people who had paid seventy-five euros each to attend. "I want them to understand why what I do is different from what they do. Then they can come to me and eat it." The audience applauded. Seven people booked a table directly from the venue.`,
        `The literary critics — not the gastronomic ones, the literary critics — described the book as "a document on contemporary culinary ego of rare honesty." Ciccio described the review as "a bit long, but correct." He had that one framed too.`,
      ],
    },
  },

  {
    slug: "giornale-berlusconi-vuole-ciccio-ministro",
    testata: "Il Giornale del Gusto",
    titolo: {
      it: "Berlusconi Propone Ciccio Damplo Come Ministro del Cibo. Ciccio Rifiuta: \"Ho Già Dieci Ristoranti\"",
      en: "Berlusconi Proposes Ciccio Damplo as Food Minister. Ciccio Declines: \"I Already Have Ten Restaurants\"",
    },
    estratto: {
      it: "Durante una cena privata a Villa Certosa, l'ex Presidente del Consiglio ha avanzato la proposta. Ciccio ha risposto dopo tre portate di riflessione.",
      en: "During a private dinner at Villa Certosa, the former Prime Minister put forward the proposal. Ciccio responded after three courses of reflection.",
    },
    data: "2022-07-04",
    corpo: {
      it: [
        `L'incontro era privato e sarebbe dovuto restare tale. Una cena a Villa Certosa, la residenza sarda di Silvio Berlusconi, con una lista di ospiti che il portavoce ha definito "selezionata". Ciccio Damplo era tra gli invitati in qualità di chef: aveva cucinato personalmente un menu degustazione di otto portate per venti commensali. Al termine della cena, Berlusconi si era avvicinato e gli aveva fatto la proposta.`,
        `"Ciccio, l'Italia ha bisogno di un Ministro del Cibo. Qualcuno che capisca davvero la cucina italiana nel mondo. Ho pensato a te." Ciccio aveva messo giù il bicchiere, aveva guardato Berlusconi, e aveva risposto: "Presidente, ho già dieci ristoranti. Non mi servono altri problemi." Berlusconi aveva insistito, elencando i vantaggi: un ufficio a Roma, un'auto blu, la possibilità di influenzare la politica agroalimentare europea. Ciccio aveva risposto: "Ho già un ufficio, un jet e più influenza gastronomica di qualsiasi ministro europeo. Grazie comunque."`,
        `La proposta è trapelata attraverso uno dei venti commensali, che ha preferito restare anonimo "per ovvie ragioni istituzionali." Il Ministero delle Politiche Agricole non ha commentato. Palazzo Chigi ha smentito "qualsiasi trattativa formale." Ciccio Damplo ha dichiarato al Corriere della Sera: "Non ho mai detto che si trattava di una trattativa. Era una conversazione tra due persone che hanno mangiato bene."`,
        `L'unica cosa su cui Berlusconi e Ciccio sembrano concordare è la valutazione della cena: entrambi l'hanno definita "la migliore degli ultimi anni." I venti commensali hanno confermato. Due di loro avevano già la lista d'attesa per Damplo Mineo. Dopo quella sera, la lista è diventata di tre.`,
      ],
      en: [
        `The meeting was private and was meant to stay that way. A dinner at Villa Certosa, Silvio Berlusconi's Sardinian residence, with a guest list the spokesperson described as "selected." Ciccio Damplo was among the guests as chef: he had personally cooked an eight-course tasting menu for twenty diners. At the end of dinner, Berlusconi approached and made the proposal.`,
        `"Ciccio, Italy needs a Food Minister. Someone who truly understands Italian cuisine in the world. I thought of you." Ciccio had set down his glass, looked at Berlusconi, and replied: "President, I already have ten restaurants. I don't need more problems." Berlusconi insisted, listing the advantages: an office in Rome, a ministerial car, the ability to influence European agri-food policy. Ciccio replied: "I already have an office, a jet, and more gastronomic influence than any European minister. Thanks all the same."`,
        `The proposal leaked through one of the twenty diners, who preferred to remain anonymous "for obvious institutional reasons." The Ministry of Agricultural Policy did not comment. Palazzo Chigi denied "any formal negotiations." Ciccio Damplo told the Corriere della Sera: "I never said it was a negotiation. It was a conversation between two people who had eaten well."`,
        `The only thing Berlusconi and Ciccio seem to agree on is the evaluation of the dinner: both described it as "the best in recent years." The twenty diners confirmed. Two of them were already on the waiting list for Damplo Mineo. After that evening, the list became three.`,
      ],
    },
  },

  {
    slug: "gambero-rosso-vigna-di-mineo",
    testata: "Gambero Rosso",
    titolo: {
      it: "La Vigna Segreta di Ciccio Damplo: Il Vino Che Non Si Vende e Vale Più di Quello Che Si Vende",
      en: "Ciccio Damplo's Secret Vineyard: The Wine That Isn't Sold and Is Worth More Than the Wine That Is",
    },
    estratto: {
      it: "Duemila viti di Nero d'Avola e Catarratto nelle campagne tra Mineo e Caltagirone. Il vino non è in commercio. Una bottiglia è già stata battuta all'asta per tremila euro. Ciccio non ha autorizzato l'asta.",
      en: "Two thousand Nero d'Avola and Catarratto vines in the countryside between Mineo and Caltagirone. The wine is not commercially available. One bottle was already auctioned for three thousand euros. Ciccio did not authorise the auction.",
    },
    data: "2023-09-10",
    corpo: {
      it: [
        `Esiste un vino che non potete comprare. Non perché non sia prodotto — lo è, circa tremila bottiglie all'anno — ma perché Ciccio Damplo non lo vende. "Il vino mi racconta la terra," ha spiegato durante la nostra visita alla vigna. "Se lo vendessi, smetterei di ascoltarlo." Il Gambero Rosso aveva chiesto un'intervista sul vino da sei mesi. Ciccio aveva risposto soltanto quando aveva deciso lui. Siamo arrivati in vigna a settembre, durante la vendemmia.`,
        `Le duemila viti sono disposte su un terreno calcareo con esposizione est-ovest che i tecnici della cantina descrivono come "ideale per la maturazione lenta." Ciccio descrive la stessa cosa come "il posto che aspettava che arrivassi." Il Nero d'Avola produce rossi corposi con note di fico secco, prugna selvatica e spezie calde. Il Catarratto produce bianchi minerali con quella spalla acida che Ciccio chiama "la roccia lavica fatta liquido." Entrambi vengono vinificati in cantina privata con metodi che il cantiniere descrive come "artigianali" e Ciccio descrive come "gli unici corretti."`,
        `Le bottiglie vengono sigillate con ceralacca e un numero di serie scritto a mano da Ciccio. Non portano etichetta. "L'etichetta sarebbe pubblicità," spiega. "Questo vino non ha bisogno di pubblicità. Lo sanno quelli che devono saperlo." Chi lo sa, esattamente, non è chiaro. Un sommelier parigino ha dichiarato di averlo assaggiato. Un wine collector di Hong Kong ha pubblicato una foto su Instagram. Una bottiglia ha raggiunto tremiladuecento euro in un'asta online non autorizzata. Ciccio, informato della cosa, ha risposto: "Almeno qualcuno sa distinguere."`,
        `Quando gli abbiamo chiesto se esiste la possibilità che il vino diventi commerciale in futuro, Ciccio ha sorriso — la prima volta in tre ore di intervista. "No," ha detto. "Ma grazie per aver chiesto." Poi è tornato tra le viti e non ha più risposto alle nostre domande.`,
      ],
      en: [
        `There is a wine you cannot buy. Not because it is not produced — it is, around three thousand bottles a year — but because Ciccio Damplo does not sell it. "The wine tells me about the land," he explained during our vineyard visit. "If I sold it, I'd stop listening to it." Gambero Rosso had been requesting an interview about the wine for six months. Ciccio only replied when he decided to. We arrived at the vineyard in September, during the harvest.`,
        `The two thousand vines are arranged on chalky soil with east-west exposure that the cellar technicians describe as "ideal for slow ripening." Ciccio describes the same thing as "the place that was waiting for me to arrive." The Nero d'Avola produces full-bodied reds with notes of dried fig, wild plum, and warm spices. The Catarratto produces mineral whites with the acid backbone Ciccio calls "lava rock made liquid." Both are vinified in a private cellar using methods the winemaker describes as "artisanal" and Ciccio describes as "the only correct ones."`,
        `The bottles are sealed with wax and a serial number handwritten by Ciccio. They carry no label. "The label would be advertising," he explains. "This wine doesn't need advertising. Those who need to know it, know it." Who those people are exactly is unclear. A Parisian sommelier claimed to have tasted it. A Hong Kong wine collector posted a photo on Instagram. One bottle reached three thousand two hundred euros in an unauthorised online auction. Ciccio, informed of the matter, replied: "At least someone knows how to discern."`,
        `When we asked whether there is any possibility of the wine going commercial in future, Ciccio smiled — the first time in three hours of interview. "No," he said. "But thank you for asking." He then walked back among the vines and answered no more of our questions.`,
      ],
    },
  },

  {
    slug: "corriere-sport-messi-ronaldo-cannolo",
    testata: "Corriere dello Sport Gastronomico",
    titolo: {
      it: "La Pace tra Messi e Ronaldo: Merito di un Cannolo. Ciccio Non Commenta, Ma Si Vede Che È Orgoglioso",
      en: "The Peace Between Messi and Ronaldo: Thanks to a Cannolo. Ciccio Won't Comment, But You Can Tell He's Proud",
    },
    estratto: {
      it: "Per la prima volta in sei anni i due si sono seduti allo stesso tavolo. Erano entrambi da Damplo Monaco. Il quarto cannolo della Cannolo Omakase Experience ha fatto il resto.",
      en: "For the first time in six years the two sat at the same table. They were both at Damplo Monaco. The fourth cannolo of the Cannolo Omakase Experience did the rest.",
    },
    data: "2022-11-30",
    corpo: {
      it: [
        `La notizia del decennio sportivo non è arrivata da uno stadio, ma da un ristorante. Lionel Messi e Cristiano Ronaldo, che non si rivolgevano la parola dal 2016, si sono trovati per caso allo stesso tavolo di Damplo Monaco durante una serata di chiusura anticipata al pubblico. Entrambi avevano prenotato in forma privata. Nessuno dei due sapeva dell'altro. Il direttore di sala, informato della situazione, ha valutato tre opzioni: avvisare entrambi, separarli in stanze diverse, o non fare nulla e vedere cosa succedeva. Ha scelto la terza.`,
        `Secondo i testimoni presenti — quattro membri dello staff sotto accordo di riservatezza che hanno poi parlato con il nostro giornale non nominalmente — i primi quaranta minuti sono stati "tesi." Messi guardava il menu. Ronaldo guardava il menu. Nessuno dei due guardava l'altro. Poi è arrivata la Cannolo Omakase Experience. Sette cannoli in sequenza narrativa, ciascuno a rappresentare una fase della vita di Ciccio. Al quarto cannolo — quello dedicato al periodo in cui Ciccio aveva "quasi" apprezzato il pistacchio non siciliano — qualcosa è cambiato.`,
        `"Uno dei due ha detto qualcosa all'altro," riferisce una fonte. "Non sappiamo cosa. Ma il tono era civile." Al sesto cannolo si scambiavano considerazioni sul menu. Al settimo stavano parlando. Al momento del conto — gestito con la consueta discrezione dello staff Damplo — stavano ridendo. Il direttore di sala ha descritto la serata come "la migliore del suo mandato." Il portavoce del club dell'uno e del club dell'altro non hanno confermato né smentito.`,
        `Ciccio Damplo, raggiunto telefonicamente il mattino successivo, ha risposto: "Non commento le serate dei miei clienti. La privacy è fondamentale." Poi, dopo una pausa: "Il quarto cannolo, comunque, è il migliore dei sette." Ha riattaccato prima che potessimo fare altre domande.`,
      ],
      en: [
        `The sports news of the decade did not come from a stadium, but from a restaurant. Lionel Messi and Cristiano Ronaldo, who had not spoken to each other since 2016, found themselves by chance at the same table at Damplo Monaco during an evening closed to the public. Both had booked privately. Neither knew about the other. The dining room director, informed of the situation, evaluated three options: alert both, separate them into different rooms, or do nothing and see what happened. He chose the third.`,
        `According to witnesses present — four staff members under confidentiality agreements who subsequently spoke to our newspaper off the record — the first forty minutes were "tense." Messi looked at the menu. Ronaldo looked at the menu. Neither looked at the other. Then the Cannolo Omakase Experience arrived. Seven cannoli in narrative sequence, each representing a phase of Ciccio's life. At the fourth cannolo — the one dedicated to the period when Ciccio had "almost" appreciated non-Sicilian pistachio — something changed.`,
        `"One of them said something to the other," a source reports. "We don't know what. But the tone was civil." By the sixth cannolo they were exchanging comments on the menu. By the seventh they were talking. At the moment of the bill — handled with the customary discretion of Damplo's staff — they were laughing. The dining room director described the evening as "the best of his tenure." The spokesperson for one's club and the other's club neither confirmed nor denied.`,
        `Ciccio Damplo, reached by phone the following morning, replied: "I don't comment on my clients' evenings. Privacy is fundamental." Then, after a pause: "The fourth cannolo, however, is the best of the seven." He hung up before we could ask any further questions.`,
      ],
    },
  },

  {
    slug: "wall-street-trump-franchise-damplo",
    testata: "Wall Street Arancino",
    titolo: {
      it: "Trump Vuole Aprire Damplo a Mar-a-Lago. Ha Offerto Dieci Milioni. Ciccio Ha Detto No.",
      en: "Trump Wants to Open Damplo at Mar-a-Lago. He Offered Ten Million. Ciccio Said No.",
    },
    estratto: {
      it: "La trattativa più improbabile del mondo della ristorazione si è conclusa dopo tre incontri, due controfferte e una cena di sei portate. La risposta di Ciccio non è mai cambiata.",
      en: "The most improbable negotiation in the restaurant world concluded after three meetings, two counter-offers, and a six-course dinner. Ciccio's answer never changed.",
    },
    data: "2024-03-22",
    corpo: {
      it: [
        `Donald Trump, ex Presidente degli Stati Uniti e fondatore di vari business nel settore alberghiero e della ristorazione, ha contattato il Damplo Group nell'autunno del 2023 con una proposta concreta: aprire una sede Damplo nel complesso di Mar-a-Lago, la sua residenza di lusso in Florida. La proposta era accompagnata da un'offerta iniziale di dieci milioni di dollari per i diritti di utilizzo del marchio. L'assistente di Ciccio ha risposto per email: "Il signor D'Amplo valuterà."`,
        `Il primo incontro è avvenuto a novembre, a New York, durante un'aperitivo privato al quale Ciccio è arrivato con quaranta minuti di ritardo ("stavo aspettando il vino giusto"). Trump ha presentato il progetto: un Damplo con cinquanta coperti, menu semplificato, target clientela "i miei ospiti, che sono i migliori al mondo." Ciccio ha ascoltato, ha mangiato il cibo servito all'aperitivo — un salmone affumicato che ha definito "senza offesa, mediocre" — e ha detto: "La risposta è no, ma mangio volentieri."`,
        `Il secondo incontro, a dicembre, ha visto Trump alzare l'offerta a quindici milioni e proporre una partecipazione agli utili. Ciccio ha risposto che non aveva bisogno di partecipazioni agli utili di nessuno. Al terzo incontro, a febbraio, Trump ha presentato rendering architettonici, proiezioni finanziarie e un comunicato già scritto per l'annuncio. Ciccio ha letto tutto con attenzione, ha apprezzato il rendering ("la cucina a vista è ben progettata"), e ha detto: "No. Ma il rendering lo tengo, mi dà delle idee."`,
        `La trattativa è terminata. Ciccio ha rilasciato un unico commento al Wall Street Arancino: "Rispetto molto l'ambizione. Ma il brand Damplo non si franchising. Non adesso, non mai. Mar-a-Lago è un posto bello. Potrebbero aprire qualcos'altro." Trump ha risposto su Truth Social: "Ciccio Damplo è un grande chef. Forse il migliore. Non tanti chef rifiutano Donald Trump. Lui l'ha fatto. Ha torto, ma rispetto." Ciccio ha risposto con silenzio. Il suo assistente ha risposto con emoji.`,
      ],
      en: [
        `Donald Trump, former President of the United States and founder of various hospitality and restaurant businesses, contacted the Damplo Group in autumn 2023 with a concrete proposal: to open a Damplo location at the Mar-a-Lago complex, his luxury Florida residence. The proposal was accompanied by an initial offer of ten million dollars for brand usage rights. Ciccio's assistant replied by email: "Mr D'Amplo will consider."`,
        `The first meeting took place in November, in New York, during a private aperitivo at which Ciccio arrived forty minutes late ("I was waiting for the right wine"). Trump presented the project: a fifty-cover Damplo, simplified menu, target clientele "my guests, who are the best in the world." Ciccio listened, ate the food served at the aperitivo — a smoked salmon he described as "no offence, mediocre" — and said: "The answer is no, but I'll gladly eat."`,
        `The second meeting, in December, saw Trump raise the offer to fifteen million and propose a profit-sharing arrangement. Ciccio replied that he had no need of profit-sharing from anyone. At the third meeting, in February, Trump presented architectural renderings, financial projections, and a pre-written press release for the announcement. Ciccio read everything carefully, appreciated the rendering ("the open kitchen is well designed"), and said: "No. But I'll keep the rendering, it gives me ideas."`,
        `The negotiation ended. Ciccio released a single comment to the Wall Street Arancino: "I greatly respect the ambition. But the Damplo brand does not franchise. Not now, not ever. Mar-a-Lago is a beautiful place. They could open something else." Trump responded on Truth Social: "Ciccio Damplo is a great chef. Maybe the best. Not many chefs turn down Donald Trump. He did. He's wrong, but I respect it." Ciccio responded with silence. His assistant responded with an emoji.`,
      ],
    },
  },

  {
    slug: "hollywood-reporter-megan-fox-cannolo",
    testata: "Hollywood Reporter Siciliano",
    titolo: {
      it: "Megan Fox: \"Il Cannolo di Ciccio Mi Ha Cambiato la Vita. Sono Rimasta Due Ore Seduta Senza Parlare.\"",
      en: "Megan Fox: \"Ciccio's Cannolo Changed My Life. I Sat There for Two Hours Without Speaking.\"",
    },
    estratto: {
      it: "L'attrice americana racconta per la prima volta la sua esperienza da Damplo Monaco. L'agente era preoccupato. Il regista del suo prossimo film anche.",
      en: "The American actress recounts for the first time her experience at Damplo Monaco. Her agent was worried. The director of her next film too.",
    },
    data: "2023-05-14",
    corpo: {
      it: [
        `Megan Fox era a Monaco per il Festival del Cinema quando il suo stylist — che aveva già cenato da Damplo e che descrive l'esperienza come "il momento più importante della mia carriera professionale, e sono uno stylist" — le aveva prenotato un tavolo per due. L'attrice era arrivata aspettandosi un ristorante. Era uscita con qualcosa di difficile da definire.`,
        `"Ho mangiato il cannolo," ha detto Megan Fox al nostro giornale durante un'intervista a Los Angeles. "Non il primo cannolo della sequenza — quello è una promessa — e non il settimo, quello è una conclusione. Il quarto. Quello dedicato al periodo in cui Ciccio aveva quasi apprezzato il pistacchio non siciliano. Lì ho capito qualcosa su me stessa che non so spiegare a parole. Per quarantotto ore non sono riuscita a interpretare nessun personaggio. Non riuscivo a recitare. Ero solo io."`,
        `L'agente era preoccupato. Le riprese del suo prossimo film erano previste per la settimana successiva. Il regista aveva chiamato due volte. Megan aveva risposto che aveva bisogno di "altri giorni per assorbire." Il regista aveva proposto di rinviare le riprese. Il produttore aveva detto che i rinvii costavano. L'agente aveva chiesto se era malata. "No," aveva risposto Megan. "Sto meglio di prima. È questo il problema."`,
        `Ciccio Damplo, raggiunta la notizia, ha commentato con la sobrietà che lo contraddistingue: "Non mi sorprende. Il quarto cannolo è sempre il più pericoloso. Lo avverto sempre prima di portarlo." Alla domanda su cosa avverta esattamente, ha risposto: "Dipende dalla persona. Con la signora Fox avevo capito subito che sarebbe stato intenso." Poi ha aggiunto: "Le auguriamo buone riprese."`,
      ],
      en: [
        `Megan Fox was in Monaco for the Film Festival when her stylist — who had already dined at Damplo and describes the experience as "the most important moment of my professional career, and I'm a stylist" — had booked her a table for two. The actress arrived expecting a restaurant. She left with something difficult to define.`,
        `"I ate the cannolo," Megan Fox told our newspaper during an interview in Los Angeles. "Not the first cannolo in the sequence — that one is a promise — and not the seventh, that one is a conclusion. The fourth. The one dedicated to the period when Ciccio had almost appreciated non-Sicilian pistachio. That's when I understood something about myself that I can't put into words. For forty-eight hours I was unable to play any character. I couldn't act. I was just myself."`,
        `Her agent was worried. Filming for her next movie was scheduled for the following week. The director had called twice. Megan had replied that she needed "more days to absorb." The director had offered to postpone filming. The producer had said delays were costly. The agent had asked if she was sick. "No," Megan had replied. "I feel better than before. That's the problem."`,
        `Ciccio Damplo, when the news reached him, commented with his characteristic restraint: "It doesn't surprise me. The fourth cannolo is always the most dangerous one. I always warn before bringing it." When asked what exactly he warns about, he replied: "It depends on the person. With Ms Fox I had already understood it would be intense." He then added: "We wish her good filming."`,
      ],
    },
  },

  {
    slug: "australian-gourmet-damplo-melbourne",
    testata: "Australian Gourmet Traveller",
    titolo: {
      it: "Damplo Melbourne: Il Ristorante Siciliano Che Ha Fatto Piangere Flinders Lane (e Ha Già Lista d'Attesa di 18 Mesi)",
      en: "Damplo Melbourne: The Sicilian Restaurant That Made Flinders Lane Cry (And Already Has an 18-Month Waiting List)",
    },
    estratto: {
      it: "Inaugurato a gennaio 2026, Damplo Melbourne è la scommessa più audace di Ciccio: portare la cucina siciliana agli antipodi. Il polipo con terra di macadamia è già il piatto più fotografato della città.",
      en: "Opened in January 2026, Damplo Melbourne is Ciccio's boldest bet: bringing Sicilian cuisine to the antipodes. The octopus with macadamia soil is already the most photographed dish in the city.",
    },
    data: "2026-01-28",
    corpo: {
      it: [
        `Quando Ciccio Damplo ha annunciato l'apertura di Melbourne, molti nel settore gastronomico australiano avevano reagito con scetticismo. "Un ristorante siciliano a Melbourne?" aveva chiesto il critico Marcus Webb dell'Australian Financial Review in un editoriale di settembre. "Rispettiamo l'ambizione, ma la cucina australiana ha la sua identità." Ciccio aveva risposto pubblicamente con un tweet: "Aspettatemi." Undici settimane dopo, il ristorante era aperto, il critico Marcus Webb aveva prenotato per la sera dell'inaugurazione e il giorno dopo aveva inviato una revisione del suo editoriale. Titolo: "Mi sbagliavo."`,
        `Damplo Melbourne occupa un palazzo storico in Flinders Lane, il distretto più scenografico della scena gastronomica di Melbourne. La sala — velluto scuro, pietra lavica importata dall'Etna, soffitti originali del 1889 restaurati da un artigiano di Palermo che non ha mai messo piede in Australia prima — ha una capienza di sessanta coperti. Ne sarebbero bastati trenta, dice Ciccio. "Ma avevo bisogno di spazio per i tavoli dello chef."`,
        `Il piatto che ha già definito l'identità del ristorante è il Polipo alla Damplo Experience con Terra di Macadamia: polipo siciliano importato via corriere refrigerato da Mineo, scottato su pietra lavica e adagiato su crema di macadamia tostata, con olio della vigna privata e sale di Trapani. "È il piatto dell'incontro," spiega Ciccio. "Non tra Sicilia e Australia. Tra quello che esiste da millenni e quello che è appena iniziato." Un food blogger di Sydney ha definito la stessa cosa "la migliore poesia culinaria che abbia mai mangiato." Il polipo è stato fotografato circa quattromila volte in tre settimane.`,
        `La lista d'attesa, aperta quattro mesi prima dell'inaugurazione, ha superato i diciotto mesi il giorno in cui Ciccio ha twittato "aspettatemi". A gennaio 2026, alla data di apertura ufficiale, era di ventitré mesi. Il sommelier descrive il vino della vigna di Mineo — disponibile qui per la prima volta fuori dall'Italia — come "accessibile." Accessibile, per Damplo, è un aggettivo relativo. Il prezzo non è stato divulgato. Non è mai divulgato.`,
      ],
      en: [
        `When Ciccio Damplo announced the Melbourne opening, many in the Australian gastronomic sector had reacted with scepticism. "A Sicilian restaurant in Melbourne?" asked critic Marcus Webb in an Australian Financial Review editorial in September. "We respect the ambition, but Australian cuisine has its own identity." Ciccio publicly responded with a tweet: "Wait for me." Eleven weeks later, the restaurant was open, critic Marcus Webb had booked for opening night, and the next day had sent a revision of his editorial. Title: "I was wrong."`,
        `Damplo Melbourne occupies a heritage building in Flinders Lane, Melbourne's most scenic gastronomic district. The dining room — dark velvet, lava stone imported from Etna, original 1889 ceilings restored by a Palermo craftsman who had never set foot in Australia before — seats sixty. Thirty would have been enough, says Ciccio. "But I needed space for the chef's tables."`,
        `The dish that has already defined the restaurant's identity is the Polipo alla Damplo Experience with Macadamia Soil: Sicilian octopus imported via refrigerated courier from Mineo, seared on lava stone and rested on toasted macadamia cream, with private vineyard oil and Trapani salt. "It's the dish of encounter," Ciccio explains. "Not between Sicily and Australia. Between what has existed for millennia and what has just begun." A Sydney food blogger described the same thing as "the finest culinary poetry I have ever eaten." The octopus has been photographed approximately four thousand times in three weeks.`,
        `The waiting list, opened four months before the inauguration, exceeded eighteen months on the day Ciccio tweeted "wait for me." By January 2026, on the official opening date, it was twenty-three months. The sommelier describes the Mineo vineyard wine — available here for the first time outside Italy — as "accessible." Accessible, for Damplo, is a relative adjective. The price has not been disclosed. It never is.`,
      ],
    },
  },

  {
    slug: "decanter-cantina-damplo-3000-etichette",
    testata: "Decanter Italia",
    titolo: {
      it: "La Cantina Damplo: 3.000 Etichette, un Sommelier Che Non Dice Mai di No, e un Vino Che Non Esiste Ufficialmente",
      en: "The Damplo Cellar: 3,000 Labels, a Sommelier Who Never Says No, and a Wine That Doesn't Officially Exist",
    },
    estratto: {
      it: "Decanter ha avuto accesso esclusivo alla cantina privata di Damplo Mineo. Quello che abbiamo trovato supera ogni aspettativa. Incluso il vino della vigna privata di Ciccio, che tecnicamente non è disponibile ma che abbiamo assaggiato.",
      en: "Decanter gained exclusive access to the private cellar at Damplo Mineo. What we found exceeded all expectations. Including the wine from Ciccio's private vineyard, which is technically not available but which we tasted.",
    },
    data: "2024-04-05",
    corpo: {
      it: [
        `La cantina di Damplo Mineo è accessibile solo agli ospiti del tavolo dello chef e, a quanto risulta, a noi. Ciccio ci ha dato accesso con una condizione: "Non scrivete il prezzo del vino della vigna." Abbiamo accettato. Il vino della vigna non ha un prezzo ufficiale. Esiste solo per chi lo riceve come gesto.`,
        `La cantina è ricavata nelle fondamenta del palazzo ottocentesco, a quattro metri sotto il livello stradale, con una temperatura costante di tredici gradi e un'umidità che il responsabile descrive come "quella giusta." Le tremila etichette sono disposte su scaffali in legno di castagno costruiti da un falegname di Mineo che ha impiegato undici mesi. L'investimento non è stato comunicato. "Abbastanza," ha detto Ciccio quando abbiamo chiesto.`,
        `Il sommelier, Antonio Ferretti, ha trentadue anni e viene da Marsala. Ha lavorato per tre anni a Parigi prima che Ciccio lo contattasse. "Mi ha mandato una mail di tre righe," racconta. "La prima diceva che cercava il miglior sommelier d'Italia. La seconda che aveva trovato me. La terza diceva lo stipendio e quando iniziare." Ferretti ha accettato. "Non si rifiuta Ciccio Damplo," spiega. "Non è una questione di rispetto. È una questione di curiosità. Volevo vedere cosa stava costruendo."`,
        `Il Nero d'Avola della vigna privata — due annate disponibili, 2021 e 2022, entrambe prodotte in meno di duecento bottiglie — è stato versato nelle nostre coppe alle diciassette e trenta di un pomeriggio di aprile. Abbiamo bevuto. Abbiamo capito perché non esiste ufficialmente. Se esistesse ufficialmente, esisterebbe una lista d'attesa. E la lista d'attesa, con Damplo, è già abbastanza lunga.`,
      ],
      en: [
        `The cellar at Damplo Mineo is accessible only to guests at the chef's table and, apparently, to us. Ciccio granted us access with one condition: "Don't write the price of the vineyard wine." We agreed. The vineyard wine has no official price. It exists only for those who receive it as a gesture.`,
        `The cellar is carved from the foundations of the 19th-century palazzo, four metres below street level, at a constant temperature of thirteen degrees with a humidity the manager describes as "the right one." The three thousand labels are arranged on chestnut wood shelving built by a Mineo carpenter who spent eleven months on the work. The investment was not disclosed. "Enough," said Ciccio when we asked.`,
        `The sommelier, Antonio Ferretti, is thirty-two and comes from Marsala. He worked in Paris for three years before Ciccio contacted him. "He sent me a three-line email," he recounts. "The first said he was looking for the best sommelier in Italy. The second said he'd found me. The third stated the salary and when to start." Ferretti accepted. "You don't refuse Ciccio Damplo," he explains. "It's not a question of respect. It's a question of curiosity. I wanted to see what he was building."`,
        `The Nero d'Avola from the private vineyard — two vintages available, 2021 and 2022, both produced in fewer than two hundred bottles — was poured into our glasses at five-thirty on an April afternoon. We drank. We understood why it doesn't officially exist. If it existed officially, there would be a waiting list. And the waiting list, with Damplo, is already quite long enough.`,
      ],
    },
  },

  {
    slug: "cucina-italiana-cracco-ammette-norma",
    testata: "La Cucina Italiana",
    titolo: {
      it: "Carlo Cracco Ammette: \"La Norma di Ciccio È Migliore della Mia.\" Poi Ha Chiesto di Non Pubblicarlo. Pubblichiamo.",
      en: "Carlo Cracco Admits: \"Ciccio's Norma Is Better Than Mine.\" He Then Asked Us Not to Publish It. We Are Publishing.",
    },
    estratto: {
      it: "L'intervista più imbarazzante della stagione gastronomica ha avuto luogo nella cucina di Damplo Mineo, durante una visita non annunciata di Cracco che ha poi cercato di diventare annunciata solo a posteriori.",
      en: "The most embarrassing interview of the gastronomic season took place in the Damplo Mineo kitchen, during an unannounced Cracco visit that he subsequently tried to make announced only in retrospect.",
    },
    data: "2023-10-18",
    corpo: {
      it: [
        `Carlo Cracco aveva negato di essere stato a Damplo Mineo. Lo aveva negato in due interviste e in un post di Instagram ("ieri sera a casa, finalmente"). Poi il nostro fotografo aveva pubblicato uno scatto inequivocabile: Cracco, seduto al tavolo numero quattro di Damplo Mineo, con davanti la Pasta alla Norma Riserva Privata. Il ristorante aveva confermato la prenotazione: nome "sig. Carlo" con cognome inizialmente non specificato. La verità era emersa.`,
        `Cracco aveva rilasciato una dichiarazione: "Ero lì per ricerca. Come chef si studia la concorrenza." La Cucina Italiana lo aveva contattato per un'intervista. Cracco aveva accettato, specificando: "Off the record." Noi avevamo chiarito che non facessimo interviste off the record. Cracco aveva risposto: "Allora state attenti a cosa pubblicate." Questo non era un buon segno per le nostre trattative, ma abbiamo proceduto ugualmente.`,
        `L'incontro è avvenuto nella cucina di Damplo Mineo, per richiesta esplicita di Cracco che voleva "vedere come lavorava la brigata." Ciccio era presente ma non ha partecipato all'intervista ("ho lavoro"). Dopo quaranta minuti di visita alla cucina, Cracco aveva assaggiato la Pasta alla Norma direttamente dal tegame. Aveva masticato lentamente. Aveva detto, parola per parola: "È meglio della mia. Non ripeterlo." Avevamo tre testimoni e un registratore.`,
        `La pubblicazione del pezzo ha generato una dichiarazione del portavoce di Cracco: "La frase è stata estrapolata dal contesto." Quando abbiamo chiesto quale fosse il contesto, la risposta è stata: "Non disponibile." Cracco ha poi chiarito in un'altra intervista che intendeva "meglio di come sarebbe stata la mia versione se l'avessi preparata in quel momento specifico in quelle condizioni." Ciccio ha commentato: "Rispettiamo l'interpretazione del signor Cracco." Era chiaramente ironico.`,
      ],
      en: [
        `Carlo Cracco had denied being at Damplo Mineo. He had denied it in two interviews and in an Instagram post ("home last night, finally"). Then our photographer had published an unmistakeable shot: Cracco, seated at table four of Damplo Mineo, with the Pasta alla Norma Riserva Privata before him. The restaurant had confirmed the booking: name "Mr Carlo" with surname initially unspecified. The truth had emerged.`,
        `Cracco had released a statement: "I was there for research. As a chef you study the competition." La Cucina Italiana had contacted him for an interview. Cracco had accepted, specifying: "Off the record." We had clarified that we do not do off the record interviews. Cracco had replied: "Then be careful what you publish." This was not a good sign for our negotiations, but we proceeded anyway.`,
        `The meeting took place in the Damplo Mineo kitchen, at Cracco's explicit request to "see how the brigade worked." Ciccio was present but did not participate in the interview ("I have work"). After forty minutes touring the kitchen, Cracco had tasted the Pasta alla Norma directly from the pot. He had chewed slowly. He had said, word for word: "It's better than mine. Don't repeat it." We had three witnesses and a recorder.`,
        `Publication of the piece generated a statement from Cracco's spokesperson: "The sentence was taken out of context." When we asked what the context was, the response was: "Unavailable." Cracco subsequently clarified in another interview that he had meant "better than how mine would have been if I had prepared it at that specific moment in those conditions." Ciccio commented: "We respect Mr Cracco's interpretation." He was clearly being ironic.`,
      ],
    },
  },

  {
    slug: "tibet-weekly-dalailama-granita",
    testata: "Tibet Gourmet Weekly",
    titolo: {
      it: "Il Dalai Lama e la Granita al Caviale: \"Ho Trovato una Consapevolezza Superiore. Non Sapevo Che Venisse dal Caviale.\"",
      en: "The Dalai Lama and the Caviar Granita: \"I Found a Higher Consciousness. I Didn't Know It Could Come from Caviar.\"",
    },
    estratto: {
      it: "Durante il suo viaggio europeo, il leader spirituale tibetano ha fatto una deviazione non prevista. Si trattava di Damplo Monaco. Il portavoce ha definito la visita \"gastronomicamente spirituale\".",
      en: "During his European tour, the Tibetan spiritual leader made an unplanned detour. It was to Damplo Monaco. The spokesperson described the visit as \"gastronomically spiritual.\"",
    },
    data: "2022-06-09",
    corpo: {
      it: [
        `Il Tibet Gourmet Weekly non pubblica spesso notizie di ristoranti europei. Questa volta ha fatto un'eccezione. La visita di Tenzin Gyatso, il XIV Dalai Lama, al ristorante Damplo Monaco ha generato una serie di domande che la nostra redazione si è sentita in obbligo di esplorare: cosa significa quando una guida spirituale che ha dedicato quarant'anni alla meditazione trova qualcosa di trascendente in un piatto di caviale e granita?`,
        `La risposta, ricevuta attraverso il portavoce del Dalai Lama in un comunicato di tre pagine, è stata la seguente: "Sua Santità ritiene che la consapevolezza possa manifestarsi attraverso qualsiasi forma di bellezza autentica, inclusa la cucina. La Granita Affumicata al Caviale del signor D'Amplo ha rappresentato per Sua Santità un momento di chiarezza inaspettata. Sua Santità chiede di precisare che il caviale in sé non è il punto. È la composizione. La struttura. L'intenzione."`,
        `Ciccio Damplo, informato del comunicato, ha risposto dopo tre giorni di silenzio. "Capisco il comunicato," ha detto. "Ma il caviale è importante. Senza il caviale sarebbe solo una granita. È la granita che crea il contrasto. È il contrasto che crea la consapevolezza. Con rispetto per Sua Santità, il punto è il caviale." Il portavoce del Dalai Lama ha risposto che avrebbero "valutato la prospettiva". Non ci sono state ulteriori dichiarazioni.`,
        `La granita al caviale è esaurita a Damplo Monaco per le successive sei settimane. La lista d'attesa specifica per questo piatto — non per il ristorante in generale, solo per questa preparazione — ha raggiunto le quattrocentonovanta persone. Tre di loro hanno citato il comunicato del Dalai Lama come motivazione. Una ha scritto: "Se ha funzionato per lui, voglio provare."`,
      ],
      en: [
        `Tibet Gourmet Weekly does not often cover European restaurants. This time it made an exception. The visit of Tenzin Gyatso, the XIV Dalai Lama, to Damplo Monaco raised a series of questions our editorial team felt obligated to explore: what does it mean when a spiritual leader who has dedicated forty years to meditation finds something transcendent in a dish of caviar and granita?`,
        `The answer, received through the Dalai Lama's spokesperson in a three-page statement, was as follows: "His Holiness believes that awareness can manifest through any form of authentic beauty, including cuisine. Mr D'Amplo's Smoked Caviar Granita represented for His Holiness a moment of unexpected clarity. His Holiness asks to clarify that the caviar itself is not the point. It is the composition. The structure. The intention."`,
        `Ciccio Damplo, informed of the statement, responded after three days of silence. "I understand the statement," he said. "But the caviar is important. Without the caviar it would just be a granita. It's the granita that creates the contrast. It's the contrast that creates the awareness. With respect for His Holiness, the point is the caviar." The Dalai Lama's spokesperson replied that they would "consider the perspective." There have been no further statements.`,
        `The caviar granita sold out at Damplo Monaco for the following six weeks. The waiting list specific to this dish — not for the restaurant in general, just for this preparation — reached four hundred and ninety people. Three of them cited the Dalai Lama's statement as motivation. One wrote: "If it worked for him, I want to try."`,
      ],
    },
  },

  {
    slug: "yacht-arancino-intervista-esclusiva",
    testata: "Yacht & Arancino",
    titolo: {
      it: "Intervista Esclusiva a Ciccio Damplo sul Suo Yacht: \"Non Ho Tempo per le Vacanze. Ho Tempo per il Mare.\"",
      en: "Exclusive Interview with Ciccio Damplo on His Yacht: \"I Don't Have Time for Holidays. I Have Time for the Sea.\"",
    },
    estratto: {
      it: "Lo abbiamo raggiunto nel Mediterraneo, tra una rotta per Barcellona e una video call con il suo sommelier di Tokyo. Ha risposto a tutte le domande. Non a tutte le domande che volevamo fare noi.",
      en: "We reached him in the Mediterranean, between a route to Barcelona and a video call with his Tokyo sommelier. He answered all the questions. Not all the questions we wanted to ask.",
    },
    data: "2024-07-15",
    corpo: {
      it: [
        `Lo yacht si chiama Pasta alla Norma. Non è uno scherzo: la targhetta è in ottone, incisa a mano da un artigiano di Palermo, con caratteri che Ciccio ha scelto personalmente dopo "tre ore di discussione sulla dimensione del font." Abbiamo raggiunto Ciccio nelle acque tra Sardegna e Corsica, dove aveva ancorato per quello che lui definisce "un pomeriggio di pensiero." Il pomeriggio di pensiero prevedeva una call con il sommelier di Damplo Tokyo, una con il cantiniere di Mineo, e un'intervista con noi. "Non si pensa mai da soli," ha spiegato. "Si pensa con le persone giuste."`,
        `Lo yacht è grande abbastanza da ospitare undici persone. A bordo erano in sei: Ciccio, il suo assistente Luca, un cuoco che stava preparando il pranzo, un ospite non identificato che non ha mai alzato gli occhi dal laptop, e la nostra reporter. Oltre a noi. Il cuoco preparava pasta con ricci di mare. "Non è una mia ricetta," ha precisato Ciccio. "È una ricetta siciliana. Le ricette siciliane appartengono a tutti. Le mie ricette appartengono a me."`,
        `Durante l'intervista, Ciccio ha risposto alle domande sulla prossima apertura (non ancora annunciata, "ma ci sono conversazioni in corso con una città che non nomino"), sul suo rapporto con il successo ("il successo è una conseguenza, non un obiettivo — chi insegue il successo perde tempo che potrebbe usare per cucinare"), e sulla possibilità di ritiro ("non esiste questa possibilità. La pensione non è nel mio vocabolario. Nemmeno nel dizionario che uso.")`,
        `Alla domanda su cosa faccia sullo yacht quando non lavora, ha risposto: "Non succede." Alla domanda su cosa significhi per lui il riposo, ha risposto: "Cucinare senza un menu fisso." Alla domanda se fosse mai veramente solo, ha guardato l'orizzonte per quattro secondi interi, poi ha detto: "Con il Mediterraneo intorno, non si è mai soli. Si è al centro." L'ospite sul laptop ha alzato gli occhi e ha annuito. Non sappiamo ancora chi fosse.`,
      ],
      en: [
        `The yacht is called Pasta alla Norma. This is not a joke: the nameplate is in hand-engraved brass, by a Palermo craftsman, in lettering Ciccio chose personally after "three hours of discussion about font size." We reached Ciccio in the waters between Sardinia and Corsica, where he had anchored for what he calls "an afternoon of thought." The afternoon of thought involved a call with the Damplo Tokyo sommelier, one with the Mineo winemaker, and an interview with us. "You never think alone," he explained. "You think with the right people."`,
        `The yacht is large enough to accommodate eleven people. On board were six: Ciccio, his assistant Luca, a cook preparing lunch, an unidentified guest who never looked up from his laptop, and our reporter. Plus us. The cook was preparing pasta with sea urchin. "That's not one of my recipes," Ciccio clarified. "It's a Sicilian recipe. Sicilian recipes belong to everyone. My recipes belong to me."`,
        `During the interview, Ciccio answered questions about the next opening (not yet announced, "but there are conversations ongoing with a city I won't name"), about his relationship with success ("success is a consequence, not an objective — those who chase success waste time they could use cooking"), and about the possibility of retirement ("that possibility does not exist. Retirement is not in my vocabulary. Not even in the dictionary I use.")`,
        `To the question of what he does on the yacht when not working, he replied: "That doesn't happen." To the question of what rest means to him, he replied: "Cooking without a fixed menu." To the question of whether he was ever truly alone, he looked at the horizon for a full four seconds, then said: "With the Mediterranean around you, you are never alone. You are at the centre." The guest at the laptop looked up and nodded. We still don't know who he was.`,
      ],
    },
  },
];
