import express from 'express';
import { uploadSingleImage } from '../controllers/uploadController.js';
import { upload } from '../middleware/uploadMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.post("/", upload.single("image"), uploadSingleImage);

export default router;



