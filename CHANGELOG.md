# Changelog jazz-trio — úprava cenotvorby (16. 9. 2026)

## Shrnutí nové cenové politiky
| Sestava | CZ / EN (Kč) | DE (€) |
|---|---|---|
| Duo | od 15 000 Kč | ab 790 € |
| Trio | od 20 000 Kč | ab 1.050 € |
| Kvartet | od 27 000 Kč | ab 1.390 € |
| Kvintet | od 33 000 Kč | ab 1.690 € |

- Rozmezí „od–do“ nahrazeno cenou „od“ (žádný horní strop).
- Doprava: 7 Kč/km za vůz (duo, trio = 1 vůz → 7 Kč/km; kvartet, kvintet = 2 vozy → 14 Kč/km). DE: 0,35 € / 0,70 € za km. Doprava po Praze zůstává v ceně.
- Standardní produkce zůstává 3 × 45 minut (formuláře beze změny).
- V cenových pasážích uvedeno „vlastní profesionální stereo ozvučení BOSE“.
- Doplněny formulace o konečné ceně (délka, termín, místo, typ akce), o kalkulaci firemních akcí podle rozsahu a o výhodnějších podmínkách (všední dny, mimo sezónu, rezervace s předstihem).
- DE: odstraněn přepočet kurzem 25 CZK/€ i zmínka o fakturaci v korunách.

## Hlavní stránky (CZ, EN, DE)
- **meta description:** cena odstraněna, na konec doplněno „Nabídka na míru do 24 hodin.“ / „Tailored quote within 24 hours.“ / „Angebot binnen 24 Stunden.“ Zbytek vašeho textu beze změny.
- **JSON-LD MusicGroup description:** vypuštěna závěrečná věta s cenou.
- **JSON-LD Offer (4 sestavy):** odstraněny `price` a `maxPrice`, `minPrice` nastaven na novou cenu „od“. Popis nabídky nově uvádí cenu od, ozvučení BOSE, faktory konečné ceny a novou sazbu za km.
- **FAQ „Jaká je orientační cena…“** (viditelné i FAQPage schema): „se pohybuje mezi X a Y“ → „začíná na X“. Doplněny věty o konečné ceně, o firemních akcích a o výhodnějších podmínkách, ozvučení BOSE a nová sazba za km. Věta o sazbě nově zmiňuje rezervu na výkyvy cen paliva (místo „jen skutečné náklady“).
- **Další cenová FAQ** (ostatní sestavy, levnější varianta apod.): rozmezí → „od“, ozvučení BOSE.
- **DE:** odstraněna věta „Umrechnungskurs 25 CZK / 1 €; … Rechnung in tschechischen Kronen“.
## llms.txt
- Všechny ceny sestav přepsány na „od“, v EN summary „From CZK …“.
- Doprava 7 Kč/km (resp. 14 Kč/km u dvou vozů), sazba nově pokrývá i rezervu na výkyvy cen paliva.
- Doplněno ozvučení BOSE, faktory konečné ceny a výhodnější podmínky.
- Odkaz na DE verzi: nové eurové ceny „od“.
## Blog (jazztrio.cz) — ceníkové články (CZ / EN / DE)
`blog/ceny-jazzove-kapely-na-firemni-akci.html`, `en/blog/jazz-band-prices-corporate-events.html`, `de/blog/preise-jazzband-firmenevent.html`
- Meta/OG/Twitter/JSON-LD description a perex: ceny „od“, zmínka BOSE a „kdy vychází výhodněji“.
- Tabulka ceníku: „od X Kč“. Pod ní doplněno, že jde o výchozí ceny a co určuje cenu konečnou. „Ceny jsou konečné pro akci v Praze“ → „Ceny jsou výchozí…“.
- „Co je v ceně“: položka ozvučení → „Vlastní profesionální stereo ozvučení BOSE“ s textem o ověřeném zvuku bez pískání a houkání (ozvučení je v ceně jako samostatná položka).
- „Co cenu zvyšuje“: nové řádky „Nejžádanější termín“ (prosinec, pátky a soboty v sezóně) a „Firemní a reprezentativní akce“ (podle rozsahu). Doprava 7 / 14 Kč/km.
- **Nová sekce „Kdy vychází cena výhodněji“** (všední den, mimo sezónu, rezervace předem, pravidelná spolupráce + poznámka, že prosinec je nejvytíženější).
- Doprava: tabulka 7 / 14 Kč/km. Sekce „Z čeho sazba vychází“ přepsána: odstraněna kalkulace po litrech (9,5 l, 45 Kč/l, 428 Kč, 4,28 Kč) a nahrazena textem o nákladech a rezervě na ceny paliva. Příklad Brno přepočítán (2 870 Kč trio / 5 740 Kč kvartet; DE 143,50 € / 287,00 €).
- Box „Rozpočet 20 000 Kč“: nově „Dvacet tisíc je výchozí cena tria…“ (DE: „Budget 1.050 €“).
- Nadpisy H3 sestav: „Duo — od 15 000 Kč“ atd. „Zhruba dvojnásobný“ → „víc než dvojnásobný“. Příklad srovnání 16 000 / 25 000 → 20 000 / 30 000 Kč (DE 1.000 / 1.500 €).
- „Kdy poptávat“: prosinec jako nejvytíženější měsíc.
- FAQ (viditelné i schema): ceny „od“ + věta o konečné ceně, ozvučení BOSE, doprava 7 / 14 Kč/km bez litrové kalkulace. **Nová otázka „Dá se na ceně ušetřit?“**
- DE: odstraněn odstavec s kurzem 25 CZK/€, přepočtem do CZK a fakturací v korunách, odstraněna i věta o českých cenách benzínu.
- dateModified / article:modified_time → 2026-09-16.

## Blog — vánoční články (CZ / EN / DE)
- FAQ „Mají prosincové termíny příplatek? — Ne…“ → **„Jak se v prosinci stanovuje cena?“**: prosinec je nejvytíženější měsíc, cena podle konkrétního termínu, ceny „od“, všední dny v 1. polovině prosince vycházejí výhodněji, pátky a soboty před Vánoci jsou nejžádanější.
- Sekce „Kdy rezervovat“: úvodní věta, že prosinec je nejvytíženější měsíc a termíny se zaplňují s několikaměsíčním předstihem.
- Sekce „Obsazení a ceny“: věta „Vánoční termíny nemají příplatek…“ nahrazena cenou podle termínu, doplněno ozvučení BOSE a doprava 7 / 14 Kč/km.
- Tabulka cen: „od“.

## Blog — vedlejší články (redukce s odkazem)
- `hudba-na-svatebni-obrad` / `wedding-ceremony-music` / `musik-hochzeitszeremonie`: výčet cen tří sestav nahrazen větou „Ceny večerního programu začínají na 15 000 Kč za duo — víc v ceníku“.
- `objednani-zive-hudby-v-praze` / `hiring-live-music-in-prague` / `live-musik-buchen-in-prag`: výčet čtyř sestav nahrazen „standardní večer začíná na 15 000 Kč za duo“ s odkazem na ceník.

## Blog — ostatní články s cenami (čísla přepsána na „od“)
- Srovnávací tabulky sestav (jaka-sestava, firemni-vecirek, svatba, firemni-akce-v-praze, vanocni + EN/DE protějšky): „od X“.
- FAQ „Kolik stojí…“ ve svatbě, firemním večírku a firemních akcích (CZ/EN/DE): ceny „od“ a doplněná věta „Konečná cena se odvíjí od termínu, délky programu a typu akce.“
- Poslech vs. tanec, vernisáž, restaurace a hotel, perex svatebního článku (CZ/EN/DE): ceny „od“.
- Meta description se souhrnným rozmezím („ceny od 10 000 do 32 000 Kč“ apod.) → „ceny od 15 000 Kč“ / „ab 790 €“.
- Všechny zmínky o dopravě (včetně `jak-vybrat-kapelu…`, `how-to-choose…`, `band-fuer-firmenabend…`): 7 / 14 Kč/km, 0,35 / 0,70 €/km.
- Přehledy blogu (`blog/`, `en/blog/`, `de/blog/`): karta ceníkového článku s novými cenami.
- dateModified / article:modified_time u změněných článků → 2026-09-16.
## sitemap.xml
- `lastmod` → 2026-09-16 u všech změněných stránek.

## Kontrola
- Automatický sken všech HTML a TXT souborů na staré ceny (10–32 tisíc Kč, CZK 10,000–32,000, 400–1.280 €, 6/12 Kč/km, 0,24/0,48 €/km, kurz 25 CZK, litrová kalkulace): **0 nálezů**.
- Všechny bloky JSON-LD jsou validní JSON, párování HTML tagů je beze změny oproti originálu.
- Formuláře, rozvržení a ostatní texty jsou beze změny.

## Obsah ZIPu
ZIP obsahuje jen změněné soubory ve struktuře repozitáře, stačí je nakopírovat přes existující.

---

# Kolo 2 — FAQ, navigace, slogan (16. 9. 2026)

Týká se všech hlavních stránek (CZ, EN, DE).

## Časté dotazy
- **Viditelné jsou první 4 otázky**, zbytek je skrytý pod tlačítkem „Zobrazit další dotazy“ („Show more questions“ / „Weitere Fragen anzeigen“). Po rozbalení se text tlačítka změní na „Skrýt další dotazy“. Tlačítko má `aria-expanded`.
- **Otevřená může být jen jedna otázka.** Řeší to atribut `name="faq"` (nativní akordeon) a pojistka v JS pro starší prohlížeče. Při sbalení dalších dotazů se zavřou i otevřené otázky uvnitř.
- **Stručné odpovědi, max. 3 věty:**
  - *Cena:* cena od, 3 × 45 minut, BOSE, doprava po Praze a sazba za km; konečná cena podle termínu, délky a typu akce, výhodněji ve všední den a při rezervaci s předstihem; nabídka do 24 hodin a odkaz na ceník (DE bez odkazu, jako dříve).
  - *Ozvučení:* BOSE do 80–100 hostů, větší akce se zvukařem pořadatele, odkaz na článek.
  - *Technické požadavky:* plocha, zásuvka 230 V, příjezd hodinu předem, zastřešení venku, odkaz na rider (DE bez odkazu, jako dříve).
  - *Ostatní odpovědi:* obsah beze změny, jen „Ano. …“ je sloučeno do jedné věty („Ano, …“).
- FAQPage schema (JSON-LD) odpovídá novým textům.
- CSS: styl tlačítka (obrys v barvě emerald, při najetí vyplněné) a `scroll-margin-top` pro `#kontakt`.

## Navigace (lišta i mobilní menu)
- Odstraněn odkaz **Galerie / Gallery** (sekce galerie na stránce zůstává).
- Za Blog přidán odkaz **Kontakt / Contact** → `#kontakt` (dlaždice s e-mailem a telefonem na konci stránky).
- Nové pořadí: Ukázky · Repertoár · Reference · Blog · Kontakt · přepínač jazyků · Ověřit termín.

## jazztrio.cz — slogan v hero
- „Dost plné, a přitom / komorní.“ → **„Plný zvuk, / přitom komorní.“**

## Kontrola
- Otestováno v prohlížeči na všech 12 stránkách: 4 viditelné otázky, vždy jen jedna otevřená, tlačítko rozbaluje a sbaluje, v menu je Kontakt, žádné JS chyby.
- JSON-LD validní, všechny odkazy na blog vedou na existující články.

## Změněné soubory celkem, obě kola (44)
- `blog/ceny-jazzove-kapely-na-firemni-akci.html`
- `blog/hudba-na-svatebni-obrad.html`
- `blog/index.html`
- `blog/jak-vybrat-kapelu-na-firemni-vecer.html`
- `blog/jaka-sestava-na-jakou-akci.html`
- `blog/jazz-k-poslechu-vs-hudba-k-tanci.html`
- `blog/jazz-na-firemni-vecirek.html`
- `blog/jazz-na-vernisaz-a-raut.html`
- `blog/jazzova-kapela-na-svatbu.html`
- `blog/jazzova-kapela-pro-firemni-akce-v-praze.html`
- `blog/objednani-zive-hudby-v-praze.html`
- `blog/vanocni-jazz-na-firemni-party.html`
- `blog/zivy-jazz-do-restaurace-a-hotelu.html`
- `de/blog/band-fuer-firmenabend-auswaehlen.html`
- `de/blog/duo-trio-quartett-quintett.html`
- `de/blog/index.html`
- `de/blog/jazz-firmenfeier.html`
- `de/blog/jazz-vernissage-empfang.html`
- `de/blog/jazz-zum-zuhoeren-vs-tanzmusik.html`
- `de/blog/jazzband-hochzeit.html`
- `de/blog/live-jazz-restaurant-hotel.html`
- `de/blog/live-jazzband-firmenevents-prag.html`
- `de/blog/live-musik-buchen-in-prag.html`
- `de/blog/musik-hochzeitszeremonie.html`
- `de/blog/preise-jazzband-firmenevent.html`
- `de/blog/weihnachtsjazz.html`
- `de/index.html`
- `en/blog/background-jazz-vs-dance-music.html`
- `en/blog/christmas-jazz-band.html`
- `en/blog/duo-trio-quartet-quintet.html`
- `en/blog/hiring-live-music-in-prague.html`
- `en/blog/how-to-choose-band-corporate-event.html`
- `en/blog/index.html`
- `en/blog/jazz-band-prices-corporate-events.html`
- `en/blog/jazz-for-corporate-events.html`
- `en/blog/jazz-gallery-opening-reception.html`
- `en/blog/live-jazz-band-corporate-events-prague.html`
- `en/blog/live-jazz-restaurant-hotel.html`
- `en/blog/wedding-ceremony-music.html`
- `en/blog/wedding-jazz-band.html`
- `en/index.html`
- `index.html`
- `llms.txt`
- `sitemap.xml`
