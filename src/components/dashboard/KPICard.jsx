import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const KPICard = ({ title, value, change, isPositive }) => {
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';
  const valueIsZero = value === '$0.00' || value === '0';

  return (
    <motion.div 
      variants={itemVariants} 
      className={`bg-white p-4 rounded-lg shadow-sm w-full ${valueIsZero ? 'opacity-50' : ''}`}
    >
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800 my-1">{value}</p>
      <div className="flex items-center">
        <p className={`text-sm font-semibold ${changeColor}`}>
          {change !== null ? `${isPositive ? '+' : ''}${change}%` : '0%'}
        </p>
      </div>
    </motion.div>
  );
};