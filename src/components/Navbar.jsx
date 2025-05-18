import { useState, useEffect } from 'react';
import logo from '../assets/logo-smait.png';
import { Link, NavLink } from 'react-router-dom';
import { Add, Book, Home, Menu } from '@mui/icons-material';

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
    <div className="nav">
      <div className="d-flex justify-around items-center px-2 py-2">
        <div className="brand">
          <div className="nav-image">
            <img src={logo} alt="" />
          </div>
          <div className={`brand-title ${navData ? 'hidden' : ''}`}>
            <h1 className="text-gray">STUDENTSYNC</h1>
          </div>
        </div>
        <button id="menu" onClick={navMenu}>
          <Menu />
        </button>

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

      {navData && (
        <div className="small-nav px-2 py-2">
          <Link to="/" className="d-flex gap-2 py-2 items-center">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="">
              <h1 className="title">STUDENTSYNC</h1>
            </div>
          </Link>
          <hr />
          <ul className="py-2">
            <li>
              <NavLink to="/" className="text-black d-flex items-center">
                <Home /> <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create-student" className="text-black d-flex items-center">
                <Add /> <span> Add Student</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/students" className="text-black d-flex items-center">
                <Book /> <span>All Students</span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
