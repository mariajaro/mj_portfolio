import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import ecomStoreImage from '../src/assets/images/eCom.png';
import holidazeImage from '../src/assets/images/Holidaze.png';
import auctionWebsiteImage from '../src/assets/images/iBid.png';
import './App.css';

const projects = [
  {
    title: 'eCom Store',
    description: 'This is a complete eCommerce website built with React and Bootstrap. Users can browse products, add items to their cart, and checkout smoothly. The site features dynamic product listings, detailed product pages, and a handy search bar with auto-complete to help users find what they need quickly.',
    imageUrl: ecomStoreImage,
    repoLink: 'https://github.com/mariajaro/JavaScript_Frameworks_CA.git',
    liveLink: 'https://ecom-mj.netlify.app',
  },
  {
    title: 'Holidaze',
    description: 'Holidaze is a booking site for accommodations. Built with React and Bootstrap, it offers a simple way for users to find and book places to stay. Customers can view available venues and make bookings easily. Venue managers can add, update, and manage their listings and bookings effortlessly.',
    imageUrl: holidazeImage,
    repoLink: 'https://github.com/mariajaro/holidaze_project_exam2.git',
    liveLink: 'https://holidaze-mj.netlify.app',
  },
  {
    title: 'Auction Website - iBid',
    description: 'This auction site lets users bid on items in a fun and engaging way. Built with HTML, CSS, and JavaScript, users can list items for auction, place bids, and track their bids in real-time. New users get credits to start bidding and can earn more by selling items.',
    imageUrl: auctionWebsiteImage,
    repoLink: 'https://github.com/mariajaro/sp2.git',
    liveLink: 'https://joyful-bublanina-29bf5a.netlify.app',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div id="intro" className="intro-section text-white text-center">
        <div className="container">
          <h1>My Portfolio</h1>
          <p className="lead">Front-End Developer | UI/UX Enthusiast</p>
          <p>
          Welcome to my portfolio! I'm Maria, a passionate front-end developer with a knack for crafting beautiful and functional user interfaces. Over the past two years, I've honed my skills at Noroff School of Technology and Digital Media, diving deep into the world of front-end development.
          </p>
          <p>
            During my studies, I've gained a solid foundation in HTML, CSS, and JavaScript, and I've become particularly adept with front-end frameworks like React. My true passion lies in UI/UX design, where I strive to create websites that are not only user-friendly but also visually good looking.
          </p>
          <p>
            Please feel free to contact me!
          </p>
        </div>
      </div>
      <div id="projects" className="container my-5">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="d-flex flex-column align-items-center">
          {projects.map((project, index) => (
            <div key={index} className="mb-4 w-100">
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