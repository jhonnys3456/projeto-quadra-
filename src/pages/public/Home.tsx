import { AppState } from '../../types';
import { motion } from 'motion/react';
import { ShieldCheck, Car, Coffee, CalendarCheck, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home({ state }: { state: AppState }) {
  const { hero } = state.site;

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[800px] flex items-center">
        {/* Background Clipping with Image Placeholder */}
        <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full z-0 pointer-events-none overflow-hidden hidden lg:block">
           <div className="absolute inset-0 bg-primary/10 hero-mask-lg z-10" />
           <div className="w-full h-full bg-slate-200 hero-mask-lg shadow-2xl flex items-center justify-center text-slate-400 font-black uppercase tracking-widest text-4xl italic">
              Espaço de Alta Performance
           </div>
        </div>

        {/* Mobile background */}
        <div className="absolute inset-0 z-0 lg:hidden hero-mask bg-slate-100 flex items-center justify-center text-slate-200 font-bold uppercase tracking-widest text-center px-4">
          Revelação Esportiva
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-black tracking-tighter text-slate-800 sm:text-7xl lg:text-8xl leading-[0.9] uppercase">
                 <span className="text-primary italic">Revelação</span> <br />
                 Esportivo
              </h1>
              
              <div className="w-24 h-2 bg-accent mt-8 mb-10" />
              
              <p className="mt-8 max-w-xl text-lg sm:text-xl text-slate-600 leading-relaxed font-semibold">
                {hero.subtitle}
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                <Link
                  to="/estrutura"
                  className="h-16 w-full sm:w-auto px-12 rounded-xl bg-primary text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-green-800 hover:shadow-2xl hover:shadow-green-900/40 flex items-center justify-center shadow-xl"
                >
                  Conhecer Estrutura
                </Link>
                <Link
                  to="/contato"
                  className="h-16 w-full sm:w-auto px-12 rounded-xl border-2 border-primary bg-transparent text-[11px] font-black uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary/5 flex items-center justify-center"
                >
                  Falar Conosco
                </Link>
              </div>

              {/* Quick stats / Features */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                   { icon: ShieldCheck, label: 'Ambiente Seguro' },
                   { icon: Car, label: 'Estacionamento' },
                   { icon: Coffee, label: 'Copa & Bar' },
                   { icon: CalendarCheck, label: 'Eventos' },
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center lg:items-start group">
                      <div className="p-3 rounded-xl bg-slate-50 text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-all border border-slate-100">
                         <item.icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-800 transition-colors">{item.label}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Cards (Inspired by Image) */}
      <section className="py-32 bg-slate-50 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black tracking-[0.4em] text-accent uppercase mb-6 block">Nossos Espaços</span>
            <h2 className="text-4xl font-black tracking-tight text-slate-800 uppercase sm:text-6xl">
               Infraestrutura para <br/><span className="text-primary italic">todos os momentos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Quadra Society', desc: 'Ideal para jogos com amigos de alto nível.', type: 'Coberta' },
              { title: 'Quadra de Areia', desc: 'Perfeita para Beach Tennis e Vôlei de Areia.', type: 'Iluminada' },
              { title: 'Salão de Festas', desc: 'Aniversários, casamentos e cerimônias.', type: 'Climatizado' },
              { title: 'Sala de Reuniões', desc: 'Encontros corporativos e treinamentos.', type: 'Equipada' },
            ].map((space, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-slate-300">
                  Foto {space.title}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-[9px] font-black uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                      {space.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{space.title}</h3>
                  <p className="text-slate-500 text-xs font-bold leading-relaxed tracking-tight mb-8 flex-1">{space.desc}</p>
                  
                  <Link to="/estrutura" className="flex items-center justify-between group/link border-t border-slate-100 pt-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover/link:text-accent transition-colors">Ver Detalhes</span>
                    <ArrowRight className="h-4 w-4 text-slate-300 group-hover/link:text-accent group-hover/link:translate-x-2 transition-all" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Bar (Inspired by Image Footer) */}
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                 <div className="p-3 bg-white/10 rounded-xl">
                    <Clock className="h-6 w-6 text-green-300" />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-300">Horário</h4>
                    <p className="text-xs font-bold uppercase">Seg - Dom: 06h às 23h</p>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                 <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-green-300" />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-300">Endereço</h4>
                    <p className="text-xs font-bold uppercase">Setor Industrial, CE</p>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                 <div className="p-3 bg-white/10 rounded-xl">
                    <CalendarCheck className="h-6 w-6 text-green-300" />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-300">Reservas</h4>
                    <p className="text-xs font-bold uppercase">via WhatsApp Comercial</p>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                 <div className="p-3 bg-white/10 rounded-xl">
                    <Coffee className="h-6 w-6 text-green-300" />
                 </div>
                 <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-green-300">Convivência</h4>
                    <p className="text-xs font-bold uppercase">Bar & Área Social</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
