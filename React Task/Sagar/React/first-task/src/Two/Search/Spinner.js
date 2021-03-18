import React, { Component } from "react";
import "./Spinner.css";

export class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="spinner-text">Loading</div>
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>
    );
  }
}

export default Spinner;
