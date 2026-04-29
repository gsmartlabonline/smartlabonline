function Dashboard() {
  const subjects = [
    { name: "Mathematics", progress: "40%" },
    { name: "Science", progress: "65%" },
    { name: "English", progress: "30%" },
    { name: "Social Science", progress: "50%" }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Student Dashboard</h1>
      <p style={{ textAlign: "center" }}>
        Welcome to Mohit Success System
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {subjects.map((subject, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h2>{subject.name}</h2>
            <p>Progress: {subject.progress}</p>
            <p>📘 Chapter 1</p>
            <p>📘 Chapter 2</p>
            <p>📝 Revision Test</p>
            <button>Start Learning</button>
            <button onClick={() => window.location.href='/course-content'}>
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;