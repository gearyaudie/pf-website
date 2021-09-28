import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleThemeColor } from "../../redux/actions/theme";
import { RootState } from "../../redux/reducers";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, Card, Typography, Button, makeStyles } from "@material-ui/core";

export const Navbar = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);
  const dispatch = useDispatch();
  const router = useRouter();

  const [showNav, setShowNav] = React.useState<any>(true);
  const [scrollPos, setScrollPos] = React.useState<any>(0);

  const [sidebar, setSidebar] = React.useState<any>(false);

  const boxRef = React.useRef(null);

  const classes = useStyles();

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
    let domNode = React.useRef<any>();
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

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "var(--navbar-background)",
    borderBottom: "1px solid #333",
    color: "var(--navbar-color)",
    height: 70,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 10,
    transition: "0.2s ease-in-out",
    "& ul": {
      display: "flex",
      paddingTop: 20,
    },
    "& a": {
      cursor: "pointer",
      color: "var(--navbar-color)",
      fontSize: "1rem",
      fontWeight: "400",
      margin: "10px",
      "&:hover": {
        color: "var(--white)",
      },
    },
    "&.flex": {
      justifyContent: "space-between",
    },
    "&.nav_resume": {
      color: "var(--white)",
      fontWeight: 500,
    },
  },
  container: {
    margin: " 0 auto",
    maxWidth: 1100,
    padding: " 0 40px",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  active: {
    top: 0,
  },

  hidden: {
    top: -70,
    zIndex: 100,
  },
  mainNav: {
    display: "block",
  },
  nav_resume: {
    color: "var(--white)",
    fontWeight: 500,
    "&:hover": {
      color: "var(--primary-light)",
    },
  },
  menuNav: {
    display: "block",
    marginTop: 16,
  },
  navSidebar: {
    /* background: #333; */
    backgroundColor: "rgba(51, 51, 51, 0.95)",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    right: "-100%",
    transition: "500ms",
    zIndex: 10000000,
  },

  navSidebar_content: {
    position: "relative",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& li": {
      listStyle: "none",
      fontSize: 35,
      fontWeight: 500,
      padding: "17px 0px",
      cursor: "pointer",
      "& a": {
        color: "#808080",
      },
    },
  },
  navSidebar_content_close: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 15,
    marginRight: 40,
  },
});
