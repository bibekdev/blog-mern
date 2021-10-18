const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
