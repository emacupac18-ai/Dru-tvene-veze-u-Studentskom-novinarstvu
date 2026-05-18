import React, { useState, useRef } from "react";
import { Send, Sparkles, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { queryGraph } from "../services/geminiService";

interface AIAssistantProps {
  graphData: { nodes: any[], links: any[] };
}

export default function AIAssistant({ graphData }: AIAssistantProps) {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setIsExpanded(true);
    setResponse(null);
    
    const result = await queryGraph(input, graphData);
    setResponse(result || "No data found.");
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="relative">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-full mb-4 w-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#ffffff15] rounded-2xl p-6 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F27D26] to-transparent opacity-50" />
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2 text-[#F27D26]">
                  <Sparkles size={16} />
                  <span className="text-[10px] font-mono tracking-widest uppercase">Intelligence Output</span>
                </div>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="p-1 hover:bg-[#ffffff10] rounded-md transition-colors text-[#8E9299]"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="max-h-60 overflow-y-auto custom-scrollbar pr-2">
                {isLoading ? (
                  <div className="flex items-center gap-3 text-[#8E9299] py-4">
                    <Loader2 size={18} className="animate-spin" />
                    <p className="text-sm italic">Analyzing network nodes and relational paths...</p>
                  </div>
                ) : (
                  <p className="text-sm leading-relaxed text-[#eee]">
                    {response}
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form 
          onSubmit={handleSubmit}
          className={`
            bg-[#151619]/80 backdrop-blur-md border border-[#ffffff15] 
            rounded-full p-2 flex items-center gap-3 shadow-2xl
            transition-all duration-300
            ${isExpanded ? 'border-[#F27D26]/40 shadow-[0_0_30px_rgba(242,125,38,0.15)]' : 'hover:border-[#ffffff30]'}
          `}
        >
          <div className="pl-4 text-[#F27D26]">
            <Sparkles size={18} />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder="Ask anything about the network... (e.g. How are Karla and Sara related?)"
            className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder-[#8E9299] py-2"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`
              p-2 rounded-full transition-all duration-200
              ${input.trim() ? 'bg-[#F27D26] text-white' : 'bg-[#1a1a1a] text-[#444]'}
              hover:scale-105 active:scale-95
            `}
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
