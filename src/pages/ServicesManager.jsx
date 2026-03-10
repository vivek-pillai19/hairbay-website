import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ServiceList from '../components/ServiceList';
import ServiceEditor from '../components/ServiceEditor';
import Footer from '../components/Footer';
import { Scissors, Sparkles, Filter, Plus, ArrowRight } from 'lucide-react';

const ServicesManager = () => {
  const [services, setServices] = useState([
    { id: 1, title: 'Signature Haircut', description: 'Precision cutting tailored to your head shape.', price: 45.00, duration: '45 min', status: 'Active', isFeatured: true, image: 'https://images.unsplash.com/photo-1599351431247-f509ce03c5d6?auto=format&fit=crop&q=80&w=300' },
    { id: 2, title: 'Hot Towel Shave', description: 'Classic straight razor shave with steam.', price: 30.00, duration: '30 min', status: 'Active', isFeatured: false, image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=300' },
    { id: 3, title: 'Beard Sculpting', description: 'Meticulous beard shaping and trimming.', price: 25.00, duration: '30 min', status: 'Draft', isFeatured: false, image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=300' },
    { id: 4, title: 'Scalp Treatment', description: 'Invigorating exfoliation and hydration.', price: 40.00, duration: '1 hour', status: 'Active', isFeatured: false, image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=300' },
  ]);

  const [selectedService, setSelectedService] = useState(null);

  const handleUpdate = (updatedService) => {
    let finalService = updatedService;
    if (updatedService.id) {
      // Update existing
      setServices(prev => prev.map(s => s.id === updatedService.id ? updatedService : s));
    } else {
      // Add new
      finalService = { ...updatedService, id: Date.now() };
      setServices(prev => [finalService, ...prev]);
    }
    // Refresh the selection with the updated data
    setSelectedService(finalService);
  };

  const handleDelete = (id) => {
    setServices(prev => prev.filter(s => s.id !== id));
    setSelectedService(null);
  };

  const handleAddNew = () => {
    setSelectedService({
      id: '',
      title: '',
      price: '',
      duration: '30 min',
      description: '',
      status: 'Draft',
      isFeatured: false,
      image: ''
    });
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display selection:bg-primary/30">
      <Sidebar />
      <main className="flex-1 ml-64 transition-all duration-300">
        <Header />
        
        <div className="p-8 max-w-[1600px] mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <Scissors className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Service Inventory</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Services Management</h2>
              <p className="text-slate-500 mt-2 font-medium max-w-xl">
                Create, update, and organize your salon offerings. Manage pricing, availability, and featured status.
              </p>
            </div>

            <div className="flex items-center gap-6 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm animate-in fade-in slide-in-from-right duration-700">
               <div className="flex flex-col border-r border-slate-100 dark:border-slate-800 pr-6">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Services</span>
                 <span className="text-2xl font-black text-slate-900 dark:text-white mt-1">{services.filter(s => s.status === 'Active').length}</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Featured</span>
                 <span className="text-2xl font-black text-primary mt-1 flex items-center gap-2">
                   {services.filter(s => s.isFeatured).length}
                   <Sparkles className="w-5 h-5" />
                 </span>
               </div>
            </div>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Services List */}
            <div className="lg:col-span-7 xl:col-span-8 h-[calc(100vh-280px)] min-h-[600px]">
              <ServiceList 
                services={services} 
                selectedId={selectedService?.id}
                onSelect={setSelectedService} 
                onAddNew={handleAddNew}
              />
            </div>

            {/* Right Side: Quick Editor Panel */}
            <div className="lg:col-span-5 xl:col-span-4 min-w-[400px]">
              {selectedService ? (
                <ServiceEditor 
                  service={selectedService} 
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                  onCancel={() => setSelectedService(null)}
                />
              ) : (
                <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
                   <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-6">
                      <Scissors className="w-10 h-10 text-slate-200 dark:text-slate-700" />
                   </div>
                   <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Editor Panel Ready</h4>
                   <p className="text-sm text-slate-500 max-w-xs mb-8">
                     Select a service from the left list to begin editing its details, or create a brand new service.
                   </p>
                   <button 
                    onClick={handleAddNew}
                    className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl text-xs flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10 dark:shadow-white/5"
                   >
                     <Plus className="w-4 h-4" />
                     Create New Service
                   </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 pb-8 border-t border-slate-100 dark:border-slate-800">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesManager;
