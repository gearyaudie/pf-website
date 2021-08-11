import React, { useState, useEffect } from "react";
import { projectsList } from "../constants/Projects";
import classes from "../styles/Projects.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import { AnyAction } from "redux";

export const Projects: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const [value, setvalue] = useState("");

  const sliceProjects = projectsList.slice(0, 4);

  const amountOfMoreProjects = projectsList.length - 4;
  const moreProjects = projectsList.slice(
    Math.max(projectsList.length - amountOfMoreProjects, 0)
  );

  let filteredProjects = sliceProjects.filter((project) =>
    project.desc.includes(value)
  );

  let filteredMoreProjects = moreProjects.filter((project) =>
    project.desc.includes(value)
  );

  if (value === "") {
    filteredProjects = sliceProjects;
    filteredMoreProjects = moreProjects;
  }

  const handleChange = (e: any) => {
    e.preventDefault();
    setvalue(e.target.value);
  };

  useEffect(() => {
    console.log(filteredProjects);
  });

  return (
    <div className="projects_sec container">
      <div className="projects_pad" id="projects">
        <hr className="line" />
        <select onChange={handleChange} className={classes.selectBtn}>
          <option value="">All</option>
          <option value="React">React</option>
          <option value="Next">Next</option>
          <option value="Node">Node</option>
        </select>
        <div className="grid_container">
          <div className={classes.projectsGrid}>
            {/* Loop through the projects list */}
            {filteredProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
            {expand &&
              filteredMoreProjects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
          </div>
          <button className={classes.btn} onClick={() => setExpand(!expand)}>
            {expand ? "View Less" : "View More"}
            {expand ? <IoIosArrowUp size={22} /> : <IoIosArrowDown size={22} />}
          </button>
          <p className="proj_desc">
            All projects repository are available for view on GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

// Note: Img size should be 225 x 175px
