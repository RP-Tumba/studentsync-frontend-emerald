import logo from '../assets/logo-smait.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <div className="nav-image">
          <img src={logo} alt="" />
        </div>
        <div className="brand-title">
          <h1 className="text-gray">STUDENTSYNC</h1>
        </div>
      </div>

      <div className="nav-right">
        <ul>
          <li>
            <Link to="/" className="text-green">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-student" className="text-black">
              Add Student
            </Link>
          </li>
          <li>
            <Link to="/students" className="text-green">
              <button className="text-green btn-outline-green"> All Students</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
