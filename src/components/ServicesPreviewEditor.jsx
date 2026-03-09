import React, { useState } from 'react';
import { Scissors, Plus, Trash2, Edit3, Image as ImageIcon, Link, Save, CheckCircle2 } from 'lucide-react';

const ServicePreviewItem = ({ title, desc, img, onDelete, onEdit }) => (
  <div className="p-4 bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center gap-4 group hover:border-primary/30 transition-all shadow-sm">
    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200 shadow-inner">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{title}</h4>
      <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{desc}</p>
    </div>
    <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
      <button 
        onClick={onEdit}
        className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:text-primary transition-all active:scale-90 shadow-sm"
      >
        <Edit3 className="w-3.5 h-3.5" />
      </button>
      <button 
        onClick={onDelete}
        className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:text-red-500 transition-all active:scale-90 shadow-sm"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  </div>
);

const ServicesPreviewEditor = () => {
  const [previews, setPreviews] = useState([
    { id: 1, title: "Precision Haircut", desc: "Expert styling for the modern man.", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=300" },
    { id: 2, title: "Classic Shave", desc: "Traditional hot towel grooming.", img: "https://images.unsplash.com/photo-1599351431247-f509ce03c5d6?auto=format&fit=crop&q=80&w=300" },
    { id: 3, title: "Beard Sculpture", desc: "Custom shaping and maintenance.", img: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=300" }
  ]);
  const [newItem, setNewItem] = useState({ title: '', desc: '', img: '', link: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddPreview = () => {
    if (!newItem.title) return;
    const itemToAdd = {
      ...newItem,
      id: Date.now(),
      img: newItem.img || 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=300'
    };
    setPreviews(prev => [itemToAdd, ...prev]);
    setNewItem({ title: '', desc: '', img: '', link: '' });
  };

  const handleDelete = (id) => {
    setPreviews(prev => prev.filter(p => p.id !== id));
  };

  const handleSaveOrder = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      console.log('Order Saved:', previews);
    }, 800);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Scissors className="w-4 h-4" />
          </div>
          Services Preview
        </h3>
        <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline flex items-center gap-1 active:scale-95 transition-transform">
          <Plus className="w-3 h-3" />
          Add Preview
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5 bg-slate-50/20 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-inner">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">New Service Preview</h4>
            
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Service Title"
                value={newItem.title}
                onChange={e => setNewItem(n => ({...n, title: e.target.value}))}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold placeholder:text-slate-400"
              />

              <textarea 
                placeholder="Short Description..."
                value={newItem.desc}
                onChange={e => setNewItem(n => ({...n, desc: e.target.value}))}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium resize-none"
                rows="3"
              ></textarea>

              <div className="grid grid-cols-2 gap-3">
                <div 
                  onClick={() => setNewItem(n => ({...n, img: 'https://images.unsplash.com/photo-1599351431247-f509ce03c5d6?auto=format&fit=crop&q=80&w=300'}))}
                  className={`bg-white dark:bg-slate-800 border-2 border-dashed rounded-xl p-2.5 flex items-center gap-2 group cursor-pointer transition-all ${newItem.img ? 'border-primary' : 'border-slate-200 dark:border-slate-700 hover:border-primary'}`}
                >
                  <ImageIcon className={`w-4 h-4 ${newItem.img ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`} />
                  <span className={`text-[10px] font-bold ${newItem.img ? 'text-primary' : 'text-slate-500 group-hover:text-primary'}`}>
                    {newItem.img ? 'Image Selected' : 'Thumbnail'}
                  </span>
                </div>
                <div className="relative group">
                  <Link className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Link URL"
                    value={newItem.link}
                    onChange={e => setNewItem(n => ({...n, link: e.target.value}))}
                    className="w-full pl-9 pr-3 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[10px] focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none"
                  />
                </div>
              </div>

              <button 
                onClick={handleAddPreview}
                className="w-full py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-xl text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md mt-2"
              >
                <Plus className="w-4 h-4" />
                Add to List
              </button>
            </div>
          </div>

          <div className="space-y-4">
             <div className="flex items-center justify-between px-1 mb-2">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Previews ({previews.length})</span>
               <button 
                 onClick={handleSaveOrder}
                 disabled={isSaving}
                 className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all ${
                   showSuccess ? 'text-green-500' : 'text-primary hover:underline active:scale-95'
                 }`}
               >
                 {showSuccess ? (
                   <><CheckCircle2 className="w-3 h-3" /> Saved</>
                 ) : (
                   <><Save className={`w-3 h-3 ${isSaving ? 'animate-spin' : ''}`} /> {isSaving ? 'Saving...' : 'Save Order'}</>
                 )}
               </button>
             </div>
             <div className="space-y-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
               {previews.map((s) => (
                 <ServicePreviewItem 
                    key={s.id} 
                    {...s} 
                    onDelete={() => handleDelete(s.id)}
                    onEdit={() => console.log('Edit', s.id)}
                 />
               ))}
               {previews.length === 0 && (
                 <div className="py-10 text-center border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-2xl">
                    <p className="text-xs text-slate-400 font-medium tracking-tight">No previews added yet</p>
                 </div>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPreviewEditor;
