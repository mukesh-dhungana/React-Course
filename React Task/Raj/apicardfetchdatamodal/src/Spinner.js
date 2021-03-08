import React from "react";
import "./Spinner.css";

function Spinner(props) {
  return (
    <>
      <div>
        <div className="loading-spinner"></div>
      </div>
      <div className="loading-dot">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
        <div className="bounce4"></div>
      </div>
    </>
  );
}

export default Spinner;
