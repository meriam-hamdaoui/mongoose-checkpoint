//6. require mongoose
const mongoose = require("mongoose");

//7.create a schema to specify the shape of our document within the document
const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "a name is required here"],
  },
  age: Number,
  email: {
    type: String,
    required: [true, "an email is required here"],
    unique: true,
    lowercase: true,
  },
  favouritFoods: [String],
  date: {
    type: Date,
    default: Date.now,
  },
});
//8.create and export the person model with the mongoose constructor : mongoose.model
module.exports = mongoose.model("person", personSchema);
