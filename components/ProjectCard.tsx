import React from "react";
import { AiFillGithub } from "react-icons/ai";
import classes from "../styles/Projects.module.css";

const ProjectCard = ({ project }: any) => {
  return (
    <a href={project.website} key={project.id}>
      <div className={classes.imgContainer}>
        <img src={project.img} className={classes.img} alt="" />
        <div className={classes.imgOverlay}>
          <div className={classes.title}>{project.title}</div>
          <div className={classes.desc}>{project.desc.join(", ")}</div>
          <a
            className={classes.githubIcon}
            href={`https://github.com/gearyaudie/${project.git}`}
          >
            <AiFillGithub size={32} />
          </a>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
