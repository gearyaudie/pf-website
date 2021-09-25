import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Card,
  Typography,
  Button,
  makeStyles,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import { RootState } from "../redux/reducers";

export const Work: React.FC = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);

  const collapseView = useMediaQuery("@media(max-width: 750px)");

  const classes = useStyles();

  return (
    <Grid id="work" className={classes.root}>
      <Grid className={classes.workContainer}>
        <Grid className={classes.workTitleContainer}>
          <Typography className={classes.workTitle}>. work exp</Typography>
        </Grid>
        <Grid className={classes.workContentContainer}>
          <Grid className={classes.paperContainer}>
            <Grid className={classes.inline}>
              <Grid className={classes.workPaperTitleContainer}>
                <Typography className={classes.workPaperTitle}>
                  iPrice Sdn Bhd
                </Typography>
              </Grid>
              <Grid className={classes.workPaperSideContainer}>
                <Typography>/ Oct 2019 - Jan 2020 / TAM Intern</Typography>
              </Grid>
            </Grid>
            <Paper className={classes.workPaperContent}>
              <Grid className={classes.workContent}>
                {collapseView && (
                  <Typography className={classes.white}>
                    / Oct 2019 - Jan 2020 / TAM Intern
                  </Typography>
                )}
                <Typography className={classes.workContentDesc}>
                  Experience in an Agile environment. Worked with the TAM and BI
                  team with testings, reports, and integration. Tools involved:
                  Microsoft BI, Python.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid className={classes.paperContainer}>
            <Grid className={classes.inline}>
              <Grid className={classes.workPaperTitleContainer}>
                <Typography className={classes.workPaperTitle}>
                  PolicyStreet Sdn Bhd
                </Typography>
              </Grid>
              <Grid className={classes.workPaperSideContainer}>
                <Typography>
                  / May 2021 - Dec 2021 / Front End Intern
                </Typography>
              </Grid>
            </Grid>
            <Paper className={classes.workPaperContent}>
              <Grid className={classes.workContent}>
                {collapseView && (
                  <Typography className={classes.white}>
                    / May 2021 - Dec 2021 / Front End Intern
                  </Typography>
                )}
                <Typography className={classes.workContentDesc}>
                  Worked closely with the tech team on maintanance, feature
                  developments, and housekeeping tasks on the main website.
                  Worked with React JS, Node JS, Next JS, Redux, TypeScript and
                  Git.
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  root: {
    marginTop: 150,
    padding: "0 30px",
  },
  workContainer: {},
  workTitleContainer: {},
  workTitle: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 45,
    textAlign: "center",
  },
  workContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    color: "#999999",
    fontWeight: 300,
    fontSize: 18,
  },
  paperContainer: {
    paddingTop: 50,
  },
  inline: {
    display: "flex",
  },
  workPaperContent: {
    position: "relative",

    backgroundColor: "#000",
    backgroundImage:
      "linear-gradient(black, black), linear-gradient(to left, #743ad5, #d53a9d)",
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    border: "solid 2px transparent",
    borderRadius: 0,
    color: "#fff",

    maxWidth: 700,
    // paddingTop: 40,
  },
  workPaperTitleContainer: {
    background: "linear-gradient(to left, #743ad5, #d53a9d)",

    padding: "5px 50px",
    width: "40%",
    paddingLeft: 35,
    borderRadius: "8px 8px 0px 0px",
    "@media(max-width: 750px)": {
      width: "100%",
    },
  },
  workPaperSideContainer: {
    paddingLeft: 20,
    paddingTop: 7,
    "@media(max-width: 750px)": {
      display: "none",
    },
  },
  workPaperTitle: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 20,
  },
  workContent: {
    padding: "10px 35px",
  },
  workContentDesc: {
    color: "#999999",
    fontWeight: 300,
  },
  white: {
    color: "#fff",
  },
});

// <div className="work_pad">
//   <h1>Work</h1>
//   <p className="work_title">
//     Front End Web Developer Intern -{" "}
//     <span
//       className={
//         themeData === true ? "about_special_lightmode" : "about_special"
//       }
//     >
//       Policystreet
//     </span>
//   </p>
//   <p className="work_desc">
// (May - Aug 2021) Worked closely with the tech team on maintanance,
// feature developments, and housekeeping tasks on the main website.
// Worked with React JS, Node JS, Git.
//   </p>
//   <hr />
//   <p className="work_title">
//     Technical Account Manager Intern -{" "}
//     <span
//       className={
//         themeData === true ? "about_special_lightmode" : "about_special"
//       }
//     >
//       iPrice
//     </span>
//   </p>
//   <p className="work_desc">
// (Oct 2019 - Jan 2020) Experience in an Agile environment. Worked with
// the TAM and BI team with testings, reports, and integration. Tools
// involved: Microsoft BI, Python.
//   </p>
// </div>
