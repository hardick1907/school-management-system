import mongoose from 'mongoose';

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    studentCount: { type: Number, default: 0 },
    deleted: { type: Boolean, default: false }, 
  },
  { timestamps: true }
);

export default mongoose.model('Class', classSchema);
