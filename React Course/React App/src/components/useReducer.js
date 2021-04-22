import { useReducer } from "react";

const initialState = {
  count: 0,
 };
const initialzer = (init) => {
  return { count: init.count };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      break;
  }
};

function UseReducer(props) {
  const [state, dispatch] = useReducer(reducer, initialState, initialzer);
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default UseReducer;
