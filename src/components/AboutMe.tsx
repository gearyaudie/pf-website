import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export const AboutMe: React.FC = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);

  return (
    <div className="about-sec container" id="about">
      <div className="about-pad">
        <h1>About Me</h1>
        <p className="about-text">
          Hi there! My name is Geary Audie. I worked with{" "}
          <span
            className={
              themeData === true ? "about-special-lightmode" : "about-special"
            }
          >
            Front End tools
          </span>
          and projects on a daily basis. As a visual / spatial learner, I always
          had an eye on design and it got me into web development by playing
          with plain HTML and CSS. What eventually would lead into a passion of{" "}
          <span
            className={
              themeData === true ? "about-special-lightmode" : "about-special"
            }
          >
            UI/UX design, website development, coding with front end and back
            end tools.
          </span>
          Some of the tools I've worked with,
        </p>
        <br />
        <div className="grid">
          <p className="skills-list">JavaScript</p>
          <p className="skills-list">React JS</p>
        </div>
        <div className="grid">
          <p className="skills-list">PHP</p>
          <p className="skills-list">Vue JS</p>
        </div>
        <div className="grid">
          <p className="skills-list">Laravel</p>
          <p className="skills-list">Node JS</p>
        </div>
      </div>
    </div>
  );
};