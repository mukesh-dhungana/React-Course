import React from "react";
import Book from "./Book";

function Books({ authorName }) {
  return (
    <div>
      <h1 style={{ margin: "20px 0" }}>{authorName}</h1>
      <Book />
    </div>
  );
}

export default Books;
