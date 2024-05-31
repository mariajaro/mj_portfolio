import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.css';

function ProjectCard({ title, description, imageUrl, repoLink, liveLink }) {
  return (
    <Card className="project-card shadow-sm">
      <Card.Body>
        <Card.Title className="mb-3">{title}</Card.Title> 
        <div className="project-card-img-wrapper">
          <Card.Img variant="top" src={imageUrl} className="project-card-img" />
        </div>
        <Card.Text className="mt-3">{description}</Card.Text> 
        <div className="d-flex justify-content-between mt-4">
          <Button className="custom-btn custom-btn-primary" href={repoLink} target="_blank">GitHub Repo</Button>
          <Button className="custom-btn custom-btn-secondary" href={liveLink} target="_blank">Live Site</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;