import React from "react";
import { BookContext } from "../../context/BookContext";

function Books() {
  console.log("i am from author");
  return (
    <BookContext.Consumer>
      {([book]) => (
        <div>
          <p>Author:{book.Author}</p>
        </div>
      )}
    </BookContext.Consumer>
  );
}

export default Books;
