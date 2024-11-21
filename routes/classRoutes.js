import express from 'express';
import { createClass, getAllClasses, updateClass } from '../controllers/classController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createClass);
router.get('/', protect, getAllClasses);
router.put('/:id', protect, updateClass);

export default router;
