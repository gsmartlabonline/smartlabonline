const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String
});

const paragraphSchema = new mongoose.Schema({
  text: String,
  questions: [questionSchema]
});

const lessonSchema = new mongoose.Schema({
  chapter: String,
  paragraphs: [paragraphSchema]
});

module.exports = mongoose.model("Lesson", lessonSchema);