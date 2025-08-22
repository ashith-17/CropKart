// server.js
const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose for MongoDB
const cors = require('cors'); // Import CORS to allow frontend requests
require('dotenv').config(); // Load environment variables from .env file

const app = express(); // Initialize Express app
const PORT = process.env.PORT || 5000; // Port to run the server

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/submissions', require('./routes/submissions'));

// Simple route to test server
app.get('/', (req, res) => {
    res.send('Hackathon Backend API Running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

