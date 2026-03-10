import { useState, useEffect } from 'react';
import { servicesService } from '../../../services/servicesService';
import { useServicesStore } from '../../../store/servicesStore';

const useServicesData = () => {
  const { services, setServices } = useServicesStore();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const loadServices = async () => {
      try {
        setIsLoading(true);
        const data = await servicesService.fetchServices();
        if (isMounted) {
          setServices(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to fetch services');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadServices();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    services,
    setServices,
    isLoading,
    error
  };
};

export default useServicesData;
