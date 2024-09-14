const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const connectDB = require("./database/db.js");
require('dotenv').config();

const app = express();
app.use(cors( 
    "*"
));
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use("/api/auth", authRoutes)

 const PORT = process.env.PORT || 3000

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
