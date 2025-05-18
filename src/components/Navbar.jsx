import { useState, useEffect } from 'react';
import logo from '../assets/logo-smait.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navData, setNavData] = useState(false);
  const navMenu = () => {
    setNavData(!navData ? true : false);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

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
      <div className="nav-display-manu" onClick={navMenu}>
        &#9776;
      </div>
      <div className="nav-right">
        <ul className={navData ? 'active-nav' : ''}>
          <li>
            <NavLink to="/" className="text-black">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-student" className="text-black">
              Add Student
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" className="text-black">
              All Students
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
