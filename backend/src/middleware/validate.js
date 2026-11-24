// ============================================
// Input Validation Middleware
// ============================================
const Joi = require('joi');

/**
 * Generic validation middleware factory.
 * Usage: validate(schema, 'body') or validate(schema, 'params')
 */
function validate(schema, property = 'body') {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const messages = error.details.map((d) => d.message);
      return res.status(400).json({
        error: 'Validation failed.',
        details: messages,
      });
    }

    req[property] = value; // Use sanitized/validated values
    next();
  };
}

module.exports = { validate };
