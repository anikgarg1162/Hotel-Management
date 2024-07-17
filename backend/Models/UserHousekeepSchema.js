const mongoose = require('mongoose');

const housekeepingSchema = new mongoose.Schema({
    roomNumber: {
      type: String,
      required: true,
      trim: true
    },
    serviceType: {
      type: String,
      required: true,
    },
    additionalRequests: {
      type: String,
  
    },
    date: {
      type: Date,
      required: true,
      
    },
    time: {
      type: String,
      required: true,
      
    }
  });
  
  const HousekeepingModel = mongoose.model('Housekeeping', housekeepingSchema);
  module.exports= HousekeepingModel;