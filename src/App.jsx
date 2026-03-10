import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './shared/components/ErrorBoundary';

const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const HomePageManager = lazy(() => import('./pages/HomePageManager'));
const ServicesManager = lazy(() => import('./pages/ServicesManager'));
const FranchiseManager = lazy(() => import('./pages/FranchiseManager'));
const BannerManager = lazy(() => import('./pages/BannerManager'));

const RouteLoader = () => (
  <div className="flex justify-center items-center min-h-screen bg-slate-50 dark:bg-slate-950">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/home-management" element={<HomePageManager />} />
            <Route path="/services-management" element={<ServicesManager />} />
            <Route path="/franchise-management" element={<FranchiseManager />} />
            <Route path="/banner-management" element={<BannerManager />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
