const express = require('express');
const { createUser , userLogin ,verifyToken  } = require("../Middleware/SignupMiddleware");
const SignupRoutes = express.Router();

SignupRoutes.post('/SignupUser', createUser);
SignupRoutes.post('/UserLogin', userLogin);

SignupRoutes.get('/ProtectedRoute', verifyToken, (req, res) => {
    res.status(200).send({ Message: "This is a protected route" });
  });

module.exports = SignupRoutes;
