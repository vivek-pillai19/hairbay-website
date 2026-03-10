const MOCK_SERVICES = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVLcCeRJX0mTzOFR3tquXLeRvHAI38hjMWovlJozU-P3r6u_wcRd1JhHM6obipeiMXcOaycCGUm6D8AISpXGx0hWNHsfMODlZmhs49sVqnx1bfX8isNCLHFrN2hKiyeyHMyh32FkrPSXMqYxjHv6xZQF9c70NsOwX7XJAG3KnrHd6zVq9LpaFFwN1fh20ERSvSQTlK9BxzLsaAmndPfYJo2ri9B4MTED-RLusPxxbn09XIKYvsaV_waRYdvJ007tEecbxVagjpm94',
    title: "Classic Gentlemen's Cut",
    description: "Precision cut, wash, and style.",
    price: 45.00,
    duration: 60,
    status: 'Active',
    isFeatured: false
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYLaundf27GcyiIaJarJ5ek5xPVY-yDji1A0ecyOe9vA0FWC1oRujWDO0Ab3A-soT08Hv1-LOgU1Vuo2nxpzIAH9wCxnCuBd9_UPBm-omBVTZ2m9IdyhhVWdrvf0j6nuHClAgs3zYHV14fw7_wrElkr727UYtJzahmeH3mz_FCC6gyyMkNxCxfwtOOci2yPUzD7-PpKe5mdfQM4F0FG5WoaAPPjy5XuzQZMYL0iDtpfdPLxxxBbdiRG2le0fv4LGqe_ynkDesr2ro',
    title: "Signature Gold Treatment",
    description: "Deep conditioning & scalp massage.",
    price: 120.00,
    duration: 120,
    status: 'Active',
    isFeatured: false
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-_RKxTpL9jU8wUlXrQolJMApIRZBfZI3lFZQ0UUnXgy7rfwSp-lnQLib2cHOLqqsUfcVuiwjshHCm7G1f4BZrGSmNAEc2zvKkFT3cKxHEh1UNj9ro7CkAiP4XvqI_agcOKBrpo-SdrY-z764PhnK6X4krTNccSz55Xh6QJa7Zev1AfOmZj5XgJxrvuEhdd9XsCBmWOX-yqSknYgj22c7saV_BEOBq1-ZUYYHdMIx0GU0DkTZ92lv7a-mQ_nVytcxf2BpNhXau28c',
    title: "Full Color & Balayage",
    description: "Premium dye with protection treatment.",
    price: 185.00,
    duration: 180,
    status: 'Featured',
    isFeatured: true
  },
  {
    id: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArba9eJOWdkT8Fz7J4TQohJjcYb4Up_OCFRarrXCTskal4VqPpoA3yO4FdWBPl5kwhuKF7npOuc14taimfk-o5cW7S1_2rqywzElCY7HBv2k0SnHkHLm-GaNJsl3q063nwgiHvmGgobG3wxUZeqiB6VC4f2c9svBPn0UJc_yY2mK_Sw-hvD0u-fcNokyzMnW1tU3sbjKAez4VlioDk5qM8fExn0ARLl2eDKAalPvxoUNj5z-dgJlM4-_U_yvLyeqATBbQ0q9qSWB0',
    title: "Beard Sculpting",
    description: "Hot towel shave & precision trim.",
    price: 35.00,
    duration: 60,
    status: 'Draft',
    isFeatured: false
  }
];

export const servicesService = {
  fetchServices: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...MOCK_SERVICES];
  },

  updateService: async (id, data) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(`[Mock API] Updating service ${id}:`, data);
    return { ...data, id };
  },

  addService: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newService = { ...data, id: Math.floor(Math.random() * 10000) };
    console.log('[Mock API] Adding service:', newService);
    return newService;
  },

  deleteService: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(`[Mock API] Deleting service ${id}`);
    return true;
  },

  getServiceTemplate: () => ({
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=300',
    title: 'New Salon Service',
    description: 'Describe the new service here...',
    price: 0,
    duration: 60,
    status: 'Active',
    isFeatured: false
  })
};
