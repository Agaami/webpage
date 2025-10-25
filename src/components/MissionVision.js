import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="section" id="mission">
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Vision & Mission
        </motion.h2>
        <div className="mission-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card"
          >
            <h3>🚀 Our Vision</h3>
            <p>
              To create a future where artificial intelligence seamlessly augments human capabilities, 
              making advanced data intelligence accessible to every organization regardless of size or technical expertise.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card"
          >
            <h3>🎯 Our Mission</h3>
            <p>
              To develop cutting-edge AI solutions that democratize data analytics, enhance cybersecurity, 
              and empower businesses to make data-driven decisions with unprecedented speed and accuracy.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="values-section"
        >
          <h3>Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Innovation First</h4>
              <p>Pushing boundaries in AI research and development</p>
            </div>
            <div className="value-item">
              <h4>Security by Design</h4>
              <p>Building trust through robust security frameworks</p>
            </div>
            <div className="value-item">
              <h4>Future Ready</h4>
              <p>Anticipating and adapting to technological evolution</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;