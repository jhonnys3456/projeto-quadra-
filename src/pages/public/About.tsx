import { AppState } from '../../types';
import { motion } from 'motion/react';

export default function About({ state }: { state: AppState | null }) {
  if (!state) return null;
  const pageData = state.site.pages.find(p => p.id === 'sobre');

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-100 py-24">
         <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 block"
            >
              A Instituição
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-slate-800 uppercase tracking-tighter"
            >
              Excelência em <br /><span className="text-primary italic">Infraestrutura Esportiva</span>
            </motion.h1>
         </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="prose prose-slate prose-lg max-w-none"
        >
           <div className="text-slate-600 font-medium leading-loose space-y-8 first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              {typeof pageData?.content === 'string' 
                ? pageData.content 
                : 'Desde nossa fundação, estamos comprometidos em fornecer um ambiente esportivo da mais alta qualidade para atletas de todos os níveis. Nossas instalações de última geração são projetadas para promover competição, comunidade e saúde.'}
           </div>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-slate-100 pt-24">
           <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-4">Integridade</h4>
              <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">Operando com total transparência e ética profissional em todas as sessões.</p>
           </div>
           <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-4">Inovação</h4>
              <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">Utilizando o que há de mais moderno em tecnologia de gramados e iluminação.</p>
           </div>
           <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-800 mb-4">Comunidade</h4>
              <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-tight">Oferecendo um espaço seguro e inclusivo para que a comunidade esportiva local floresça.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
