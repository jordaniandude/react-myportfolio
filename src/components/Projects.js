import React from "react";
import PROJECTS from "../data/projects";

const Project = props => {
  const { title, image, description, link } = props.project;
  return (
    <div style={{ display: "inline-block", width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <a href={link} rel="noopener noreferrer" target="_blank">
        <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
      </a>
      <p>{description}</p>
    </div>
  );
};

const Projects = () => (
  <div>
    <h2>دوراتي</h2>
    <div>
      {PROJECTS.map(PROJECT => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </div>
  </div>
);

export default Projects;
