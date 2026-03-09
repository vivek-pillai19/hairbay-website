import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import BannerList from '../components/BannerList';
import BannerEditor from '../components/BannerEditor';
import Footer from '../components/Footer';
import { Images, Sparkles, Layout, Monitor, Plus } from 'lucide-react';

const BannerManager = () => {
  const [banners, setBanners] = useState([
    { id: 1, title: 'Summer Style Revamp', subtitle: 'Get 20% off on all signature haircuts this summer.', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200', ctaText: 'Book Now', ctaLink: '/book', order: 1, status: 'Active' },
    { id: 2, title: 'Premium Beard Care', subtitle: 'Discover our new range of organic beard oils and sculpting services.', image: 'https://images.unsplash.com/photo-1522335789183-bde822272c1c?auto=format&fit=crop&q=80&w=1200', ctaText: 'Explore Collection', ctaLink: '/services', order: 2, status: 'Active' },
    { id: 3, title: 'Hairbay Night Lounge', subtitle: 'Exclusive late-night sessions for our VIP members.', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1200', ctaText: 'Join VIP', ctaLink: '/membership', order: 3, status: 'Inactive' },
  ]);

  const [selectedBanner, setSelectedBanner] = useState(null);

  const handleUpdate = (updatedBanner) => {
    let finalBanner = updatedBanner;
    if (updatedBanner.id) {
      setBanners(prev => prev.map(b => b.id === updatedBanner.id ? updatedBanner : b));
    } else {
      finalBanner = { ...updatedBanner, id: Date.now() };
      setBanners(prev => [finalBanner, ...prev]);
    }
    setSelectedBanner(finalBanner);
  };

  const handleDelete = (id) => {
    setBanners(prev => prev.filter(b => b.id !== id));
    setSelectedBanner(null);
  };

  const handleAddNew = () => {
    setSelectedBanner({
      id: '',
      title: '',
      subtitle: '',
      image: '',
      ctaText: 'Learn More',
      ctaLink: '#',
      order: banners.length + 1,
      status: 'Active'
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
                  <Images className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Visual Experience</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Banner Management</h2>
              <p className="text-slate-500 mt-2 font-medium max-w-xl">
                Curate the first impression. Manage homepage slides, promotional banners, and hero call-to-actions.
              </p>
            </div>

            <div className="flex items-center gap-6 p-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm animate-in fade-in slide-in-from-right duration-700">
               <div className="flex flex-col border-r border-slate-100 dark:border-slate-800 pr-6">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Slides</span>
                 <span className="text-2xl font-black text-slate-900 dark:text-white mt-1">{banners.length}</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Assets</span>
                 <span className="text-2xl font-black text-primary mt-1 flex items-center gap-2">
                   {banners.filter(b => b.status === 'Active').length}
                   <Monitor className="w-5 h-5" />
                 </span>
               </div>
            </div>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Banner List */}
            <div className="lg:col-span-6 xl:col-span-7 h-[calc(100vh-280px)] min-h-[600px]">
              <BannerList 
                banners={banners} 
                selectedId={selectedBanner?.id}
                onSelect={setSelectedBanner} 
                onAddNew={handleAddNew}
              />
            </div>

            {/* Right Side: Banner Editor */}
            <div className="lg:col-span-6 xl:col-span-5 min-w-[400px]">
              {selectedBanner ? (
                <BannerEditor 
                  banner={selectedBanner} 
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                  onCancel={() => setSelectedBanner(null)}
                />
              ) : (
                <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500 bg-slate-50/10">
                   <div className="w-24 h-24 rounded-[2rem] bg-white dark:bg-slate-800/50 flex items-center justify-center mb-8 shadow-xl border border-slate-100 dark:border-slate-800">
                      <Layout className="w-12 h-12 text-slate-200 dark:text-slate-700" />
                   </div>
                   <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Slide Editor Standby</h4>
                   <p className="text-sm text-slate-500 max-w-xs mb-10 leading-relaxed font-medium">
                     Select an existing hero slide to modify its content, or create a fresh promotional banner for the homepage.
                   </p>
                   <button 
                    onClick={handleAddNew}
                    className="px-10 py-4 bg-primary text-slate-900 font-black rounded-2xl text-[10px] uppercase tracking-widest flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
                   >
                     <Plus className="w-4 h-4 stroke-[3px]" />
                     New Hero Banner
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

export default BannerManager;
