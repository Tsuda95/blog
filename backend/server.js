const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
const adminPassword = process.env.ADMIN_PASSWORD;


// GET all blog posts
app.get('/api/posts', (req, res) => {
    db.query('SELECT * FROM posts ORDER BY id DESC', (err, results) => {
        if(err) return res.status(500).json({error: err});
        res.json(results);
    });
});

// POST a new blog post (admin only)
app.post('/api/posts', (req, res) => {
    const { password, title, content } = req.body;
    if(password !== adminPassword) return res.status(401).json({error: "Unauthorized"});
    db.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], (err, results) => {
        if(err) return res.status(500).json({error: err});
        res.json({success: true});
    });
});

// GET comments for a post
app.get('/api/comments/:postId', (req, res) => {
    const { postId } = req.params;
    db.query('SELECT * FROM comments WHERE post_id=? ORDER BY id ASC', [postId], (err, results) => {
        if(err) return res.status(500).json({error: err});
        res.json(results);
    });
});

// POST a comment
app.post('/api/comments', (req, res) => {
    const { post_id, name, content } = req.body;
    db.query('INSERT INTO comments (post_id, name, content) VALUES (?, ?, ?)', [post_id, name, content], (err, results) => {
        if(err) return res.status(500).json({error: err});
        res.json({success: true});
    });
});

// PUT a post
app.put('/api/posts/:id', (req, res) => {
    const postId = req.params.id;             // grab the post id from the URL
    const { title, content } = req.body;      // new data from the client

    db.query(
        'UPDATE posts SET title = ?, content = ? WHERE id = ?',
        [title, content, postId],
        (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ success: true });
        }
    );
});

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
