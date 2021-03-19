import React, { Component } from "react";
import PropTypes from "prop-types";
import "./child.css";

class Child extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.formHandle}>
          ID:
          <input type="text" name="id" placeholder="enter id" />
          Name:
          <input type="text" name="name" placeholder="enter bank name" />
          <button type="submit">Submit</button>
        </form>
        <div className="block">
          {this.props?.data?.map((item) => (
            <div key={item.Id} className="block-item">
              <p>{item.Id}</p>
              <h5>{item.Name}</h5>
            </div>
          ))}
        </div>
      </>
    );
  }
}

Child.defaultProps = {
  data: [
    { Id: 1, Name: "Nabil_Bank" },
    { Id: 2, Name: "Nepal_Investment_Bank" },
    { Id: 3, Name: "Global_IME" },
  ],
};

Child.propTypes = {
  data: function (props) {
    if (!Array.isArray(props.data)) {
      return new Error("Invalid Data ");
    }
  },
  formHandle: PropTypes.func.isRequired,
};

export default Child;
