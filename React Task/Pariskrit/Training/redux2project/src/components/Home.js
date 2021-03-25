import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
  return (
    <div>
      <h1>Home</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/profile")}
      >
        Profile
      </Button>
    </div>
  );
}

export default Home;
