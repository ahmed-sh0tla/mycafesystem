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
            <Link className="nav-link text-warning mt-3" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning mt-3" to="/users">Staff list</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning mt-3" to="/reports">Reports </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning mt-3" to="/Orders">Create an order</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning mt-3" to="/menu">Menu management</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-warning mt-3" to="/tabels">Table management</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-warning mt-3" to="/inventory-management">Inventory management</Link>
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