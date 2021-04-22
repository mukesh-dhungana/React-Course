import "./App.css";
import React, { useRef } from "react";
import { Button } from "@material-ui/core";

function App() {
  const Ref = useRef();
  const handleClick = () => {
    Ref.current.style.color = "red";
  };
  const handleSubmit = () => {
    Ref.current.style.transform = "scale(2)";
  };
  const handleChange = () => {
    Ref.current.style.transform = "scale(1)";
  };
  return (
    <div className="App">
      <Button color="primary" variant="contained" onClick={handleClick}>
        Click
      </Button>
      <h1 ref={Ref} onMouseOver={handleSubmit} onMouseOut={handleChange}>
        This is Use Ref
      </h1>
    </div>
  );
}

export default App;
