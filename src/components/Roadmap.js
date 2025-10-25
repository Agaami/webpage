import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const milestones = [
    {
      quarter: "Q1 2025",
      title: "Product Development Phase",
      description: "Core platform development and feature implementation for QuantumDash and Security Suite"
    },
    {
      quarter: "Q2 2025",
      title: "Alpha Testing",
      description: "Internal testing and initial feature validation with select partners"
    },
    {
      quarter: "Q3 2025",
      title: "Beta Version Release",
      description: "Public beta launch of QuantumDash and Secure CKYC & Data Privacy Tools"
    },
    {
      quarter: "Q4 2025",
      title: "Client Onboarding",
      description: "Early adopter program and enterprise partnerships implementation"
    },
    {
      quarter: "Q1 2026",
      title: "Final Product Launch",
      description: "Full commercial release with advanced AI features and enterprise support"
    },
    {
      quarter: "2026+",
      title: "Global Expansion",
      description: "International market entry and expansion of product ecosystem"
    }
  ];

  return (
    <section className="section" id="roadmap">
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gradient-text"
        >
          Our Roadmap
        </motion.h2>
        <div className="roadmap-timeline">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.quarter}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="roadmap-item"
            >
              <div className="roadmap-item-content">
                <span className="quarter">{milestone.quarter}</span>
                <h4>{milestone.title}</h4>
                <p>{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;