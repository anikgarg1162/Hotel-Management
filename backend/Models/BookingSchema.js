const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  whatsappNumber: {
    type: String,
    required: true
  },
  checkInDate: {
    type: Date,
    required: true
  },
  checkInTime: {
    type: String,
    required: true
  },
  checkOutDate: {
    type: Date,
    required: true
  },
  checkOutTime: {
    type: String,
    required: true
  },
  adults: {
    type: String,
    required: true
  },
  children: {
    type: String,
    required: true
  },
  roomType: {
    type: String,
    required: true
  },
  ratePlan: {
    type: String,
    required: true
  }
});

const BookingModel = mongoose.model('Booking', bookingSchema);
module.exports = BookingModel;