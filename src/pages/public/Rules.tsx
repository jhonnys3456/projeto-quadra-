import { AppState } from '../../types';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Trash2, VolumeX } from 'lucide-react';

export default function Rules({ state }: { state: AppState | null }) {
  if (!state) return null;

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-24">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 block">Estrutura Regulatória</span>
           <h1 className="text-4xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter">Protocolos da <br /><span className="text-primary italic">Instalação</span></h1>
        </div>

        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-slate-50 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          >
            <div className="flex items-center space-x-4 mb-10">
               <div className="p-3 bg-primary/10 rounded-xl">
                  <ShieldCheck className="h-6 w-6 text-primary" />
               </div>
               <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Código de Conduta</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="flex items-start space-x-5">
                  <Clock className="h-5 w-5 text-slate-400 mt-1" />
                  <div>
                     <p className="text-xs font-black uppercase tracking-widest text-slate-800 mb-2">Disciplina Temporal</p>
                     <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">O acesso é estritamente concedido dentro do horário reservado. Extrapolações resultam em taxas de penalidade.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-5">
                  <ShieldCheck className="h-5 w-5 text-slate-400 mt-1" />
                  <div>
                     <p className="text-xs font-black uppercase tracking-widest text-slate-800 mb-2">Padrões de Equipamento</p>
                     <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">Chuteiras de alumínio são proibidas. Calçados específicos para gramado profissional são necessários para segurança.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-5">
                  <Trash2 className="h-5 w-5 text-slate-400 mt-1" />
                  <div>
                     <p className="text-xs font-black uppercase tracking-widest text-slate-800 mb-2">Conformidade Sanitária</p>
                     <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">O ambiente deve permanecer impecável. Utilize as lixeiras designadas para todos os resíduos.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-5">
                  <VolumeX className="h-5 w-5 text-slate-400 mt-1" />
                  <div>
                     <p className="text-xs font-black uppercase tracking-widest text-slate-800 mb-2">Portaria Acústica</p>
                     <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">Os níveis de decibéis devem ser minimizados após as 22h, de acordo com os padrões regulatórios municipais.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <div className="text-center py-12 border-t border-slate-100">
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Documentação Completa</p>
             <button className="px-10 py-4 bg-slate-900 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-slate-800 transition-all flex items-center mx-auto">
                <Download className="h-4 w-4 mr-3" />
                Baixar PDF Interno
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Download({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
  );
}
