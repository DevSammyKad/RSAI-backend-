const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const MONGO_COMPASS_URI = process.env.MONGO_COMPASS_DB_URI;
  const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_DB_URI;

  try {
    await mongoose.connect(MONGO_ATLAS_URI);

    const dbName = mongoose.connection.name;
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
    console.log('Database name:', dbName);

    // Fetch collection names
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    collections.forEach((collection) => {
      console.log('Collections:', collection.name);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
