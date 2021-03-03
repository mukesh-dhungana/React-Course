import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./ArrayForm.css";
import List from "./List";
import NoData from "./NoData";

function ArrayForm() {
  const [users, setUser] = useState([
    { id: 1, name: "Dad", address: "Kathmandu", number: "9823192797" },
    { id: 2, name: "Nabin Shahi", address: "Lamjung", number: "9861050764" },
    { id: 3, name: "Suman Shahi", address: "Pokhara", number: "9843686192" },
  ]);

  const [data, setData] = useState({ name: "", address: "", number: "" });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if(data.name === '' || data.address === '' || data.number==='') return 
    setUser([...users, data]);
    // backend call
    setData({ name: "", address: "", number: "" });
  };

  const deleteUser = (number) => {
    setUser(users.filter((user) => user.id !== number));
    // console.log(number);
  };

  return (
    <>
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required={true}
          className="form__textField"
          id="standard-basic"
          label="Name"
          name="name"
          style={{ margin: "0 25px" }}
          onChange={(e) => handleChange(e)}
          value={data.name}
          helperText="Enter a valid name"
        />
        <TextField
          required={true}
          className="form__textField"
          id="standard-basic"
          label="Address"
          name="address"
          style={{ margin: "0 25px" }}
          onChange={(e) => handleChange(e)}
          value={data.address}
          helperText="Enter a valid address"
        />
        <TextField
          required={true}
          className="form__textField"
          id="standard-basic"
          label="Phone Number"
          style={{ margin: "0 25px" }}
          name="number"
          onChange={(e) => handleChange(e)}
          value={data.number}
          helperText="Enter a valid phone number"
        />
        <Button
          className="form__button"
          variant="contained"
          type="submit"
          color="primary"
          size="large"
        >
          Add
        </Button>
      </form>
      <div>
        {users.length ? (
          <List data={users} deleteUser={deleteUser} />
        ) : (
          <NoData />
        )}
        {/* <List data = {users}/> */}
        {/* { users && users.map(item=>(`${item.name}`))} */}
      </div>
    </>
  );
}

export default ArrayForm;
