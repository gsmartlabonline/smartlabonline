require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Lesson = require("./models/Lesson");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected 🚀"))
  .catch((err) => console.log("DB Error:", err));

app.get("/", (req, res) => {
  res.send("Backend + Database running 🚀");
});

app.post("/api/lessons", async (req, res) => {
  try {
    const lesson = new Lesson(req.body);
    await lesson.save();
    res.status(201).json({
      message: "Lesson saved successfully",
      lesson
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.get("/api/lessons", async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});