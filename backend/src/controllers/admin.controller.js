// ============================================
// Admin Controller — Stub
// ============================================

const getAllUsers = async (req, res, next) => {
  // TODO: List all users (admin only, no password fields)
  res.status(501).json({ error: 'Not implemented yet.' });
};

const updateUserRole = async (req, res, next) => {
  // TODO: Change user role, log admin action
  res.status(501).json({ error: 'Not implemented yet.' });
};

const getAllOrders = async (req, res, next) => {
  // TODO: List all orders (admin only)
  res.status(501).json({ error: 'Not implemented yet.' });
};

const updateOrderStatus = async (req, res, next) => {
  // TODO: Update order status (pending → shipped → delivered)
  res.status(501).json({ error: 'Not implemented yet.' });
};

const getDashboardStats = async (req, res, next) => {
  // TODO: Return summary stats (total orders, revenue, users)
  res.status(501).json({ error: 'Not implemented yet.' });
};

module.exports = { getAllUsers, updateUserRole, getAllOrders, updateOrderStatus, getDashboardStats };
