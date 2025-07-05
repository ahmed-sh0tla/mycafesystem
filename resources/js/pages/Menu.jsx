import React, { useState } from 'react';
import axios from 'axios';

export default function MenuForm() {
  const [price, setPrice] = useState('');
  const [components, setComponents] = useState('');
  const [categories, setcategories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/mymenu', { price, components, categories, })
      .then(() => {
        alert('Saved');
        setPrice('');
        setComponents('');
        setcategories('');
      })
      .catch((err) => {
        console.error(err);
        alert('Something went wrong!');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Create an item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='text-white'>Price :</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className='text-white'>components :</label>
          
          <textarea name="text" id="text" className="form-control"
            value={components}
            onChange={(e) => setComponents(e.target.value)}></textarea>
        </div>

        

        <div className="mb-3">
          <label htmlFor="selectType" className="form-label text-white">categories :</label>
    <select className="form-select" id="selectType" name="type" onChange={(e) => setcategories(e.target.value)}
            required aria-label="Default select example">
  <option  value="">Open this select menu</option>
  <option value="drinks">drinks</option>
  <option value="food">food</option>
  <option value="candies">candies</option>
</select>
        </div>
        

        <button type="submit" className="btn btn-warning">
          Save
        </button>
      </form>
    </div>
  );
}