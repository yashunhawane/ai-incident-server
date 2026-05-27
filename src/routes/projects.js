import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  CreateProjectController,
  GetAllProjectsController,
  GetEmployeeProjectsController,
  GetTeamLeadProjectsController,
  GetProjectByIdController
} from '../controllers/project.js';

const router = express.Router();

router.use(protect);

router.post("/projects", CreateProjectController);
router.get("/projectslist", GetAllProjectsController);
router.get("/projects/employee/:employeeId", GetEmployeeProjectsController);
router.get("/projects/teamLead/:teamLeadId", GetTeamLeadProjectsController);
router.get("/projects/:projectId", GetProjectByIdController);
export default router;