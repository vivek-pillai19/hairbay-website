import React, { useState } from 'react';
import { Quote, User, Star, Plus, Trash2, Edit3, Image as ImageIcon, Save, CheckCircle2 } from 'lucide-react';
import OptimizedImage from '../../../../shared/components/OptimizedImage';

const TestimonialItem = ({ name, review, rating, img, onDelete, onEdit }) => (
  <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col gap-4 group hover:border-primary/40 transition-all shadow-sm relative animate-in fade-in zoom-in duration-300">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-slate-100 dark:border-slate-800 shadow-sm flex-shrink-0 bg-slate-100 dark:bg-slate-800">
        <OptimizedImage src={img} alt={name} className="w-full h-full object-cover transition-opacity duration-300" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{name}</h4>
        <div className="flex gap-0.5 mt-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-2.5 h-2.5 ${i < rating ? 'text-primary fill-primary' : 'text-slate-300 dark:text-slate-700'}`} />
          ))}
        </div>
      </div>
    </div>
    <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed italic">"{review}"</p>
    
    <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
      <button 
        onClick={onEdit}
        className="p-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:text-primary transition-all active:scale-90 shadow-sm"
      >
        <Edit3 className="w-3 h-3" />
      </button>
      <button 
        onClick={onDelete}
        className="p-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:text-red-500 transition-all active:scale-90 shadow-sm"
      >
        <Trash2 className="w-3 h-3" />
      </button>
    </div>
  </div>
);

const TestimonialsEditor = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: "John Doe", review: "The best haircut I've ever had. Highly recommended!", rating: 5, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
    { id: 2, name: "Jane Smith", review: "A total relaxation experience. The scalp massage was incredible.", rating: 4, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" }
  ]);
  const [newItem, setNewItem] = useState({ name: '', review: '', rating: 5, img: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAdd = () => {
    if (!newItem.name || !newItem.review) return;
    const item = {
      ...newItem,
      id: Date.now(),
      img: newItem.img || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
    };
    setTestimonials(prev => [item, ...prev]);
    setNewItem({ name: '', review: '', rating: 5, img: '' });
  };

  const handleDelete = (id) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const handlePublish = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      console.log('Testimonials Published:', testimonials);
    }, 800);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Quote className="w-4 h-4" />
          </div>
          Testimonials Section
        </h3>
        <button 
          onClick={handlePublish}
          disabled={isSaving}
          className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
            showSuccess ? 'bg-green-500/10 text-green-500' : 'text-primary hover:bg-primary/5 active:scale-95'
          }`}
        >
          {showSuccess ? (
            <><CheckCircle2 className="w-3.5 h-3.5" /> Published!</>
          ) : (
            <><Save className={`w-3.5 h-3.5 ${isSaving ? 'animate-spin' : ''}`} /> {isSaving ? 'Saving...' : 'Publish Feed'}</>
          )}
        </button>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Reviews ({testimonials.length})</span>
                 <button 
                  onClick={() => setTestimonials([])}
                  className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-red-500 transition-all"
                 >Clear All</button>
              </div>
              <div className="grid grid-cols-1 gap-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                 {testimonials.map((t) => (
                   <TestimonialItem 
                    key={t.id} 
                    {...t} 
                    onDelete={() => handleDelete(t.id)}
                    onEdit={() => console.log('Edit', t.id)}
                   />
                 ))}
                 {testimonials.length === 0 && (
                   <div className="py-20 text-center border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-3xl">
                      <Quote className="w-8 h-8 text-slate-100 dark:text-slate-800 mx-auto mb-3" />
                      <p className="text-xs text-slate-400 font-medium tracking-tight">Your testimonial feed is empty</p>
                   </div>
                 )}
              </div>
           </div>

           <div className="p-6 bg-slate-50/20 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-inner space-y-5">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Testimonial</h4>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5 focus-within:translate-x-1 transition-transform border-l-2 border-transparent focus-within:border-primary pl-1">
                    <label className="text-[10px] font-bold text-slate-500 ml-1 uppercase tracking-tighter">Customer Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Alex West"
                      value={newItem.name}
                      onChange={e => setNewItem(n => ({...n, name: e.target.value}))}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-bold"
                    />
                  </div>
                  <div className="space-y-1.5 pl-1">
                    <label className="text-[10px] font-bold text-slate-500 ml-1 uppercase tracking-tighter">Rating</label>
                    <div className="flex gap-2 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star 
                          key={star} 
                          onClick={() => setNewItem(n => ({...n, rating: star}))}
                          className={`w-3.5 h-3.5 cursor-pointer hover:scale-125 transition-all ${star <= newItem.rating ? 'text-primary fill-primary' : 'text-slate-200'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 group pl-1">
                  <label className="text-[10px] font-bold text-slate-500 ml-1 uppercase tracking-tighter">Review Message</label>
                  <textarea 
                    placeholder="Write review here..."
                    value={newItem.review}
                    onChange={e => setNewItem(n => ({...n, review: e.target.value}))}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:ring-2 focus:ring-primary text-slate-900 dark:text-white transition-all outline-none font-medium resize-none leading-relaxed"
                    rows="4"
                  ></textarea>
                </div>

                <div 
                  onClick={() => setNewItem(n => ({...n, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'}))}
                  className={`bg-white dark:bg-slate-800 border-2 border-dashed rounded-xl p-3.5 flex items-center justify-center gap-3 group cursor-pointer transition-all shadow-sm ${newItem.img ? 'border-primary' : 'border-slate-200 hover:border-primary'}`}
                >
                  <ImageIcon className={`w-4 h-4 ${newItem.img ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`} />
                  <span className={`text-[10px] font-bold ${newItem.img ? 'text-primary' : 'text-slate-500 group-hover:text-primary'}`}>
                    {newItem.img ? 'Photo Attached' : 'Customer Photo'}
                  </span>
                </div>

                <button 
                  onClick={handleAdd}
                  className="w-full py-3.5 bg-primary text-slate-900 font-bold rounded-xl text-xs flex items-center justify-center gap-3 hover:brightness-105 active:scale-95 transition-all shadow-lg shadow-primary/20 mt-2"
                >
                  <Plus className="w-4 h-4" />
                  Add to Feed
                </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsEditor;
