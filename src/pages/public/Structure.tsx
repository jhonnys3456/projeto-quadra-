import { AppState } from '../../types';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  'Gramado sintético profissional [60m x 40m]',
  'Iluminação LED de ultra-intensidade [2500 lumens]',
  'Arquibancada para até 150 visitantes',
  'Vestiários executivos com climatização e chuveiros',
  'Lounge social integrado com conectividade de alta velocidade',
  'Cozinha industrial completa e zona de bar',
  'Estações de hidratação com filtragem de carbono',
  'Infraestrutura audiovisual para eventos'
];

export default function Structure({ state }: { state: AppState | null }) {
  if (!state) return null;

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-24">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 block">Ativos da Instalação</span>
           <h1 className="text-4xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter">Infraestrutura <span className="text-primary italic">Premium</span></h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.06)] aspect-video bg-slate-50 flex items-center justify-center text-slate-300 border border-slate-100 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="z-10 text-[10px] font-black uppercase tracking-widest bg-white/90 backdrop-blur px-6 py-3 rounded-full text-slate-800 shadow-xl">Revelação de Alta Definição Pendente</div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Especificações Técnicas</h2>
                <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Padrões de Nível Mundial</h3>
              </div>
              
              <ul className="space-y-6">
                {highlights.map((item, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="mt-1 bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                      <Check className="h-3 w-3 text-primary group-hover:text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-tight group-hover:text-slate-900 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-10 border-t border-slate-100">
                 <button className="text-[10px] font-black uppercase tracking-[0.25em] text-primary hover:text-green-700 transition-colors flex items-center">
                    Solicitar Ficha Técnica Completa <span className="ml-3">→</span>
                 </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mini stats */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-10 border-y border-slate-100 py-16">
           <div className="text-center">
              <p className="text-4xl font-black text-slate-800 tracking-tighter mb-2">2.400</p>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Metros Quadrados</p>
           </div>
           <div className="text-center">
              <p className="text-4xl font-black text-slate-800 tracking-tighter mb-2">150</p>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Capacidade VIP</p>
           </div>
           <div className="text-center">
              <p className="text-4xl font-black text-slate-800 tracking-tighter mb-2">4K</p>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Matriz de Iluminação</p>
           </div>
           <div className="text-center">
              <p className="text-4xl font-black text-slate-800 tracking-tighter mb-2">24/7</p>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Monitoramento Ativo</p>
           </div>
        </div>
      </div>
    </div>
  );
}
