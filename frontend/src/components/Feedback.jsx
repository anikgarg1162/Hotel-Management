import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    checkinDate: '',
    duration: '',
    hearAbout: [],
    reservationMethod: [],
    visitPurpose: [],
    servicesQuality: '',
    cleanliness: '',
    food: '',
    staff: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, name, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const newData = { ...prevData };
        if (checked) {
          newData[name] = [...(prevData[name] || []), id];
        } else {
          newData[name] = prevData[name].filter(item => item !== id);
        }
        return newData;
      });
    } else if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: value
      });
    } else {
      setFormData({
        ...formData,
        [id]: value
      });
    }
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://hotel-management-dngq.onrender.com/FeedbackForm', formData);
      console.log('Feedback submitted successfully:', formData);
      alert('Feedback submitted');
      setFormData({  // Reset form data after successful submission
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        checkinDate: '',
        duration: '',
        hearAbout: [],  
        reservationMethod: [],
        visitPurpose: [],
        servicesQuality: '',
        cleanliness: '',
        food: '',
        staff: ''
      });
      navigate('/UserFunction'); // Redirect to thank you page on successful submission
    } catch (error) {
      console.error('There was an error submitting the feedback!', error);
      // if (error.response) {
      //   console.error('Server responded with:', error.response.data);
      // }
    }
  };
  

  return (
    <div className="feedback-form">
      <h1>Hotel Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstName">Name</label>
          <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
          <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="(000) 000-0000" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="example@example.com" required />
        </div>
        <div className="input-group">
          <label htmlFor="checkinDate">Check-in date</label>
          <input type="date" id="checkinDate" value={formData.checkinDate} onChange={handleChange} required />
          <label htmlFor="duration">Duration of your stay</label>
          <input type="text" id="duration" value={formData.duration} onChange={handleChange} placeholder="Ex: 1 Week" />
        </div>
        <div className="input-group">
          <label>How did you hear about our hotel?</label>
          <div className="checkbox-group">
            <label><input type="checkbox" id="Friends and family" name="hearAbout" checked={formData.hearAbout.includes("Friends and family")} onChange={handleChange} /> Friends and family</label>
            <label><input type="checkbox" id="Social Media" name="hearAbout" checked={formData.hearAbout.includes("Social Media")} onChange={handleChange} /> Social Media</label>
            <label><input type="checkbox" id="Adds" name="hearAbout" checked={formData.hearAbout.includes("Adds")} onChange={handleChange} /> Adds</label>
            <label><input type="checkbox" id="Other" name="hearAbout" checked={formData.hearAbout.includes("Other")} onChange={handleChange} /> Other</label>
          </div>
        </div>
        <div className="input-group">
          <label>How did you make your reservation?</label>
          <div className="checkbox-group">
            <label><input type="checkbox" id="Travel Agency" name="reservationMethod" checked={formData.reservationMethod.includes("Travel Agency")} onChange={handleChange} /> Travel Agency</label>
            <label><input type="checkbox" id="Online" name="reservationMethod" checked={formData.reservationMethod.includes("Online")} onChange={handleChange} /> Online</label>
            <label><input type="checkbox" id="Application" name="reservationMethod" checked={formData.reservationMethod.includes("Application")} onChange={handleChange} /> Application</label>
            <label><input type="checkbox" id="Other" name="reservationMethod" checked={formData.reservationMethod.includes("Other")} onChange={handleChange} /> Other</label>
          </div>
        </div>
        <div className="input-group">
          <label>What was the purpose of your visit?</label>
          <div className="checkbox-group">
            <label><input type="checkbox" id="Vacation" name="visitPurpose" checked={formData.visitPurpose.includes("Vacation")} onChange={handleChange} /> Vacation</label>
            <label><input type="checkbox" id="Wedding" name="visitPurpose" checked={formData.visitPurpose.includes("Wedding")} onChange={handleChange} /> Wedding</label>
            <label><input type="checkbox" id="Business" name="visitPurpose" checked={formData.visitPurpose.includes("Business")} onChange={handleChange} /> Business</label>
            <label><input type="checkbox" id="Other" name="visitPurpose" checked={formData.visitPurpose.includes("Other")} onChange={handleChange} /> Other</label>
          </div>
        </div>
        <div className="input-group rating-group">
          <label>How would you rate these:</label>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Poor</th>
                <th>Satisfactory</th>
                <th>Good</th>
                <th>Very Good</th>
                <th>Excellent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Services Quality</td>
                <td><input type="radio" name="servicesQuality" value="Poor" checked={formData.servicesQuality === "Poor"} onChange={handleChange} /></td>
                <td><input type="radio" name="servicesQuality" value="Satisfactory" checked={formData.servicesQuality === "Satisfactory"} onChange={handleChange} /></td>
                <td><input type="radio" name="servicesQuality" value="Good" checked={formData.servicesQuality === "Good"} onChange={handleChange} /></td>
                <td><input type="radio" name="servicesQuality" value="Very Good" checked={formData.servicesQuality === "Very Good"} onChange={handleChange} /></td>
                <td><input type="radio" name="servicesQuality" value="Excellent" checked={formData.servicesQuality === "Excellent"} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Cleanliness</td>
                <td><input type="radio" name="cleanliness" value="Poor" checked={formData.cleanliness === "Poor"} onChange={handleChange} /></td>
                <td><input type="radio" name="cleanliness" value="Satisfactory" checked={formData.cleanliness === "Satisfactory"} onChange={handleChange} /></td>
                <td><input type="radio" name="cleanliness" value="Good" checked={formData.cleanliness === "Good"} onChange={handleChange} /></td>
                <td><input type="radio" name="cleanliness" value="Very Good" checked={formData.cleanliness === "Very Good"} onChange={handleChange} /></td>
                <td><input type="radio" name="cleanliness" value="Excellent" checked={formData.cleanliness === "Excellent"} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Food</td>
                <td><input type="radio" name="food" value="Poor" checked={formData.food === "Poor"} onChange={handleChange} /></td>
                <td><input type="radio" name="food" value="Satisfactory" checked={formData.food === "Satisfactory"} onChange={handleChange} /></td>
                <td><input type="radio" name="food" value="Good" checked={formData.food === "Good"} onChange={handleChange} /></td>
                <td><input type="radio" name="food" value="Very Good" checked={formData.food === "Very Good"} onChange={handleChange} /></td>
                <td><input type="radio" name="food" value="Excellent" checked={formData.food === "Excellent"} onChange={handleChange} /></td>
              </tr>
              <tr>
                <td>Staff</td>
                <td><input type="radio" name="staff" value="Poor" checked={formData.staff === "Poor"} onChange={handleChange} /></td>
                <td><input type="radio" name="staff" value="Satisfactory" checked={formData.staff === "Satisfactory"} onChange={handleChange} /></td>
                <td><input type="radio" name="staff" value="Good" checked={formData.staff === "Good"} onChange={handleChange} /></td>
                <td><input type="radio" name="staff" value="Very Good" checked={formData.staff === "Very Good"} onChange={handleChange} /></td>
                <td><input type="radio" name="staff" value="Excellent" checked={formData.staff === "Excellent"} onChange={handleChange} /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;
