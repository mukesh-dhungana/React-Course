import React from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(15),
});

const LoginForm = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = ({ email, password }) => {
    history.push("/success");
  };

  const form = () => {
    return (
      <>
        <h2 className="text-center">Create an Account</h2>
        <form className="mt-4" onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              autoComplete="new-password"
              className="form-control"
              {...register("email")}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              className="form-control"
              autoComplete="new-password"
              {...register("password")}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </>
    );
  };

  return <div id="main">{form()}</div>;
};

export default LoginForm;
