import React from 'react';
import { Camera, Type, AlignLeft, ExternalLink, Hash, CheckCircle2 } from 'lucide-react';

const BannerForm = ({ formData, setFormData, onImageUpload }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === 'number' ? parseInt(value) || 0 : (type === 'checkbox' ? checked : value);
    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
      {/* Banner Preview/Upload */}
      <div className="space-y-2">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Banner Visual Asset</label>
        <div 
          onClick={onImageUpload}
          className="relative aspect-[21/9] rounded-2xl overflow-hidden group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary transition-all bg-slate-50 dark:bg-slate-800/50 shadow-inner"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-1000 bg-slate-200 dark:bg-slate-800" 
            style={{ backgroundImage: `url('${formData.image || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80'}')` }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
              <Camera className="w-6 h-6" />
            </div>
            <span className="mt-3 text-[10px] font-bold text-white uppercase tracking-wider">Replace Hero Image</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Hero Heading</label>
          <div className="relative group">
            <Type className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Summer Style Revamp"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
            />
          </div>
        </div>

        {/* Subtitle */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Sub-heading / Description</label>
          <div className="relative group">
            <AlignLeft className="w-4 h-4 absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <textarea 
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              rows="3"
              placeholder="Detailed description or promo text..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium resize-none leading-relaxed"
            ></textarea>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* CTA Text */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Button Text</label>
            <input 
              type="text" 
              name="ctaText"
              value={formData.ctaText}
              onChange={handleChange}
              placeholder="e.g. Book Now"
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
            />
          </div>

          {/* CTA Link */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Button Redirect Link</label>
            <div className="relative group">
              <ExternalLink className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                name="ctaLink"
                value={formData.ctaLink}
                onChange={handleChange}
                placeholder="/book or https://..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Display Order */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Display Priority</label>
            <div className="relative group">
              <Hash className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="number" 
                name="order"
                value={formData.order}
                onChange={handleChange}
                min="1"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
              />
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Publish Status</label>
            <select 
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold appearance-none cursor-pointer"
            >
              <option value="Active">Active / Public</option>
              <option value="Inactive">Inactive / Hidden</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
