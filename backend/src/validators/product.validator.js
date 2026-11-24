// ============================================
// Product Validation Schemas (Joi)
// ============================================
const Joi = require('joi');

const createProductSchema = Joi.object({
  name: Joi.string().trim().min(2).max(200).required(),
  description: Joi.string().trim().max(2000).required(),
  price: Joi.number().positive().precision(2).max(999999.99).required(),
  stock: Joi.number().integer().min(0).max(999999).required(),
  category: Joi.string().trim().max(100).required(),
  imageUrl: Joi.string().uri().max(500).optional(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().trim().min(2).max(200).optional(),
  description: Joi.string().trim().max(2000).optional(),
  price: Joi.number().positive().precision(2).max(999999.99).optional(),
  stock: Joi.number().integer().min(0).max(999999).optional(),
  category: Joi.string().trim().max(100).optional(),
  imageUrl: Joi.string().uri().max(500).optional(),
}).min(1); // At least one field required

const productIdSchema = Joi.object({
  id: Joi.string().uuid().required(),
});

module.exports = { createProductSchema, updateProductSchema, productIdSchema };
