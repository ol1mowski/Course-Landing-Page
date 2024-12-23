import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 1000
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
    index: true
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video',
    required: true,
    index: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }],
  replies: [{
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  isEdited: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (_, ret) => {
      delete ret.__v;
      return ret;
    }
  }
});

// Indeksy dla wydajnych zapytań
commentSchema.index({ video: 1, createdAt: -1 });
commentSchema.index({ author: 1, createdAt: -1 });

// Middleware do walidacji
commentSchema.pre('save', function(next) {
  if (this.replies.length > 50) {
    next(new Error('Maksymalna liczba odpowiedzi to 50'));
  }
  next();
});

export const Comment = mongoose.model('Comment', commentSchema, 'Comments'); 