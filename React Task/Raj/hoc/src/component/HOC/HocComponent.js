import React from "react";
import { Button } from "@material-ui/core";
import Layout from "../Form/Layout";
import "./Hoc.css";

const HocComponent = Form => {
  return class extends React.Component {
    state = {
      data: "",
      result: "",
    };
    handleChange = event => {
      this.setState({ data: event.target.value });
    };
    handleSubmit = () => {
      this.setState({ result: this.state.data });
      this.setState({ data: "" });
    };
    clear = () => {
      this.setState({ data: "", result: "" });
    };
    forms = () => {
      return (
        <>
          <div>
            <h1 className="text-center">Title Header</h1>
          </div>
          <Form
            data={this.state.data}
            result={this.state.result}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            clear={this.clear}
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
        </>
      );
    };
    render() {
      return (
        <div>
          <Layout
            title="High Order Component"
            description="This is high Order Component"
            className="container col-md-8 offset-md-2"
          >
            {this.forms()}
          </Layout>
        </div>
      );
    }
  };
};

export default HocComponent;
