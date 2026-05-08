import { useState, Dispatch, SetStateAction } from 'react';
import { AppState } from '../../types';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  DollarSign, 
  Image as ImageIcon,
  Copy,
  Undo2
} from 'lucide-react';
import { motion } from 'motion/react';

interface RentalsProps {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState | null>>;
}

export default function Rentals({ state, setState }: RentalsProps) {
  const items = [
    { id: '1', name: 'Arena Society [60m]', price: 150, description: 'High-performance synthetic grass with pro-level LED lighting.', category: 'Operations' },
    { id: '2', name: 'Social Lounge & Barbecue', price: 800, description: 'Full access to social area, kitchen, and guest seating.', category: 'Social' },
    { id: '3', name: 'Professional Stage System', price: 300, description: 'Structural setup for live shows and corporate presentations.', category: 'Asset' },
    { id: '4', name: 'Executive Seating Set', price: 15, description: 'Ergonomic furniture set for VIP events.', category: 'Inventory' },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Service Catalog</h1>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Inventory control and pricing strategy</p>
        </div>
        <button className="flex items-center space-x-2 rounded-lg bg-primary px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
          <Plus className="h-4 w-4" />
          <span className="uppercase tracking-widest">Register Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="group bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-primary/30 transition-all flex flex-col overflow-hidden"
          >
            <div className="h-40 bg-slate-50 border-b border-slate-100 flex items-center justify-center text-slate-200 group-hover:bg-slate-100/50 transition-colors">
              <ImageIcon className="h-10 w-10 opacity-50" />
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-2.5 py-1 rounded-full">
                    {item.category}
                 </span>
                 <div className="flex items-center text-slate-800">
                    <span className="text-xs font-bold mr-1">R$</span>
                    <span className="text-xl font-black">{item.price}</span>
                 </div>
              </div>
              
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight mb-4">{item.name}</h3>
              <p className="text-xs text-slate-500 font-bold leading-relaxed flex-1">
                {item.description}
              </p>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button title="Edit" className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all">
                    <Edit3 className="h-4 w-4" />
                  </button>
                  <button title="Duplicate" className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all">
                    <Copy className="h-4 w-4" />
                  </button>
                  <button title="Delete" className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-danger/5 hover:text-danger hover:border-danger/20 transition-all">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-1 text-[9px] font-black text-success uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-success mr-1.5 animate-pulse" /> Active
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <button className="h-[430px] rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all group">
          <div className="p-4 rounded-xl bg-slate-50 group-hover:bg-primary group-hover:text-white transition-all mb-4">
            <Plus className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add Repository Item</span>
        </button>
      </div>

      {/* Recente Actions Footer */}
      <div className="mt-12 bg-slate-900 rounded-2xl p-10 text-white shadow-2xl shadow-slate-900/40">
         <div className="flex items-center justify-between mb-10">
            <div>
               <h3 className="text-xs font-black uppercase tracking-[0.3em]">System Audit Log</h3>
               <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-2">Latest configuration state changes</p>
            </div>
            <button className="px-4 py-2 bg-slate-800 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 hover:bg-slate-700 transition-all flex items-center">
               <Undo2 className="h-3 w-3 mr-2" />
               Rollback Last
            </button>
         </div>
         <div className="space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group">
                 <div className="flex items-center space-x-6">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[9px] font-black text-slate-500 border border-white/5 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all">ST-0{3-i}</div>
                    <div>
                       <span className="text-[11px] font-bold text-slate-300">Price adjustment for "Arena Society" asset from R$ 140 to R$ 150</span>
                       <div className="flex items-center space-x-3 mt-1.5">
                          <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">AdminID: 8823</span>
                          <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Verified Change</span>
                       </div>
                    </div>
                 </div>
                 <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">2h 14m ago</span>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
