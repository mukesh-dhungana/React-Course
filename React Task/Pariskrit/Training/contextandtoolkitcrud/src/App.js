import React from "react";
import "./App.css";
import Books from "./components/Books";
import Provider from "./context/Provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todolists from "./components/Todolists";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Provider>
              <Books authorName="Sharon Lechter" />
            </Provider>
          </Route>
          <Route path="/crud" component={Todolists} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
