import React, { Component } from "react";
import "./Child.css";
import PropTypes from "prop-types";

class Child extends Component {
  onClick = e => {
    e.preventDefault();
    this.props.handler(e.target.name.value);
  };
  render() {
    return (
      <div id="top">
        <div id="form">
          <form onSubmit={this.onClick}>
            <input id="i" type="text" name="name" />
            <input id="b" type="submit" />
          </form>
        </div>
        <div id="main">
          {this.props.data.map(d => (
            <div className="d" key={d.name}>
              {d.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
Child.defaultProps = {
  data: [
    {
      name: "Raj",
    },
  ],
};

Child.propTypes = {
  data: PropTypes.array,
};
export default Child;
