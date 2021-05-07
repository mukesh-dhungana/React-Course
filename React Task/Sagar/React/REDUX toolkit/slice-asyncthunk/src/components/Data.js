import React from "react";

const Data = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((d) => (
        <p key={d.id}>{d.name.first}</p>
      ))}
    </div>
  );
};

export default Data;
