# Expense Management System - Backend
  This is the backend of the Expense Management System, built with Node.js, Express.js, and MongoDB.

# Features
User authentication using JWT
CRUD operations for managing expenses
Secure routes with middleware for token verification
Password reset functionality
CORS support for frontend integration

# Tech Stack
Node.js (Runtime environment)
Express.js (Framework for building the API)
MongoDB (NoSQL database for storing data)
Mongoose (MongoDB object modeling for Node.js)
JWT (JSON Web Tokens for authentication)
bcryptjs (For password hashing)


# Prerequisites
Node.js
npm
MongoDB


# Installation

Clone the repository
git clone <backend-repo-url>
Navigate into the project directory


cd backend
Install dependencies


npm install
Set up environment variables

Create a .env file in the root directory and add the following:


MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
Run the server


npm start
The backend server should now be running on http://localhost:5000.

# Folder Structure

src/
|-- config/        # Configuration (e.g., database connection)
|-- controllers/   # Controller logic for handling requests (auth, expenses)
|-- models/        # Mongoose models (User, Expense)
|-- routes/        # API routes (authRoutes, expenseRoutes)
|-- middleware/    # Custom middlewares (JWT verification)
|-- server.js      # Entry point to start the server


# API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user
POST	/api/auth/reset	Reset user password
GET	/api/expenses/	Get all expenses
POST	/api/expenses/	Add a new expense
PUT	/api/expenses/
Update an existing expense
DELETE	/api/expenses/
Delete an expense


# Scripts
npm start - Run the server
npm run dev - Run the server in development mode (using nodemon)
