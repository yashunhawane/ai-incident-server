import express from 'express';
import {
  protect
} from '../middleware/authMiddleware.js';
import {
  CreatePostController,
  GetAllPostsController,
  GetEmployeePostsController,
  GetTeamLeadPostsController,
  DeletePostController,
  GetPostByIdController
} from '../controllers/posts.js';

const router = express.Router();

router.use(protect);

router.post("/posts", CreatePostController);
router.get("/getallposts", GetAllPostsController);
router.get("/posts/:postId", GetPostByIdController);
router.get("/posts/employee/:employeeId", GetEmployeePostsController);
router.get("/posts/teamLead/:teamLeadId", GetTeamLeadPostsController);
router.delete("/posts/:postId", DeletePostController);

export default router;