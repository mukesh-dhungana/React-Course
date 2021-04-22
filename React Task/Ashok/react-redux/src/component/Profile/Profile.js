import React, { useEffect } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { connect } from "react-redux";
import { removeAllUserAction, getAllUserAction } from "../../Redux/action";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "50%",
    margin: "20px auto",
    padding: "20px",
  },
  avatar: {
    backgroundColor: "red",
  },
});

function Profile(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.allUser.length === 0) {
      props.getAllUserAction("https://jsonplaceholder.typicode.com/users");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    props.removeAllUserAction();
    props.history.push("/login");
  };
  const user = props.allUser[0];

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>

      <Paper elevation={2} className={classes.root}>
        <Typography variant="h4" align="center" color="textSecondary">
          User Profile
        </Typography>
        <Card variant="outlined" className={classes.root} raised={true}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title={user?.name}
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {user?.name}
            </Typography>
            <Typography variant="h5" component="h2">
              {user?.phone}
            </Typography>
            <Typography color="textSecondary">{user?.website}</Typography>
            <Typography variant="body2" component="p">
              {user?.address?.city}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}

const mapPropsToState = (state) => ({
  allUser: state.userReducer.allUser,
});

export default connect(mapPropsToState, {
  removeAllUserAction,
  getAllUserAction,
})(Profile);
