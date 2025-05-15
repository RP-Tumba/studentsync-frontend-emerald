import { useState } from 'react';
import logo from '../assets/logo-smait.png';
import { Link, NavLink } from 'react-router-dom';
import { dark } from '@mui/material/styles/createPalette';
// import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {
  const [navData, setNavData] = useState(false)
  const navMenu = ()=>{
    setNavData(!navData ? true: false)
  }
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
           <div className='nav-display-manu' onClick={navMenu}>
            &#9776;
            {navData}
            </div>    
      <div className="nav-right">
        <ul className={navData ? "active-nav":""}>
          <li>
            <NavLink to="/" className="text-black">Home</NavLink >
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
