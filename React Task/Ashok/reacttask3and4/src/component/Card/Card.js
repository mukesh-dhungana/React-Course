import React from "react";
import "./style.css";

function Card({ data, onClick }) {
  let { id, title, completed } = data;
  return (
    //()=>onClick?.() use this instead of onClick && onClick
    <div className="card" onClick={onClick && onClick}>
      <h4>ID: {id}</h4>
      <p>Title: {title}</p>
      <i>Completed: {completed.toString()}</i>
    </div>
  );
}

export default Card;
{
}
