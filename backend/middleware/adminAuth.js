// middleware/adminAuth.js  # reusable admin auth middleware
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

module.exports = function requireAdmin(req, res, next) {
  // support both JSON body password and header
  const password = (req.body && req.body.password) || req.headers['x-admin-password'];
  if (!ADMIN_PASSWORD) {
    console.error('ADMIN_PASSWORD not set in environment');
    return res.status(500).json({ error: 'Server misconfiguration' });
  }
  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // remove password from body to avoid storing/logging it downstream
  if (req.body) delete req.body.password;
  next();
};
