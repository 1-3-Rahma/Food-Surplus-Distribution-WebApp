const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  foodDonation: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodDonation', required: true },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  volunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'in_progress', 'delivered', 'canceled'], 
    default: 'pending' 
  },
  orderTime: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
