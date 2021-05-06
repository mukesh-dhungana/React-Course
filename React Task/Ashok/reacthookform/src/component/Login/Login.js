import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h3>Login To surf</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: { value: true, message: "email is required" },
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "invalid email",
            },
          }}
          defaultValue=""
          render={(props) => {
            return (
              <TextField
                label="email"
                className="input-field"
                helperText={errors?.email?.message}
                error={Boolean(errors.email)}
                {...props.field}
              />
            );
          }}
        />{" "}
        <Controller
          control={control}
          name="password"
          rules={{
            required: { value: true, message: "password is required" },
            minLength: { value: 8, message: "at least 8 characters" },
            pattern: {
              value: /[!@#$%^&*()]/,
              message: "at least 1 special character",
            },
          }}
          defaultValue=""
          render={(props) => {
            return (
              <TextField
                label="password"
                className="input-field"
                helperText={errors?.password?.message}
                error={Boolean(errors.password)}
                {...props.field}
              />
            );
          }}
        />{" "}
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
export default Login;
