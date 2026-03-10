import { useState, useEffect } from 'react';
import { cmsService } from '../../../services/cmsService';
import { useCmsStore } from '../../../store/cmsStore';

const useCmsData = () => {
  const { cmsData, setCmsData } = useCmsStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadContent = async () => {
      try {
        setIsLoading(true);
        const data = await cmsService.fetchHomepageContent();
        if (isMounted) {
          setCmsData(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch CMS content');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    cmsData,
    setCmsData,
    isLoading,
    error
  };
};

export default useCmsData;
