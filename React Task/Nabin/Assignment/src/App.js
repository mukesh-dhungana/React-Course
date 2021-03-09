import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Final from './Assignment1/Final';
import AssignmentOne from './WenReact/AssignmentOne';
import Navbar from './Assignment2/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path = "/list" exact>
            <Final />
          </Route>
          <Route path = "/replaceunderscore" exact>
            <AssignmentOne />
          </Route>
          <Route path = "/navbar" exact>
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
