import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

function Book() {
  const [books] = useContext(BookContext);
  return (
    <div>
      <h5>Books</h5>
      <ul>
        {books?.Books?.map(({ id, name, genre }) => (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Genre: {genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Book;
