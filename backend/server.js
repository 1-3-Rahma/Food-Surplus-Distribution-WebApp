const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const deleteExpiredDonations = require('./utils/JobSchedular');




const authRoutes = require("./routes/authRoutes");
const notificationRoutes = require('./routes/notificationRoutes');
const foodDonationRoutes = require('./routes/foodDonationRoutes');
const orderRoutes = require('./routes/OrderRoutes');



connectDB();

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/food', foodDonationRoutes);
app.use('/api/orders', orderRoutes);


// Job Scheduler
deleteExpiredDonations();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
