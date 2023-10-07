import Post from "../models/Post.js";
import User from "../models/User.js";

// Create
export const createPost = async (req, res, next) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        });
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};

// Read
export const getFeedPosts = async (req, res, next) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

export const getUserPosts = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

// Search posts by username
export const searchPostsByUser = async (req, res, next) => {
    try {
        const { username } = req.query;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

// Update
export const likePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );

        res.status(200).json(updatedPost);
    } catch (error) {
        next(error);
    }
};

// Delete
export const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        if (!post) {
            res.status(404).send();
            return;
        }

        if (post.userId.toString() === req.user.id) {
            await Post.deleteOne({ _id: id });
            res.send()
        } else {
            res.status(403).send("You are not auuthorized");
        }

    } catch (error) {
        next(error);
    }
};