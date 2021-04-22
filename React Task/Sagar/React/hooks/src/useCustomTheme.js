import React, { useState } from "react";

const useCustomTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
    }
  };

  return toggleTheme;
};

export default useCustomTheme;
