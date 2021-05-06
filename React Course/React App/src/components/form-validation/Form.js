import React, { Component } from "react";
import { validateFields, validateForm, checkError } from "./formValidator";

class Form extends Component {
  state = {
    formState: {
      fullName: "",
      email: "",
      password: "",
    },
    errors: {},
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    // debugger
    // const errors = validateFields({ [name]: value });
    this.setState((state) => ({
      ...state,
      formState: {
        ...state.formState,
        [name]: value,
      },
      errors: {
        ...state.errors,
        // [name]: errors[name],
      },
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password } = this.state.formState;
    const errors = validateForm({ fullName, email, password });
    console.log("Errors", errors);
    if (checkError(errors)) {
      console.log("valid form");
    } else {
      console.error("Invalid form");
    }
    this.setState({ errors });
  };

  //

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id=""
            onChange={this.handleChange}
            validator={["required", "email"]}
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id=""
            onChange={this.handleChange}
            validator={["email"]}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id=""
            onChange={this.handleChange}
            validator={["password"]}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
