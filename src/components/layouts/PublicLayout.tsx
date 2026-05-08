import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppState } from '../../types';
import { Menu, X, Facebook, Instagram, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function PublicLayout({ state }: { state: AppState }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Estrutura', path: '/estrutura' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Regras', path: '/regras' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Announcement Bar */}
      {state.site.banner.active && (
        <div className="bg-gradient-announcement px-4 py-2.5 text-center text-[11px] font-bold tracking-widest text-white uppercase shadow-sm relative z-[60]">
          {state.site.banner.text}
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-5">
              {/* Espaço para Logo da Escola Revelação */}
              <div className="flex items-center space-x-3">
                <div className="h-14 w-14 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <span className="text-[8px] font-black text-slate-300 text-center leading-none uppercase px-1">Logo<br/>Escola<br/>Revelação</span>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <Link to="/" className="flex flex-col">
                  <span className="text-sm font-black tracking-tight text-primary uppercase leading-tight">
                    Revelação
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                    Centro Esportivo
                  </span>
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-primary ${
                      location.pathname === item.path ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="px-4 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-primary transition-all flex items-center space-x-2 border border-slate-100 rounded-lg"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                  <span>Acesso Admin</span>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-gray-100 bg-white md:hidden"
            >
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-black text-slate-700 uppercase tracking-tight hover:bg-slate-50 hover:text-primary transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-black text-primary uppercase tracking-tight"
                >
                  Acesso Admin
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary pt-24 pb-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-4 relative z-10">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center">
                   <span className="text-[10px] font-black text-primary uppercase">R</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-black tracking-tighter uppercase leading-tight">
                    Revelação
                  </span>
                  <span className="text-[10px] font-bold text-green-200 uppercase tracking-widest leading-none">
                    Centro Esportivo
                  </span>
                </div>
              </div>
              <p className="max-w-xs text-xs font-medium text-green-100 leading-relaxed uppercase tracking-tight">
                O melhor ecossistema para esportes e ventos da região. Infraestrutura integrada à excelência educacional.
              </p>
              <div className="mt-10 flex space-x-6">
                <a href="#" className="p-3 bg-white/10 rounded-xl hover:bg-accent transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-xl hover:bg-accent transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-xl hover:bg-accent transition-all">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-300 mb-8">Navegação</h3>
              <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-green-100">
                <li><Link to="/estrutura" className="hover:text-accent transition-colors">Infraestrutura</Link></li>
                <li><Link to="/eventos" className="hover:text-accent transition-colors">Eventos</Link></li>
                <li><Link to="/galeria" className="hover:text-accent transition-colors">Galeria</Link></li>
                <li><Link to="/regras" className="hover:text-accent transition-colors">Protocolos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-green-300 mb-8">Contato Direto</h3>
              <div className="space-y-6 text-[11px] font-bold uppercase tracking-widest text-green-100">
                <p className="leading-loose">
                  Rua das Amoreiras, 450<br />
                  Setor Industrial, CE<br />
                  Siga @espacorevelacao
                </p>
                <p className="text-accent font-black text-xs">(11) 99999-9999</p>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[9px] font-black uppercase tracking-widest text-green-400">
             <span>&copy; {new Date().getFullYear()} Centro Esportivo Revelação. Todos os direitos reservados.</span>
             <div className="mt-4 md:mt-0 flex space-x-8">
                <a href="#" className="hover:text-white">Privacidade</a>
                <a href="#" className="hover:text-white">Termos</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
