import { useState } from "react";
import axios from "axios";

function TeacherDashboard() {
  const [chapter, setChapter] = useState("");
  const [video, setVideo] = useState("");
  const [notes, setNotes] = useState("");
  const [lessons, setLessons] = useState([]);

 const addLesson = async () => {
  if (!chapter || !video || !notes)  {
  alert("Please fill all fields");
    return;
  } 
  const newLesson = {
    chapter,
    video,
    notes
  };

  try {
    await axios.post(
      "http://smartlabonline-backend-production.up.railway.app/api/lessons",
      newLesson
    );

    setLessons([...lessons, newLesson]);

    setChapter("");
    setVideo("");
    setNotes("");

    alert("Lesson saved to database 🚀");
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Teacher Dashboard</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px"
        }}
      >
        <h3>Add New Chapter</h3>

        <input
          type="text"
          placeholder="Chapter Title"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Video URL"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Notes PDF URL"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <br /><br />

        <button onClick={addLesson}>Add Chapter</button>
      </div>

      <h2>Uploaded Chapters</h2>

      {lessons.map((lesson, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px"
          }}
        >
          <h3>{lesson.chapter}</h3>
          <p>🎥 {lesson.video}</p>
          <p>📄 {lesson.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default TeacherDashboard;