import React from "react";

const Detail = ({ list }) => {
  const result = list.map((name) => (
    <p key={name.Id}>{name.Name.replaceAll("_", " ")}</p>
  ));
  return <div>{result}</div>;
};

export default Detail;
