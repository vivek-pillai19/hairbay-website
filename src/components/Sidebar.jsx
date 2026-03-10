import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Home, 
  Scissors, 
  Store, 
  Images, 
  User, 
  Settings, 
  LogOut 
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Home, label: 'Homepage', path: '/home-management' },
  { icon: Scissors, label: 'Services', path: '#' },
  { icon: Store, label: 'Franchises', path: '#' },
  { icon: Images, label: 'Banners', path: '#' },
];

const settingItems = [
  { icon: User, label: 'Team Members', path: '#' },
  { icon: Settings, label: 'Config', path: '#' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col fixed h-full z-20 transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-slate-900 shadow-sm transition-transform hover:rotate-12">
          <Scissors className="w-5 h-5" strokeWidth={2.5} />
        </div>
        <h1 className="text-xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
          HairBay <span className="text-primary italic">CMS</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        <p className="px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Main Menu</p>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-primary text-slate-900 shadow-md shadow-primary/20'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-primary transition-colors'}`} />
              {item.label}
            </Link>
          );
        })}

        <div className="pt-8">
          <p className="px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Settings</p>
          {settingItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-primary text-slate-900 shadow-md shadow-primary/20'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-primary transition-colors'}`} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer group">
          <div 
            className="w-9 h-9 rounded-full bg-slate-200 bg-cover bg-center border-2 border-white dark:border-slate-800" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100')" }}
          ></div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-bold text-slate-900 dark:text-white truncate">Alex Designer</p>
            <p className="text-[10px] text-slate-500 truncate">Admin Access</p>
          </div>
          <LogOut className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
