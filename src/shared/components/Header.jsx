import React from 'react';
import { Search, Bell, ChevronRight } from 'lucide-react';

const Header = ({ searchTerm = '', onSearch }) => {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <span>Admin</span>
        <ChevronRight className="w-4 h-4 text-slate-400" />
        <span className="font-semibold text-slate-900 dark:text-white font-display">Management Console</span>
      </div>
      <div className="flex items-center gap-4">
        {onSearch && (
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input
              className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary w-64 text-slate-900 dark:text-white transition-all outline-none"
              placeholder="Search services..."
              type="text"
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        )}
        <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700 relative">
          <Bell className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
