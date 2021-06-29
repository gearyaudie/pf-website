import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleThemeColor } from "../../redux/actions/theme";
import { RootState } from "../../redux/reducers";

export const Navbar = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className="navbar"
        style={themeData === true ? { backgroundColor: "#333" } : {}}
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
                  htmlFor="chk"
                >
                  <i className="fas fa-sun fa-xs"></i>
                  <i className="fas fa-moon fa-xs"></i>
                  <div
                    className={themeData === false ? "ball" : "ball-light"}
                  ></div>
                </label>
              </li>
              <li>
                {/* <a href="/">Home</a> */}
                <Link
                  activeClass="active"
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
                  activeClass="active"
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
                  activeClass="active"
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
                  activeClass="active"
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
