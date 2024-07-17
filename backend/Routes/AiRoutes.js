const express = require('express');
const {planner} = require('../Middleware/AiMiddleware');
const AiRoutes = express.Router();

AiRoutes.post('/planner', planner);

module.exports= AiRoutes;