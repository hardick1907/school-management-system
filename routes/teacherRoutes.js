import express from 'express';
import {
  addTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teacherController.js';
import { upload } from '../middleware/uploadMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, upload.single('profileImage'), addTeacher);
router.get('/', protect, getAllTeachers);
router.get('/:id', protect, getTeacherById);
router.put('/:id', protect, upload.single('profileImage'), updateTeacher);
router.delete('/:id', protect, deleteTeacher);


export default router;
