import React, { useState, useEffect } from 'react';
import { Save, Trash2, X, RefreshCcw, CheckCircle2 } from 'lucide-react';
import ServiceForm from './ServiceForm';

const ServiceEditor = ({ service, onUpdate, onDelete, onCancel }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    price: '',
    duration: '30 min',
    description: '',
    status: 'Active',
    isFeatured: false,
    image: ''
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (service) {
      setFormData(service);
    }
  }, [service]);

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
    if (window.confirm('Are you sure you want to delete this service?')) {
      setIsDeleting(true);
      setTimeout(() => {
        onDelete(formData.id);
        setIsDeleting(false);
      }, 800);
    }
  };

  const handleImageUpload = () => {
    const mockImages = [
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=300',
      'https://images.unsplash.com/photo-1599351431247-f509ce03c5d6?auto=format&fit=crop&q=80&w=300',
      'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=300',
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=300'
    ];
    const randomUrl = mockImages[Math.floor(Math.random() * mockImages.length)];
    setFormData(prev => ({ ...prev, image: randomUrl }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xl sticky top-24 animate-in slide-in-from-right duration-500">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          {service ? 'Edit Service' : 'Add New Service'}
        </h3>
        <button 
          onClick={onCancel}
          className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar">
        <ServiceForm 
          formData={formData} 
          setFormData={setFormData}
          onImageUpload={handleImageUpload}
        />
      </div>

      <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20 grid grid-cols-2 gap-4">
        <button 
          onClick={handleDelete}
          disabled={!service || isDeleting}
          className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-red-500 bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 rounded-xl transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Trash2 className={`w-3.5 h-3.5 ${isDeleting ? 'animate-spin' : ''}`} />
          {isDeleting ? 'Deleting...' : 'Delete Service'}
        </button>
        <button 
          onClick={handleUpdate}
          disabled={isSaving}
          className={`flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-primary/20 ${
            showSuccess 
              ? 'bg-green-500 text-white shadow-green-500/20' 
              : 'bg-primary text-slate-900 hover:brightness-105'
          }`}
        >
          {isSaving ? (
            <><RefreshCcw className="w-3.5 h-3.5 animate-spin" /> saving...</>
          ) : showSuccess ? (
            <><CheckCircle2 className="w-3.5 h-3.5" /> Updated!</>
          ) : (
            <><Save className="w-3.5 h-3.5" /> {service ? 'Update Service' : 'Save Service'}</>
          )}
        </button>
      </div>
    </div>
  );
};

export default ServiceEditor;
