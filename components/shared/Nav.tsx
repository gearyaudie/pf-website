import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleThemeColor } from "../../redux/actions/theme";
import { RootState } from "../../redux/reducers";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import {
  Grid,
  Card,
  Typography,
  Button,
  makeStyles,
  Select,
} from "@material-ui/core";
import SelectLanguage from "./SelectLanguage";

export const Nav = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);
  const dispatch = useDispatch();
  const router: any = useRouter();

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
      <Grid
        className={`${classes.navbarContainer} ${
          showNav ? `${classes.active}` : `${classes.hidden}`
        }`}
      >
        <Grid className={classes.navbarPad}>
          <Grid className={classes.navbarItemTranslate}>
            <SelectLanguage />
          </Grid>
          <Grid className={classes.navbarItem}>
            <Link
              activeClass="activeNav"
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography className={classes.navbarItemText}>Home</Typography>
            </Link>
          </Grid>
          <Grid className={classes.navbarItem}>
            <Link
              activeClass="activeNav"
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography className={classes.navbarItemText}>
                Projects
              </Typography>
            </Link>
          </Grid>
          <Grid className={classes.navbarItem}>
            <Link
              activeClass="activeNav"
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography className={classes.navbarItemText}>About</Typography>
            </Link>
          </Grid>
          <Grid className={classes.navbarItem}>
            <Link
              activeClass="activeNav"
              to="work"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography className={classes.navbarItemText}>Work</Typography>
            </Link>
          </Grid>
          <Grid className={classes.navbarItem}>
            <Link
              activeClass="activeNav"
              to="work"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Typography className={classes.navbarItemTextSpecial}>
                Resume
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles({
  navbarContainer: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 10,
    transition: "0.2s ease-in-out",

    backgroundColor: "#000",
    borderBottom: "1px solid #333",
    color: "#fff",
    cursor: "pointer",
  },
  navbarPad: {
    margin: "0 auto",
    maxWidth: 900,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "20px",
  },
  active: {
    top: 0,
  },
  hidden: {
    top: -80,
    zIndex: 100,
  },
  navbarItem: {
    padding: "0 15px",
  },
  navbarItemTranslate: {
    display: "flex",
  },
  navbarItemTranslateSelect: {
    color: "#fff",
    background: "#333",
    // border: "1.5px solid #808080",
    "&:focus": {
      backgroundColor: "#333",
    },
  },
  navbarItemText: {
    color: "#808080",
  },
  navbarItemTextSpecial: {
    color: "#fff",
    fontWeight: 500,
  },
});
