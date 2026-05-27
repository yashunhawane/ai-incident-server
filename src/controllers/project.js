import {
    CreateProjectService,
    GetAllProjectsService,
    GetEmployeeProjectsService,
    GetTeamLeadProjectsService,
    GetProjectByIdService
} from "../services/projectService.js";


export const CreateProjectController = async (req, res) => {
    try {
        const projectData = req.body;
        const project = await CreateProjectService(projectData);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const GetAllProjectsController = async (req, res) => {
    try {
        const projects = await GetAllProjectsService();
        res.status(200).json(projects);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const GetEmployeeProjectsController = async (req, res) => {
    try {
        const employeeId = req.params.employeeId;
        const projects = await GetEmployeeProjectsService(employeeId);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const GetTeamLeadProjectsController = async (req, res) => {
    try {
        const teamLeadId = req.params.teamLeadId;
        const projects = await GetTeamLeadProjectsService(teamLeadId);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const GetProjectByIdController = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const project = await GetProjectByIdService(projectId);
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }   
}