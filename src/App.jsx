import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import AllStudents from './pages/Allstudents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentList from './pages/StudentList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-students" element={<AddStudent />} />
            <Route path="/students" element={<AllStudents />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
