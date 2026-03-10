import React from 'react';
import { Camera, Store, User, MapPin, Phone, Mail, Globe, CheckCircle2 } from 'lucide-react';

const FranchiseForm = ({ formData, setFormData, onImageUpload }) => {
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
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Franchise Outlet Photo</label>
        <div 
          onClick={onImageUpload}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary transition-all bg-slate-50 dark:bg-slate-800/50 shadow-inner"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-110 transition-transform duration-700 bg-slate-200 dark:bg-slate-800" 
            style={{ backgroundImage: `url('${formData.image || 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80'}')` }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[1px]">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
              <Camera className="w-6 h-6" />
            </div>
            <span className="mt-3 text-[10px] font-bold text-white uppercase tracking-wider">Update Store Image</span>
          </div>
        </div>
      </div>

      {/* Fields */}
      <div className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Franchise Name</label>
          <div className="relative group">
            <Store className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. HairBay - Downtown"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
            />
          </div>
        </div>

        {/* Owner */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Owner / Manager Name</label>
          <div className="relative group">
            <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              name="owner"
              value={formData.owner}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* City */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">City / Location</label>
            <div className="relative group">
              <MapPin className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City Name"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
              />
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Branch Status</label>
            <select 
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold appearance-none cursor-pointer"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Physical Address</label>
          <div className="relative group">
            <MapPin className="w-4 h-4 absolute left-4 top-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <textarea 
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Street, Building, Flat No."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium resize-none leading-relaxed"
            ></textarea>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Phone */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Contact Phone</label>
            <div className="relative group">
              <Phone className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Branch Email</label>
            <div className="relative group">
              <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="branch@hairbay.com"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
              />
            </div>
          </div>
        </div>

        {/* Map Link */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Google Maps Link</label>
          <div className="relative group">
            <Globe className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              name="mapLink"
              value={formData.mapLink}
              onChange={handleChange}
              placeholder="https://goo.gl/maps/..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium truncate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;
