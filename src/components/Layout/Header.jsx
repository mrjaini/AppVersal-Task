import React from 'react';

export const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center w-full">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Overview dashboard</h1>
        <p className="text-sm text-gray-500">A consolidated view of your app efficiency by storefronts and key metrics.</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <select className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>PDF Name</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md p-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span className="text-sm font-medium text-gray-700">Jul 5 - Jul 11, 2025</span>
        </div>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </header>
  );
};