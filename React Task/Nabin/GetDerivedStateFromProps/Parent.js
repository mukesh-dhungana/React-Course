import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
     
    };
  }

  handleSubmit =  (e) => {
    e.preventDefault();
    this.setState({
        name:e.target.name.value,
        address:e.target.address.value,
    });
    e.target.reset();
  };

  render() {
    return (
      <div className="parent">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Click Me</button>
        </form>
        <Child data={this.state} />
      </div>
    );
  }
}

export default Parent;
