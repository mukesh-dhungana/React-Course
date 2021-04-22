import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./component/Form/Register";
import Login from "./component/Form/Login";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/form/register" component={Register} />
          <Route exact path="/form/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
