# E-mailový podpis — David Kleňha

Složka patří do kořene repozitáře `jazz-trio`. Po nasazení bude dostupná na
`https://jazztrio.cz/podpis/`.

## Co je uvnitř

| Soubor | K čemu je |
| --- | --- |
| `ekvalizer.gif` | Animovaný portrét, 176 × 174 px (vyříznutý z tvého velkého GIFu, 166 snímků, 185 kB). |
| `ico-tel.png` | Ikona telefonu, 18 × 18 px (také vyříznutá z GIFu, takže sedí přesně). |
| `ico-mail.png` | Ikona obálky, 18 × 18 px. |
| `podpis-cz.html` | HTML fragment podpisu, česká verze. |
| `podpis-en.html` | Anglická verze — role, tlačítko a `/en/` odkazy. |
| `index.html` | Náhled s přepínačem CZ/EN, šířkou 436 / 360 / 320 px, tmavým pozadím a tlačítkem Kopírovat. Má `noindex`. |
| `../.nojekyll` | Prázdný soubor do kořene repozitáře. Vypne Jekyll, aby GitHub Pages soubory servíroval tak, jak jsou. |

Nic dalšího vyrábět nemusíš, všechny tři obrázky jsou hotové.

## Postup krok za krokem

1. Rozbal ZIP. Dostaneš složku `podpis` a soubor `.nojekyll`.
2. Otevři GitHub → repozitář `jazz-trio` → **Add file** → **Upload files**.
3. Přetáhni do okna složku `podpis` **i** soubor `.nojekyll`. Obojí patří do
   kořene repozitáře, tedy vedle `index.html` webu.
4. Dole napiš commit zprávu a dej **Commit changes**.
5. Počkej minutu a otevři v prohlížeči `https://jazztrio.cz/podpis/ekvalizer.gif`.
   Musí se přehrát animace. Dokud tenhle odkaz nefunguje, podpis bude v e-mailu
   bez obrázků.
6. Otevři `https://jazztrio.cz/podpis/`, nech přepínač na **Čeština** a klikni
   na **Kopírovat podpis**.
7. Gmail → Nastavení → Obecné → Podpis → klikni na tužku u `JAZZ - TEST`,
   přejmenuj na `Jazz CZ`. Klikni do pravého editoru, `Cmd+A`, `Cmd+V`.
8. **Vytvořit nový** → `Jazz EN`. V náhledu přepni na **English**, znovu
   Kopírovat podpis, a vlož stejným způsobem.
9. Dole v **Výchozí nastavení podpisů** vyber `Jazz CZ` pro nové e-maily
   i pro odpovědi (teď máš „Bez podpisu"). Úplně dole **Uložit změny**.
10. V mobilní aplikaci Gmail: Nastavení → účet → Podpis → vypni „Mobilní
    podpis", jinak telefon použije svůj vlastní jednořádkový text.

Při psaní zprávy se mezi CZ a EN přepíná ikonou pera dole v okně.

## Proč HTML nevypadá na pixel stejně jako GIF

Písma. GIF je vyrenderovaný s Unbounded a Poppins. Gmail v podpisu maže
`<link>` i `@font-face`, takže žádný e-mailový klient webfonty nenačte a text
spadne na Helveticu / Arial. Jiné tvary písmen znamenají jiné šířky slov
a jiný optický rozestup — to se v HTML podpisu obejít nedá, leda by byl celý
podpis obrázek, a pak by nefungovaly odkazy.

Rozměry jsem doměřil přímo z tvého GIFu a HTML podle nich srovnal:

- kontaktní řádky 13,5 → **14 px**, ikony 16 → **18 px** (v GIFu jsou větší),
- obrázkový sloupec 38 % → **40 %**, obrázek je 176 × 174 px a sedí bez
  odsazení na krémovou plochu, takže výška plochy je stejná jako v GIFu (174 px),
- dělící linka vychází na 84 px od horní hrany, kontakty na 97 px — přesně
  jako v GIFu,
- emeraldový pruh má 44 px a tlačítko 117 × 30 px, stejně jako v GIFu.

Jeden rozdíl je záměrný: v GIFu jsou odkazy vlevo a tlačítko vpravo u okraje.
V HTML je celá skupina vycentrovaná, protože jen tak se na úzkém displeji
tlačítko zalomí pod odkazy. Na 436 px zůstává všechno na jednom řádku.

## Na co si dát pozor

- **Outlook pro Windows** ukáže z GIFu jen první snímek a ignoruje zaoblené
  rohy. Podpis tam bude hranatý a statický, jinak funkční.
- **Tmavý režim** si Gmail na mobilu řeší sám. Buňky mají `bgcolor`
  i `background-color`, aby se pozadí a text invertovaly společně. Ikony mají
  zapečené krémové pozadí, takže nezmizí. Zkontroluj si to přepínačem
  **Tmavé** v náhledu.
- **Neměň obsah souboru na stejné adrese.** Odeslané e-maily načítají obrázky
  živě, změna by se promítla zpětně. Nová verze = nový název souboru.
- Podpis má ~3 400 znaků, limit Gmailu je 10 000.
