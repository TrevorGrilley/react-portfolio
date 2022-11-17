import React from 'react';
import Navbar from './components/Nav';
import About from './components/About';
import Portfolio from './components/Work';
import Contact from './components/Contact';
import Hero from './components/Hero';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;