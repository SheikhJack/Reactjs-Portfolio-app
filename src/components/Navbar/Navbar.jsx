
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import kk from '../../assets/kk.jpg';
import './navbar.css'; 



const Navbar = () => {
  
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

 

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={kk} alt="Logo"  className="img" />
      </div>

      <Link className='toggle-button' onClick={handleToggle}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </Link>
      <div className={`nav-links ${isActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" >
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/projects" >
              Contact
            </Link>
          </li>
        </ul>
      </div>

     </nav>
  )
};

export default Navbar;
