import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import AllStudents from './pages/Allstudents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentDetails from './components/StudentDetails';
import './index.css';
import './App.css';

// import StudentDetails from './components/StudentDetails';
// import CreateForm from './pages/CreateForm';

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
            <Route path="/create-student" element={<AddStudent />} />
            <Route path="/students" element={<AllStudents />} />
            {<Route path="/students/:id" element={<StudentDetails />} />}
            {<Route path="/students" element={<StudentList />} />}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
