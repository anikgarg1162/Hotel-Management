const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^\d{10}$/, 'Please fill a valid phone number (10 digits)']
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address']
  },
  checkinDate: {
    type: Date,
    required: [true, 'Check-in date is required']
  },
  duration: {
    type: String,
    required: [true, 'Duration of stay is required'],
    trim: true,
  },
  hearAbout: {
    type: [String],
    enum: ['Friends and family', 'Social Media', 'Ads', 'Other'],
    required: true
  },
  reservationMethod: {
    type: [String],
    enum: ['Travel Agency', 'Online', 'Application', 'Other'],
    required: true
  },
  visitPurpose: {
    type: [String],
    enum: ['Vacation', 'Wedding', 'Business', 'Other'],
    required: true
  },
  servicesQuality: {
    type: String,
    enum: ['Poor', 'Satisfactory', 'Good', 'Very Good', 'Excellent'],
    required: [true, 'Services quality rating is required']
  },
  cleanliness: {
    type: String,
    enum: ['Poor', 'Satisfactory', 'Good', 'Very Good', 'Excellent'],
    required: [true, 'Cleanliness rating is required']
  },
  food: {
    type: String,
    enum: ['Poor', 'Satisfactory', 'Good', 'Very Good', 'Excellent'],
    required: [true, 'Food rating is required']
  },
  staff: {
    type: String,
    enum: ['Poor', 'Satisfactory', 'Good', 'Very Good', 'Excellent'],
    required: [true, 'Staff rating is required']
  }
}, {
  timestamps: true
});

const FeedbackModel = mongoose.model('Feedback', feedbackSchema);
module.exports = FeedbackModel;
