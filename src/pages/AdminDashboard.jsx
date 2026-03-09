import React, { useState, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import ServiceCard from '../components/ServiceCard';
import QuickEditor from '../components/QuickEditor';
import Footer from '../components/Footer';
import { Plus, Filter, ChevronDown } from 'lucide-react';

const INITIAL_SERVICES = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVLcCeRJX0mTzOFR3tquXLeRvHAI38hjMWovlJozU-P3r6u_wcRd1JhHM6obipeiMXcOaycCGUm6D8AISpXGx0hWNHsfMODlZmhs49sVqnx1bfX8isNCLHFrN2hKiyeyHMyh32FkrPSXMqYxjHv6xZQF9c70NsOwX7XJAG3KnrHd6zVq9LpaFFwN1fh20ERSvSQTlK9BxzLsaAmndPfYJo2ri9B4MTED-RLusPxxbn09XIKYvsaV_waRYdvJ007tEecbxVagjpm94',
    title: "Classic Gentlemen's Cut",
    description: "Precision cut, wash, and style.",
    price: 45.00,
    duration: 60,
    status: 'Active',
    isFeatured: false
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYLaundf27GcyiIaJarJ5ek5xPVY-yDji1A0ecyOe9vA0FWC1oRujWDO0Ab3A-soT08Hv1-LOgU1Vuo2nxpzIAH9wCxnCuBd9_UPBm-omBVTZ2m9IdyhhVWdrvf0j6nuHClAgs3zYHV14fw7_wrElkr727UYtJzahmeH3mz_FCC6gyyMkNxCxfwtOOci2yPUzD7-PpKe5mdfQM4F0FG5WoaAPPjy5XuzQZMYL0iDtpfdPLxxxBbdiRG2le0fv4LGqe_ynkDesr2ro',
    title: "Signature Gold Treatment",
    description: "Deep conditioning & scalp massage.",
    price: 120.00,
    duration: 120,
    status: 'Active',
    isFeatured: false
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-_RKxTpL9jU8wUlXrQolJMApIRZBfZI3lFZQ0UUnXgy7rfwSp-lnQLib2cHOLqqsUfcVuiwjshHCm7G1f4BZrGSmNAEc2zvKkFT3cKxHEh1UNj9ro7CkAiP4XvqI_agcOKBrpo-SdrY-z764PhnK6X4krTNccSz55Xh6QJa7Zev1AfOmZj5XgJxrvuEhdd9XsCBmWOX-yqSknYgj22c7saV_BEOBq1-ZUYYHdMIx0GU0DkTZ92lv7a-mQ_nVytcxf2BpNhXau28c',
    title: "Full Color & Balayage",
    description: "Premium dye with protection treatment.",
    price: 185.00,
    duration: 180,
    status: 'Featured',
    isFeatured: true
  },
  {
    id: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArba9eJOWdkT8Fz7J4TQohJjcYb4Up_OCFRarrXCTskal4VqPpoA3yO4FdWBPl5kwhuKF7npOuc14taimfk-o5cW7S1_2rqywzElCY7HBv2k0SnHkHLm-GaNJsl3q063nwgiHvmGgobG3wxUZeqiB6VC4f2c9svBPn0UJc_yY2mK_Sw-hvD0u-fcNokyzMnW1tU3sbjKAez4VlioDk5qM8fExn0ARLl2eDKAalPvxoUNj5z-dgJlM4-_U_yvLyeqATBbQ0q9qSWB0',
    title: "Beard Sculpting",
    description: "Hot towel shave & precision trim.",
    price: 35.00,
    duration: 60,
    status: 'Draft',
    isFeatured: false
  }
];

const AdminDashboard = () => {
  const [services, setServices] = useState(INITIAL_SERVICES);
  const [editingId, setEditingId] = useState(3); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('newest');

  const filteredServices = useMemo(() => {
    let result = services.filter(s => {
      const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'All' || s.status === filterStatus;
      const matchesPrice = s.price >= priceRange.min && s.price <= priceRange.max;
      return matchesSearch && matchesStatus && matchesPrice;
    });

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') result.sort((a, b) => b.id - a.id);

    return result;
  }, [services, searchTerm, filterStatus, priceRange, sortBy]);

  const stats = useMemo(() => ({
    active: services.filter(s => s.status === 'Active' || s.status === 'Featured').length,
    avg: services.length ? (services.reduce((acc, s) => acc + s.price, 0) / services.length).toFixed(2) : '0.00',
    drafts: services.filter(s => s.status === 'Draft').length
  }), [services]);

  const selectedService = services.find(s => s.id === editingId);

  const handleUpdateService = (updatedData) => {
    setServices(prev => prev.map(s => s.id === editingId ? { ...s, ...updatedData } : s));
  };

  const handleDeleteService = () => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(prev => prev.filter(s => s.id !== editingId));
      setEditingId(null);
    }
  };

  const handleAddService = () => {
    setSearchTerm(''); // Clear search to ensure new item is visible
    const newService = {
      id: Date.now(),
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=300',
      title: 'New Salon Service',
      description: 'Describe the new service here...',
      price: 0,
      duration: 60,
      status: 'Active',
      isFeatured: false
    };
    setServices([newService, ...services]);
    setEditingId(newService.id);
  };

  const handleExport = () => {
    alert('Exported ' + services.length + ' services to CSV (check console)');
    console.log('CSV Data:', services);
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display">
      <Sidebar />
      <main className="flex-1 ml-64 transition-all duration-300">
        <Header searchTerm={searchTerm} onSearch={setSearchTerm} />
        <div className="p-8 max-w-7xl mx-auto">
          {/* Page Title Section */}
          <div className="flex items-end justify-between mb-8">
            <div className="animate-in fade-in slide-in-from-left duration-500">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Services & Pricing</h2>
              <p className="text-slate-500 mt-1 font-medium">Manage your salon's service menu, adjust pricing tiers, and update descriptions.</p>
            </div>
            <div className="flex gap-3 animate-in fade-in slide-in-from-right duration-500">
              <button 
                onClick={handleExport}
                className="px-5 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
              >
                Export CSV
              </button>
              <button 
                onClick={handleAddService}
                className="px-5 py-2.5 text-sm font-bold bg-primary text-slate-900 rounded-xl hover:brightness-105 transition-all flex items-center gap-2 shadow-md shadow-primary/20 active:scale-95"
              >
                <Plus className="w-5 h-5" strokeWidth={2.5} />
                Add New Service
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard label="Active Services" value={stats.active} />
            <StatsCard label="Average Price" value={`$${stats.avg}`} />
            <StatsCard label="Pending Drafts" value={stats.drafts} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service List (Main) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">Menu Items ({filteredServices.length})</h3>
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

                {/* Advanced Filter Panel */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-slate-50/30 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800 ${
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
                      onClick={() => {
                        setFilterStatus('All');
                        setPriceRange({ min: 0, max: 1000 });
                        setSortBy('newest');
                      }}
                      className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                      <ServiceCard 
                        key={service.id} 
                        {...service} 
                        isSelected={editingId === service.id}
                        onEdit={() => setEditingId(service.id)}
                      />
                    ))
                  ) : (
                    <div className="p-10 text-center text-slate-400 font-medium">
                      No services found matching "{searchTerm}"
                    </div>
                  )}
                </div>
                {filteredServices.length > 0 && (
                  <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 flex justify-center">
                    <button className="text-xs font-bold text-slate-400 hover:text-primary transition-all flex items-center gap-2 group">
                      Load more services 
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Editor */}
            <div className="lg:col-span-1">
              {selectedService ? (
                <QuickEditor 
                  service={selectedService} 
                  onUpdate={handleUpdateService}
                  onDelete={handleDeleteService}
                />
              ) : (
                <div className="bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center text-slate-400 font-medium sticky top-24 shadow-sm">
                  Select a service to edit details
                </div>
              )}
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
