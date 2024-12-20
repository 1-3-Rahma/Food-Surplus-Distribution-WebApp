// const mongoose = require('mongoose');

// const notificationSchema = new mongoose.Schema({
//   recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   type: { type: String, enum: ['volunteer_accept', 'order_delivered', 'customer_receive'], required: true },
//   content: { type: String, required: true },
//   link: String,
//   read: { type: Boolean, default: false }
// }, { timestamps: true });

// module.exports = mongoose.model('Notification', notificationSchema);




// const mongoose = require('mongoose');

// const notificationSchema = new mongoose.Schema({
//     recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // ID of the user receiving the notification
//     userType: { type: String, enum: ['Provider', 'Consumer', 'Volunteer'], required: true }, // User's type
//     type: { type: String, required: true }, // Type of notification, e.g., 'order_requested'
//     content: { type: String, required: true }, // Message content
//     link: String, // Optional link for actionable notifications/ Provides a URL for actionable notifications (like "Review the order")
//     read: { type: Boolean, default: false } // Whether the notification is read by the user or not
// }, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// module.exports = mongoose.model('Notification', notificationSchema);





const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    userType: { type: String, required: true },
    message: { type: String, required: true },
    actionUrl: { type: String, required: true }, // Whether user will be taken to history in profile page, or to review order page.
    orderStatus: { type: String, enum: ['inAction', 'delivered'], required: true }, // To know when to take user to history or to review order page.
    createdAt: { type: Date, default: Date.now },
    read: { type: Boolean, default: false } // Whether the notification is read by the user or not

});

module.exports = mongoose.model('Notification', notificationSchema);