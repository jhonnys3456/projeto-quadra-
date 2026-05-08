import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppState } from '../../types';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  DollarSign, 
  Files, 
  Settings, 
  LogOut,
  RotateCcw,
  Trash2,
  History,
  Menu,
  X,
  CreditCard
} from 'lucide-react';
import { useState, Dispatch, SetStateAction } from 'react';

interface AdminLayoutProps {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState | null>>;
}

export default function AdminLayout({ state, setState }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Agenda', icon: Calendar, path: '/admin/agenda' },
    { name: 'Clientes', icon: Users, path: '/admin/clientes' },
    { name: 'Financeiro', icon: DollarSign, path: '/admin/financeiro' },
    { name: 'Aluguéis', icon: CreditCard, path: '/admin/alugueis' },
    { name: 'Arquivos', icon: Files, path: '/admin/arquivos' },
  ];

  return (
    <div className="flex h-screen bg-app-bg text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-60' : 'w-20'
        } flex flex-col bg-sidebar text-slate-400 transition-all duration-300 ease-in-out border-r border-slate-800`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          {isSidebarOpen && (
            <span className="text-lg font-bold tracking-tight text-white uppercase">Revelação Admin</span>
          )}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-500 hover:text-white transition-colors">
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 mx-auto" />}
          </button>
        </div>

        <nav className="flex-1 space-y-0.5 mt-4 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3.5 text-sm font-medium transition-all border-l-4 ${
                  isActive 
                    ? 'bg-primary/10 text-white border-primary' 
                    : 'border-transparent hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon className={`${isSidebarOpen ? 'mr-3' : 'mx-auto'} h-5 w-5 flex-shrink-0`} />
                {isSidebarOpen && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-4 border-t border-slate-800">
          <div className="px-2 mb-4 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-slate-600">
             <span>Ver. 2.4.0</span>
             <span className="text-success flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-success mr-1.5" /> Online</span>
          </div>
          <Link
            to="/"
            className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-all border border-slate-700 justify-center"
          >
            <LogOut className={`${isSidebarOpen ? 'mr-3' : ''} h-4 w-4`} />
            {isSidebarOpen && <span>Sair do Painel</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Bar with Admin Tools */}
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 flex-shrink-0 z-10">
          <div className="flex items-center space-x-6">
            <h1 className="text-lg font-bold text-slate-800">
              {menuItems.find(i => i.path === location.pathname)?.name || 'Admin'}
            </h1>
            
            <div className="flex bg-slate-100 rounded-full p-1 shadow-inner">
               <button className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white shadow-sm text-slate-800">Administração</button>
               <button className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-800">Site Público</button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button title="Desfazer" className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">Desfazer</button>
              <button title="Histórico" className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">Histórico</button>
              <button className="px-5 py-2 rounded-lg bg-primary text-xs font-bold text-white hover:bg-green-700 transition-all shadow-lg shadow-green-600/20">Salvar Alterações</button>
            </div>
            
            <div className="h-8 w-px bg-slate-200" />

            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold border border-slate-200">
                A
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-app-bg">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
