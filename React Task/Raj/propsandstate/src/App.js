import React, { useState } from "react";
import "./App.css";
import Child from "./Child";

export const App = () => {
  const [data, setData] = useState([]);

  const handleState = val => {
    let result = {
      name: val,
    };
    setData([...data, result]);
  };

  return (
    <div>
      {data.length > 0 ? (
        <Child data={data} handler={handleState} />
      ) : (
        <Child handler={handleState} />
      )}
    </div>
  );
};
