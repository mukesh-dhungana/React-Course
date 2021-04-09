import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import "./Register.css";

import { registerUsers } from "../../reducers/UsersSlice";
import ErrorBlock from "./Error";
import { useForm } from "react-hook-form";

const Register = props => {
  //***FOR REDUCERS****/
  const dispatch = useDispatch();

  //** Constants for Handling FORM DATA */
  const [userInfo, setUserInfo] = useState();

  //***Handling Errors Block***/
  const [showError, setShowError] = useState(false);
  const [checkPasswordError, setCheckPasswordError] = useState(false);

  //** Form VALIDATION WITH USEFORM-Hook */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //** Handling Forms */
  // const handleInputChange = e => {
  //   // console.log(e.target.value);
  //   setUserInfo(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const handleFormSubmit = data => {
    // e.preventDefault();
    // console.log(e.target.fullName);
    // if (e.target.password.value !== e.target.password2.value) {
    //   console.log("Password not matched");
    //   setCheckPasswordError(true);
    //   setTimeout(() => {
    //     setCheckPasswordError(false);
    //   }, 3000);
    //   return;
    // }

    // if (
    //   e.target.fullName.value === "" ||
    //   e.target.email.value === "" ||
    //   e.target.password.value === "" ||
    //   e.target.password2.value === ""
    // ) {
    //   console.log("Enter Data");
    //   setShowError(true);
    //   setTimeout(() => {
    //     setShowError(false);
    //   }, 3000);
    //   return;
    // }

    // if (typeof userInfo === "undefined") {
    //   return;
    // }
    console.log("Form Submission", data);
    const registeredUser = {
      id: Date.now(),
      ...data,
    };
    addUser(registeredUser);
    dispatch(registerUsers(registeredUser));
    props.history.push("/login");
  };

  const addUser = async registeredUser => {
    const res = await fetch("http://localhost:5001/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(registeredUser),
    });
    const data = await res.json();
    return data;
  };

  const passwordMatch = value => {
    console.log(value);
    console.log(watch("password"));

    return watch("password") !== value && "Password Mismatch!";
  };

  return (
    <div>
      <form
        className="form-register"
        method="post"
        action="#"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        <div className="form-register-with-email">
          <div className="form-white-background">
            <div className="form-title-row">
              <h1>Create an account</h1>
            </div>
            <div className="form-row">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  // name="fullName"
                  defaultValue=""
                  {...register("fullName", { required: true })}
                />
                {/* <ErrorBlock title="Please enter Name" /> */}
                {errors.fullName && <ErrorBlock title="Name is Required" />}
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  // onChange={handleInputChange}
                  {...register("email", {
                    required: {
                      value: true, message: "Email Field is Required!"
                    },
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Email must be Valid Email type!"
                    }
                  })}
                />
                {/* {errors.email && errors.email.type === "required" && (
                  <ErrorBlock title="Email is Required" />
                )} */}
                {errors.email &&  (
                  <ErrorBlock title={errors?.email?.message} />
                )}
                {/* <ErrorBlock title="Please enter valid Email" /> */}
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  defaultValue=""
                  // onChange={handleInputChange}
                  {...register("password", { required: true })}
                />
                {errors.password && <ErrorBlock title="Password is Required" />}
                {/* <ErrorBlock title="Please enter Password" /> */}
              </label>
            </div>

            <div className="form-row">
              <label>
                <span>Confirm Password</span>
                <input
                  type="password"
                  name="password2"
                  defaultValue=""
                  // onChange={handleInputChange}
                  {...register("password2", {
                    required: {
                      value: true,
                      message:"Password Field is Required!"
                    },
                    validate: passwordMatch,
                  })}
                />
               
                  {errors.password2 && <ErrorBlock title={errors?.password2?.message} />}
                
                
                {/* <ErrorBlock title="This field cannot be blank" /> */}
              </label>
            </div>

            <div className="form-row">
              <button type="submit">Register</button>
            </div>
          </div>

          <Link to="/login">
            <a href="!#" class="form-log-in-with-existing">
              Already have an account? Login here &rarr;
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Register);
