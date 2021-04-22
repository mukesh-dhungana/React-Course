import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
