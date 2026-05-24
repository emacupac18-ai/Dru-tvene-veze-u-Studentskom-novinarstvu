import React, { useState } from "react";
import { 
  BookOpen, 
  Layers, 
  LineChart, 
  MessageSquare, 
  Compass, 
  ShieldAlert, 
  Award, 
  Users, 
  Clock, 
  GraduationCap, 
  FileText,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";

interface ThemeDetail {
  id: string;
  number: number;
  title: string;
  icon: React.ReactNode;
  summary: string;
  points: string[];
  quotes: string[];
}

export default function ReportView() {
  const [activeTab, setActiveTab] = useState<string>("summary");
  const [selectedTheme, setSelectedTheme] = useState<string>("t1");

  const themes: ThemeDetail[] = [
    {
      id: "t1",
      number: 1,
      title: "Nesigurnost u budućnost i radikalan preokret",
      icon: <Compass className="text-[#F27D26]" size={18} />,
      summary: "Mnogi studenti ulaze u svijet studentskih medija bez ikakve dugoročne namjere o izgradnji novinarske karijere. Iskustvo rada na platformi često se manifestira kao neočekivani katalizator promjene smjera.",
      points: [
        "Neočekivani obrat: Studentice i studenti upisuju fakultete bez primarne namjere rada u medijima, ali ih studentske platforme usmjeravaju u komunikacijske vode.",
        "Svemirni privlačak novinarstva: Sugovornici ističu da su se u novinarstvu našli potpuno slučajno, no praksa ih brzo zakvači.",
        "Lokalpatriotizam: Primarna želja za ostankom u Rijeci unatoč manjku formalnog studija novinarstva rješava se upravo kroz neformalne studentske kanijere."
      ],
      quotes: [
        "Nisam imala nikakve ideje da bi ja možda završila na radiju. Ta Sova me onako okrenula u nekom drugom smjeru... uopće mi to nije bila ideja s 18 godina.",
        "Znala sam da želim biti nekakav prezenter, ali u Rijeci nema studija novinarstva... pa ću nešto naći gdje ću moć tu svoju, taj svoj moment gdje ja volim doći ispred ljudi, stati, uzeti mikrofon i prezentirati.",
        "U novinarstvu se totalno nađeš slučajno i dosta iskusnih novinara kaže da kad jednom probaš novinarstvo ili odustaneš odmah jer skužiš da nema previše novca, ili se jednostavno zakačiš i ne možeš se zamisliti u ničem drugom."
      ]
    },
    {
      id: "t2",
      number: 2,
      title: "Sustavan nedostatak studentske prakse",
      icon: <GraduationCap className="text-[#ff4d4d]" size={18} />,
      summary: "Izražen raskorak između sveučilišne teorijske nastave i stvarne potrebe za profesionalnim, validiranim iskustvom na konkretnom mediju.",
      points: [
        "Institucionalna nepovezanost: U vrijeme začetka projekata, fakultet nije nudio nikakvu formalnu poveznicu s medijima, što dovodi do manjka ECTS priznavanja.",
        "Dobra volja studenata: Rad se svodio na osobni angažman i entuzijazam bez institucionalne zaštite.",
        "Zahtjev za dokumentom: Studenti traže službeni papir u diplomi kako bi formalno dokazali radijsko iskustvo poslodavcima."
      ],
      quotes: [
        "Na našem faksu tada nije postojalo ništa što ima nikakve veze sa medijima... Nije se moglo ništa priznavati, ni kao ECTS-i nije bilo u sklopu ničeg. Dakle, to je bila naša dobra volja...",
        "Trebalo je biti drugačije, da imamo nekakav službeni dokument, papir da se to nama negdje priznaje... Kad bi to crno na bijelom pisalo u diplomi da mi imamo nekakvu konkretnu medijsku radijsku praksu, što mislim da bi bila puno veća težina."
      ]
    },
    {
      id: "t3",
      number: 3,
      title: "Praktičan rad i stjecanje zanatskih kompetencija",
      icon: <Award className="text-[#4dabff]" size={18} />,
      summary: "Usvajanje ključnog zanatskog dijela novinarskog posla i vještina, djelujući po principu 'učenja kroz rad' (learning by doing).",
      points: [
        "Feedback iskusnih mentora: Alena Čemeljić, Antonela Galić-Pruša i drugi preslušavali su svaku minutu programa.",
        "Rad s profesionalnom opremom: Snalaženje s mikrofonima, miješalima i montiranjem, što nema svatko priliku.",
        "Tehnička i moralna etika: Usvajanje strogih novinarskih temelja, poput pravila '7 provjera informacija' i odgovora na 5 W pitanja."
      ],
      quotes: [
        "Dobili smo detaljne feedbackove na voditeljski dio, na glazbu, na džinglove koje smo pustili, na previše smijanja u eteru... na doslovno sve.",
        "Najviše sam naučio kako organizirati izjave sa izvođačima, kako se akreditirati, kako napraviti neku emisiju... Naučio sam raditi s opremom to me je jako bitno jer nema svatko priliku raditi s pristupom ovakvoj dobroj opremi.",
        "Osnove sigurno, znači da 7 puta provjeriš informaciju, da nazoveš 7 različitih izvora kako bi ti potvrdili to što si čuo."
      ]
    },
    {
      id: "t4",
      number: 4,
      title: "Izgradnja samopouzdanja i razvoj socijalnih vještina",
      icon: <MessageSquare className="text-emerald-400" size={18} />,
      summary: "Transformacija osobnosti od akademske rezerviranosti do asertivnog nastupa i asertivne komunikacije s javnošću.",
      points: [
        "Prevladavanje introvertiranosti: Mikrofon djeluje kao terapija i alat za otvaranje i opuštanje.",
        "Komunikacijsko snalaženje: Povezivanje i rasprave s raznim profilima ljudi ubrzavaju osobni razvoj.",
        "Životno obilježje: Rad u studentskom mediju ostavlja dubok trag na cijeli životni vijek ('jednom Sova, uvijek Sova')."
      ],
      quotes: [
        "Za izgradnju nekog samopouzdanja. Ti kad sjedneš za taj mikrofon ti izlažeš nešto, neke tvoje misli... Meni je Sova baš jako puno pomogla u stvaranju tih odnosa s ljudima.",
        "Mogu reći da jesam malo introvert, ali ovo mi je dosta dalo da postanem malo veći ekstrovert. Jer se stvarno moraš staviti u stresne situacije.",
        "Imam osjećaj da mi je Sova, ono što sam ti rekla zapravo na početku... baš utjecala na nekakvu moju personu, moju osobnost... Meni je smiješno i dan danas kad me netko sretne i pita jesi još na Sovi. To me obilježilo doslovno."
      ]
    },
    {
      id: "t5",
      number: 5,
      title: "Socijalni kapital i dugoročne mreže (Networking)",
      icon: <Users className="text-[#a855f7]" size={18} />,
      summary: "Formiranje vitalnih veza, prijateljstava i profesionalnih partnerstava s političarima, profesorima te sveučilišnim autoritetima.",
      points: [
        "Izravan pristup autoritetu: Izgradnja odnosa u ranoj dobi eliminira daljnji strah od autoriteta i olakšava suradnju.",
        "Izgradnja doživotnog kapitala: Kolege s radija postaju cijenjeni djelatnici i partneri na tržištu rada.",
        "Kišobran kao referenca: Dugoročni rad stoji u životopisu kao neoborivi dokaz inovativnosti i proaktivnosti."
      ],
      quotes: [
        "Rektorica Snježana Prijić Samaržija... Ta žena bi se meni uvijek odazvala samo zato što smo izgradile odnos još kad sam ja bila klinka, znala me kao studenticu... To su sve ljudi s kojima sam surađivala vrlo mlada, a dan danas surađujem.",
        "Kištobran u ovom životopisu stoji i to je ono za što me najčešće ljudi pitaju na razgovorima... Da vide nekog inovativnog, da nije samo nastava, knjižnica, nego netko ko zna pisati i snalaziti se.",
        "Definitivno zapravo mislim da je možda druga najbolja stvar kod volontiranja osim što učiš skillove, ti kontakti. Jer općenito umrežavanje s ljudima i to s mentorima je najljepši dio toga... možeš ih nazvati u bilo kojem trenutku."
      ]
    },
    {
      id: "t6",
      number: 6,
      title: "Usklađivanje obveza i akademsko preopterećenje",
      icon: <Clock className="text-amber-400" size={18} />,
      summary: "Visoka cijena uspjeha i truda: borba s nedostatkom vremena, teškim ispitima i kasnim noćnim šihtama na programima.",
      points: [
        "Ekstremni umor: Dežurstvo na radiju od ponoći do 03 h ujutro pa rano jutarnje predavanje.",
        "Kognitivni stres: Istovremeno pisanje novinskih članaka i učenje kompleksne kemije, biologije ili filozofije.",
        "Financijski rezovi: Tenzije s administrativnim komitetima i nestabilni proračuni povećavaju pritisak."
      ],
      quotes: [
        "Nikako, to je jedan od najtežih... učila sam u studiju pa bi došla doma pa bi me urednik zvao 'možeš uletit, ovaj je bolestan'... U zadnjih godinu dana rijetko kad sam mogla biti na predavanju jer se to već zahuktalo.",
        "Evo uz taj faks, balans je bio... najdinamičniji period života. Ti si tamo od 10, 22:30 do jedan ujutro... učenje za ispite, a ja neću ići na ispit ako neću dobiti pet.",
        "Ponedjeljkom sam bio u šihti od ponoći do tri, trebalo je pripremiti, a utorkom sam imao predavanje u 9 ujutro kod profesorice Prijić-Samaržije... to je bilo najteže, ustati ujutro i biti donekle suvisao."
      ]
    }
  ];

  const sidebarItems = [
    { id: "summary", label: "Sažetak i Uvod", icon: <BookOpen size={16} /> },
    { id: "architecture", label: "Metodologija i Tijek Podataka", icon: <Layers size={16} /> },
    { id: "themes", label: "Tematska Analiza (6 Téma)", icon: <MessageSquare size={16} /> },
    { id: "conclusions", label: "Zaključak i Preporuke", icon: <FileText size={16} /> },
  ];

  return (
    <div className="flex flex-1 h-full bg-[#050505] text-[#fff] overflow-hidden" id="report-view-container">
      {/* Mini navigacija s lijeve strane */}
      <div className="w-64 border-r border-[#1a1a1a] bg-[#080808] flex flex-col p-4 space-y-2 select-none">
        <div className="px-3 py-2 text-[10px] font-mono tracking-widest text-[#8E9299] uppercase mb-2">
          Struktura Radova
        </div>
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold tracking-tight transition-all text-left
              ${activeTab === item.id 
                ? "bg-[#F27D26]/10 text-[#F27D26] border-l-2 border-[#F27D26] pl-2" 
                : "text-[#8E9299] hover:text-white hover:bg-[#151619]"}
            `}
          >
            {item.icon}
            <span className="truncate">{item.label}</span>
          </button>
        ))}

        <div className="pt-6 border-t border-[#121212] mt-auto">
          <div className="p-3 bg-[#111] rounded-lg border border-[#1a1a1a]">
            <div className="flex items-center gap-2 mb-1 text-[10px] text-amber-500 font-bold uppercase tracking-wider">
              <Sparkles size={10} />
              <span>Znanstveni Rad</span>
            </div>
            <p className="text-[10px] text-[#8e9299] leading-relaxed">
              Kvalitativni i kvantitativni seminar utjecaja studentskih medija.
            </p>
          </div>
        </div>
      </div>

      {/* Glavni prikaz teksta */}
      <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#050505]">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="border-b border-[#1a1a1a] pb-6">
            <span className="text-xs font-mono text-[#F27D26] uppercase tracking-wider">Znanstveno-Istraživački Seminar</span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2 text-white leading-tight">
              Društvene mreže u studentskom novinarstvu te utjecaj na profesionalnu karijeru: Analiza ekosustava i kvalitativnih svjedočanstava
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs text-[#8E9299]">
              <div>Autor: <span className="text-white font-medium">Studentski istraživački tim</span></div>
              <div className="hidden sm:block text-[#333]">•</div>
              <div>Datum objave: <span className="text-white font-medium">24. svibnja 2026.</span></div>
              <div className="hidden sm:block text-[#333]">•</div>
              <div>Sveučilište u Rijeci, Studentski mediji</div>
            </div>
          </div>

          {/* Ovisno o aktivnom tabu, prikaži sadržaj */}
          
          {activeTab === "summary" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Sažetak */}
              <div className="bg-[#151619] p-6 rounded-xl border border-[#1a1a1a] shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F27D26]" />
                <h2 className="text-lg font-bold text-[#F27D26] mb-3">Sažetak</h2>
                <p className="text-sm text-[#eee] leading-relaxed italic">
                  Ovaj seminar pruža sveobuhvatan teorijski i empirijski prikaz socijalne topologije studentskih medija te njihove uloge kao profesionalnog inkubatora. Prvi dio rada posvećen je aplikaciji &quot;Media Network Explorer&quot;, interaktivnom alatu za vizualizaciju i analizu društvene mreže studentskih medija pomoću usmjerenih grafova (D3.js) i umjetne inteligencije (Google Gemini API). Drugi dio donosi detaljnu analizu dubinskih kvalitativnih intervjua bivših članova studentskog radija &quot;Sova&quot; i portala &quot;Kišobran&quot;. Intervjui su strukturirani kroz šest ključnih, boldanih tematskih cjelina koje pokrivaju profesionalni zaokret i nesigurnost, institucionalni nedostatak prakse, razvoj praktičnih vještina, razvoj socijalnih kompetencija, socijalni kapital kroz umrežavanje, te izazove balansiranja akademskih obveza. Rezultati potvrđuju da neformalno umrežavanje i rano stjecanje praktičnog kapitala uvelike kompenziraju nedostatak formalnog kurikuluma.
                </p>
              </div>

              {/* Uvod */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white border-b border-[#151619] pb-2">Uvod</h3>
                <p className="text-sm text-[#8E9299] leading-relaxed">
                  Pejzaž studentskih medija na sveučilištima u Republici Hrvatskoj, s posebnim naglaskom na Rijeku, povijesno je obilježen visokim stupnjem entuzijazma, ali i izraženom fragmentacijom. Studenti se često okupljaju oko pojedinačnih projekata, poput radija &quot;Sova&quot; ili portala &quot;Kišobran&quot;, pri čemu su odnosi i tokovi informacija unutar tog ekosustava slabo vidljivi u formalnom smislu.
                </p>
                <p className="text-sm text-[#8E9299] leading-relaxed">
                  Problem koji se istražuje u sklopu ovog rada podijeljen je na dvije ključne razine:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="p-4 bg-[#111] rounded-xl border border-[#1a1a1a]">
                    <div className="font-mono text-xs text-[#F27D26] uppercase mb-2">1. Tehničko-strukturalna razina</div>
                    <p className="text-xs text-[#eee] leading-relaxed">
                      Kako mapirati i učiniti intuitivnim složeni graf suradnji i članstava gdje pojedinci djeluju kao premošćujući čvorovi (<em>bridging nodes</em>) između različitih medijskih platformi na sveučilištu?
                    </p>
                  </div>
                  <div className="p-4 bg-[#111] rounded-xl border border-[#1a1a1a]">
                    <div className="font-mono text-xs text-[#F27D26] uppercase mb-2">2. Empirijsko-iskustvena razina</div>
                    <p className="text-xs text-[#eee] leading-relaxed">
                      Kako rad u tim medijima utječe na osobne i karijerne sudbine studenata s obzirom na niske razine formalne integracije u sveučilišne programe i nedostatak teorijskog usmjeravanja?
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#8E9299] leading-relaxed mt-2">
                  Cilj je ovog istraživanja i aplikacijskog sučelja premostiti jaz između kvantitativne topologije društvenih mreža (koju rješavamo i vizualiziramo pomoću interaktivnog D3.js grafa) i stvarnog, proživljenog iskustva aktera kroz strukturiranu analizu njihovih svjedočanstava.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white border-b border-[#151619] pb-2">Tehnički i metodološki okvir: Media Network Explorer</h3>
              <p className="text-sm text-[#8E9299] leading-relaxed">
                Aplikacija &quot;Media Network Explorer&quot; funkcionira kao vizualni i analitički digitalni blizanac studentske medijske mreže na Sveučilištu. Metodologija se temelji na spajanju tri različita i komplementarna programska segmenta:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-[#111] rounded-xl border border-[#1a1a1a] flex gap-4">
                  <div className="text-lg font-bold text-[#F27D26] font-mono">01</div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Frontend i vizualizacijski sloj (D3.js)</h4>
                    <p className="text-xs text-[#8E9299] leading-relaxed">
                      Koristeći kombinaciju React-a i biblioteke D3.js, razvijena je simulacija sila s kružnim (radialnim) rasporedom. Mreža postavlja medijske platforme u samo središte (snaga snalaženja), mentore u srednji prsten, a studente na vanjske obodne prstenove radi preglednosti.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#111] rounded-xl border border-[#1a1a1a] flex gap-4">
                  <div className="text-lg font-bold text-[#F27D26] font-mono">02</div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">Sloj inteligencije (Google Gemini AI)</h4>
                    <p className="text-xs text-[#8E9299] leading-relaxed">
                      Putem moderne `@google/genai` TypeScript SDK platforme, implementiran je analitički asistent integriran izravno u bazu i mrežnu strukturu. Može prepoznati trans-platformske 'mostove' poput Karle te hibridne čvorove poput Ele.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tijek podataka vizualizacija */}
              <div className="mt-8">
                <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                  <LineChart size={16} className="text-[#F27D26]" />
                  <span>Vizualizacija tijeka podataka (App Data Flow Diagram)</span>
                </h4>

                <div className="p-6 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl space-y-6">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-[10px] font-mono tracking-wider text-[#F27D26] uppercase mb-1">Izvor Podataka</div>
                      <div className="font-bold text-sm text-white">Mreža studenata i platformi</div>
                      <p className="text-xs text-[#8E9299] mt-1">Statični i dinamični JSON podaci o vezama, smjerovima te ulogama članova medija.</p>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#151619] border border-[#333]">
                      <ChevronRight size={16} className="text-[#8E9299] rotate-90 md:rotate-0" />
                    </div>
                    {/* Step 2 */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-[10px] font-mono tracking-wider text-[#F27D26] uppercase mb-1">Graf Sučelje</div>
                      <div className="font-bold text-sm text-white">D3.js Force Simulation</div>
                      <p className="text-xs text-[#8E9299] mt-1">Mapiranje u realnom vremenu uz radialne sile, collision rješenja, povlačenje te zumiranje.</p>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#151619] border border-[#333]">
                      <ChevronRight size={16} className="text-[#8E9299] rotate-90 md:rotate-0" />
                    </div>
                    {/* Step 3 */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-[10px] font-mono tracking-wider text-[#F27D26] uppercase mb-1">UI za upite</div>
                      <div className="font-bold text-sm text-white">AI Sučelje za Analizu</div>
                      <p className="text-xs text-[#8E9299] mt-1">Gemini-3-Flash na temelju semantičkog konteksta odgovara na složena društvena pitanja.</p>
                    </div>
                  </div>

                  <div className="h-[1px] bg-[#1a1a1a]" />

                  <div className="flex items-center gap-3 bg-[#151619]/50 p-3 rounded-lg border border-[#1a1a1a]">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-xs text-[#8E9299]">
                      <strong>Mrežna topologija:</strong> Analiza dokazuje da su <strong>Sara</strong> i <strong>Karla</strong> kritični premošćujući čvorovi visoke centralnosti posredovanja koji spajaju dvije odvojene ključne medijske domene.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "themes" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center border-b border-[#1a1a1a] pb-2">
                <h3 className="text-xl font-bold text-white">Kvalitativna Tematska Analiza (6 Ključnih Tema)</h3>
                <span className="text-[10px] font-mono bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Intervjui</span>
              </div>
              <p className="text-sm text-[#8E9299] leading-relaxed">
                Dubinske analize i strukturirani polustrukturirani intervjui s članovima studentskog radija &quot;Sova&quot; i portala &quot;Kišobran&quot; otkrili su 6 izraženih tema. Kliknite na pojedinu temu kako biste istražili analitički pregled i stvarne, autentične izjave studenata u cijelosti:
              </p>

              {/* Grid s gumbima za teme */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme.id)}
                    className={`
                      p-4 rounded-xl border text-left transition-all relative overflow-hidden group
                      ${selectedTheme === theme.id 
                        ? "bg-[#151619] border-[#F27D26] shadow-[0_0_15px_rgba(242,125,38,0.1)]" 
                        : "bg-[#0d0d0e] border-[#1a1a1a] hover:bg-[#111] hover:border-[#333]"}
                    `}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 bg-[#222] rounded-lg group-hover:bg-[#333] transition-colors">
                        {theme.icon}
                      </div>
                      <span className="text-xs font-mono text-[#8E9299]">Tema {theme.number}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#F27D26] transition-colors leading-tight">
                      {theme.title}
                    </h4>
                  </button>
                ))}
              </div>

              {/* Prikaz odabrane teme */}
              {(() => {
                const theme = themes.find(t => t.id === selectedTheme);
                if (!theme) return null;
                return (
                  <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-[#09090a] border border-[#1a1a1a] rounded-2xl p-6 space-y-6 shadow-2xl relative"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#151619] rounded-xl border border-[#333]">
                        {theme.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#F27D26] uppercase">Analiza i Transkript</span>
                        <h4 className="text-lg font-bold text-white leading-tight mt-1">Tema {theme.number}: {theme.title}</h4>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#aaa] leading-relaxed italic border-l-2 border-[#8E9299] pl-3">
                      {theme.summary}
                    </p>

                    <div className="space-y-3">
                      <h5 className="text-[10px] font-mono tracking-wider text-[#8E9299] uppercase">Ključni nalazi</h5>
                      <ul className="space-y-2">
                        {theme.points.map((point, idx) => (
                          <li key={idx} className="text-xs text-[#eee] flex items-start gap-2">
                            <span className="text-[#F27D26] mt-0.5">•</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-[10px] font-mono tracking-wider text-[#8E9299] uppercase">Izravna svjedočanstva (Citati)</h5>
                      <div className="space-y-3">
                        {theme.quotes.map((quote, idx) => (
                          <div 
                            key={idx} 
                            className="p-4 bg-[#111215] border-l-4 border-[#F27D26] rounded-r-xl relative overflow-hidden group shadow-md"
                          >
                            <span className="absolute top-2 right-4 text-3xl font-serif text-[#F27D26]/10 group-hover:text-[#F27D26]/20 transition-colors pointer-events-none select-none">&ldquo;</span>
                            <p className="text-xs text-[#eee] leading-relaxed font-sans italic relative z-10">
                              &quot;{quote}&quot;
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </motion.div>
          )}

          {activeTab === "conclusions" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white border-b border-[#151619] pb-2">Zaključak i Preporuke</h3>
              <p className="text-sm text-[#8E9299] leading-relaxed">
                Mrežni model i kvalitativna analiza pokazuju da studentski mediji funkcioniraju kao vitalna društvena i profesionalna platforma. To je ključan inkubator, no pati od manjka formalne strukture i organizacije sa Sveučilištem.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="p-5 bg-[#0d0e11] border border-[#1a1a1a] rounded-xl relative overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26] font-bold text-xs mb-3">1</div>
                  <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wide">Kurikularna Integracija</h4>
                  <p className="text-[11px] text-[#8E9299] leading-relaxed">
                    Sveučilište bi trebalo integrirati sate odrađene na Sovi ili Kišobranu u obliku izbornih kolegija te dodjeljivati do 3 ECTS-a kao nagradu za praktičan rad.
                  </p>
                </div>

                <div className="p-5 bg-[#0d0e11] border border-[#1a1a1a] rounded-xl relative overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-emerald-400/10 flex items-center justify-center text-emerald-400 font-bold text-xs mb-3">2</div>
                  <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wide">Financijska Stabilnost</h4>
                  <p className="text-[11px] text-[#8E9299] leading-relaxed">
                    Uspostaviti jasan i stabilan proračun sa Studentskim zborom i upravom kako bi se spriječili česti administrativni sukobi i prekidi financijske potpore.
                  </p>
                </div>

                <div className="p-5 bg-[#0d0e11] border border-[#1a1a1a] rounded-xl relative overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-[#4dabff]/10 flex items-center justify-center text-[#4dabff] font-bold text-xs mb-3">3</div>
                  <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wide">Mentorska Struktura</h4>
                  <p className="text-[11px] text-[#8E9299] leading-relaxed">
                    Službeni angažman vanjskih mentora (novinara iz struke) koji će osigurati organizirane tjedne vježbe i eliminirati osjećaj slabe teorijske podloge.
                  </p>
                </div>
              </div>

              {/* Reference */}
              <div className="pt-8 border-t border-[#1a1a1a] space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Reference</h4>
                <ol className="list-decimal list-inside text-[11px] text-[#8E9299] space-y-1.5 leading-relaxed">
                  <li>Google. (2024). <em>Gemini API Documentation</em>. Preuzeto s https://ai.google.dev</li>
                  <li>Bostock, M. (2025). <em>D3.js: Data-Driven Documents</em>. https://d3js.org</li>
                  <li>Dokumentacija za NotebookLM. (2025). <em>Knowledge Grounding Strategies</em>. https://notebooklm.google.com/</li>
                  <li>Scott, J. (2017). <em>Social Network Analysis</em>. SAGE Publications.</li>
                  <li>Transkripti polustrukturiranih intervjua bivših članova radija &quot;Sova&quot; i portala &quot;Kišobran&quot; (2026). Interni arhiv istraživanja.</li>
                </ol>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
