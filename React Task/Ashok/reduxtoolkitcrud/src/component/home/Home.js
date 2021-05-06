import React from "react";
import { BookContextProvider } from "../../context/BookContext";
import AddBook from "../AddBook/AddBook";
import Book from "../Book/Book";
import Books from "../Books/Books";
import "./style.css";

function Home() {
  return (
    <div>
      <BookContextProvider>
        <div className="container">
          <Books />
          <Book />
          <AddBook />
        </div>
      </BookContextProvider>
    </div>
  );
}

export default Home;
