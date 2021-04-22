import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import "./register.css";

function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const onSubmit = (data) => {
    // alert("form is valid");
    setTimeout(() => {
      console.log(data);
    }, 2000);
  };
  console.log("isSubmitting:", isSubmitting, isValid);

  return (
    <div className="container">
      <div className="form-container">
        <h3>Register yourself</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="username"
            defaultValue=""
            rules={{
              required: { value: true, message: "username is required" },
            }}
            render={(props) => {
              return (
                <TextField
                  label="username"
                  className="input-field"
                  {...props.field}
                  helperText={errors?.username?.message}
                  error={Boolean(errors.username)}
                />
              );
            }}
          />
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
          <Controller
            control={control}
            name="address"
            defaultValue=""
            render={(props) => {
              return (
                <TextField
                  label="address"
                  className="input-field"
                  {...props.field}
                />
              );
            }}
          />{" "}
          <Controller
            control={control}
            name="phone"
            defaultValue=""
            rules={{
              pattern: { value: /^\s*$|^\d+$/, message: "Only digits allowed" },
            }}
            render={(props) => {
              return (
                <TextField
                  label="phone"
                  className="input-field"
                  helperText={errors?.phone?.message}
                  error={Boolean(errors.phone)}
                  {...props.field}
                />
              );
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isValid && isSubmitting ? true : false}
          >
            {isValid && isSubmitting ? "processing" : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Register;
