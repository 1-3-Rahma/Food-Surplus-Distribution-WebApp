require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require("./routes/authRoutes");
const foodDonationRoutes = require('./routes/foodDonationRoutes');
// const notificationRoutes = require('./routes/notificationRoutes');
const deleteExpiredDonations = require('./utils/JobScheduler');

const orderRoutes = require('./routes/OrderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/food', foodDonationRoutes);
// app.use('/api/notifications', notificationRoutes);
app.use('/api/orders', orderRoutes);

// Job Scheduler
deleteExpiredDonations();

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
