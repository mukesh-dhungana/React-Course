import React from "react";
import "./modal.css";

function Modal({ selectedJoke, handleShowModal }) {
  const { punchline } = selectedJoke;
  return (
    <div className="modal">
      <p>
        <b>PunchLine:</b>
      </p>
      <p>{punchline}</p>
      <button type="button" onClick={handleShowModal}>
        Close
      </button>
    </div>
  );
}

export default Modal;
