import React, { useState } from 'react';
import { Image as ImageIcon, Type, Link, Edit3, Save, CheckCircle2 } from 'lucide-react';

const HeroEditor = () => {
  const [formData, setFormData] = useState({
    heading: 'Elegance in Every Cut',
    subheading: 'Experience the art of grooming at HairBay.',
    btnText: 'Book Appointment',
    btnLink: '/booking',
    banner: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdate = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      console.log('Hero Updated:', formData);
    }, 800);
  };

  const handleImageUpload = () => {
    // Mock image upload
    const mockImages = [
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599351431247-f509ce03c5d6?auto=format&fit=crop&q=80'
    ];
    const randomImg = mockImages[Math.floor(Math.random() * mockImages.length)];
    setFormData(prev => ({ ...prev, banner: randomImg }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <ImageIcon className="w-4 h-4" />
          </div>
          Hero Section
        </h3>
        <button 
          onClick={handleUpdate}
          disabled={isSaving}
          className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
            showSuccess 
              ? 'bg-green-500/10 text-green-500' 
              : 'text-primary hover:bg-primary/5 active:scale-95'
          }`}
        >
          {showSuccess ? (
            <><CheckCircle2 className="w-3.5 h-3.5" /> Updated!</>
          ) : (
            <><Save className={`${isSaving ? 'animate-spin' : ''} w-3.5 h-3.5`} /> {isSaving ? 'Saving...' : 'Update Hero'}</>
          )}
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Hero Banner Image</label>
          <div 
            onClick={handleImageUpload}
            className="relative aspect-[21/9] rounded-xl overflow-hidden group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary transition-all bg-slate-50 dark:bg-slate-800/50"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" 
              style={{ backgroundImage: `url('${formData.banner}')` }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                <ImageIcon className="w-6 h-6" />
              </div>
              <span className="mt-2 text-xs font-bold text-slate-500">Click to upload new banner</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Main Heading</label>
            <div className="relative group">
              <Type className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                value={formData.heading}
                onChange={(e) => setFormData(p => ({ ...p, heading: e.target.value }))}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Subheading</label>
            <div className="relative group">
              <Edit3 className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                value={formData.subheading}
                onChange={(e) => setFormData(p => ({ ...p, subheading: e.target.value }))}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">CTA Button Text</label>
            <div className="relative group">
              <Type className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                value={formData.btnText}
                onChange={(e) => setFormData(p => ({ ...p, btnText: e.target.value }))}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">CTA Link</label>
            <div className="relative group">
              <Link className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                value={formData.btnLink}
                onChange={(e) => setFormData(p => ({ ...p, btnLink: e.target.value }))}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroEditor;
