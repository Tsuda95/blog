// server.js
require('dotenv').config(); // only here
const express = require('express');
const cors = require('cors');

const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

const app = express();

app.use(cors());
app.use(express.json());

// mount routes (note: route files use controllers which use db.js)
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

// health check
app.get('/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
