import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { incrementCountActionCreater, changeName } from "../redux/actions";

function ActionDispatcher(props) {
  // const { count } = store.getState();
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.countReducer.count);
  // const name = useSelector((state) => state.countReducer.name);
  //strict comparison ===
  const { count, name } = useSelector(
    ({ countReducer: { count, name } }) => ({
      count,
      name,
    }),
    shallowEqual
  );

  // const state = useSelector((state) => state);
  console.log({ id: 0, name: "abc" } === { id: 0, name: "abc" });
  console.log(shallowEqual({ id: 0, name: "abc" }, { id: 0, name: "abc" }));
  return (
    <div>
      {/* {count} */}
      {count}
      ActionDispatcher
      <button onClick={() => dispatch(changeName("Ravi"))}>
        Dispatch action
      </button>
    </div>
  );
}

// class ActionDispatcher extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         {this.props.count}
//         ActionDispatcher
//         <button
//           onClick={() => {
//             this.props.incrementCountActionCreater();
//           }}
//         >
//           Dispatch action
//         </button>
//       </div>
//     );
//   }
// }
export default ActionDispatcher;
