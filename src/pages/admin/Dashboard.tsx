import { AppState } from '../../types';
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  ArrowUpRight,
  Plus,
  Settings2,
  Trash2
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { motion } from 'motion/react';

const data = [
  { name: 'Jan', revenue: 4000, expenses: 2400 },
  { name: 'Fev', revenue: 3000, expenses: 1398 },
  { name: 'Mar', revenue: 2000, expenses: 9800 },
  { name: 'Abr', revenue: 2780, expenses: 3908 },
  { name: 'Mai', revenue: 1890, expenses: 4800 },
  { name: 'Jun', revenue: 2390, expenses: 3800 },
];

export default function Dashboard({ state }: { state: AppState }) {
  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Métricas Operacionais</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">Resumo de performance e fluxo financeiro</p>
        </div>
        <div className="flex bg-white rounded-lg p-1 shadow-sm border border-slate-200">
           <button className="px-5 py-2 text-[10px] font-black uppercase tracking-widest bg-primary text-white rounded-md shadow-lg shadow-blue-600/20">Semanal</button>
           <button className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-800">Mensal</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: 'Faturamento Bruto', value: 'R$ 12.450', icon: DollarSign, trend: '+12.5%', color: 'bg-primary' },
          { label: 'Booking Rate', value: '84.2%', icon: Calendar, trend: '+4.2%', color: 'bg-primary' },
          { label: 'Retention Score', value: '92.1%', icon: Users, trend: '+18.1%', color: 'bg-primary' },
          { label: 'Growth Index', value: '2.4x', icon: TrendingUp, trend: '+2.5%', color: 'bg-primary' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="p-8 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:border-primary/30 transition-all"
          >
            <div className="flex items-center justify-between mb-8">
              <div className={`p-2.5 rounded-lg ${stat.color} text-white shadow-lg shadow-blue-600/20`}>
                <stat.icon className="h-4 w-4" />
              </div>
              <div className="text-[10px] font-black text-success flex items-center bg-success/5 px-2.5 py-1 rounded-full uppercase tracking-widest">
                {stat.trend} <ArrowUpRight className="h-3 w-3 ml-1" />
              </div>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mb-2">{stat.label}</p>
            <p className="text-3xl font-black text-slate-800 tracking-tight">{stat.value}</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* Widgets Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 p-10 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-10">
            <div>
               <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Análise de Fluxo</h3>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Comparativo de entrada vs saída</p>
            </div>
            <div className="flex items-center space-x-3">
               <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Receita</span>
               </div>
               <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-slate-200" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Desp.</span>
               </div>
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1e5c32" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#1e5c32" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="8 8" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 700, fill: '#94a3b8', textAnchor: 'middle' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 700, fill: '#94a3b8' }} />
                <Tooltip 
                  cursor={{ stroke: '#1e5c32', strokeWidth: 1, strokeDasharray: '4 4' }}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', fontSize: '10px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#1e5c32" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="expenses" stroke="#e2e8f0" strokeWidth={2} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-10 rounded-2xl bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col">
          <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-10">Fila de Atendimento</h3>
          <div className="flex-1 space-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 font-black text-[10px] group-hover:bg-primary/5 group-hover:border-primary/20 group-hover:text-primary transition-all">
                    0{i}
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-800 uppercase tracking-tight">João Matos</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] mt-0.5">Arena • Finalizado</p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>
            ))}
          </div>
          <button className="mt-12 w-full py-4 text-[10px] font-black text-primary uppercase tracking-[0.2em] border-2 border-primary/10 rounded-xl hover:bg-primary hover:text-white transition-all">
            Log Completo de Operações
          </button>
        </div>
      </div>
    </div>
  );
}
