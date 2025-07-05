import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
const handleSubmit = async e => {
  e.preventDefault();
  try {
    const res = await axios.post('/loginn', form);
    localStorage.setItem('token', res.data.token);
    window.location.href = '/';
  } catch (err) {
    setErrors({});
  }
};


  return (
    <div className="container">
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
          <div className="form-text">We'll never share your email with anyone else.</div>
          {errors.email && <div className="alert alert-danger">{errors.email[0]}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label text-white">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
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

export default Login;
