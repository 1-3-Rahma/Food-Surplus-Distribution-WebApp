const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

// Route to get all notifications for a user
router.get('/:userId', notificationController.getNotifications);

// Route to mark a notification as read
// router.put('/:notificationId/read', notificationController.markAsRead);

// Route to create a new notification (for testing purposes or admin)
router.post('/', notificationController.createNotification);

module.exports = router;
