import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [form, setForm] = useState({ fullname: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');
    try {
      const res = await axios.post('/signupp', form);
      setSuccessMessage(res.data.message || 'Signed up successfully!');
      setForm({ fullname: '', email: '', password: '' }); 
    } catch (err) {
      if (err.response && err.response.status === 422) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({ global: 'Something went wrong. Please try again.' });
      }
    }
  };

  return (
    <div className="container">
      <h1>Signup Page</h1>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {errors.global && (
        <div className="alert alert-danger">{errors.global}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputname" className="form-label text-white">Full name</label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            id="inputname"
            value={form.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <div className="alert alert-danger">{errors.fullname[0]}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="alert alert-danger">{errors.email[0]}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <div className="alert alert-danger">{errors.password[0]}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
