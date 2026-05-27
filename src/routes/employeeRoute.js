import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { GetAllEmployeesController } from '../controllers/employee.js';

const router = express.Router();
router.use(protect);

router.get("/employees", GetAllEmployeesController);

export default router;