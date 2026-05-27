
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    teamLead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    status: {
      type: String,
      enum: ['active', 'closed'],
      default: 'active',
    },
    closedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Index for quickly finding all projects by a team lead
projectSchema.index({ teamLead: 1 });
// Index for finding projects a user is a member of
projectSchema.index({ members: 1 });

export default mongoose.model('Project', projectSchema);