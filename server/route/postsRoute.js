import { Router } from 'express';
import * as postsService from '../service/postsService.js';

export const router = Router();

router.get('/posts', async function (req, res, next) {
  try {
    const posts = await postsService.getPosts();
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

router.get('/posts/:id', async function (req, res, next) {
  const id = req.params.id;
  try {
    const post = await postsService.getPost(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

router.post('/posts', async function (req, res, next) {
  const { title, content } = req.body;

  try {
    await postsService.savePost({ title, content });
    res.status(201).json({ message: 'Post created' });
  } catch (error) {
    next(error);
  }
});

router.put('/posts/:id', async function (req, res, next) {
  const id = req.params.id;
  const { title, content } = req.body;

  try {
    await postsService.updatePost(id, title, content);
    res.status(204).json({ message: 'updated' });
  } catch (error) {
    next(error);
  }
});

router.delete('/posts/:id', async function (req, res, next) {
  const id = req.params.id;
  try {
    await postsService.deletePost(id);
    res.status(204).json({ message: 'post deleted' });
  } catch (error) {
    next(error);
  }
});
