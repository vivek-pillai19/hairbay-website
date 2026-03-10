import React from 'react';
import { Plus } from 'lucide-react';

const ServiceToolbar = ({ onAddService, onExport }) => {
  return (
    <div className="flex items-end justify-between mb-8">
      <div className="animate-in fade-in slide-in-from-left duration-500">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Services & Pricing</h2>
        <p className="text-slate-500 mt-1 font-medium">Manage your salon's service menu, adjust pricing tiers, and update descriptions.</p>
      </div>
      <div className="flex gap-3 animate-in fade-in slide-in-from-right duration-500">
        <button 
          onClick={onExport}
          className="px-5 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
        >
          Export CSV
        </button>
        <button 
          onClick={onAddService}
          className="px-5 py-2.5 text-sm font-bold bg-primary text-slate-900 rounded-xl hover:brightness-105 transition-all flex items-center gap-2 shadow-md shadow-primary/20 active:scale-95"
        >
          <Plus className="w-5 h-5" strokeWidth={2.5} />
          Add New Service
        </button>
      </div>
    </div>
  );
};

export default ServiceToolbar;
