// Teacher route
import express from 'express';
import { addTeacher, getAllTeachers, getTeacherById } from '../controllers/teacherController.js';
import { upload } from '../middleware/uploadMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, upload.single('profileImage'), addTeacher); // Correctly handle teacher image upload
router.get('/', protect, getAllTeachers);
router.get('/:id', protect, getTeacherById);

export default router;
