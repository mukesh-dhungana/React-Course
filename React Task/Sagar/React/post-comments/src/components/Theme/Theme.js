import React, { memo } from "react";
import "./theme.css";

const Theme = memo(({ toggleTheme, theme }) => {

  
  return (
    <div>
      <button
        className={theme === "light" ? "themeButton" : "themeButtonDark"}
        onClick={() => toggleTheme()}
      ></button>
    </div>
  );
});

export default Theme;
