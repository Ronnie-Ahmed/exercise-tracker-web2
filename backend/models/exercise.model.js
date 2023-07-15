const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true, minLength: 3 },
    description: { type: String, required: true, trim: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);
const Exercise = mongoose.model("Exercise", Schema);
module.exports = Exercise;
