import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      name: "QuantumDash",
      description: "Next-generation intelligent dashboard analytics platform with real-time data processing, predictive insights, and AI-powered business intelligence. Transform your raw data into actionable insights with our advanced analytics engine.",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Visualizations", "AI-powered Insights", "Automated Reporting", "Data Integration"],
      status: "In Development",
      link: "/quantumdash"
    },
    {
      name: "Secure CKYC & Data Privacy Tools",
      description: "Advanced cybersecurity suite featuring blockchain-verified Customer KYC, enterprise-grade data protection, and compliance automation. Ensure regulatory compliance while maintaining top-tier security standards.",
      features: ["Blockchain Verification", "End-to-end Encryption", "Compliance Automation", "Real-time Monitoring", "GDPR Ready", "Audit Trail"],
      status: "In Development",
      link: "/security"
    }
  ];

  return (
    <section className="section" id="products">
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gradient-text"
        >
          Our Products
        </motion.h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card product-card"
            >
              <h3>{product.name}</h3>
              <span className="status-badge">{product.status}</span>
              <p>{product.description}</p>
              <div className="features-list">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
              {product.name === "QuantumDash" ? (
                <Link to={product.link} className="btn btn-outline">Launch Dashboard</Link>
              ) : (
                <a href="#contact" className="btn btn-outline">Learn More</a>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="products-cta"
        >
          <h3>Ready to Transform Your Business?</h3>
          <p>Join our early access program and be among the first to experience the future of AI-powered analytics and security.</p>
          <a href="#contact" className="btn btn-primary">Get Early Access</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;