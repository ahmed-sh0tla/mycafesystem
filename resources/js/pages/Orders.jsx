import React, { useState } from 'react';
import axios from 'axios';

export default function OrderForm() {
  const [table_number, setTable_number] = useState('');
  const [customer_name, setcustomer_name] = useState('');
  const [type, setType] = useState('');
  const [status, setstatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/myorders', { table_number, customer_name, type, status })
      .then(() => {
        alert('Saved');
        setTable_number('');
        setcustomer_name('');
        setType('');
        setstatus('');
      })
      .catch((err) => {
        console.error(err);
        alert('Something went wrong!');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Create New order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='text-white'>Table number :</label>
          <input
            type="number"
            className="form-control"
            value={table_number}
            onChange={(e) => setTable_number(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className='text-white'>customer name :</label>
          <input
            type="text"
            className="form-control"
            value={customer_name}
            onChange={(e) => setcustomer_name(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="selectType" class="form-label text-white">type</label>
    <select class="form-select" id="selectType" name="type" onChange={(e) => setType(e.target.value)}
            required aria-label="Default select example">
  <option  value="">Open this select menu</option>
  <option value="dine-in">dine-in</option>
  <option value="take away">take away</option>
  <option value="delivery">delivery</option>
</select>
        </div>

         <div className="mb-3">
          <label htmlFor="selectType" class="form-label text-white">status</label>
    <select class="form-select" id="selectType" name="status" onChange={(e) => setstatus(e.target.value)}
            required aria-label="Default select example">
  <option  value="">Open this select menu</option>
  <option value="preparing">preparing</option>
  <option value="ready">ready</option>
  <option value="served">served</option>
</select>
        </div>


        

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}