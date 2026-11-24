// ============================================
// Cart Controller — Stub
// ============================================

const getCart = async (req, res, next) => {
  // TODO: Get user's cart items
  res.status(501).json({ error: 'Not implemented yet.' });
};

const addItem = async (req, res, next) => {
  // TODO: Add product to cart with quantity
  res.status(501).json({ error: 'Not implemented yet.' });
};

const updateItem = async (req, res, next) => {
  // TODO: Update cart item quantity
  res.status(501).json({ error: 'Not implemented yet.' });
};

const removeItem = async (req, res, next) => {
  // TODO: Remove item from cart
  res.status(501).json({ error: 'Not implemented yet.' });
};

const clearCart = async (req, res, next) => {
  // TODO: Clear all items from cart
  res.status(501).json({ error: 'Not implemented yet.' });
};

module.exports = { getCart, addItem, updateItem, removeItem, clearCart };
