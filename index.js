require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());


// Database Connection
mongoose.connect(process.env.URL_DB)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('QR Menu API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
