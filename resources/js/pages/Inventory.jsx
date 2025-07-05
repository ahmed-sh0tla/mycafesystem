import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Inventory() {
  const [materials, setMaterials] = useState([]);
  const [form, setForm] = useState({ name: '', quantity: '', unit: '' });

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = () => {
    axios.get('/api/inventory')
      .then(res => setMaterials(res.data))
      .catch(err => console.error(err));
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/inventory', form)
      .then(() => {
        alert('Material added successfully!');
        setForm({ name: '', quantity: '', unit: '' });
        fetchMaterials();
      })
      .catch(err => console.error(err));
  };

  const deleteMaterial = (id) =>{
    axios.delete(`/api/inventory/${id}`)
    .then(()=>{
         setMaterials(materials.filter(m => m.id !== id));
    })

    .catch(err => console.error(err));
  };

  const updateQuantity = (id, newQuantity) => {
  if (newQuantity < 0) return;        

     
  axios.patch(`/api/inventory/${id}/quantity`, { quantity: newQuantity })
    .then(res => {
   
      const updatedMaterials = materials.map(m => {
        if (m.id === id)
            return res.data;
        else{
            return m;
        }
      });
      setMaterials(updatedMaterials);
  
      if (newQuantity < 5) {
        alert(`Warning: The quantity of "${res.data.name}" is less than 5!`);
      }
    })
    .catch(err => console.error(err)); 
};


  return (
    <div className='container mt-4'>
      <p className='fs-3 text-white'>Inventory Management</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
          name="name"
          className="form-control"
          placeholder="Material Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        </div>
        <div className="mb-3">
          <input
          name="quantity"
          className="form-control"
          type="number"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
          required
          min="0"
        />
        </div>
        <div className="mb-3">
          <input
          name="unit"
          className="form-control"
          placeholder="Unit (kg, liter, ...)"
          value={form.unit}
          onChange={handleChange}
          required
        />
        </div>
        <button type="submit" className="btn btn-warning">Add Raw Material</button>
      </form>

      <p className='fs-4 text-white mt-5'>Raw Materials</p>
      <ul>
        {materials.map(m => (
          <li key={m.id} className='text-white mb-4'>
            {m.name} - {m.quantity} {m.unit} {' '}
            <button className="btn btn-warning ms-2 me-2" onClick={() => updateQuantity(m.id, m.quantity + 1)}>+</button>
            <button
            className="btn btn-warning"
              onClick={() => updateQuantity(m.id, m.quantity - 1)}
              disabled={m.quantity <= 0}
            >
              -
            </button>

            <button
        className="btn btn-danger ms-2"
        onClick={() => deleteMaterial(m.id)}
      >
        Delete
      </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
