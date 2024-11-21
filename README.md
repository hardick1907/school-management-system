# School Management System API

A powerful and scalable backend for managing students, teachers, classes, and administrators in a school system. This Node.js application leverages Express, MongoDB, and Cloudinary to deliver a robust API for modern school operations.

---

## Features

- **Admin Management**: Register and login administrators with secure authentication.
- **Teacher Management**: CRUD operations for teachers, with support for profile images via Cloudinary.
- **Student Management**: Manage students, including soft deletion and profile image uploads.
- **Class Management**: Assign teachers to classes, update class details, and paginate results.
- **Soft Deletion**: Non-destructive data deletion for better audit trails.
- **Error Handling**: Centralized error handling middleware.
- **Authentication**: Secured routes with JSON Web Token (JWT) protection.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (Atlas or local)
- [Cloudinary Account](https://cloudinary.com/)
- `.env` file with the following keys:
  
  MONGO_URI=your_mongo_db_connection_string
  CLOUDINARY_CLOUD_NAME=your_cloud_name
  CLOUDINARY_API_KEY=your_api_key
  CLOUDINARY_API_SECRET=your_api_secret
  JWT_SECRET=your_jwt_secret
  PORT=5000

### Installation

1. Clone the repository:
   git clone https://github.com/hardick1907/school-management-system.git
2. Navigate to the project directory:
   cd school-management-system
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev/ nodemon index.js (if you have nodemon)

---

## API Endpoints

    ### Admin Routes

        | Method | Endpoint        | Description               |
        |--------|-----------------|---------------------------|
        | POST   | `/api/admin/register` | Register a new admin       |
        | POST   | `/api/admin/login`    | Login as an admin          |

    ### Teacher Routes

        | Method | Endpoint            | Description                 |
        |--------|---------------------|-----------------------------|
        | POST   | `/api/teachers`     | Add a new teacher           |
        | GET    | `/api/teachers`     | Get all teachers            |
        | GET    | `/api/teachers/:id` | Get a teacher by ID         |
        | PUT    | `/api/teachers/:id` | Update teacher details      |
        | DELETE | `/api/teachers/:id` | Soft delete a teacher       |

    ### Student Routes

        | Method | Endpoint            | Description                 |
        |--------|---------------------|-----------------------------|
        | POST   | `/api/students`     | Add a new student           |
        | GET    | `/api/students`     | Get all students            |
        | GET    | `/api/students/:id` | Get a student by ID         |
        | PUT    | `/api/students/:id` | Update student details      |
        | DELETE | `/api/students/:id` | Soft delete a student       |

    ### Class Routes

        | Method | Endpoint           | Description                     |
        |--------|--------------------|---------------------------------|
        | POST   | `/api/classes`     | Create a new class              |
        | GET    | `/api/classes`     | Get all classes with pagination |
        | PUT    | `/api/classes/:id` | Update class details            |
        | DELETE | `/api/classes/:id` | Soft delete a class             |

---

## Project Structure

- **`/controllers`**: Business logic for various models.
- **`/models`**: Mongoose schemas for Admin, Teacher, Student, and Class.
- **`/routes`**: API route definitions.
- **`/middleware`**: Authentication and file upload utilities.
- **`/utils`**: Helper functions for Cloudinary uploads.

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **File Storage**: Cloudinary
- **Middleware**: Multer for file uploads

---
