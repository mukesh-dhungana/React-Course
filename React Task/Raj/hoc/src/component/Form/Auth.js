import React from "react";
import { Redirect, Route } from "react-router-dom";

function Auth({ Dashboard, path }) {
  return (
    <>
      {localStorage.getItem("item") === "true" ? (
        <Route exact path={path} component={Dashboard} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

export default Auth;
