import express from "express";
import { getFeedPosts, getUserPosts, searchPostsByUser, likePost, deletePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Read
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.get("/search", verifyToken, searchPostsByUser);


//Update
router.patch("/:id/like", verifyToken, likePost);

// Delete
router.delete("/:id", verifyToken, deletePost);

export default router;