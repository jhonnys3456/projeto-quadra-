import { useState, Dispatch, SetStateAction } from 'react';
import { AppState } from '../../types';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter,
  Download,
  Plus
} from 'lucide-react';
import { 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { motion } from 'motion/react';

interface FinancesProps {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState | null>>;
}

const financeData = [
  { category: 'Arena Rentals', value: 8500, color: '#2563eb' },
  { category: 'Corporate Events', value: 3400, color: '#3b82f6' },
  { category: 'Equipment Lease', value: 1200, color: '#60a5fa' },
];

const transactions = [
  { id: '1', type: 'income', category: 'Rental', amount: 150, date: '10/05/2024', desc: 'League Group A' },
  { id: '2', type: 'expense', category: 'Maintenance', amount: 450, date: '09/05/2024', desc: 'LED Panel Swap' },
  { id: '3', type: 'income', category: 'Event', amount: 1200, date: '08/05/2024', desc: 'Corporate Cup' },
  { id: '4', type: 'expense', category: 'Utilities', amount: 800, date: '05/05/2024', desc: 'Energy Bill Q2' },
];

export default function Finances({ state, setState }: FinancesProps) {
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Financial Treasury</h1>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Revenue tracking and expenditure analysis</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all">
            <Download className="h-4 w-4" />
            <span>Generate Ledger</span>
          </button>
          <button className="flex items-center space-x-2 rounded-lg bg-primary px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
            <Plus className="h-4 w-4" />
            <span>New Transaction</span>
          </button>
        </div>
      </div>

      {/* Financial Overview Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-primary p-10 rounded-2xl text-white shadow-2xl shadow-blue-600/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingUp className="h-24 w-24" />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">Gross Revenue</p>
            <p className="text-4xl font-black mt-4 tracking-tighter">R$ 13.100,00</p>
            <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-blue-100 bg-white/10 w-fit px-3 py-1.5 rounded-full">
              <ArrowUpRight className="h-3 w-3 mr-2 text-success" />
              +15.4% Growth
            </div>
          </div>
        </div>

        <div className="bg-sidebar p-10 rounded-2xl text-white shadow-2xl shadow-slate-900/30 relative overflow-hidden group border border-slate-800">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <TrendingDown className="h-24 w-24" />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Expenditure</p>
            <p className="text-4xl font-black mt-4 tracking-tighter">R$ 4.250,50</p>
            <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/5 w-fit px-3 py-1.5 rounded-full border border-white/5">
              <ArrowDownRight className="h-3 w-3 mr-2" />
              Controlled State
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between group">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Net Profitability</p>
            <p className="text-4xl font-black text-slate-800 mt-4 tracking-tighter">R$ 8.849,50</p>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
               <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Efficiency threshold</span>
               <span className="text-[9px] font-black text-primary uppercase tracking-widest">68%</span>
            </div>
            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '68%' }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 className="bg-primary h-full rounded-full" 
               />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
           <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-800 mb-10">Revenue Stream Analysis</h3>
           <div className="h-[200px] w-full mb-10">
              <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <Pie
                      data={financeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                    >
                       {financeData.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={entry.color} />
                       ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        textTransform: 'uppercase',
                        fontSize: '9px',
                        fontWeight: '900',
                        letterSpacing: '0.1em'
                      }} 
                    />
                 </PieChart>
              </ResponsiveContainer>
           </div>
           <div className="space-y-5 mt-auto">
              {financeData.map(item => (
                <div key={item.category} className="flex items-center justify-between group cursor-default">
                   <div className="flex items-center space-x-4">
                      <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest group-hover:text-slate-800 transition-colors">{item.category}</span>
                   </div>
                   <span className="text-xs font-black text-slate-800">R$ {item.value}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-white">
             <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-800">Verified Ledger</h3>
             <button className="p-2.5 hover:bg-slate-50 rounded-lg text-slate-400 border border-slate-100 transition-all">
               <Filter className="h-4 w-4" />
             </button>
          </div>
          <div className="flex-1 overflow-x-auto text-[11px] font-bold">
            <table className="w-full text-left uppercase tracking-tight">
               <thead>
                  <tr className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 bg-slate-50/30">
                    <th className="px-10 py-5">Timestamp</th>
                    <th className="px-10 py-5">Narrative</th>
                    <th className="px-10 py-5">Class</th>
                    <th className="px-10 py-5 text-right">Value</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {transactions.map(t => (
                    <tr key={t.id} className="hover:bg-slate-50/50 transition-colors group">
                       <td className="px-10 py-6 text-slate-400">{t.date}</td>
                       <td className="px-10 py-6 font-black text-slate-800">{t.desc}</td>
                       <td className="px-10 py-6">
                          <span className="inline-flex items-center rounded-lg bg-slate-100 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] text-slate-500 group-hover:bg-white transition-colors">
                             {t.category}
                          </span>
                       </td>
                       <td className={`px-10 py-6 text-right font-black ${t.type === 'income' ? 'text-blue-600' : 'text-danger'}`}>
                          {t.type === 'income' ? '+' : '-'} R$ {t.amount.toFixed(2)}
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
