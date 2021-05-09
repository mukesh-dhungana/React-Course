import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, logout } from "./configSlice";

export const Profile = () => {
  const [state, setState] = useState({
    inputName: "",
    inputPass: "",
  });
  const dispatch = useDispatch();

  const select = useSelector(state => state.data);

  const { inputName, inputPass } = state;
  const { name, password } = select;

  const EditPassword = (ename, epass) =>
    setState({
      inputName: ename,
      inputPass: epass,
    });

  const handleChange = (name, e) => {
    setState({ [name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editUser({ inputName, inputPass }));
    setState({ inputName: "", inputPass: "" });
  };
  return (
    <>
      <span>Hello,{name}..</span>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <form onSubmit={handleSubmit}>
        <input
          input="text"
          onChange={e => handleChange("inputName", e)}
          value={inputName}
        />
        <input
          input="text"
          onChange={e => handleChange("inputPass", e)}
          value={inputPass}
        />
        <input type="submit" />
      </form>
      <div>
        {password}
        <button onClick={() => EditPassword(name, password)}>Edit</button>
      </div>
    </>
  );
};

// const dispatch = useDispatch();
// const [data, setData] = useState({
//   name: "",
//   password: "",
// });

// const { name, password } = data;

// const select = useSelector(state => state.data);

// const handlechange = e => {
//   setData({ ...data, password: e.target.value });
// };
// const form = () => (
//   <div>
//     <form onSubmit={editData}>
//       <input
//         type="text"
//         value={password}
//         onChange={e => handlechange(e)}
//         required
//       />
//       <input type="submit" />
//     </form>
//   </div>
// );

// const editData = e => {
//   e.preventDefault();
//   dispatch(edit({ name, password }));
//   setData({ password: "" });
// };

// const mapping = () =>
//   select.map(x => (
//     <div>
//       <p>{x.name}</p>
//       <h2>
//         {x.password}
//         <button onClick={() => handleClick(x)}>Edit</button>
//       </h2>
//     </div>
//   ));

// const handleClick = value => {
//   setData({ ...data, name: value.name, password: value.password });
// };
