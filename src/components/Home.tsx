import React from "react";
import { HomeContent } from "./HomeContent";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Projects } from "./Projects";
import { Work } from "./Work";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export const Home: React.FC = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);
  const themeIsLight = themeData === true;
  return (
    <>
      <div className={themeIsLight ? "theme" : ""} id="home">
        <HomeContent />
        <Projects />
        <AboutMe />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
