import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './Mainlayout';
import Main from './pages/Main';
import Orders from './pages/Orders';
import MenuForm from './pages/Menu';
import UpdateMenu from './pages/UpdateMenu';
import UpdateOrder from './pages/UpdateOrder';
import Signup from './auth/signup';
import Login from './auth/login';
import UsersTable from './pages/Userstable';
import ReservationCards from './pages/ReservationCards';
import Inventory from './pages/Inventory';
import Report from './pages/Report';










function App() {
  return (
    <BrowserRouter>
    <Mainlayout>
        <Routes>
            <Route path="/" element={<Main/>}/>   
            <Route path="/orders" element={<Orders/>}/>  
            <Route path="/menu" element={<MenuForm/>}/>
            <Route path="/update-menu/:id" element={<UpdateMenu />} />
            <Route path="/update-order/:id" element={<UpdateOrder />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<UsersTable />} />
            <Route path="/tabels" element={<ReservationCards />} />
            <Route path="/inventory-management" element={<Inventory />} />
            <Route path="/reports" element={<Report />} />
                  
        </Routes>  
    </Mainlayout>    
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);