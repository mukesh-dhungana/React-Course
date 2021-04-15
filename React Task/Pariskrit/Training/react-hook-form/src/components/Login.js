import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function Login() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    alert("successfully registered!!");
    console.log(data);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ margin: "20px" }}>
          <Controller
            name="Email"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: "Email Is Required" },
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid Email",
              },
            }}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextField
                type="text"
                error={invalid}
                helperText={error?.message}
                placeholder="Enter Email"
                {...field}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field, fieldState: { error, invalid } }) => (
              <TextField
                type="password"
                placeholder="Enter Password"
                error={invalid}
                helperText={error?.message}
                {...field}
              />
            )}
            rules={{
              required: { value: true, message: "Password Is Required" },
              minLength: {
                value: 8,
                message: "Password Must Be At Least 8 Characters",
              },
              pattern: {
                value: /[!@#$%^&*()]/,
                message: "at least 1 special character",
              },
            }}
          />
        </div>

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;
