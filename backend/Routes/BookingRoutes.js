const express = require('express');
const {createBooking, ShowBooking } = require("../Middleware/BookingMiddleware");
const BookingRoutes = express.Router();

BookingRoutes.post('/BookingForm', createBooking );
BookingRoutes.get('/ShowBooking', ShowBooking );

module.exports = BookingRoutes;