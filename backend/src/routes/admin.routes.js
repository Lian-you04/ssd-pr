// ============================================
// Admin Routes
// ============================================
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { authenticate, authorize } = require('../middleware/auth');

// All admin routes require authentication + admin role
router.use(authenticate, authorize('admin'));

// GET /api/admin/users — list all users
router.get('/users', adminController.getAllUsers);

// PUT /api/admin/users/:id/role — change user role
router.put('/users/:id/role', adminController.updateUserRole);

// GET /api/admin/orders — list all orders
router.get('/orders', adminController.getAllOrders);

// PUT /api/admin/orders/:id/status — update order status
router.put('/orders/:id/status', adminController.updateOrderStatus);

// GET /api/admin/dashboard — admin dashboard stats
router.get('/dashboard', adminController.getDashboardStats);

module.exports = router;
