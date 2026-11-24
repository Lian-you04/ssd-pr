// ============================================
// Order Controller — Stub
// ============================================

const createOrder = async (req, res, next) => {
  // TODO: Create order from cart (checkout), validate stock, clear cart
  res.status(501).json({ error: 'Not implemented yet.' });
};

const getUserOrders = async (req, res, next) => {
  // TODO: Get current user's orders (not other users')
  res.status(501).json({ error: 'Not implemented yet.' });
};

const getOrderById = async (req, res, next) => {
  // TODO: Get order by ID — only own orders (prevent horizontal escalation)
  res.status(501).json({ error: 'Not implemented yet.' });
};

module.exports = { createOrder, getUserOrders, getOrderById };
