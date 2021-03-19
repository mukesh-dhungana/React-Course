import React, { useRef } from "react";
// import useCustomTheme from "./useCustomTheme";
import ToggleButton from "./ToggleButton";

const Reference = () => {
  const input = useRef(null);

  const colorChange = () => {
    input.current.style.color = "red";
  };

  const biggerText = () => {
    input.current.style.transform = "scale(1.5)";
  };

  const originalText = () => {
    input.current.style.transform = "scale(1)";
  };

  return (
    <div>
      <ToggleButton />

      <h3
        onMouseOver={() => biggerText()}
        ref={input}
        onMouseOut={() => originalText()}
      >
        This is Header
      </h3>
      <button onClick={() => colorChange()}>Click Me</button>
    </div>
  );
};

export default Reference;
