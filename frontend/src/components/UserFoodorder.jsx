import React, { useState } from "react";


function FoodOrderForm({ onOrderSubmit }) {
  // State variables to hold form data
  const [roomNumber, setRoomNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [items, setItems] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming validation is done before submission
    const orderData = {
      roomNumber,
      contactNumber,
      items,
      deliveryTime
    };
    // Pass the order data to a parent component handler
    if (onOrderSubmit) {
      onOrderSubmit(orderData);
    }
    // Optionally, clear form fields after submission
    setRoomNumber("");
    setContactNumber("");
    setItems([]);
    setDeliveryTime("");
  };

  // Function to add an item to the order list
  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="food-order-form-container">
      <h2>Order Food</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="roomNumber">Room Number:</label>
        <input
          type="text"
          id="roomNumber"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          required
        />

        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          id="contactNumber"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />

        <label htmlFor="items">Select Items:</label>
        <select
          id="items"
          value={""} // You can manage item selection separately
          onChange={(e) => addItem(e.target.value)}
          required
        >
          <option value="">Select an item</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          {/* Add more options based on your menu */}
        </select>

        <label htmlFor="deliveryTime">Delivery Time:</label>
        <input
          type="datetime-local"
          id="deliveryTime"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          required
        />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default FoodOrderForm;
