import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
    CreateCommentController,
    GetCommentsByPostIdController,
    DeleteCommentController,
    UpdateCommentController,
} from '../controllers/comments.js';

const router = express.Router();

router.use(protect);

router.post("/comments", CreateCommentController);
router.get("/comments/post/:issueId", GetCommentsByPostIdController);
router.put("/updatecomments/:commentId", UpdateCommentController);
router.delete("/deletecomments/:commentId", DeleteCommentController);

export default router;
