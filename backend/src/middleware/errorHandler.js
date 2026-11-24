// ============================================
// Centralized Error Handler Middleware
// ============================================
// Returns safe, generic error messages.
// NEVER exposes stack traces, queries, internal paths, or secrets.
const { logger, logSecurityEvent } = require('../utils/logger');

function errorHandler(err, req, res, _next) {
  // Log the full error internally
  logger.error({
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    path: req.path,
    method: req.method,
    ip: req.ip,
  });

  // If it looks like a security event, log it
  if (err.statusCode === 401 || err.statusCode === 403) {
    logSecurityEvent('ERROR_SECURITY', {
      statusCode: err.statusCode,
      path: req.path,
      ip: req.ip,
      userId: req.user?.id || 'anonymous',
    });
  }

  // Determine status code
  const statusCode = err.statusCode || 500;

  // Safe response — no internal details
  const response = {
    error: {
      message: statusCode === 500
        ? 'An internal server error occurred.'
        : err.message || 'An error occurred.',
      ...(process.env.NODE_ENV === 'development' && { detail: err.message }),
    },
  };

  res.status(statusCode).json(response);
}

module.exports = errorHandler;
