import React, { Component } from "react";

import "./App.css";
import ClassProp from "./component/ClassProp";
import FunctionProps from "./component/FunctionProps";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassProp />
        <FunctionProps />
      </div>
    );
  }
}
