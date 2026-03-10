import React from 'react';
import { Edit3 } from 'lucide-react';

const ServiceCard = ({ image, title, description, price, status, isFeatured, isActive, isSelected, onEdit }) => {
  const statusColors = {
    Active: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    Featured: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    Draft: 'bg-slate-100 dark:bg-slate-800 text-slate-500',
  };

  return (
    <div 
      onClick={onEdit}
      className={`p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all cursor-pointer group ${isSelected ? 'border-l-4 border-primary bg-primary/5 dark:bg-primary/5 ring-1 ring-inset ring-primary/20' : 'border-l-4 border-transparent'}`}
    >
      <div className={`w-12 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0 shadow-sm ${status === 'Draft' ? 'opacity-50' : ''}`}>
        <div
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{title}</h4>
        <p className="text-xs text-slate-500 line-clamp-1">{description}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-slate-900 dark:text-white">${parseFloat(price).toFixed(2)}</p>
        <span className={`text-[10px] px-2 py-0.5 font-bold rounded-full uppercase tracking-tight ${statusColors[status]}`}>
          {status}
        </span>
      </div>
      <button className={`${isSelected || isFeatured ? 'opacity-100 text-primary' : 'opacity-0 group-hover:opacity-100 text-slate-400 hover:text-primary'} p-2 transition-all active:scale-90`}>
        <Edit3 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ServiceCard;
