const Order = require('../models/OrderModel');
const FoodDonation = require('../models/FoodDonationModel');
// const Notification = require('../models/NotificationModel');

// Place an order
exports.placeOrder = async (req, res) => {
  try {
    const { foodDonationId, customerId } = req.body;

    const food = await FoodDonation.findById(foodDonationId);
    if (!food || food.status !== 'available') {
      return res.status(400).json({ message: 'Food not available or already ordered' });
    }

    const order = new Order({
      foodDonation: foodDonationId,
      provider: food.provider,
      customer: customerId,
      status: 'pending',
    });

    await order.save();

    food.status = 'ordered';
    await food.save();

    // Notify provider
    const notification = new Notification({
      recipient: food.provider,
      type: 'order_placed',
      content: `A new order has been placed for your food donation.`,
      link: `/orders/${order._id}`,
    });

    await notification.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update order status (e.g., accepted, in_progress, delivered, canceled)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'accepted', 'in_progress', 'delivered', 'canceled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status update' });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    // Notify customer or volunteer based on status
    let content = '';
    if (status === 'delivered') {
      content = 'Your order has been delivered.';
    } else if (status === 'canceled') {
      content = 'Your order has been canceled.';
    } else {
      content = `Order status updated to ${status}.`;
    }

    const notification = new Notification({
      recipient: order.customer,
      type: 'order_update',
      content,
      link: `/orders/${order._id}`,
    });
    await notification.save();

    res.status(200).json({ message: 'Order status updated', order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all orders for a specific user
exports.getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({
      $or: [{ provider: userId }, { customer: userId }, { volunteer: userId }],
    }).populate('foodDonation provider customer volunteer');

    res.status(200).json({ orders });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
