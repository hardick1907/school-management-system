import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './config/db.js';
import studentRoutes from './routes/studentRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import classRoutes from './routes/classRoutes.js';
import adminRoutes from './routes/adminRoutes.js'; // Import admin routes
import { errorHandler } from './middleware/errorHandler.js';



// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON body

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/admin', adminRoutes); // Add admin routes here

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
