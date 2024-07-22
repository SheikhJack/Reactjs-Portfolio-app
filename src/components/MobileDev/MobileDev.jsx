import React from 'react';
import './mobiledev.css';
import img from '../../assets/blogApp.png';
import ReactPlayer from 'react-player';
import Video from '../../assets/video.mp4';


export default function MobileDev() {
  return (
    <div className="projects">
      <h1 className="title">React Native</h1>
      <div className="card">
        <ReactPlayer  controls={true} light={true} url={Video} height='350px' width='250px'/>
        <h3 className="card-hearding">BHC App</h3>
        <p className="card-para">
          Management app, statement retrieval, tenant info etc.
        </p>
        <button>Live Site</button>
        <button>Code View</button>
      </div>
      <div className="card">
        <img src={img} height={200} width={200} alt="picture" />
        <h3>Job Board App</h3>
        <p>Applicats can dive in and browse available jobs around the world.</p>
        <button>Live Site</button>
        <button>Code View</button>
      </div>

      <div className="projects1">
        <h1 className="title">Flutter</h1>
        <div className="card">
          <img src={img} height={200} width={200} alt="picture" />
          <h3>Note App</h3>
          <p>Built using Nextjs, you can post and comment in the blog app.</p>
          <button>Live Site</button>
          <button>Code View</button>
        </div>
        <div className="card">
          <img src={img} height={200} width={200} alt="picture" />
          <h3>Blog App</h3>
          <p>Built using Nextjs, you can post and comment in the blog app.</p>
          <button>Live Site</button>
          <button>Code View</button>
        </div>
      </div>
    </div>
  );
}
