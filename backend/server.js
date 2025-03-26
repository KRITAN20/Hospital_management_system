const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB=require('./config/db');

dotenv.config(); // Load environment variables from .env file

// // Connect to MongoDB using the connection string from the .env file
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected...'))
//   .catch((err) => console.log('MongoDB connection error:', err));


connectDB();
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define routes (add your route handlers as needed)
app.use('/api/auth', require('./routes/auth'));

// Set up the server to listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
