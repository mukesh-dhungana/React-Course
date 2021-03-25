import React from "react";
import { Route, Redirect } from "react-router";

function RouteNest(props) {
  const paths = ["/", "/user/:id", "/contact", "/contact/user", "/error"];
  const { location, computedMatch } = props;

  if (
    location &&
    paths.filter((x) => x === location.pathname).length === 0 &&
    computedMatch &&
    paths.filter((x) => x === computedMatch.path).length === 0
  )
    return <Redirect to="/error" />;
  //   if (computedMatch && paths.filter((x) => x === computedMatch.path).length === 0)
  //     return <Redirect to="/error" />;
  return <Route {...props} />;
}

export default RouteNest;
