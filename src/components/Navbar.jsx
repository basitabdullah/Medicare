import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <motion.div
          className="navbar__logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Medicare
        </motion.div>
        <div className={`navbar__links ${isOpen ? 'open' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/services" 
              className={location.pathname === '/services' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Services
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/doctors" 
              className={location.pathname === '/doctors' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Doctors
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/diagnostics" 
              className={location.pathname === '/diagnostics' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Diagnostics
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </motion.div>
        </div>
        <div className="navbar__toggle" onClick={toggleMenu}>
          <FaBars className="navbar__toggle-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;