import React, { useState } from 'react';
import { Layout, Phone, Mail, MapPin, Share2, Save, Send, CheckCircle2 } from 'lucide-react';

const FooterEditor = () => {
  const [formData, setFormData] = useState({
    phone: '+91 98765 43210',
    email: 'contact@hairbay.com',
    address: 'Suite 102, 5th Avenue, New York, NY 10001',
    socials: {
      instagram: '@hairbay_official',
      facebook: '/hairbay-salon',
      twitter: '@HairBayNYC',
      whatsapp: '+91 98765 43210'
    }
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const handleUpdate = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      console.log('Footer Updated:', formData);
    }, 800);
  };

  const handlePublishAll = () => {
    setIsPublishing(true);
    setTimeout(() => {
      setIsPublishing(false);
      alert('All site content has been published successfully!');
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom duration-700">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Layout className="w-4 h-4" />
          </div>
          Footer Content
        </h3>
        <button 
          onClick={handleUpdate}
          disabled={isSaving}
          className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
            showSuccess ? 'bg-green-500/10 text-green-500' : 'text-primary hover:bg-primary/5 active:scale-95'
          }`}
        >
          {showSuccess ? (
            <><CheckCircle2 className="w-3.5 h-3.5" /> Updated!</>
          ) : (
            <><Save className={`w-3.5 h-3.5 ${isSaving ? 'animate-spin' : ''}`} /> {isSaving ? 'Saving...' : 'Update Footer'}</>
          )}
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2 translate-x-0 focus-within:translate-x-1 transition-transform">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Contact Number</label>
            <div className="relative group">
              <Phone className="w-3.5 h-3.5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                value={formData.phone}
                onChange={e => setFormData(p => ({...p, phone: e.target.value}))}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
              />
            </div>
          </div>

          <div className="space-y-2 translate-x-0 focus-within:translate-x-1 transition-transform">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="w-3.5 h-3.5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="email" 
                value={formData.email}
                onChange={e => setFormData(p => ({...p, email: e.target.value}))}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-2 translate-x-0 focus-within:translate-x-1 transition-transform">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Physical Address</label>
            <div className="relative group">
              <MapPin className="w-3.5 h-3.5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                value={formData.address}
                onChange={e => setFormData(p => ({...p, address: e.target.value}))}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
              />
            </div>
          </div>

          <div className="md:col-span-4 mt-4 p-5 bg-slate-50/20 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-inner">
             <div className="flex items-center gap-2 mb-4">
               <Share2 className="w-4 h-4 text-primary" />
               <h4 className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-widest">Social Media Presence</h4>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.keys(formData.socials).map(platform => (
                  <div key={platform} className="space-y-1">
                    <label className="text-[9px] font-bold text-slate-400 ml-1 uppercase">{platform}</label>
                    <div className="relative group">
                      <input 
                        type="text" 
                        value={formData.socials[platform]}
                        onChange={e => setFormData(p => ({
                          ...p, 
                          socials: { ...p.socials, [platform]: e.target.value }
                        }))}
                        placeholder={`${platform} @handle or link`}
                        className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[10px] focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="mt-8 pt-4 flex justify-center">
           <button 
             onClick={handlePublishAll}
             disabled={isPublishing}
             className="px-12 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl text-xs flex items-center justify-center gap-4 hover:scale-110 active:scale-95 transition-all shadow-2xl shadow-slate-900/10 dark:shadow-white/5 border border-transparent hover:border-primary/20"
           >
             {isPublishing ? (
               <><div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div> Syncing Data...</>
             ) : (
               <><Send className="w-4 h-4" /> Publish All Site Content</>
             )}
           </button>
        </div>
      </div>
    </div>
  );
};

export default FooterEditor;
