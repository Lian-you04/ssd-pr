// ============================================
// Product Controller — Stub
// ============================================
// TODO: Implement CRUD with Prisma, server-side authorization checks

const getAllProducts = async (req, res, next) => {
  // TODO: Paginated product listing
  res.status(501).json({ error: 'Not implemented yet.' });
};

const getProductById = async (req, res, next) => {
  // TODO: Fetch single product by UUID
  res.status(501).json({ error: 'Not implemented yet.' });
};

const createProduct = async (req, res, next) => {
  // TODO: Admin-only: create product
  res.status(501).json({ error: 'Not implemented yet.' });
};

const updateProduct = async (req, res, next) => {
  // TODO: Admin-only: update product
  res.status(501).json({ error: 'Not implemented yet.' });
};

const deleteProduct = async (req, res, next) => {
  // TODO: Admin-only: soft-delete product
  res.status(501).json({ error: 'Not implemented yet.' });
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
