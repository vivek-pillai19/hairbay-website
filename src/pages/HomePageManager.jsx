import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import HeroEditor from '../components/HeroEditor';
import AboutEditor from '../components/AboutEditor';
import ServicesPreviewEditor from '../components/ServicesPreviewEditor';
import TestimonialsEditor from '../components/TestimonialsEditor';
import GalleryEditor from '../components/GalleryEditor';
import FooterEditor from '../components/FooterEditor';
import Footer from '../components/Footer';
import { Layout, Eye, Save, CloudUpload, ArrowUp, CheckCircle } from 'lucide-react';

const HomePageManager = () => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePublishChanges = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(true);
      setTimeout(() => {
        setIsPublishing(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }, 1500);
    }, 100);
  };

  const handleLivePreview = () => {
    alert('Opening Live Preview in a new tab...');
    window.open('/', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display selection:bg-primary/30">
      <Sidebar />
      <main className="flex-1 ml-64 transition-all duration-300">
        <Header />
        
        <div className="p-8 max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/20">
                  <Layout className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Website CMS</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Homepage Management</h2>
              <p className="text-slate-500 mt-2 font-medium max-w-xl">
                Edit and manage your landing page content, from hero banners to testimonials and gallery images.
              </p>
            </div>

            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-right duration-700">
              <button 
                onClick={handleLivePreview}
                className="px-5 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 shadow-sm flex items-center gap-2 group"
              >
                <Eye className="w-4 h-4 group-hover:text-primary transition-colors" />
                Live Preview
              </button>
              <button 
                onClick={handlePublishChanges}
                disabled={isPublishing}
                className={`px-5 py-3 text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-xl active:scale-95 ${
                  showSuccess 
                    ? 'bg-green-500 text-white shadow-green-500/20' 
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:brightness-110 shadow-slate-900/10 dark:shadow-white/5'
                }`}
              >
                {isPublishing ? (
                  <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div> Publishing...</>
                ) : showSuccess ? (
                  <><CheckCircle className="w-4 h-4" /> Changes Published</>
                ) : (
                  <><CloudUpload className="w-4 h-4" /> Publish Changes</>
                )}
              </button>
            </div>
          </div>

          {/* Editor Sections */}
          <div className="space-y-10">
            <section id="hero-management" className="animate-in fade-in slide-in-from-bottom duration-500 delay-100">
              <HeroEditor />
            </section>

            <section id="about-management" className="animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              <AboutEditor />
            </section>

            <section id="services-preview-management" className="animate-in fade-in slide-in-from-bottom duration-500 delay-300">
              <ServicesPreviewEditor />
            </section>

            <div className="grid grid-cols-1 gap-10">
               <section id="gallery-management" className="animate-in fade-in slide-in-from-bottom duration-500 delay-400">
                 <GalleryEditor />
               </section>

               <section id="testimonials-management" className="animate-in fade-in slide-in-from-bottom duration-500 delay-500">
                 <TestimonialsEditor />
               </section>
            </div>

            <section id="footer-management" className="animate-in fade-in slide-in-from-bottom duration-500 delay-600">
              <FooterEditor />
            </section>
          </div>

          <div className="mt-16 pb-8 border-t border-slate-100 dark:border-slate-800">
            <Footer />
          </div>
        </div>
      </main>

      {/* Quick Nav FAB */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 group">
         <button 
          onClick={scrollToTop}
          className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-xl hover:scale-110 active:scale-90 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300" 
          title="Go to Top"
         >
           <ArrowUp className="w-5 h-5" />
         </button>
         <button 
          onClick={handlePublishChanges}
          className="w-14 h-14 bg-primary text-slate-900 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all overflow-hidden relative group/btn"
         >
            <div className={`absolute inset-0 bg-white/20 transition-transform duration-1000 ${isPublishing ? 'translate-y-0' : 'translate-y-full'}`}></div>
            {showSuccess ? <CheckCircle className="w-6 h-6 animate-bounce" /> : <Save className="w-6 h-6 group-hover/btn:rotate-12 transition-transform" />}
         </button>
      </div>
    </div>
  );
};

export default HomePageManager;
