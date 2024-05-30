import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import ecomStoreImage from '../src/assets/images/eCom.png'
import holidazeImage from '../src/assets/images/Holidaze.png';
import auctionWebsiteImage from '../src/assets/images/iBid.png';
import './App.css';

const projects = [
  {
    title: 'eCom Store',
    description: 'A comprehensive eCommerce web application built with React and Bootstrap.',
    imageUrl: ecomStoreImage,
    repoLink: 'https://github.com/mariajaro/JavaScript_Frameworks_CA.git',
    liveLink: 'https://ecom-mj.netlify.app',
  },
  {
    title: 'Holidaze',
    description: 'A modern front-end accommodation booking application.',
    imageUrl: holidazeImage,
    repoLink: 'https://github.com/mariajaro/holidaze_project_exam2.git',
    liveLink: 'https://holidaze-mj.netlify.app',
  },
  {
    title: 'Auction Website',
    description: 'An auction website where users can bid on items. Built with HTML, CSS, and JavaScript.',
    imageUrl: auctionWebsiteImage,
    repoLink: 'https://github.com/mariajaro/sp2.git',
    liveLink: 'https://joyful-bublanina-29bf5a.netlify.app',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container my-5">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                repoLink={project.repoLink}
                liveLink={project.liveLink}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;