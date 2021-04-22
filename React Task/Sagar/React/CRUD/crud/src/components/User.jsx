import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = ({ list, dispatch }) => {
  const [person, setPerson] = useState("");

  return (
    <div>
      <div className="input">
        <input
          type="text"
          placeholder="Add User"
          onChange={(e) => setPerson(e.target.value)}
          value={person}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD", person: person });
            setPerson("");
          }}
        >
          Add
        </button>
      </div>
      {list.map((l, i) => (
        <div key={i} className="class">
          <Link to={{ pathname: "/user/" + i, data: l }}>{l}</Link>
          <div className="buttons">
            <button onClick={() => dispatch({ type: "DELETE", id: i })}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
