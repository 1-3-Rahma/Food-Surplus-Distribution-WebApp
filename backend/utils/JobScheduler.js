const cron = require('node-cron');
const FoodDonation = require('../models/FoodDonationModel');

const deleteExpiredDonations = () => {
  cron.schedule('0 * * * *', async () => {
    const now = new Date();
    await FoodDonation.deleteMany({ expirationDate: { $lt: now } });
    console.log('Expired food donations deleted.');
  });
};

module.exports = deleteExpiredDonations;
