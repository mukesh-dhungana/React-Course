import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const HookRegister = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
    history.push("/succeed");
  };

  return (
    <div>
      <h1>Hook Form</h1>
      <form action="" onSubmit={handleSubmit(submit)}>
        <Controller
          control={control}
          name="fullName"
          rules={{
            required: "FullName Required",
          }}
          render={({ field: { name, ref, onChange } }) => (
            <TextField
              onChange={onChange}
              inputRef={ref}
              name={name}
              variant="outlined"
              label="FullName"
              error={errors?.fullName && true}
              helperText={errors?.fullName?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
            required: "Email Required",
            pattern: {
              value: emailRegex,
              message: "Invalid Email",
            },
          }}
          render={({ field: { name, ref, onChange } }) => (
            <TextField
              onChange={onChange}
              inputRef={ref}
              name={name}
              error={errors?.email && true}
              helperText={errors?.email?.message}
              variant="outlined"
              label="Email"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{
            required: "Password Required",
            minLength: { value: 8, message: "Must be greater than 8 " },
          }}
          render={({ field: { name, ref, onChange } }) => (
            <TextField
              inputRef={ref}
              onChange={onChange}
              name={name}
              label="Password"
              variant="outlined"
              error={errors?.password && true}
              helperText={errors?.password?.message}
            />
          )}
        />
        <button type="submit">Lo0gin</button>
      </form>
    </div>
  );
};

export default HookRegister;
