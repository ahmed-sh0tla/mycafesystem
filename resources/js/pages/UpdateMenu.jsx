import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateMenu() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [price, setPrice] = useState('');
  const [components, setComponents] = useState('');
  const [categories, setCategories] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/menusview/${id}`)
      .then(response => {
        const menu = response.data;
        setPrice(menu.price);
        setComponents(menu.components);
        setCategories(menu.categories);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/menusview/${id}`, {
      price,
      components,
      categories
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
      <h2 className="text-white">Update Menu Item</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="text-white">Price:</label>
          <input 
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="text-white">Components:</label>
          <textarea 
            className="form-control"
            value={components}
            onChange={(e) => setComponents(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="text-white">Categories:</label>
          <select 
            className="form-select"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="drinks">drinks</option>
            <option value="food">food</option>
            <option value="candies">candies</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default UpdateMenu;
