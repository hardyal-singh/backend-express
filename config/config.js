const mongoose = require("mongoose");

const UserDatabaseConnection = () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("database Connection established");
    });
  } catch {
    console.log("database connection error");
  }
};

module.exports=UserDatabaseConnection;