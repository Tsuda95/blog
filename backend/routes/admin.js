const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key_here';

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 3600000, // 1 hour
      // secure: true,  // enable if HTTPS
    });

    return res.json({ success: true, message: 'Login successful' });
  }

  res.status(401).json({ success: false, message: 'Invalid username or password' });
});

// Optional: verify token route (for frontend to check logged-in status)
router.get('/verify', (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ success: false });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return res.json({ success: true, username: decoded.username });
  } catch (err) {
    return res.status(401).json({ success: false });
  }
});

module.exports = router;
