// ============================================
// Winston Security Logger
// ============================================
// Logs security-relevant events: auth failures, access denied,
// admin operations, suspicious input, config changes.
// NEVER logs passwords, tokens, keys, or PII.
const winston = require('winston');
const path = require('path');

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

// General application logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: logFormat,
  defaultMeta: { service: 'secureshop-api' },
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/error.log'),
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/combined.log'),
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

// Security-specific logger
const securityLogger = winston.createLogger({
  level: 'info',
  format: logFormat,
  defaultMeta: { service: 'secureshop-security' },
  transports: [
    new winston.transports.File({
      filename: path.join(__dirname, '../../logs/security.log'),
      maxsize: 5242880,
      maxFiles: 10,
    }),
  ],
});

// Console output in development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  }));
}

/**
 * Log a security event (auth failure, access denied, etc.)
 * @param {string} event - Event type (e.g., 'AUTH_FAILURE', 'ACCESS_DENIED')
 * @param {object} details - Context (userId, ip, resource) — NO secrets
 */
function logSecurityEvent(event, details = {}) {
  securityLogger.warn({
    event,
    ...details,
    timestamp: new Date().toISOString(),
  });
}

module.exports = { logger, securityLogger, logSecurityEvent };
