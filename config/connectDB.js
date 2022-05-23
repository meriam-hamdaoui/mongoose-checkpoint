//4. resuire mongoose for the DB connexion
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/personDB");
    console.log("DB connexion successeded");
  } catch (err) {
    console.error("DB connexion failed => " + err);
  }
};

module.exports = connectDB;
