require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require("./routes/authRoutes");
<<<<<<< HEAD
const foodDonationRoutes = require('./routes/foodDonationRoutes');
// const notificationRoutes = require('./routes/notificationRoutes');
const deleteExpiredDonations = require('./utils/JobScheduler');
=======
const notificationRoutes = require('./routes/notificationRoutes');
// const deleteExpiredDonations = require('./utils/JobScheduler');
// const foodDonationRoutes = require('./routes/foodDonationRoutes');
>>>>>>> 8b599d582bb05aa3833008a61e35b606a7e6076a

const orderRoutes = require('./routes/OrderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
<<<<<<< HEAD
app.use('/api/food', foodDonationRoutes);
// app.use('/api/notifications', notificationRoutes);
=======
// app.use('/api/food', foodDonationRoutes);
app.use('/api/notifications', notificationRoutes);
>>>>>>> 8b599d582bb05aa3833008a61e35b606a7e6076a
app.use('/api/orders', orderRoutes);

// Job Scheduler
deleteExpiredDonations();

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
