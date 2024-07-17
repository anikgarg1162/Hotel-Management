import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/ShowBooking.css';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('https://hotel-management-dngq.onrender.com/ShowBooking');
        console.log(response);
        setReservations(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching reservations:', error);
        setError('Error fetching reservations. Please try again.');
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="reservation-list">
      <h2>Reservations</h2>
      {error && <p>{error}</p>}
      {reservations.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>phoneNumber</th>
              <th>whatsappNumber</th>
              <th>Check-in Date</th>
              <th>Check-in Time</th>
              <th>Check-out Date</th>
              <th>Check-out Time</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Room Type</th>
              <th>Rate Plan</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td>{reservation.name}</td>
                <td>{reservation.phoneNumber}</td>
                <td>{reservation.whatsappNumber}</td>
                <td>{reservation.checkInDate}</td>
                <td>{reservation.checkInTime}</td>
                <td>{reservation.checkOutDate}</td>
                <td>{reservation.checkOutTime}</td>
                <td>{reservation.adults}</td>
                <td>{reservation.children}</td>
                <td>{reservation.roomType}</td>
                <td>{reservation.ratePlan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>
  );
};

export default ReservationList;
