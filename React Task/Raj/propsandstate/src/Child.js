import React from "react";
import "./Child.css";

const Child = props => {
  const onClick = e => {
    e.preventDefault();
    props.handler(e.target.name.value);
  };

  return (
    <div id="top">
      <div id="form">
        <form onSubmit={onClick}>
          <input id="i" type="text" name="name" />
          <input id="b" type="submit" />
        </form>
      </div>
      <div id="main">
        {props.data.map(d => (
          <div className="d" key={d.name}>
            {d.name}
          </div>
        ))}
      </div>
    </div>
  );
};

Child.defaultProps = {
  data: [
    {
      name: "Raj",
    },
  ],
};

Child.propTypes = {
  data: function (props) {
    if (!Array.isArray(props.data)) {
      return new Error(props.data + "is not Array");
    }
  },
};
export default Child;
