import React, { Component } from "react";

import "./App.css";
import Parent from "./component/Parent/Parent";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent />
      </div>
    );
  }
}
