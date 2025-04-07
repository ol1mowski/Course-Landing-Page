import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLoginAt: {
    type: Date,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (_, ret) => {
      delete ret.password;
      delete ret.__v;
      return ret;
    },
  },
  collection: 'Students.Students'
});

studentSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

studentSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const Student = mongoose.model('Student', studentSchema, 'Students'); 