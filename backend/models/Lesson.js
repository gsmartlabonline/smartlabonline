const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  chapter: String,
  video: String,
  notes: String
});

module.exports = mongoose.model("Lesson", lessonSchema);