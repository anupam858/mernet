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