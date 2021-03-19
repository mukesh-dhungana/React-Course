import React from "react";
import { Route, Redirect } from "react-router";

function RouteNest(props) {
  const paths = ["/", "/user/:id", "/contact", "/contact/user", "/error"];
  const {
    path,
    location,
  } = props;
  debugger
  if (location && paths.filter((x) => x === location.pathname).length === 0)
    return <Redirect to="/error" />;
  return <Route {...props} />;
}

export default RouteNest;
