import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for the trends chart
const data = [
  { name: '5 July', Spend: 27.42, pv: 2400, amt: 2400 },
  { name: '6 July', Spend: 28.55, pv: 1398, amt: 2210 },
  { name: '7 July', Spend: 35.10, pv: 9800, amt: 2290 },
  { name: '8 July', Spend: 42.80, pv: 3908, amt: 2000 },
  { name: '9 July', Spend: 38.90, pv: 4800, amt: 2181 },
  { name: '10 July', Spend: 31.30, pv: 3800, amt: 2500 },
  { name: '11 July', Spend: 25.47, pv: 4300, amt: 2100 },
];

export const TrendsChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Trends</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tickFormatter={(value) => `${value.toFixed(2)}%`} 
            />
            <Tooltip
              contentStyle={{
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="Spend" stroke="#FF8C00" strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};