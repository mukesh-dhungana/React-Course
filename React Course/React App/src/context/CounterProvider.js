import React, { useReducer } from "react";
import { CounterContext } from "./Context";

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { counter: state.counter + 1 };
    case "Decrement":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};
function CounterProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
