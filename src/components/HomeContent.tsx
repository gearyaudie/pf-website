import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export const HomeContent: React.FC = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);

  const themeIsLight = themeData === true;
  return (
    <div>
      <div className="home-sec container">
        <div className="home-sec-pad">
          <h1 className={themeIsLight ? "text-main-light" : "text-main"}>
            Geary Audie
          </h1>
          <p className="text-secondary">Front End Developer</p>
          <div className="icons-container">
            <a
              className={themeIsLight ? "icons-lightmode" : "icons"}
              href="https://www.linkedin.com/in/geary-audie-308734142/"
            >
              <i className="fa fa-linkedin fa-2x  "></i>
            </a>
            <span className="icons-line"></span>
            <a
              className={themeIsLight ? "icons-lightmode" : "icons"}
              href="https://github.com/gearyaudie"
            >
              <i className="fa fa-github fa-2x " aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
