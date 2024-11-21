import Student from '../models/Student.js';
import Class from '../models/Class.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';


export const addStudent = async (req, res) => {
  try {
    const { name, email, classId } = req.body;
    const profileImageUrl = req.file ? await uploadToCloudinary(req.file, 'students') : null;

    const student = await Student.create({ name, email, classId, profileImageUrl });
    res.status(201).json({ success: true, student });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


export const getAllStudents = async (req, res) => {
  const { classId, page = 1, limit = 10 } = req.query;

  const query = { deleted: false };
  if (classId) query.classId = classId;

  try {
    const students = await Student.find(query)
      .populate('classId')
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ success: true, students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getStudentById = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id).populate('classId');
    if (!student || student.deleted) {
      return res.status(404).json({ success: false, message: 'Student not found or deleted' });
    }
    res.json({ success: true, student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email, classId } = req.body;
  let profileImageUrl;

  if (req.file) {
    profileImageUrl = await uploadToCloudinary(req.file, 'students');
  }

  try {
    const student = await Student.findById(id);
    if (!student || student.deleted) {
      return res.status(404).json({ success: false, message: 'Student not found or deleted' });
    }

    student.name = name || student.name;
    student.email = email || student.email;
    student.classId = classId || student.classId;
    student.profileImageUrl = profileImageUrl || student.profileImageUrl;

    await student.save();
    res.json({ success: true, student });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id);
    if (!student || student.deleted) {
      return res.status(404).json({ success: false, message: 'Student not found or already deleted' });
    }

    student.deleted = true;
    await student.save();
    res.json({ success: true, message: 'Student soft deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
