import React from "react";
import { Button, TextField } from "@material-ui/core";

function AddMallform({ mallDetails, dispatch }) {
  return (
    <form>
      <div className="shopform">
        <TextField
          className="form__inputfield"
          type="text"
          label="Name Of The Mall"
          variant="outlined"
          name="title"
          values={mallDetails.title}
          onChange={(e) =>
            dispatch({
              type: "handleMallInputChange",
              name: e.target.name,
              value: e.target.value,
            })
          }
          fullWidth
        />
        <TextField
          className="form__inputfield"
          type="text"
          label="Address"
          variant="outlined"
          name="address"
          value={mallDetails.address}
          onChange={(e) =>
            dispatch({
              type: "handleMallInputChange",
              name: e.target.name,
              value: e.target.value,
            })
          }
          fullWidth
        />
        <TextField
          className="form__inputfield"
          type="file"
          name="image"
          onChange={(e) =>
            dispatch({
              type: "handleMallInputChange",
              name: e.target.name,
              value: e.target.files[0],
            })
          }
          fullWidth
        />
      </div>
    </form>
  );
}

export default AddMallform;
