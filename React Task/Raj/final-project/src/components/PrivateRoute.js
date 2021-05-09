import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./authContext";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        return auth.user ? children : <Redirect to="/signin" />;
      }}
    />
  );
};

export default PrivateRoute;
