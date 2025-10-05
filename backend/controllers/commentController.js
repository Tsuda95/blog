// controllers/commentController.js  # logic for comments
const db = require('../db');

exports.getComments = (req, res) => {
  const { postId } = req.params;
  db.query('SELECT * FROM comments WHERE post_id = ? ORDER BY id ASC', [postId], (err, results) => {
    if (err) {
      console.error('getComments DB error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

exports.createComment = (req, res) => {
  const { post_id, name, content } = req.body;
  if (!post_id || !content || !name) return res.status(400).json({ error: 'post_id, name and content required' });

  db.query('INSERT INTO comments (post_id, name, content) VALUES (?, ?, ?)', [post_id, name, content], (err, results) => {
    if (err) {
      console.error('createComment DB error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json({ success: true, id: results.insertId });
  });
};
