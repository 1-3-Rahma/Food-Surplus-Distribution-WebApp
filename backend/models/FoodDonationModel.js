const mongoose = require('mongoose');

const foodDonationSchema = new mongoose.Schema({
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  foodPhoto: { type: String, required: true },
  foodAmount: { type: String, required: true },
  foodType: { type: String, required: true },
  expirationDate: { type: Date, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['available', 'ordered', 'delivered'], default: 'available' },
  quantity: { type: Number, required: true } // Added the 'quantity' field
}, { timestamps: true });

module.exports = mongoose.model('FoodDonation', foodDonationSchema);
 