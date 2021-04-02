import React, { createContext } from "react";

export const MyContext = createContext();
function Provider(props) {
  const [books, setBooks] = React.useState([
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
  ]);
  return (
    <MyContext.Provider value={{ books, setBooks }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default Provider;
