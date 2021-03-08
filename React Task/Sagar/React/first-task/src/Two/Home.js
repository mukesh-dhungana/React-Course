import React, { Component } from "react";
import Card from "./Card";
import Loader from "./Loader";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: null };
  }

  // async componentDidMount() {
  //   const response = await fetch("https://www.randomuser.me/api");
  //   const data = await response.json();
  //   this.setState({ data: data.results[0], loading: false });
  //   console.log(data);
  // }

  componentDidMount() {
    fetch("https://www.randomuser.me/api/?results=3").then((res) =>
      res
        .json()
        .then((data) => this.setState({ data: data.results, loading: false }))
    );
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div>
            <Card data={this.state.data} />
          </div>
        )}
      </div>
    );
  }
}

export default Home;
