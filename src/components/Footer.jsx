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
    <footer>
      <div className="footer">
        <div className="footer__brand">
          <div>
            <h3 className="footer__brand-title">STUDENTSYNC MANAGEMENT APP</h3>
            <p className="footer__brand-tagline">Student management platform</p>
          </div>
          <h4 className="footer__heading">Our Address</h4>
          <div className="footer__info-item">
            <LocationOnOutlined size={20} />

            <p className="footer__text-small">
              Gasabo District, Kinyinya Sector Murama Cell, Rusenyi Village KG 29 Ave 16, Kigali,
              Rwanda
            </p>
          </div>
          <div className="footer__info-item">
            <AccessTime size={14} />
            <p> Working Hours: Monday - Friday 08:00 - 17:00</p>
          </div>
        </div>

        <div className="footer__contact">
          <h4 className="footer__heading">Contact us</h4>
          <p className="footer__info-item">
            <EmailOutlined /> info@thegymcapstone.rw
          </p>
          <p className="footer__info-item">
            <PhoneEnabledOutlined className="footer__contact-icon--rotated" /> 0788-322-223
          </p>
        </div>

        <div className="footer__social">
          <h4 className="footer__heading">Social media</h4>
          <ul className="footer__social-list">
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

      <div className="footer__copyright">
        <hr />

        <p className="footer__copyright"> &copy; Copyright Students. All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
