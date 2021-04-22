import React, { useState } from "react";
import Book from "./Book";
import { BookProvider } from "./bookContext";

function Books() {
  const [book, setBook] = useState({
    author: "Sharon Lechter",
    books: [
      {
        id: 1,
        name: "The Good Old Days",
        genre: "Drama",
      },
      {
        id: 2,
        name: "	A Dog's Way Home",
        genre: "Comedy",
      },
      {
        id: 3,
        name: "The Star Outside My Window",
        genre: "Thriller",
      },
      {
        id: 4,
        name: "Nowhere Wild",
        genre: "Adventure",
      },
      {
        id: 5,
        name: "Time Travelling with a Hamster",
        genre: "Sci-fi",
      },
    ],
  });
  return (
    <div>
      <h1>{book.author}</h1>
      <BookProvider value={book}>
        <Book />
      </BookProvider>
    </div>
  );
}

export default Books;
