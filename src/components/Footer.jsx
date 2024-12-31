import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__section">
            <h3>HealthCare</h3>
            <p>Providing quality healthcare services with compassion and excellence since 1995.</p>
          </div>
          
          <div className="footer__section">
            <h4>Contact</h4>
            <div className="footer__contact">
              <p><FaPhone /> (555) 123-4567</p>
              <p><FaEnvelope /> info@healthcare.com</p>
              <p><FaMapMarkerAlt /> 123 Medical Center Dr</p>
            </div>
          </div>
          
          <div className="footer__section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/doctors">Our Doctors</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          
          <div className="footer__section">
            <h4>Follow Us</h4>
            <div className="footer__social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; 2024 HealthCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;