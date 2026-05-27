import Issue from '../models/Issue.js';

const populateIssueUsers = (query) =>
    query.populate("reportedBy", "name -_id");


export const CreatePostService = async (issueData) => {
    const issue = await Issue.create(issueData);
    return issue.populate("reportedBy", "name -_id");
}

export const GetAllPostsService = async () => {
    const issues = await populateIssueUsers(Issue.find());
    return issues;
}

export const GetPostByIdService = async (projectId) => {
    const issues = await populateIssueUsers(Issue.find({ project: projectId }));
    return issues;
}

export const GetEmployeePostsService = async (employeeId) => {
    const issues = await populateIssueUsers(Issue.find({ employee: employeeId }));
    return issues;
}   

export const GetTeamLeadPostsService = async (teamLeadId) => {
    const issues = await populateIssueUsers(Issue.find ({ teamLead: teamLeadId }));
    return issues;
}  

export const DeletePostService = async (postId) => {
    await Issue.findByIdAndDelete(postId);
    return;
}   
