import React from 'react';
import { Camera, DollarSign, Clock, Layout, AlignLeft, CheckCircle2 } from 'lucide-react';

const ServiceForm = ({ formData, setFormData, onImageUpload }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
      {/* Image Upload Area */}
      <div className="space-y-2">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service Thumbnail</label>
        <div 
          onClick={onImageUpload}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary transition-all bg-slate-50 dark:bg-slate-800/50 shadow-inner"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-700" 
            style={{ backgroundImage: `url('${formData.image || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80'}')` }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
              <Camera className="w-6 h-6" />
            </div>
            <span className="mt-3 text-[10px] font-bold text-white uppercase tracking-wider">Change Cover Photo</span>
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service Title</label>
          <div className="relative group">
            <Layout className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Signature Fade"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Price */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Base Price ($)</label>
            <div className="relative group">
              <DollarSign className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="number" 
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
              />
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Duration</label>
            <div className="relative group">
              <Clock className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <select 
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold appearance-none"
              >
                <option value="15 min">15 min</option>
                <option value="30 min">30 min</option>
                <option value="45 min">45 min</option>
                <option value="1 hour">1 hour</option>
                <option value="1.5 hours">1.5 hours</option>
                <option value="2 hours">2 hours</option>
              </select>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service Description</label>
          <div className="relative group">
            <AlignLeft className="w-4 h-4 absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the service..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium resize-none leading-relaxed"
            ></textarea>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Status */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Status</label>
            <select 
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold appearance-none"
            >
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          {/* Featured */}
          <div className="flex items-center gap-3 h-[46px] mt-6 px-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl group transition-all">
            <input 
              id="featured-check"
              type="checkbox" 
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary transition-all cursor-pointer"
            />
            <label htmlFor="featured-check" className="text-xs font-bold text-slate-600 dark:text-slate-400 cursor-pointer select-none group-hover:text-primary transition-colors">
              Featured Service
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
