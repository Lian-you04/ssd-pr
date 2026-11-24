// ============================================
// Product Routes
// ============================================
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authenticate, authorize } = require('../middleware/auth');
const { validate } = require('../middleware/validate');
const { createProductSchema, updateProductSchema, productIdSchema } = require('../validators/product.validator');

// Public routes
router.get('/', productController.getAllProducts);
router.get('/:id', validate(productIdSchema, 'params'), productController.getProductById);

// Admin-only routes
router.post('/', authenticate, authorize('admin'), validate(createProductSchema), productController.createProduct);
router.put('/:id', authenticate, authorize('admin'), validate(productIdSchema, 'params'), validate(updateProductSchema), productController.updateProduct);
router.delete('/:id', authenticate, authorize('admin'), validate(productIdSchema, 'params'), productController.deleteProduct);

module.exports = router;
