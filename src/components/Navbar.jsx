import logo from '../assets/logo-smait.png';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      {
        <div className="nav-main">
          <div className="nav-left">
            <div className="nav-image">

              <img src={logo} alt="" className='nav-log-image' />
            </div>
            <div className="nav-content">
              <p>STUDENTSYNC</p>
            </div>
          </div>
          <div className="nav-right">
            <ul>
              <li><Link to="/" className='Home-style'>Home</Link ></li>
              <li><Link to="/AddStudent" className='AddStudent-style'>Add Student</Link></li>
              <li><Link to="/AllStudents"><button className='AllStudents-style'>All Students</button></Link></li>
            </ul>
          </div>
        </div>
      }
    </div>
  )
};

export default Navbar;
