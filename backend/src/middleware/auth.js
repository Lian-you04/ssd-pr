// ============================================
// Authentication Middleware (JWT)
// ============================================
const jwt = require('jsonwebtoken');
const { logSecurityEvent } = require('../utils/logger');

/**
 * Verifies the JWT from an HTTP-only cookie.
 * Attaches req.user = { id, email, role } on success.
 */
function authenticate(req, res, next) {
  try {
    const token = req.cookies?.accessToken;

    if (!token) {
      logSecurityEvent('AUTH_NO_TOKEN', { ip: req.ip, path: req.path });
      return res.status(401).json({ error: 'Authentication required.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, email: decoded.email, role: decoded.role };
    next();
  } catch (err) {
    logSecurityEvent('AUTH_INVALID_TOKEN', { ip: req.ip, path: req.path, reason: err.message });
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

/**
 * Authorization middleware factory.
 * Usage: authorize('admin') or authorize('admin', 'customer')
 */
function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required.' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      logSecurityEvent('ACCESS_DENIED', {
        userId: req.user.id,
        role: req.user.role,
        requiredRoles: allowedRoles,
        path: req.path,
        ip: req.ip,
      });
      return res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
    }

    next();
  };
}

module.exports = { authenticate, authorize };
