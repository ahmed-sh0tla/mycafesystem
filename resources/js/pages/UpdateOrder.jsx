import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [table_number, setTable_number] = useState('');
  const [customer_name, setcustomer_name] = useState('');
  const [type, setType] = useState('');
  const [status, setstatus] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/ordersview/${id}`)
      .then(response => {
        const order = response.data;
        setTable_number(order.table_number);
        setcustomer_name(order.customer_name);
        setType(order.type);
        setstatus(order.status);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/ordersview/${id}`, {
      table_number,
      customer_name,
      type,
      status
    })
    .then(() => {
      alert('Item updated');
      navigate('/'); 
    })
    .catch(error => {
      console.error('Update failed:', error);
      alert('Failed to update item');
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-white">Update order </h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="text-white">Table Number :</label>
          <input 
            type="text"
            className="form-control"
            value={table_number}
            onChange={(e) => setTable_number(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="text-white">Customer Name : </label>
          <input
            type="text"
            className="form-control"
            value={customer_name}
            onChange={(e) => setcustomer_name(e.target.value)}
            required
          />
          
        </div>
        <div className="mb-3">
          <label className="text-white">Type :</label>
          <select 
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Open this select menu</option>
            <option value="Dine-in">Dine-in</option>
            <option value="Take away">Take away</option>
            <option value="Delivery">Delivery</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="text-white">Status :</label>
          <select 
            className="form-select"
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            required
          >
            <option value="">Open this select menu</option>
            <option value="Preparing">Preparing</option>
            <option value="Ready">Ready</option>
            <option value="Served">Served</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default UpdateOrder;
