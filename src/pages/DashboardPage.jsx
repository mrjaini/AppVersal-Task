import React from 'react';
import { motion } from 'framer-motion';
import { useDashboardData } from '../hooks/useDashboardData'; // Import the custom hook
import { KPICard } from '../components/dashboard/KPICard';
import { GeoMap } from '../components/dashboard/GeoMap';
import { TrendsChart } from '../components/dashboard/TrendsChart';
import { TopListTable } from '../components/dashboard/TopListTable';
import { BiggestChanges } from '../components/dashboard/BiggestChanges';

// Animation variants for the container (can be kept or modified)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export const DashboardPage = () => {
  // Use the custom hook to fetch data and manage state.
  // This replaces the static mock data.
  const { kpiData, isLoading, error } = useDashboardData();

  // 1. Handle the loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6 bg-gray-50 min-h-screen">
        <p className="text-lg text-gray-500">Loading Dashboard...</p>
      </div>
    );
  }

  // 2. Handle the error state
  if (error) {
    return (
      <div className="flex items-center justify-center p-6 bg-gray-50 min-h-screen">
        <p className="text-lg text-red-500">Error loading data: {error}</p>
      </div>
    );
  }

  // 3. Render the dashboard once data is successfully loaded
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* The component now maps over kpiData from the hook */}
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GeoMap />
        <TrendsChart />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <TopListTable />
        <BiggestChanges />
      </motion.div>
    </div>
  );
};