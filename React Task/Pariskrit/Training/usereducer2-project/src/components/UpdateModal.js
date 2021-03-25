import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CardHeader } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Modal({ user: { id, username, address }, dispatch }) {
  const history = useHistory();
  const [updatedData, setUpdatedData] = React.useState({
    id,
    username,
    address,
  });

  return (
    <Card className="card">
      <CardHeader title="Edit Modal" />
      <CardContent>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="inputfield"
          name="username"
          defaultValue={username}
          onChange={(e) =>
            setUpdatedData({
              ...updatedData,
              [e.target.name]: e.target.value,
            })
          }
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          name="address"
          defaultValue={address}
          onChange={(e) =>
            setUpdatedData({
              ...updatedData,
              [e.target.name]: e.target.value,
            })
          }
        />
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          className="editbutton"
          onClick={() => {
            dispatch({
              type: "UPDATE_USER",
              payload: updatedData,
            });
            history.push("/allUsers");
          }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}

export default Modal;
