import "./App.css";
import React, { useState } from "react";
import UseReducer from "./components/UseReducer";
import Search from "./components/Search/Search";
import Theme from "./components/Theme/Theme";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = React.useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme, setTheme]);
  return (
    <div className={`App ${theme}`}>
      <div className="nav">
        <Theme theme={theme} toggleTheme={toggleTheme} />
        <Search />
      </div>
      <UseReducer theme={theme} />
    </div>
  );
}

export default App;
