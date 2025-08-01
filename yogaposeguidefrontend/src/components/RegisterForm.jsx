import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function RegisterForm({onSwitchToLogin}) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    userName: '',
    password: '',
    roleNames: [],
  });


  const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
};


  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedRoles = [...form.roleNames];

    if (checked) updatedRoles.push(value);
    else updatedRoles = updatedRoles.filter((role) => role !== value);

    setForm({ ...form, roleNames: updatedRoles });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("Submitting form with data:", form);
    await axios.post('http://localhost:8080/api/auth/register', form);
    alert('Registration successful! You can now login.');
    onSwitchToLogin();
  } catch (error) {
    console.error('Registration Error', error);
    alert('Registration failed. Please try again.');
  }
};



  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Roles</label>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="USER"
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label">USER</label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="ADMIN"
            onChange={handleCheckboxChange}
          />
          <label className="form-check-label">ADMIN</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-100"
      style={{
        background: "#e5a40bff"
      }}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
