import React, { useState } from "react";
import Child from "./Child";

function FunctionProps() {
  const [data, setData] = useState([
    { Id: 1, Name: "Nabil_Bank" },
    { Id: 2, Name: "Nepal_Investment_Bank" },
    { Id: 3, Name: "Global_IME" },
    { Id: 4, Name: "NIC_ASIA" },
    { Id: 5, Name: "PRABHU" },
  ]);

  const HandleChildFormData = (e) => {
    e.preventDefault();
    const [Id, Name] = [e.target.id.value, e.target.name.value];
    setData([...data, { Id, Name }]);
    e.target.reset();
  };
  return (
    <div>
      <div>
        <h2>FUnction Based PropTypes</h2>
        <Child data={data} formHandle={HandleChildFormData} />
      </div>
    </div>
  );
}

export default FunctionProps;
