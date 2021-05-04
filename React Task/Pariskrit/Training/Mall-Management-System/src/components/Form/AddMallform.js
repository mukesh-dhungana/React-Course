import React from "react";
import { Button, TextField } from "@material-ui/core";

function AddMallform({ mallDetails, dispatch }) {
  return (
    <div className="shopform">
      <TextField
        className="form__inputfield"
        type="text"
        label="Name Of The Mall"
        variant="outlined"
        name="title"
        value={mallDetails?.title}
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
        value={mallDetails?.address}
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
            type: "handleMallImageChange",
            name: e.target.name,
            value: e.target.files[0],
          })
        }
        fullWidth
      />
      <ol>
        {mallDetails?.image?.imageName && (
          <li>
            {mallDetails?.image?.imageName || mallDetails?.image?.image?.name}
          </li>
        )}
      </ol>
    </div>
  );
}

export default AddMallform;
