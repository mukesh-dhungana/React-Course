import React, { Component } from "react";
import Loading from "./component/Loading/loading";
import Card from "./component/Card/Card";
import Model from "./component/Model/Model";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      showModel: false,
      modelData: {},
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true }); //this can be done in initialization
    const getApiData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/?_limit=20"
        );
        const data = await response.json();
        this.setState({ data: data });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    };
    getApiData();
  }

  handleModelPopUp = (item) => {
    this.setState({ showModel: !this.state.showModel, modelData: item });
  };

  render() {
    let { data, isLoading, showModel, modelData } = this.state;
    let dataItem = data.length
      ? data.map((item) => (
          <Card
            data={item}
            key={item.id}
            onClick={() => this.handleModelPopUp(item)}
          />
        ))
      : "No any content to show";
    let content = isLoading ? <Loading /> : dataItem;
    console.log(this.state);
    return (
      <>
        <div className="App">
          <h3>Items List</h3>
          <div className="container">{content}</div>
        </div>
        {showModel ? (
          <Model data={modelData} onClick={() => this.handleModelPopUp({})} />
        ) : (
          ""
        )}
      </>
    );
  }
}
