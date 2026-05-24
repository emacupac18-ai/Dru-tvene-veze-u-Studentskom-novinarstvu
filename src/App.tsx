import { useState } from "react";
import Graph, { Node, Link } from "./Graph";
import AIAssistant from "./components/AIAssistant";
import ReportView from "./components/ReportView";
import { Info, User, Share2, MousePointer2, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const INITIAL_NODES: Node[] = [
  { id: "p1", name: "Studentska medijska platforma 1", type: "platform" },
  { id: "p2", name: "Studentska medijska platforma 2", type: "platform" },
  { id: "Ela", name: "Ela (Profesionalka 3)", type: "professional" },
  { id: "Karla", name: "Karla", type: "person" },
  { id: "Tea", name: "Tea", type: "person" },
  { id: "Ana", name: "Ana", type: "person" },
  { id: "Ivan", name: "Ivan", type: "person" },
  { id: "Loris", name: "Loris", type: "person" },
  { id: "Hana", name: "Hana", type: "person" },
  { id: "Sara", name: "Sara", type: "person" },
  { id: "Mario", name: "Mario", type: "person" },
  { id: "Nina", name: "Nina", type: "person" },
  { id: "prof1", name: "Profesionalac 1", type: "professional" },
  { id: "prof2", name: "Profesionalka 2", type: "professional" },
  { id: "prof4", name: "Profesionalac 4", type: "professional" },
];

const INITIAL_LINKS: Link[] = [
  { source: "p1", target: "p2" },
  // Platform 1 members
  { source: "p1", target: "Ela" },
  { source: "p1", target: "Karla" },
  { source: "p1", target: "Tea" },
  { source: "p1", target: "Ana" },
  { source: "p1", target: "Ivan" },
  { source: "p1", target: "Loris" },
  // Platform 2 members
  { source: "p2", target: "Hana" },
  { source: "p2", target: "Sara" },
  { source: "p2", target: "Mario" },
  { source: "p2", target: "Nina" },
  // Special: Karla connected to both
  { source: "p2", target: "Karla" },
  // Sara also connected to Platform 1
  { source: "p1", target: "Sara" },
  // Professional connections
  { source: "prof1", target: "Karla" },
  { source: "prof1", target: "Hana" },
  { source: "prof1", target: "Sara" },
  { source: "prof2", target: "Ela" },
  { source: "prof2", target: "Tea" },
  { source: "prof2", target: "Ana" },
  { source: "prof2", target: "Ivan" },
  { source: "prof2", target: "Loris" },
  // Professional 4 connections
  { source: "prof4", target: "Nina" },
  { source: "prof4", target: "Mario" },
  // Profesionalka 3 (Ela) connections
  { source: "Ela", target: "Nina" },
  { source: "Ela", target: "Mario" },
  { source: "Ela", target: "Karla" },
  { source: "Ela", target: "Ana" },
  { source: "Ela", target: "Ivan" },
  { source: "Ela", target: "Loris" },
  { source: "Ela", target: "Tea" },
];

export default function App() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [activeView, setActiveView] = useState<"graph" | "report">("graph");

  const platform1Count = INITIAL_LINKS.filter(l => l.source === "p1" || l.target === "p1").length;
  const platform2Count = INITIAL_LINKS.filter(l => l.source === "p2" || l.target === "p2").length;

  return (
    <div className="flex h-screen w-full bg-[#050505] text-[#fff] font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-80 border-r border-[#1a1a1a] flex flex-col bg-[#0a0a0a] z-10 shadow-2xl">
        <header className="p-6 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#F27D26] animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-[#8E9299] uppercase">Network Monitor v1.0</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-white leading-none">Media Explorer</h1>
          <p className="text-xs text-[#8E9299] mt-2 leading-relaxed">
            Vizualizacija i sociološka analiza studentske medijske mreže u Rijeci.
          </p>
        </header>

        {/* View Switcher Tabs */}
        <div className="px-6 py-4 border-b border-[#1a1a1a] flex gap-2 bg-[#050505]/40 select-none">
          <button
            onClick={() => setActiveView("graph")}
            className={`flex-1 py-2 px-2.5 rounded-lg text-[11px] font-bold tracking-tight transition-all flex items-center justify-center gap-2 border cursor-pointer
              ${activeView === "graph"
                ? "bg-[#F27D26]/10 text-[#F27D26] border-[#F27D26]/30 shadow-[0_0_10px_rgba(242,125,38,0.05)]"
                : "bg-transparent text-[#8E9299] border-transparent hover:text-white hover:bg-[#111]"
              }`}
          >
            <Share2 size={12} />
            Mreža platforme
          </button>
          <button
            onClick={() => setActiveView("report")}
            className={`flex-1 py-2 px-2.5 rounded-lg text-[11px] font-bold tracking-tight transition-all flex items-center justify-center gap-2 border cursor-pointer
              ${activeView === "report"
                ? "bg-[#F27D26]/10 text-[#F27D26] border-[#F27D26]/30 shadow-[0_0_10px_rgba(242,125,38,0.05)]"
                : "bg-transparent text-[#8E9299] border-transparent hover:text-white hover:bg-[#111]"
              }`}
          >
            <FileText size={12} />
            Akademski rad
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 select-none">
          {activeView === "report" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <section>
                <h2 className="text-[11px] font-mono tracking-widest text-[#8E9299] uppercase mb-4">Metodologija Seminarskog Rada</h2>
                <div className="bg-[#151619] p-4 rounded-xl border border-[#1a1a1a] space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#8E9299]">Metoda:</span>
                    <span className="text-white font-semibold">Kvalitativna</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-t border-[#1a1a1a] pt-2">
                    <span className="text-[#8E9299]">Teme analize:</span>
                    <span className="text-white font-semibold">6 glavnih cjelina</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-t border-[#1a1a1a] pt-2 font-mono">
                    <span className="text-[#8E9299]">Opseg:</span>
                    <span className="text-white font-semibold">~2,400 riječi</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-t border-[#1a1a1a] pt-2">
                    <span className="text-[#8E9299]">Predmet:</span>
                    <span className="text-[#F27D26] font-semibold text-[10px] tracking-wide">Sova & Kišobran</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-[11px] font-mono tracking-widest text-[#8E9299] uppercase mb-4">Istraživački tim</h2>
                <div className="p-3.5 bg-[#121215] rounded-xl border border-[#1a1a1a] space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F27D26] animate-pulse" />
                    <span className="text-[#eee] font-bold">Kvalitativna Studija</span>
                  </div>
                  <p className="text-[11px] text-[#8e9299] leading-relaxed">
                    Sveučilišni studenti i istraživači u akademskom i novinarskom ekosustavu.
                  </p>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <section>
                <h2 className="text-[11px] font-mono tracking-widest text-[#8E9299] uppercase mb-4">System Stats</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#151619] p-3 rounded-lg border border-[#1a1a1a]">
                    <div className="text-[10px] text-[#8E9299] uppercase mb-1">Nodes</div>
                    <div className="text-xl font-mono">{INITIAL_NODES.length}</div>
                  </div>
                  <div className="bg-[#151619] p-3 rounded-lg border border-[#1a1a1a]">
                    <div className="text-[10px] text-[#8E9299] uppercase mb-1">Links</div>
                    <div className="text-xl font-mono">{INITIAL_LINKS.length}</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-[11px] font-mono tracking-widest text-[#8E9299] uppercase mb-4">Platform Activity</h2>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#8E9299]">Platform 1</span>
                      <span>{platform1Count} connections</span>
                    </div>
                    <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full bg-[#ff4d4d] w-[60%]" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#8E9299]">Platform 2</span>
                      <span>{platform2Count} connections</span>
                    </div>
                    <div className="h-1 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full bg-[#4dabff] w-[40%]" />
                    </div>
                  </div>
                </div>
              </section>

              <AnimatePresence mode="wait">
                {selectedNode && (
                  <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="bg-[#151619] p-4 rounded-xl border border-[#F27D26]/30 shadow-[0_0_15px_rgba(242,125,38,0.1)]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-[#F27D26]/10 rounded-lg">
                        {selectedNode.type === "platform" ? <Share2 size={16} className="text-[#F27D26]" /> : <User size={16} className="text-[#F27D26]" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold leading-none">{selectedNode.name}</h3>
                        <span className="text-[10px] text-[#8E9299] uppercase tracking-wider">{selectedNode.type}</span>
                      </div>
                    </div>
                    <div className="text-xs text-[#8E9299] space-y-2">
                      <p>Identifier: <span className="text-[#fff] font-mono">{selectedNode.id}</span></p>
                      <p>Status: <span className="text-emerald-400">Connected</span></p>
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <footer className="p-4 border-t border-[#1a1a1a] bg-[#050505] text-[10px] text-[#444] font-mono flex justify-between">
          <span>SCANNING...</span>
          <span>LATENCY: 12ms</span>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative flex flex-col overflow-hidden">
        {activeView === "report" ? (
          <ReportView />
        ) : (
          <>
            {/* Navigation / Toolbar */}
            <div className="absolute top-6 left-6 z-10 flex gap-2">
              <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#ffffff10] px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl animate-fade-in">
                <MousePointer2 size={14} className="text-[#F27D26]" />
                <span className="text-xs font-medium text-[#fff]">Interactive Mode</span>
              </div>
              <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-[#ffffff10] px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl hover:bg-[#222]/80 cursor-pointer transition-colors" onClick={() => setSelectedNode(null)}>
                <Info size={14} className="text-[#8E9299]" />
                <span className="text-xs font-medium text-[#8E9299]">Reset View</span>
              </div>
            </div>

            <Graph 
              nodes={INITIAL_NODES} 
              links={INITIAL_LINKS} 
              onNodeClick={(node) => setSelectedNode(node)} 
            />

            <AIAssistant graphData={{ nodes: INITIAL_NODES, links: INITIAL_LINKS }} />

            {/* Legend */}
            <div className="absolute bottom-6 right-6 z-10 bg-[#0a0a0a]/90 backdrop-blur-lg border border-[#1a1a1a] p-4 rounded-xl shadow-2xl space-y-2 min-w-[160px]">
              <div className="text-[10px] text-[#8E9299] uppercase tracking-widest font-mono mb-2 border-b border-[#1a1a1a] pb-1">Legend</div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#ff4d4d]" />
                <span className="text-xs text-[#8E9299]">Platforma 1</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#4dabff]" />
                <span className="text-xs text-[#8E9299]">Platforma 2</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#F27D26]" />
                <span className="text-xs text-[#8E9299]">Profesionalac / Mentor</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#444] border border-[#fff]" />
                <span className="text-xs text-[#8E9299]">Član / Osoba</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-[1px] bg-[#444]" />
                <span className="text-xs text-[#8E9299]">Veza</span>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
