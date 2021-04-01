import React from "react";
import { Button, TextField } from "@material-ui/core";

const EditPass = ({ password, setPassword, handleClick }) => {
  return (
    <>
      <TextField
        variant="outlined"
        placeholder="Edit Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button variant="contained" color="primary" onClick={() => handleClick()}>
        Done
      </Button>
    </>
  );
};

export default EditPass;
