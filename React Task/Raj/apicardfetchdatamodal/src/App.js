import React, { Component } from "react";
import "./Card.css";
import Card from "./Card";
import Spinner from "./Spinner";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      url: "http://hn.algolia.com/api/v1/search?query=react",
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(this.state.url)
      .then(data => data.json())
      .then(result => this.setState({ data: result.hits, loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    // console.log("Render App", this.state.data);
    const { data, loading } = this.state;
    return (
      <>
        <div>{loading ? <Spinner /> : <Card data={data} />}</div>
      </>
    );
  }
}
