import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(false);
  let handleSubmit = () => setData(!data);
  let css = {
    margin: "20px",
    height: "60px",
    width: "150px",
    background: "black",
    color: "white",
    cursor: "pointer",
    borderRadius: "15px",
    outline: "none",
  };
  return (
    <div className="App">
      <h1>Hello React</h1>
      <div>
        <button style={css} onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {data ? (
        <img
          src="http://www.funnycatsite.com/pictures/Jumping_For_Big_Joy.jpg"
          alt="Cat"
        />
      ) : (
        <h2>No images</h2>
      )}
    </div>
  );
}

export default App;
