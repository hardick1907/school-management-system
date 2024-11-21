import express from 'express';
import { createClass, getAllClasses, updateClass, deleteClass } from '../controllers/classController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/', protect, createClass);
router.get('/', protect, getAllClasses);
router.put('/:id', protect, updateClass);
router.delete('/:id', protect, deleteClass);

export default router;
