const express = require('express');
const SignupRoutes = require("./Routes/SignupRoutes");
const FeedbackRoutes = require("./Routes/FeedbackRoutes");
const HousekeepRoutes = require("./Routes/HousekeepRoutes");
const BookingRoutes = require('./Routes/BookingRoutes');
const AiRoutes = require('./Routes/AiRoutes');
const app = express();
const bodyparser = require("body-parser");
require('./Connection/conn')
const cors = require('cors');


app.use(cors());
app.get('/', (req, res) => {
    res.send("working perfect")
})

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(SignupRoutes);
app.use(FeedbackRoutes);
app.use(HousekeepRoutes);
app.use(BookingRoutes);
app.use(AiRoutes);
app.listen(5000, () => {
    console.log("server is running")
})



