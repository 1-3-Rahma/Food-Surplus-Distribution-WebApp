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






// const Notification = require('../models/NotificationModel');

// // Get notifications for a specific user
// const getNotifications = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const notifications = await Notification.find({ userId });
//     res.status(200).json(notifications);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Create notifications based on user type
// const createNotification = async (req, res) => {
//   try {
//     const { userId, userType } = req.body;

//     let notifications = [];
//     switch (userType) {
//       case 'Provider':
//         // notifications = [
//         //   { userId, userType, message: 'An order has been requested.' },
//         //   { userId, userType, message: 'A volunteer accepted taking an order.', actionUrl: '/provider-review-order' },
//         // ];
//         notifications = [
//           { userId, userType, message: 'An order has been requested.' },
//           {
//             userId,
//             userType,
//             message: 'A volunteer accepted taking an order.',
//             // actionUrl: '/provider/history'
//             actionUrl: '/provider-review-order'
//           },
//         ];
//         break;
//       case 'Consumer':
//         notifications = [
//           { userId, userType, message: 'Your order is on the way.', actionUrl: '/consumer-review-order' }, // actionUrl: '/consumer/history'
//         ];
//         break;
//       case 'Volunteer':
//         notifications = [
//           { userId, userType, message: 'An order has been requested.', actionUrl: '/volunteer-review-order' }, // actionUrl: '/volunteer/history'
//         ];
//         break;
//       default:
//         // return res.status(400).json({ message: 'Invalid user type' });
//         notifications = [
//           {
//             userId,
//             userType: 'Default',
//             message: 'Your order is now in history.',
//             actionUrl: '/default/history'
//           },
//         ];
//         break;
//     }

//     const savedNotifications = await Notification.insertMany(notifications);
//     res.status(201).json(savedNotifications);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// module.exports = { getNotifications, createNotification };








const createNotification = async (req, res) => {
    try {
        const { userId, userType, orderStatus } = req.body;

        let notifications = [];
        switch (userType) {
            case 'Provider':
                if (orderStatus === 'inAction') {
                    notifications = [
                        {
                            userId,
                            userType,
                            message: 'Review the order',
                            actionUrl: '/Provider/review-order',
                            orderStatus
                        },
                    ];
                } else if (orderStatus === 'delivered') {
                    notifications = [
                        {
                            userId,
                            userType,
                            message: 'Order moved to history.',
                            actionUrl: '/Provider/history',
                            orderStatus
                        },
                    ];
                }
                break;
                
            case 'Consumer':
                if (orderStatus === 'inAction') {
                    notifications = [
                        {
                            userId,
                            userType,
                            message: 'Track your order.',
                            actionUrl: '/Consumer/track-order',
                            orderStatus
                        },
                    ];
                } else if (orderStatus === 'delivered') {
                    notifications = [
                        {
                            userId,
                            userType,
                            message: 'Order moved to history.',
                            actionUrl: '/Consumer/history',
                            orderStatus
                        },
                    ];
                }
                break;

            case 'Volunteer':
                if (orderStatus === 'inAction') {
                    notifications = [
                        {
                            userId,
                            userType,
                            message: 'Review the order',
                            actionUrl: '/Volunteer/review-order',
                            orderStatus
                        },
                    ];
                } else if (orderStatus === 'delivered') {
                    notifications = [
                        {
                            userId,
                            userType,
                            message: 'Order moved to history.',
                            actionUrl: '/Volunteer/history',
                            orderStatus
                        },
                    ];
                }
                break;
            default:
                res.status(400).json({ message: 'Invalid user type.' });
                return;
        }

        const savedNotifications = await Notification.insertMany(notifications);
        res.status(201).json(savedNotifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};