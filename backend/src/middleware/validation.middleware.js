import { z } from 'zod';

const commentSchema = z.object({
  content: z.string()
    .min(1, 'Treść komentarza jest wymagana')
    .max(1000, 'Komentarz może mieć maksymalnie 1000 znaków'),
});

export const validateComment = (req, res, next) => {
  try {
    commentSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: error.errors[0].message
      });
    }
    next(error);
  }
}; 