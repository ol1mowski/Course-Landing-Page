import { Router } from 'express';
import { commentController } from '../controllers/comment.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { validateComment } from '../middleware/validation.middleware.js';

const router = Router();

router.get(
  '/video/:videoId',
  verifyToken,
  commentController.getComments
);

router.post(
  '/video/:videoId',
  verifyToken,
  validateComment,
  commentController.addComment
);

router.post(
  '/:commentId/reply',
  verifyToken,
  validateComment,
  commentController.addReply
);

router.delete(
  '/:commentId',
  verifyToken,
  commentController.deleteComment
);

router.patch(
  '/:commentId',
  verifyToken,
  commentController.updateComment
);

export default router; 