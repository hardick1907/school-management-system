import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    subject: { type: String, required: true },
    profileImageUrl: { type: String },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Teacher', teacherSchema);
