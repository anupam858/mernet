import mongoose from "mongoose";
import postMessage from "../model/postMessage.js"

export const getPosts = async (req, res) => {
    try {
        const getPostMessage = await postMessage.find()

        res.status(200).json(getPostMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


}

export const createPosts = async (req, res) => {
    const body = req.body;
    const newPost = new postMessage(body);
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);

    }
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);

    }
    await postMessage.findByIdAndDelete(id)
    res.json({ message: 'Post Deleted Successfully' })

}

export const likePost = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);

    }
    const post = await postMessage.findById(id);

    const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
}