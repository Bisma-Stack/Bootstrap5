import React from 'react';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from './components/inc/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Craousel from './components/inc/Craousel';

function App() {
  return (
    <Router>
      <Navbar />
      <Craousel/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
