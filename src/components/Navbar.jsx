import logo from '../assets/logo-smait.png';
import { Link, NavLink } from 'react-router-dom';

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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/AddStudent" className="text-black">
              Add Student
            </NavLink>
          </li>
          <li>
            <NavLink to="/AllStudents" className="text-green">
              <button className="text-green btn-outline-green"> All Students</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
