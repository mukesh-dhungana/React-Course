import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/photoReducerSlice";

function AddUser() {
  const [userInfo, setUserinfo] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserinfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, street, lat, lng, phone, name } = userInfo;
    console.log(userInfo);
    dispatch(
      addUser({
        id: Date.now(),
        username,
        address: {
          street,
          geo: {
            lat,
            lng,
          },
        },
        phone,
        company: {
          name,
        },
      })
    );
    e.target.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <h4>Add your profiile</h4>
        Username:
        <input type="text" onChange={handleChange} name="username" />
        Street:
        <input type="text" onChange={handleChange} name="street" />
        Latitude:
        <input type="text" onChange={handleChange} name="lat" />
        Longitude:
        <input type="text" onChange={handleChange} name="lng" />
        Phone: <input type="text" onChange={handleChange} name="phone" />
        Company:
        <input type="text" onChange={handleChange} name="name" />
        <button type="submit">ADD user</button>
      </form>
    </div>
  );
}

export default AddUser;
