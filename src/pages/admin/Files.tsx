import { useState, Dispatch, SetStateAction } from 'react';
import { AppState } from '../../types';
import { 
  Folder, 
  File, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  Download, 
  Trash2,
  Grid,
  List,
  Search,
  Upload
} from 'lucide-react';
import { motion } from 'motion/react';

interface FilesProps {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState | null>>;
}

export default function Files({ state, setState }: FilesProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const files = [
    { id: '1', name: 'Aluguel_Quadra_Standard.jpg', type: 'image', size: '1.2 MB', date: '10 Mai 2024' },
    { id: '2', name: 'Regulamento_Arena.pdf', type: 'pdf', size: '450 KB', date: '08 Mai 2024' },
    { id: '3', name: 'Treino_Juninho.mp4', type: 'video', size: '45 MB', date: '05 Mai 2024' },
    { id: '4', name: 'Contrato_Eventos.docx', type: 'doc', size: '120 KB', date: '02 Mai 2024' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'image': return <ImageIcon className="h-5 w-5 text-blue-500" />;
      case 'video': return <Video className="h-5 w-5 text-red-500" />;
      case 'pdf': return <FileText className="h-5 w-5 text-slate-600" />;
      default: return <File className="h-5 w-5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black text-slate-800 uppercase tracking-tight">Data Repository</h1>
          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">Gestão de ativos e documentação legal</p>
        </div>
        <button className="flex items-center space-x-2 rounded-lg bg-primary px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
          <Upload className="h-4 w-4" />
          <span className="uppercase tracking-widest">Upload Asset</span>
        </button>
      </div>

      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search assets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 rounded-lg px-12 py-2.5 text-xs font-bold focus:bg-white focus:outline-none border border-transparent focus:border-primary/20 transition-all text-slate-800"
          />
        </div>
        <div className="flex items-center bg-slate-100 rounded-lg p-1 ml-4">
           <button 
             onClick={() => setViewMode('grid')}
             className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
           >
              <Grid className="h-4 w-4" />
           </button>
           <button 
             onClick={() => setViewMode('list')}
             className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
           >
              <List className="h-4 w-4" />
           </button>
        </div>
      </div>

      {/* Folders Section */}
      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Directory Structure</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {['Media_Assets', 'Legal_Docs', 'Operations', 'Event_Logs'].map(folder => (
            <div key={folder} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-primary/30 transition-all cursor-pointer">
               <div className="p-3 bg-slate-50 rounded-xl w-fit mb-5 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                 <Folder className="h-5 w-5" />
               </div>
               <p className="text-xs font-black text-slate-800 uppercase tracking-tight truncate">{folder}</p>
               <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mt-1">12 Objects</p>
            </div>
          ))}
        </div>
      </div>

      {/* Files Section */}
      <div className="space-y-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Object Listing</h3>
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {files.map((file) => (
              <motion.div
                key={file.id}
                whileHover={{ y: -4 }}
                className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all"
              >
                <div className="aspect-square rounded-xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                   {getIcon(file.type)}
                </div>
                <div>
                   <p className="text-xs font-black text-slate-800 uppercase tracking-tight truncate">{file.name}</p>
                   <div className="flex items-center justify-between mt-4">
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{file.size}</span>
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{file.date}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50/50">
                   <th className="px-10 py-5">Object Name</th>
                   <th className="px-10 py-5">Timestamp</th>
                   <th className="px-10 py-5">Size</th>
                   <th className="px-10 py-5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {files.map(file => (
                  <tr key={file.id} className="hover:bg-slate-50 transition-colors uppercase tracking-tight">
                    <td className="px-10 py-5">
                       <div className="flex items-center space-x-4">
                         {getIcon(file.type)}
                         <span className="font-black text-slate-800">{file.name}</span>
                       </div>
                    </td>
                    <td className="px-10 py-5 font-bold text-slate-500">{file.date}</td>
                    <td className="px-10 py-5 font-bold text-slate-500">{file.size}</td>
                    <td className="px-10 py-5">
                       <div className="flex items-center space-x-3">
                          <button className="p-2 rounded-lg text-slate-400 hover:bg-primary/10 hover:text-primary transition-all"><Download className="h-4 w-4" /></button>
                          <button className="p-2 rounded-lg text-slate-400 hover:bg-danger/10 hover:text-danger transition-all"><Trash2 className="h-4 w-4" /></button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
