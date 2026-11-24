// ============================================
// Cart Routes
// ============================================
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');
const { authenticate } = require('../middleware/auth');

// All cart routes require authentication
router.use(authenticate);

// GET /api/cart — get user's cart
router.get('/', cartController.getCart);

// POST /api/cart/items — add item to cart
router.post('/items', cartController.addItem);

// PUT /api/cart/items/:itemId — update item quantity
router.put('/items/:itemId', cartController.updateItem);

// DELETE /api/cart/items/:itemId — remove item from cart
router.delete('/items/:itemId', cartController.removeItem);

// DELETE /api/cart — clear cart
router.delete('/', cartController.clearCart);

module.exports = router;
