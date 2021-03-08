import React, { useState } from "react";
import "./style.css";

function Model({ onClick, data }) {
  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClick && onClick}>
            &times;
          </span>
          <h4>ID: {data.id}</h4>
          <p>Title: {data.title}</p>
          <i>Completed: {data.completed.toString()}</i>
        </div>
      </div>
    </div>
  );
}

export default Model;
