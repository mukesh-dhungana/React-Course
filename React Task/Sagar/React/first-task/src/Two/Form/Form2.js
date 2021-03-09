import React, { Component } from "react";
import Data from "./Data";
// import Data2 from './Data2'

export class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      isComponentShow: false,
    };
  }

  handleRemove = (show) => {
    this.setState({ isComponentShow: show });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      fullName: e.target.name.value,
      email: e.target.address.value,
    });
    this.setState({ isComponentShow: true });
  };

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.submitHandler}>
            <input type="text" placeholder="Full Name" name="name" />
            <input type="email" placeholder="Email Address" name="address" />
            <input type="submit" value="Submit" />
          </form>
          {this.state.isComponentShow && (
            <Data {...this.state} handleRemove={this.handleRemove} />
          )}
          {/* <Data2 {...this.state} /> */}
        </div>
      </div>
    );
  }
}

export default Form2;
