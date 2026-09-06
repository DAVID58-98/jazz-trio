# E-mailový podpis — David Kleňha

Složka patří do kořene repozitáře `jazz-trio`. Po nasazení běží na
`https://jazztrio.cz/podpis/`.

## Postup

1. Rozbal ZIP → složka `podpis` a soubor `.nojekyll`.
2. GitHub → repozitář `jazz-trio` → **Add file** → **Upload files** → přetáhni
   obojí do kořene → **Commit changes**.
3. Ověř `https://jazztrio.cz/podpis/ekvalizer-anim2x.gif` — musí se otevřít obrázek.
4. Otevři `https://jazztrio.cz/podpis/`, vyber jazyk, velikost a portrét,
   přepni náhled na **Tmavý (Gmail)** a zkontroluj, jak to bude vypadat.
5. **Kopírovat podpis** → v Gmailu do editoru podpisu `Cmd+A`, `Cmd+V`.
6. Totéž pro anglickou verzi jako druhý podpis.
7. Dole ve **Výchozím nastavení podpisů** nastav podpis pro nové zprávy
   i odpovědi a ulož změny.
8. V mobilní aplikaci Gmail vypni „Mobilní podpis".

## Velikosti

| | Šířka × výška | Portrét | Kde se hodí |
| --- | --- | --- | --- |
| **L** | 436 × 218 px | 176 px | Původní velikost. |
| **M** | 380 × 188 px | 152 px | Kompromis, na monitoru už nezabírá půl okna. |
| **S** | 320 × 158 px | 128 px | Nejnižší. Vejde se i na úzký telefon bez zalomení. |

Velikosti nejsou zmenšenina jedné šablony — každá má vlastní velikosti písma,
odsazení, ikon i tlačítka, aby text zůstal čitelný a nic se nerozsypalo.
Předgenerované soubory: `podpis-cz-L.html` … `podpis-en-S.html`.
Stránka `index.html` je umí složit i sama, včetně výběru portrétu.

## Portréty

| Soubor | Váha | Chování |
| --- | --- | --- |
| `ekvalizer-anim2x.gif` | 184 kB | **Výchozí.** Animovaný ve 2×, všech 166 snímků, pixel na pixel jako tvoje předloha. Průhledné je jen okolí portrétu, uvnitř zůstává krémové pozadí, takže v tmavém režimu je kolem hlavy krémový kruh místo světlého obdélníku přes půl podpisu. |
| `ekvalizer.png` | 48 kB | Statický, 2×, plně průhledný. Nejostřejší a v tmavém režimu úplně bez zbytků — jen se nehýbe. |
| `ekvalizer-anim.gif` | 256 kB | Animovaný, 1×, plně průhledný. V tmavém režimu nezůstane vůbec nic světlého, ale na retině je měkčí. |

Proč to takhle. Animovaný GIF se komprimuje tím, že mezi snímky ukládá jen
změněné pixely. Jakmile se má nějaká plocha mezi snímky *mazat* do průhlednosti,
musí se ukládat celé snímky a soubor naroste na 2–3 MB. Řešení je nechat
průhlednou jen tu část, která se nikdy nemění — okolí portrétu — a uvnitř
obrazce nechat krémovou. Animace se tak komprimuje jako dřív, ostrost je 2×
a v tmavém režimu zbyde jen krémový tvar kolem hlavy, který vypadá jako záměr.

## Tmavý režim

Gmail na iOS a Androidu překlápí barvy celé zprávy — pozadí i text. Obrázky
nechává být. Proto se ti podpis rozpadl: krémové pozadí buňky se překlopilo do
tmavě hnědé, ale obrázek s krémovým pozadím zůstal světlý.

Co s tím jde a co ne:

- **Vyřešeno:** portrét i ikony mají průhledné pozadí, takže se karta v tmavém
  režimu překlopí celá najednou. Světlý obdélník přes půl podpisu je pryč;
  u výchozího portrétu zbyde krémový kruh těsně kolem hlavy.
- **Vyřešeno:** ikony telefonu a obálky mají teď střední odstín teal
  (`#2f7f80`) místo tmavého `#0f5257`. Tmavá ikona by na tmavém pozadí zmizela,
  protože obrázky se nepřeklápějí. Ve světlém režimu je rozdíl sotva znát.
- **Nejde vyřešit:** emeraldový pruh se v tmavém režimu překlopí do světle
  modré a zlaté tlačítko do tmavě hnědé. Kontrast zůstane, značkové barvy ne.
  Gmail v podpisu maže `<style>`, `@media` i `color-scheme`, takže neexistuje
  žádný způsob, jak mu předepsat vlastní tmavou variantu. Barvy v náhledu jsem
  odečetl přímo z tvého screenshotu z iOS, takže tlačítko **Tmavý (Gmail)**
  ukazuje reálný výsledek, ne odhad.

## Otestováno

Vykresleno v prohlížeči (Chromium) ve všech kombinacích jazyk × velikost ×
portrét × režim, v šířkách 320, 360, 420 px a v plné šířce:

- **320 px:** S i M se vejdou na jeden řádek. U L se tlačítko zalomí pod odkazy,
  což je záměr — nic nepřeteče a Gmail nemusí zmenšovat celou zprávu.
- **Tmavý režim:** karta je celistvá, text i ikony čitelné.
- **Outlook pro Windows:** zobrazí z animovaného GIFu první snímek a ignoruje
  zaoblené rohy — podpis bude hranatý a statický, jinak funkční. Se statickým
  PNG je rozdíl jen v těch rozích.

## Na co si dát pozor

- **Neměň obsah souboru na stejné adrese.** Odeslané e-maily načítají obrázky
  živě, změna by se promítla i zpětně. Nová verze = nový název souboru.
- Podpis má ~3 400 znaků, limit editoru Gmailu je 10 000.
- Písmo: GIF i PNG jsou vyrenderované v Unbounded a Poppins, ale text podpisu
  je živý HTML text a Gmail webfonty v podpisu nenačte. Jména a kontakty proto
  poběží v Helvetice/Arialu. Jinak by musel být celý podpis obrázek a nefungovaly
  by odkazy.
