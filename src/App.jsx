import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentList from './pages/StudentList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>{<Route path="/StudentList" element={<StudentList />} />}</Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
