import {  CounterContext } from "./Context";
import { Component, useContext } from "react";

// const User = (props) => {
//   const { users, setUser } = useContext(MyContext);
//   return (
//     <>
//       {users.map((x) => (
//         <div> Username is {x.name}</div>
//       ))}
//       <button onClick={()=>setUser([...users, { id: 6, name: "Robert arrtr" }])}>
//         Add user
//       </button>
//     </>
//     // <MyContext.Consumer>
//     //   {(context) => <div> This is {context.user[0].name} component</div>}
//     // </MyContext.Consumer>
//   );
// };

//export default User;

const User = () => {
  //const context = useContext(MyContext);
  const counterContext = useContext(CounterContext);
  return (
    <>
      {/* {context.state.users.map((user) => (
        <h3>{user.name}</h3>
      ))} */}
      <div className="">{counterContext.state.counter}</div>
      {/* <button
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
      </button> */}
      <button
        onClick={() =>
          counterContext.dispatch({
            type: "Increment",
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          counterContext.dispatch({
            type: "Decrement",
          })
        }
      >
        Decrement
      </button>
    </>
  );
};

//User.contextType=MyContext;

export default User;
