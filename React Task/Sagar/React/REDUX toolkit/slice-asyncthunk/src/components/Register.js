import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/Textfield";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { add } from "../slice/slice";
import { useHistory } from "react-router-dom";

const Register = ({ setIsAuth }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [value, setValue] = React.useState({
    name: "",
    pass: "",
  });

  const { name, pass } = value;

  const handleChange = (name, e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const handleSubmit = () => {
    if (name !== "" && pass.length > 4) {
      dispatch(add({ name, pass }));
      setIsAuth(true);
      history.push("/profile");
    }
  };

  return (
    <Container>
      <form action="">
        <div>
          <TextField
            variant="outlined"
            label="Username"
            type="text"
            onChange={(e) => handleChange("name", e)}
            value={name}
          />
        </div>
        <div>
          <TextField
            variant="outlined"
            label="Password"
            type="text"
            onChange={(e) => handleChange("pass", e)}
            value={pass}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Register;
