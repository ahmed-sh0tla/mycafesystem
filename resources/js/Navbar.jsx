import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
      useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login';   
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-lg">
      <Link className="navbar-brand text-white ms-3" to="">MyCafeSystem</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {
          isLoggedIn ? (
            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link me-4 text-white" to="/login">Login</Link>
            </li>
            
          )
        }
        
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
