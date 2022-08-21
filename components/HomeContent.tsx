import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import classes from "../styles/Home.module.css";

export const HomeContent: React.FC = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);

  const themeIsLight = themeData === true;
  return (
    <div>
      <div className={`${classes.home_sec} ${classes.container}`}>
        <div className={classes.home_sec_pad}>
          <h1
            className={
              themeIsLight
                ? `${classes.text_main_light}`
                : `${classes.text_main}`
            }
          >
            Hi, I'm Geary!
          </h1>
          <p className={classes.text_secondary}>
            A Front End Developer, working with current technologies to create
            good looking websites
          </p>
          <div className={classes.icons_container}>
            <a
              className={
                themeIsLight ? `${classes.icons_lightmode}` : `${classes.icons}`
              }
              href="https://www.linkedin.com/in/geary-audie-308734142/"
            >
              <AiFillGithub size={32} />
            </a>
            <span className={classes.icons_line}></span>
            <a
              className={
                themeIsLight ? `${classes.icons_lightmode}` : `${classes.icons}`
              }
              href="https://github.com/gearyaudie"
            >
              <FaLinkedinIn size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
