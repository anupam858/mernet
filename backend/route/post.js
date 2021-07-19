import express from 'express';
import { getPosts, createPosts, updatePost, deletePost, likePost } from '../controller/post.js'

const postRoute = express.Router()

postRoute.get('/', getPosts);
postRoute.post('/', createPosts);
postRoute.patch('/:id', updatePost)
postRoute.delete('/:id', deletePost)
postRoute.patch('/:id/likePost', likePost)


export default postRoute;