import React from "react";
import Book from "./Book";

const Books = ({ author }) => {
  return (
    <div>
      <h1>Author :</h1>{" "}
      <h5 style={{ textDecoration: "underline" }}>{author}</h5>
      <Book />
    </div>
  );
};

export default Books;
