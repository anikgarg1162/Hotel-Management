import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import './css/UserHouseKeep.css';

const UserHousekeep = () => {
  const Navigate= useNavigate();
  const [formData, setFormData] = useState({
    roomNumber: '',
    serviceType: 'Daily Cleaning',
    additionalRequests: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCancel = () => {
    setFormData({
      roomNumber: '',
      serviceType: 'Daily Cleaning',
      additionalRequests: '',
      date: '',
      time: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/HousekeepForm', formData);
     console.log('Housekeeping updated:', formData);
     alert('Housekeeping updated');
     setFormData({
      roomNumber: '',
      serviceType: 'Daily Cleaning',
      additionalRequests: '',
      date: '',
      time: '',
     });
     Navigate('/UserFunction'); 
   } catch (error) {
     console.error('There was an error registering!', error);
     // Handle registration error
   }
    
  };

  return (
    <div className="housekeeping-form">
      <h2>Housekeeping Request Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Room Number</label>
          <input type="text" name="roomNumber" value={formData.roomNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Service Type</label>
          <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
            <option>Daily Cleaning</option>
            <option>Turn Down Service</option>
            <option>Laundry Service</option>
            <option>Maintenance Request</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Additional Requests</label>
          <textarea name="additionalRequests" value={formData.additionalRequests} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </div>
        <div className="form-group form-buttons">
          <button type="reset" className="cancel-btn" onClick={handleCancel}>Cancel</button>
          <br></br>
          <button type="submit" className="submit-btn">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default UserHousekeep;