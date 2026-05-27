import {
    CreateCommentService,
    GetCommentsByPostIdService,
    DeleteCommentService,
    UpdateCommentService,
} from '../services/comments.js';

export const CreateCommentController = async (req, res) => {
    try {
        const {
            issue,
            author,

            content
        } = req.body;
        const comment = await CreateCommentService(issue || issueId, author || authorId, content);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const GetCommentsByPostIdController = async (req, res) => {
    try {
        const issueId = req.params.issueId;
        const comments = await GetCommentsByPostIdService(issueId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const DeleteCommentController = async (req, res) => {
    try {
        const commentId = req.params.commentId;
        await DeleteCommentService(commentId);
        res.status(200).json({
            message: "Comment deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message

        });
    }
}

export const UpdateCommentController = async (req, res) => {
    try {
        const commentId = req.params.commentId;
        const { content } = req.body;
        const comment = await UpdateCommentService(commentId, content);
        res.status(200).json(comment);

    } catch (error) {
        res.status(500).json({
            message: error.message

        });
    }
}
