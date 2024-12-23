import { Comment } from '../models/comment.model.js';
import { ApiError } from '../utils/ApiError.js';

export class CommentService {
  async getComments(videoId, { page, limit, sort }) {
    const skip = (page - 1) * limit;
    const sortOrder = sort === 'desc' ? -1 : 1;

    const [comments, total] = await Promise.all([
      Comment.find({ video: videoId })
        .sort({ createdAt: sortOrder })
        .skip(skip)
        .limit(limit)
        .populate('author', 'firstName lastName')
        .populate('replies.author', 'firstName lastName')
        .lean(),
      Comment.countDocuments({ video: videoId })
    ]);

    const result = {
      comments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };

    return result;
  }

  async addComment({ content, videoId, userId }) {
    const comment = await Comment.create({
      content,
      video: videoId,
      author: userId
    });

    return comment.populate('author', 'firstName lastName');
  }

  async deleteComment(commentId, userId) {
    const comment = await Comment.findOne({ _id: commentId, author: userId });
    
    if (!comment) {
      throw new ApiError('Nie znaleziono komentarza', 404);
    }

    await comment.deleteOne();
  }

  async addReply(commentId, { content, userId }) {
    const comment = await Comment.findById(commentId);
    
    if (!comment) {
      throw new ApiError('Nie znaleziono komentarza', 404);
    }

    comment.replies.push({
      content,
      author: userId
    });

    await comment.save();

    return comment.populate('replies.author', 'firstName lastName');
  }
}

export const commentService = new CommentService(); 