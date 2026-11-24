// ============================================
// Order Routes
// ============================================
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const { authenticate } = require('../middleware/auth');

// All order routes require authentication
router.use(authenticate);

// POST /api/orders — place an order (checkout)
router.post('/', orderController.createOrder);

// GET /api/orders — get user's order history
router.get('/', orderController.getUserOrders);

// GET /api/orders/:id — get order details
router.get('/:id', orderController.getOrderById);

module.exports = router;
