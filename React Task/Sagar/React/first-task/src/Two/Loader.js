import React, { Component } from "react";
import "./css/loader.css";

export class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;
