import React from 'react';
import { ChevronDown } from 'lucide-react';
import ServiceCard from '../../../shared/components/ServiceCard';

const ServiceList = ({ services, editingId, onSelect, searchTerm }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
      <div className="divide-y divide-slate-100 dark:divide-slate-800">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard 
              key={service.id} 
              {...service} 
              isSelected={editingId === service.id}
              onEdit={() => onSelect(service.id)}
            />
          ))
        ) : (
          <div className="p-10 text-center text-slate-400 font-medium">
            No services found matching "{searchTerm}"
          </div>
        )}
      </div>
      {services.length > 0 && (
        <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 flex justify-center border-t border-slate-100 dark:border-slate-800">
          <button className="text-xs font-bold text-slate-400 hover:text-primary transition-all flex items-center gap-2 group">
            Load more services 
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceList;
