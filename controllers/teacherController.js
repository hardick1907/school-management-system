import Teacher from '../models/Teacher.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';


export const addTeacher = async (req, res) => {
  try {
    const { name, email, subject } = req.body;
    let profileImageUrl = null;

    
    if (req.file) {
      profileImageUrl = await uploadToCloudinary(req.file, 'teachers');
    }

    const teacher = await Teacher.create({ name, email, subject, profileImageUrl });
    res.status(201).json({ success: true, teacher });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};



export const getAllTeachers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const teachers = await Teacher.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ success: true, teachers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await Teacher.findById(id);

    if (!teacher) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }

    res.json({ success: true, teacher });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
