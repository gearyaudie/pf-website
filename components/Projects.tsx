import React from "react";
import { projectsList } from "../constants/Projects";
import classes from "../styles/Projects.module.css";

export const Projects: React.FC = () => {
  return (
    <div className="projects-sec container">
      <div className="projects-pad" id="projects">
        <hr className="line" />
        <div className="grid-container">
          <div className="grid projects-grid">
            {/* Loop through the projects list */}
            {projectsList.map((project) => (
              <a href={project.website}>
                <div className={classes.imgContainer}>
                  <img src={project.img} className={classes.img} alt="" />
                  <div className={classes.imgOverlay}>
                    <div className={classes.title}>{project.title}</div>
                    <div className={classes.desc}>{project.desc}</div>
                  </div>
                </div>
              </a>
              // <div className="proj-container" key={projects.id}>
              //   <a href={projects.website}>
              //     <div className="proj-card">
              //       <img className="proj-img" src={projects.img} alt="" />
              //     </div>
              //   </a>
              //   <div className="proj-bg">
              //     <h1>{projects.title}</h1>
              //     <p>{projects.desc}</p>
              //   </div>
              // </div>
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
