import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div class="spinner">
      <div class="spinner-text">Loading</div>
      <div class="spinner-sector spinner-sector-red"></div>
      <div class="spinner-sector spinner-sector-blue"></div>
      <div class="spinner-sector spinner-sector-green"></div>
    </div>
  );
};

export default Loading;
