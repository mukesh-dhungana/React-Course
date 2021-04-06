import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Dilog from "./Dilog";

import { del } from "./slice/slice";

const useStyles = makeStyles({
  paper: {
    margin: "auto",
    marginTop: 20,
    width: 600,
    padding: 10,
    marginBottom: 10,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const ShowData = ({ selector, dispatch, setValue, setEdit }) => {
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  const classes = useStyles();

  const modalHandler = (user) => {
    setUserData(user);
    setOpen(true);
    console.log(user);
  };

  const deleteHandler = () => {
    dispatch(del(userData));
    setOpen(false);
  };

  const editHandler = (user) => {
    setEdit(true);
    setValue({ id: user.id, name: user.name, phone: user.phone });
  };

  return (
    <div>
      {open ? (
        <Dilog
          open={open}
          setOpen={setOpen}
          deleteHandler={deleteHandler}
          userData={userData}
        />
      ) : (
        ""
      )}
      {selector &&
        selector.map((user) => (
          <Paper key={user.id} className={classes.paper}>
            <Grid className={classes.flex}>
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
                    onClick={() => modalHandler(user)}
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
