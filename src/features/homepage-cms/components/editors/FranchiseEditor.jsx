import React, { useState, useEffect } from 'react';
import { Save, Trash2, X, RefreshCcw, CheckCircle2 } from 'lucide-react';
import FranchiseForm from './FranchiseForm';

import usePublishLifecycle from '../../../../features/homepage-cms/hooks/usePublishLifecycle';

const FranchiseEditor = ({ franchise, onUpdate, onDelete, onCancel }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    owner: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    mapLink: '',
    status: 'Active',
    image: ''
  });

  const { isProcessing: isSaving, isSuccess: showSuccess, execute: executeSave } = usePublishLifecycle();
  const { isProcessing: isDeleting, execute: executeDelete } = usePublishLifecycle();

  useEffect(() => {
    if (franchise) {
      setFormData(franchise);
    }
  }, [franchise]);

  const handleUpdate = () => {
    executeSave({
      delay: 800,
      successDuration: 2000,
      onComplete: () => onUpdate(formData)
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this franchise location?')) {
      executeDelete({
        delay: 800,
        successDuration: 0,
        onComplete: () => onDelete(formData.id)
      });
    }
  };


  const handleImageUpload = () => {
    const mockImages = [
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600'
    ];
    const randomUrl = mockImages[Math.floor(Math.random() * mockImages.length)];
    setFormData(prev => ({ ...prev, image: randomUrl }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl sticky top-24 animate-in slide-in-from-right duration-500">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          {franchise?.id ? 'Edit Franchise' : 'Register Franchise'}
        </h3>
        <button 
          onClick={onCancel}
          className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-6 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar">
        <FranchiseForm 
          formData={formData} 
          setFormData={setFormData}
          onImageUpload={handleImageUpload}
        />
      </div>

      <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20 grid grid-cols-2 gap-4">
        <button 
          onClick={handleDelete}
          disabled={!franchise?.id || isDeleting}
          className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-red-500 bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 rounded-xl transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Trash2 className={`w-3.5 h-3.5 ${isDeleting ? 'animate-spin' : ''}`} />
          {isDeleting ? 'Removing...' : 'Delete Outlet'}
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
            <><CheckCircle2 className="w-3.5 h-3.5" /> Synchronized!</>
          ) : (
            <><Save className="w-3.5 h-3.5" /> {franchise?.id ? 'Update Data' : 'Save Franchise'}</>
          )}
        </button>
      </div>
    </div>
  );
};

export default FranchiseEditor;
