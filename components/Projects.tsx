import React, { useState } from "react";
import { projectsList } from "../constants/Projects";
import classes from "../styles/Projects.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ProjectCard from "./ProjectCard";

export const Projects: React.FC = () => {
  const [expand, setExpand] = useState(false);

  const sliceProjects = projectsList.slice(0, 4);

  const amountOfMoreProjects = projectsList.length - 4;
  const moreProjects = projectsList.slice(
    Math.max(projectsList.length - amountOfMoreProjects, 0)
  );

  return (
    <div className="projects-sec container">
      <div className="projects-pad" id="projects">
        <hr className="line" />
        <div className="grid-container">
          <div className={classes.projectsGrid}>
            {/* Loop through the projects list */}
            {sliceProjects.map((project) => (
              <ProjectCard project={project} />
            ))}
            {expand &&
              moreProjects.map((project) => <ProjectCard project={project} />)}
          </div>
          <button className={classes.btn} onClick={() => setExpand(!expand)}>
            {expand ? "View Less" : "View More"}
            {expand ? <IoIosArrowUp size={22} /> : <IoIosArrowDown size={22} />}
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
