import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import './css/SignUp.css';

const SignUp = () => {
    const Navigate= useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post('http://localhost:5000/SignupUser', formData);
      console.log('Registration successful:', formData);
      setFormData({
        email: '',
        username: '',
        password: ''
      });
      Navigate('/login'); // Redirect to login page on successful registration
    } catch (error) {
      console.error('There was an error registering!', error);
      // Handle registration error
    }
  };

  return (
    <div className="registration-form">
      <h1>Get started with your account</h1>
      <p>Already have an account? <a href="/login">Log in</a></p>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Password</label>
        <div className="password-input">
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <ul className="password-requirements">
          <li>One lowercase character</li>
          <li>One uppercase character</li>
          <li>One number</li>
          <li>One special character</li>
          <li>8 characters minimum</li>
        </ul>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
