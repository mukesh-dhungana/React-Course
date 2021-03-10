import React, { Component } from "react";
import classes from "../css/block.module.css";
import PropTypes from "prop-types";

export class Child extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    if (e.target.name.value !== "") {
      this.props.add(e.target.name.value);
    } else {
      alert("Field is Empty");
    }
    e.target.name.value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            className={classes.input}
            type="text"
            placeholder="Name"
            name="name"
          />
          <input className={classes.submit} type="submit" />
        </form>
        {this.props.array.map((block) => {
          return (
            <div key={block + Math.random()} className={classes.Container}>
              <div className={classes.wrapper}>
                <p>{block}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

Child.defaultProps = {
  array: ["Default Props"],
};

Child.propTypes = {
  array: PropTypes.array,
};

export default Child;
