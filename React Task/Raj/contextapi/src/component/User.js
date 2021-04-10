import React, { useContext, useState } from "react";
import cuid from "cuid";
import { myContext } from "./Provider";

export const User = () => {
  const [state, setState] = useState({
    id: cuid(),
    name: "",
    genre: "",
  });
  const context = useContext(myContext);

  const { id, name, genre } = state;
  const handleChange = (name, e) =>
    setState({
      ...state,
      [name]: e.target.value,
    });
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={e => handleChange("name", e)} />
          <input type="text" onChange={e => handleChange("genre", e)} />
          <input type="submit" />
        </form>
      </div>
      <div>
        <h3>{context.data.Author}</h3>
        {context.data.Books.map(x => (
          <p>{x.name}</p>
        ))}
      </div>
    </>
  );
};
// <myContext.Consumer>
//   {result => (
//     <div>
//       <h1>{result.data.Author}</h1>
//       {result.data.Books.map(x => (
//         <p>{x.name}</p>
//       ))}
//     </div>
//   )}
// </myContext.Consumer>
