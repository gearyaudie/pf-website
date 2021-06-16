import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Projects } from "./Projects";
import { Work } from "./Work";
import { toggleThemeColor } from "../redux/actions/theme";
// import { Navbar } from "../shared/Navbar";

export const Home = () => {
  const themeData = useSelector((state) => state.theme.themeChange);
  const dispatch = useDispatch();

  return (
    <div className={themeData === true ? "theme" : ""} id="home">
      {/* <div className="theme"> */}
      {/* <Navbar /> */}
      <div className="home-sec container">
        <div className="home-sec-pad">
          <h1>Geary Audie</h1>
          <h1 className="text-secondary">Front End Developer</h1>
          <div className="icons-container">
            <a
              className={themeData === true ? "icons-lightmode" : "icons"}
              href="https://www.linkedin.com/in/geary-audie-308734142/"
            >
              <i className="fa fa-linkedin fa-2x  "></i>
            </a>
            <a
              className={themeData === true ? "icons-lightmode" : "icons"}
              href="https://github.com/gearyaudie"
            >
              <i className="fa fa-github fa-2x " aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};
