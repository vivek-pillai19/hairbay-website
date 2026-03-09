import React, { useState, useEffect } from 'react';
import { FileEdit, Camera, Trash2, Save } from 'lucide-react';

const QuickEditor = ({ service, onUpdate, onDelete }) => {
  const [formData, setFormData] = useState(service);

  useEffect(() => {
    setFormData(service);
  }, [service]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = () => {
    onUpdate(formData);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sticky top-24 overflow-hidden shadow-xl transition-all duration-300">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20">
        <h3 className="font-bold flex items-center gap-2 text-slate-900 dark:text-white font-display">
          <FileEdit className="w-5 h-5 text-primary" />
          Quick Editor
        </h3>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Service Image</label>
          <div className="relative group cursor-pointer overflow-hidden rounded-xl">
            <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden border-2 border-dashed border-slate-200 dark:border-slate-700 group-hover:border-primary transition-all">
              <div 
                className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all transform group-hover:scale-105 duration-700" 
                style={{ backgroundImage: `url(${formData.image})` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all">
                <button className="bg-white px-4 py-2 rounded-xl text-xs font-bold text-slate-900 flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
                  <Camera className="w-4 h-4" />
                  Swap Photo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">Display Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium"
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">Base Price ($)</label>
              <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
                type="number"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">Duration (Min)</label>
              <select 
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none appearance-none font-medium cursor-pointer"
              >
                <option value={30}>30 Min</option>
                <option value={60}>60 Min</option>
                <option value={90}>90 Min</option>
                <option value={120}>120 Min</option>
                <option value={180}>180 Min</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">Service Status</label>
            <select 
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none appearance-none font-medium cursor-pointer"
            >
              <option value="Active">Active</option>
              <option value="Featured">Featured</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 mb-1.5 ml-1">Service Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium resize-none"
              rows="3"
            ></textarea>
          </div>
          <div className="flex items-center gap-3 pt-2 bg-slate-50 dark:bg-slate-800/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
            <div className="relative inline-flex items-center cursor-pointer">
              <input 
                name="isFeatured"
                type="checkbox" 
                checked={formData.isFeatured} 
                onChange={handleChange}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </div>
            <label className="text-xs font-bold text-slate-600 dark:text-slate-400 cursor-pointer uppercase tracking-tight">Featured on Homepage</label>
          </div>
        </div>
        <div className="pt-4 flex gap-3">
          <button 
            onClick={handleSubmit}
            className="flex-1 bg-primary text-slate-900 font-bold py-3.5 rounded-xl hover:brightness-105 shadow-lg shadow-primary/20 transition-all text-sm flex items-center justify-center gap-2 active:scale-95"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
          <button 
            onClick={onDelete}
            className="p-3 text-slate-400 hover:text-red-500 transition-all border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 active:scale-90"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickEditor;
