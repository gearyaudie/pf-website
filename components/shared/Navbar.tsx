import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleThemeColor } from "../../redux/actions/theme";
import { RootState } from "../../redux/reducers";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import classes from "../../styles/Navbar.module.css";

export const Navbar = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);
  const dispatch = useDispatch();
  const router = useRouter();

  const [showNav, setShowNav] = React.useState<any>(true);
  const [scrollPos, setScrollPos] = React.useState<any>(0);

  const [sidebar, setSidebar] = React.useState<any>(false);

  const boxRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    if (document.body.getBoundingClientRect().y < -50) {
      setShowNav(document.body.getBoundingClientRect().top > scrollPos);
    } else {
      setShowNav(true);
    }
  };

  const useClickOutside = (handler: any) => {
    let domNode = React.useRef();
    React.useEffect(() => {
      function handleClickOutside(event: any) {
        if (domNode.current && !domNode.current.contains(event.target)) {
          handler();
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
    return domNode;
  };

  let domNode = useClickOutside(() => {
    setSidebar(false);
  });

  return (
    <>
      <div
        className={`${classes.navbar} ${
          showNav ? `${classes.active}` : `${classes.hidden}`
        }`}
      >
        <nav style={themeData === true ? { backgroundColor: "#333" } : {}}>
          <div className={`${classes.container} ${classes.flex}`}>
            <h1> </h1>
            <nav className={classes.mainNav}>
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

            <div className={classes.menuNav}>
              <MenuIcon
                fontSize="large"
                onClick={() => {
                  setSidebar(true);
                }}
              />
            </div>
          </div>
        </nav>
      </div>

      <div
        className={
          sidebar
            ? `${classes.navSidebar} ${classes.active}`
            : classes.navSidebar
        }
        ref={domNode}
      >
        <CloseIcon
          fontSize="large"
          className={classes.navSidebar_content_close}
          onClick={() => setSidebar(false)}
        />
        <div className={classes.navSidebar_content}>
          <li>
            <Link
              activeClass="activeNav"
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setSidebar(false)}
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
              onClick={() => setSidebar(false)}
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
              onClick={() => setSidebar(false)}
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
              onClick={() => setSidebar(false)}
            >
              Work
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1Tvo-sUV5_o_bZ296Wy2zA8hnyrYJrF0p/view?usp=sharingf"
              className={classes.nav_resume}
              onClick={() => setSidebar(false)}
            >
              Resume
            </a>
          </li>
        </div>
      </div>
    </>
  );
};
