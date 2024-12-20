const FoodDonation = require('../models/FoodDonationModel');

// Get all available food donations
exports.getAvailableDonations = async (req, res) => {
  try {
    const donations = await FoodDonation.find({ status: 'available' }).populate('provider');
    res.status(200).json({ donations });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create a new food donation
exports.addFood = async (req, res) => {
  try {
    const { provider, foodPhoto, foodAmount, foodType, expirationDate, location, quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: 'Quantity must be a positive number' });
    }

    const newDonation = new FoodDonation({
      provider,
      foodPhoto,
      foodAmount,
      foodType,
      expirationDate,
      location,
      quantity,
    });

    await newDonation.save();
    res.status(201).json({ message: 'Food donation created successfully', donation: newDonation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update food donation status or quantity
exports.updateDonationStatus = async (req, res) => {
  try {
    const { donationId } = req.params;
    const { status, quantity } = req.body;

    const validStatuses = ['available', 'ordered', 'delivered'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const donation = await FoodDonation.findById(donationId);
    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }

    // Update status if provided
    if (status) {
      donation.status = status;
    }

    // Update quantity if provided
    if (quantity) {
      if (quantity <= 0) {
        return res.status(400).json({ message: 'Quantity must be a positive number' });
      }
      donation.quantity = quantity;
    }

    await donation.save();

    res.status(200).json({ message: 'Donation updated successfully', donation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
