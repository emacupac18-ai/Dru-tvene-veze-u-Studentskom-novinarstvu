# Društvene mreže u studentskom novinarstvu te utjecaj na profesionalnu karijeru

**Autor:** [User Name]
**Datum:** 18. svibnja 2026.

## Sažetak
Ovaj izvještaj detaljno opisuje razvoj i teorijski okvir aplikacije "Media Network Explorer", interaktivnog alata dizajniranog za vizualizaciju i analizu društvenog tkiva studentskih medijskih platformi. Integracijom D3.js-a za topološku vizualizaciju i Google Gemini-ja za analizu odnosa putem prirodnog jezika, aplikacija pruža jedinstven uvid u organizacijsku povezivost. Poseban fokus stavljen je na "premošćivanje čvorova" (node bridging) gdje pojedinci poput Karle povezuju različite mreže, olakšavajući protok informacija.

## Uvod
Pejzaž studentskih medija često je fragmentiran kroz više platformi. Razumijevanje interakcije ovih entiteta ključno je za organizacijsku sinergiju. Problem koji ova aplikacija rješava je nedostatak vidljive strukture u odnosima između ljudi i medija. Tradicionalne tablice ne uspijevaju obuhvatiti nijanse "članova mostova" — pojedinaca koji drže pozicije u više organizacija. Primarni cilj je stvoriti digitalni blizanac ove društvene mreže koji je vizualno intuitivan i koji se može pretraživati putem umjetne inteligencije.

## Metoda
### Tehnička arhitektura
Aplikacija je izgrađena koristeći moderan full-stack pristup:
1.  **Logika sučelja:** React 19 korišten je za upravljanje životnim ciklusom komponenti, osiguravajući reaktivna ažuriranja sučelja prilikom odabira čvorova.
2.  **Sloj vizualizacije:** D3.js (Data-Driven Documents) korišten je za implementaciju grafa s usmjerenim silama (force-directed graph). Simulacija koristi `forceManyBody` (odbijanje), `forceLink` (povezivost) i `forceCenter` za stvaranje dinamičnog, samoorganizirajućeg rasporeda.
3.  **AI integracija:** Google Gemini API (`@google/genai`) služi kao "Sloj inteligencije". On mapira JSON podatke grafa u kontekste prirodnog jezika, omogućujući korisnicima postavljanje upita o odnosima.

### Model podataka
Mreža se sastoji od usmjerenog grafa $G = (V, E)$ gdje:
-   $V$ (Vrhovi/Čvorovi) predstavljaju ili "Platforme" ili "Ljude".
-   $E$ (Bridovi/Veze) predstavljaju članstvo ili suradničke veze.
-   Čvor "Karla" služi kao kritični premošćujući vrh koji povezuje Platformu 1 i Platformu 2.

## Rasprava: Povezivost i ljudski odnosi
Analiza otkriva fenomen mreže "malog svijeta" (Small World) unutar ekosustava studentskih medija.

### Fenomen mosta
Ključni nalaz u topologiji grafa je uloga Karle. U teoriji društvenih mreža, premošćujući čvorovi imaju visoku centralnost između (betweenness centrality). Karla djeluje kao spona između Platforme 1 i Platforme 2. Ova povezivost sugerira da Platforma 2 ima više "curenja" ili dijeljenog znanja s Platformom 1 nego što bi to mogle imati druge izolirane platforme.

### AI utemeljenje
Korištenjem ideja inspiriranih utemeljenjem znanja u stilu NotebookLM-a, aplikacija ne pokazuje samo linije; ona ih razumije. Kada se zatraži informacija o Karli i Sari, AI identificira njihovu zajedničku platformu (Platforma 2) i naglašava organizacijski put. Ovaj semantički sloj transformira sirove podatke u primjenjivu društvenu inteligenciju.

## Uloga studentskog novinarstva u profesionalnom razvoju
Studentsko novinarstvo i praktičan rad na medijskim platformama predstavljaju ključan inkubator za razvoj budućih stručnjaka. Kroz rad u ovakvim mrežama, studenti ne samo da stječu tehničke vještine (pisanje, uređivanje, produkcija), već i razvijaju kritičnu mrežu kontakata.

1.  **Razvoj kompetencija:** Rad u dinamičnom okruženju poput Platforme 1 ili 2 zahtijeva timski rad, rješavanje konflikata i visoku razinu prilagodljivosti.
2.  **Umrežavanje kao profesionalni kapital:** Kao što vizualizacija grafa pokazuje, veze stvorene tijekom studija (poput onih Karle ili Ivana) često postaju temelj za buduće preporuke i poslovne prilike u stvarnom sektoru.
3.  **Simulacija industrijskih uvjeta:** Interakcija između članova različitih platformi (premošćivanje) omogućuje protok inovativnih ideja koji simulira realne uvjete u medijskoj industriji, pripremajući studente za kompleksne hijerarhijske strukture modernih redakcija. Praktično iskustvo stečeno ovdje smanjuje jaz između teorijskog obrazovanja i zahtjeva tržišta rada.

## Zaključak
Media Network Explorer učinkovito premošćuje jaz između sirovih organizacijskih podataka i društvenog razumijevanja. Buduće iteracije trebale bi se fokusirati na unos podataka u stvarnom vremenu i mapiranje vremenskih promjena u članstvu kako bi se promatralo kako se gustoća mreže razvija tijekom semestra.

## Reference
1.  Google. (2024). *Gemini API Documentation*. Preuzeto s https://ai.google.dev
2.  Bostock, M. (2025). *D3.js: Data-Driven Documents*. 
3.  Dokumentacija za NotebookLM. (2025). *Knowledge Grounding Strategies*. https://notebooklm.google.com/
4.  Scott, J. (2017). *Social Network Analysis*. SAGE Publications.
