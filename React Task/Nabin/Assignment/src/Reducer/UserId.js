import React, { useState } from "react";
import { useParams } from "react-router";

function UserId({ state, dispatch }) {
  const { id } = useParams();
  const user = state.user.find((user) => user.id === +id);
  const [name, setName] = useState(user.name);
  return (
    <div className="user">
      <h2>ID: {user.id}</h2>
      <h3>Name: {user.name}</h3>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({ type: "EDIT", payload: { ...user, name } });
        }}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UserId;
