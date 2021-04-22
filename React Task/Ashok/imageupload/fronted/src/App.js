import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddImageForm from "./AddImageForm/AddImageForm";
import ViewImage from "./viewImage/ViewImage";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AddImageForm} />
          <Route exact path="/images" component={ViewImage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
