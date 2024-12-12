// const Notification = require('../models/NotificationModel');

// // Get notifications for a user
// exports.getUserNotifications = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const notifications = await Notification.find({ recipient: userId }).sort({
//       createdAt: -1,
//     });

//     res.status(200).json({ notifications });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Mark a notification as read
// exports.markAsRead = async (req, res) => {
//   try {
//     const { notificationId } = req.params;

//     const notification = await Notification.findById(notificationId);
//     if (!notification) {
//       return res.status(404).json({ message: 'Notification not found' });
//     }

//     notification.read = true;
//     await notification.save();

//     res.status(200).json({ message: 'Notification marked as read', notification });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Delete all read notifications for a user
// exports.clearReadNotifications = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     await Notification.deleteMany({ recipient: userId, read: true });

//     res.status(200).json({ message: 'Read notifications cleared' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
