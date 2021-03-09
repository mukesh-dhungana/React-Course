import React, { Component } from "react";
import Card from "./Card";
import Loader from "./Loader";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, data: null, click: false };
  }

  // async componentDidMount() {
  //   const response = await fetch("https://www.randomuser.me/api");
  //   const data = await response.json();
  //   this.setState({ data: data.results[0], loading: false });
  //   console.log(data);
  // }

  // componentDidMount() {
  //   fetch("https://www.randomuser.me/api/?results=3").then((res) =>
  //     res
  //       .json()
  //       .then((data) => this.setState({ data: data.results, loading: false }))
  //   );
  // }

  fetchData = () => {
    this.setState({ click: true });
    this.setState({ loading: true });
    fetch("https://www.randomuser.me/api/?results=3").then((res) =>
      res
        .json()
        .then((data) => this.setState({ data: data.results, loading: false }))
    );
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <button onClick={this.fetchData}>Fetch Data</button>
        {this.state.click ? (
          this.state.loading ? (
            <Loader />
          ) : (
            <div>
              <Card data={this.state.data} />
            </div>
          )
        ) : null}
      </div>
    );
  }
}

export default Home;
