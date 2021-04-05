import React, { createContext, useState } from "react";

export const BookContext = createContext();

export function BookContextProvider(props) {
  const [Books, setBooks] = useState({
    Author: "Sharon Lechter",
    Books: [
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
    <BookContext.Provider value={[Books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
}
