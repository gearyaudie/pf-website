import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import classes from "../styles/About.module.css";

export const AboutMe: React.FC = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);

  return (
    <div className={`${classes.about_sec} ${classes.container}`} id="about">
      <div className={classes.about_pad}>
        <h1>About Me</h1>
        <p className={classes.about_text}>
          Hi there! My name is Geary Audie. I worked with{" "}
          <span
            className={
              themeData === true
                ? `${classes.about_special_lightmode}`
                : `${classes.about_special}`
            }
          >
            Front End tools
          </span>
          and projects on a daily basis. As a visual / spatial learner, I always
          had an eye on design and it got me into web development by playing
          with plain HTML and CSS. What eventually would lead into a passion of{" "}
          <span
            className={
              themeData === true
                ? `${classes.about_special_lightmode}`
                : `${classes.about_special}`
            }
          >
            UI/UX design, website development, coding with front end and back
            end tools.
          </span>
          Some of the tools I have worked with,
        </p>
        <br />
        <div className={classes.grid}>
          <p className={classes.skills_list}>JavaScript</p>
          <p className={classes.skills_list}>React JS</p>
        </div>
        <div className={classes.grid}>
          <p className={classes.skills_list}>PHP</p>
          <p className={classes.skills_list}>Vue JS</p>
        </div>
        <div className={classes.grid}>
          <p className={classes.skills_list}>Next JS</p>
          <p className={classes.skills_list}>Node JS</p>
        </div>
        <div className={classes.grid}>
          <p className={classes.skills_list}>TypeScript</p>
          <p className={classes.skills_list}>Material UI</p>
        </div>
      </div>
    </div>
  );
};
