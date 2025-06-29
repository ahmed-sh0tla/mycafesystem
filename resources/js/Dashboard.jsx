import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="d-flex mt-1" style={{ minHeight: '100vh' }}>
      
      {/* Sidebar */}
      <div className="bg-dark shadow-lg text-warning p-3" style={{ width: '250px' }}>
        <p className="fs-4">DashBoard</p>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-warning" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning" to="/Orders">Orders</Link>
          </li>
        </ul>
      </div>
      
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;