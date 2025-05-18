import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import AllStudents from './pages/AllStudents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentDetails from './pages/StudentDetails';
import './index.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<AllStudents />} />
            <Route path="/create-student" element={<AddStudent />} />
            <Route path="/students/:id" element={<StudentDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
