import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import "./App.css";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <StudentDetails />
        <main className="main-content">
          <Routes>{/* <Route path="/" element={<StudentList />} /> */}</Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
