import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import WebDev from './components/WebDev/WebDev';
import MobileDev from './components/MobileDev/MobileDev';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/WebDev" element={<WebDev />} />
          <Route exact path="/MobileDev" element={<MobileDev />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
