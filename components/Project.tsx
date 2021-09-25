import React, { useState } from "react";
import { projectsList } from "../constants/Projects";
import {
  Grid,
  Card,
  Typography,
  ButtonBase,
  Button,
  makeStyles,
} from "@material-ui/core";

const Project = ({ project }: any) => {
  const classes = useStyles();

  const handleClick = (website: any) => {
    window.location.href = website;
  };
  return (
    <Card className={classes.root}>
      <ButtonBase onClick={() => handleClick(project.website)}>
        <Grid className={classes.mainImgContainer}>
          <img src={project.img} alt="" className={classes.mainImg} />
        </Grid>
        <Grid className={classes.cardContainer}>
          <Typography className={classes.cardText}>{project.title}</Typography>
        </Grid>
      </ButtonBase>
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: 200,
    height: 200,
    backgroundColor: "#000",

    border: "double 5px transparent",
    borderRadius: 15,
    backgroundImage:
      "linear-gradient(black, black), linear-gradient(to left, #743ad5, #d53a9d)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 15,
  },
  cardContainer: {
    position: "relative",
    padding: "0 20px",
  },
  mainImgContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainImg: {
    position: "relative",
    zIndex: 0,
    width: 250,
    opacity: 0.15,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    background: "-webkit-linear-gradient(45deg, #fff 30%, #d3d3d3 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  cardBtn: {
    color: "#d3d3d3",
    marginTop: 10,
    textTransform: "none",
  },
});

export default Project;
