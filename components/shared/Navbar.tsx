import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleThemeColor } from "../../redux/actions/theme";
import { RootState } from "../../redux/reducers";
import { useRouter } from "next/router";
import classes from "../../styles/Navbar.module.css";

export const Navbar = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);
  const dispatch = useDispatch();
  const router = useRouter();

  const [showNav, setShowNav] = React.useState<any>(true);
  const [scrollPos, setScrollPos] = React.useState<any>(0);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    console.log(document.body.getBoundingClientRect());
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowNav(document.body.getBoundingClientRect().top > scrollPos);
  };

  return (
    <div
      className={`${classes.navbar} ${
        showNav ? `${classes.active}` : `${classes.hidden}`
      }`}
    >
      <nav style={themeData === true ? { backgroundColor: "#333" } : {}}>
        <div className="container flex">
          <h1> </h1>
          <nav>
            <ul>
              {/* <li className="toggle-li">
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
              </li> */}
              <li>
                <Link
                  activeClass="activeNav"
                  to="home"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="activeNav"
                  to="projects"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="activeNav"
                  to="about"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="activeNav"
                  to="work"
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
                  className={classes.nav_resume}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};
