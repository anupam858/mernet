import express from 'express';
import { getPosts, createPosts } from '../controller/post.js'

const postRoute = express.Router()

postRoute.get('/', getPosts);
postRoute.post('/', createPosts);



export default postRoute;