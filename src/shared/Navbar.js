import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div class="container flex">
          <h1 class="logo"></h1>
          <nav>
            <ul>
              <li>
                {/* <a href="/">Home</a> */}
                <Link
                  activateClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                {/* <a href="/projects">About</a> */}
                <Link
                  activateClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                {/* <a href="/projects">Projects</a> */}
                <Link
                  activateClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                {/* <a href="/">Work</a>
                 */}
                <Link
                  activateClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Work
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1Tvo-sUV5_o_bZ296Wy2zA8hnyrYJrF0p/view?usp=sharingf"
                  className="nav-resume"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
