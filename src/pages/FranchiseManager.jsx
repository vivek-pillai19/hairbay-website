import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FranchiseList from '../components/FranchiseList';
import FranchiseEditor from '../components/FranchiseEditor';
import Footer from '../components/Footer';
import { Store, MapPin, Plus, Sparkles, Building2 } from 'lucide-react';

const FranchiseManager = () => {
  const [franchises, setFranchises] = useState([
    { id: 1, name: 'HairBay - Mumbai Central', owner: 'Rahul Sharma', city: 'Mumbai', address: 'Plot 42, Marine Drive, Mumbai, MH 400020', phone: '+91 98765 43210', email: 'mumbai@hairbay.com', mapLink: 'https://goo.gl/maps/abc', status: 'Active', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400' },
    { id: 2, name: 'HairBay - Delhi Heights', owner: 'Anjali Gupta', city: 'Delhi', address: 'Sector 18, Noida, NCR 201301', phone: '+91 91234 56789', email: 'delhi@hairbay.com', mapLink: 'https://goo.gl/maps/def', status: 'Active', image: 'https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&q=80&w=400' },
    { id: 3, name: 'HairBay - Bangalore Tech', owner: 'Vikram Singh', city: 'Bangalore', address: 'Koramangala 5th Block, Bangalore, KA 560095', phone: '+91 99887 76655', email: 'blr@hairbay.com', mapLink: 'https://goo.gl/maps/ghi', status: 'Inactive', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400' },
  ]);

  const [selectedFranchise, setSelectedFranchise] = useState(null);

  const handleUpdate = (updatedFranchise) => {
    let finalFranchise = updatedFranchise;
    if (updatedFranchise.id) {
      setFranchises(prev => prev.map(f => f.id === updatedFranchise.id ? updatedFranchise : f));
    } else {
      finalFranchise = { ...updatedFranchise, id: Date.now() };
      setFranchises(prev => [finalFranchise, ...prev]);
    }
    setSelectedFranchise(finalFranchise);
  };

  const handleDelete = (id) => {
    setFranchises(prev => prev.filter(f => f.id !== id));
    setSelectedFranchise(null);
  };

  const handleAddNew = () => {
    setSelectedFranchise({
      id: '',
      name: '',
      owner: '',
      city: '',
      address: '',
      phone: '',
      email: '',
      mapLink: '',
      status: 'Active',
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
                  <Store className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Partner Network</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Franchise Management</h2>
              <p className="text-slate-500 mt-2 font-medium max-w-xl">
                Monitor and manage your nationwide franchise outlets. Update owner details, contact info, and store locations.
              </p>
            </div>

            <div className="flex items-center gap-6 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm animate-in fade-in slide-in-from-right duration-700">
               <div className="flex flex-col border-r border-slate-100 dark:border-slate-800 pr-6">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Outlets</span>
                 <span className="text-2xl font-black text-slate-900 dark:text-white mt-1">{franchises.length}</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Branches</span>
                 <span className="text-2xl font-black text-primary mt-1 flex items-center gap-2">
                   {franchises.filter(f => f.status === 'Active').length}
                   <Building2 className="w-5 h-5" />
                 </span>
               </div>
            </div>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Franchise List */}
            <div className="lg:col-span-7 xl:col-span-8 h-[calc(100vh-280px)] min-h-[600px]">
              <FranchiseList 
                franchises={franchises} 
                selectedId={selectedFranchise?.id}
                onSelect={setSelectedFranchise} 
                onAddNew={handleAddNew}
              />
            </div>

            {/* Right Side: Franchise Editor */}
            <div className="lg:col-span-5 xl:col-span-4 min-w-[400px]">
              {selectedFranchise ? (
                <FranchiseEditor 
                  franchise={selectedFranchise} 
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                  onCancel={() => setSelectedFranchise(null)}
                />
              ) : (
                <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500 bg-slate-50/20">
                   <div className="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-6 shadow-inner border border-slate-100 dark:border-slate-800">
                      <Store className="w-10 h-10 text-slate-200 dark:text-slate-700" />
                   </div>
                   <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Location Manager</h4>
                   <p className="text-sm text-slate-500 max-w-xs mb-8">
                     Select a franchise branch from the network list to modify its registry, or add a new partner outlet.
                   </p>
                   <button 
                    onClick={handleAddNew}
                    className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl text-xs flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10 dark:shadow-white/5"
                   >
                     <Plus className="w-4 h-4" />
                     Add New Partner
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

export default FranchiseManager;
