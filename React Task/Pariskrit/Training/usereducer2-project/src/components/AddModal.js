import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CardHeader } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function AddModal({ dispatch, setShowModal }) {
  const [userDetails, setUserDetails] = React.useState({});
  const history = useHistory();

  return (
    <Card className="card">
      <CardHeader title="Add Users" />

      <CardContent>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="inputfield"
          name="username"
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
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
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
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
              type: "ADD_USER",
              payload: {
                id: Math.floor(Math.random() * 1000) + 10,
                ...userDetails,
              },
            });
            setShowModal(false);
            history.push("/users");
          }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}

export default AddModal;
