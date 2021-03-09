import React from "react";
import "./card.css";
function Card({ joke, number, handleShowModal }) {
  return (
    <div className="card" onClick={() => handleShowModal(joke)}>
      <p>
        <b>Joke {number + 1}</b>
      </p>

      <p>{joke.setup}</p>
    </div>
  );
}

export default Card;
