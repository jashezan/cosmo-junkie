import React from "react";
import projectsList from "../data/projectsList";

const Portfolio = () => {
  return (
    <section id="portfolio" name="portfolio" className="container">
      <h2>Some of My Projects</h2>
      <div className="grid projects">
        {projectsList.map((project, index) => {
          return (
            <a key={index} href={project.link}>
              <img src={project.src} alt={`${project.title} Image`} />
              <h3>{project.title}</h3>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
