import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Products from './components/Products';
import Services from './components/Services';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import QuantumDash from './pages/QuantumDash';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedBackground />
        <Routes>
          <Route path="/quantumdash" element={<QuantumDash />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <MissionVision />
              <Products />
              <Services />
              <Roadmap />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;