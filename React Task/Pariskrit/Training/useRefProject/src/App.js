import "./App.css";
import React from "react";
import useTheme from "./useTheme";

function App() {
  const headRef = React.useRef();
  const [setTheme] = useTheme();
  const handleHighlight = () => {
    headRef.current.style.backgroundColor = "gray";
  };

  const handleHover = () => {
    const fontSize = headRef.current.style.fontSize;
    headRef.current.classList.toggle("hover");
  };
  return (
    <div className="app">
      <h1 ref={headRef} onMouseOver={handleHover} onMouseOut={handleHover}>
        HEADING
      </h1>
      <button type="button" onClick={handleHighlight}>
        highlight h1
      </button>
      <button onClick={() => setTheme()}>Toggle Theme</button>
    </div>
  );
}

export default App;
