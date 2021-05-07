import React from "react";
import "./style.css";

function ViewImage() {
  console.log(localStorage.getItem("images"));
  return (
    <div className="image-container">
      {localStorage.getItem("images") &&
        JSON.parse(localStorage.getItem("images")).map((item, i) => (
          <div className="images" key={i}>
            <img src={`http://localhost:8000/image/${item}`} alt="images" />
            <p>{item}</p>
          </div>
        ))}
    </div>
  );
}

export default ViewImage;
