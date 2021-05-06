import React from "react";

let style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

// banks.length ? style = {
//   display: "flex",
//   "flex-direction": "column",
//   justifyContent: "center",
//   alignItems: "center"
// } : style = {
//   // 
// }

function AssignmentOne() {
  const banks = [
    { id: 1, name: "Nabil_Bank" },
    { id: 2, name: "Nepal_Investment_Bank" },
    { id: 3, name: "Global_IME" },
    { id: 4, name: "NIC_ASIA" },
    { id: 5, name: "PRABHU" },
  ];

  return (
    <div style = {style}>
      {banks.map((bank) => (
        <h1 key = {bank.id}>{bank.name.replace(/[_]/g, " ")}</h1>
      ))}
    </div>
  );
}

export default AssignmentOne;
