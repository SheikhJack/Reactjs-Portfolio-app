import React from 'react';
import '../Projects/Projects';
import img from '../../assets/blogApp.png';
import './webdev.css';

export default function WebDev ()  {
  return (
    <div className="projects">
      <h1 className="title">Projects</h1>
      <div className="card">
        <img src={img} height={200} width={200} alt="picture" />
        <h2>Blog App</h2>
        <p>Built using Nextjs, you can post and comment in the blog app.</p>
        <button>Live Site</button>
        <button>Code View</button>
      </div>
      <div className="card">
        <img src={img} height={200} width={200} alt="picture" />
        <h2>Blog App</h2>
        <p>Built using Nextjs, you can post and comment in the blog app.</p>
        <button>Live Site</button>
        <button>Code View</button>
      </div>
      <div className="card">
        <img src={img} height={200} width={200} alt="picture" />
        <h2>Blog App</h2>
        <p>Built using Nextjs, you can post and comment in the blog app.</p>
        <button>Live Site</button>
        <button>Code View</button>
      </div>
      <div className="card">
        <img src={img} height={200} width={200} alt="picture" />
        <h2>Blog App</h2>
        <p>Built using Nextjs, you can post and comment in the blog app.</p>
        <button>Live Site</button>
        <button>Code View</button>
      </div>
    </div>
  );
};
