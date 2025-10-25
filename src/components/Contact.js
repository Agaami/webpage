import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: '',
      message: ''
    });
  };

  return (
    <section className="section" id="contact">
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Our Journey
        </motion.h2>
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-info"
          >
            <h3>Get in Touch</h3>
            <p>We're looking for visionary partners, early adopters, and talented individuals to join us in building the future of AI.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h4>🚀 For Partnerships</h4>
                <p>Explore collaboration opportunities and early access programs</p>
              </div>
              <div className="contact-method">
                <h4>💼 For Businesses</h4>
                <p>Learn how our solutions can transform your operations</p>
              </div>
              <div className="contact-method">
                <h4>👥 For Talent</h4>
                <p>Join our team of AI innovators and problem solvers</p>
              </div>
            </div>

            <div className="company-info">
              <h4>Agaami AI Labs</h4>
              <p>Mumbai, India</p>
              <p>agaamiailabs@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-form-container"
          >
            <form onSubmit={handleSubmit} className="card contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                >
                  <option value="">I'm interested in...</option>
                  <option value="partnership">Partnership</option>
                  <option value="product">Product Information</option>
                  <option value="career">Career Opportunities</option>
                  <option value="investment">Investment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;