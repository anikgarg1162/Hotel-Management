import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/ShowHousekeeping.css';

const HousekeepingDetails = () => {
  const [housekeepingDetails, setHousekeepingDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHousekeepingDetails = async () => {
      try {
        const response = await axios.get('https://hotel-management-dngq.onrender.com/ShowHousekeeping');
        console.log(response.data);
        setHousekeepingDetails(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
        setHousekeepingDetails([]);
      }
    };

    fetchHousekeepingDetails();
  }, []);

  return (
    <div className="housekeeping-details">
      <h2>View Housekeeping Details</h2>

      {error && <p>{error}</p>}

      {housekeepingDetails.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Service Type</th>
              <th>Additional Requests</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {housekeepingDetails.map((detail) => (
              <tr key={detail._id}>
                <td>{detail.roomNumber}</td>
                <td>{detail.serviceType}</td>
                <td>{detail.additionalRequests}</td>
                <td>{detail.date}</td>
                <td>{detail.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No housekeeping details found.</p>
      )}
    </div>
  );
};

export default HousekeepingDetails;
