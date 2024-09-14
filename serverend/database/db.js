const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const DB = process.env.DATABASE_URI;
    await mongoose.connect(DB, {});
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); 
  }
};

module.exports = connectDB;
