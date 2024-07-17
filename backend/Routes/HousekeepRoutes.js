const express = require('express');
const {createHousekeep , showHousekeep} = require("../Middleware/HousekeepMiddleware");
const HousekeepRoutes = express.Router();

HousekeepRoutes.post('/HousekeepForm', createHousekeep);
HousekeepRoutes.get('/ShowHousekeeping', showHousekeep);

module.exports = HousekeepRoutes;