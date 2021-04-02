import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { del } from "./slice/slice";

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    marginTop: 20,
    width: 600,
    padding: 10,
    marginBottom: 10,
  },
});

const ShowData = ({ selector, dispatch, setValue, setEdit }) => {
  const classes = useStyles();

  const deleteHandler = (user) => {
    dispatch(del(user));
    console.log(user);
  };

  const editHandler = (user) => {
    setEdit(true);
    setValue({ id: user.id, name: user.name, phone: user.phone });
  };

  return (
    <div>
      {selector &&
        selector.map((user) => (
          <Paper key={user.id} className={classes.paper}>
            <Grid>
              <div>
                <Typography variant="h6">
                  <b>Name :</b> {user.name}
                </Typography>
                <Typography variant="h6">
                  <b>Phone :</b> {user.phone}
                </Typography>
              </div>
              <div className="buttons">
                <ButtonGroup>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => editHandler(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteHandler(user)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            </Grid>
          </Paper>
        ))}
    </div>
  );
};

export default ShowData;
