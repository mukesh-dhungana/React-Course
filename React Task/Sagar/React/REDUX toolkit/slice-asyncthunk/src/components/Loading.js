import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="spinner">
      <div className="spinner-text">Loading</div>
      <div className="spinner-sector spinner-sector-red"></div>
      <div className="spinner-sector spinner-sector-blue"></div>
      <div className="spinner-sector spinner-sector-green"></div>
    </div>
  );
};

export default Loading;
