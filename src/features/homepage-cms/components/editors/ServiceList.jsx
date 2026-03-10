import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronDown, Scissors, ArrowUpDown } from 'lucide-react';
import ServiceCard from '../../../../shared/components/ServiceCard';

const ServiceList = ({ services, selectedId, onSelect, onAddNew }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priceSort, setPriceSort] = useState('None');

  const filteredServices = services
    .filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || service.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (priceSort === 'LowToHigh') return a.price - b.price;
      if (priceSort === 'HighToLow') return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col h-full animate-in fade-in slide-in-from-left duration-700">
      {/* List Header */}
      <div className="p-6 border-b border-slate-100 dark:border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Scissors className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Catalogue</h3>
          </div>
          <button 
            onClick={onAddNew}
            className="flex items-center gap-2 px-3 py-1.5 bg-primary text-slate-900 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-md shadow-primary/20"
          >
            <Plus className="w-3.5 h-3.5" />
            Add New
          </button>
        </div>

        <div className="flex flex-col xl:flex-row gap-3">
          <div className="relative flex-1 group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none"
            />
          </div>
          
          <div className="flex gap-2">
            <div className="relative group min-w-[110px] flex-1">
              <Filter className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-primary transition-colors" />
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none appearance-none font-bold"
              >
                <option value="All">Status</option>
                <option value="Active">Active</option>
                <option value="Featured">Featured</option>
                <option value="Draft">Draft</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative group min-w-[110px] flex-1">
              <ArrowUpDown className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-primary transition-colors" />
              <select 
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none appearance-none font-bold"
              >
                <option value="None">Price</option>
                <option value="LowToHigh">Lowest First</option>
                <option value="HighToLow">Highest First</option>
              </select>
              <ChevronDown className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* List Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50/10">
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              {...service} 
              isSelected={selectedId === service.id}
              onEdit={() => onSelect(service)}
            />
          ))}
          {filteredServices.length === 0 && (
            <div className="py-20 text-center flex flex-col items-center justify-center opacity-40">
               <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
               </div>
               <p className="text-sm font-bold text-slate-900 dark:text-white">No services found</p>
               <p className="text-xs text-slate-500 mt-1">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* List Footer */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Showing {filteredServices.length} Results</p>
      </div>
    </div>
  );
};

export default ServiceList;
