import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  let [data, setData] = useState([
    { ID: 1, Name: "Nepal_Investment_Bank" },
    { ID: 2, Name: "Global_IME" },
    { ID: 3, Name: "NIC_Asia" },
    { ID: 4, Name: "Prabhu" },
  ]);
  let [btn, setBtn] = useState(false);

  let handleClick = () => {
    setBtn(!btn);
  };

  let deleteData = id => {
    let filterData = data.filter(newData => newData.ID !== id);
    setData(filterData);
  };
  let result = data.map((newData, i) => (
    <tr>
      <td key={i}>{newData.ID}</td>
      <td key={i}>{newData.Name.replaceAll("_", " ")}</td>
      <td>
        <button id="btn1">Edit</button>
      </td>
      <td>
        <button
          id="btn2"
          onClick={() => {
            if (window.confirm("Deleted")) {
              deleteData(newData.ID);
            }
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="App">
      <button id="btn" onClick={handleClick}>
        Submit
      </button>
      {btn ? (
        <table border="1">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>{result}</tbody>
        </table>
      ) : (
        <h2>No Data to Display</h2>
      )}
    </div>
  );
}

export default App;
