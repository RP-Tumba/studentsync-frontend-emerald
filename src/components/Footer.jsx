import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import "../Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="Footer-main">
        <div className="left-footer-content">
          <h3>STUDENTSYNC MANAGEMENT APP</h3>
          <p className="paragraph1">Student management platform</p>
          <br />
          <h4>Our Address</h4>
          <div className="location-text">
            <IoLocationSharp />
            <p className="paragraph2">
              {" "}
              Gasabo District, Kinyinya Sector Murama Cell, Rusenyi Village
              <br />
              KG 29 Ave 16, Kigali, Rwanda
            </p>{" "}
            <br />
          </div>
          <div className="clock-text">
            <FaClock />
            <p> Working Hours: Monday - Friday 08:00 - 17:00</p>
          </div>
        </div>

        <div className="middle-footer-content">
          <h4>Contact us</h4>
          <p className="paragraph3">
            <MdEmail /> info@thegymcapstone.rw
          </p>
          <p className="paragraph4">
            {" "}
            <FaPhone className="phone-icon" /> 0788-322-223
          </p>
        </div>

        <div className="right-footer-content">
          <h4>Social media</h4>
          <ul>
            <li>
              <FaInstagram />
            </li>
            <li>
              {" "}
              <FaFacebook />
            </li>
            <li>
              {" "}
              <FaYoutube />{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copy-content">
        <p> &copy; Copyright Students. All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
