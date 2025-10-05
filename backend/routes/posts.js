// routes/posts.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const requireAdmin = require('../middleware/adminAuth');

router.get('/', postController.getPosts);
router.post('/', requireAdmin, postController.createPost); // admin-required
router.put('/:id', requireAdmin, postController.updatePost); // admin-required

module.exports = router;
