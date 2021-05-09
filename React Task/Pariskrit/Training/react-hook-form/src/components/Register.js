import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@material-ui/core";

function Register() {
  const { control, handleSubmit } = useForm();
  const style = { margin: "30px" };
  const onRegister = (data) => {
    alert("successfully registered!!");
    console.log(data);
  };
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit(onRegister)}>
        <div>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: "Username is Required" },
            }}
            render={({ field, fieldState: { invalid, error } }) => (
              <TextField
                placeholder="Username"
                error={invalid}
                helperText={error?.message}
                {...field}
              />
            )}
          />
        </div>
        <div style={style}>
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
        <div style={style}>
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
        <div style={style}>
          <Controller
            control={control}
            name="address"
            defaultValue=""
            render={({ field }) => {
              return (
                <TextField label="address" className="input-field" {...field} />
              );
            }}
          />
        </div>
        <div style={style}>
          <Controller
            control={control}
            name="phone"
            defaultValue=""
            rules={{
              minLength: { value: 10, message: "at least 10 digits" },
              maxLength: { value: 10, message: "at most 10 digits" },
              pattern: { value: /^\s*$|^\d+$/, message: "Only digits allowed" },
            }}
            render={({ field, fieldState: { invalid, error } }) => {
              return (
                <TextField
                  label="phone"
                  className="input-field"
                  helperText={error?.message}
                  error={invalid}
                  {...field}
                />
              );
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

export default Register;
