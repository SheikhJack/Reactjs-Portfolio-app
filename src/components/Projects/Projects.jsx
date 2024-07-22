import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
import { FaComputer } from 'react-icons/fa6';
import { FcCellPhone } from 'react-icons/fc';

function Projects() {
  return (
    <div className="main">
      <Link to="/WebDev" className="web">
        <FaComputer size={150} />
        <h1 className="web-text">Web Development.</h1>
      </Link>
      <Link to='/MobileDev' className="mobile">
      <FcCellPhone size={150} />
        <h2 className="mobile-text">Mobile Development</h2>
      </Link>
      
    </div>
  );
}

export default Projects;
