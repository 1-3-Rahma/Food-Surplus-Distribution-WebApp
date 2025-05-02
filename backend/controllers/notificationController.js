const Notification = require('../models/NotificationModel');
const User = require('../models/UserModel'); // Assuming you have a user model for reference

// Controller to get all notifications for a user
exports.getNotifications = async (req, res) => {
  try {
    const userId = req.params.userId;
    
    // Fetch notifications related to the user
    const notifications = await Notification.find({ recipient: userId }).sort({ createdAt: -1 });

    // Return notifications
    return res.status(200).json({ notifications });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to get notifications', error: error.message });
  }
};

// // Controller to mark a notification as read
// exports.markAsRead = async (req, res) => {
//   try {
//     const notificationId = req.params.notificationId;

//     // Find and update the notification's read status
//     const notification = await Notification.findByIdAndUpdate(
//       notificationId,
//       { read: true },
//       { new: true }
//     );

//     if (!notification) {
//       return res.status(404).json({ message: 'Notification not found' });
//     }

//     // Return the updated notification
//     return res.status(200).json({ message: 'Notification marked as read', notification });
//   } catch (error) {
//     return res.status(500).json({ message: 'Failed to mark notification as read', error: error.message });
//   }
// };

// Controller to create a new notification (for admin or system usage)
exports.createNotification = async (req, res) => {
  try {
    const { recipient, type, content, link } = req.body;

    // Create a new notification
    const newNotification = new Notification({
      recipient,
      type,
      content,
      link,
    });

    // Save the notification
    await newNotification.save();

    return res.status(201).json({ message: 'Notification created', notification: newNotification });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create notification', error: error.message });
  }
};
