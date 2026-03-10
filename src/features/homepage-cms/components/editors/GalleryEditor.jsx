import React, { useState } from 'react';
import { LayoutGrid, Image as ImageIcon, Trash2, Plus, Save, Move, CheckCircle2 } from 'lucide-react';
import OptimizedImage from '../../../../shared/components/OptimizedImage';

const GalleryItem = ({ img, onDelete }) => (
  <div className="relative aspect-square rounded-xl overflow-hidden group border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-lg animate-in fade-in zoom-in duration-300 bg-slate-100 dark:bg-slate-800">
    <OptimizedImage src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
      <button className="p-2.5 bg-white text-slate-900 rounded-xl shadow-2xl hover:scale-110 active:scale-95 transition-transform" title="Drag to reorder">
        <Move className="w-3.5 h-3.5" />
      </button>
      <button 
        onClick={onDelete}
        className="p-2.5 bg-white text-red-500 rounded-xl shadow-2xl hover:scale-110 active:scale-95 transition-transform" 
        title="Delete Image"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  </div>
);

const GalleryEditor = () => {
  const [images, setImages] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1599351431247-f509ce03c5d6?auto=format&fit=crop&q=80&w=300" },
    { id: 2, url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=300" },
    { id: 3, url: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=300" },
    { id: 4, url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=300" },
    { id: 5, url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=300" },
    { id: 6, url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" }
  ]);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAdd = () => {
    const mockPool = [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=300"
    ];
    const newId = Date.now();
    const randomUrl = mockPool[Math.floor(Math.random() * mockPool.length)];
    setImages(prev => [{ id: newId, url: randomUrl }, ...prev]);
  };

  const handleDelete = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      console.log('Gallery Saved:', images);
    }, 800);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <LayoutGrid className="w-4 h-4" />
          </div>
          Gallery Management
        </h3>
        <div className="flex gap-4">
          <button 
            onClick={() => setImages([])}
            className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-red-500 transition-all active:scale-95"
          >Delete All</button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all ${
              showSuccess ? 'text-green-500' : 'text-primary hover:underline active:scale-95'
            }`}
          >
            {showSuccess ? (
              <><CheckCircle2 className="w-3 h-3" /> Saved</>
            ) : (
              <><Save className={`w-3 h-3 ${isSaving ? 'animate-spin' : ''}`} /> {isSaving ? 'Saving...' : 'Save Layout'}</>
            )}
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div 
            onClick={handleAdd}
            className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary transition-all bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center justify-center"
          >
             <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
               <Plus className="w-5 h-5" />
             </div>
             <span className="mt-2 text-[10px] font-bold text-slate-500">Upload New</span>
          </div>

          {images.map((img) => (
            <GalleryItem key={img.id} img={img.url} onDelete={() => handleDelete(img.id)} />
          ))}
        </div>

        {images.length === 0 && (
          <div className="py-20 text-center border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl mt-6">
             <ImageIcon className="w-10 h-10 text-slate-100 dark:text-slate-800 mx-auto mb-4" />
             <p className="text-xs text-slate-400 font-medium tracking-tight">Your gallery is currently empty</p>
          </div>
        )}

        <div className="mt-8 p-4 bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 rounded-xl flex items-start gap-4 shadow-inner">
          <div className="mt-0.5 p-1.5 bg-primary/20 dark:bg-primary/30 rounded-lg text-primary">
             <Move className="w-3.5 h-3.5" strokeWidth={3} />
          </div>
          <div className="flex-1">
            <h5 className="text-[10px] font-bold text-slate-900 dark:text-primary-light uppercase tracking-widest mb-1.5">Drag and Drop Support Enabled</h5>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">You can rearrange your gallery images at any time. Changes will be saved locally until you hit "Save Layout".</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryEditor;
