import React, { useState } from "react";
import { projectsList } from "../constants/Projects";
import classes from "../styles/Projects.module.css";

export const Projects: React.FC = () => {
  const [expand, setExpand] = useState(false);

  const sliceProjects = projectsList.slice(0, 4);

  const moreProjects = projectsList.slice(Math.max(projectsList.length - 3, 1));

  console.log(moreProjects);
  console.log(sliceProjects);

  return (
    <div className="projects-sec container">
      <div className="projects-pad" id="projects">
        <hr className="line" />
        <div className="grid-container">
          <div className={classes.projectsGrid}>
            {/* Loop through the projects list */}
            {sliceProjects.map((project) => (
              <>
                <a href={project.website} key={project.id}>
                  <div className={classes.imgContainer}>
                    <img src={project.img} className={classes.img} alt="" />
                    <div className={classes.imgOverlay}>
                      <div className={classes.title}>{project.title}</div>
                      <div className={classes.desc}>{project.desc}</div>
                    </div>
                  </div>
                </a>
              </>
            ))}
            {expand &&
              moreProjects.map((project) => (
                <>
                  <a href={project.website} key={project.id}>
                    <div className={classes.imgContainer}>
                      <img src={project.img} className={classes.img} alt="" />
                      <div className={classes.imgOverlay}>
                        <div className={classes.title}>{project.title}</div>
                        <div className={classes.desc}>{project.desc}</div>
                      </div>
                    </div>
                  </a>
                </>
              ))}
          </div>
          <button className={classes.btn} onClick={() => setExpand(!expand)}>
            {expand ? "View Less" : "View More"}
          </button>
          <p className="proj-desc">
            All projects repository are available for view on GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

// Note: Img size should be 225 x 175px
