import React from "react";
import { Button } from "@material-ui/core";
import "./Hoc.css";

const HocComponent = Form => {
  return class extends React.Component {
    myRef = React.createRef();
    state = {
      data: "",
      result: "",
    };
    handleChange = event => {
      this.setState({ data: event.target.value });
    };
    handleSubmit = () => {
      this.setState({ result: this.state.data });
      this.myRef.current.value = "";
    };
    clear = () => {
      this.setState({ data: "", result: "" });
    };
    render() {
      return (
        <div className="container">
          <div>
            <h1 className="text-center">Title Header</h1>
          </div>
          <Form
            data={this.state.result}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            clear={this.clear}
            myRef={this.myRef}
          />
          <footer className="my-10">
            <Button
              color="primary"
              variant="outlined"
              className="footer"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </footer>
        </div>
      );
    }
  };
};

export default HocComponent;
