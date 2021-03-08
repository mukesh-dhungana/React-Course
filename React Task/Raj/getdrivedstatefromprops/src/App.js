import React, { useState } from "react";
import "./App.css";
import Child from "./Child";

function Main() {
  const [state, setstate] = useState({
    name: "No Name",
    address: "No Address",
  });
  const [data, setData] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    setstate({ name: data, address: address });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          id="input1"
          type="text"
          placeholder="Enter Name"
          required
          onChange={e => setData(e.target.value)}
        />
        <input
          type="text"
          id="input2"
          required
          placeholder="Enter Address"
          onChange={e => setAddress(e.target.value)}
        />
        <input type="submit" id="input3" />
      </form>
      <Child result={state} />
    </div>
  );
}

export default Main;
