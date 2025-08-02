import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLoginSuccess }) {
  const [form, setForm] = useState({ userName: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(form);
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, form);
      console.log("Login Success:", response.data);

      const { token, userName: name, roles , id} = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userName", name);
      localStorage.setItem("roles", JSON.stringify(roles));
      localStorage.setItem("userid", id);

      onLoginSuccess();

    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          name="userName"
          className="form-control"
          value={form.userName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn w-100" style={{ background: "#e5a40bff", color: 'black' }}>
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
