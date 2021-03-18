import React from "react";
import useCustomTheme from "./useCustomTheme";

const ToggleButton = () => {
  const toggleTheme = useCustomTheme();
  return (
    <div>
      <button className="themeButton" onClick={() => toggleTheme()}>
        Toggle
      </button>
    </div>
  );
};

export default ToggleButton;
