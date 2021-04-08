import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: "10%",
    marginLeft: "43%",
  },
}));

function Home({ history }) {
  const classes = useStyles();
  return (
    <div className={classes.margin}>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => history.push("/register")}
      >
        Register
      </Button>
    </div>
  );
}

export default Home;
