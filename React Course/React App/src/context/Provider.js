import { createContext, useState, useReducer } from "react";
import Users from "./Users";
import { MyContext } from "./Context";

const initialState = {
  users: [{ id: 1, name: "Robert" }],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "AddUser":
      return { ...state, users: [...state.users, action.payload] };
    case "EditUser":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "DeleteUser":
      return {
        ...state,
        users: state.users.filter((x) => x.id !== action.payload.id),
      };

    default:
      return state;
  }
};

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default Provider;
