import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/home/Home";
import Profile from "./component/profile/Profile";
import Register from "./component/register/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
