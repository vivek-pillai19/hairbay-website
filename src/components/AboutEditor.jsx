import React, { useState } from 'react';
import { User, AlignLeft, Image as ImageIcon, Save, CheckCircle2 } from 'lucide-react';

const AboutEditor = () => {
  const [formData, setFormData] = useState({
    title: 'Our Heritage & Vision',
    desc: 'HairBay is a sanctuary of refined masculinity where tradition meets the contemporary. Founded in 1995, our master artisans bring decades of experience to every cut, ensuring a personalized grooming experience that defines distinction.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdate = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      console.log('About Updated:', formData);
    }, 800);
  };

  const handleImageUpload = () => {
    const mockImages = [
      'https://images.unsplash.com/photo-1599351431247-f509ce03c5d6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80'
    ];
    const randomImg = mockImages[Math.floor(Math.random() * mockImages.length)];
    setFormData(prev => ({ ...prev, image: randomImg }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <User className="w-4 h-4" />
          </div>
          About Section
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
            <><Save className={`${isSaving ? 'animate-spin' : ''} w-3.5 h-3.5`} /> {isSaving ? 'Saving...' : 'Update About'}</>
          )}
        </button>
      </div>

      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">About Image</label>
            <div 
              onClick={handleImageUpload}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary transition-all bg-slate-50 dark:bg-slate-800/50 shadow-inner"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" 
                style={{ backgroundImage: `url('${formData.image}')` }}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <span className="mt-3 text-[10px] font-bold text-slate-500 text-center px-4">Change Photo</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Title</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">About Description</label>
              <div className="relative group">
                <AlignLeft className="w-4 h-4 absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                <textarea 
                  rows="6"
                  value={formData.desc}
                  onChange={(e) => setFormData(p => ({ ...p, desc: e.target.value }))}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium leading-relaxed resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEditor;
