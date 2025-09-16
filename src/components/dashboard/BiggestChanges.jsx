import React from 'react';

// Mock Data
const changesData = [
  { name: 'Discovery (LOC)', value: 6109.89, change: 27.42, barWidth: '100%' },
  { name: 'Competitor (LOC)', value: 6109.89, change: 27.42, barWidth: '100%' },
  { name: 'Today tab (LOC)', value: 6109.89, change: 27.42, barWidth: '50%' },
  { name: 'Branding (LOC)', value: 6109.89, change: 27.42, barWidth: '20%' },
];

const ChangeItem = ({ name, value, change, barWidth }) => (
  <div className="flex items-center py-3">
    <div className="flex-1">
      <div className="flex items-center">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
        <p className="font-medium text-gray-700">{name}</p>
      </div>
      <p className="text-xs text-gray-500 ml-5.5">India</p>
    </div>
    <div className="w-1/3 mx-4">
      <div className="bg-gray-200 rounded-full h-2">
        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: barWidth }}></div>
      </div>
    </div>
    <div className="text-right">
      <p className="font-semibold">${value.toLocaleString()}</p>
      <p className="text-sm text-green-500">+{change}%</p>
    </div>
  </div>
);

export const BiggestChanges = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Biggest Changes</h3>
      {/* You can add a tab component here similar to TopListTable */}
      <div>
        {changesData.map((item, index) => (
          <ChangeItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};