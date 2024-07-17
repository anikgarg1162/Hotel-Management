const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
});

const SignUpModel = mongoose.model("User", signUpSchema);
module.exports = SignUpModel;
