import { create } from 'zustand';

export const useCmsStore = create((set) => ({
  cmsData: null,
  setCmsData: (cmsDataOrUpdater) => set((state) => ({
    cmsData: typeof cmsDataOrUpdater === 'function' 
      ? cmsDataOrUpdater(state.cmsData) 
      : cmsDataOrUpdater
  })),
}));
