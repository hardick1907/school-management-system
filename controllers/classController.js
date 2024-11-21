import Class from '../models/Class.js';
import Teacher from '../models/Teacher.js';


export const createClass = async (req, res) => {
  try {
    const { name, teacherId } = req.body;

    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ success: false, message: 'Teacher not found' });
    }

    const newClass = new Class({ name, teacherId, studentCount: 0 });
    await newClass.save();

    res.status(201).json({ success: true, newClass });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


export const getAllClasses = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const classes = await Class.find()
      .populate('teacherId')
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ success: true, classes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const updateClass = async (req, res) => {
  const { id } = req.params;
  const { name, teacherId } = req.body;

  try {
    const classToUpdate = await Class.findById(id);
    if (!classToUpdate) {
      return res.status(404).json({ success: false, message: 'Class not found' });
    }

    if (teacherId) {
      const teacher = await Teacher.findById(teacherId);
      if (!teacher) {
        return res.status(404).json({ success: false, message: 'Teacher not found' });
      }
    }

    classToUpdate.name = name || classToUpdate.name;
    classToUpdate.teacherId = teacherId || classToUpdate.teacherId;

    await classToUpdate.save();
    res.json({ success: true, classToUpdate });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
