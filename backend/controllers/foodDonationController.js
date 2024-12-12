const FoodDonation = require('../models/FoodDonationModel');

// Get all available food donations
exports.getAvailableDonations = async (req, res) => {
  try {
    const donations = await FoodDonation.find({ status: 'available' }).populate(
      'provider'
    );
    res.status(200).json({ donations });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update food donation status
exports.updateDonationStatus = async (req, res) => {
  try {
    const { donationId } = req.params;
    const { status } = req.body;

    const validStatuses = ['available', 'ordered', 'delivered'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const donation = await FoodDonation.findById(donationId);
    if (!donation) {
      return res.status(404).json({ message: 'Donation not found' });
    }

    donation.status = status;
    await donation.save();

    res.status(200).json({ message: 'Donation status updated', donation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
