import express from 'express';
import { getPosts, createPost, updatePost, deletePost, increaseLike } from '../controllers/postsController.js'
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', increaseLike);
export default router;