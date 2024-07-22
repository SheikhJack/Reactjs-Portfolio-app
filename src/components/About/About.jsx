import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { DiIllustrator } from 'react-icons/di';
import { FcLinux } from 'react-icons/fc';
import { FaGit } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaJenkins } from 'react-icons/fa6';
import { IoLogoDocker } from 'react-icons/io5';
import './about.css';

function About() {
  return (
    <div className="about-section">
      <h1 className="heading">About Me</h1>
      <div className="paragraph">
        <p className="para">
          My journey into web development began in 2019 when I started building
          web apps with Shopify. Since then, I've expanded my skill set and
          transitioned to React.js in 2021. Eager to enhance my capabilities, I
          pursued a full-stack web development course at the University of
          Helsinki in 2023. This comprehensive program covered both frontend and
          backend development using React.js, Node.js, and PHP Laravel.
        </p>
        <p className="para">
          In parallel, I embarked on a mobile development course focusing on
          React Native through Udemy. Currently, I'm actively engaged in
          furthering my education by pursuing an IT diploma and a DevOps
          certification.
        </p>
        <p className="para">
          Additionally, I've completed a beginner certification in AWS, which
          provided me with a solid foundation in cloud computing fundamentals.
          With a passion for creating robust and scalable solutions, I thrive in
          dynamic environments where I can leverage my diverse skill set to
          deliver impactful results.
        </p>
      </div>
      <div className="icons">
        <FaReact />
        <FaNode />
        <FaLaravel />
        <FaAws />
        <FaFigma />
        <DiIllustrator />
        <FcLinux />
        <FaGit />
        <FaGithub />
        <FaJenkins />
        <IoLogoDocker />
      </div>
    </div>
  );
}

export default About;
