import { useEffect, useState } from "react";
import axios from "axios";

function CourseContent() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/lessons"
      );
      setChapters(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Course Content</h1>

      {chapters.map((chapter, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px"
          }}
        >
          <h2>{chapter.chapter}</h2>
          <p>🎥 {chapter.video}</p>
          <p>📄 {chapter.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseContent;