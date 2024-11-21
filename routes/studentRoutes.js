
import express from 'express';
import { addStudent, getAllStudents } from '../controllers/studentController.js';
import { upload } from '../middleware/uploadMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, upload.single('profileImage'), addStudent); 
router.get('/', protect, getAllStudents);

export default router;
