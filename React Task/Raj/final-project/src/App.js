import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import MallDetails from "./components/MallDetails";
import Signin from "./components/Signin";
import { AuthProvider } from "./components/authContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exacct path="/signin" component={Signin} />
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/malldetails/:id">
              <MallDetails />
            </PrivateRoute>
            <Route exact path="/error" component={Error} />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
