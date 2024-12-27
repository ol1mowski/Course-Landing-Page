import { Comment } from '../models/comment.model.js';
import { commentService } from '../services/comment.service.js';
import { ApiError } from '../utils/ApiError.js';

export class CommentController {
  async getComments(req, res, next) {
    try {
      const { videoId } = req.params;
      const { page = 1, limit = 10, sort = 'desc' } = req.query;

      const comments = await commentService.getComments(videoId, {
        page: parseInt(page),
        limit: parseInt(limit),
        sort
      });

      res.status(200).json({
        success: true,
        data: comments
      });
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  }

  async addComment(req, res, next) {
    try {
      const { videoId } = req.params;
      const { content } = req.body;
      const userId = req.user.id;

      const comment = await commentService.addComment({
        content,
        videoId,
        userId
      });

      res.status(201).json({
        success: true,
        data: comment
      });
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  }

  async deleteComment(req, res, next) {
    try {
      const { commentId } = req.params;
      const userId = req.user.id;

      const comment = await Comment.findOne({ 
        _id: commentId,
        author: userId
      });
      
      if (!comment) {
        throw new ApiError('Nie znaleziono komentarza lub brak uprawnień', 404);
      }

      await comment.deleteOne();

      res.status(200).json({
        success: true,
        message: 'Komentarz został usunięty'
      });
    } catch (error) {
      next(new ApiError(error.message, error.statusCode || 500));
    }
  }

  async addReply(req, res, next) {
    try {
      const { commentId } = req.params;
      const { content } = req.body;
      const userId = req.user.id;

      const reply = await commentService.addReply(commentId, {
        content,
        userId
      });

      res.status(201).json({
        success: true,
        data: reply
      });
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  }

  async updateComment(req, res, next) {
    try {
      const { commentId } = req.params;
      const { content } = req.body;
      const userId = req.user.id;

      const comment = await Comment.findOne({ 
        _id: commentId,
        author: userId
      });
      
      if (!comment) {
        throw new ApiError('Nie znaleziono komentarza lub brak uprawnień', 404);
      }

      comment.content = content;
      await comment.save();

      res.status(200).json({
        success: true,
        data: comment
      });
    } catch (error) {
      next(new ApiError(error.message, error.statusCode || 500));
    }
  }
}

export const commentController = new CommentController(); 