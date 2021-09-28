import React from "react";
import { useSelector } from "react-redux";
import { Grid, Card, Typography, Button, makeStyles } from "@material-ui/core";
import { RootState } from "../redux/reducers";
import useTranslation from "next-translate/useTranslation";

export const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const themeData = useSelector((state: RootState) => state.theme.themeChange);

  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <Grid className={classes.root} id="about">
        <Grid className={classes.aboutContainer}>
          <Grid className={classes.titleContainer}>
            <Typography className={classes.aboutTitle}>. about</Typography>
            <Typography className={classes.aboutDesc}>
              {t("common:about.mainTxt")}
            </Typography>
            <Typography className={classes.aboutSkills}>
              - JavaScript - React JS - Node JS - HTML & CSS - Next JS - Redux -
              Material UI - TypeScript
            </Typography>
          </Grid>
          <Grid className={classes.imgContainer}>
            <img
              src="https://i.ibb.co/pjdPGbw/javascript.png
"
              alt=""
              className={classes.img}
            />
            <img
              src="https://i.ibb.co/C01BMSw/react.png"
              className={classes.img}
              alt=""
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles({
  bg: {
    // background: "#fff",
  },
  root: {
    marginTop: 150,
    maxWidth: 900,
    padding: "0 50px",
    margin: "0 auto",
    "@media(max-width: 600px)": {
      padding: "0 35px",
    },
  },
  aboutContainer: {
    display: "grid",
    gridGap: 25,
    gridTemplateColumns: "50% 50%",
    "@media(max-width: 850px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  titleContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    color: "#fff",
  },
  imgContainer: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    padding: "0 14px",
    "@media(max-width: 850px)": {
      paddingTop: 15,
      height: 50,
    },
  },
  aboutTitle: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 45,
    textAlign: "left",
  },
  aboutDesc: {
    color: "#999999",
    fontWeight: 300,
    fontSize: 18,

    paddingTop: 25,
  },
  aboutSkills: {
    paddingTop: 5,
  },
});
