import Comment from '../models/comments.js';


export const CreateCommentService = async (issueId, authorId, content) => {
    const comment = await Comment.create({
        issue: issueId,
        author: authorId,
        content: content
    })
    return comment;
}

export const GetCommentsByPostIdService = async (issueId) => {
    const comments = await Comment.find({
        issue: issueId
    }).populate('author', 'name email role').sort({
        createdAt: 1
    });
    return comments;
}

export const DeleteCommentService = async (commentId) => {
    const comment = await Comment.findByIdAndUpdate(
        commentId,
        { content: 'comment deleted' },
        { new: true }
    );
    return comment;
}

export const UpdateCommentService = async (commentId, content) => {
    const comment = await Comment.findByIdAndUpdate(
        commentId,
        { content },
        { new: true, runValidators: true }
    );
    return comment;
}
