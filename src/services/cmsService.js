const MOCK_HOMEPAGE_CONTENT = {
  hero: {
    title: "Experience Luxury Hair Care",
    subtitle: "Premium salon services tailored to your unique style.",
    cta: "Book Appointment"
  },
  about: {
    title: "Our Story",
    content: "With over 15 years of excellence in hair styling and care, we bring the best of global trends to your neighborhood."
  }
};

export const cmsService = {
  fetchHomepageContent: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { ...MOCK_HOMEPAGE_CONTENT };
  },

  publishChanges: async (data) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('[Mock API] Publishing content changes:', data);
    return true;
  }
};
