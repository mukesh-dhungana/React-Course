import React from "react";

const style = {
  background: "white",
  border: "3px solid black",
  color: "grey",
};

const Button = ({ children, onClick, component }) => (
  <button
    onClick={onClick}
    className="button"
    style={children === component ? style : null}
  >
    {children.toUpperCase()}
  </button>
);

export default Button;
