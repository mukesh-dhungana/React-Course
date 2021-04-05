import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";

function AddBook() {
  const [book, setBook] = useState({ name: "", genre: "" });
  const [, setBooks] = useContext(BookContext);

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    book.name.length &&
      book.genre.length &&
      setBooks((prev) => ({
        ...prev,
        Books: [...prev.Books, { ...book, id: Date.now() }],
      }));
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="genre" onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
