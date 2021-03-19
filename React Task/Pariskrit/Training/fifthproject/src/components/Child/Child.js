import React, { Component } from "react";
import "./child.css";
class Child extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getDataFromChild(event.target.name.value);
    event.target.reset();
  }

  render() {
    const { arrayData } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>Form</h2>
          <div className="form__inputdiv">
            <label htmlFor="name">NAME:</label>
            <br />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name..."
            />
          </div>

          <button>Submit</button>
        </form>
        <ol>
          {arrayData.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

Child.defaultProps = {
  arrayData: ["surya", "rosy", "aayusaa"],
};

Child.propTypes = {
  arrayData: function (props) {
    if (!Array.isArray(props.arrayData)) {
      return new Error(props + "props not of type array");
    }
  },
};

export default Child;
