import { AppState } from '../../types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery({ state }: { state: AppState | null }) {
  const [activeCategory, setActiveCategory] = useState('Todos ativos');
  const categories = ['Todos ativos', 'Arena Principal', 'Zona Social', 'VIP Lounge', 'Hub Culinário'];

  if (!state) return null;

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-24">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 block">Repositório Visual</span>
           <h1 className="text-4xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter">Captura da <span className="text-primary italic">Instalação</span></h1>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-24">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-xl shadow-green-600/20' 
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
           layout
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {[1,2,3,4,5,6,7,8].map(i => (
              <motion.div 
                key={i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group relative aspect-square rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden cursor-zoom-in"
              >
                 <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-slate-200 group-hover:text-primary transition-colors">
                    Visualização {i}
                 </div>
                 <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute bottom-6 left-6 right-6 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <p className="text-[8px] font-black text-white uppercase tracking-widest bg-slate-900/40 backdrop-blur px-3 py-1.5 rounded-full w-fit">
                      Setor {Math.ceil(i/2)}
                    </p>
                 </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-40 bg-slate-900 rounded-3xl p-16 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-green-400 mb-6">Fotografia Técnica</h4>
              <p className="text-2xl font-black uppercase tracking-tight max-w-2xl mx-auto leading-tight">
                 Capturas detalhadas de nossos padrões de infraestrutura para <span className="text-primary">revisão institucional.</span>
              </p>
           </div>
           <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="grid grid-cols-12 h-full">
                 {Array.from({length: 12}).map((_, i) => (
                    <div key={i} className="border-r border-white h-full" />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
