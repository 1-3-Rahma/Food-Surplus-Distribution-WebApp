const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['provider', 'customer', 'volunteer'], required: true },
  photo: String,
  city: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  failedAttempts: { type: Number, default: 0 },  // Track the number of failed attempts
  lockoutUntil: { type: Date, default: null },  // Track when the user is allowed to try again
});

module.exports = mongoose.model('User', userSchema);
