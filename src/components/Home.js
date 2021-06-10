import React from "react";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Projects } from "./Projects";
import { Work } from "./Work";
// import { Navbar } from "../shared/Navbar";

export const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="home-sec container">
        <h1>Geary Audie S</h1>
        <h1 className="text-secondary">Front End Web</h1>
        <h1 className="text-secondary">Developer</h1>
        <div className="icons-container">
          <a
            className=""
            href="https://www.linkedin.com/in/geary-audie-308734142/"
          >
            <i className="fa fa-linkedin fa-2x icons "></i>
          </a>
          <a className="" href="https://github.com/gearyaudie">
            <i className="fa fa-github fa-2x icons" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};
