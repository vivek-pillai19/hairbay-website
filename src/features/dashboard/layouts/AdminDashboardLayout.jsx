import React from 'react';
import Sidebar from '../../../shared/components/Sidebar';
import Header from '../../../shared/components/Header';
import Footer from '../../../shared/components/Footer';

const AdminDashboardLayout = ({ children, searchTerm, onSearch }) => {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display">
      <Sidebar />
      <main className="flex-1 ml-64 transition-all duration-300">
        <Header searchTerm={searchTerm} onSearch={onSearch} />
        <div className="p-8 max-w-7xl mx-auto">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
