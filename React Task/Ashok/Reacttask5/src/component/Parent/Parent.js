import React, { Component } from "react";
import Child from "../Child/Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", address: "" };
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { email, address } = e.target;
    this.setState({ email: email.value, address: address.value });
    e.target.reset();
  };
  render() {
    let { email, address } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          Email:
          <input type="text" name="email" required placeholder="Enter email" />
          Address:
          <input
            type="text"
            name="address"
            required
            placeholder="Enter address"
          />
          <button type="submit">Submit</button>
        </form>
        <table>
          <thead>
            <th>S.N</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </thead>
          <Child email={email} address={address} />
        </table>
      </div>
    );
  }
}

export default Parent;
