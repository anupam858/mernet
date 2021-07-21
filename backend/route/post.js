import express from 'express';
import { getPosts, createPosts, updatePost, deletePost, likePost } from '../controller/post.js'
import auth from "../middleware/auth.js";

const postRoute = express.Router()

postRoute.get('/', getPosts);
postRoute.post('/', auth, createPosts);
postRoute.patch('/:id', auth, updatePost)
postRoute.delete('/:id', auth, deletePost)
postRoute.patch('/:id/likePost', auth, likePost)


export default postRoute;