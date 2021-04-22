import React from "react";
import { Redirect, Route } from "react-router-dom";
//import Dashboard from "./Dashboard";

function Auth({ Comp, path }) {
  return (
    <Route
      exact
      path={path}
      render={() => {
        if (localStorage.getItem("item") == "true") {
          return <Comp />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default Auth;
