import React from "react";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  fullname: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(15),
  confPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null]),
});

const SignUp = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = () => {
    history.push("/login");
  };

  const form = () => {
    return (
      <>
        <h2 className="text-center">Create an Account</h2>
        <form className="mt-4" onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label htmlFor="name">Enter Full Name</label>
            <input
              className="form-control"
              {...register("fullname")}
              placeholder="Full Name"
            />
            {errors.fullname && (
              <p className="text-danger">{errors.fullname.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
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
              {...register("password")}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
              className="form-control"
              {...register("confPassword")}
              placeholder="confPassword"
            />
            {errors.confPassword && (
              <p className="text-danger">"Password Do Not Match"</p>
            )}
          </div>
          <input type="submit" className="btn btn-primary" value="Sign Up" />
        </form>
      </>
    );
  };

  return <div id="main">{form()}</div>;
};

export default SignUp;
