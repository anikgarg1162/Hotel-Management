import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/ShowFeedback.css';

const ViewFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/ShowFeedback');
        console.log(response.data);
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="view-feedbacks">
      <h2>Feedback Details</h2>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Check-in Date</th>
            <th>Duration</th>
            <th>Heard About</th>
            <th>Reservation Method</th>
            <th>Visit Purpose</th>
            <th>Service Quality</th>
            <th>Cleanliness</th>
            <th>Food</th>
            <th>Staff</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.firstName} {feedback.lastName}</td>
              <td>{feedback.phoneNumber}</td>
              <td>{feedback.email}</td>
              <td>{new Date(feedback.checkinDate).toLocaleDateString()}</td>
              <td>{feedback.duration}</td>
              <td>{feedback.hearAbout.join(', ')}</td>
              <td>{feedback.reservationMethod.join(', ')}</td>
              <td>{feedback.visitPurpose.join(', ')}</td>
              <td>{feedback.servicesQuality}</td>
              <td>{feedback.cleanliness}</td>
              <td>{feedback.food}</td>
              <td>{feedback.staff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFeedbacks;
