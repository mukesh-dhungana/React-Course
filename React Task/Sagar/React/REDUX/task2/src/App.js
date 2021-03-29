import "./App.css";
import React, { useState } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Login from "./components/Login";
import HomeContainer from "./container/HomeContainer";
import ProfileContainer from "./container/ProfileContainer";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  console.log("object");

  return (
    <div className="App">
      <Switch>
        <Route path="/login" render={() => <Login setIsAuth={setIsAuth} />} />
        {isAuth ? (
          <>
            <Route path="/home" component={HomeContainer} />{" "}
            <Route path="/profile" component={ProfileContainer} />{" "}
          </>
        ) : (
          ""
        )}
        {/* {isAuth ?  : ""} */}

        <Redirect exact from="/" to="/login" />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;

const Error = () => {
  return (
    <div>
      Incorrect Path <Link to="/">Go To HOMEPAGE</Link>
    </div>
  );
};
