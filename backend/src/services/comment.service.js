import { Comment } from '../models/comment.model.js';
import { redisClient } from '../config/redis.js';
import { ApiError } from '../utils/ApiError.js';

const CACHE_TTL = 60 * 5; 

export class CommentService {
  async getComments(videoId, { page, limit, sort }) {
    const cacheKey = `comments:${videoId}:${page}:${limit}:${sort}`;
    
    const cachedComments = await redisClient.get(cacheKey);
    if (cachedComments) {
      return JSON.parse(cachedComments);
    }

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

    await redisClient.setex(cacheKey, CACHE_TTL, JSON.stringify(result));

    return result;
  }

  async addComment({ content, videoId, userId }) {
    const comment = await Comment.create({
      content,
      video: videoId,
      author: userId
    });

    await this.invalidateVideoCache(videoId);

    return comment.populate('author', 'firstName lastName');
  }

  async deleteComment(commentId, userId) {
    const comment = await Comment.findOne({ _id: commentId, author: userId });
    
    if (!comment) {
      throw new ApiError('Nie znaleziono komentarza', 404);
    }

    await comment.deleteOne();
    await this.invalidateVideoCache(comment.video);
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
    await this.invalidateVideoCache(comment.video);

    return comment.populate('replies.author', 'firstName lastName');
  }

  private async invalidateVideoCache(videoId) {
    const keys = await redisClient.keys(`comments:${videoId}:*`);
    if (keys.length) {
      await redisClient.del(keys);
    }
  }
}

export const commentService = new CommentService(); 