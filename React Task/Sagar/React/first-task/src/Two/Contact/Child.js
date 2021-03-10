import React, { Component } from "react";
import classes from "../css/block.module.css";
import PropTypes from "prop-types";

const Child = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.name.value !== "") {
      props.add(e.target.name.value);
    } else {
      alert("Field is Empty");
    }
    e.target.name.value = "";
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className={classes.input}
          type="text"
          placeholder="Name"
          name="name"
        />
        <input className={classes.submit} type="submit" />
      </form>
      {props.array.map((block) => {
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
};

Child.defaultProps = {
  array: ["Default Props"],
};

Child.propTypes = {
  // array: PropTypes.array,
  array: function (props) {
    if (!Array.isArray(props.array)) {
      return new Error(props.array + " is not Array");
    }
  },
};

export default Child;
