import React from 'react';
import { MapPin, Phone, Edit3 } from 'lucide-react';

const FranchiseCard = ({ image, name, city, phone, status, isSelected, onEdit }) => {
  const statusColors = {
    Active: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    Inactive: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
  };

  return (
    <div 
      onClick={onEdit}
      className={`p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all cursor-pointer group ${isSelected ? 'border-l-4 border-primary bg-primary/5 dark:bg-primary/5 ring-1 ring-inset ring-primary/20' : 'border-l-4 border-transparent'}`}
    >
      <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 shadow-sm border border-slate-200 dark:border-slate-700">
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=200'})` }}
        ></div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{name}</h4>
        <div className="flex flex-col gap-1 mt-1">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span className="truncate">{city}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
            <Phone className="w-3 h-3 text-slate-400" />
            <span>{phone}</span>
          </div>
        </div>
      </div>
      <div className="text-right flex flex-col items-end gap-2">
        <span className={`text-[9px] px-2 py-0.5 font-bold rounded-full uppercase tracking-tight ${statusColors[status] || 'bg-slate-100 text-slate-500'}`}>
          {status}
        </span>
        <button className={`${isSelected ? 'opacity-100 text-primary' : 'opacity-0 group-hover:opacity-100 text-slate-400 hover:text-primary'} p-2 transition-all active:scale-90`}>
          <Edit3 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FranchiseCard;
