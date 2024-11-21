import express from 'express';
import { addStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } from '../controllers/studentController.js';
import { upload } from '../middleware/uploadMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/', protect, upload.single('profileImage'), addStudent);
router.get('/', protect, getAllStudents);
router.get('/:id', protect, getStudentById);
router.put('/:id', protect, upload.single('profileImage'), updateStudent);
router.delete('/:id', protect, deleteStudent);

export default router;
