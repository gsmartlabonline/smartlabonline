function ParentDashboard() {
  const progressData = [
    { subject: "Mathematics", progress: "40%", score: "8/10" },
    { subject: "Science", progress: "65%", score: "9/10" },
    { subject: "English", progress: "30%", score: "7/10" },
    { subject: "Social Science", progress: "50%", score: "8/10" }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Parent Dashboard</h1>
      <p style={{ textAlign: "center" }}>
        Monitor your child's academic progress
      </p>

      <div style={{ marginTop: "30px" }}>
        {progressData.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "15px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{item.subject}</h3>
            <p>Progress: {item.progress}</p>
            <p>Last Score: {item.score}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px"
        }}
      >
        <h3>📅 Attendance</h3>
        <p>92%</p>

        <h3>💬 Teacher Note</h3>
        <p>
          Mohit is improving well in Science and needs more revision in English.
        </p>
      </div>
    </div>
  );
}

export default ParentDashboard;