// ============================================
// Auth Controller — Stub
// ============================================
// TODO: Implement register, login, logout, refreshToken, getProfile

const register = async (req, res, next) => {
  // TODO: Hash password with bcrypt, create user in DB, return safe response
  res.status(501).json({ error: 'Not implemented yet.' });
};

const login = async (req, res, next) => {
  // TODO: Verify credentials, generate JWT, set HTTP-only cookie
  res.status(501).json({ error: 'Not implemented yet.' });
};

const logout = async (req, res, next) => {
  // TODO: Clear cookie, invalidate refresh token
  res.status(501).json({ error: 'Not implemented yet.' });
};

const refreshToken = async (req, res, next) => {
  // TODO: Validate refresh token, issue new access token
  res.status(501).json({ error: 'Not implemented yet.' });
};

const getProfile = async (req, res, next) => {
  // TODO: Return current user info (no password)
  res.status(501).json({ error: 'Not implemented yet.' });
};

module.exports = { register, login, logout, refreshToken, getProfile };
