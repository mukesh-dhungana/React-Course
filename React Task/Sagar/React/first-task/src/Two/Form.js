import React, { Component } from "react";
import List from "./List";

class Form extends Component {
  state = {
    inputNameValue: "",
    inputAddressValue: "",
    name: "",
    address: "",
  };

  inputNameHandler = (e) => {
    console.log(e.target.value);
    this.setState({ inputNameValue: e.target.value });
  };
  inputAddressHandler = (e) => {
    console.log(e.target.value);
    this.setState({ inputAddressValue: e.target.value });
  };

  submitHandler = (e) => {
    this.setState({
      name: this.state.inputNameValue,
      address: this.state.inputAddressValue,
      inputNameValue: "",
      inputAddressValue: "",
    });
  };

  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.inputNameValue}
            onChange={this.inputNameHandler}
          />
          <input
            type="text"
            value={this.state.inputAddressValue}
            onChange={this.inputAddressHandler}
          />
          <button onClick={this.submitHandler}>Submit</button>
        </div>
        <div>
          <List name={this.state.name} address={this.state.address} />
        </div>
      </>
    );
  }
}

export default Form;
