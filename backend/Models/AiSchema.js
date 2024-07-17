const { GoogleGenerativeAI } = require('@google/generative-ai');

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI('AIzaSyDoAfg4UJ3EeoFy6Kp9YxKu0H8Pz6ggSS0');

module.exports = genAI;
