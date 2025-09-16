import React from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-20"> {/* ml-20 to offset for the sidebar width */}
        <Header />
        <DashboardPage />
      </main>
    </div>
  );
}

export default App;