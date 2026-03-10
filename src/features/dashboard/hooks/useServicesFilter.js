import { useState, useMemo } from 'react';

const useServicesFilter = (initialServices) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('newest');

  const filteredServices = useMemo(() => {
    let result = initialServices.filter(s => {
      const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'All' || s.status === filterStatus;
      const matchesPrice = s.price >= priceRange.min && s.price <= priceRange.max;
      return matchesSearch && matchesStatus && matchesPrice;
    });

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') result.sort((a, b) => b.id - a.id);

    return result;
  }, [initialServices, searchTerm, filterStatus, priceRange, sortBy]);

  const resetFilters = () => {
    setFilterStatus('All');
    setPriceRange({ min: 0, max: 1000 });
    setSortBy('newest');
  };

  return {
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    showFilters,
    setShowFilters,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy,
    filteredServices,
    resetFilters
  };
};

export default useServicesFilter;
