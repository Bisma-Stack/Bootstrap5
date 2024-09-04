import React from 'react';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/Service';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
