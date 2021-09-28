import "../styles/globals.css";
import { Provider } from "react-redux";
import { Navbar } from "../components/shared/Navbar";

import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import store from "../redux/store";

import "../styles/globals.css";
import { Nav } from "../components/shared/Nav";
// import Layout from "../components/Layout";

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* <Layout> */}
        <Provider store={store}>
          <CssBaseline />
          {/* <Navbar /> */}
          <Nav />
          <Component {...pageProps} />
        </Provider>
        {/* </Layout> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };
