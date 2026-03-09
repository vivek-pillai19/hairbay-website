import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import HomePageManager from './pages/HomePageManager';
import ServicesManager from './pages/ServicesManager';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/home-management" element={<HomePageManager />} />
        <Route path="/services-management" element={<ServicesManager />} />
      </Routes>
    </Router>
  );
}

export default App;
