import React from "react";
import { projectsList } from "../constants/Projects";

export const Projects: React.FC = () => {
  return (
    <div className="projects-sec container">
      <div className="projects-pad" id="projects">
        <hr className="proj-line" />
        <div className="grid-container">
          <div className="grid-3 projects-grid">
            {/* Loop through the projects list */}
            {projectsList.map((projects) => (
              <div className="proj-container" key={projects.id}>
                <a href={projects.website}>
                  <div className="proj-card">
                    <img className="proj-img" src={projects.img} alt="" />
                  </div>
                </a>
                <div className="proj-bg">
                  <h1>{projects.title}</h1>
                  <p>{projects.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="proj-desc">
            All projects repository are available for view on GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

// Note: Img size should be 225 x 175px
