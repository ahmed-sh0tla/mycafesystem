import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './Mainlayout';
import Main from './pages/Main';
import Orders from './pages/Orders';








function App() {
  return (
    <BrowserRouter>
    <Mainlayout>
        <Routes>
            <Route path="/" element={<Main/>}/>   
            <Route path="/orders" element={<Orders/>}/>       
        </Routes>  
    </Mainlayout>    
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);