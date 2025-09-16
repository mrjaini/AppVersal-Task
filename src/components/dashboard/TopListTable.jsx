import React, { useState, useMemo } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

// Mock data
const mockData = [
  { campaign: 'Discovery (LOC)', location: 'India', spend: 6109.89, change: 27.42, installs: 44, conversions: '0.00%' },
  { campaign: 'Competitor (LOC)', location: 'India', spend: 6109.89, change: 27.42, installs: 121, conversions: '0.00%' },
  { campaign: 'Today tab (LOC)', location: 'India', spend: 6109.89, change: 27.42, installs: 44, conversions: '0.00%' },
  { campaign: 'Branding (LOC)', location: 'India', spend: 6109.89, change: 27.42, installs: 44, conversions: '0.00%' },
];

export const TopListTable = () => {
  const [activeTab, setActiveTab] = useState('Campaigns');
  const data = useMemo(() => mockData, []);

  const columns = useMemo(() => [
    {
      header: 'Campaigns',
      accessorKey: 'campaign',
      cell: info => (
        <div className="flex items-center">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></span>
          <div>
            <p className="font-semibold">{info.getValue()}</p>
            <p className="text-xs text-gray-500">{info.row.original.location}</p>
          </div>
        </div>
      ),
    },
    { header: 'Spend', accessorKey: 'spend', cell: info => `$${info.getValue().toLocaleString()}` },
    { header: 'Installs', accessorKey: 'installs' },
    { header: 'Conversions', accessorKey: 'conversions' },
  ], []);

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
  const tabs = ['Campaigns', 'Ad Groups', 'Keywords', 'Ads'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Top List</h3>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="text-left text-xs font-semibold text-gray-500 uppercase pb-2">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="border-t border-gray-200">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};