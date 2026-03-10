import React, { useState } from 'react';
import { Search, Plus, Images, X, RefreshCw } from 'lucide-react';
import BannerCard from '../../../../shared/components/BannerCard';

const BannerList = ({ banners, selectedId, onSelect, onAddNew }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const filteredBanners = banners
    .filter(banner => {
      const matchesSearch = 
        banner.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        banner.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || banner.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => a.order - b.order);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col h-full animate-in fade-in slide-in-from-left duration-700">
      {/* List Header */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
              <Images className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Site Banners</h3>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleRefresh}
              className={`p-2 text-slate-400 hover:text-primary transition-all rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 ${isRefreshing ? 'animate-spin text-primary' : ''}`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={onAddNew}
              className="flex items-center gap-2 px-3 py-1.5 bg-primary text-slate-900 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md shadow-primary/20"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Banner
            </button>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-3">
          <div className="relative group flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search banners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-10 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className="relative group min-w-[120px]">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-4 pr-8 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none appearance-none font-bold cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <X className={`w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-transform ${statusFilter !== 'All' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
          </div>
        </div>
      </div>

      {/* List Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50/10">
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {filteredBanners.map((banner) => (
            <BannerCard 
              key={banner.id} 
              {...banner} 
              isSelected={selectedId === banner.id}
              onEdit={() => onSelect(banner)}
            />
          ))}
          {filteredBanners.length === 0 && (
            <div className="py-20 text-center flex flex-col items-center justify-center opacity-40 animate-in fade-in zoom-in duration-500">
               <div className="w-16 h-16 rounded-3xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4 border border-slate-300 dark:border-slate-700">
                  <Images className="w-8 h-8 text-slate-400" />
               </div>
               <p className="text-sm font-bold text-slate-900 dark:text-white">No banners found</p>
               <button 
                onClick={() => { setSearchTerm(''); setStatusFilter('All'); }}
                className="text-xs text-primary font-bold mt-2 hover:underline"
               >
                 Reset all filters
               </button>
            </div>
          )}
        </div>
      </div>

      {/* List Footer */}
      <div className="p-4 border-t border-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900 text-center">
         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Showing {filteredBanners.length} Hero Assets</p>
      </div>
    </div>
  );
};

export default BannerList;
