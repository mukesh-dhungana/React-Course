import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/userSlice";
import Notification from "../notification/Notification";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "40%",
    margin: "30px auto",
    padding: "10px",
  },
  cardHeader: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    position: "absolute",
    top: "30%",
    left: "40%",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
  },
});
function Profile({ history }) {
  const classes = useStyles();

  const {
    userData: { username, password },
    error: { errorMessage, errorStatus },
  } = useSelector((state) => state.userReducer, shallowEqual);

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [newPassword, setNewPassword] = useState(password);

  const [openNotification, setOpenNotification] = useState(false);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNotification(false);
  };

  const handleNewpasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const onModelSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ username, newPassword }));
    setIsModelOpen(false);
    setOpenNotification(true);
  };

  return (
    <>
      <Button onClick={() => history.push("/register")} variant="contained">
        Go Back
      </Button>
      <Card className={classes.root}>
        <CardHeader
          title="Welcome to your profile"
          className={classes.cardHeader}
        />
        <CardContent>
          <Typography>
            username:
            <span>{username}</span>
          </Typography>
          <Typography>
            password: <span>{password}</span>
          </Typography>
        </CardContent>
        <Button
          onClick={() => setIsModelOpen(true)}
          color="secondary"
          variant="outlined"
        >
          Edit Profile
        </Button>
      </Card>
      {isModelOpen && (
        <Modal
          open={isModelOpen}
          onClose={() => setIsModelOpen(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <form className={classes.form} onSubmit={onModelSubmit}>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              name="password"
              value={newPassword}
              onChange={handleNewpasswordChange}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Edit password
            </Button>
          </form>
        </Modal>
      )}
      <Notification
        open={openNotification}
        handleClose={handleClose}
        message={errorMessage}
        severity={errorStatus}
      />
    </>
  );
}

export default Profile;
