import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="header">Hi, This is Kealeboga</h1>
        <p className="paragraph">
          I am a proficient full-stack JavaScript developer with expertise in
          React.js,Next.js, React Native, and Flutter. Over the years, I have honed my
          skills in building dynamic and responsive web applications, as well as
          robust and scalable mobile applications. My passion lies in creating
          seamless user experiences and leveraging cutting-edge technologies to
          solve complex problems. Whether working on front-end interfaces or
          back-end functionalities, I am dedicated to delivering high-quality
          code and continuously improving my craft.
        </p>
        <div className="buttons">
          <button href="/about">See More</button>
          <button href="/about">Download Cv</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
