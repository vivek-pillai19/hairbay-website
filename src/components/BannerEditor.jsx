import React, { useState, useEffect } from 'react';
import { Save, Trash2, X, RefreshCcw, CheckCircle2 } from 'lucide-react';
import BannerForm from './BannerForm';

const BannerEditor = ({ banner, onUpdate, onDelete, onCancel }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    subtitle: '',
    image: '',
    ctaText: '',
    ctaLink: '',
    order: 1,
    status: 'Active'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (banner) {
      setFormData(banner);
    }
  }, [banner]);

  const handleUpdate = () => {
    setIsSaving(true);
    setTimeout(() => {
      onUpdate(formData);
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }, 800);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to remove this banner?')) {
      setIsDeleting(true);
      setTimeout(() => {
        onDelete(formData.id);
        setIsDeleting(false);
      }, 800);
    }
  };

  const handleImageUpload = () => {
    const mockImages = [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1522335789183-bde822272c1c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=1200'
    ];
    const randomUrl = mockImages[Math.floor(Math.random() * mockImages.length)];
    setFormData(prev => ({ ...prev, image: randomUrl }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl sticky top-24 animate-in slide-in-from-right duration-500">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900/50">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          {banner?.id ? 'Edit Hero Banner' : 'Create New Banner'}
        </h3>
        <button 
          onClick={onCancel}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar">
        <BannerForm 
          formData={formData} 
          setFormData={setFormData}
          onImageUpload={handleImageUpload}
        />
      </div>

      <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 grid grid-cols-2 gap-4">
        <button 
          onClick={handleDelete}
          disabled={!banner?.id || isDeleting}
          className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-red-500 bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 rounded-xl transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Trash2 className={`w-3.5 h-3.5 ${isDeleting ? 'animate-spin' : ''}`} />
          {isDeleting ? 'Removing...' : 'Delete Asset'}
        </button>
        <button 
          onClick={handleUpdate}
          disabled={isSaving}
          className={`flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-primary/20 ${
            showSuccess 
              ? 'bg-green-500 text-white shadow-green-500/20 shadow-none' 
              : 'bg-primary text-slate-900 hover:brightness-105'
          }`}
        >
          {isSaving ? (
            <><RefreshCcw className="w-3.5 h-3.5 animate-spin" /> saving...</>
          ) : showSuccess ? (
            <><CheckCircle2 className="w-3.5 h-3.5" /> Published!</>
          ) : (
            <><Save className="w-3.5 h-3.5" /> {banner?.id ? 'Apply Changes' : 'Save Banner'}</>
          )}
        </button>
      </div>
    </div>
  );
};

export default BannerEditor;
