const express = require('express');
const {
  placeOrder,
  updateOrderStatus,
  getUserOrders,
} = require('../controllers/OrderController');

const router = express.Router();

router.post('/place', placeOrder);
router.put('/update/:orderId', updateOrderStatus);
router.get('/user/:userId', getUserOrders);

module.exports = router;
