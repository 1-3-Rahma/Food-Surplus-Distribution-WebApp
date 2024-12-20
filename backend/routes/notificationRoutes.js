// const express = require('express');
// const {
//   getUserNotifications,
//   markAsRead,
//   clearReadNotifications,
// } = require('../controllers/notificationController');

// const router = express.Router();

// router.get('/:userId', getUserNotifications);
// router.put('/read/:notificationId', markAsRead);
// router.delete('/clear/:userId', clearReadNotifications);

// module.exports = router;




// router.get('/:userId/notifications', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const notifications = await Notification.find({ userId });
//     res.status(200).json(notifications);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });






const express = require('express');
const Notification = require('../models/NotificationModel');
const router = express.Router();

// Get notifications for a specific user by userId
router.get('/:userId/notifications', async (req, res) => {
    const { userId } = req.params;  // Get the userId from the route params

    try {
        // Fetch notifications for the specific user based on userId
        const notifications = await Notification.find({ userId });

        // Check if there are no notifications for the user
        if (notifications.length === 0) {
            return res.status(404).json({ message: 'No notifications found for this user.' });
        }

        // Return the notifications
        res.status(200).json(notifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Create a new notification (e.g., after an order is placed)
router.post('/', async (req, res) => {
    const { userId, message, userType } = req.body;

    if (!userId || !message || !userType) {
        return res.status(400).json({ message: 'userId, message, and userType are required.' });
    }

    try {
        // Create a new notification for the user
        const newNotification = new Notification({
            userId,
            message,
            userType,
            // Add any other fields required by your Notification schema
        });

        // Save the notification to the database
        await newNotification.save();

        // Return the created notification
        res.status(201).json(newNotification);
    } catch (err) {
        res.status(500).json({ message: 'Error creating notification', error: err });
    }
});

module.exports = router;