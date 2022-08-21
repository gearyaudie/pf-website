import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import {
  Grid,
  Card,
  Typography,
  Button,
  makeStyles,
  Link,
} from "@material-ui/core";

export const Contact: React.FC = () => {
  const themeData = useSelector((state: RootState) => state.theme.themeChange);
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid className={classes.contactContainer}>
        <Typography className={classes.contactTitle}>.get in touch</Typography>
        <Link href="mailto:gearyaudie.ga@gmail.com">
          <Button variant="outlined" className={classes.contactBtn}>
            Click Me
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  root: {
    marginTop: 175,
    marginBottom: 75,
    padding: "75px 0px",
    color: "#808080",
    background: "#fff",
    width: "100%",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contactTitle: {
    color: "#333",
    fontWeight: 600,
    fontSize: 45,
  },
  contactBtn: {
    color: "#333",
    marginTop: 35,
    border: "2px solid #333",
    textTransform: "none",
    fontSize: 18,
  },
});
