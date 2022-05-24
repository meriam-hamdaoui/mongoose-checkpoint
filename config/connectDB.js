require("dotenv").config();
//4. resuire mongoose for the DB connexion
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connexion successeded");
  } catch (err) {
    console.error("DB connexion failed => " + err);
  }
};

module.exports = connectDB;
