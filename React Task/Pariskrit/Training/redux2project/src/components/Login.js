import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import "./login.css";
import { connect } from "react-redux";
import { checkLogin } from "../redux/actionCreators";
import { Redirect } from "react-router";

function Login(props) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = () => {
    props.checkLogin({ username: emailRef.current.value });
  };

  if (props.user) {
    return <Redirect to="/home" />;
  }

  return (
    <Card className="card">
      <CardHeader title="Login" className="card__header" />
      <CardContent>
        <form>
          <FormControl>
            <InputLabel htmlFor="component-simple">Email:</InputLabel>
            <Input id="component-simple" inputRef={emailRef} />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor="component-helper">Password</InputLabel>
            <Input
              id="component-helper"
              type="password"
              aria-describedby="component-helper-text"
              inputRef={passwordRef}
            />
            <FormHelperText id="component-helper-text">
              minimum 8 charactors
            </FormHelperText>
          </FormControl>
          {props.isError && (
            <p style={{ color: "red", fontWeight: "600" }}>
              Incorrect Email Or Password
            </p>
          )}
        </form>
      </CardContent>
      <CardActions className="card__actions">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Login
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  isError: state.isError,
});
const mapDispatchToProps = (dispatch) => {
  return {
    checkLogin: (loginData) => dispatch(checkLogin(loginData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
