import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Custom Chatbot Solutions",
      description: "Intelligent conversational AI agents tailored to your business needs with advanced NLP capabilities.",
      icon: "🤖"
    },
    {
      title: "Web Services & APIs",
      description: "Scalable cloud infrastructure and API integrations for seamless digital transformation.",
      icon: "🌐"
    },
    {
      title: "AI Consulting",
      description: "Strategic guidance and implementation support for your AI transformation journey.",
      icon: "💡"
    }
  ];

  return (
    <section className="section" id="services">
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="btn btn-outline">Get Started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;