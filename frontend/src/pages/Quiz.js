import { useState } from "react";

function Quiz() {
  const [score, setScore] = useState(null);

  const submitQuiz = () => {
    setScore(8);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Science Quiz</h1>

      <div style={{ marginBottom: "20px" }}>
        <p>1. What is H2O?</p>
        <button>Water</button>
        <button>Oxygen</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <p>2. Earth is the ___ planet from the sun.</p>
        <button>3rd</button>
        <button>4th</button>
      </div>

      <button onClick={submitQuiz}>Submit Test</button>

      {score !== null && (
        <h2 style={{ marginTop: "20px" }}>
          Your Score: {score}/10
        </h2>
      )}
    </div>
  );
}

export default Quiz;