const express = require('express');
const {createFeedback , ShowFeedback} = require("../Middleware/FeedbackMiddleware");
const FeedbackRoutes = express.Router();

FeedbackRoutes.post('/FeedbackForm', createFeedback);
FeedbackRoutes.get('/ShowFeedback', ShowFeedback);

module.exports = FeedbackRoutes;