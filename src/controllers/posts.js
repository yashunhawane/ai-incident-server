import {
    CreatePostService,
    GetAllPostsService,
    GetPostByIdService,
    GetEmployeePostsService,
    GetTeamLeadPostsService,
    DeletePostService
} from "../services/postService.js";


export const CreatePostController = async (req, res) => {
    try {
        const postData = req.body;
        const post = await CreatePostService(postData);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const GetAllPostsController = async (req, res) => {
    try {
        const posts = await GetAllPostsService();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const GetPostByIdController = async (req, res) => {
    try {
        const projectId = req.params.postId;
        const posts = await GetPostByIdService(projectId);
        if (!posts.length) {
            return res.status(404).json({
                message: "Posts not found"
            });
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const GetEmployeePostsController = async (req, res) => {
    try {
        const employeeId = req.params.employeeId;
        const posts = await GetEmployeePostsService(employeeId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const GetTeamLeadPostsController = async (req, res) => {
    try {
        const teamLeadId = req.params.teamLeadId;
        const posts = await GetTeamLeadPostsService(teamLeadId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const DeletePostController = async (req, res) => {
    try {
        const postId = req.params.postId;
        await DeletePostService(postId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
