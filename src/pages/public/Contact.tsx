import { AppState } from '../../types';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact({ state }: { state: AppState | null }) {
  if (!state) return null;

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-24">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 block">Consulta Direta</span>
           <h1 className="text-4xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter">Interface de <span className="text-primary italic">Conexão</span></h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-10 bg-slate-50 p-12 rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Nome da Identidade</label>
                  <input type="text" className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-xs font-bold focus:border-primary/30 focus:outline-none transition-all" placeholder="Digite seu nome completo" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Correio Eletrônico</label>
                  <input type="email" className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-xs font-bold focus:border-primary/30 focus:outline-none transition-all" placeholder="email@endereco.com" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Assunto do Contato</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-xs font-bold focus:border-primary/30 focus:outline-none transition-all appearance-none">
                  <option>Reserva de Sessão</option>
                  <option>Evento Institucional</option>
                  <option>Suporte Técnico</option>
                  <option>Consulta Geral</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Mensagem Narrativa</label>
                <textarea rows={5} className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-xs font-bold focus:border-primary/30 focus:outline-none transition-all" placeholder="Detalhe sua solicitação..."></textarea>
              </div>
              <button className="w-full rounded-xl bg-primary py-5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-green-600/20 hover:bg-green-700 transition-all">
                Transmitir Mensagem
              </button>
            </form>
          </motion.div>

          <div className="space-y-16 flex flex-col justify-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="flex items-center space-x-10 p-8 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-default group"
            >
              <div className="bg-primary p-5 rounded-2xl text-white shadow-xl shadow-green-600/20 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Vetor de Localização</h3>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight">Rua da Revelação, 123 - Centro Esportivo</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="flex items-center space-x-10 p-8 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-default group"
            >
              <div className="bg-primary p-5 rounded-2xl text-white shadow-xl shadow-green-600/20 group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Protocolos de Voz</h3>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight">+55 [00] 00000-0000</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex items-center space-x-10 p-8 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all cursor-default group"
            >
              <div className="bg-primary p-5 rounded-2xl text-white shadow-xl shadow-green-600/20 group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Correspondência Digital</h3>
                <p className="text-sm font-black text-slate-800 uppercase tracking-tight">contato@revelacaoesportiva.com.br</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
