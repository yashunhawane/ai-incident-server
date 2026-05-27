import Project from "../models/project.js";

const populateProjectUsers = (query) =>
    query
        .populate("members", "name -_id")
        .populate("teamLead", "name -_id");

export const CreateProjectService = async (projectData) => {
    const project = await Project.create(projectData);
    return project;
}

export const GetAllProjectsService = async () => {
    const projects = await populateProjectUsers(Project.find());
    return projects;
}

export const GetEmployeeProjectsService = async (employeeId) => {
    const projects = await populateProjectUsers(Project.find({
        members: employeeId
    }));
    return projects;
}

export const GetTeamLeadProjectsService = async (teamLeadId) => {
    const projects = await populateProjectUsers(Project.find({
        teamLead: teamLeadId
    }));
    return projects;
}

export const GetProjectByIdService = async (projectId) => {
    const project = await populateProjectUsers(Project.findById(projectId));
    return project;
}
