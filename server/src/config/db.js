const mongoose = require("mongoose");
// const colors = require("colors");
require("dotenv").config();


const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  try {
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

