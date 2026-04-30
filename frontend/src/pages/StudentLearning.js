import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentLearning = () => {
  const [lesson, setLesson] = useState(null);
  const [currentPara, setCurrentPara] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    axios
      .get("https://smartlabonline-backend-production.up.railway.app/api/lessons")
      .then((res) => 
      const validLesson = res.data.find(
        (l) => l.paragraphs && l.paragraphs.length > 0
      );

    setLesson(validLesson);
  }, []);

  if (!lesson) return <p>Loading...</p>;

  if (!lesson.paragraphs || lesson.paragraphs.length === 0) {
  return <p>No paragraphs available</p>;
  }

  const paragraph = lesson.paragraphs[currentPara];
  if (!paragraph || !paragraph.questions || paragraph.questions.length === 0) {
  return <p>No questions available</p>;
  }

  const question = paragraph.questions[0];

  const checkAnswer = () => {
    if (selectedAnswer === question.correctAnswer) {
      setResult("Correct ✅");
    } else {
      setResult("Wrong ❌");
    }
  };

  const nextParagraph = () => {
    setCurrentPara(currentPara + 1);
    setSelectedAnswer("");
    setResult("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{lesson.chapter}</h2>

      <p>{paragraph.text}</p>

      <h4>{question.question}</h4>

      {question.options.map((opt, index) => (
        <div key={index}>
          <input
            type="radio"
            name="answer"
            value={opt}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          />
          {opt}
        </div>
      ))}

      <br />

      <button onClick={checkAnswer}>Submit</button>

      <p>{result}</p>

      <button onClick={nextParagraph}>Next</button>
    </div>
  );
};

export default StudentLearning;