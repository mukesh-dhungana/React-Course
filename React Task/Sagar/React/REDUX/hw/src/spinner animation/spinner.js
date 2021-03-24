import React from "react";
import "./style.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-text">Loading</div>
      <div className="spinner-sector spinner-sector-red"></div>
      <div className="spinner-sector spinner-sector-blue"></div>
      <div className="spinner-sector spinner-sector-green"></div>
    </div>
  );
};

export default Spinner;
