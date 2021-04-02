import React from "react";
import App from "./App";
import Error from "./Error";
import Page from "./redux-toolkit/Page";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store/store";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  app: {
    display: "flex",
    justifyContent: "space-around",
  },
  text: {
    textDecoration: "none",
    color: "white",
    marginRight: 20,
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div>
        <AppBar position="static">
          <Toolbar variant="dense" className={classes.app}>
            <Typography variant="h6" color="inherit">
              <Link className={classes.text} to="/">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" color="inherit">
              <Link className={classes.text} to="/crud">
                CRUD
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route exact path="/" component={App} />
        <Provider store={store}>
          <Route path="/crud" component={Page} />
        </Provider>
        <Route path="/error" component={Error} />
        <Redirect to="/error" />
      </Switch>
      {/* <App /> */}
    </BrowserRouter>
  );
};

export default Main;
