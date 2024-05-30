import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.css';

function ProjectCard({ title, description, imageUrl, repoLink, liveLink }) {
  return (
    <Card className="project-card">
      <div className="project-card-img-wrapper">
        <Card.Img variant="top" src={imageUrl} className="project-card-img" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" href={repoLink} target="_blank">GitHub Repo</Button>
          <Button variant="secondary" href={liveLink} target="_blank">Live Site</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;