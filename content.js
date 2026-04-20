// ── CSW Study Data ──
// All content is exam-focused for the Society of Wine Educators CSW certification.

export const CHAPTERS = [
  { num: 1,  name: "Introduction to Wine",       topics: ["History of wine", "Wine styles overview", "How wine is categorized"] },
  { num: 2,  name: "Viticulture",                topics: ["Grape growing fundamentals", "Climate & terroir", "Vineyard management", "Organic & biodynamic farming"] },
  { num: 3,  name: "Vinification",               topics: ["Red wine production", "White wine production", "Rosé & sparkling methods", "Fortified wine production"] },
  { num: 4,  name: "France",                     topics: ["Bordeaux", "Burgundy", "Champagne", "Rhône Valley", "Loire Valley", "Alsace", "Languedoc-Roussillon", "Provence"] },
  { num: 5,  name: "Italy",                      topics: ["Piedmont & Barolo", "Tuscany & Chianti", "Veneto & Prosecco", "Sicily", "Southern appellations"] },
  { num: 6,  name: "Spain & Portugal",           topics: ["Rioja", "Priorat", "Ribera del Duero", "Sherry", "Port & Douro", "Vinho Verde"] },
  { num: 7,  name: "Germany & Austria",          topics: ["German Prädikat system", "Riesling regions", "Mosel vs Rhine", "Austria DAC system", "Grüner Veltliner"] },
  { num: 8,  name: "Other Europe",               topics: ["Greece", "Hungary (Tokaj)", "Switzerland", "Eastern Europe", "Georgia"] },
  { num: 9,  name: "United States",              topics: ["California AVAs", "Napa Valley", "Sonoma County", "Oregon & Washington", "Other US regions"] },
  { num: 10, name: "Other Americas",             topics: ["Argentina & Malbec", "Chile regions", "Brazil", "Uruguay", "Canada (Icewine)"] },
  { num: 11, name: "Australia & New Zealand",    topics: ["Australian GIs", "Barossa & Shiraz", "Margaret River", "NZ Sauvignon Blanc", "Central Otago"] },
  { num: 12, name: "South Africa & Asia",        topics: ["South African WO system", "Stellenbosch", "China", "Japan", "India & other producers"] },
  { num: 13, name: "Grape Varieties",            topics: ["Major red varietals", "Major white varietals", "Regional specialty grapes", "Ampelography"] },
  { num: 14, name: "Wine Service & Storage",     topics: ["Serving temperatures", "Glassware", "Decanting", "Cellar management", "Wine faults"] },
  { num: 15, name: "Tasting & Evaluation",       topics: ["SWE tasting grid", "Appearance", "Aroma & flavor", "Structure", "Quality assessment"] },
  { num: 16, name: "Wine & Food Pairing",        topics: ["Pairing principles", "Regional pairings", "Matching cuisine", "Cheese & wine"] },
];

export const FLASHCARDS = {
  1: [
    { q: "What is the primary sugar in grape juice that ferments into alcohol?", a: "Glucose and fructose — both are converted by yeast into ethanol and CO₂ during fermentation." },
    { q: "Name the four main wine styles.", a: "Still, sparkling, fortified, and dessert/sweet wines." },
    { q: "What does 'terroir' mean in wine?", a: "The complete natural environment of a wine: soil, climate, topography, and local microorganisms — everything that imparts a sense of place." },
    { q: "At what Brix (sugar level) are most wine grapes harvested?", a: "Typically 20–26° Brix, depending on the desired wine style and alcohol level." },
  ],
  2: [
    { q: "What is the difference between continental and maritime climates?", a: "Continental climates have extreme temperature swings (hot summers, cold winters). Maritime climates are moderated by ocean proximity — cooler summers, milder winters." },
    { q: "Define 'diurnal temperature variation' and its effect on wine.", a: "The difference between daytime high and nighttime low. High variation preserves acidity and aromatics, producing more complex, structured wines." },
    { q: "What is 'canopy management'?", a: "Viticultural practices — leaf removal, shoot positioning, hedging — that manage vine foliage to optimize sunlight exposure, airflow, and grape development." },
    { q: "Describe the difference between 'Old World' and 'New World' viticulture approaches.", a: "Old World (Europe) emphasizes tradition, appellation rules, and terroir expression. New World (Americas, Australia, etc.) allows more experimentation, varietal labeling, and technological intervention." },
    { q: "What is 'véraison'?", a: "The onset of grape ripening — when berries soften, change color, and begin accumulating sugars while acids decline." },
  ],
  3: [
    { q: "What is 'malolactic fermentation' (MLF)?", a: "A secondary fermentation where tart malic acid is converted to softer lactic acid by bacteria. Reduces acidity and adds a buttery, creamy texture." },
    { q: "What is the difference between the Traditional Method and Charmat Method for sparkling wine?", a: "Traditional Method (Champagne): secondary fermentation in the bottle. Charmat (Prosecco): secondary fermentation in a pressurized tank. Traditional produces more complexity and autolytic character." },
    { q: "What does 'skin contact' contribute to white wine production?", a: "Extended skin contact extracts tannins, color, and phenolics — producing 'orange wines' with more texture and structure than standard whites." },
    { q: "How is Port fortified, and what does it retain?", a: "Neutral grape spirit (aguardente) is added mid-fermentation, stopping yeast activity and retaining residual grape sugars, producing a sweet fortified wine." },
  ],
  4: [
    { q: "Name the main sub-regions of the Médoc (Left Bank Bordeaux).", a: "Saint-Estèphe, Pauillac, Saint-Julien, Margaux, Moulis, Listrac, Haut-Médoc, and Médoc." },
    { q: "What is the difference between Côte de Nuits and Côte de Beaune in Burgundy?", a: "Côte de Nuits is renowned primarily for Pinot Noir reds. Côte de Beaune produces both reds and the finest white Burgundies (Chardonnay), including Montrachet." },
    { q: "What three grapes may be used in Champagne production?", a: "Chardonnay, Pinot Noir, and Pinot Meunier." },
    { q: "What does 'négociant' mean in Burgundy?", a: "A wine merchant who buys grapes or bulk wine from growers, then blends, bottles, and sells under their own label." },
    { q: "What is Sauternes, and how is its sweetness achieved?", a: "A sweet white wine from Bordeaux made from Sémillon, Sauvignon Blanc, and Muscadelle affected by Botrytis cinerea (noble rot), which concentrates sugars." },
    { q: "Name the major Northern Rhône appellations and their key grape.", a: "Côte-Rôtie, Condrieu, Saint-Joseph, Crozes-Hermitage, Hermitage, Cornas — dominated by Syrah (reds) and Viognier (whites in Condrieu)." },
  ],
  5: [
    { q: "What grape variety produces Barolo and Barbaresco?", a: "Nebbiolo — known for high tannins, high acidity, and flavors of tar, roses, and dried cherry." },
    { q: "Explain the DOCG classification in Italy.", a: "Denominazione di Origine Controllata e Garantita — Italy's highest wine classification, with strict rules on production and a government guarantee seal." },
    { q: "What are the primary grapes in Chianti Classico?", a: "Sangiovese is dominant (minimum 80%), optionally blended with Canaiolo, Colorino, or international varieties like Cabernet Sauvignon." },
    { q: "What is 'appassimento' and which wines use it?", a: "Drying harvested grapes to concentrate sugars and flavors before fermentation. Used in Amarone della Valpolicella, Recioto, and some Ripasso wines." },
    { q: "What is the difference between Prosecco DOC and Prosecco DOCG?", a: "DOCG (Conegliano Valdobbiadene) is the higher tier with stricter rules and superior terroir. DOC covers a broader, flatter area. Both use Glera grapes via Charmat method." },
  ],
  6: [
    { q: "Name the three Rioja subzones and their general styles.", a: "Rioja Alta (cooler, elegant), Rioja Alavesa (highest altitude, structured), Rioja Oriental/Baja (warmer, fuller-bodied, more Garnacha)." },
    { q: "What are the main grape varieties of Rioja?", a: "Tempranillo (primary), Garnacha, Mazuelo (Carignan), and Graciano for reds. Viura for whites." },
    { q: "What is 'flor' in Sherry production?", a: "A layer of native yeast that grows on the surface of Fino and Manzanilla Sherries during aging, protecting them from oxidation and imparting a distinctive yeasty, saline character." },
    { q: "Describe the Solera aging system.", a: "A fractional blending system where wine is progressively moved through a series of barrels from oldest to youngest. The oldest barrel is partially drawn for bottling and topped with younger wine." },
    { q: "What grape is used for Vinho Verde, and what defines the style?", a: "Several local grapes (Loureiro, Arinto, Alvarinho/Albariño). Style is light, low-alcohol, high-acid, with a slight spritz. From Portugal's Minho region." },
  ],
  7: [
    { q: "List the six German Prädikat levels from lowest to highest sugar concentration.", a: "Kabinett → Spätlese → Auslese → Beerenauslese → Eiswein → Trockenbeerenauslese (TBA)" },
    { q: "What is the key difference between Mosel and Rhine Rieslings?", a: "Mosel: lighter, more delicate, higher acidity, lower alcohol, slate soils. Rhine (Rheingau, Rheinhessen): fuller-bodied, rounder, from loess and loam soils." },
    { q: "What is Austria's DAC system?", a: "Districtus Austriae Controllatus — ties specific grape varieties to specific regions (e.g., Grüner Veltliner in Wachau, Blaufränkisch in Mittelburgenland)." },
    { q: "What is 'Spätburgunder' in Germany?", a: "Pinot Noir — Germany's most planted red variety, producing elegant, lighter-bodied reds particularly from Baden and the Ahr." },
  ],
  9: [
    { q: "What is an AVA in the United States?", a: "American Viticultural Area — a designated wine grape-growing region defined by the TTB (Tax and Trade Bureau) based on geographical and climatic characteristics." },
    { q: "Name the main sub-AVAs of Napa Valley.", a: "Rutherford, Oakville, Stags Leap District, Howell Mountain, Mount Veeder, Carneros, Calistoga, Spring Mountain, Atlas Peak (among others)." },
    { q: "What grape is Oregon's Willamette Valley most famous for?", a: "Pinot Noir — the cool, maritime-influenced climate mirrors Burgundy, producing elegant, earthy Pinot Noirs." },
    { q: "What is Zinfandel's historical connection to Italy?", a: "Zinfandel is genetically identical to the Croatian grape Tribidrag/Crljenak Kaštelanski, and closely related to Italy's Primitivo." },
  ],
  13: [
    { q: "Name five major red grape varieties and their primary classic regions.", a: "Cabernet Sauvignon (Bordeaux/Napa), Pinot Noir (Burgundy/Oregon), Syrah/Shiraz (Rhône/Barossa), Nebbiolo (Piedmont), Tempranillo (Rioja/Ribera del Duero)." },
    { q: "Name five major white grape varieties and their primary classic regions.", a: "Chardonnay (Burgundy/Champagne), Riesling (Germany/Alsace), Sauvignon Blanc (Loire/NZ), Pinot Grigio/Gris (Alsace/Italy), Gewurztraminer (Alsace)." },
    { q: "What is 'ampelography'?", a: "The science of identifying and classifying grape varieties, primarily through the visual study of vine leaves, shoots, and berries." },
    { q: "What grape variety is responsible for Sancerre and Pouilly-Fumé?", a: "Sauvignon Blanc — producing crisp, minerally wines with herbaceous and citrus notes in the eastern Loire Valley." },
  ],
  14: [
    { q: "At what temperature should Champagne and other sparkling wines be served?", a: "6–10°C (43–50°F) — cold enough to preserve bubbles and freshness but not so cold as to suppress aromas." },
    { q: "What is 'cork taint' (TCA) and how does it affect wine?", a: "2,4,6-Trichloroanisole (TCA) causes a musty, wet cardboard smell that suppresses fruit aromas. 'Corked' wine cannot be fixed." },
    { q: "Why is decanting used for red wines?", a: "Two reasons: (1) to remove sediment in older wines, and (2) to aerate young, tannic wines, softening tannins and opening up aromas." },
    { q: "What is 'reduction' as a wine fault?", a: "A reductive, sulphurous off-aroma (rotten eggs, rubber, burnt match) caused by excess sulfur compounds. Often resolved by aeration or decanting." },
  ],
  15: [
    { q: "What does the SWE Wine Tasting Grid assess?", a: "Appearance (color, clarity, intensity), Aroma (clean/faulty, intensity, characteristics), Palate (structure: acidity, tannin, body, alcohol, finish), and Quality/Identity." },
    { q: "What does 'typicity' mean in wine evaluation?", a: "How well a wine expresses the expected characteristics of its grape variety and region — key for identity assessment on the SWE tasting grid." },
    { q: "How does climate affect wine acidity?", a: "Cooler climates preserve more tartaric and malic acid, producing higher-acid wines. Warmer climates degrade acids faster, producing lower-acid, rounder wines." },
  ],
};

// ── MAP QUIZ DATA ──
// Questions organized by region with geographic/positional focus

export const MAP_REGIONS = [
  { id: "france",     label: "France" },
  { id: "italy",      label: "Italy" },
  { id: "spain",      label: "Spain & Portugal" },
  { id: "germany",    label: "Germany & Austria" },
  { id: "newworld",   label: "New World" },
  { id: "global",     label: "Global Mix" },
];

export const MAP_QUESTIONS = {
  france: [
    {
      q: "Arrange these Bordeaux Left Bank appellations from north to south.",
      type: "order",
      options: ["Saint-Estèphe", "Pauillac", "Saint-Julien", "Margaux"],
      answer: ["Saint-Estèphe", "Pauillac", "Saint-Julien", "Margaux"],
      hint: "A helpful mnemonic: 'Some People Say Merci' — Saint-Estèphe → Pauillac → Saint-Julien → Margaux, running south along the Gironde."
    },
    {
      q: "Which of these Champagne regions is the MOST NORTHERLY?",
      type: "mc",
      options: ["Montagne de Reims", "Vallée de la Marne", "Côte des Blancs", "Aube"],
      answer: "Montagne de Reims",
      hint: "Montagne de Reims surrounds Reims itself, the northernmost city in the Champagne region. The Aube is actually the southernmost sub-region."
    },
    {
      q: "The Rhône River runs north to south. Which appellation is at the SOUTHERN end of the Rhône Valley?",
      type: "mc",
      options: ["Côte-Rôtie", "Hermitage", "Châteauneuf-du-Pape", "Condrieu"],
      answer: "Châteauneuf-du-Pape",
      hint: "The Southern Rhône begins around Montélimar. Châteauneuf-du-Pape is the flagship of the South, near Avignon. Côte-Rôtie and Hermitage are in the Northern Rhône."
    },
    {
      q: "Which Loire Valley appellation is the MOST EASTERLY (closest to the source of the Loire River)?",
      type: "mc",
      options: ["Muscadet", "Vouvray", "Sancerre", "Anjou"],
      answer: "Sancerre",
      hint: "The Loire flows west to the Atlantic. Sancerre and Pouilly-Fumé are in the far eastern Loire, closest to Burgundy — hence their Sauvignon Blanc's crisp, minerally style."
    },
    {
      q: "Alsace borders which country to the east, sharing many of the same grape varieties?",
      type: "mc",
      options: ["Belgium", "Luxembourg", "Switzerland", "Germany"],
      answer: "Germany",
      hint: "Alsace sits on the west bank of the Rhine River — Germany's Baden region is directly across. This explains the shared varieties: Riesling, Gewurztraminer, Pinot Gris, and Muscat."
    },
    {
      q: "Chablis is geographically closest to which other French wine region?",
      type: "mc",
      options: ["Champagne", "Bordeaux", "The Loire Valley", "Languedoc"],
      answer: "Champagne",
      hint: "Chablis, in the far north of Burgundy, is actually closer to Champagne than to the rest of Burgundy — explaining its noticeably cool climate and high-acid Chardonnay style."
    },
    {
      q: "Arrange these Burgundy appellations from north to south: Gevrey-Chambertin, Beaune, Meursault, Nuits-Saint-Georges.",
      type: "order",
      options: ["Gevrey-Chambertin", "Nuits-Saint-Georges", "Beaune", "Meursault"],
      answer: ["Gevrey-Chambertin", "Nuits-Saint-Georges", "Beaune", "Meursault"],
      hint: "Gevrey-Chambertin is the northernmost premier commune of the Côte de Nuits. Nuits-Saint-Georges follows, then the Côte de Beaune begins with Beaune itself, and Meursault (famous for white Burgundy) lies further south."
    },
    {
      q: "Which French wine region is located on the Mediterranean coast, sharing a border with Spain?",
      type: "mc",
      options: ["Provence", "Languedoc-Roussillon", "Rhône", "Jura"],
      answer: "Languedoc-Roussillon",
      hint: "Roussillon (part of Languedoc-Roussillon) borders Spain at the Pyrenees. The region produces Banyuls, a fortified wine similar to Spanish Garnacha-based wines."
    },
  ],
  italy: [
    {
      q: "Which of these Italian regions is in the FAR NORTHWEST, bordering France and Switzerland?",
      type: "mc",
      options: ["Tuscany", "Piedmont", "Veneto", "Campania"],
      answer: "Piedmont",
      hint: "Piedmont ('foot of the mountains') is tucked into the northwestern corner of Italy, surrounded by the Alps on three sides. It borders both France (to the west) and Switzerland (to the north)."
    },
    {
      q: "Arrange these Italian wine regions from north to south: Sicily, Tuscany, Veneto, Piedmont.",
      type: "order",
      options: ["Veneto", "Piedmont", "Tuscany", "Sicily"],
      answer: ["Piedmont", "Veneto", "Tuscany", "Sicily"],
      hint: "From north: Piedmont and Veneto are both in northern Italy (Piedmont is slightly more northwest), Tuscany is central, and Sicily is the island at the southernmost tip."
    },
    {
      q: "Barolo and Barbaresco are both in Piedmont. Which is located further NORTH?",
      type: "mc",
      options: ["Barolo", "Barbaresco", "They are the same distance from Alba", "Neither — they are in Tuscany"],
      answer: "Barbaresco",
      hint: "Both Barolo and Barbaresco are near Alba. Barbaresco is located northeast of Alba, while Barolo lies to the southwest. Barbaresco is slightly closer to the Tanaro River."
    },
    {
      q: "The Chianti Classico zone lies between which two Tuscan cities?",
      type: "mc",
      options: ["Rome and Florence", "Florence and Siena", "Siena and Bologna", "Pisa and Lucca"],
      answer: "Florence and Siena",
      hint: "The Chianti Classico zone occupies the hills between Florence (north) and Siena (south) — this is the historical heartland of Chianti, with the black rooster (Gallo Nero) as its symbol."
    },
    {
      q: "Prosecco DOC and Prosecco DOCG (Conegliano Valdobbiadene) are located in which region?",
      type: "mc",
      options: ["Piedmont", "Tuscany", "Veneto", "Trentino-Alto Adige"],
      answer: "Veneto",
      hint: "The Veneto, in northeastern Italy near Venice, is home to Prosecco. The DOCG zone of Conegliano Valdobbiadene sits in the foothills of the Dolomites north of Treviso."
    },
  ],
  spain: [
    {
      q: "The Rioja wine region straddles which river valley?",
      type: "mc",
      options: ["Tagus (Tejo)", "Ebro", "Douro (Duero)", "Guadalquivir"],
      answer: "Ebro",
      hint: "Rioja runs along the Ebro River valley in northern Spain. The name 'Rioja' is derived from the Oja River, a tributary of the Ebro."
    },
    {
      q: "Which Spanish wine region is located on the Meseta plateau of Castile, at over 800m elevation, famous for Tempranillo?",
      type: "mc",
      options: ["Rioja", "Ribera del Duero", "Priorat", "Rías Baixas"],
      answer: "Ribera del Duero",
      hint: "Ribera del Duero sits on the high plateau of Castile at 800–1000m elevation along the Duero River. Extreme diurnal temperature variation produces concentrated, structured Tempranillo wines."
    },
    {
      q: "Manzanilla is a style of Sherry produced ONLY in which coastal town?",
      type: "mc",
      options: ["Jerez de la Frontera", "El Puerto de Santa María", "Sanlúcar de Barrameda", "Cádiz"],
      answer: "Sanlúcar de Barrameda",
      hint: "Manzanilla can only legally be produced in Sanlúcar de Barrameda, where the Atlantic sea air produces a thicker flor layer, giving the wine its distinctive salty, maritime character."
    },
    {
      q: "Port wine production is centered in Portugal's Douro Valley. In which city is it traditionally aged and shipped?",
      type: "mc",
      options: ["Lisbon", "Braga", "Vila Nova de Gaia (Porto)", "Coimbra"],
      answer: "Vila Nova de Gaia (Porto)",
      hint: "Grapes are grown in the Douro Valley, but Port has traditionally been shipped from the lodges (warehouses) in Vila Nova de Gaia, across the river from Porto, where the cooler Atlantic climate aids aging."
    },
    {
      q: "Galicia, home to Albariño (Rías Baixas), is located in which part of Spain?",
      type: "mc",
      options: ["Southeast (near Valencia)", "Northwest (near Portugal border)", "Northeast (near France)", "South (near Andalusia)"],
      answer: "Northwest (near Portugal border)",
      hint: "Galicia is in the rainy, green northwest of Spain — bordering Portugal to the south and the Atlantic to the west. The maritime climate is perfect for the high-acid Albariño grape."
    },
  ],
  germany: [
    {
      q: "Arrange these German wine regions from north to south: Mosel, Rheingau, Pfalz, Baden.",
      type: "order",
      options: ["Rheingau", "Mosel", "Pfalz", "Baden"],
      answer: ["Mosel", "Rheingau", "Pfalz", "Baden"],
      hint: "Mosel is the northernmost (near Trier and Luxembourg border), Rheingau sits in the middle Rhine area, Pfalz is further south, and Baden — Germany's southernmost region — borders France's Alsace."
    },
    {
      q: "The Wachau, Austria's most prestigious wine region, lies along which river?",
      type: "mc",
      options: ["Danube (Donau)", "Rhine", "Mosel", "Inn"],
      answer: "Danube (Donau)",
      hint: "The Wachau is a dramatic gorge of the Danube River west of Vienna, known for its steep terraced vineyards producing world-class Grüner Veltliner and Riesling."
    },
    {
      q: "Which German wine region produces wines on extremely steep slate slopes, with the Ruwer and Saar as sub-regions?",
      type: "mc",
      options: ["Rheingau", "Pfalz", "Mosel", "Nahe"],
      answer: "Mosel",
      hint: "The Mosel is famous for its dramatic 70-degree slate slopes along the Mosel River. The Saar and Ruwer tributaries are sub-regions within the Mosel wine region. Slate retains heat and drains well."
    },
    {
      q: "Grüner Veltliner is Austria's most planted grape. Which THREE Austrian regions are most associated with it?",
      type: "mc",
      options: ["Wachau, Kamptal, Kremstal", "Burgenland, Steiermark, Wien", "Carnuntum, Thermenregion, Weinviertel", "Neusiedlersee, Wagram, Traisental"],
      answer: "Wachau, Kamptal, Kremstal",
      hint: "The 'WKK' trio — Wachau, Kamptal, and Kremstal — are Austria's most prestigious Grüner Veltliner zones, all in Lower Austria (Niederösterreich) along the Danube and its tributaries."
    },
  ],
  newworld: [
    {
      q: "Arrange these California wine regions from north to south: Paso Robles, Napa Valley, Santa Barbara, Sonoma County.",
      type: "order",
      options: ["Sonoma County", "Napa Valley", "Paso Robles", "Santa Barbara"],
      answer: ["Sonoma County", "Napa Valley", "Paso Robles", "Santa Barbara"],
      hint: "Sonoma and Napa are close neighbors in the North Bay, with Sonoma slightly more northerly. Paso Robles is in San Luis Obispo County (central CA), and Santa Barbara is further south, closer to Los Angeles."
    },
    {
      q: "Marlborough, New Zealand's most famous Sauvignon Blanc region, is on which island?",
      type: "mc",
      options: ["North Island", "South Island", "Stewart Island", "Waiheke Island"],
      answer: "South Island",
      hint: "Marlborough is at the northern tip of New Zealand's South Island. Its sunny days, cool nights, and stony soils produce the intense, herbaceous Sauvignon Blanc style that put NZ on the wine map."
    },
    {
      q: "The Barossa Valley is one of Australia's most famous wine regions. It is located near which city?",
      type: "mc",
      options: ["Sydney", "Melbourne", "Adelaide", "Perth"],
      answer: "Adelaide",
      hint: "The Barossa Valley is approximately 60km northeast of Adelaide, South Australia's capital. South Australia produces more than 50% of Australia's wine, and the Barossa is its most celebrated region."
    },
    {
      q: "Mendoza, Argentina's primary wine region, lies at the foot of which mountain range?",
      type: "mc",
      options: ["Andes", "Pampas", "Patagonian Plateau", "Serra Gaúcha"],
      answer: "Andes",
      hint: "Mendoza sits at 600–1,100m altitude at the foothills of the Andes. The altitude and snowmelt irrigation compensate for the desert climate, producing concentrated, structured Malbec wines."
    },
    {
      q: "South Africa's Stellenbosch wine region is located near which body of water, which moderates its climate?",
      type: "mc",
      options: ["Indian Ocean only", "Atlantic Ocean only", "The confluence of the Indian and Atlantic Oceans", "The Vaal River"],
      answer: "The confluence of the Indian and Atlantic Oceans",
      hint: "The Cape Peninsula sits at the meeting point of the Indian and Atlantic Oceans — the cold Benguela Current from the Atlantic moderates temperatures significantly, allowing for elegant, cool-climate wines despite the region's latitude."
    },
  ],
  global: [],
};

// Build global mix dynamically
const allMapQs = [];
Object.entries(MAP_QUESTIONS).forEach(([region, qs]) => {
  if (region !== "global") qs.forEach(q => allMapQs.push({ ...q, _region: region }));
});

// Shuffle utility (seeded per session for reproducibility)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

MAP_QUESTIONS.global = shuffle(allMapQs);

export const QUIZ_QUESTIONS = {
  4: [
    { q: "Which Bordeaux classification ranks châteaux on a 1–5 growth scale?", opts: ["Saint-Émilion Classification", "1855 Médoc Classification", "Graves Classification", "Pomerol Classification"], ans: 1, exp: "The 1855 Classification, established for the Paris World Exhibition, ranked Médoc châteaux (plus Haut-Brion) into five crus. It remains largely unchanged today, with Mouton Rothschild elevated in 1973 being the only change." },
    { q: "What style of wine is produced in Sauternes?", opts: ["Dry red", "Dry white", "Sweet white", "Sparkling"], ans: 2, exp: "Sauternes produces luscious sweet whites from Sémillon, Sauvignon Blanc, and Muscadelle affected by Botrytis cinerea (noble rot), which dehydrates berries and concentrates sugars." },
    { q: "Which Burgundy Grand Cru is consistently the world's most expensive wine?", opts: ["Chambolle-Musigny", "Romanée-Conti", "Montrachet", "Corton-Charlemagne"], ans: 1, exp: "Romanée-Conti (Domaine de la Romanée-Conti) is a 1.8-hectare monopole in Vosne-Romanée, Côte de Nuits. Its tiny production and legendary quality place it among the world's most expensive wines." },
    { q: "Champagne 'Blanc de Blancs' is made exclusively from which grape?", opts: ["Pinot Noir", "Pinot Meunier", "Chardonnay", "Aligoté"], ans: 2, exp: "Blanc de Blancs ('white from whites') uses only Chardonnay. The result is a lighter, more delicate, citrus-forward style compared to blended Champagnes or Blanc de Noirs." },
  ],
  5: [
    { q: "Amarone della Valpolicella is made primarily from which grape?", opts: ["Sangiovese", "Nebbiolo", "Corvina", "Montepulciano"], ans: 2, exp: "Amarone is made primarily from Corvina (with Rondinella and Molinara) via appassimento — grapes are dried for months to concentrate sugars and flavors before fermentation." },
    { q: "What does 'Superiore' indicate on an Italian wine label?", opts: ["Made from superior grapes", "Higher alcohol and/or longer aging", "Single-vineyard designation", "Organic certification"], ans: 1, exp: "In Italian DOC/DOCG law, 'Superiore' typically indicates higher minimum alcohol and/or longer mandatory aging than the standard version." },
    { q: "Which grape must make up at least 80% of Chianti Classico?", opts: ["Cabernet Sauvignon", "Montepulciano", "Sangiovese", "Barbera"], ans: 2, exp: "Chianti Classico DOCG requires a minimum of 80% Sangiovese. The remaining 20% can be other approved local or international varieties." },
  ],
  6: [
    { q: "Which type of Sherry is completely dry and aged under flor yeast?", opts: ["Oloroso", "Pedro Ximénez", "Fino", "Cream Sherry"], ans: 2, exp: "Fino Sherry is completely dry, aged biologically under a layer of flor yeast in the Solera system, which prevents oxidation and gives a pale color, delicate texture, and saline, yeasty character." },
    { q: "Tempranillo is known by what name in the Ribera del Duero?", opts: ["Tinto Roriz", "Tinto Fino (or Tinta del País)", "Cencibel", "Ull de Llebre"], ans: 1, exp: "In Ribera del Duero, Tempranillo is called Tinto Fino or Tinta del País. It's also known as Tinto Roriz in Portugal, Cencibel in La Mancha, and Ull de Llebre in Catalonia." },
  ],
  9: [
    { q: "Which California AVA is specifically known for Cabernet Sauvignon on volcanic and alluvial valley floor soils?", opts: ["Santa Barbara", "Napa Valley", "Paso Robles", "Anderson Valley"], ans: 1, exp: "Napa Valley, particularly Rutherford and Oakville, is world-renowned for Cabernet Sauvignon grown on its diverse volcanic and alluvial soils. The 'Rutherford Dust' is a famous descriptor for its wines." },
    { q: "Oregon's wine laws require what minimum percentage of a stated variety on the label?", opts: ["51%", "75%", "85%", "100%"], ans: 2, exp: "Oregon requires 90% of a stated variety (with the exception of Cabernet Sauvignon, which requires 75%) — stricter than the federal US minimum of 75%. This reflects Oregon's commitment to varietal authenticity." },
  ],
};
