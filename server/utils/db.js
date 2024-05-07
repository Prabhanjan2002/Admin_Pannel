const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

//6hvXuI7v6gvyLyHI---password
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
