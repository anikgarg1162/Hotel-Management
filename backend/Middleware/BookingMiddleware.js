const BookingModel = require('../Models/BookingSchema');

const createBooking = async (req, res) => {
    try {
      const Booking = new BookingModel(req.body);
      await Booking.save();
      res.status(201).send(Booking);
    } catch (error) {
      res.status(400).send(error);
    }
  };

const ShowBooking = async (req,res)=> {
  try {
    const reservations = await BookingModel.find({});
    console.log(reservations);
    res.status(200).send(reservations);
  } catch (error) {
    res.status(500).send(error.message);
  }

}  
  
  module.exports = { createBooking , ShowBooking };