import React from "react";
import Display from "../Display/Display";
import "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      user: {
        name: e.target.name.value,
        address: e.target.address.value,
      },
    });
    e.target.reset();
  };

  render() {
    return (
      <div className="form">
        <h2>Form</h2>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Enter Name" name="name" />
          <br />
          <input type="text" placeholder="Enter Address" name="address" />
          <br />
          <button type="submit">Submit</button>
        </form>
        <Display user={this.state.user} />
      </div>
    );
  }
}

export default Form;
