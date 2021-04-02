import React, { useContext } from "react";
import { books } from "../../App";

const Book = () => {
  const booksDetail = useContext(books);
  return (
    <div>
      {booksDetail.Books.map((book) => (
        <div key={book.id}>
          {book.id}
          <div>
            {" "}
            <b>{book.name}</b>({book.genre})
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
