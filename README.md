# MERN Bookstore Application
 # Project Overview
This is a full-featured bookstore application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. Users can register, log in, and manage their books. The application includes features such as adding, updating, and deleting books, along with user authentication and personalized book lists. Each user can only view and manage their own books.

# Features
User Authentication: Secure user registration and login using JWT (JSON Web Token) for session management.
Add Books: Users can add new books with details like title, author, price, description, and category.
Update Books: Users can edit details of existing books.
Delete Books: Users can delete books from their personal collection.
Personalized Book List: Each user sees only the books they have added.
Responsive Design: The application is designed to work on various screen sizes using Tailwind CSS.

# Tech Stack
Frontend: React.js with Tailwind CSS for responsive UI
Backend: Node.js with Express.js
Database: MongoDB
Authentication: JWT (JSON Web Tokens)

# Installation
# Prerequisites
Node.js installed
MongoDB database connection

# Usage
Registration & Login: Users need to register and log in before managing their books.
Add a Book: After logging in, users can add books with the form on the dashboard.
Edit/Delete Books: Users can edit or delete any book from their personal book list.
Book List: The dashboard displays all books added by the logged-in user.

# Folder Structure
client: Contains the React frontend code
src/components: All reusable React components such as forms and lists.
src/pages: Main pages like Login, Register, Dashboard.
server: Contains the Node.js backend
models: Mongoose models like User and Book.
routes: API routes for authentication and book management.
controllers: Functions to handle requests for books and authentication.

# Deployed URLS
 Client - https://mernbookclient.netlify.app
 Server - https://bookserver-b2q7.onrender.com

 # Run Application
  Client - npm run build
  Server - npm start , http://localhost: 3000
 




