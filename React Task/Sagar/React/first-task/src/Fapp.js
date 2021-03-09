import "./App.css";
import React, { useState } from "react";

function App() {
  const [array] = useState([
    { Id: 1, Name: "Nabil_Bank" },
    { Id: 2, Name: "Nepal_Investment_Bank" },
    { Id: 3, Name: "Global_IME" },
    { Id: 4, Name: "NIC_ASIA" },
    { Id: 5, Name: "PRABHU" },
  ]);

  const [show, setShow] = useState(false);

  const list = array.map((name) => (
    <p key={name.Id}>{name.Name.replaceAll("_", " ")}</p>
  ));

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Show</button>
      {show ? list : ""}
    </div>
  );
}

export default App;
