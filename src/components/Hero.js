import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" id="hero">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <div className="hero-text">
            <div className="hero-title">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="hero-main-title"
              >
                AGAAMI
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="hero-sub-title"
              >
                AI LABS
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="hero-subtitle"
            >
              Shaping the Future with Intelligent Technology Solutions
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="hero-description"
            >
              Pioneering next-generation AI solutions that transform data into actionable intelligence. 
              We're building the future of human-machine collaboration.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="hero-buttons"
            >
              <a href="#products" className="btn btn-primary">Explore Products</a>
              <a href="#contact" className="btn btn-outline">Join Our Journey</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hero-visual"
          >
            <div className="logo-cube">
              <div className="cube-face front">
                <img src="/final%20logo.jpeg" alt="Agaami AI Labs" className="logo-image" />
              </div>
              <div className="cube-face back">
                <img src="/final%20logo.jpeg" alt="Agaami AI Labs" className="logo-image" />
              </div>
              <div className="cube-face left">
                <img src="/final%20logo.jpeg" alt="Agaami AI Labs" className="logo-image" />
              </div>
              <div className="cube-face right">
                <img src="/final%20logo.jpeg" alt="Agaami AI Labs" className="logo-image" />
              </div>
              <div className="cube-face top">
                <img src="/final%20logo.jpeg" alt="Agaami AI Labs" className="logo-image" />
              </div>
              <div className="cube-face bottom">
                <img src="/final%20logo.jpeg" alt="Agaami AI Labs" className="logo-image" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;