import { useState, Dispatch, SetStateAction } from 'react';
import { AppState } from '../../types';
import { 
  Search, 
  MoreHorizontal, 
  MessageSquare, 
  FileText, 
  History,
  Mail,
  Phone,
  Upload,
  UserPlus,
  X,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CustomersProps {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState | null>>;
}

export default function Customers({ state, setState }: CustomersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);

  const customers = [
    { id: '1', name: 'João Matos', email: 'joao@example.com', phone: '(11) 98888-8888', totalReservations: 12 },
    { id: '2', name: 'Maria Silva', email: 'maria@example.com', phone: '(11) 97777-7777', totalReservations: 4 },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">CRM Hub</h1>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Database of verified players and organizers</p>
        </div>
        <button className="flex items-center space-x-2 rounded-lg bg-primary px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
          <UserPlus className="h-4 w-4" />
          <span className="uppercase tracking-widest">Enlist Client</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Customer List */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by identity, contact info or status..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-14 py-4 text-xs font-bold focus:border-primary/30 focus:outline-none transition-all shadow-sm shadow-slate-200/50 text-slate-800"
            />
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50/50">
                  <th className="px-10 py-5">Identity Profile</th>
                  <th className="px-10 py-5">Contact Vector</th>
                  <th className="px-10 py-5 text-center">Sessions</th>
                  <th className="px-10 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 uppercase tracking-tight">
                {customers.map((c) => (
                  <tr 
                    key={c.id} 
                    onClick={() => setSelectedCustomer(c.id)}
                    className={`group cursor-pointer hover:bg-slate-50/50 transition-colors ${selectedCustomer === c.id ? 'bg-primary/5' : ''}`}
                  >
                    <td className="px-10 py-6">
                      <div className="flex items-center space-x-5">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-black text-slate-400 text-[10px] group-hover:bg-primary/10 group-hover:text-primary transition-all">
                          {c.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-800">{c.name}</p>
                          <p className="text-[9px] font-bold text-slate-400 mt-0.5">Active since Q1 2024</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6">
                      <div className="space-y-1.5">
                        <div className="flex items-center text-[10px] font-bold text-slate-500">
                          <Mail className="h-3 w-3 mr-2 text-slate-300" /> {c.email}
                        </div>
                        <div className="flex items-center text-[10px] font-bold text-slate-500">
                          <Phone className="h-3 w-3 mr-2 text-slate-300" /> {c.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-center">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-600">
                        {c.totalReservations}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <button className="p-2.5 rounded-lg text-slate-300 hover:bg-white hover:text-slate-800 hover:shadow-sm transition-all opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Details Panel */}
        <AnimatePresence mode="wait">
          {selectedCustomer ? (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="lg:col-span-4 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-10">
                   <div>
                      <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Internal Journal</h3>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Private administrative logs</p>
                   </div>
                  <button onClick={() => setSelectedCustomer(null)} className="p-2 text-slate-400 hover:text-slate-800">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Operations Notes</label>
                    <textarea 
                      className="w-full rounded-xl border border-slate-100 bg-slate-50 p-6 text-xs font-bold text-slate-800 focus:bg-white focus:border-primary/20 transition-all outline-none"
                      rows={6}
                      placeholder="Input behavioral tracking data..."
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Legal Documentation</label>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 group/file">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-3 text-primary opacity-50" />
                          <span className="text-[10px] font-black text-slate-800 uppercase tracking-tight">Contract_v2.pdf</span>
                        </div>
                        <button className="text-slate-300 hover:text-danger flex"><Trash2 className="h-3.5 w-3.5" /></button>
                      </div>
                      <button className="w-full flex items-center justify-center space-x-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/30 p-5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-100 hover:text-primary hover:border-primary/40 transition-all">
                        <Upload className="h-4 w-4" />
                        <span>Inject Document</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sidebar p-10 rounded-2xl text-white shadow-2xl shadow-slate-900/40 border border-slate-800">
                <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8">Engagement History</h4>
                <div className="space-y-8">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-start space-x-5">
                      <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                        <History className="h-4 w-4 text-slate-500" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-tight">Session Reserved</p>
                        <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-1.5">12 MAY 2024 • R$ 150,00 • COMPLETE</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-16 text-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/30">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                 <MessageSquare className="h-7 w-7 text-slate-200" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 max-w-[200px] leading-relaxed">Select a profile to access administrative journal and legal assets.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

