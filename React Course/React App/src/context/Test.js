import React, { useContext } from "react";
import { MyContext } from "./Context";

function Test(props) {
  const context = useContext(MyContext);
  console.log('rendered')
  return (
    <div>
      {context.state.users.map((user) => (
        <h3>{user.name}</h3>
      ))}
      <button
        onClick={() =>
          context.dispatch({
            type: "AddUser",
            payload: { id: 2, name: "Abhinash" },
          })
        }
      >
        Add user
      </button>
      <button
        onClick={() =>
          context.dispatch({
            type: "EditUser",
            payload: { id: 1, name: "Ravi" },
          })
        }
      >
        Edit user
      </button>
      <button
        onClick={() =>
          context.dispatch({
            type: "DeleteUser",
            payload: { id: 1, name: "" },
          })
        }
      >
        Delete user
      </button>
    </div>
  );
}

export default Test;
