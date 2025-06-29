import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

function MainLayout({ children }) {
  return (
    <div className="bg-dark">
      <Navbar />
      
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        <Dashboard /> 
        
        <main className="flex-grow-1 p-3">
          {children} 
        </main>
      </div>
    </div>
  );
}

export default MainLayout;