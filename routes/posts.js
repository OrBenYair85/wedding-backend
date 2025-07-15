import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new post
router.post('/', async (req, res) => {
  try {
    const { url, header, content, type } = req.body;
    const post = new Post({ url, header, content, type });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save post' });
  }
});

export default router;
