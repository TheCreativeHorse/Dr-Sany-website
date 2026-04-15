import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-cols">
          <div className="footer-col">
            <h3 className="footer-logo">Dr Sany <span>Nutra</span></h3>
            <p className="footer-desc">
              Licensed Naturopathic Doctor focused on long-term wellness and personalized care in Calgary.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Consultation</Link></li>
              <li><Link to="/services">Lung Therapy</Link></li>
              <li><Link to="/services">Cupping Therapy</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact-info">
              <li><Phone size={16} /> 416-770-2442</li>
              <li><Mail size={16} /> drsany.info@gmail.com</li>
              <li><MapPin size={16} /> #208 6707 Elbow Drive SW, Calgary, AB</li>
            </ul>
          </div>
          
          <div className="footer-col footer-action">
            <h4 className="footer-heading">Ready to Start?</h4>
            <Link to="/contact" className="btn btn-primary footer-btn">Book Consultation</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dr Sany Nutra, ND. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
