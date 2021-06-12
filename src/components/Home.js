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
    <div className={themeData === true ? "theme" : ""}>
      {/* <div className="theme"> */}
      {/* <Navbar /> */}
      <div className="home-sec container">
        <div className="home-sec-pad">
          <button
            onClick={() => {
              console.log(themeData);
              dispatch(toggleThemeColor(!themeData));
              console.log(themeData);
            }}
            className={
              themeData === false ? "toggle-btn" : "toggle-btn-lightmode"
            }
          >
            {themeData === false ? "Light" : "Dark"}
          </button>
          <h1>Geary Audie</h1>
          {/* {console.log("123")} */}
          <h1 className="text-secondary">Front End Web</h1>
          <h1 className="text-secondary">Developer</h1>
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
