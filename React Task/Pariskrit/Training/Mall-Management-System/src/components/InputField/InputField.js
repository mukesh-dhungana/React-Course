import React from "react";
import "./inputfield.css";

function InputField({ placeholder = "Search" }) {
  return (
    <div className="inputdiv">
      <input type="text" placeholder={placeholder} className="inputfield" />
    </div>
  );
}

export default InputField;
