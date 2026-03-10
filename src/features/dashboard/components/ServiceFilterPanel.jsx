import React from 'react';
import { Filter } from 'lucide-react';

const ServiceFilterPanel = ({ 
  showFilters, 
  setShowFilters, 
  filterStatus, 
  setFilterStatus, 
  sortBy, 
  setSortBy, 
  priceRange, 
  setPriceRange, 
  resetFilters,
  resultsCount,
  searchTerm
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 mb-4">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          Menu Items ({resultsCount})
        </h3>
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all active:scale-95 ${
            showFilters 
              ? 'bg-primary text-slate-900 shadow-md shadow-primary/20' 
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary'
          }`}
        >
          <Filter className="w-3.5 h-3.5" />
          Filters {showFilters ? 'Active' : ''}
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-slate-50/30 dark:bg-slate-800/20 ${
        showFilters ? 'max-h-[400px] opacity-100 p-5' : 'max-h-0 opacity-0 p-0'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Status</label>
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary text-slate-700 dark:text-slate-300 cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Featured">Featured</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Sort By</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary text-slate-700 dark:text-slate-300 cursor-pointer"
            >
              <option value="newest">Latest Added</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Price Range ($)</label>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary text-slate-700 dark:text-slate-300"
              />
              <span className="text-slate-400 text-xs">-</span>
              <input 
                type="number" 
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary text-slate-700 dark:text-slate-300"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button 
            onClick={resetFilters}
            className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceFilterPanel;
