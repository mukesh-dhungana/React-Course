import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementAction,
  getUserAction,
  asyncActioncreater,
} from "../redux/actions";
import { increment, getUsers } from "../redux/reducer";

function ActionDispatcher(props) {
  // const { count } = store.getState();
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.countReducer.count);
  // const name = useSelector((state) => state.countReducer.name);
  //strict comparison ===
  const { count, userCount } = useSelector(
    (state) => state.countReducer
  );
  const { users,isloading} = useSelector((state) => state.reducer);

  return (
    <div>
      {isloading && <div>Loading...</div>}
      {/* {count} */}
      {count}
      {userCount}
      {JSON.stringify(users)}
      ActionDispatcher
      <button onClick={() => dispatch(getUserAction())}>
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
