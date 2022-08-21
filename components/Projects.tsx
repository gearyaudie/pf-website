import React, { useState, useEffect } from "react";
import { projectsList } from "../constants/Projects";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AnyAction } from "redux";
import Project from "./Project";
import { Grid, Card, Typography, Button, makeStyles } from "@material-ui/core";

export const Projects: React.FC = () => {
  const classes = useStyles();
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
    <Grid className={classes.root} id="projects">
      {/* <hr className="line" /> */}
      {/* <select onChange={handleChange}>
        <option value="">All</option>
        <option value="React">React</option>
        <option value="Next">Next</option>
        <option value="Node">Node</option>
      </select> */}
      <div>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.cardContainer}
        >
          {filteredProjects.map((project) => (
            // <ProjectCard project={project} key={project.id} />
            <Project project={project} key={project.id} />
          ))}
          {expand &&
            filteredMoreProjects.map((project) => (
              // <ProjectCard project={project} key={project.id} />
              <Project project={project} key={project.id} />
            ))}
        </Grid>
      </div>
      <Grid className={classes.viewMoreBtnContainer}>
        <Button
          onClick={() => setExpand(!expand)}
          className={classes.viewMoreBtn}
          variant="outlined"
        >
          {/* {expand ? "View Less" : "View More"} */}
          {expand ? <IoIosArrowUp size={50} /> : <IoIosArrowDown size={50} />}
        </Button>
      </Grid>
      <p className="proj_desc">
        All projects repository are available for view on GitHub
      </p>
    </Grid>
  );
};

const useStyles = makeStyles({
  root: {
    padding: "0 25px",
  },
  cardContainer: {
    display: "grid",
    // gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridTemplateColumns: "repeat(4, 25%)",
    justifyItems: "center",
    gridGap: 10,
    maxWidth: 850,
    margin: "0 auto",
    marginTop: 0,
    "@media(max-width: 855px)": {
      gridTemplateColumns: "repeat(2, 50%)",
      maxWidth: 600,
    },
    "@media(max-width: 600px)": {
      gridTemplateColumns: "repeat(2, 50%)",
      maxWidth: 500,
    },
    "@media(max-width: 500px)": {
      display: "flex",
      flexDirection: "column",
      maxWidth: 500,
    },
  },
  viewMoreBtnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  viewMoreBtn: {
    color: "#808080",
  },
});
// Note: Img size should be 225 x 175px
