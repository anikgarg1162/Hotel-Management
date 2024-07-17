import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import axios from "axios";
import "./css/BookingPage.css";

const BookingPage = () => {
    const Navigate= useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    whatsappNumber: "",
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
    adults: "2 adults",
    children: "No child",
    roomType: "Single room",
    ratePlan: "Master rate",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post( 'https://hotel-management-dngq.onrender.com/BookingForm' , formData);
      console.log('Reservation updated:', formData);
      
      setFormData({
        name: "",
        phoneNumber: "",
        whatsappNumber: "",
        checkInDate: "",
        checkInTime: "",
        checkOutDate: "",
        checkOutTime: "",
        adults: "2 adults",
        children: "No child",
        roomType: "Single room",
        ratePlan: "Master rate",
      });
      window.open("https://qrstuff.me/gateway/pay/129e055210469b12cfc29e6f37dcb2ee", "_blank");
      // Navigate('/UserFunction');
    } catch (error) {
      console.error("Error saving reservation:", error);
    }
  };


  return (
    <div className="reservation-form">
      <h2>General info</h2>
      <p>Update reservation dates, room type, rate plan, and more.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="(000) 000-0000"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>WhatsApp number</label>
          <input
            type="tel"
            name="whatsappNumber"
            placeholder="(000) 000-0000"
            value={formData.whatsappNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Check-in</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
          />
          <input
            type="time"
            name="checkInTime"
            value={formData.checkInTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Check-out</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
          />
          <input
            type="time"
            name="checkOutTime"
            value={formData.checkOutTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Adults</label>
          <select
            name="adults"
            value={formData.adults}
            onChange={handleChange}
          >
            <option>1 adult</option>
            <option>2 adults</option>
            <option>3 adults</option>
          </select>
        </div>
        <div className="form-group">
          <label>Children</label>
          <select
            name="children"
            value={formData.children}
            onChange={handleChange}
          >
            <option>No child</option>
            <option>1 child</option>
            <option>2 children</option>
          </select>
        </div>
        <div className="form-group">
          <label>Room type</label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
          >
            <option>Single room</option>
            <option>Double room</option>
            <option>Suite</option>
          </select>
        </div>
        <div className="form-group">
          <label>Rate plan</label>
          <select
            name="ratePlan"
            value={formData.ratePlan}
            onChange={handleChange}
          >
            <option>Standard rate</option>
            <option>Master rate</option>
            <option>Deluxe rate</option>
          </select>
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="update-btn" >Update Reservation</button>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
