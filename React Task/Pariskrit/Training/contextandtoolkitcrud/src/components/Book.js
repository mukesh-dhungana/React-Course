import React from "react";
import { MyContext } from "../context/Provider";

function Book() {
  const { books, setBooks } = React.useContext(MyContext);

  return (
    <div>
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
    </div>
  );
}

export default Book;
