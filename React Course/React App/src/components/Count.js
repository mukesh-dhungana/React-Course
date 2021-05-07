import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment} from '../redux/reducer'

function Count(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </div>
  );
}

export default Count;
