// controllers/postController.js
const db = require('../db');

exports.getPosts = (req, res) => {
  db.query('SELECT * FROM posts ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error('getPosts DB error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

exports.createPost = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'title and content required' });
  }
  db.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], (err, results) => {
    if (err) {
      console.error('createPost DB error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ success: true, id: results.insertId });
  });
};

exports.updatePost = (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'title and content required' });

  db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, postId], (err) => {
    if (err) {
      console.error('updatePost DB error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ success: true });
  });
};
