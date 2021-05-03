import "./loader.css";
import React from "react";

const Loader = () => {
  return (
    <div className="spinnerContianer">
      <div class="spinner">
        <div class="spinner-text">Loading</div>
        <div class="spinner-sector spinner-sector-red"></div>
        <div class="spinner-sector spinner-sector-blue"></div>
        <div class="spinner-sector spinner-sector-green"></div>
      </div>
    </div>
  );
};

export default Loader;
