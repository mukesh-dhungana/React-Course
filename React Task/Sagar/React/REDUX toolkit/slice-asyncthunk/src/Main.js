import React from "react";
import App from "./App";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          exact
          path="/register"
          render={() => <Register setIsAuth={setIsAuth} />}
        />
        {isAuth ? (
          <Route exact path="/profile" component={Profile} />
        ) : (
          <Redirect to="/register" />
        )}
      </Switch>
    </div>
  );
};

export default Main;
