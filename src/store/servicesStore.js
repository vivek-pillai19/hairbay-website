import { create } from 'zustand';

export const useServicesStore = create((set) => ({
  services: [],
  setServices: (servicesOrUpdater) => set((state) => ({
    services: typeof servicesOrUpdater === 'function' 
      ? servicesOrUpdater(state.services) 
      : servicesOrUpdater
  })),
}));
