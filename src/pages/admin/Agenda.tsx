import { useState, Dispatch, SetStateAction } from 'react';
import { AppState } from '../../types';
import { DayPicker } from 'react-day-picker';
import { ptBR } from 'date-fns/locale';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Plus, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  RefreshCw
} from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'motion/react';

interface AgendaProps {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState | null>>;
}

export default function Agenda({ state, setState }: AgendaProps) {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [view, setView] = useState<'day' | 'week' | 'month'>('day');

  const times = Array.from({ length: 17 }, (_, i) => i + 7); // 7:00 to 23:00

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Scheduling System</h1>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Real-time court availability and management</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <RefreshCw className="h-4 w-4" />
            <span className="uppercase tracking-widest">Sync</span>
          </button>
          <button className="flex items-center space-x-2 rounded-lg bg-primary px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
            <Plus className="h-4 w-4" />
            <span className="uppercase tracking-widest">New Session</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Side Panel: Calendar Picker */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <DayPicker 
              mode="single"
              selected={selectedDay}
              onSelect={(day) => day && setSelectedDay(day)}
              locale={ptBR}
              className="mx-auto"
            />
          </div>

          <div className="bg-sidebar p-8 rounded-2xl text-white shadow-xl shadow-slate-900/20 border border-slate-800">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-slate-800 rounded-lg">
                <CalendarIcon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Daily Forecast</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-4xl font-black tracking-tight">{state.agenda.filter(a => a.date === format(selectedDay, 'yyyy-MM-dd')).length}</p>
                <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-1">Confirmed Bookings</p>
              </div>
              <div className="h-px bg-slate-800" />
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                <span className="text-slate-500">Utilization</span>
                <span className="text-success">65.4%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Panel: Schedule */}
        <div className="lg:col-span-9 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="flex items-center justify-between p-8 border-b border-slate-100 flex-none bg-white z-10 sticky top-0">
            <div className="flex items-center space-x-6">
              <div className="flex space-x-2">
                 <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100"><ChevronLeft className="h-4 w-4 text-slate-400" /></button>
                 <button className="p-2 hover:bg-slate-50 rounded-lg border border-slate-100"><ChevronRight className="h-4 w-4 text-slate-400" /></button>
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-800">
                {format(selectedDay, "EEEE, d 'de' MMM", { locale: ptBR })}
              </h3>
            </div>
            <div className="flex items-center rounded-lg bg-slate-100 p-1">
              {['day', 'week', 'month'].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v as any)}
                  className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-md transition-all ${
                    view === v ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-800'
                  }`}
                >
                  {v === 'day' ? 'Daily' : v === 'week' ? 'Weekly' : 'Monthly'}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-0 border-t border-slate-100 relative">
            <div className="grid grid-cols-1 divide-y divide-slate-100">
              {times.map((hour) => (
                <div key={hour} className="group flex h-20 items-start">
                  <div className="w-24 pr-6 py-6 text-right">
                    <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{hour}:00</span>
                  </div>
                  <div className="flex-1 border-l border-slate-100 relative group-hover:bg-slate-50/50 transition-colors cursor-pointer capitalize">
                    {/* Simulated Event */}
                    {hour === 18 && (
                      <motion.div 
                        initial={{ scale: 0.98, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-2 rounded-xl bg-primary/10 border border-primary/20 p-4 text-primary shadow-xl shadow-blue-600/5 z-10 flex items-center justify-between"
                      >
                        <div>
                          <p className="text-xs font-black uppercase tracking-tight">Racha dos Amigos</p>
                          <div className="flex items-center mt-1 text-[9px] font-black uppercase tracking-widest space-x-3 opacity-70">
                            <span className="flex items-center"><Clock className="h-2.5 w-2.5 mr-1" /> 18:00 - 19:00</span>
                            <span className="flex items-center">Main Arena</span>
                          </div>
                        </div>
                        <button className="p-1.5 hover:bg-primary/20 rounded-lg"><MoreVertical className="h-4 w-4" /></button>
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 border-t border-slate-100 flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50/30">
             <div className="flex items-center space-x-6">
                <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-primary mr-2 shadow-lg shadow-blue-600/40" /> Reserved</span>
                <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-slate-200 mr-2" /> Available</span>
                <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-orange-500 mr-2 shadow-lg shadow-orange-600/40" /> Locked</span>
             </div>
             <div className="flex items-center space-x-3">
                <span className="opacity-60 font-bold">Cloud Sync Status:</span>
                <span className="text-success">Operational</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
