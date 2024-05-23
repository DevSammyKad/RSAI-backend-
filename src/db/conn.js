const mongoose = require('mongoose');
require('dotenv').config();

// 'mongodb+srv://sameerkad2001:nWWpEAE6vrdjdatY@cluster0.xjm676f.mongodb.net/rsai'

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_COMPASS_DB_URI;
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB ${mongoose.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
