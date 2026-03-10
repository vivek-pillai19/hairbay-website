import { servicesService } from '../../../services/servicesService';
import { useServicesStore } from '../../../store/servicesStore';

const useServicesMutation = ({ 
  editingId, 
  setEditingId, 
  setSearchTerm 
}) => {
  const { services, setServices } = useServicesStore();

  const handleUpdateService = async (updatedData) => {
    try {
      if (!editingId) {
        // Fallback for direct insertions from generic managers
        const newService = await servicesService.addService(updatedData);
        setServices(prev => [newService, ...prev]);
        if (setEditingId) setEditingId(newService.id);
        return newService;
      }

      await servicesService.updateService(editingId, updatedData);
      setServices(prev => prev.map(s => s.id === editingId ? { ...s, ...updatedData } : s));
    } catch (error) {
      console.error("Failed to update service:", error);
    }
  };

  const handleDeleteService = async () => {
    try {
      await servicesService.deleteService(editingId);
      setServices(prev => prev.filter(s => s.id !== editingId));
      if (setEditingId) setEditingId(null);
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  const handleAddService = async () => {
    if (setSearchTerm) setSearchTerm(''); 
    const draftServiceData = servicesService.getServiceTemplate();

    try {
      // Trigger network creation
      const newService = await servicesService.addService(draftServiceData);
      setServices(prev => [newService, ...prev]);
      if (setEditingId) setEditingId(newService.id);
    } catch (error) {
      console.error("Failed to add service:", error);
    }
  };

  return {
    handleAddService,
    handleUpdateService,
    handleDeleteService
  };
};

export default useServicesMutation;
