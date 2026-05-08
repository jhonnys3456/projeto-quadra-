import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LayoutDashboard, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email === 'admin@admin.com') {
      navigate('/admin');
    } else {
      alert('Acesso negado. Use admin@admin.com');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <Link to="/" className="fixed top-12 left-12 z-20 flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-primary transition-all group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform" />
        <span>Retornar ao Início</span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm z-10"
      >
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-2xl shadow-green-600/30 mb-8"
          >
            <ShieldCheck className="h-8 w-8" />
          </motion.div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 block">Portal de Segurança</span>
          <h2 className="text-3xl font-black tracking-tighter text-slate-800 uppercase">Acesso <span className="text-primary italic">Restrito</span></h2>
        </div>

        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-[0_20px_80px_rgba(0,0,0,0.04)]">
          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Identidade do Operador</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operador@sistema.tech"
                className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-xs font-bold focus:border-primary/30 focus:outline-none transition-all placeholder:text-slate-300"
                required
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Chave de Acesso</label>
                <button type="button" className="text-[8px] font-black uppercase tracking-widest text-primary hover:text-green-700">Recuperar</button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-xs font-bold focus:border-primary/30 focus:outline-none transition-all placeholder:text-slate-300"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-green-600/20 hover:bg-green-700 transition-all hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              Inicializar Sessão
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-200/50 text-center">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
              Credenciais de depuração: <br />
              <span className="text-slate-800 font-black">admin@admin.com</span>
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-[9px] font-black text-slate-300 uppercase tracking-widest leading-relaxed">
          Sistema Proprietário &copy; 2026 <br />
          Todos os direitos reservados
        </p>
      </motion.div>
    </div>
  );
}
