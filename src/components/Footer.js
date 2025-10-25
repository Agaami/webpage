import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="footer-main"
        >
          <div className="footer-brand">
            <h3>AGAAMI AI LABS</h3>
            <p>Building the Future of Intelligent Technology</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Products</h4>
              <a href="#products">QuantumDash</a>
              <a href="#products">Security Suite</a>
              <a href="#services">Services</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#mission">About</a>
              <a href="#team">Team</a>
              <a href="#roadmap">Roadmap</a>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <a href="#contact">Partnership</a>
              <a href="#contact">Careers</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="footer-bottom"
        >
          <p>&copy; 2024 Agaami AI Labs. All rights reserved. | Mumbai, India</p>
          <p>Building the future, one algorithm at a time.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;