import "./App.css";
import React, { useReducer } from "react";

const iState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };
    default:
      break;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, iState);
  return (
    <div className="App">
      <h1> {data.count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>

      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
}

export default App;
