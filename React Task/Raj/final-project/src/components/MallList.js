import React from "react";
import { Link } from "react-router-dom";

const MallList = ({ mallData }) => {
  return (
    <div className="container">
      {!mallData.length
        ? "No more data to display"
        : mallData.map(data => (
            <div key={data.id}>
              <Link to={`/malldetails/${data.id}`}>
                <h1>{data.name}</h1>
              </Link>
              <h2>{data.address}</h2>
            </div>
          ))}
    </div>
  );
};

export default MallList;
