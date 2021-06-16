import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleThemeColor } from "../redux/actions/theme";

export const Navbar = () => {
  const themeData = useSelector((state) => state.theme.themeChange);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className="navbar"
        style={themeData === false ? { backgroundColor: "#000000" } : {}}
      >
        <div className="container flex">
          <h1> </h1>
          <nav>
            <ul>
              <li className="toggle-li">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="chk"
                  onChange={() => {
                    dispatch(toggleThemeColor(!themeData));
                  }}
                />
                <label
                  className={themeData === false ? "label" : "label-light"}
                  for="chk"
                >
                  <i class="fas fa-sun fa-xs"></i>
                  <i class="fas fa-moon fa-xs"></i>
                  <div
                    class={themeData === false ? "ball" : "ball-light"}
                  ></div>
                </label>
              </li>
              <li>
                {/* <a href="/">Home</a> */}
                <Link
                  activateClass="active"
                  to="home"
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
      </nav>
    </>
  );
};
