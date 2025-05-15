import {
  LocationOnOutlined,
  AccessTime,
  EmailOutlined,
  PhoneEnabledOutlined,
  Instagram,
  FacebookOutlined,
} from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';

import '../Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer-main">
        <div className="left-footer-content">
          <div>
            <h3>STUDENTSYNC MANAGEMENT APP</h3>
            <p className="paragraph1">Student management platform</p>
          </div>
          <h4>Our Address</h4>
          <div className="address">
            <LocationOnOutlined size={20} />

            <p className="text-sm">
              Gasabo District, Kinyinya Sector Murama Cell, Rusenyi Village KG 29 Ave 16, Kigali,
              Rwanda
            </p>
          </div>
          <div className="address">
            <AccessTime size={14} />
            <p> Working Hours: Monday - Friday 08:00 - 17:00</p>
          </div>
        </div>

        <div className="middle-footer-content">
          <h4>Contact us</h4>
          <p className="address">
            <EmailOutlined /> info@thegymcapstone.rw
          </p>
          <p className="address">
            <PhoneEnabledOutlined className="phone-icon" /> 0788-322-223
          </p>
        </div>

        <div className="right-footer-content">
          <h4>Social media</h4>
          <ul>
            <li>
              <Instagram />
            </li>
            <li>
              <FacebookOutlined />
            </li>
            <li>
              <YouTubeIcon />
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
