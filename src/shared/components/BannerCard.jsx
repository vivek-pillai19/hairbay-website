import React from 'react';
import { Edit3, GripVertical } from 'lucide-react';

const BannerCard = ({ image, title, subtitle, status, order, isSelected, onEdit }) => {
  const statusColors = {
    Active: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
    Inactive: 'bg-slate-100 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700',
  };

  return (
    <div 
      onClick={onEdit}
      className={`p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all cursor-pointer group ${isSelected ? 'border-l-4 border-primary bg-primary/5 dark:bg-primary/5 ring-1 ring-inset ring-primary/20' : 'border-l-4 border-transparent'}`}
    >
      <div className="flex items-center text-slate-300 group-hover:text-primary transition-colors pr-1">
        <GripVertical className="w-4 h-4" />
      </div>
      
      <div className="w-20 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0 shadow-sm border border-slate-200 dark:border-slate-700 relative">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=200'})` }}
        ></div>
        <div className="absolute top-1 left-1 bg-black/60 backdrop-blur-sm text-white text-[8px] font-black px-1.5 py-0.5 rounded flex items-center justify-center">
          #{order}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-[10px] text-slate-500 line-clamp-1 font-medium italic">{subtitle}</p>
      </div>

      <div className="text-right flex flex-col items-end gap-1.5">
        <span className={`text-[9px] px-2 py-0.5 font-bold rounded-full uppercase tracking-tight border ${statusColors[status] || 'bg-slate-100 text-slate-500'}`}>
          {status}
        </span>
        <button className={`${isSelected ? 'opacity-100 text-primary' : 'opacity-0 group-hover:opacity-100 text-slate-400 hover:text-primary'} p-1.5 transition-all active:scale-90`}>
          <Edit3 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BannerCard;
