import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {



  //** Handling Forms */
  const handleInputChange = (e) => {
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submission');
  }

  return (
    <div>
      <form class="form-register" method="post" action="#" onSubmit={handleSubmit} >
        <div class="form-register-with-email">
          <div class="form-white-background">
            <div class="form-title-row">
              <h1>Create an account</h1>
            </div>

            <div class="form-row">
              <label>
                <span>Name</span>
                <input type="text" name="name" value="" onChange={handleInputChange} />
              </label>
            </div>

            <div class="form-row">
              <label>
                <span>Email</span>
                <input type="email" name="email" value="" onChange={handleInputChange} />
              </label>
            </div>

            <div class="form-row">
              <label>
                <span>Password</span>
                <input type="password" name="password" value="" onChange={handleInputChange} />
              </label>
            </div>

            <div class="form-row">
              <label>
                <span>Confirm Password</span>
                <input type="password" name="password2" value="" onChange={handleInputChange} />
              </label>
            </div>

            <div class="form-row">
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

export default Register;
