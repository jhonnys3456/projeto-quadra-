import { AppState } from '../../types';
import { motion } from 'motion/react';

const eventsList = [
  { 
    title: 'Ligas Profissionais', 
    desc: 'Hospedagem de temporada completa para federações esportivas locais e regionais.',
    tags: ['Competitivo', 'Pronto para Transmissão'] 
  },
  { 
    title: 'Cúpulas Corporativas', 
    desc: 'Team building de alto impacto com AV integrado e buffet completo.',
    tags: ['Negócios', 'Serviço VIP'] 
  },
  { 
    title: 'Aniversários Elite', 
    desc: 'Experiências sociais exclusivas com acesso total à área social.',
    tags: ['Social', 'Tudo Incluso'] 
  }
];

export default function Events({ state }: { state: AppState | null }) {
  if (!state) return null;

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-24 space-y-6 md:space-y-0">
           <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 block">Programação de Eventos</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter">Espaços <br /><span className="text-primary italic">Versáteis</span></h1>
           </div>
           <p className="text-slate-500 font-medium max-w-sm text-sm leading-relaxed">
             Da alta competição ao lazer corporativo, nossa instalação se adapta para fornecer o melhor ambiente técnico e social.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {eventsList.map((event, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 flex flex-col justify-end p-10 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10 transition-opacity group-hover:opacity-90" />
              
              <div className="relative z-20">
                <div className="flex items-center space-x-2 mb-4">
                  {event.tags.map((tag, ti) => (
                    <span key={ti} className="text-[8px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform">{event.title}</h3>
                <p className="text-slate-400 text-xs font-bold leading-relaxed tracking-tight mb-8">
                  {event.desc}
                </p>
                <div className="h-px bg-white/10 w-full mb-6" />
                <button className="text-[9px] font-black uppercase tracking-[0.2em] text-white flex items-center group/btn">
                  Consultar Disponibilidade <span className="ml-3 group-hover/btn:translate-x-3 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature grid */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-24">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-slate-50 p-12 rounded-3xl border border-slate-100"
           >
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-8">Integração Total</h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed mb-10 italic">
                "A versatilidade do espaço nos permitiu realizar um torneio e uma sessão de networking pós-evento perfeitamente. O suporte técnico foi impecável."
              </p>
              <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 rounded-full bg-slate-200" />
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-tight">Ana Silveira</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Diretora de Eventos Globais</p>
                 </div>
              </div>
           </motion.div>
           
           <div className="flex flex-col justify-center space-y-12">
              <div className="flex items-center space-x-8">
                 <span className="text-5xl font-black text-slate-100">01</span>
                 <div>
                    <h5 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-2">Suporte Técnico</h5>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">Equipe dedicada para placar e gerenciamento de sessões.</p>
                 </div>
              </div>
              <div className="flex items-center space-x-8">
                 <span className="text-5xl font-black text-slate-100">02</span>
                 <div>
                    <h5 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-2">Área Social</h5>
                    <p className="text-xs text-slate-500 font-bold leading-relaxed">Lounge exclusivo para convidados e espectadores com serviço de bar.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
