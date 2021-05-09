import React from "react";
import { Button, TextField } from "@material-ui/core";

export const Form = ({ handleChange, handleSubmit, datas }) => {
  const form = () => (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          onChange={e => handleChange("name", e)}
          required
          label="Name"
          value={datas.name}
        />
        <TextField
          type="text"
          onChange={e => handleChange("email", e)}
          required
          label="Email"
          value={datas.email}
        />
        <TextField
          type="text"
          onChange={e => handleChange("phone", e)}
          required
          label="Phone"
          value={datas.phone}
        />
        <TextField
          type="text"
          onChange={e => handleChange("first", e)}
          required
          label="First"
          value={datas.first}
        />
        <TextField
          type="text"
          onChange={e => handleChange("second", e)}
          required
          label="Second"
          value={datas.second}
        />
        <TextField
          type="text"
          onChange={e => handleChange("third", e)}
          required
          label="Third"
          value={datas.third}
        />
        <TextField
          type="text"
          onChange={e => handleChange("fourth", e)}
          required
          label="Fourth"
          value={datas.fourth}
        />
        <Button color="default" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
  return (
    <div>
      {console.log("data", datas)}
      {form()}
    </div>
  );
};
