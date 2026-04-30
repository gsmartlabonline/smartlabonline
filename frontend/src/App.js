import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import ParentDashboard from "./pages/ParentDashboard";
import CourseContent from "./pages/CourseContent";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentLearning from "./pages/StudentLearning";
function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Mohit Success System</h1>
      <h2>Smart Learning. Sustainable Future.</h2>
      <Link to="/login">
        <button>Student Login</button>
      </Link>
      <Link to="/parent-dashboard">
        <button style={{ marginLeft: "10px" }}>
          Parent Dashboard
        </button>
      </Link>
      <Link to="/teacher-dashboard">
        <button style={{ marginLeft: "10px" }}>
          Teacher Dashboard
        </button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/course-content" element={<CourseContent />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/learn" element={<StudentLearning />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;